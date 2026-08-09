__d(
  "EBMessageRangeQueryUtils",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Math.pow(2, 48) - 1;
    function s(e) {
      var t = Number(e);
      return isNaN(t) ? e : u(t).toString();
    }
    function u(t) {
      if (t < 0) return 0;
      if (t <= e) return t;
      var n = o("WATimeUtils").millisTime() + 6e4;
      return n;
    }
    ((l.safeTimestampMsString = s), (l.safeTimestampMsNumber = u));
  },
  98,
);
