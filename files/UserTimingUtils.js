__d(
  "UserTimingUtils",
  ["UserTimingUtils.shared", "performance", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t, n, a) {
      if (o("UserTimingUtils.shared").isUserTimingV3Supported()) {
        var i = t;
        if (n != null) {
          var l,
            u,
            c,
            d =
              (l = t == null || (u = t.detail) == null ? void 0 : u.devtools) !=
              null
                ? l
                : void 0;
          ((d =
            d != null
              ? d
              : { dataType: "track-entry", track: n, trackGroup: a }),
            (d.track = n));
          var m =
            (c = t == null ? void 0 : t.detail) != null ? c : { devtools: d };
          i = babelHelpers.extends({}, t, { detail: m });
        }
        try {
          ((s || (s = r("performance"))).measure(e, i), s.clearMeasures(e));
        } catch (e) {}
      }
    }
    function d(e, t, n, a) {
      if (o("UserTimingUtils.shared").isUserTimingV3Supported()) {
        var i = t;
        if (n != null) {
          var l;
          i = {
            startTime:
              (l = t == null ? void 0 : t.startTime) != null
                ? l
                : (u || (u = r("performanceNow")))(),
            detail: babelHelpers.extends({}, t, {
              devtools: { dataType: "track-entry", track: n, trackGroup: a },
            }),
          };
        }
        ((s || (s = r("performance"))).mark(e, i), s.clearMarks(e));
      }
    }
    ((l.measureStart = (e = o("UserTimingUtils.shared")).measureStart),
      (l.measureEnd = e.measureEnd),
      (l.hasMark = e.hasMark),
      (l.clearMarks = e.clearMarks),
      (l.asyncMeasure = e.asyncMeasure),
      (l.measureReactCommit = e.measureReactCommit),
      (l.measureReactPostCommit = e.measureReactPostCommit),
      (l.measureModern = c),
      (l.markModern = d));
  },
  98,
);
