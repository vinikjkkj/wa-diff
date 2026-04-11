__d(
  "relay-runtime/util/shallowFreeze",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    a.exports = function (t) {
      typeof t == "object" &&
        t != null &&
        (Array.isArray(t) || t.constructor === Object) &&
        Object.freeze(t);
    };
  },
  null,
);
