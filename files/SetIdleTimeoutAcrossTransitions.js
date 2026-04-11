__d(
  "SetIdleTimeoutAcrossTransitions",
  [
    "NavigationMetrics",
    "cancelIdleCallback",
    "clearTimeout",
    "nullthrows",
    "requestIdleCallbackAcrossTransitions",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1,
      s = new Map();
    function u(t, n) {
      if (e) {
        var o = r("setTimeoutAcrossTransitions")(function () {
          var e = r("requestIdleCallbackAcrossTransitions")(function () {
            (t(), s.delete(e));
          });
          s.set(o, e);
        }, n);
        return o;
      } else return r("setTimeoutAcrossTransitions")(t, n);
    }
    function c(e) {
      (r("clearTimeout")(e),
        s.has(e) &&
          (r("cancelIdleCallback")(r("nullthrows")(s.get(e))), s.delete(e)));
    }
    (r("NavigationMetrics").addRetroactiveListener(
      r("NavigationMetrics").Events.EVENT_OCCURRED,
      function (n, r) {
        r.event === "all_pagelets_loaded" && (e = !!t.requestIdleCallback);
      },
    ),
      (l.start = u),
      (l.clear = c));
  },
  98,
);
