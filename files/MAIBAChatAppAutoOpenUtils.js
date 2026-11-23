__d(
  "MAIBAChatAppAutoOpenUtils",
  ["AdsAIUtils", "ExecutionEnvironment", "getMAIBAPageAdAccountID", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "maiba_chat_autoopen",
      u = "business_help_center_article",
      c = "moma_payouts_support";
    function d(t) {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var n = new URL(window.location.href),
          a = new URLSearchParams(n.search),
          i = a.get(s);
        if (i === c) {
          if (!r("gkx")("14500")) return t;
          a.delete(s);
          var l = a.toString(),
            d = n.pathname + (l === "" ? "" : "?" + l) + n.hash;
          return (
            window.history.replaceState(
              window.history.state,
              document.title,
              d,
            ),
            o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
              "MAIBAChatAppAutoOpenUtils:moma_payouts_support",
              !1,
              "Monetization Manager",
            )
              ? babelHelpers.extends({}, t, {
                  entrypoint: "MONETIZATION_MANAGER",
                  isMAIBAChatAppOpen: !0,
                  selectedChatState: {
                    linkedAdAccountId: r("getMAIBAPageAdAccountID")(),
                  },
                })
              : t
          );
        }
        if (i !== u) return t;
        var m = r("gkx")("5852");
        if (!m) return t;
        a.delete(s);
        var p = a.toString(),
          _ = n.pathname + (p === "" ? "" : "?" + p) + n.hash;
        return (
          window.history.replaceState(window.history.state, document.title, _),
          o("AdsAIUtils").getIsAdsAIBetaM2AvailableOnCurrentSurface(
            "MAIBAChatAppAutoOpenUtils:business_help_center_article",
            !1,
            "Business Help Center",
          )
            ? babelHelpers.extends({}, t, {
                entrypoint: "BUSINESS_HELP_CENTER_ARTICLE_LOGIN_RETURN",
                isMAIBAChatAppOpen: !0,
                selectedChatState: {
                  linkedAdAccountId: r("getMAIBAPageAdAccountID")(),
                },
              })
            : t
        );
      }
      return t;
    }
    l.applyMAIBAChatAppAutoOpenURLOverride = d;
  },
  98,
);
