__d(
  "HiddenTabDataUtils",
  ["vc-tracker"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      function n() {
        var n;
        return (n =
          r("vc-tracker") == null
            ? void 0
            : r("vc-tracker").VisibilityState.getHiddenSpans(e, t)) != null
          ? n
          : [];
      }
      function o() {
        var e = n();
        return e.length > 0 ? e[0] : null;
      }
      function a() {
        var e = 0,
          t = n();
        return (
          t.forEach(function (t) {
            e += t.end - t.start;
          }),
          Math.round(e)
        );
      }
      function i() {
        var e,
          n =
            (e =
              r("vc-tracker") == null
                ? void 0
                : r("vc-tracker").VisibilityState.getHiddenSpans(t - 1, t)) !=
            null
              ? e
              : [];
        return n.length > 0;
      }
      function l() {
        var e = o();
        return e != null ? Math.round(e.start) : null;
      }
      function s() {
        var e = n();
        return e.length === 0 ? null : Math.round(e[e.length - 1].start);
      }
      return {
        firstTimeHidden: l,
        isHidden: i,
        lastTimeHidden: s,
        totalHiddenTime: a,
      };
    }
    l.getHiddenTabDataForTimeInterval = e;
  },
  98,
);
