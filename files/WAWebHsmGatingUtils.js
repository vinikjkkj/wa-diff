__d(
  "WAWebHsmGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !o("WAWebABProps").getABPropConfigValue(
        "interactive_response_message_native_flow_killswitch",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_buttons_response_prop_removal_killswitch",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("im_bloks_widget_enable");
    }
    ((l.interactiveNativeFlowResponseMessagesEnabled = e),
      (l.shouldUseLegacyButtonsResponse = s),
      (l.isBloksWidgetEnabled = u));
  },
  98,
);
