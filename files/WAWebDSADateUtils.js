__d(
  "WAWebDSADateUtils",
  ["fbt", "WAWebClock"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      if (e != null) return o("WAWebClock").Clock.dsaDisplayDate(Number(e));
    }
    function u(t) {
      return s._(/*BTDS*/ "{enforcement_creation_time}", [
        s._param(
          "enforcement_creation_time",
          e(t == null ? void 0 : t.toString()),
        ),
      ]);
    }
    ((l.getDSADateDisplayString = e), (l.getSectionSubtitle = u));
  },
  226,
);
