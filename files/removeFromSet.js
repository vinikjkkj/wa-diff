__d(
  "removeFromSet",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (!e.has(t)) return e;
      var n = new Set(e);
      return (n.delete(t), n);
    }
    i.default = e;
  },
  66,
);
