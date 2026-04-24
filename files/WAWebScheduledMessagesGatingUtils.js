__d(
  "WAWebScheduledMessagesGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "scheduled_messages_sender_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "scheduled_messages_receiver_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "scheduled_messages_window_duration_max_seconds",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "scheduled_messages_window_duration_min_seconds",
      );
    }
    ((l.isScheduledMessagesSenderEnabled = e),
      (l.isScheduledMessagesReceiverEnabled = s),
      (l.getScheduledMessagesMaxDurationSeconds = u),
      (l.getScheduledMessagesMinDurationSeconds = c));
  },
  98,
);
