/**
 * Calculate the fps or function call per sec.
 * @param {function} cb
 * @param {object} context
 * @param {boolean} enableConsole log the current FPS
 */
export function calcFrames(cb, context, enableConsole = false) {
  let prevFrames = 0;
  let frames = 0;
  let start = performance.now();
  return function () {
    cb.call(context || this);
    if (performance.now() - start <= 1000) {
      frames++;
    } else {
      enableConsole && console.log("current fps：" + frames);
      // tag
      cb.__frames__ = frames;
      // change hook
      prevFrames &&
        frames !== prevFrames &&
        cb.__onFPSChange__ &&
        cb.__onFPSChange__(frames, prevFrames);
      // refresh hook
      cb.__onRefresh__ && cb.__onRefresh__();
      // reset
      frames = 0;
      start = performance.now();
    }
  };
}
