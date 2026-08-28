__d(
  "adsStoreFlattenLists",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = [];
      for (var n of e) t = t.concat(n[1].list);
      return t;
    }
    i.default = e;
  },
  66,
);
