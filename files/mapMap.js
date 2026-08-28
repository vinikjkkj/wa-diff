__d(
  "mapMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = new Map();
      return (
        e.forEach(function (e, r) {
          n.set(r, t(e, r));
        }),
        n
      );
    }
    i.default = e;
  },
  66,
);
