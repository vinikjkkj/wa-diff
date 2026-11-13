__d(
  "WAWebPrefetchMetaOnePromoEligibility",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebMobilePlatforms",
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
          if (o("WAWebMobilePlatforms").isSMB())
            try {
              var t = yield r("JSResourceForInteraction")(
                  "WAWebFetchMetaOnePromoEligibility",
                )
                  .__setRef("WAWebPrefetchMetaOnePromoEligibility")
                  .load(),
                n = t.fetchMetaOnePromoEligibility;
              yield n();
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
        })),
        u.apply(this, arguments)
      );
    }
    l.prefetchMetaOnePromoEligibility = s;
  },
  98,
);
