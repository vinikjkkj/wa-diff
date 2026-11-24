__d(
  "WAWebFetchMetaOnePromoEligibility",
  [
    "WALogger",
    "WAWebFetchAdAccountToken",
    "WAWebFetchMetaOnePromoEligibilityQuery.graphql",
    "WAWebMetaOneGating",
    "WAWebMetaOnePromoEligibility",
    "WAWebMobilePlatforms",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebUserPrefsSubscription",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 864e5,
      d = [
        "Failed to fetch",
        "Load failed",
        "NetworkError when attempting to fetch resource.",
        "The network connection was lost.",
      ],
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
        return Promise.resolve();
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
        : Promise.resolve();
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
    async function g(e) {
      var t = await h(e);
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
          Date.now() + c,
        ));
    }
    async function h(e) {
      var t = await o("WAWebFetchAdAccountToken").fetchToken();
      if (t.type !== "success") return { type: "failed", reason: t.type };
      await r("WAWebNetworkStatus").waitIfOffline();
      try {
        var n,
          a = await o("WAWebRelayClient").fetchQuery(
            m,
            { request: { promo_platforms: e.map(C) } },
            { environmentType: "facebook", accessToken: t.token },
          ),
          i =
            a == null || (n = a.eligibility) == null
              ? void 0
              : n.subscriptionPromos;
        if (i == null) return { type: "failed", reason: "no-response" };
        var l = {},
          s = async function () {
            var e,
              t = C(c),
              n = i.find(function (e) {
                return e.platform === t;
              });
            l[c] =
              (n == null ? void 0 : n.isEligible) === !0 &&
              (e = n.promoType) != null
                ? e
                : null;
          };
        for (var c of e) await s();
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
        var d = r("getErrorSafe")(e);
        return y(d)
          ? { type: "failed", reason: "network" }
          : (o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "fetchMetaOnePromoEligibility: threw",
                  ])),
              )
              .catching(d)
              .sendLogs("meta-one-promo-eligibility-fetch-failed"),
            { type: "failed", reason: "error" });
      }
    }
    function y(e) {
      return (
        e.name === "TypeError" &&
        d.some(function (t) {
          return e.message.includes(t);
        })
      );
    }
    function C(e) {
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
