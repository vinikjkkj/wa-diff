__d(
  "WAWebHatchAttestationErrors",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this, n) || this),
          (r.message = n),
          (r.name = "HatchAttestationError"),
          (r.kind = t),
          r
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    function l(t, n) {
      return t instanceof e && (n === void 0 || t.kind === n);
    }
    function s(e) {
      return e instanceof Error ? e.message : String(e);
    }
    ((i.HatchAttestationError = e),
      (i.isHatchAttestationError = l),
      (i.errorMessage = s));
  },
  66,
);
