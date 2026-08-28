__d(
  "FBWebBloksPrivacyConsentCloseFlow",
  ["FBWebBloksPrivacyConsentController"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("FBWebBloksPrivacyConsentController").currentFlowId();
      if (o != null) {
        var a = r("FBWebBloksPrivacyConsentController").flowCallbacks[o];
        switch (t) {
          case "APPROVED":
            a.onApproved != null && e.executeCatch(a.onApproved, []);
            break;
          case "DENIED":
            a.onDenied != null && e.executeCatch(a.onDenied, []);
            break;
          case "DISMISSED":
            a.onDismissed != null && e.executeCatch(a.onDismissed, []);
            break;
          case "BACKED":
            a.onBacked != null && e.executeCatch(a.onBacked, []);
            break;
        }
        for (
          ;
          r("FBWebBloksPrivacyConsentController").promptNumForCurrentFlow() > 0;
        )
          (e.objectSet.navigationManager.pop(),
            r(
              "FBWebBloksPrivacyConsentController",
            ).decreasePromptCounterForCurrentFlow());
        (e.executeCatch(n, []),
          r("FBWebBloksPrivacyConsentController").activeFlowStack.pop());
      }
    }
    l.default = e;
  },
  98,
);
