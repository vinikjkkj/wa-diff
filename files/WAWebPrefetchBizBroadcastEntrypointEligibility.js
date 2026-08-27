__d(
  "WAWebPrefetchBizBroadcastEntrypointEligibility",
  [
    "WALogger",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebRefreshBusinessEligibility",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled()
          )
            try {
              yield o(
                "WAWebRefreshBusinessEligibility",
              ).refreshBusinessEligibilityIfNeeded({ rethrowOnFailure: !0 });
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[BB Pro] Eligibility prefetch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("bb-pro-eligibility-prefetch-failed");
            }
        })),
        u.apply(this, arguments)
      );
    }
    l.prefetchBizBroadcastEntrypointEligibility = s;
  },
  98,
);
