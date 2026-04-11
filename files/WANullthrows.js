__d(
  "WANullthrows",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if ((t === void 0 && (t = "?"), e == null))
        throw r("err")("Unexpected null or undefined: " + t);
      return e;
    }
    l.default = e;
  },
  98,
);
