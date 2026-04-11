__d(
  "QPLUtils",
  ["crc32"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("crc32")(e) >>> 0;
    }
    function s(t) {
      return t != null ? e(t) : 0;
    }
    ((l.unsignedCrc32 = e), (l.deriveInstanceKey = s));
  },
  98,
);
