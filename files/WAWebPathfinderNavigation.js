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
      if (t === "background")
        c({
          eventType: "BACKGROUND",
          screenName: e,
          timestampMs: n,
          heldBackSurface: o("WAWebPathfinderHeldBackScreen").leavingVerdict(e),
        });
      else {
        o("WAWebPathfinderScreenName").updateCurrentScreenName(t);
        var r = o("WAWebPathfinderHeldBackScreen").claimedLeavingVerdict(t);
        (r == null && o("WAWebPathfinderHeldBackScreen").noteEnteredScreen(t),
          c({
            eventType: "FOREGROUND",
            screenName: t,
            timestampMs: n,
            heldBackSurface: r,
          }));
      }
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
    function d(t, n, r, o) {
      var a = Date.now();
      if (n === "background" || t === "background") {
        e(t, n, a);
        return;
      }
      m(t, n, r, o.destinationChannelWid, a);
    }
    function m(e, t, n, r, a) {
      var i = _(e, t);
      (o("WAWebPathfinderHeldBackScreen").noteEnteredScreen(t),
        o("WAWebPathfinderScreenName").updateCurrentScreenName(t));
      var l =
        t === n
          ? o("WAWebPathfinderChatInfo").getActiveChatInfoMetadata(n, r)
          : void 0;
      o("WAWebPathfinderLogger").emitPathfinderEvent({
        eventType: "SCREEN_CHANGED",
        screenName: e,
        destinationName: t,
        timestampMs: a,
        triggeringTestId: o(
          "WAWebPathfinderUserTouch",
        ).consumeLastTapTrackingId(),
        customMetadata: l,
        heldBackSurface: i,
      });
    }
    function p() {
      return o("WAWebTimeSpentLoggingNavigation").addNavigationListener(d);
    }
    function _(e, t) {
      var n,
        r = o("WAWebPathfinderHeldBackScreen").enteringVerdict(t);
      if (!(e === t && r == null))
        return (n = o("WAWebPathfinderHeldBackScreen").leavingVerdict(e)) !=
          null
          ? n
          : r;
    }
    l.initNavigationListener = p;
  },
  98,
);
