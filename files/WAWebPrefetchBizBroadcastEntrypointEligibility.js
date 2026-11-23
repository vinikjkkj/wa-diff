__d(
  "WAWebPrefetchBizBroadcastEntrypointEligibility",
  ["WALogger", "WAWebRefreshBusinessEligibility", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s() {
      try {
        await o(
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
    }
    l.prefetchBizBroadcastEntrypointEligibility = s;
  },
  98,
);
