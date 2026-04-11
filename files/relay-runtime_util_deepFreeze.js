__d(
  "relay-runtime/util/deepFreeze",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(t) {
      return (
        l(t) &&
          (Object.freeze(t),
          Object.getOwnPropertyNames(t).forEach(function (n) {
            var r = t[n];
            r && typeof r == "object" && !Object.isFrozen(r) && e(r);
          })),
        t
      );
    }
    function l(e) {
      return (
        e != null &&
        (Array.isArray(e) || (typeof e == "object" && e.constructor === Object))
      );
    }
    a.exports = e;
  },
  null,
);
