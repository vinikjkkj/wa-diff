__d(
  "FBWebBloksPrivacyConsentLaunchConsent",
  [
    "FBWebBloksPrivacyConsentController",
    "FBWebBloksPrivacyConsentOpenFlow",
    "Random",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i, l, s, u, c) {
      var d = r("Random").uint32().toString();
      ((r("FBWebBloksPrivacyConsentController").experienceCallbacks[d] = {
        onApproved: l,
        onDenied: s,
        onDismissed: u,
        onBacked: c,
      }),
        r("FBWebBloksPrivacyConsentOpenFlow")(
          e,
          d,
          t,
          n,
          o,
          a,
          i,
          null,
          null,
          null,
          null,
        ));
    }
    l.default = e;
  },
  98,
);
