__d(
  "signalsLoggingComputeScope",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      var t = Array.isArray(e) ? e : e.scope;
      return (
        t.length > 0 || s(0, 4656),
        t
          .map(function (e) {
            return typeof e == "string" ? e : e != null ? e() : null;
          })
          .filter(function (e) {
            return e != null;
          })
          .join(".")
      );
    }
    l.default = e;
  },
  98,
);
