__d(
  "WAWebPathfinderNavigation",
  [
    "WAWebPathfinderChatInfo",
    "WAWebPathfinderHeldBackScreen",
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderLogger",
    "WAWebPathfinderScreenName",
    "WAWebPathfinderUserTouch",
    "WAWebTimeSpentLoggingNavigation",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      t === "background"
        ? c({
            eventType: "BACKGROUND",
            screenName: e,
            timestampMs: n,
            heldBackSurface: o("WAWebPathfinderHeldBackScreen").leavingVerdict(
              e,
            ),
          })
        : (o("WAWebPathfinderScreenName").updateCurrentScreenName(t),
          o("WAWebPathfinderHeldBackScreen").noteEnteredScreen(t),
          c({ eventType: "FOREGROUND", screenName: t, timestampMs: n }));
    }
    var s = null,
      u = 0;
    function c(e) {
      var t =
        e.eventType === "FOREGROUND" &&
        s === "FOREGROUND" &&
        o("WAWebPathfinderHeldBackSurface").getScreenUnlockCount() !== u;
      if (t) {
        u = o("WAWebPathfinderHeldBackSurface").getScreenUnlockCount();
        return;
      }
      o("WAWebPathfinderHeldBackSurface").isHeldBackEvent(e) ||
        ((u = o("WAWebPathfinderHeldBackSurface").getScreenUnlockCount()),
        (s = e.eventType),
        o("WAWebPathfinderLogger").emitPathfinderEvent(e));
    }
    function d(t, n, r) {
      var a = Date.now();
      if (n === "background" || t === "background") {
        e(t, n, a);
        return;
      }
      var i = o("WAWebPathfinderHeldBackScreen").leavingVerdict(t);
      (o("WAWebPathfinderHeldBackScreen").noteEnteredScreen(n),
        o("WAWebPathfinderScreenName").updateCurrentScreenName(n));
      var l =
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
        customMetadata: l,
        heldBackSurface: i,
      });
    }
    function m() {
      return o("WAWebTimeSpentLoggingNavigation").addNavigationListener(d);
    }
    l.initNavigationListener = m;
  },
  98,
);
