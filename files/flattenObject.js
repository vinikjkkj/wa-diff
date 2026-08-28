__d(
  "flattenObject",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = {};
      for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          var r = e[n];
          if (r == null) continue;
          if (typeof r == "string") t[n] = r;
          else {
            var o;
            t[n] = (o = JSON.stringify(r)) != null ? o : "";
          }
        }
      return t;
    }
    i.default = e;
  },
  66,
);
