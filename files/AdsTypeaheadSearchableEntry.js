__d(
  "AdsTypeaheadSearchableEntry",
  [
    "fbt",
    "$InternalEnum",
    "AdsAPIObjectives",
    "AdsAssetFeedSimpleFieldCheckUtils",
    "AdsBuyingTypeNames",
    "AdsBwIUtils",
    "AdsCampaignStatusLabels",
    "AdsEditorIGBoostedUtils",
    "AdsOptimizationUtils",
    "SearchableEntry",
    "TypeCoercionUtils",
    "adsGetObjectiveName",
    "isEmpty",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = " \u2022 ",
      c = n("$InternalEnum").Mirrored(["ADS_AI", "DEFAULT"]);
    function d(e, t, n, a) {
      var i, l;
      a === void 0 && (a = c.DEFAULT);
      var d = e == null ? void 0 : e.effective_status,
        m = null;
      t === !0 || d == null
        ? (m = a === c.ADS_AI ? s._(/*BTDS*/ "In Draft") : s._(/*BTDS*/ "New"))
        : (m = r("AdsCampaignStatusLabels")[d]);
      var p = [
          m,
          e.id,
          r("adsGetObjectiveName")(
            e.objective,
            null,
            e.is_odax_campaign_group === !0,
          ),
          r("AdsBuyingTypeNames")[e.buying_type],
        ]
          .filter(function (e) {
            return !!e;
          })
          .join(u),
        _ =
          typeof e.start_time == "number"
            ? o("TypeCoercionUtils").convertTimestampToString(e.start_time)
            : e.start_time,
        f =
          typeof e.stop_time == "number"
            ? o("TypeCoercionUtils").convertTimestampToString(
                o("TypeCoercionUtils").coerceZeroToNull(e.stop_time),
              )
            : e.stop_time,
        g = !!(
          (i = e.special_ad_categories) != null &&
          i.some(function (e) {
            return e !== "NONE";
          })
        );
      return new (r("SearchableEntry"))({
        subtitle: p,
        title: (l = e == null ? void 0 : e.name) != null ? l : "",
        uniqueID: e.id,
        auxiliaryData: {
          isPCAUnified: e == null ? void 0 : e.is_pca_unified,
          adCreationPackageConfig:
            e == null ? void 0 : e.ad_creation_package_config,
          isBwI: o("AdsBwIUtils").isBwICampaignGroup(e),
          isIGPromoteBoostedPost: o(
            "AdsEditorIGBoostedUtils",
          ).isTypeaheadCampaignGroupIgPromoteBoostedPost(e),
          isODAXCampaignGroup: e.is_odax_campaign_group === !0,
          bidStrategy: e.bid_strategy,
          buyingType: e.buying_type,
          dailyBudget:
            e.daily_budget != null ? parseInt(e.daily_budget, 10) : null,
          lifetimeBudget:
            e.lifetime_budget != null ? parseInt(e.lifetime_budget, 10) : null,
          objective: e.objective,
          toplineID: e.topline_id,
          promotedObject: e.promoted_object,
          selectedCampaigns: n,
          status: d,
          startTime: _,
          stopTime: f,
          smart_promotion_type: e.smart_promotion_type,
          isCampaignGroupRegulated: g,
          automation_unified_campaign_type: e.automation_unified_campaign_type,
        },
      });
    }
    function m(e, t, n) {
      var o =
        t === !0
          ? [n === !0 ? s._(/*BTDS*/ "New") : null, e.id]
              .filter(function (e) {
                return !!e;
              })
              .join(u)
          : null;
      return new (r("SearchableEntry"))({
        title: e.name,
        subtitle: o,
        uniqueID: e.id,
        auxiliaryData: {
          campaignGroup:
            e.campaign != null && e.campaign != null ? d(e.campaign) : null,
          campaign: e.adset != null ? p(e.adset) : null,
        },
      });
    }
    function p(e, t, n) {
      var r,
        o = (r = e.campaign) == null ? void 0 : r.name,
        a = [
          t === !0 ? s._(/*BTDS*/ "New") : null,
          e.id,
          s._(/*BTDS*/ "Campaign: {Campaign Name}", [
            s._param("Campaign Name", o),
          ]),
        ]
          .filter(function (e) {
            return !!e;
          })
          .join(u);
      return _(e, a, n);
    }
    function _(t, n, a) {
      var i,
        l,
        u,
        c = t.campaign,
        m = (i = (l = t.campaign) == null ? void 0 : l.name) != null ? i : "",
        p = o("AdsAssetFeedSimpleFieldCheckUtils").isCampaignWithDCAssetFeed(t),
        _ = s._(/*BTDS*/ "Ad sets");
      return new (r("SearchableEntry"))({
        subtitle: n,
        title: t.name || t.id,
        uniqueID: t.id || "NEW_CAMPAIGN_GROUP_ID",
        auxiliaryData: {
          campaignGroupID: (u = t.campaign) == null ? void 0 : u.id,
          campaignGroup: m ? d(c) : null,
          campaign: t,
          hasPricing: f(t),
          hasTargeting: !(e || (e = r("isEmpty")))(t.targeting),
          hasAdWithDynamicCreative:
            (a == null ? void 0 : a.hasDraftAdWithDynamicCreative) === !0 || p,
          hasAdWithACO: (a == null ? void 0 : a.hasDraftAdWithACO) === !0 || !1,
          promotedObject: t.promoted_object,
        },
        type: _,
      });
    }
    function f(e) {
      var t,
        n = (t = e.campaign) == null ? void 0 : t.buying_type;
      return !!(
        !o("AdsOptimizationUtils").supportsOptimizationFields(n) ||
        e.bid_type != null ||
        (e.optimization_goal &&
          e.optimization_goal !== r("AdsAPIObjectives").NONE)
      );
    }
    function g(e) {
      return new (r("SearchableEntry"))({
        title: e.name,
        uniqueID: e.account_id,
        auxiliaryData: {
          accountStatus: e.account_status,
          business: e.business,
          viewableBusiness: e.viewable_business,
          modeledReportingType: e.modeled_reporting_type,
          userpermissions: e.userpermissions,
        },
      });
    }
    function h(e) {
      return new (r("SearchableEntry"))({
        title: e.name,
        uniqueID: e.id,
        photo: e.pictureURL != null ? e.pictureURL.toString() : null,
      });
    }
    ((l.TypeaheadDisplayContext = c),
      (l.createForCampaignGroup = d),
      (l.createForAdgroup = m),
      (l.createForCampaign = p),
      (l.createForCampaignWithSubtitle = _),
      (l.campaignHasPricing = f),
      (l.createForAccount = g),
      (l.createForBusiness = h));
  },
  226,
);
