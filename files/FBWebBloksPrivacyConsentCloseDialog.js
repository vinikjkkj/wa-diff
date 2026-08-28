__d(
  "FBWebBloksPrivacyConsentCloseDialog",
  ["FBWebBloksPrivacyConsentController"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      (r(
        "FBWebBloksPrivacyConsentController",
      ).decreasePromptCounterForCurrentFlow(),
        e.objectSet.navigationManager.pop(),
        t != null && e.executeCatch(t, []));
    }
    l.default = e;
  },
  98,
);
