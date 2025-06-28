// ContourMap.jsx
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import { createNoise2D } from "simplex-noise";

// --- PERFORMANCE OPTIMIZATION ---
// We will draw ON a high-res canvas, but calculate data on a LOW-res grid.
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;
const DATA_GRID_WIDTH = 240; // Drastically reduced from 1920
const DATA_GRID_HEIGHT = 135; // Drastically reduced from 1080

// --- CONFIGURATION CONSTANTS ---
const NOISE_FREQUENCY = 0.01; // Adjusted for the smaller grid
const GRID_SPACING = 40;
const CONTOUR_LINE_COLOR = "#FFFFFF";
const GRID_LINE_COLOR = "rgba(255, 0, 0, 0.3)";
const ANIMATION_SPEED = 0.1;
const MOVEMENT_RADIUS = 50; // Adjusted for the smaller grid

const ContourMap = () => {
  const canvasRef = useRef();
  const noise2D = createNoise2D();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Calculate the scaling factor needed to draw the small grid onto the large canvas
    const scaleX = canvas.width / DATA_GRID_WIDTH;
    const scaleY = canvas.height / DATA_GRID_HEIGHT;

    // Generate data on the LOW-res grid
    const generateData = (offsetX = 0, offsetY = 0) => {
      const values = new Float64Array(DATA_GRID_WIDTH * DATA_GRID_HEIGHT);
      for (let y = 0; y < DATA_GRID_HEIGHT; ++y) {
        for (let x = 0; x < DATA_GRID_WIDTH; ++x) {
          const i = y * DATA_GRID_WIDTH + x;
          values[i] = noise2D(
            (x + offsetX) * NOISE_FREQUENCY,
            (y + offsetY) * NOISE_FREQUENCY
          );
        }
      }
      return values;
    };

    const drawGrid = () => {
      /* ... (no changes here) ... */
    };

    const drawContours = (data) => {
      // Tell D3 the size of our LOW-res data grid
      const contourGenerator = d3
        .contours()
        .size([DATA_GRID_WIDTH, DATA_GRID_HEIGHT])
        .thresholds(15);

      const contours = contourGenerator(data);
      const pathGenerator = d3.geoPath(null, context);

      context.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();

      // --- KEY PERFORMANCE CHANGE ---
      // Scale the entire canvas context up. Now, when D3 draws a line at (10, 20),
      // it will actually be drawn at (10 * scaleX, 20 * scaleY) on the big canvas.
      context.save();
      context.scale(scaleX, scaleY);

      context.lineWidth = 1.5 / scaleX; // Scale line width down to compensate
      context.strokeStyle = CONTOUR_LINE_COLOR;

      contours.forEach((d) => {
        context.beginPath();
        pathGenerator(d);
        context.stroke();
      });

      context.restore(); // Reset the scale transform for the next frame
    };

    let animationFrameId;
    const renderLoop = (time) => {
      const timeInSeconds = time * 0.001;
      const offsetX =
        Math.cos(timeInSeconds * ANIMATION_SPEED) * MOVEMENT_RADIUS;
      const offsetY =
        Math.sin(timeInSeconds * ANIMATION_SPEED) * MOVEMENT_RADIUS;

      const data = generateData(offsetX, offsetY);
      drawContours(data);

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop(0);

    return () => cancelAnimationFrame(animationFrameId);
  }, [noise2D]);

  return (
    <canvas
      ref={canvasRef}
      width={CANVAS_WIDTH}
      height={CANVAS_HEIGHT}
      style={{
        width: "100%",
        height: "auto",
        background: "#121212",
        display: "block",
      }}
    />
  );
};

export default ContourMap;
