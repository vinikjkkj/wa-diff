__d(
  "WAWebVoipCallScreeningEligibility",
  [
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebPrivacySettings",
    "WAWebTrustedContactsUtils",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebUserPrefsGeneral").getUserPrivacySettings().callAdd ===
          o("WAWebPrivacySettings").CALL_ADD.screen && !s(e)
      );
    }
    function s(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      if (t != null && o("WAWebFrontendContactGetters").getIsMyContact(t))
        return !0;
      var n = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(e),
        r = n == null ? void 0 : n.tcTokenTimestamp;
      return (
        (n == null ? void 0 : n.tcToken) != null &&
        r != null &&
        !o("WAWebTrustedContactsUtils").isTokenExpired(
          r,
          o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
        )
      );
    }
    l.isCallerEligibleForScreening = e;
  },
  98,
);
