__d(
  "WACyrb53Hash",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = 0);
      for (
        var n = 3735928559 ^ t, r = 1103547991 ^ t, o = 0, a;
        o < e.length;
        o++
      )
        ((a = e.charCodeAt(o)),
          (n = Math.imul(n ^ a, 2654435761)),
          (r = Math.imul(r ^ a, 1597334677)));
      return (
        (n =
          Math.imul(n ^ (n >>> 16), 2246822507) ^
          Math.imul(r ^ (r >>> 13), 3266489909)),
        (r =
          Math.imul(r ^ (r >>> 16), 2246822507) ^
          Math.imul(n ^ (n >>> 13), 3266489909)),
        4294967296 * (2097151 & r) + (n >>> 0)
      );
    }
    i.default = e;
  },
  66,
);
