__d(
  "FBWebBloksPrivacyConsentShutdownExperience",
  ["FBWebBloksPrivacyConsentController"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      for (
        var o = r("FBWebBloksPrivacyConsentController").experienceCallbacks[n];
        ((a = r("FBWebBloksPrivacyConsentController").currentFlowId()) == null
          ? void 0
          : a.startsWith(n)) === !0;
      ) {
        for (
          var a;
          r("FBWebBloksPrivacyConsentController").promptNumForCurrentFlow() > 0;
        )
          (e.objectSet.navigationManager.pop(),
            r(
              "FBWebBloksPrivacyConsentController",
            ).decreasePromptCounterForCurrentFlow());
        r("FBWebBloksPrivacyConsentController").activeFlowStack.pop();
      }
      switch (t) {
        case "APPROVED":
          o.onApproved != null && e.executeCatch(o.onApproved, []);
          break;
        case "DENIED":
          o.onDenied != null && e.executeCatch(o.onDenied, []);
          break;
        case "DISMISSED":
          o.onDismissed != null && e.executeCatch(o.onDismissed, []);
          break;
        case "BACKED":
          o.onBacked != null && e.executeCatch(o.onBacked, []);
          break;
      }
    }
    l.default = e;
  },
  98,
);
