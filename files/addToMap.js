__d(
  "addToMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      if (e.get(t) === n) return e;
      var r = new Map(e);
      return (r.set(t, n), r);
    }
    i.default = e;
  },
  66,
);
