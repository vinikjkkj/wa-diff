__d(
  "WAWebCommonCTWALogging",
  [
    "WAWebConnModel",
    "WAWebGetCTWAEligibilityFromConversion",
    "WAWebUserPrefsGeneral",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n;
      if (
        o("WAWebConnModel").Conn.isSMB &&
        e.ctwaContext != null &&
        !(
          e.ctwaContext.conversionSource !==
            o("WAWebGetCTWAEligibilityFromConversion")
              .SMB_DATA_SHARING_ALLOWED_SOURCE ||
          e.ctwaContext.conversionData == null
        )
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
