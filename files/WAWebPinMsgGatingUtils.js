__d(
  "WAWebPinMsgGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "pinned_messages_m2_pin_max",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "pinned_message_banner_notch_animation_enabled",
      );
    }
    ((l.getMaxPins = e), (l.isNotchIndicatorEnabled = s));
  },
  98,
);
