__d(
  "AdsOptimizationGoalUtils",
  [
    "AdsAPIBidStrategies",
    "AdsAPICampaignRecordUtils",
    "AdsAPIObjectiveOptimizationGoals",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAudienceDirectConfig",
    "AdsBiddingOptimizationUtils",
    "AdsCampaignOptimizationPluginResolver",
    "AdsCostStrategyUtils",
    "AdsLeadGenLeadNurturingCLOUtil",
    "AdsLegacyObjectivesUtils",
    "AdsODAXUtils",
    "AdsOptimizationGoalsDeprecationContent",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyGKUtils",
    "AdsVolumeROASUtils",
    "FBLogger",
    "LoadObject",
    "gkx",
    "isLeadGenNPVOEnabledForAccount",
    "isSixSecondVideoViewsEnabledForAccount",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("LoadObject").withValue([], { creatorModuleID: i.id });
    function s(e) {
      return (
        e == null ||
        e === r("AdsAPIBidStrategies").LOWEST_COST_WITHOUT_CAP ||
        e === r("AdsAPIBidStrategies").MAXIMIZE_VALUE
      );
    }
    function u(e, t) {
      var n = o(
        "AdsLegacyObjectivesUtils",
      ).convertToLegacyAppInstallsObjectives_HACK(e, t);
      return Object.prototype.hasOwnProperty.call(
        r("AdsAPIObjectiveOptimizationGoals"),
        n,
      )
        ? Object.keys(r("AdsAPIObjectiveOptimizationGoals")[n].VALID)
        : [];
    }
    function c(e) {
      var t = e.destinationType,
        n = e.fullFunnelObjective,
        o = e.objective,
        a = e.promotedObjectType,
        i = r("AdsCampaignOptimizationPluginResolver").resolve({
          objective: n || o,
          promotedObjectType: a,
          destinationType: t,
        });
      return d(i, e);
    }
    function d(e, t) {
      return e.getSupportedOptimizationGoals != null
        ? e.getSupportedOptimizationGoals(t)
        : (t.objective !== r("AdsAPIObjectives").NONE &&
            t.promotedObjectType !== r("AdsPromotedObjectTypes").NONE &&
            r("FBLogger")("AdsOptimizationGoalUtils").warn(
              '%s.getSupportedOptimizationGoals is missing for objective "%s" and promoted object "%s"',
              e.key,
              t.objective,
              t.promotedObjectType,
            ),
          u(t.objective, t.promotedObjectType));
    }
    function m(e, t, n, a) {
      if (
        (t === r("AdsAPIObjectives").CONVERSIONS ||
          t === r("AdsAPIObjectives").MESSAGES) &&
        a === r("AdsPromotedObjectTypes").MESSENGER
      )
        return !0;
      var i = o(
        "AdsLegacyObjectivesUtils",
      ).convertToLegacyAppInstallsObjectives_HACK(t, a);
      if (
        (i === r("AdsAPIObjectives").MOBILE_APP_INSTALLS ||
          i === r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT) &&
        e === r("AdsAPIOptimizationGoals").LINK_CLICKS
      )
        return !0;
      var l = o("AdsODAXUtils").maybeTranslateObjective(
        r("AdsAPIObjectives")[t],
        a,
        e,
      );
      if (
        b(e, l, a) ||
        (l === r("AdsAPIObjectives").VIDEO_VIEWS &&
          e === r("AdsAPIOptimizationGoals").IMPRESSIONS &&
          r("AdsAudienceDirectConfig").isDirectDealsUser)
      )
        return !0;
      i === r("AdsAPIObjectives").LINK_CLICKS &&
        n != null &&
        n == !0 &&
        (i = r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT);
      var s = r("AdsAPIObjectiveOptimizationGoals")[i];
      return !!s && !!Object.prototype.hasOwnProperty.call(s.VALID, e);
    }
    function p(e, t) {
      var n =
        t === r("AdsAPIObjectives").OUTCOME_SALES ||
        t === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES ||
        t === r("AdsAPIObjectives").CONVERSIONS;
      return (
        e === r("AdsAPIOptimizationGoals").VALUE ||
        (n &&
          e === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
          o("AdsVolumeROASUtils").isVolumeROASEnabled())
      );
    }
    function _(e, t, n, a, i, l, s, u) {
      if (s === r("AdsAPIBidStrategies").LOWEST_COST_WITH_MIN_ROAS)
        return p(n, t);
      if (i) {
        var c = o("AdsBiddingOptimizationUtils").canUseAveragePricePacing(
          e,
          n,
          null,
          !1,
          l,
        );
        return s === r("AdsAPIBidStrategies").COST_CAP
          ? o("AdsCostStrategyUtils").isEligibleForCostCap(c, n, u)
          : !1;
      } else
        return a
          ? o("AdsBiddingOptimizationUtils").canUseAutoBid(t, n)
          : o("AdsBiddingOptimizationUtils").canUseMaxBid(e, n);
    }
    function f(e, t, n) {
      return (
        o("AdsOptimizationGoalsDeprecationContent").getNotice(e, t, n) || null
      );
    }
    function g(e, t, n, o) {
      return n !== r("AdsAPIObjectives").VIDEO_VIEWS ||
        t.getValues().includes(!0) ||
        !e
        ? !1
        : o.getValues().length > 0 &&
            !o
              .getValues()
              .includes(
                r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
              );
    }
    function h(e, t, n, a, i, l, s, u, c, d) {
      var m,
        p,
        _,
        f,
        g,
        h,
        y = t == null ? void 0 : t.objective,
        C = o("AdsAPICampaignRecordUtils").getPromotedObjectType(y, n),
        b = {
          campaign: n,
          campaignGroup: t,
          hasBackingApplication: !!(
            (m = n.promoted_object) != null && m.application_id
          ),
          promotedObjectType: C,
          pageID: c,
          canUseVOForCatalogSales: i,
          canUseVOForWebsiteConversion: l,
          isODAXCampaignGroup: d,
        };
      switch ((r("isTruthy")(e) && (b.account = e), y)) {
        case r("AdsAPIObjectives").CONVERSIONS:
          var v =
            (p = n.promoted_object) == null ? void 0 : p.custom_event_type;
          b = babelHelpers.extends({}, b, { pixelConversionEvent: v });
          break;
        case r("AdsAPIObjectives").OFFER_CLAIMS:
          var S = (_ = n.promoted_object) == null ? void 0 : _.pixel_id;
          b = babelHelpers.extends({}, b, {
            hasConversionPixelSelected: S != null,
          });
          break;
        case r("AdsAPIObjectives").APP_INSTALLS:
          var R = (f = n.promoted_object) == null ? void 0 : f.object_store_url;
          b = babelHelpers.extends({}, b, {
            appData: s,
            appURL: R,
            hasAdvertisableAppEvents: a,
          });
          break;
        case r("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
          var L =
            (g = t.promoted_object) == null ? void 0 : g.product_catalog_id;
          ((b = {
            campaignGroup: t,
            campaign: n,
            productCatalogID: L,
            productSet: u,
            hasBackingApplication: !!(
              (h = n.promoted_object) != null && h.application_id
            ),
          }),
            e && (b = babelHelpers.extends({}, b, { account: e })));
          break;
        case r("AdsAPIObjectives").STORE_VISITS:
          break;
        default:
          break;
      }
      var E = r("AdsCampaignOptimizationPluginResolver").resolve({
        objective: y,
        promotedObjectType: C,
        destinationType: o("AdsAPICampaignRecordUtils").getDestinationType(n),
      });
      return E.getDefaultOptimizationGoal(babelHelpers.extends({}, b));
    }
    function y(e, t) {
      if (e.length < 1 || t == null) return null;
      var n = e
        .map(function (e) {
          return t.get(e);
        })
        .filter(Boolean);
      return n.every(function (e) {
        return e === n[0];
      })
        ? n[0]
        : null;
    }
    function C(e) {
      return e === r("AdsPromotedObjectTypes").PIXEL;
    }
    function b(e, t, n) {
      return (
        r("isLeadGenNPVOEnabledForAccount")() &&
        C(n) &&
        e === r("AdsAPIOptimizationGoals").VALUE &&
        t === r("AdsAPIObjectives").CONVERSIONS
      );
    }
    var v = 0,
      S = 1,
      R = 2;
    function L(e) {
      switch (e) {
        case "CREATED":
        case "CAPI_DEV_INVITED":
        case "PENDING_GUIDE":
        case "VERIFYING_DATA":
          return v;
        case "EVENT_RECEIVED":
        case "COUNTDOWN_STARTED":
        case "PENDING":
          return S;
        case "FUNNEL_CONFIG_DONE":
        case "INTEGRATION_COMPLETE":
        case "OPTIMIZATION_READY":
        case "LEGACY":
          return R;
      }
    }
    function E() {
      return (
        r("gkx")("5904") ||
        o("AdsLeadGenLeadNurturingCLOUtil").shouldDefaultCloAndMetaSource()
      );
    }
    function k(e) {
      e === void 0 && (e = !1);
      var t = [
        r("AdsAPIOptimizationGoals").POST_ENGAGEMENT,
        r("AdsAPIOptimizationGoals").THRUPLAY,
      ].concat(
        r("isSixSecondVideoViewsEnabledForAccount")()
          ? [r("AdsAPIOptimizationGoals").SIX_SECOND_VIDEO_VIEWS]
          : [],
        [
          r("AdsAPIOptimizationGoals").TWO_SECOND_CONTINUOUS_VIDEO_VIEWS,
          r("AdsAPIOptimizationGoals").EVENT_RESPONSES,
        ],
      );
      return (
        e && t.push(r("AdsAPIOptimizationGoals").LINK_CLICKS),
        t.push(r("AdsAPIOptimizationGoals").REMINDERS_SET),
        o(
          "AdsReachFrequencyGKUtils",
        ).isReachImpressionDisabledUnderPostEngagement() ||
          (t.push(r("AdsAPIOptimizationGoals").IMPRESSIONS),
          t.push(r("AdsAPIOptimizationGoals").REACH)),
        t
      );
    }
    ((l.NO_INELIGIBLE_OPTIMIZATIONS = e),
      (l.bidStrategySupportsValueOptimization = s),
      (l.getValidForObjective = u),
      (l.getSupportedOptimizationGoals = c),
      (l.getSupportedOptimizationGoalsFromPlugin = d),
      (l.isValidForObjective = m),
      (l.isSupportedForMinROASBidStrategy = p),
      (l.isValidForBiddingStrategy = _),
      (l.getOptimizationGoalNotices = f),
      (l.checkCanEditExistedCampaignVVOptimizationGoal = g),
      (l.getDefaultOptimizationGoalFromPlugin = h),
      (l.getUniformedDefaultOptimizationGoal = y),
      (l.isLeadGenNPVOEnabledForPromotedObjectType = C),
      (l.isLeadGenNPVOScenario = b),
      (l.LeadGenQualityDataSourceOnboardingNotStarted = v),
      (l.LeadGenQualityDataSourceOnboardingInProgress = S),
      (l.LeadGenQualityDataSourceOnboardingFinished = R),
      (l.getLeadGenStatusRanking = L),
      (l.shouldDefaultToQualityLeadOptimizationGoal = E),
      (l.getOnYourAdSupportedOptimizationGoals = k));
  },
  98,
);
