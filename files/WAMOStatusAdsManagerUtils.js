__d(
  "WAMOStatusAdsManagerUtils",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppUrlUtils",
    "AdsPromotedObjectTypes",
    "AdsWAMOSensitiveAdvertisersUtils",
    "AdsWAMOSupportedCatalogVerticals",
    "AdsWAMOSupportedDestinationTypes",
    "AdsWAMOSupportedObjectives",
    "AdsWAMOSupportedOptimizationGoals",
    "AdsWAMOSupportedPromotedObjectTypes",
    "DeepRecordUtils",
    "ads-app-platforms",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var e;
      return (e = o("AdsWAMOSupportedObjectives").WAMOSupportedObjectives.get(
        "status",
      )) != null
        ? e
        : [];
    }
    function u(e) {
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
    function c(e) {
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
    function d(e) {
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
    function m() {
      var e = p(),
        t = r("AdsWAMOSensitiveAdvertisersUtils").is_default_off_accounts;
      return e && !t;
    }
    function p() {
      return (
        r("gkx")("931") &&
        !r("AdsWAMOSensitiveAdvertisersUtils")
          .is_sensitive_vertical_restricted_account
      );
    }
    function _() {
      return r("gkx")("7161");
    }
    function f() {
      return r("gkx")("8445");
    }
    function g() {
      return r("gkx")("13619");
    }
    function h() {
      return r("gkx")("12402");
    }
    function y(e) {
      if (f()) return !0;
      var t =
        e === r("AdsAPIOptimizationGoals").REACH ||
        e === r("AdsAPIOptimizationGoals").IMPRESSIONS;
      return t ? g() : !1;
    }
    function C() {
      return r("gkx")("21300");
    }
    function b() {
      return r("gkx")("11863");
    }
    function v() {
      return r("gkx")("9268");
    }
    function S() {
      return p() && v() && r("gkx")("12582");
    }
    function R(e) {
      if (e == null) return !1;
      var t = e.toLowerCase();
      return Array.from(
        o("AdsWAMOSupportedCatalogVerticals").WAMOSupportedCatalogVerticals,
      ).some(function (e) {
        return e.toLowerCase() === t;
      });
    }
    function L() {
      return r("gkx")("24679");
    }
    function E() {
      return r("gkx")("8203");
    }
    function k(e) {
      return e === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS && E();
    }
    function I() {
      return p() && r("gkx")("22304");
    }
    function T() {
      return p() && r("gkx")("14366");
    }
    function D() {
      return p() && r("gkx")("18157");
    }
    function x(e) {
      return e === r("AdsAPIObjectives").APP_INSTALLS && D();
    }
    function $(e) {
      return x(e.objective)
        ? e.objectStoreURL != null && e.objectStoreURL !== ""
          ? !r("AdsAppUrlUtils").isGooglePlayURL(e.objectStoreURL) &&
            !r("AdsAppUrlUtils").isItunesURL(e.objectStoreURL)
          : e.selectedAppStore != null &&
            e.selectedAppStore !==
              o("ads-app-platforms").MOBILE_STORE.GOOGLE_PLAY &&
            e.selectedAppStore !== o("ads-app-platforms").MOBILE_STORE.ITUNES
        : !1;
    }
    var P =
      ((e = {}),
      (e[r("AdsAPIOptimizationGoals").VALUE] = {
        supportsConversionLocation: function (t) {
          return (
            t === r("AdsPromotedObjectTypes").PIXEL ||
            t === r("AdsPromotedObjectTypes").WEBSITE ||
            t === r("AdsPromotedObjectTypes").PRODUCT_SET
          );
        },
        purchaseOnly: !0,
      }),
      (e[r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS] = {
        supportsConversionLocation: function (t) {
          return (
            t !== r("AdsPromotedObjectTypes").MOBILE_APP &&
            t !== r("AdsPromotedObjectTypes").WEB_AND_APP
          );
        },
        purchaseOnly: !1,
      }),
      e);
    function N(e) {
      return typeof e != "object" || e == null || !("custom_event_type" in e)
        ? !1
        : e.custom_event_type === "PURCHASE" &&
            (!("custom_conversion_id" in e) || e.custom_conversion_id == null);
    }
    function M(e) {
      var t,
        n = e.optimizationGoal != null ? P[e.optimizationGoal] : null;
      return n == null
        ? null
        : n.supportsConversionLocation(
              (t = e.conversionLocations) != null ? t : e.promotedObjectType,
            )
          ? n.purchaseOnly && !N(e.promotedObject)
            ? "CONVERSION_EVENT"
            : null
          : "CONVERSION_LOCATION";
    }
    function w() {
      return p();
    }
    function A(e) {
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
    function F(e) {
      var t, n, r, o, a, i, l, s, u, c, d, m, p, _;
      return !A(e) ||
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
    function O(e) {
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
    function B(e) {
      return e == null || e.length === 0
        ? !1
        : e.every(function (e) {
            return F(e);
          });
    }
    function W(e) {
      return e == null || e.length === 0
        ? !1
        : e.every(function (e) {
            return A(e);
          });
    }
    function q(e) {
      return e == null || e.length === 0
        ? !1
        : e.some(function (e) {
            return A(e);
          });
    }
    function U(e) {
      return q(e) && T();
    }
    function V(e) {
      var t,
        n,
        r = (t = e.targeting.publisher_platforms) != null ? t : [],
        o = (n = e.targeting.whatsapp_positions) != null ? n : [];
      return r.includes("whatsapp") && o.includes("status");
    }
    function H(e) {
      var t,
        n,
        r = (t = e.targeting.publisher_platforms) != null ? t : [],
        o = (n = e.targeting.whatsapp_positions) != null ? n : [];
      return r.includes("whatsapp") && o.includes("marketing_messages");
    }
    function G(e) {
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
    function z(e) {
      return A(e == null ? void 0 : e.spec);
    }
    function j(e) {
      return F(e == null ? void 0 : e.spec);
    }
    var K = ["external", "messaging_apps", "messenger", "whatsapp"];
    function Q(e, t) {
      return !e || t == null ? !1 : !K.includes(t);
    }
    function X(e) {
      return !w() && !Y() ? !1 : V(e) || ee(e);
    }
    function Y() {
      return (
        r("gkx")("19165") &&
        !r("AdsWAMOSensitiveAdvertisersUtils")
          .is_sensitive_vertical_restricted_account
      );
    }
    var J = [r("AdsAPIOptimizationGoals").LINK_CLICKS];
    function Z(e) {
      return e != null && J.includes(e);
    }
    function ee(e) {
      return (
        Y() && ie(e) && Z(e.optimization_goal) && !ne(e.placement_soft_opt_out)
      );
    }
    var te = [
      "facebook_positions",
      "audience_network_positions",
      "instagram_positions",
      "messenger_positions",
      "whatsapp_positions",
      "oculus_positions",
      "threads_positions",
      "streaming_services_positions",
    ];
    function ne(e) {
      var t = o("DeepRecordUtils").maybeToPlainObject(e);
      return t == null
        ? !1
        : te.some(function (e) {
            var n = t[e];
            return Array.isArray(n) && n.length > 0;
          });
    }
    function re(e) {
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
    function oe(e) {
      return re(e == null ? void 0 : e.spec);
    }
    function ae(e) {
      return oe(e) && !ne(e == null ? void 0 : e.softOptOutSpec);
    }
    function ie(e) {
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
    ((l.getWAMOStatusEligibleObjectives = s),
      (l.getWAMOStatusEligibleDestinationTypes = u),
      (l.getWAMOStatusEligiblePromotedObjectTypes = c),
      (l.getWAMOStatusEligibleOptimizationGoal = d),
      (l.isWAMOStatusEligibleByDefault = m),
      (l.isAdAccountEligibleForWAMOStatus = p),
      (l.isAdAccountEligibleForEUExpansion = _),
      (l.isAdAccountAllowedWhatsAppStatusOnly = f),
      (l.isAdAccountInWAMOStatusOnlyReachImpExpansion = g),
      (l.isAdAccountEligibleForUAUsabilityH1_26 = h),
      (l.canSkipWAMOStatusOnlyBundlingCheck = y),
      (l.isAdAccountEligibleForCarouselExpansion = C),
      (l.isAdAccountEligibleForPartnershipAdsExpansion = b),
      (l.isAdAccountEligibleForCTWEBExpansion = v),
      (l.isAdAccountEligibleForDPACreation = S),
      (l.isCatalogVerticalSupportedForDPACreation = R),
      (l.isAdAccountEligibleForOCExpansion = L),
      (l.isAdAccountOnOCHoldoutBiglist = E),
      (l.isAPlusPBlockedForOCHoldout = k),
      (l.isAdAccountEligibleForLPVExpansion = I),
      (l.isAdAccountEligibleForLeadGenExpansion = T),
      (l.isAdAccountEligibleForAppAdsExpansion = D),
      (l.isWAMOStatusAppPromotion = x),
      (l.isUnsupportedAppStoreForWAMOStatus = $),
      (l.getWAMOStatusGoalLimitViolation = M),
      (l.isAdAccountEligibleForUnknownAge = w),
      (l.isWAMOStatusSelectedFromSpec = A),
      (l.isOnlyWAMOStatusSelectedFromSpec = F),
      (l.isOnlyWAMOStatusSelectedFromAdObjects = O),
      (l.isOnlyWAMOStatusSelectedFromSpecs = B),
      (l.isWAMOStatusSelectedFromSpecs = W),
      (l.isWAMOStatusSelectedFromAnySpec = q),
      (l.shouldShowWAMOStatusLeadFormPreview = U),
      (l.isWAMOStatusSelectedFromCampaign = V),
      (l.isMarketingMessagesSelectedFromCampaign = H),
      (l.isOnlyWAMOStatusSelectedFromCampaign = G),
      (l.isWAMOStatusSelected = z),
      (l.isOnlyWAMOStatusSelected = j),
      (l.isDestinationDisabledForWAMOStatusOnly = Q),
      (l.shouldShowUnknownAgeForCampaign = X),
      (l.isAdAccountEligibleForWAMMUnknownAge = Y),
      (l.isWAMMUnknownAgeEligibleOptimizationGoal = Z),
      (l.isWAMMUnknownAgeEligibleForCampaign = ee),
      (l.isSoftOptOutConfigured = ne),
      (l.isOnlyMarketingMessagesSelectedFromSpec = re),
      (l.isOnlyMarketingMessagesSelected = oe),
      (l.isWAMMUnknownAgeEligiblePlacement = ae),
      (l.isOnlyMarketingMessagesSelectedFromCampaign = ie));
  },
  98,
);
