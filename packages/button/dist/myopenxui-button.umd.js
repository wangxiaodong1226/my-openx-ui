(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@myopenxui/shared")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@myopenxui/shared"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.MyOpenxuiButton = {}, global.vue, global.shared));
})(this, function(exports2, vue, shared) {
  "use strict";
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Button",
    props: {
      text: { default: "World" }
    },
    setup(__props) {
      const props = __props;
      function clickHandler() {
        shared.hello(props.text);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("button", {
          class: "openx-button",
          onClick: clickHandler
        }, [
          vue.renderSlot(_ctx.$slots, "default")
        ]);
      };
    }
  });
  exports2.Button = _sfc_main;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
