__d(
  "WAWebGroupHistoryStoredHintGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "group_history_cta_stored_window_enabled",
      );
    }
    l.isGroupHistoryStoredHintEnabled = e;
  },
  98,
);
