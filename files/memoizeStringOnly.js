__d(
  "memoizeStringOnly",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = {};
      return function (n) {
        return (
          Object.prototype.hasOwnProperty.call(t, n) ||
            (t[n] = e.call(this, n)),
          t[n]
        );
      };
    }
    i.default = e;
  },
  66,
);
