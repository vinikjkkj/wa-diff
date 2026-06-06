__d(
  "WAWebBizBroadcastEligibilityPrefetch",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBroadcastODS",
    "WAWebMobilePlatforms",
    "WAWebRefreshBusinessEligibility",
    "WAWebWorkerSafeBackendApi",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      o("WAWebBroadcastODS").logEligibilityPrefetch();
      try {
        (await o(
          "WAWebRefreshBusinessEligibility",
        ).refreshBusinessEligibilityIfNeeded({ rethrowOnFailure: !0 }),
          o("WAWebBroadcastODS").logEligibilityPrefetchSuccess());
      } catch (n) {
        o("WAWebBroadcastODS").logEligibilityPrefetchError();
        var t =
          n instanceof o("WAWebBackendErrors").ServerStatusCodeError
            ? n.statusCode
            : 0;
        (t === 500 && o("WAWebBroadcastODS").logEligibilityPrefetchError500(),
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
            .sendLogs("business-broadcast-eligibility-prefetch-failed"));
      }
    }
    async function u() {
      o("WAWebMobilePlatforms").isSMB() &&
        (await s(),
        o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
          "loadQuickPromotions",
          { trigger: "prefetch" },
        ));
    }
    ((l.prefetchBizBroadcastEligibility = s),
      (l.prefetchEligibilityAndReloadQPs = u));
  },
  98,
);
