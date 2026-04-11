__d(
  "WAReplaceRepeatingWhitespace",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "\xA0";
    function l(t, n) {
      var r = function (r) {
        for (var t = "", o = 0; o < r.length; o++) {
          var a = n === !0 && r[o] === "\n";
          t += a ? "\n" : e;
        }
        return t;
      };
      return /\s\s+/.test(t) ? t.replace(/\s\s+/g, r) : t;
    }
    i.default = l;
  },
  66,
);
