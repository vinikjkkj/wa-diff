__d(
  "WAWebLeadSublistGating",
  [
    "WAWebChatGetters",
    "WAWebContactManagerGating",
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
        o("WAWebContactManagerGating").isEligibleForCustomerFields(t) &&
        !e.id.isAiHub() &&
        o("WAWebContactManagerGating").contactManagerEnabled()
      );
    }
    function s(e) {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        !r("WAWebEnvironment").isGuest &&
        o("WAWebContactManagerGating").isEligibleForCustomerFields(e) &&
        o("WAWebContactManagerGating").contactManagerEnabled()
      );
    }
    ((l.isChatEligibleForLeadSublist = e),
      (l.isContactEligibleForLeadSublist = s));
  },
  98,
);
