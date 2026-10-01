__d(
  "WAWebCommonCTWALogging",
  [
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebGetCTWAEligibilityFromConversion",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (
        o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) &&
        e.ctwaContext != null &&
        o(
          "WAWebGetCTWAEligibilityFromConversion",
        ).getCTWAEligibilityFromConversion({
          conversionData: e.ctwaContext.conversionData,
          conversionSource: e.ctwaContext.conversionSource,
          ctwaSignals: e.ctwaContext.ctwaSignals,
        }) != null &&
        o("WAWebUserPrefsMeUser").isMeAccount(e.to)
      ) {
        var t = o("WAWebUserPrefsGeneral").getCTWAMessageReceived();
        t !== !0 && o("WAWebUserPrefsGeneral").setCTWAMessageReceived(!0);
      }
    }
    l.maybeSetCtwaMessageReceivedInUserPreferenceStore = e;
  },
  98,
);
