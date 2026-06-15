__d(
  "WAWebPinMsgGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "pinned_messages_m1_receiver",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "pinned_messages_m2_pin_max",
      );
    }
    ((l.isPinnedMessagesM1ReceiverEnabled = e), (l.getMaxPins = s));
  },
  98,
);
