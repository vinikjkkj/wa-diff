__d(
  "NativeCommerceExperienceLoggingUtils",
  ["$InternalEnum", "AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = n("$InternalEnum"))({
        DYNAMIC_ADS: "Dynamic Ads",
        STATIC_ADS: "Static Ads",
      }),
      u = e({
        ENTRY: "entry",
        ELIGIBILITY_CHECK: "eligibility_check",
        FEATURE_IMPRESSION: "feature_impression",
        INTERACTION: "interaction",
        CONFIGURATION: "configuration",
        VALIDATION: "validation",
        PUBLISH_ATTEMPT: "publish_attempt",
        PUBLISH_SUCCESS: "publish_success",
        PUBLISH_FAILURE: "publish_failure",
      }),
      c = e({
        CLICK_TOGGLE: "click_toggle",
        CHANGE_DESTINATION: "change_destination",
        CHANGE_LINK_TYPE: "change_link_type",
      }),
      d = e({
        SHOPS_ADS: "shops_ads",
        PRODUCT_BROWSING: "product_browsing",
        NON_CTA_PRODUCT_BROWSING: "non_cta_product_browsing",
        COMMON: "common",
      });
    function m(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l = {
          entrypoint: e.entrypoint,
          nce_ads_type: (n = e.nceAdsType) != null ? n : null,
          is_optin: (r = e.isOptin) != null ? r : null,
          is_toggle_disabled: (o = e.isToggleDisabled) != null ? o : null,
          experience_type: (a = e.experienceType) != null ? a : d.COMMON,
          checking_source: e.checkingSource,
        };
      if (t != null) for (var s in t) l[s] = t[s];
      return (
        (i = {}),
        (i.sub_event = e.funnelStep),
        (i.is_object_published = e.isAdPublished),
        (i.campaign_group_id = e.campaignGroupId),
        (i.campaign_id = e.campaignId),
        (i.adgroup_id = e.adgroupId),
        (i.message = JSON.stringify(l)),
        i
      );
    }
    function p(e, t, n, o) {
      var a = { is_eligible: t, ineligible_reason: n };
      if (o != null) for (var i in o) a[i] = o[i];
      var l = m(e, a);
      r("AdsInterfacesLogger").log({
        eventName: "nce_user_journey_tracking",
        data: l,
      });
    }
    function _(e) {
      var t = m(e);
      r("AdsInterfacesLogger").logOnce({
        eventName: "nce_user_journey_tracking",
        data: t,
      });
    }
    function f(e, t) {
      var n = m(e, { interaction_type: t });
      r("AdsInterfacesLogger").log({
        eventName: "nce_user_journey_tracking",
        data: n,
      });
    }
    ((l.NativeCommerceExperienceShopsAdsType = s),
      (l.NativeCommerceExperienceFunnelStep = u),
      (l.NativeCommerceExperienceShopsAdsInteractionType = c),
      (l.NativeCommerceExperienceType = d),
      (l.logNCEEligibilityCheck = p),
      (l.logNCEFeatureImpression = _),
      (l.logNCEInteraction = f));
  },
  98,
);
