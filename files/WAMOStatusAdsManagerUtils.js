__d(
  "WAMOStatusAdsManagerUtils",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsWAMOSensitiveAdvertisersUtils",
    "AdsWAMOSupportedCatalogVerticals",
    "AdsWAMOSupportedDestinationTypes",
    "AdsWAMOSupportedObjectives",
    "AdsWAMOSupportedOptimizationGoals",
    "AdsWAMOSupportedPromotedObjectTypes",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return (e = o("AdsWAMOSupportedObjectives").WAMOSupportedObjectives.get(
        "status",
      )) != null
        ? e
        : [];
    }
    function s(e) {
      var t, n;
      return (t =
        (n = o(
          "AdsWAMOSupportedDestinationTypes",
        ).WAMOSupportedDestinationTypesMap.get("status")) == null
          ? void 0
          : n.get(e)) != null
        ? t
        : [];
    }
    function u(e) {
      var t, n;
      return (t =
        (n = o(
          "AdsWAMOSupportedPromotedObjectTypes",
        ).WAMOSupportedPromotedObjectTypes.get("status")) == null
          ? void 0
          : n.get(e)) != null
        ? t
        : [];
    }
    function c(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u = o(
          "AdsWAMOSupportedOptimizationGoals",
        ).WAMOSupportedOptimizationGoals.get("status");
      switch (e) {
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
        case r("AdsAPIObjectives").REACH:
          return (t =
            u == null
              ? void 0
              : u.get(r("AdsAPIObjectives").OUTCOME_AWARENESS)) != null
            ? t
            : [];
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
        case r("AdsAPIObjectives").MESSAGES:
          return (n =
            u == null
              ? void 0
              : u.get(r("AdsAPIObjectives").OUTCOME_ENGAGEMENT)) != null
            ? n
            : [];
        case r("AdsAPIObjectives").LINK_CLICKS:
        case r("AdsAPIObjectives").OUTCOME_TRAFFIC:
          return (a =
            u == null ? void 0 : u.get(r("AdsAPIObjectives").LINK_CLICKS)) !=
            null
            ? a
            : [];
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return (i =
            u == null ? void 0 : u.get(r("AdsAPIObjectives").OUTCOME_LEADS)) !=
            null
            ? i
            : [];
        case r("AdsAPIObjectives").OUTCOME_SALES:
          return (l =
            u == null ? void 0 : u.get(r("AdsAPIObjectives").OUTCOME_SALES)) !=
            null
            ? l
            : [];
        case r("AdsAPIObjectives").APP_INSTALLS:
          return (s =
            u == null ? void 0 : u.get(r("AdsAPIObjectives").APP_INSTALLS)) !=
            null
            ? s
            : [];
        default:
          return [];
      }
    }
    function d() {
      var e = m(),
        t = r("AdsWAMOSensitiveAdvertisersUtils").is_default_off_accounts;
      return e && !t;
    }
    function m() {
      return (
        r("gkx")("931") &&
        !r("AdsWAMOSensitiveAdvertisersUtils")
          .is_sensitive_vertical_restricted_account
      );
    }
    function p() {
      return r("gkx")("7161");
    }
    function _() {
      return r("gkx")("8445");
    }
    function f() {
      return r("gkx")("13619");
    }
    function g() {
      return r("gkx")("12402");
    }
    function h(e) {
      if (_()) return !0;
      var t =
        e === r("AdsAPIOptimizationGoals").REACH ||
        e === r("AdsAPIOptimizationGoals").IMPRESSIONS;
      return t ? f() : !1;
    }
    function y() {
      return r("gkx")("21300");
    }
    function C() {
      return r("gkx")("11863");
    }
    function b() {
      return r("gkx")("9268");
    }
    function v() {
      return m() && b() && r("gkx")("12582");
    }
    function S(e) {
      if (e == null) return !1;
      var t = e.toLowerCase();
      return Array.from(
        o("AdsWAMOSupportedCatalogVerticals").WAMOSupportedCatalogVerticals,
      ).some(function (e) {
        return e.toLowerCase() === t;
      });
    }
    function R() {
      return r("gkx")("24679");
    }
    function L() {
      return r("gkx")("8203");
    }
    function E(e) {
      return e === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS && L();
    }
    function k() {
      return m() && r("gkx")("22304");
    }
    function I() {
      return m() && r("gkx")("14366");
    }
    function T() {
      return m() && r("gkx")("18157");
    }
    function D() {
      return m();
    }
    function x(e) {
      var t, n;
      return !!(
        e != null &&
        (t = e.publisher_platforms) != null &&
        t.includes("whatsapp") &&
        e != null &&
        (n = e.whatsapp_positions) != null &&
        n.includes("status")
      );
    }
    function $(e) {
      var t, n, r, o, a, i, l, s, u, c, d, m, p, _;
      return !x(e) ||
        (e == null || (t = e.whatsapp_positions) == null
          ? void 0
          : t.length) !== 1
        ? !1
        : (e == null || (n = e.publisher_platforms) == null
              ? void 0
              : n.length) === 1
          ? !0
          : ((r =
              e == null || (o = e.facebook_positions) == null
                ? void 0
                : o.length) != null
              ? r
              : 0) === 0 &&
            ((a =
              e == null || (i = e.audience_network_positions) == null
                ? void 0
                : i.length) != null
              ? a
              : 0) === 0 &&
            ((l =
              e == null || (s = e.instagram_positions) == null
                ? void 0
                : s.length) != null
              ? l
              : 0) === 0 &&
            ((u =
              e == null || (c = e.messenger_positions) == null
                ? void 0
                : c.length) != null
              ? u
              : 0) === 0 &&
            ((d =
              e == null || (m = e.oculus_positions) == null
                ? void 0
                : m.length) != null
              ? d
              : 0) === 0 &&
            ((p =
              e == null || (_ = e.threads_positions) == null
                ? void 0
                : _.length) != null
              ? p
              : 0) === 0;
    }
    function P(e) {
      var t,
        n,
        r = e.campaign.targeting,
        o = (t = r == null ? void 0 : r.publisher_platforms) != null ? t : [],
        a = (n = r == null ? void 0 : r.whatsapp_positions) != null ? n : [];
      if (!o.includes("whatsapp") || !a.includes("status")) return !1;
      var i = Array.isArray(a) ? a.length === 1 : a.size === 1;
      if (!i) return !1;
      var l = Array.isArray(o) ? o.length === 1 : o.size === 1;
      if (l) return !0;
      var s = r == null ? void 0 : r.facebook_positions,
        u = r == null ? void 0 : r.audience_network_positions,
        c = r == null ? void 0 : r.instagram_positions,
        d = r == null ? void 0 : r.messenger_positions,
        m = r == null ? void 0 : r.oculus_positions,
        p = r == null ? void 0 : r.threads_positions;
      return (
        (s == null || (Array.isArray(s) ? s.length === 0 : s.size === 0)) &&
        (u == null || (Array.isArray(u) ? u.length === 0 : u.size === 0)) &&
        (c == null || (Array.isArray(c) ? c.length === 0 : c.size === 0)) &&
        (d == null || (Array.isArray(d) ? d.length === 0 : d.size === 0)) &&
        (m == null || (Array.isArray(m) ? m.length === 0 : m.size === 0)) &&
        (p == null || (Array.isArray(p) ? p.length === 0 : p.size === 0))
      );
    }
    function N(e) {
      return e == null || e.length === 0
        ? !1
        : e.every(function (e) {
            return $(e);
          });
    }
    function M(e) {
      return e == null || e.length === 0
        ? !1
        : e.every(function (e) {
            return x(e);
          });
    }
    function w(e) {
      return e == null || e.length === 0
        ? !1
        : e.some(function (e) {
            return x(e);
          });
    }
    function A(e) {
      return w(e) && I();
    }
    function F(e) {
      var t,
        n,
        r = (t = e.targeting.publisher_platforms) != null ? t : [],
        o = (n = e.targeting.whatsapp_positions) != null ? n : [];
      return r.includes("whatsapp") && o.includes("status");
    }
    function O(e) {
      var t,
        n,
        r = (t = e.targeting.publisher_platforms) != null ? t : [],
        o = (n = e.targeting.whatsapp_positions) != null ? n : [];
      return r.includes("whatsapp") && o.includes("marketing_messages");
    }
    function B(e) {
      var t, n;
      if (e == null || e.targeting == null) return !1;
      var r = (t = e.targeting.publisher_platforms) != null ? t : [],
        o = (n = e.targeting.whatsapp_positions) != null ? n : [],
        a = Array.isArray(r) ? r.length : r.size,
        i = Array.isArray(o) ? o.length : o.size;
      return (
        a === 1 && i === 1 && r.includes("whatsapp") && o.includes("status")
      );
    }
    function W(e) {
      return x(e == null ? void 0 : e.spec);
    }
    function q(e) {
      return $(e == null ? void 0 : e.spec);
    }
    var U = ["external", "messaging_apps", "messenger", "whatsapp"];
    function V(e, t) {
      return !e || t == null ? !1 : !U.includes(t);
    }
    function H(e) {
      return !D() && !G() ? !1 : F(e) || (G() && K(e));
    }
    function G() {
      return (
        r("gkx")("19165") &&
        !r("AdsWAMOSensitiveAdvertisersUtils")
          .is_sensitive_vertical_restricted_account
      );
    }
    function z(e) {
      var t, n, r, o;
      return !!(
        (e == null || (t = e.publisher_platforms) == null
          ? void 0
          : t.length) === 1 &&
        (e == null || (n = e.whatsapp_positions) == null
          ? void 0
          : n.length) === 1 &&
        e != null &&
        (r = e.publisher_platforms) != null &&
        r.includes("whatsapp") &&
        e != null &&
        (o = e.whatsapp_positions) != null &&
        o.includes("marketing_messages")
      );
    }
    function j(e) {
      return z(e == null ? void 0 : e.spec);
    }
    function K(e) {
      var t, n;
      if (e == null || e.targeting == null) return !1;
      var r = (t = e.targeting.publisher_platforms) != null ? t : [],
        o = (n = e.targeting.whatsapp_positions) != null ? n : [],
        a = Array.isArray(r) ? r.length : r.size,
        i = Array.isArray(o) ? o.length : o.size;
      return (
        a === 1 &&
        i === 1 &&
        r.includes("whatsapp") &&
        o.includes("marketing_messages")
      );
    }
    ((l.getWAMOStatusEligibleObjectives = e),
      (l.getWAMOStatusEligibleDestinationTypes = s),
      (l.getWAMOStatusEligiblePromotedObjectTypes = u),
      (l.getWAMOStatusEligibleOptimizationGoal = c),
      (l.isWAMOStatusEligibleByDefault = d),
      (l.isAdAccountEligibleForWAMOStatus = m),
      (l.isAdAccountEligibleForEUExpansion = p),
      (l.isAdAccountAllowedWhatsAppStatusOnly = _),
      (l.isAdAccountInWAMOStatusOnlyReachImpExpansion = f),
      (l.isAdAccountEligibleForUAUsabilityH1_26 = g),
      (l.canSkipWAMOStatusOnlyBundlingCheck = h),
      (l.isAdAccountEligibleForCarouselExpansion = y),
      (l.isAdAccountEligibleForPartnershipAdsExpansion = C),
      (l.isAdAccountEligibleForCTWEBExpansion = b),
      (l.isAdAccountEligibleForDPACreation = v),
      (l.isCatalogVerticalSupportedForDPACreation = S),
      (l.isAdAccountEligibleForOCExpansion = R),
      (l.isAdAccountOnOCHoldoutBiglist = L),
      (l.isAPlusPBlockedForOCHoldout = E),
      (l.isAdAccountEligibleForLPVExpansion = k),
      (l.isAdAccountEligibleForLeadGenExpansion = I),
      (l.isAdAccountEligibleForAppAdsExpansion = T),
      (l.isAdAccountEligibleForUnknownAge = D),
      (l.isWAMOStatusSelectedFromSpec = x),
      (l.isOnlyWAMOStatusSelectedFromSpec = $),
      (l.isOnlyWAMOStatusSelectedFromAdObjects = P),
      (l.isOnlyWAMOStatusSelectedFromSpecs = N),
      (l.isWAMOStatusSelectedFromSpecs = M),
      (l.isWAMOStatusSelectedFromAnySpec = w),
      (l.shouldShowWAMOStatusLeadFormPreview = A),
      (l.isWAMOStatusSelectedFromCampaign = F),
      (l.isMarketingMessagesSelectedFromCampaign = O),
      (l.isOnlyWAMOStatusSelectedFromCampaign = B),
      (l.isWAMOStatusSelected = W),
      (l.isOnlyWAMOStatusSelected = q),
      (l.isDestinationDisabledForWAMOStatusOnly = V),
      (l.shouldShowUnknownAgeForCampaign = H),
      (l.isAdAccountEligibleForWAMMUnknownAge = G),
      (l.isOnlyMarketingMessagesSelectedFromSpec = z),
      (l.isOnlyMarketingMessagesSelected = j),
      (l.isOnlyMarketingMessagesSelectedFromCampaign = K));
  },
  98,
);
