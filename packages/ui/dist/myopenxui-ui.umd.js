(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("@myopenxui/button"), require("@myopenxui/input"), require("@myopenxui/shared")) : typeof define === "function" && define.amd ? define(["exports", "@myopenxui/button", "@myopenxui/input", "@myopenxui/shared"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.MyOpenxuiUI = {}, global.button, global.input, global.shared));
})(this, function(exports2, button, input, shared) {
  "use strict";
  Object.defineProperty(exports2, "Button", {
    enumerable: true,
    get: () => button.Button
  });
  Object.defineProperty(exports2, "Input", {
    enumerable: true,
    get: () => input.Input
  });
  Object.keys(shared).forEach((k) => {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports2, k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => shared[k]
      });
  });
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
