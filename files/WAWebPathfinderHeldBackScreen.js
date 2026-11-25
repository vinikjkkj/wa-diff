__d(
  "WAWebPathfinderHeldBackScreen",
  ["WALogger", "WAWebPathfinderHeldBackSurface"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "unknown",
      u = null,
      c = !1,
      d = [],
      m = 64,
      p = -1;
    function _(e, t) {
      var n =
          e === s
            ? o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface()
            : o("WAWebPathfinderHeldBackSurface").captureHeldBackScreen(e),
        r = n != null ? n : t,
        a = n != null;
      u = r != null ? { name: e, verdict: r, fromOpenSurface: a } : null;
    }
    function f(e, t, n, r) {
      (g(r.sequence, t),
        r.realDestination !== t && g(r.sequence, r.realDestination));
    }
    function g(e, t) {
      var n = C(t);
      if (
        (n != null && d.push({ sequence: e, screenName: t, verdict: n }),
        d.length > m)
      ) {
        var r, o;
        p = (r = (o = d.shift()) == null ? void 0 : o.sequence) != null ? r : p;
      }
    }
    function h(e, t) {
      if (e.firstSequence <= p)
        return o("WAWebPathfinderHeldBackSurface").HeldBackSurface.SCREEN_LOCK;
      for (var n of d)
        if (
          n.sequence >= e.firstSequence &&
          n.sequence <= e.sequence &&
          n.screenName === t
        )
          return n.verdict;
      return o("WAWebPathfinderHeldBackSurface").getHoldEndedSince(
        t === s ? null : t,
        e.firstNavigatedAtPerfMs,
      );
    }
    function y(e) {
      var t = d.findIndex(function (t) {
        return t.sequence > e.sequence;
      });
      d.splice(0, t === -1 ? d.length : t);
    }
    function C(t) {
      try {
        return t === s
          ? o("WAWebPathfinderHeldBackSurface").captureHeldBackSurface()
          : o("WAWebPathfinderHeldBackSurface").captureHeldBackScreen(t);
      } catch (t) {
        return (
          c ||
            ((c = !0),
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[pathfinder] held-back verdict unreadable at a step: ",
                    "",
                  ])),
                t instanceof Error ? t.name : typeof t,
              )
              .sendLogs("pathfinder-step-verdict-unreadable")),
          o("WAWebPathfinderHeldBackSurface").HeldBackSurface.SCREEN_LOCK
        );
      }
    }
    function b(e) {
      return u != null && u.name === e ? u.verdict : void 0;
    }
    function v(e) {
      var t;
      if (!(e == null || e === s)) {
        var n = b(e);
        return n != null &&
          ((t = u) == null ? void 0 : t.fromOpenSurface) === !0 &&
          !o("WAWebPathfinderHeldBackSurface").isScreenClaimedByOpenSurface(e)
          ? n
          : void 0;
      }
    }
    function S(e) {
      var t;
      return e === s
        ? void 0
        : (t = o("WAWebPathfinderHeldBackSurface").captureHeldBackScreen(e)) !=
            null
          ? t
          : void 0;
    }
    function R(e, t) {
      if (t != null) {
        if (e === "BACKGROUND") return b(t);
        t === s && _(t);
      }
    }
    ((l.UNNAMED_SCREEN = s),
      (l.noteEnteredScreen = _),
      (l.captureNavigationStep = f),
      (l.getOccurrenceVerdict = h),
      (l.settleNavigationDelivery = y),
      (l.leavingVerdict = b),
      (l.claimedLeavingVerdict = v),
      (l.enteringVerdict = S),
      (l.getLifecycleHeldBackVerdict = R));
  },
  98,
);
