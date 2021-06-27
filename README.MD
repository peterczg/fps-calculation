# FPS calculation

> A simple api used for calculate the FPS or function call per second when doing loop jobs.

## Installation

```shell
npm install fps-calculation --save
# or
yarn add fps-calculation
```

## Usage

```javascript
/**
 * calculate the fps or function call per sec.
 * @param {function} cb primary function
 * @param {object} context function context
 * @param {boolean} enableConsole log the current FPS
 */
function calcFrames(cb, context, enableConsole = false) {}
```

```javascript
import { calcFrames } from "fps-calculation";

// Assume this is a loop call engine
// when call the start method
// cb will be called at every requestAnimationFrame hook
const engine = {
  start(cb) {},
};

// Assume this is a loop function
function cb() {
  // ...
  // Get current FPS
  const currentFps = cb.__frames__;
  // ...
}

// Wrap the function and then return a closure
const wrapCb = calcFrames(cb, this);
engine.start(wrapCb);

// Hook function registration below is optional

// Register a callback when refreshing (end of a function call)
cb.__onRefresh__ = function () {
  console.log("End of the function call");
};

// Register a callback when FPS change (end of a function call)
cb.__onFPSChange__ = function (curFPS, prevFPS) {
  console.log("FPS changed from " + prevFPS + " to" + curFPS);
};
```

## License

[MIT](./LICENSE)
