__d(
  "WAWebPathfinderNavigation",
  [
    "WAWebPathfinderLogger",
    "WAWebPathfinderUserTouch",
    "WAWebTimeSpentLoggingNavigation",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      t === "background"
        ? o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "BACKGROUND",
            screenName: e,
            timestampMs: n,
          })
        : (o("WAWebPathfinderUserTouch").updateCurrentScreenName(t),
          o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "FOREGROUND",
            screenName: t,
            timestampMs: n,
          }));
    }
    function s(t, n) {
      var r = Date.now();
      if (n === "background" || t === "background") {
        e(t, n, r);
        return;
      }
      (o("WAWebPathfinderUserTouch").updateCurrentScreenName(n),
        o("WAWebPathfinderLogger").emitPathfinderEvent({
          eventType: "SCREEN_CHANGED",
          screenName: t,
          destinationName: n,
          timestampMs: r,
        }));
    }
    function u() {
      return o("WAWebTimeSpentLoggingNavigation").addNavigationListener(s);
    }
    l.initNavigationListener = u;
  },
  98,
);
