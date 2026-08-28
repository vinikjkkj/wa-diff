__d(
  "mapMapToArray",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = [],
        r = 0;
      for (var o of e) {
        var a = o[0],
          i = o[1];
        (n.push(t(i, a, r, e)), r++);
      }
      return n;
    }
    i.default = e;
  },
  66,
);
