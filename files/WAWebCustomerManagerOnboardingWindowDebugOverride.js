__d(
  "WAWebCustomerManagerOnboardingWindowDebugOverride",
  [
    "WAWebCustomerManagerGating",
    "WAWebUserPrefsDebugKeys",
    "WAWebUserPrefsStore",
  ],
  function (t, n, r, o, a, i, l) {
    var e = !!r("WAWebUserPrefsStore").get(
      r("WAWebUserPrefsDebugKeys")
        .DEBUG_CUSTOMER_MANAGER_FORCE_ONBOARDING_WINDOW,
    );
    function s() {
      return (
        e &&
        o("WAWebCustomerManagerGating").customerManagerNuxDebugToolsEnabled()
      );
    }
    function u(t) {
      ((e = t),
        r("WAWebUserPrefsStore").set(
          r("WAWebUserPrefsDebugKeys")
            .DEBUG_CUSTOMER_MANAGER_FORCE_ONBOARDING_WINDOW,
          t,
        ));
    }
    ((l.isCustomerManagerOnboardingWindowForced = s),
      (l.setCustomerManagerOnboardingWindowForced = u));
  },
  98,
);
