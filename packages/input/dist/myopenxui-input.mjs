import { defineComponent, openBlock, createElementBlock } from "vue";
import { hello } from "@myopenxui/shared";
const _hoisted_1 = ["value"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Input",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    function inputHandler(e) {
      const value = e.target.value;
      emit("update:modelValue", value);
      hello(value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("input", {
        class: "openx-input",
        type: "text",
        value: _ctx.modelValue,
        onInput: inputHandler
      }, null, 40, _hoisted_1);
    };
  }
});
export {
  _sfc_main as Input
};
