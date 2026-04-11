__d(
  "RSTClearExternalLoggingDataStoreMainThread",
  [
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTExternalLoggingDataStoreMainThread",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      o(
        "RSTExternalLoggingDataStoreMainThread",
      ).loggingDataStore.clearNextHeartbeatStore();
    }
    function s() {
      (o("RSTEventsMessageQueue").subscribe(
        o("RSTEvents").RSTEvent.HEART_BEAT,
        e,
      ),
        o("RSTEventsMessageQueue").subscribe(
          o("RSTEvents").RSTEvent.BROWSER_TAB_BACKGROUND,
          e,
        ),
        o("RSTEventsMessageQueue").subscribe(
          o("RSTEvents").RSTEvent.BROWSER_TAB_FOREGROUND,
          e,
        ));
    }
    l.registerClearExternalLoggingData = s;
  },
  98,
);
