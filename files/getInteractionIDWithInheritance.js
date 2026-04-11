__d(
  "getInteractionIDWithInheritance",
  ["InteractionTracingMetrics"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o,
        a =
          e == null
            ? null
            : (n = r("InteractionTracingMetrics").get(e)) == null
              ? void 0
              : n.start,
        i =
          t == null
            ? null
            : (o = r("InteractionTracingMetrics").get(t)) == null
              ? void 0
              : o.start;
      return t != null &&
        (e == null || a == null || (a != null && i != null && a < i))
        ? t
        : e;
    }
    l.default = e;
  },
  98,
);
