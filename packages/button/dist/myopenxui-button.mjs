import { defineComponent, openBlock, createElementBlock, renderSlot } from "vue";
import { hello } from "@myopenxui/shared";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    text: { default: "World" }
  },
  setup(__props) {
    const props = __props;
    function clickHandler() {
      hello(props.text);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "openx-button",
        onClick: clickHandler
      }, [
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
export {
  _sfc_main as Button
};
