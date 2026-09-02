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
        "interactive_response_message_native_flow_killswitch",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_buttons_response_prop_removal_killswitch",
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
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "im_a2ui_reply_quote_enabled",
      );
    }
    ((l.interactiveNativeFlowMessagesEnabled = e),
      (l.interactiveNativeFlowResponseMessagesEnabled = s),
      (l.shouldUseLegacyButtonsResponse = u),
      (l.shopsInteractiveMessageEnabled = c),
      (l.isBloksWidgetEnabled = d),
      (l.isA2UIReplyQuoteEnabled = m));
  },
  98,
);
