__d(
  "ReStoreEARSetupFailure",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "Encryption keychain could not be setup",
      l = "ReStoreEARSetupFailure",
      s = (function (t) {
        function n(n) {
          var r,
            o = e + ": " + n;
          return (
            (r = t.call(this, o) || this),
            (r.message = o),
            (r.name = l),
            r
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(babelHelpers.wrapNativeSuper(Error));
    i.ReStoreEARSetupFailure = s;
  },
  66,
);
