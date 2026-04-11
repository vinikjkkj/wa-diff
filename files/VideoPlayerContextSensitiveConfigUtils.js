__d(
  "VideoPlayerContextSensitiveConfigUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t, n) {
        return n.every(function (e) {
          return t[e.name] === e.value;
        });
      },
      l = function (n, r) {
        return r.find(function (t) {
          return e(n, t.contexts);
        });
      };
    i.getFirstMatchingValueAndContextTargets = l;
  },
  66,
);
