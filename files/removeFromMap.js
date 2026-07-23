__d(
  "removeFromMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e.has(t)) {
        var n = new Map(e);
        return (n.delete(t), n);
      }
      return e;
    }
    i.default = e;
  },
  66,
);
