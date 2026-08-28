__d(
  "AdsODAXUtils",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsFullFunnelUtils",
    "AdsPromotedObjectTypes",
    "AdsUniformValue",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = new Set([
        (m = r("AdsAPIObjectives")).OUTCOME_AWARENESS,
        m.OUTCOME_ENGAGEMENT,
        m.OUTCOME_LEADS,
        m.OUTCOME_SALES,
      ]),
      g = new Set([
        m.OUTCOME_AWARENESS,
        m.OUTCOME_ENGAGEMENT,
        m.OUTCOME_LEADS,
        m.OUTCOME_SALES,
        m.LINK_CLICKS,
        m.APP_INSTALLS,
      ]),
      h = new Set([m.OUTCOME_ENGAGEMENT, m.OUTCOME_LEADS, m.OUTCOME_SALES]),
      y = (p = r("immutable")).Map(
        ((d = {}),
        (d[m.OUTCOME_LEADS] = p.Map(
          ((e = {}),
          (e[(_ = r("AdsPromotedObjectTypes")).PIXEL] = m.CONVERSIONS),
          (e[_.WEBSITE_AND_PHONE_CALL] = m.CONVERSIONS),
          (e[_.WEBSITE_AND_INSTANT_FORM] = m.CONVERSIONS),
          (e[_.MOBILE_APP] = m.CONVERSIONS),
          (e[_.MESSENGER] = m.MESSAGES),
          (e[_.WHATSAPP] = m.LEAD_GENERATION),
          (e[_.LEAD_FORM_MESSENGER] = m.LEAD_GENERATION),
          (e[_.LEAD_FROM_IG_DIRECT] = m.LEAD_GENERATION),
          (e[_.ON_AD] = m.LEAD_GENERATION),
          (e[_.PRODUCT_SET] = m.LEAD_GENERATION),
          (e[_.PHONE_CALL] = m.LEAD_GENERATION),
          (e[_.LIVE_VIDEO] = m.CONVERSIONS),
          e),
        )),
        (d[m.OUTCOME_ENGAGEMENT] = p.Map(
          ((s = {}),
          (s[_.PIXEL] = m.CONVERSIONS),
          (s[_.MOBILE_APP] = m.CONVERSIONS),
          (s[_.MESSENGER] = m.MESSAGES),
          (s[_.WHATSAPP] = m.MESSAGES),
          (s[_.INSTAGRAM] = m.MESSAGES),
          (s[_.PAGE] = m.PAGE_LIKES),
          (s[_.VIDEO] = m.VIDEO_VIEWS),
          (s[_.POST] = m.POST_ENGAGEMENT),
          (s[_.EVENT] = m.EVENT_RESPONSES),
          (s[_.GROUP] = m.LINK_CLICKS),
          (s[_.REMINDER] = m.LINK_CLICKS),
          (s[_.PHONE_CALL] = m.CONVERSIONS),
          (s[_.WHATSAPP_CHANNEL] = m.LINK_CLICKS),
          (s[_.IG_PROFILE_AND_FB_PAGE] = m.LINK_CLICKS),
          (s[_.LIVE_VIDEO] = m.VIDEO_VIEWS),
          s),
        )),
        (d[m.OUTCOME_SALES] = p.Map(
          ((u = {}),
          (u[_.PIXEL] = m.CONVERSIONS),
          (u[_.MOBILE_APP] = m.CONVERSIONS),
          (u[_.WEB_AND_APP] = m.CONVERSIONS),
          (u[_.WEB_AND_SHOP] = m.CONVERSIONS),
          (u[_.MESSENGER] = m.CONVERSIONS),
          (u[_.WHATSAPP] = m.CONVERSIONS),
          (u[_.INSTAGRAM] = m.CONVERSIONS),
          (u[_.PRODUCT_SET] = m.PRODUCT_CATALOG_SALES),
          (u[_.DONATION] = m.CONVERSIONS),
          (u[_.PHONE_CALL] = m.CONVERSIONS),
          (u[_.PARTNER_EVENT] = m.CONVERSIONS),
          (u[_.IN_STORE] = m.CONVERSIONS),
          (u[_.WEBSITE_AND_IN_STORE] = m.CONVERSIONS),
          (u[_.WEBSITE_APP_AND_IN_STORE] = m.CONVERSIONS),
          (u[_.WEBSITE_AND_PHONE_CALL] = m.CONVERSIONS),
          (u[_.WEBSITE_AND_MESSAGES] = m.CONVERSIONS),
          (u[_.WEBSITE_AND_INSTANT_FORM] = m.CONVERSIONS),
          (u[_.LIVE_VIDEO] = m.CONVERSIONS),
          u),
        )),
        (d[m.OUTCOME_AWARENESS] = p.Map(
          ((c = {}), (c[_.PLACE_PAGE_SET_ID] = m.STORE_VISITS), c),
        )),
        d),
      );
    function C(e) {
      return f.has(e);
    }
    function b(e) {
      return (
        !f.has(e) &&
        e !== r("AdsAPIObjectives").LINK_CLICKS &&
        e !== r("AdsAPIObjectives").APP_INSTALLS
      );
    }
    function v(e) {
      return g.has(e);
    }
    function S(e, t) {
      return (
        h.has(e) && $(e, t) !== r("AdsAPIObjectives").PRODUCT_CATALOG_SALES
      );
    }
    function R(e, t) {
      var n, o;
      return (n = (o = y.get(e)) == null ? void 0 : o.get(t)) != null
        ? n
        : r("AdsAPIObjectives").NONE;
    }
    var L = [
      r("AdsAPIOptimizationGoals").THRUPLAY,
      r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
      r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS,
    ];
    function E(e, t, n, o) {
      if (n === r("AdsAPIObjectives").OUTCOME_AWARENESS) {
        var a = e instanceof r("AdsUniformValue") ? e.getValue() : null,
          i = t instanceof r("AdsUniformValue") ? t.getValue() : null;
        if (a == null || a === i) return null;
        var l = L.includes(a),
          s = o
            .filter(function (e) {
              var t,
                n = (t = e.getValue()) == null ? void 0 : t.optimization_goal;
              if (n == null) return !1;
              var r = L.includes(n);
              return l !== r;
            })
            .keySeq()
            .toSet();
        return s.size > 0 ? s : null;
      }
    }
    function k(e, t) {
      if (e !== r("AdsAPIObjectives").OUTCOME_AWARENESS) return e;
      switch (t) {
        case r("AdsAPIOptimizationGoals").AD_RECALL_LIFT:
          return r("AdsAPIObjectives").BRAND_AWARENESS;
        case r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS:
        case r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS:
        case r("AdsAPIOptimizationGoals").THRUPLAY:
          return r("AdsAPIObjectives").VIDEO_VIEWS;
        default:
          return r("AdsAPIObjectives").REACH;
      }
    }
    function I(e, t, n) {
      return t !== r("AdsPromotedObjectTypes").LIVE_VIDEO
        ? e
        : n === r("AdsAPIOptimizationGoals").CONVERSATIONS
          ? r("AdsAPIObjectives").MESSAGES
          : n === r("AdsAPIOptimizationGoals").THRUPLAY
            ? r("AdsAPIObjectives").VIDEO_VIEWS
            : (n === r("AdsAPIOptimizationGoals").MESSAGING_PURCHASE_CONVERSION,
              r("AdsAPIObjectives").CONVERSIONS);
    }
    function T(e, t, n) {
      return t === r("AdsPromotedObjectTypes").PLACE_PAGE_SET_ID &&
        n === r("AdsAPIOptimizationGoals").REACH
        ? $(e, t)
        : k(e, n);
    }
    function D(e, t, n) {
      return t === r("AdsPromotedObjectTypes").WHATSAPP &&
        n === r("AdsAPIOptimizationGoals").CONVERSATIONS
        ? r("AdsAPIObjectives").MESSAGES
        : $(e, t);
    }
    function x(e, t, n) {
      return t === r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE &&
        n === r("AdsAPIOptimizationGoals").PAGE_LIKES
        ? r("AdsAPIObjectives").PAGE_LIKES
        : $(e, t);
    }
    function $(e, t) {
      return C(e) && t != null && t !== r("AdsPromotedObjectTypes").NONE
        ? R(e, t)
        : e;
    }
    function P(e, t, n) {
      if (t === r("AdsPromotedObjectTypes").LIVE_VIDEO) return I(e, t, n);
      switch (e) {
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return D(e, t, n);
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
          return T(e, t, n);
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return x(e, t, n);
        default:
          return o("AdsFullFunnelUtils").isAccountFullFunnelEligible() &&
            e === r("AdsAPIObjectives").OUTCOME_SALES &&
            n === r("AdsAPIOptimizationGoals").REACH
            ? T(r("AdsAPIObjectives").OUTCOME_AWARENESS, t, n)
            : $(e, t);
      }
    }
    function N(e) {
      var t;
      return (
        (e == null ? void 0 : e.objective) ===
          r("AdsAPIObjectives").OUTCOME_SALES &&
        (e == null || (t = e.promoted_object) == null
          ? void 0
          : t.product_catalog_id) != null
      );
    }
    function M(e, t, n) {
      return (
        e === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
        t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
        n != null
      );
    }
    function w(e, t) {
      return e === !0 && t === r("AdsAPIObjectives").LINK_CLICKS;
    }
    ((l.ODAX_SPECIFIC_OBJECTIVES = f),
      (l.ODAX_ALL_OBJECTIVES = g),
      (l.ODAX_OBJECTIVES_WITH_CONVERSION_CHANNEL = h),
      (l.isODAXSpecificObjective = C),
      (l.isLegacySpecificObjective = b),
      (l.isAnyODAXObjective = v),
      (l.shouldShowOutcomeConversionChannelsSection = S),
      (l.getExistingObjective = R),
      (l.AWARENESS_VIDEO_VIEWS_OPTIMIZATION_GOALS = L),
      (l.getCampaignsSwitchedToFromVVNeedResetAdgroups = E),
      (l.maybeTranslateObjectiveByPromotedObjectType = $),
      (l.maybeTranslateObjective = P),
      (l.isODAXSalesCatalogCampaignGroup = N),
      (l.isSTOSalesCampaign = M),
      (l.isODAXTrafficCampaignGroup = w));
  },
  98,
);
