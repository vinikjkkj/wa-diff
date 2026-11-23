__d(
  "WAWebPrefetchMetaOnePromoEligibility",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebMobilePlatforms",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      if (o("WAWebMobilePlatforms").isSMB())
        try {
          var t = await r("JSResourceForInteraction")(
              "WAWebFetchMetaOnePromoEligibility",
            )
              .__setRef("WAWebPrefetchMetaOnePromoEligibility")
              .load(),
            n = t.fetchMetaOnePromoEligibility;
          await n();
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Meta One promo prefetch failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("meta-one-promo-prefetch-failed");
        }
    }
    l.prefetchMetaOnePromoEligibility = s;
  },
  98,
);
