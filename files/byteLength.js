__d(
  "byteLength",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (var t = e.length, n = e.length - 1; n >= 0; n--) {
        var r = e.charCodeAt(n);
        (r > 127 && r <= 2047 ? t++ : r > 2047 && r <= 65535 && (t += 2),
          r >= 56320 && r <= 57343 && n--);
      }
      return t;
    }
    i.default = e;
  },
  66,
);
