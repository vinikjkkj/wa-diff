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
      return e() || s();
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "scheduled_messages_window_duration_max_seconds",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "scheduled_messages_window_duration_min_seconds",
      );
    }
    ((l.isScheduledMessagesSenderEnabled = e),
      (l.isScheduledMessagesReceiverEnabled = s),
      (l.isScheduledMessagesCleanupEnabled = u),
      (l.getScheduledMessagesMaxDurationSeconds = c),
      (l.getScheduledMessagesMinDurationSeconds = d));
  },
  98,
);
