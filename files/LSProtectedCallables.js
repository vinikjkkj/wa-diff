__d(
  "LSProtectedCallables",
  ["LSProtectedCallableNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null;
    function u(t) {
      return (
        e == null &&
          (e = new Set(r("LSProtectedCallableNames").nativeOperations)),
        e.has(t)
      );
    }
    function c(e) {
      return (
        s == null &&
          (s = new Set(r("LSProtectedCallableNames").storedProcedures)),
        s.has(e)
      );
    }
    ((l.isProtectedNativeOperation = u), (l.isProtectedStoredProcedure = c));
  },
  98,
);
