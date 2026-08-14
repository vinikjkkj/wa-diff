__d(
  "WAWebPrepareBusinessBroadcastHomeFlow",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebRefreshBusinessEligibility",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResourceForInteraction")(
        "WAWebBusinessBroadcastHomeFlow.react",
      ).__setRef("WAWebPrepareBusinessBroadcastHomeFlow"),
      u = r("JSResourceForInteraction")(
        "WAWebPrepareBusinessBroadcastProHomeFlow",
      ).__setRef("WAWebPrepareBusinessBroadcastHomeFlow");
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled()
          )
            return s.load();
          if (
            !o(
              "WAWebBizBroadcastProOnboardingStatus",
            ).isBizBroadcastProNuxOnboardingStatusResolved()
          )
            try {
              yield o(
                "WAWebRefreshBusinessEligibility",
              ).refreshBusinessEligibilityIfNeeded({ rethrowOnFailure: !0 });
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to resolve BB Home product tier",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("bb-home-tier-resolution-failed"),
                t
              );
            }
          if (!o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser())
            return s.load();
          var t = yield u.load();
          return t.WAWebPrepareBusinessBroadcastProHomeFlow;
        })),
        d.apply(this, arguments)
      );
    }
    l.loadBusinessBroadcastHomeFlow = c;
  },
  98,
);
