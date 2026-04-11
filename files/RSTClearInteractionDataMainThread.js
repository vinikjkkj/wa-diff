__d(
  "RSTClearInteractionDataMainThread",
  ["RSTEvents", "RSTEventsMessageQueue", "RSTInteractionDataMainThread"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      (o("RSTEventsMessageQueue").subscribe(
        o("RSTEvents").RSTEvent.HEART_BEAT,
        o("RSTInteractionDataMainThread").clearInteractionData,
      ),
        o("RSTEventsMessageQueue").subscribe(
          o("RSTEvents").RSTEvent.BROWSER_TAB_BACKGROUND,
          o("RSTInteractionDataMainThread").clearInteractionData,
        ),
        o("RSTEventsMessageQueue").subscribe(
          o("RSTEvents").RSTEvent.BROWSER_TAB_FOREGROUND,
          o("RSTInteractionDataMainThread").clearInteractionData,
        ));
    }
    l.registerClearInteractionData = e;
  },
  98,
);
