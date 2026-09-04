__d(
  "WAWebPathfinderNavigation",
  [
    "WAWebPathfinderChatInfo",
    "WAWebPathfinderLogger",
    "WAWebPathfinderScreenName",
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
        : (o("WAWebPathfinderScreenName").updateCurrentScreenName(t),
          o("WAWebPathfinderLogger").emitPathfinderEvent({
            eventType: "FOREGROUND",
            screenName: t,
            timestampMs: n,
          }));
    }
    function s(t, n, r) {
      var a = Date.now();
      if (n === "background" || t === "background") {
        e(t, n, a);
        return;
      }
      o("WAWebPathfinderScreenName").updateCurrentScreenName(n);
      var i =
        n === r
          ? o("WAWebPathfinderChatInfo").getActiveChatInfoMetadata(r)
          : void 0;
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCREEN_CHANGED",
        screenName: t,
        destinationName: n,
        timestampMs: a,
        triggeringTestId: o(
          "WAWebPathfinderUserTouch",
        ).consumeLastTapTrackingId(),
        customMetadata: i,
      });
    }
    function u() {
      return o("WAWebTimeSpentLoggingNavigation").addNavigationListener(s);
    }
    l.initNavigationListener = u;
  },
  98,
);
