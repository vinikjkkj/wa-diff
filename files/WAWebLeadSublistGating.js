__d(
  "WAWebLeadSublistGating",
  [
    "WAWebChatGetters",
    "WAWebCustomerManagerGating",
    "WAWebEnvironment",
    "WAWebMobilePlatforms",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contact;
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        !r("WAWebEnvironment").isGuest &&
        !o("WAWebChatGetters").getIsBroadcast(e) &&
        t != null &&
        o("WAWebCustomerManagerGating").isEligibleForCustomerFields(t) &&
        !e.id.isAiHub() &&
        o("WAWebCustomerManagerGating").customerManagerEnabled()
      );
    }
    function s(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        !r("WAWebEnvironment").isGuest &&
        o("WAWebCustomerManagerGating").isEligibleForCustomerFields(e) &&
        o("WAWebCustomerManagerGating").customerManagerEnabled()
      );
    }
    ((l.isChatEligibleForLeadSublist = e),
      (l.isContactEligibleForLeadSublist = s));
  },
  98,
);
