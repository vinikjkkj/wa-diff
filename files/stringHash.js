__d(
  "stringHash",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      for (var t = 0, n = 0; n < e.length; n++)
        t = (t * 33 + e.charCodeAt(n)) % 4294967296;
      return t.toString(16);
    }
    function l(t, n) {
      n === void 0 && (n = "|");
      var r = t.join(n);
      return e(r);
    }
    ((i.stringHash = e), (i.stringArrayHash = l));
  },
  66,
);
