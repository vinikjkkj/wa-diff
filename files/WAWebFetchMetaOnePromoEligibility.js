__d(
  "WAWebFetchMetaOnePromoEligibility",
  [
    "Promise",
    "WALogger",
    "WAWebFetchAdAccountToken",
    "WAWebFetchMetaOnePromoEligibilityQuery.graphql",
    "WAWebMetaOneGating",
    "WAWebMetaOnePromoEligibility",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebUserPrefsSubscription",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 864e5,
      m =
        e !== void 0
          ? e
          : (e = n("WAWebFetchMetaOnePromoEligibilityQuery.graphql")),
      p = null;
    function _() {
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebMetaOneGating").isMetaOneRolloutEnabled()
      )
        return (c || (c = n("Promise"))).resolve();
      var e = [
        "web",
        o("WAWebMetaOnePromoEligibility").getMetaOnePhonePromoPlatform(),
      ];
      return f(e)
        ? (p == null &&
            (p = g(e).finally(function () {
              p = null;
            })),
          p)
        : (c || (c = n("Promise"))).resolve();
    }
    function f(e) {
      var t = o("WAWebUserPrefsSubscription").getMetaOnePromoTypes();
      return (
        o("WAWebUserPrefsSubscription").getNextFetchMetaOnePromoTime() <=
          Date.now() ||
        e.some(function (e) {
          return t[e] === void 0;
        })
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield y(e);
          if (t.type === "failed") {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  'fetchMetaOnePromoEligibility: failed as "',
                  '"',
                ])),
              t.reason,
            );
            return;
          }
          (o("WAWebUserPrefsSubscription").setMetaOnePromoTypes(t.promoTypes),
            o("WAWebUserPrefsSubscription").setNextFetchMetaOnePromoTime(
              Date.now() + d,
            ));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (t.type !== "success") return { type: "failed", reason: t.type };
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var n,
              a = yield o("WAWebRelayClient").fetchQuery(
                m,
                { request: { promo_platforms: e.map(b) } },
                { environmentType: "facebook", accessToken: t.token },
              ),
              i =
                a == null || (n = a.eligibility) == null
                  ? void 0
                  : n.subscriptionPromos;
            if (i == null) return { type: "failed", reason: "no-response" };
            var l = {},
              s = function* () {
                var e,
                  t = b(c),
                  n = i.find(function (e) {
                    return e.platform === t;
                  });
                l[c] =
                  (n == null ? void 0 : n.isEligible) === !0 &&
                  (e = n.promoType) != null
                    ? e
                    : null;
              };
            for (var c of e) yield* s();
            return { type: "fetched", promoTypes: l };
          } catch (e) {
            return e instanceof Error &&
              o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
              ? (o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
                { type: "failed", reason: "auth-failure" })
              : (o("WALogger")
                  .WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "fetchMetaOnePromoEligibility: threw",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("meta-one-promo-eligibility-fetch-failed"),
                { type: "failed", reason: "error" });
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return e === "smba"
        ? "SMBA"
        : e === "smbi"
          ? "SMBI"
          : e === "web"
            ? "WEB"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    l.fetchMetaOnePromoEligibility = _;
  },
  98,
);
