__d(
  "WAWebHsmGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_message_native_flow_killswitch",
      );
    }
    function s() {
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_response_message_killswitch",
      );
    }
    function u() {
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_response_message_native_flow_killswitch",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_shop_storefront_message",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue("im_bloks_widget_enable");
    }
    ((l.interactiveNativeFlowMessagesEnabled = e),
      (l.interactiveResponseMessagesEnabled = s),
      (l.interactiveNativeFlowResponseMessagesEnabled = u),
      (l.shopsInteractiveMessageEnabled = c),
      (l.isBloksWidgetEnabled = d));
  },
  98,
);
