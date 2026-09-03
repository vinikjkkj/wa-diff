__d(
  "WAWebPinMsgGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "pinned_messages_infinite_receiver_enabled",
      );
    }
    function s() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "pinned_messages_infinite_sender_enabled",
        ) && e()
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "pinned_messages_m2_pin_max",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "pinned_message_banner_notch_animation_enabled",
      );
    }
    ((l.isPinnedMessagesInfiniteReceiverEnabled = e),
      (l.isPinnedMessagesInfiniteSenderEnabled = s),
      (l.getMaxPins = u),
      (l.isNotchIndicatorEnabled = c));
  },
  98,
);
