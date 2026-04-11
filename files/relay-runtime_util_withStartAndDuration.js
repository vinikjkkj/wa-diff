__d(
  "relay-runtime/util/withStartAndDuration",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l =
        typeof window != "undefined" &&
        typeof ((e = window) == null || (e = e.performance) == null
          ? void 0
          : e.now) == "function";
    function s() {
      return l ? window.performance.now() : Date.now();
    }
    function u(e) {
      var t = s(),
        n = e();
      return [t, s() - t, n];
    }
    a.exports = u;
  },
  null,
);
