__d(
  "WAWebHatchSecureCredentialVaultError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { raw: "unknown", reason: "unknown" },
      l = "hatch secure credentials vault call failed",
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, l) || this),
            (n.name = "HatchSecureCredentialVaultError"),
            (n.message = l),
            (n.failure = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function u(t) {
      return t instanceof s ? t.failure : e;
    }
    ((i.HatchSecureCredentialVaultError = s),
      (i.getHatchSecureCredentialFailure = u));
  },
  66,
);
