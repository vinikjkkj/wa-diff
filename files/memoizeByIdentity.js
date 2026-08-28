__d(
  "memoizeByIdentity",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = new Map();
      return function (n) {
        return (t.has(n) || t.set(n, e.call(this, n)), t.get(n));
      };
    }
    i.default = e;
  },
  66,
);
