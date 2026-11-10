__d(
  "WAWebPathfinderNavigation",
  [
    "WAWebPathfinderChatInfo",
    "WAWebPathfinderHeldBackSurface",
    "WAWebPathfinderLogger",
    "WAWebPathfinderScreenName",
    "WAWebPathfinderUserTouch",
    "WAWebTimeSpentLoggingNavigation",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      t === "background"
        ? _({
            eventType: "BACKGROUND",
            screenName: e,
            timestampMs: n,
            heldBackSurface: d(e),
          })
        : (o("WAWebPathfinderScreenName").updateCurrentScreenName(t),
          c(t),
          _({ eventType: "FOREGROUND", screenName: t, timestampMs: n }));
    }
    var s = "unknown",
      u = null;
    function c(e) {
      var t =
        e === s
          ? o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface()
          : null;
      u = t != null ? { name: e, verdict: t } : null;
    }
    function d(e) {
      return u != null && u.name === e ? u.verdict : void 0;
    }
    var m = null,
      p = 0;
    function _(e) {
      var t =
        e.eventType === "FOREGROUND" &&
        m === "FOREGROUND" &&
        o("WAWebPathfinderHeldBackSurface").getScreenUnlockCount() !== p;
      if (t) {
        p = o("WAWebPathfinderHeldBackSurface").getScreenUnlockCount();
        return;
      }
      o("WAWebPathfinderHeldBackSurface").isHeldBackEvent(e) ||
        ((p = o("WAWebPathfinderHeldBackSurface").getScreenUnlockCount()),
        (m = e.eventType),
        o("WAWebPathfinderLogger").emitPathfinderEvent(e));
    }
    function f(t, n, r) {
      var a = Date.now();
      if (n === "background" || t === "background") {
        e(t, n, a);
        return;
      }
      var i = d(t);
      (c(n), o("WAWebPathfinderScreenName").updateCurrentScreenName(n));
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
    function g() {
      return o("WAWebTimeSpentLoggingNavigation").addNavigationListener(f);
    }
    l.initNavigationListener = g;
  },
  98,
);
