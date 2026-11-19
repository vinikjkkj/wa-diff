__d(
  "WAWebUserPrefsSubscription",
  ["$InternalEnum", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
      "NextSubscriptionQuery",
      "ShouldShowMetaVerifiedEntryPoint",
      "NextFetchSubscriptionEntryPointsTime",
      "MetaVerifiedEntryPointRedirectionUri",
      "MetaOneEntryPointEligibility",
      "MetaOnePurchaseEligibility",
      "MetaOnePromoTypes",
      "NextFetchMetaOnePromoTime",
    ]);
    function s() {
      return v(e.NextSubscriptionQuery);
    }
    function u(t) {
      r("WAWebUserPrefsStore").setUser(e.NextSubscriptionQuery, t);
    }
    function c() {
      var t = r("WAWebUserPrefsStore").getUser(
          e.ShouldShowMetaVerifiedEntryPoint,
        ),
        n = r("WAWebUserPrefsStore").getUser(e.MetaOneEntryPointEligibility);
      return {
        metaVerified: t === !0,
        metaOne: n == null ? null : n === !0,
        metaOnePurchaseEligibility: b(
          r("WAWebUserPrefsStore").getUser(e.MetaOnePurchaseEligibility),
        ),
      };
    }
    function d(t) {
      (r("WAWebUserPrefsStore").setUser(
        e.ShouldShowMetaVerifiedEntryPoint,
        t.metaVerified,
      ),
        r("WAWebUserPrefsStore").setUser(
          e.MetaOneEntryPointEligibility,
          t.metaOne,
        ),
        r("WAWebUserPrefsStore").setUser(
          e.MetaOnePurchaseEligibility,
          t.metaOnePurchaseEligibility,
        ));
    }
    function m() {
      return v(e.NextFetchSubscriptionEntryPointsTime);
    }
    function p(t) {
      r("WAWebUserPrefsStore").setUser(
        e.NextFetchSubscriptionEntryPointsTime,
        t,
      );
    }
    function _() {
      var t = r("WAWebUserPrefsStore").getUser(
        e.MetaVerifiedEntryPointRedirectionUri,
      );
      return typeof t != "string" || t === "" ? null : t;
    }
    function f(t) {
      r("WAWebUserPrefsStore").setUser(
        e.MetaVerifiedEntryPointRedirectionUri,
        t,
      );
    }
    function g() {
      var t = r("WAWebUserPrefsStore").getUser(e.MetaOnePromoTypes);
      if (t == null || typeof t != "object" || Array.isArray(t)) return {};
      var n = {};
      for (var o of Object.entries(t)) {
        var a = o[0],
          i = o[1];
        (i == null || typeof i == "string") && (n[a] = i != null ? i : null);
      }
      return n;
    }
    function h(t) {
      r("WAWebUserPrefsStore").setUser(e.MetaOnePromoTypes, t);
    }
    function y() {
      return v(e.NextFetchMetaOnePromoTime);
    }
    function C(t) {
      r("WAWebUserPrefsStore").setUser(e.NextFetchMetaOnePromoTime, t);
    }
    function b(e) {
      return e === "web_purchase"
        ? "web_purchase"
        : e === "mobile_purchase"
          ? "mobile_purchase"
          : e === "not_eligible"
            ? "not_eligible"
            : void 0;
    }
    function v(e) {
      var t = r("WAWebUserPrefsStore").getUser(e);
      return (t != null && parseInt(String(t), 10)) || 0;
    }
    ((l.getNextSubscriptionQuery = s),
      (l.setNextSubscriptionQuery = u),
      (l.getSubscriptionsEntryPointEligibility = c),
      (l.setSubscriptionsEntryPointEligibility = d),
      (l.getNextFetchSubscriptionEntryPointsTime = m),
      (l.setNextFetchSubscriptionEntryPointsTime = p),
      (l.getMetaVerifiedEntryPointRedirectionUri = _),
      (l.setMetaVerifiedEntryPointRedirectionUri = f),
      (l.getMetaOnePromoTypes = g),
      (l.setMetaOnePromoTypes = h),
      (l.getNextFetchMetaOnePromoTime = y),
      (l.setNextFetchMetaOnePromoTime = C));
  },
  98,
);
