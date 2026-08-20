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
      var t, n;
      if (
        o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn) &&
        e.ctwaContext != null &&
        o(
          "WAWebGetCTWAEligibilityFromConversion",
        ).getCTWAEligibilityFromConversion({
          conversionData: e.ctwaContext.conversionData,
          conversionSource: e.ctwaContext.conversionSource,
          ctwaSignals: e.ctwaContext.ctwaSignals,
        }) != null
      ) {
        var r =
          (t = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) == null
            ? void 0
            : t.toString();
        if (r === ((n = e.to) == null ? void 0 : n.toString())) {
          var a = o("WAWebUserPrefsGeneral").getCTWAMessageReceived();
          a !== !0 && o("WAWebUserPrefsGeneral").setCTWAMessageReceived(!0);
        }
      }
    }
    l.maybeSetCtwaMessageReceivedInUserPreferenceStore = e;
  },
  98,
);
