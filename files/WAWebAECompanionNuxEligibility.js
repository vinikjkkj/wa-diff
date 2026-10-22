__d(
  "WAWebAECompanionNuxEligibility",
  [
    "WALogger",
    "WAWebNux",
    "WAWebNuxAction",
    "WAWebUserPrefsNuxPreferences",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 2;
    function u() {
      var e, t;
      return (
        o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
          o("WAWebNux").NUX.AE_ONBOARDING_LISTS_HOME,
        ) &&
        (o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
          o("WAWebNux").NUX.AE_ONBOARDING_NOT_NOW,
        ) ||
          ((e =
            (t = o("WAWebUserPrefsNuxPreferences").getNUX(
              o("WAWebNux").NUX.AE_ONBOARDING,
            )) == null
              ? void 0
              : t.views) != null
            ? e
            : 0) < s)
      );
    }
    function c() {
      return o("WAWebUserPrefsNuxPreferences").shouldShowNUX(
        o("WAWebNux").NUX.AE_ONBOARDING,
      );
    }
    function d() {
      _(o("WAWebNux").NUX.AE_ONBOARDING);
    }
    function m() {
      _(o("WAWebNux").NUX.AE_ONBOARDING_LISTS_HOME);
    }
    function p() {
      _(o("WAWebNux").NUX.AE_ONBOARDING_NOT_NOW);
    }
    function _(t) {
      o("WAWebNuxAction")
        .viewNux(t)
        .catch(function (n) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "recordView: viewNux threw, nux=",
                  "",
                ])),
              t,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("ae-onboarding-nux-view-threw");
        });
    }
    ((l.shouldAutoShowOnboardingNuxOnListsHome = u),
      (l.shouldShowOnboardingNuxFromListFilter = c),
      (l.recordOnboardingNuxShown = d),
      (l.recordOnboardingNuxShownOnListsHome = m),
      (l.recordOnboardingNuxOptedOut = p));
  },
  98,
);
