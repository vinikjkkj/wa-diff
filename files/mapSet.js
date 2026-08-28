__d(
  "mapSet",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = new Set();
      for (var r of e) n.add(t(r));
      return n;
    }
    i.default = e;
  },
  66,
);
