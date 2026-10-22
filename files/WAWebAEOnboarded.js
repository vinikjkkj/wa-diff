__d(
  "WAWebAEOnboarded",
  [
    "WAWebAECompanionGating",
    "WAWebCoexCanonicalMembership",
    "WAWebCoexProductStateStore",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      return o("WAWebMobilePlatforms").isSMB()
        ? (e = s()) != null
          ? e
          : o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus()
        : !1;
    }
    function s() {
      var e = o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebCoexProductStateStore").getCoexProductState()
        : null;
      return e == null || !o("WAWebAECompanionGating").isCoexStateSyncEnabled()
        ? null
        : e.surfaces.includes(o("WAWebCoexCanonicalMembership").AE_SURFACE);
    }
    ((l.isAEOnboarded = e), (l.getCanonicalAEOnboardedStatus = s));
  },
  98,
);
