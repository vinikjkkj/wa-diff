__d(
  "Instant",
  [
    "invariant",
    "BinarySearch",
    "DateConsts",
    "Timezone",
    "formatDate",
    "parseISODate",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = { since: -8639977881600, until: 8639977881600 },
      u = { since: -271820, until: 275760 };
    function c() {
      return Math.floor(Date.now() / o("DateConsts").MS_PER_SEC);
    }
    function d(e, t) {
      var n = o("Timezone").getTransitions(t);
      return m(e, n);
    }
    function m(e, t) {
      var n = p(e, t);
      return n.offset;
    }
    function p(e, t) {
      var n = o("BinarySearch").greatestLowerBound(
        function (e) {
          return t[e].start;
        },
        e,
        0,
        t.length,
        function (e, t) {
          return e - t;
        },
      );
      return (
        0 <= n || s(0, 13149, e, h(e)),
        e < t[t.length - 1].start || s(0, 13150, e, h(e)),
        t[n]
      );
    }
    function _(e, t) {
      var n = o("Timezone").getTransitions(t);
      return f(e, n);
    }
    function f(e, t) {
      var n = g(e, t);
      return n.gapTransition !== void 0
        ? n.gapTransition.start
        : n.overlapTransitions !== void 0
          ? e - n.overlapTransitions[0].offset
          : (n.transition !== void 0 || s(0, 13153), e - n.transition.offset);
    }
    function g(e, t) {
      var n = o("BinarySearch").leastUpperBound(
        function (n) {
          var r = e - t[n].offset;
          return r < t[n].start
            ? 1
            : t[n].start <= r && r < t[n + 1].start
              ? 0
              : -1;
        },
        0,
        0,
        t.length - 1,
        function (e, t) {
          return e - t;
        },
      );
      n < t.length - 1 || s(0, 13151, e, h(e));
      var r = t[n],
        a = t[n + 1];
      return (
        1 <= n || r.start <= e - r.offset || s(0, 13152, e, h(e)),
        e - r.offset < r.start
          ? { gapTransition: r }
          : a.start <= e - a.offset
            ? { overlapTransitions: [r, a] }
            : { transition: r }
      );
    }
    function h(e) {
      return C(e, "Y-m-dTH:i:sZ", { skipPatternLocalization: !0 });
    }
    function y(e) {
      return Math.floor(
        r("parseISODate")(e).getTime() / o("DateConsts").MS_PER_SEC,
      );
    }
    function C(e, t, n) {
      return r("formatDate")(e, t, babelHelpers.extends({}, n, { utc: !0 }));
    }
    ((l.range = o("DateConsts").private.instantRange),
      (l.wholeYearRange = e),
      (l.wholeYearRangeInYears = u),
      (l.now = c),
      (l.getOffset = d),
      (l.getOffsetUsingTransitions = m),
      (l.getControllingTransition = p),
      (l.getParallel = _),
      (l.getParallelUsingTransitions = f),
      (l.getControllingTransitionsOfParallel = g),
      (l.toISOString = h),
      (l.fromISOString = y),
      (l.format = C));
  },
  98,
);
