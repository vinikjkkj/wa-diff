__d(
  "WAWebBizBroadcastEligibilityPrefetch",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebGetBusinessEligibilityJob",
    "WAWebMobilePlatforms",
    "WAWebWorkerSafeBackendApi",
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
            yield o(
              "WAWebGetBusinessEligibilityJob",
            ).fetchAndCacheBusinessEligibility();
          } catch (n) {
            var t =
              n instanceof o("WAWebBackendErrors").ServerStatusCodeError
                ? n.statusCode
                : 0;
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[BizBroadcastEligibilityPrefetch] failed code=",
                    "",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("business-broadcast-eligibility-prefetch-failed");
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebMobilePlatforms").isSMB() &&
            (yield s(),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "loadQuickPromotions",
              { trigger: "prefetch" },
            ));
        })),
        d.apply(this, arguments)
      );
    }
    ((l.prefetchBizBroadcastEligibility = s),
      (l.prefetchEligibilityAndReloadQPs = c));
  },
  98,
);
