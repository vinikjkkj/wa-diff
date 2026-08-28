__d(
  "getVideo64BitAtomLength",
  ["Int64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = e.getUint32(t + o + n),
        i = e.getUint32(t + n + o + o);
      return new (r("Int64"))(i, a).toNumber();
    }
    l.default = e;
  },
  98,
);
