__d(
  "WAFlowsVersionUtils",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 32767;
    function u(e) {
      var t = +e;
      t >= 100 || s(0, 73896);
      var n = Math.floor(t / 100),
        r = t - n * 100;
      return n + "." + r;
    }
    function c(t) {
      t.slice(1).includes(".") || s(0, 73892);
      var n = t.split("."),
        r = n[0],
        o = n[1];
      return (
        (+r == +r && +o == +o) || s(0, 73893),
        (+r >= 1 && +r < e) || s(0, 73894),
        (+o >= 0 && +o <= 99) || s(0, 73895),
        +r * 100 + +o
      );
    }
    function d(e) {
      return e == null
        ? null
        : typeof e == "number" && +e == +e
          ? +e
          : (typeof e == "string" || s(0, 73902), c(e));
    }
    ((l.intToString = u), (l.stringToInt = c), (l.convertVersion = d));
  },
  98,
);
