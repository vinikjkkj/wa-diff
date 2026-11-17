__d(
  "cometVideoDashPrefetchVCHold",
  ["ErrorGuard", "clearTimeout", "performanceNow", "setTimeout", "vc-tracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 8e3,
      c = new Map(),
      d = null;
    function m() {
      (d != null && (r("clearTimeout")(d), (d = null)),
        r("vc-tracker").VisualCompletionTraceObserver.unsubscribe(f));
    }
    function p(t) {
      (e || (e = r("ErrorGuard"))).applyWithGuard(t, null, [], {
        name: "cometVideoDashPrefetchVCHold: send",
      });
    }
    function _() {
      var e = Array.from(c.values());
      (c.clear(), m(), e.forEach(p));
    }
    function f(e) {
      (e == null ? void 0 : e.interactionType) !== "INTERACTION" && _();
    }
    function g(e, t) {
      if (r("vc-tracker").getLastNavigationVCReport() != null) {
        t();
        return;
      }
      (c.size === 0 &&
        (r("vc-tracker").VisualCompletionTraceObserver.subscribe(f),
        (d = r("setTimeout")(
          _,
          Math.max(0, u - (s || (s = r("performanceNow")))()),
        ))),
        c.set(e, t));
    }
    function h(e) {
      var t = c.get(e);
      t != null && (c.delete(e), c.size === 0 && m(), p(t));
    }
    ((l.holdVideoDashPrefetchUntilVC = g),
      (l.releaseHeldVideoDashPrefetch = h));
  },
  98,
);
