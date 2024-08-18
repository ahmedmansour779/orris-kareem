declare module "aos" {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  namespace Aos {
    function init(options?: AosOptions): void;
    function refresh(): void;
    function refreshHard(): void;
  }

  export = Aos;
}
