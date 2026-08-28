__d(
  "AuthenticityWizardUtil",
  ["AuthenticityProduct"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n =
          (t = Object.keys(r("AuthenticityProduct")).find(function (t) {
            return r("AuthenticityProduct")[t] === e;
          })) != null
            ? t
            : null,
        o = n;
      switch (o) {
        case "ADVERTISER_VERIFICATION":
        case "TRUST_TIER":
          return null;
        default:
          return n;
      }
    }
    l.castToAuthenticityProductGraphQLEnum = e;
  },
  98,
);
