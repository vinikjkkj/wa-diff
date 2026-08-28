__d(
  "AdsAPICampaignRecordUtilsShared",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupRecordUtilsShared",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAppUtilsShared",
    "AdsManagerIGLoginUtils",
    "AdsPromotedObjectTypes",
    "AdsPromotedObjectUtilsShared",
    "AdsUnifiedProfileVisitUtils",
    "ODS",
    "adsConvertAdObjectRecordToPlainJS",
    "cr:13711",
    "cr:4119",
    "gkx",
    "immutable",
    "isTruthy",
    "qex",
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
      f = (m = r("immutable")).Map(
        ((c = {}),
        (c[r("AdsAPIObjectives").OUTCOME_LEADS] = m.Map(
          ((e = {}),
          (e[(p = r("AdCampaignDestination")).LEAD_FROM_IG_DIRECT] = (_ = r(
            "AdsPromotedObjectTypes",
          )).LEAD_FROM_IG_DIRECT),
          (e[p.LEAD_FORM_MESSENGER] = _.LEAD_FORM_MESSENGER),
          (e[p.WEBSITE_AND_LEAD_FORM] = _.WEBSITE_AND_INSTANT_FORM),
          (e[p.ON_AD] = _.ON_AD),
          (e[p.PHONE_CALL] = _.PHONE_CALL),
          (e[p.WEBSITE_AND_PHONE_CALL] = _.WEBSITE_AND_PHONE_CALL),
          e),
        )),
        (c[r("AdsAPIObjectives").OUTCOME_ENGAGEMENT] = m.Map(
          ((s = {}),
          (s[p.ON_PAGE] = _.PAGE),
          (s[p.ON_POST] = _.POST),
          (s[p.ON_VIDEO] = _.VIDEO),
          (s[p.ON_EVENT] = _.EVENT),
          (s[p.ON_GROUP] = _.GROUP),
          (s[p.ON_REMINDER] = _.REMINDER),
          (s[p.IMAGINE] = _.IMAGINATION),
          (s[p.INSTAGRAM_PROFILE_AND_FACEBOOK_PAGE] = _.IG_PROFILE_AND_FB_PAGE),
          (s[p.INSTAGRAM_PROFILE] = _.IG_PROFILE_AND_FB_PAGE),
          (s[p.FACEBOOK_PAGE] = _.IG_PROFILE_AND_FB_PAGE),
          s),
        )),
        (c[r("AdsAPIObjectives").LINK_CLICKS] = m.Map(
          ((u = {}),
          (u[p.ON_GROUP] = _.GROUP),
          (u[p.WEBSITE_IN_STORE] = _.WEBSITE_AND_IN_STORE),
          (u[p.WEBSITE_AND_PHONE_CALL] = _.WEBSITE_AND_PHONE_CALL),
          u),
        )),
        c),
      );
    function g(e, t, n, r, a) {
      r === void 0 && (r = null);
      var i = v(e, t, n, r, a);
      return (
        (d || (d = o("ODS"))).bumpEntityKey(
          8796,
          "promoted_object_type",
          "AdsAPICampaignRecordUtilsShared.js." + i,
        ),
        i
      );
    }
    function h(e, t, a, i, l) {
      var s, u, c, d;
      i === void 0 && (i = null);
      var m = a == null ? void 0 : a.destination_type;
      if (
        (m === r("AdCampaignDestination").MESSENGER ||
          m ===
            r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER ||
          m ===
            r("AdCampaignDestination")
              .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP ||
          m === r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP) &&
        t !== r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
        t !== r("AdsAPIObjectives").STORE_VISITS
      )
        return r("AdsPromotedObjectTypes").MESSENGER;
      if (
        m === r("AdCampaignDestination").WHATSAPP ||
        m === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP
      )
        return r("AdsPromotedObjectTypes").WHATSAPP;
      if (m === r("AdCampaignDestination").INSTAGRAM_DIRECT)
        return r("AdsPromotedObjectTypes").INSTAGRAM;
      var p =
        l &&
        (s = o("AdsAPIAdgroupRecordUtilsShared").isExistingPostAdForCTXMD(l)) !=
          null
          ? s
          : !1;
      if (
        (l == null ||
        (u = l.creative) == null ||
        (u = u.asset_feed_spec) == null ||
        (u = u.additional_data) == null
          ? void 0
          : u.is_click_to_message) === !0 &&
        (m == null || m === r("AdCampaignDestination").UNDEFINED) &&
        !p
      )
        return r("AdsPromotedObjectTypes").MESSENGER;
      if (m === r("AdCampaignDestination").INSTAGRAM_PROFILE) {
        if (r("qex")._("5442"))
          return r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE;
        var _ = o("AdsManagerIGLoginUtils").getIsIGLogin(e);
        return o(
          "AdsUnifiedProfileVisitUtils",
        ).getIsEligibleForUnifiedProfileVisits(_)
          ? r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE
          : r("AdsPromotedObjectTypes").INSTAGRAM_PROFILE;
      }
      if (
        o(
          "AdsUnifiedProfileVisitUtils",
        ).getUnifiedProfileVisitsDestinationContainsFB(m) ||
        (m === r("AdCampaignDestination").ON_PAGE &&
          n("cr:13711") != null &&
          n("cr:13711").isAccountEligibleForProfileAndPageEngagement())
      )
        return r("AdsPromotedObjectTypes").IG_PROFILE_AND_FB_PAGE;
      if (
        m === r("AdCampaignDestination").INSTAGRAM_LIVE ||
        m === r("AdCampaignDestination").FACEBOOK_LIVE
      )
        return r("AdsPromotedObjectTypes").LIVE_VIDEO;
      if (m === r("AdCampaignDestination").PHONE_CALL)
        return r("AdsPromotedObjectTypes").PHONE_CALL;
      if (m === r("AdCampaignDestination").WEBSITE_AND_MESSAGES)
        return r("AdsPromotedObjectTypes").WEBSITE_AND_MESSAGES;
      if (m === r("AdCampaignDestination").WEBSITE_AND_PHONE_CALL)
        return r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL;
      if (m === r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM)
        return r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM;
      var g = a == null ? void 0 : a.promoted_object;
      if (
        (g == null ? void 0 : g.product_set_id) != null &&
        t === r("AdsAPIObjectives").OUTCOME_LEADS &&
        (m === r("AdCampaignDestination").ON_AD ||
          m === r("AdCampaignDestination").LEAD_FORM_MESSENGER)
      )
        return r("AdsPromotedObjectTypes").PRODUCT_SET;
      if (
        (g == null ? void 0 : g.place_page_set_id) != null &&
        t === r("AdsAPIObjectives").OUTCOME_AWARENESS
      )
        return r("AdsPromotedObjectTypes").PLACE_PAGE_SET_ID;
      var h =
        m == null || t == null || (c = f.get(t)) == null ? void 0 : c.get(m);
      if (h) return h;
      if (g == null)
        return i != null
          ? i
          : o("AdsPromotedObjectUtilsShared").getDefaultPromotedObjectType(t);
      var y = g.product_set_id,
        C = r("isTruthy")(y),
        b = r("isTruthy")(g.variation);
      if (
        C &&
        b &&
        (t === r("AdsAPIObjectives").OUTCOME_SALES ||
          t === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES)
      )
        return r("AdsPromotedObjectTypes").PRODUCT_SET;
      if (
        g.omnichannel_object != null &&
        (t === r("AdsAPIObjectives").CONVERSIONS ||
          t === r("AdsAPIObjectives").OUTCOME_SALES)
      ) {
        var v, S;
        if (
          ((v = g.omnichannel_object) == null ||
          (v = v.offline) == null ||
          (v = v.at(0)) == null
            ? void 0
            : v.offline_conversion_data_set_id) != null
        ) {
          var R, L, E;
          return r("gkx")("19547") &&
            ((R = g.omnichannel_object) == null ? void 0 : R.offline) != null &&
            ((L = g.omnichannel_object) == null ? void 0 : L.pixel) == null
            ? r("AdsPromotedObjectTypes").IN_STORE
            : ((E = g.omnichannel_object) == null ||
                (E = E.app) == null ||
                (E = E.at(0)) == null
                  ? void 0
                  : E.application_id) != null
              ? r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE
              : r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE;
        }
        if (
          ((S = g.omnichannel_object) == null ||
          (S = S.onsite) == null ||
          (S = S.at(0)) == null
            ? void 0
            : S.onboarding_state) == null
        )
          return r("AdsPromotedObjectTypes").WEB_AND_APP;
      }
      var k = g.object_store_url;
      if (o("AdsAppUtilsShared").isFacebookDesktopURL(k))
        return r("AdsPromotedObjectTypes").CANVAS_APP;
      var I = g.application_id;
      if (I != null || k != null)
        return y != null && g.pixel_id != null
          ? r("AdsPromotedObjectTypes").WEB_AND_APP
          : r("AdsPromotedObjectTypes").MOBILE_APP;
      if (
        (t === r("AdsAPIObjectives").CONVERSIONS ||
          t === r("AdsAPIObjectives").OUTCOME_SALES) &&
        m === r("AdCampaignDestination").DONATION &&
        r("gkx")("1495")
      )
        return r("AdsPromotedObjectTypes").DONATION;
      var T = g.pixel_id,
        D = g.custom_conversion_id;
      if (
        r("isTruthy")(T) ||
        r("isTruthy")(D) ||
        (r("isTruthy")(y) && t === r("AdsAPIObjectives").CONVERSIONS)
      )
        return r("AdsPromotedObjectTypes").PIXEL;
      if (y !== void 0 && t === r("AdsAPIObjectives").LINK_CLICKS)
        return r("AdsPromotedObjectTypes").WEBSITE;
      var x =
          t == null
            ? !1
            : (d = n("cr:4119").resolve({ objective: t })) == null
              ? void 0
              : d.isProductSetAsOfflineConversionSetProxySupported(e),
        $ = a == null ? void 0 : a.optimization_goal,
        P = g.offline_conversion_data_set_id;
      if (
        P !== void 0 ||
        $ === r("AdsAPIOptimizationGoals").OFFLINE_CONVERSIONS
      ) {
        if (y == null) return r("AdsPromotedObjectTypes").OFFLINE_EVENT_SET;
        if (x) return r("AdsPromotedObjectTypes").OFFLINE_EVENT_SET;
      }
      return y != null && !o("AdsAppUtilsShared").isAppInstall(t)
        ? r("AdsPromotedObjectTypes").PRODUCT_SET
        : m === r("AdCampaignDestination").LEAD_FORM_MESSENGER
          ? r("AdsPromotedObjectTypes").LEAD_FORM_MESSENGER
          : m === r("AdCampaignDestination").LEAD_FROM_IG_DIRECT
            ? r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT
            : m === r("AdCampaignDestination").WHATSAPP_CHANNEL
              ? r("AdsPromotedObjectTypes").WHATSAPP_CHANNEL
              : i != null
                ? i
                : o(
                    "AdsPromotedObjectUtilsShared",
                  ).getDefaultPromotedObjectType(t);
    }
    function y(e) {
      return b(e) != null || C(e) != null;
    }
    function C(e) {
      var t,
        n = r("adsConvertAdObjectRecordToPlainJS")(e);
      return (t = n.targeting) == null ||
        (t = t.subscriber_universe) == null ||
        (t = t.whatsapp_subscriber_source) == null
        ? void 0
        : t.id;
    }
    function b(e) {
      var t,
        n = r("adsConvertAdObjectRecordToPlainJS")(e);
      return (t = n.targeting) == null ||
        (t = t.subscriber_universe) == null ||
        (t = t.whatsapp_subscriber_pool) == null
        ? void 0
        : t.id;
    }
    function v(e, t, n, r, o) {
      var a;
      r === void 0 && (r = null);
      var i =
          n == null || (a = n.promoted_object) == null
            ? void 0
            : a.full_funnel_objective,
        l = h(e, i || t, n, r, o);
      return l;
    }
    var S = {
      NONE: "none_full_funnel",
      AWARENESS: "full_funnel_awareness",
      SALES: "full_funnel_sales",
    };
    ((l.getPromotedObjectType = g),
      (l.getIsWhatsAppMarketingMessagesActiveByDefault = y),
      (l.FullFunnelNamingTemplateStates = S));
  },
  98,
);
