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
    function e(e, t, n, r) {
      if (t === "background") {
        var a,
          i,
          l = o("WAWebPathfinderHeldBackScreen").getOccurrenceVerdict(
            r,
            r.realDestination,
          );
        c({
          eventType: "BACKGROUND",
          screenName: e,
          timestampMs: n,
          heldBackSurface:
            (a =
              (i = o("WAWebPathfinderHeldBackScreen").leavingVerdict(e)) != null
                ? i
                : l) != null
              ? a
              : void 0,
        });
      } else {
        var s,
          u = o("WAWebPathfinderHeldBackScreen").getOccurrenceVerdict(r, t);
        o("WAWebPathfinderScreenName").updateCurrentScreenName(t);
        var d = o("WAWebPathfinderHeldBackScreen").claimedLeavingVerdict(t);
        (d == null &&
          o("WAWebPathfinderHeldBackScreen").noteEnteredScreen(t, u),
          c({
            eventType: "FOREGROUND",
            screenName: t,
            timestampMs: n,
            heldBackSurface: (s = d != null ? d : u) != null ? s : void 0,
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
    function d(t, n, r, a) {
      var i = Date.now();
      try {
        if (n === "background" || t === "background") {
          e(t, n, i, a);
          return;
        }
        m(t, n, r, a.destinationChannelWid, i, a);
      } finally {
        o("WAWebPathfinderHeldBackScreen").settleNavigationDelivery(a);
      }
    }
    function m(e, t, n, r, a, i) {
      var l,
        s = o("WAWebPathfinderHeldBackScreen").getOccurrenceVerdict(i, t),
        u = (l = _(e, t)) != null ? l : s;
      (o("WAWebPathfinderHeldBackScreen").noteEnteredScreen(t, s),
        o("WAWebPathfinderScreenName").updateCurrentScreenName(t));
      var c =
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
        customMetadata: c,
        heldBackSurface: u,
      });
    }
    function p() {
      var e = o("WAWebTimeSpentLoggingNavigation").addNavigationEnqueueListener(
          o("WAWebPathfinderHeldBackScreen").captureNavigationStep,
        ),
        t = o("WAWebTimeSpentLoggingNavigation").addNavigationListener(d);
      return function () {
        (e(), t());
      };
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
