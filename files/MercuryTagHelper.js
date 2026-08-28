__d(
  "MercuryTagHelper",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = e.find(function (e) {
        return e != null ? e.startsWith(t) : !1;
      });
      return n == null ? n : n.substr(n.indexOf(":") + 1);
    }
    i.get = e;
  },
  66,
);
