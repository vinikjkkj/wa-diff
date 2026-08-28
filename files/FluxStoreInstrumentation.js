__d(
  "FluxStoreInstrumentation",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = null;
    function u(t) {
      (e == null || s(0, 2260), (e = t));
    }
    function c(t) {
      return e ? e.emitChange(t) : null;
    }
    ((l.inject = u), (l.onEmitChange = c));
  },
  98,
);
