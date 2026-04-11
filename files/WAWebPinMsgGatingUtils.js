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
        "pinned_messages_m1_sender",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("pinned_messages_m2");
    }
    function c() {
      return u()
        ? o("WAWebABProps").getABPropConfigValue("pinned_messages_m2_pin_max")
        : 1;
    }
    ((l.isPinnedMessagesM1ReceiverEnabled = e),
      (l.isPinnedMessagesM1SenderEnabled = s),
      (l.isPinnedMessagesM2Enabled = u),
      (l.getMaxPins = c));
  },
  98,
);
