__d(
  "SignalsLoggingSessionErrors",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function (e) {
        function t(t, n) {
          var r,
            o =
              "Sessions of scope '" +
              n +
              "' and namespace '" +
              t +
              "' has already been declared";
          return (
            (r = e.call(this, o) || this),
            (r.message = o),
            (r.name = "DuplicateSessionNameError"),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      l = (function (e) {
        function t() {
          var t,
            n = "Session scope can only contain letters, numbers, and _";
          return (
            (t = e.call(this, n) || this),
            (t.message = n),
            (t.name = "InvalidSessionNameError"),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    ((i.DuplicateSessionNameError = e), (i.InvalidSessionNameError = l));
  },
  66,
);
