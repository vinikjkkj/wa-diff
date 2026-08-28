__d(
  "ZenonCallFalcoEventUtils",
  ["performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t) {
        return String(Math.trunc(t));
      },
      u = function () {
        return s((e || (e = r("performanceNow")))());
      },
      c = function (t) {
        return s(t != null ? t : 0);
      },
      d = function (t) {
        return t == null ? null : s(t != null ? t : 0);
      },
      m = function (t) {
        return t != null ? t : "";
      };
    ((l.truncateNumber = s),
      (l.performanceNowParsed = u),
      (l.nonNullIntNumber = c),
      (l.intNumberOrNull = d),
      (l.nonNullString = m));
  },
  98,
);
