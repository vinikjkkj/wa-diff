__d(
  "WAArrayZip",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = Math.min(e.length, t.length);
      return e.slice(0, n).map(function (e, n) {
        return [e, t[n]];
      });
    }
    i.zip = e;
  },
  66,
);
