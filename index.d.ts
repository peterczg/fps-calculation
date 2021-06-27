declare module "fps-calculation" {
  /** Calculate the fps or function call per sec. */
  export function calcFrames(
    cb: Function,
    context: any,
    enableConsole: boolean = false
  ): any;
}
