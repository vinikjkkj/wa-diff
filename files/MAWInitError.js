__d(
  "MAWInitError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this, t) || this),
          (r.error = void 0),
          (r.name = "MAWInitError"),
          (r.message = t),
          (r.error = n),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    i.MAWInitError = e;
  },
  66,
);
