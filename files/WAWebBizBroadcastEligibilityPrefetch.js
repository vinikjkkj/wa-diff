__d(
  "WAWebBizBroadcastEligibilityPrefetch",
  [
    "WALogger",
    "WAWaitForComms",
    "WAWebGetBusinessEligibilityJob",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            (yield o("WAWaitForComms").waitForComms(),
              yield o(
                "WAWebGetBusinessEligibilityJob",
              ).fetchAndCacheBusinessEligibility());
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizBroadcastEligibilityPrefetch] fetch eligibility failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("business-broadcast-eligibility-prefetch-failed");
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.prefetchBizBroadcastEligibility = s;
  },
  98,
);
