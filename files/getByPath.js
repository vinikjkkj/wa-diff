__d(
  "getByPath",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r = e;
      if (!t || !t.length) return r;
      for (var o = 0; o < t.length; o++) {
        var a = t[o];
        if (r && typeof r != "string" && typeof r != "number" && a in r)
          r = r[a];
        else return n;
      }
      return r;
    }
    i.default = e;
  },
  66,
);
