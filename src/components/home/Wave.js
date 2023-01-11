import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import dat from "dat.gui";
// @mui
// import { useTheme } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
// components
import { MotionViewport, varFade } from "../animate";

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
const BoxStyle = styled(Box)({
  position: "absolute",
  top: 0,
  left: "0",
  width: "100%",
  "& canvas": {
    width: "100%",
    height: "100vh",
    outline: "none",
    pointerEvents: "none",
  },
});
export default function Wave() {
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up("md"));
  const wave = useRef(null);

  useEffect(() => {
    class Waves {
      constructor(options) {
        this.container = options.dom;

        this.perlin = new createNoise3D();

        this.randomness = [];
        this.parameters = [];
        // this.parameters.factor = 0.027;
        // this.parameters.variation = 0.001;
        // this.parameters.amplitude = 146.5;
        // this.parameters.lines = 26;
        // this.parameters.waveColor = { r: 52, g: 52, b: 73, a: 0.2 };
        // this.parameters.shadowColor = { r: 13, g: 14, b: 76, a: 1 };
        // this.parameters.shadowBlur = 1;
        // this.parameters.lineStroke = 1;
        // this.parameters.speed = 0.005;
        this.parameters.factor = 0.045;
        this.parameters.variation = 0.0015;
        this.parameters.amplitude = 146;
        this.parameters.lines = 16;
        this.parameters.waveColor = { r: 52, g: 52, b: 73, a: 0.2 };
        this.parameters.shadowColor = { r: 13, g: 14, b: 76, a: 1 };
        this.parameters.shadowBlur = 1;
        this.parameters.lineStroke = 1;
        this.parameters.speed = 0.005;

        // this.config();
        this.setupCanvas();
        this.setSizes();
        this.setupRandomness();
        this.drawPaths();
        this.render();
        this.setupResize();
      }

      // config() {
      //   const GUI = new dat.GUI();

      //   this.debugFolder = GUI.addFolder("Waves");

      //   this.debugFolder.addColor(this.parameters, "waveColor");

      //   this.debugFolder.addColor(this.parameters, "shadowColor");

      //   this.debugFolder
      //     .add(this.parameters, "shadowBlur")
      //     .min(0)
      //     .max(50)
      //     .step(1);

      //   this.debugFolder
      //     .add(this.parameters, "lineStroke")
      //     .min(1)
      //     .max(10)
      //     .step(1);

      //   this.debugFolder
      //     .add(this.parameters, "amplitude")
      //     .min(10)
      //     .max(300)
      //     .step(0.1);

      //   this.debugFolder
      //     .add(this.parameters, "variation")
      //     .min(0.0001)
      //     .max(0.01)
      //     .step(0.0001);

      //   this.debugFolder
      //     .add(this.parameters, "lines")
      //     .min(0)
      //     .max(50)
      //     .step(1)
      //     .onChange(() => {
      //       this.setupRandomness();
      //     });

      //   this.debugFolder
      //     .add(this.parameters, "factor")
      //     .min(0.001)
      //     .max(0.5)
      //     .step(0.001)
      //     .onChange(() => {
      //       this.setupRandomness();
      //     });

      //   this.debugFolder
      //     .add(this.parameters, "speed")
      //     .min(0.001)
      //     .max(0.02)
      //     .step(0.0001);

      //   this.debugFolder.open();
      // }

      setupCanvas() {
        this.context = this.container.getContext("2d");
        this.container.width = this.width * this.pixelRatio;
        this.container.height = this.height * this.pixelRatio;
        this.context.scale(this.pixelRatio, this.pixelRatio);
      }

      setSizes() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 1.5);
        this.container.width = this.width;
        this.container.height = this.height;
      }

      setupRandomness() {
        for (
          let i = 0, rand = 0;
          i < this.parameters.lines;
          i++, rand += this.parameters.factor
        ) {
          this.randomness[i] = rand;
        }
      }

      drawPaths() {
        this.context.shadowColor =
          "rgba(" +
          this.parameters.shadowColor.r +
          ", " +
          this.parameters.shadowColor.g +
          ", " +
          this.parameters.shadowColor.b +
          "," +
          this.parameters.shadowColor.a +
          ")";
        this.context.shadowBlur = this.parameters.shadowBlur;
        this.context.lineWidth = this.parameters.lineStroke;

        for (let i = 0; i <= this.parameters.lines; i++) {
          this.context.beginPath();
          this.context.moveTo(0, this.height / 2);

          let randomY = 0;
          for (let x = 0; x <= this.width; x++) {
            randomY = this.perlin(
              x * this.parameters.variation + this.randomness[i],
              x * this.parameters.variation,
              1
            );
            this.context.lineTo(
              x,
              this.height / 2 +
                (this.parameters.amplitude + Math.random() * 0.005) * randomY
            );
          }

          this.alpha = Math.min(Math.abs(randomY) + 0.001, 0.3);
          this.context.strokeStyle =
            "rgba(" +
            this.parameters.waveColor.r +
            ", " +
            this.parameters.waveColor.g +
            ", " +
            this.parameters.waveColor.b +
            "," +
            this.alpha * 2 +
            ")";
          this.context.stroke();
          this.context.closePath();
          this.randomness[i] += this.parameters.speed;
        }
      }

      setupResize() {
        window.addEventListener("resize", this.resize.bind(this));
      }

      resize() {
        this.setSizes();
      }

      render() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.drawPaths();
        const timer = setTimeout(() => {
          window.requestAnimationFrame(this.render.bind(this));
        }, 1000 / 60);

        return () => clearTimeout(timer);
        // const timer = setTimeout(() => console.log("Initial timeout!"), 1000/60);D
        // clearTimeout(timer);
      }
    }
    new Waves({
      dom: wave.current,
    });
  }, []);

  return (
    <BoxStyle py={5}>
      <canvas ref={wave}></canvas>
    </BoxStyle>
  );
}
