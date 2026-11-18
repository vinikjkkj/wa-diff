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
      m = [
        "Failed to fetch",
        "Load failed",
        "NetworkError when attempting to fetch resource.",
        "The network connection was lost.",
      ],
      p =
        e !== void 0
          ? e
          : (e = n("WAWebFetchMetaOnePromoEligibilityQuery.graphql")),
      _ = null;
    function f() {
      if (
        !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebMetaOneGating").isMetaOneRolloutEnabled()
      )
        return (c || (c = n("Promise"))).resolve();
      var e = [
        "web",
        o("WAWebMetaOnePromoEligibility").getMetaOnePhonePromoPlatform(),
      ];
      return g(e)
        ? (_ == null &&
            (_ = h(e).finally(function () {
              _ = null;
            })),
          _)
        : (c || (c = n("Promise"))).resolve();
    }
    function g(e) {
      var t = o("WAWebUserPrefsSubscription").getMetaOnePromoTypes();
      return (
        o("WAWebUserPrefsSubscription").getNextFetchMetaOnePromoTime() <=
          Date.now() ||
        e.some(function (e) {
          return t[e] === void 0;
        })
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield C(e);
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (t.type !== "success") return { type: "failed", reason: t.type };
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var n,
              a = yield o("WAWebRelayClient").fetchQuery(
                p,
                { request: { promo_platforms: e.map(S) } },
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
                  t = S(c),
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
            if (
              e instanceof Error &&
              o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
            )
              return (
                o("WAWebFetchAdAccountToken").markTokenAsInvalid(),
                { type: "failed", reason: "auth-failure" }
              );
            var d = r("getErrorSafe")(e),
              m = o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "fetchMetaOnePromoEligibility: threw",
                    ])),
                )
                .catching(d),
              _ = v(d) ? m.tags("non-sad") : m;
            return (
              _.sendLogs("meta-one-promo-eligibility-fetch-failed"),
              { type: "failed", reason: "error" }
            );
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return (
        e.name === "TypeError" &&
        m.some(function (t) {
          return e.message.includes(t);
        })
      );
    }
    function S(e) {
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
    l.fetchMetaOnePromoEligibility = f;
  },
  98,
);
