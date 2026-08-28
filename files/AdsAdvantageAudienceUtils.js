__d(
  "AdsAdvantageAudienceUtils",
  [
    "AdsAPIObjectives",
    "AdsAutomationUnificationUtils",
    "AdsHECAdvantageAudienceUtils",
    "AdsLeadGenAutomationQEUtils",
    "AdsTargetingAsSignalUtils",
    "AdsTargetingAudienceEditorQESelectors",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignSelectors",
    "adsCreateSelector",
    "adsTargetingRelaxationRolloutSelectors",
    "adsUEditorSelectedCampaignsSelector",
    "cr:9692",
    "meta-brand-star-four-points-filled-12",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = function (t) {
        return (
          o("AdsLeadGenAutomationQEUtils").isLeadsObjective(t) ||
          o("AdsAutomationUnificationUtils").isObjectiveEligibleForUnification(
            t,
          )
        );
      },
      c =
        (e =
          (s = n("cr:9692")) == null
            ? void 0
            : s.adsTargetingPGDIsE2ECampaignEligibleForAutomationSelector) !=
        null
          ? e
          : r("adsCreateSelector")(
              [],
              function () {
                return !1;
              },
              { name: i.id },
            );
    function d(e, t) {
      var n;
      return o(
        "AdsHECAdvantageAudienceUtils",
      ).isCampaignGroupRegulatedAndIneligibleForAdvantageAudience(t)
        ? !1
        : ((n = e.targeting) == null || (n = n.targeting_automation) == null
            ? void 0
            : n.advantage_audience) === 1;
    }
    var m = r("adsCreateSelector")(
        [r("adsUEditorSelectedCampaignsSelector")],
        function (t) {
          return t.some(function (e) {
            var t;
            return (
              ((t = e.targeting) == null ? void 0 : t.targeting_automation) !=
              null
            );
          });
        },
        { name: i.id + ".containsAnyTargetingAutomationCampaignSetSelector" },
      ),
      p = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignsSelector"),
          o("AdsUEditorCampaignSelectors").adObjectsList.mapTransform(
            o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
          ),
        ],
        function (t, n) {
          return t.some(function (e) {
            return d(
              e,
              o("AdsTargetingAsSignalUtils").getSpecialCategories(n, e.id),
            );
          });
        },
        { name: i.id + ".containsAnyAdvantageAudienceCampaignSelector" },
      ),
      _ = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignsSelector"),
          o(
            "AdsUEditorCampaignSelectors",
          ).adObjectsList.mapTransformPlainObject(
            o("AdsUEditorCampaignGroupAdObjectsUtils").getPlainCampaignGroup,
          ),
        ],
        function (t, n) {
          return t.every(function (e) {
            return d(
              e,
              o("AdsTargetingAsSignalUtils").getSpecialCategories(n, e.id),
            );
          });
        },
        { name: i.id + ".containsEveryAdvantageAudienceCampaignSelector" },
      ),
      f = r("adsCreateSelector")(
        [
          o("adsTargetingRelaxationRolloutSelectors")
            .containsAccountExclusionRuleSelector,
          o("AdsTargetingAudienceEditorQESelectors")
            .passAdvantageAudienceQESelector,
        ],
        function (t, n) {
          return (
            (!t ||
              o(
                "adsTargetingRelaxationRolloutSelectors",
              ).passesEnableAutomationForPharmaAdvertiser()) &&
            n
          );
        },
        { name: i.id + ".passesAdvantageAudienceSelector" },
      ),
      g = r("adsCreateSelector")(
        [_, f, c],
        function (t, n, r) {
          return (n && t) || r;
        },
        { name: i.id + ".shouldRenderAdvantageAudienceSelector" },
      ),
      h = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignsSelector"),
          o(
            "AdsUEditorCampaignSelectors",
          ).adObjectsList.mapTransformPlainObject(
            o("AdsUEditorCampaignGroupAdObjectsUtils").getPlainCampaignGroup,
          ),
          f,
        ],
        function (t, n, r) {
          var e = t.some(function (e) {
            var t = o("AdsTargetingAsSignalUtils").getSpecialCategories(
              n,
              e.id,
            );
            return o(
              "AdsHECAdvantageAudienceUtils",
            ).isCampaignGroupRegulatedAndIneligibleForAdvantageAudience(t);
          });
          return r && !e;
        },
        {
          name: i.id + ".shouldRenderAdvantageAudienceToggleContainerSelector",
        },
      ),
      y = function (t) {
        var e,
          n = (e = t.targeting) == null ? void 0 : e.targeting_automation;
        return (n == null ? void 0 : n.advantage_audience) === 1;
      };
    function C(e) {
      var t;
      return (
        (e == null || (t = e.targeting_automation) == null
          ? void 0
          : t.advantage_audience) === 1
      );
    }
    var b = r("adsCreateSelector")(
        [p, f],
        function (t, n) {
          return n && t;
        },
        { name: i.id + ".isAdvantageAudienceEnabledForAnyCampaignSelector" },
      ),
      v = [
        "age",
        "ageSuggestion",
        "locations",
        "languages",
        "gender",
        "experimentalLanguages",
        "detailedTargeting",
      ],
      S = function (t) {
        switch (t) {
          case "active":
            return "ACTIVE";
          case "archived":
            return "ARCHIVED";
          case "deleted":
            return "DELETED";
          case "error":
            return "ERROR";
          case "inactive":
            return "INACTIVE";
          case "off":
            return "OFF";
          case "pending":
            return "PENDING";
          case "warning":
            return "WARNING";
          default:
            return null;
        }
      },
      R = function (t) {
        if (t == null) return null;
        switch (t) {
          case r("AdsAPIObjectives").APP_INSTALLS:
            return "APP_INSTALLS";
          case r("AdsAPIObjectives").BRAND_AWARENESS:
            return "BRAND_AWARENESS";
          case r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT:
            return "CANVAS_APP_ENGAGEMENT";
          case r("AdsAPIObjectives").CANVAS_APP_INSTALLS:
            return "CANVAS_APP_INSTALLS";
          case r("AdsAPIObjectives").CONVERSIONS:
            return null;
          case r("AdsAPIObjectives").DEPRECATED_CLICKS:
            return "DEPRECATED_CLICKS";
          case r("AdsAPIObjectives").EVENT_RESPONSES:
            return "EVENT_RESPONSES";
          case r("AdsAPIObjectives").EXTERNAL:
            return "EXTERNAL";
          case r("AdsAPIObjectives").IMPRESSIONS:
            return "IMPRESSIONS";
          case r("AdsAPIObjectives").INCOMPATIBLE_CANVAS_APP_ENGAGEMENT:
            return "INCOMPATIBLE_CANVAS_APP_ENGAGEMENT";
          case r("AdsAPIObjectives").INCOMPATIBLE_CANVAS_APP_INSTALLS:
            return "INCOMPATIBLE_CANVAS_APP_INSTALLS";
          case r("AdsAPIObjectives").INCOMPATIBLE_EVENT_RESPONSES:
            return "INCOMPATIBLE_EVENT_RESPONSES";
          case r("AdsAPIObjectives").INCOMPATIBLE_MOBILE_APP_INSTALLS:
            return "INCOMPATIBLE_MOBILE_APP_INSTALLS";
          case r("AdsAPIObjectives").INCOMPATIBLE_OFFER_CLAIMS:
            return "INCOMPATIBLE_OFFER_CLAIMS";
          case r("AdsAPIObjectives").INCOMPATIBLE_PAGE_ENGAGEMENT:
            return "INCOMPATIBLE_PAGE_ENGAGEMENT";
          case r("AdsAPIObjectives").INCOMPATIBLE_PAGE_LIKES:
            return "INCOMPATIBLE_PAGE_LIKES";
          case r("AdsAPIObjectives").INCOMPATIBLE_POST_ENGAGEMENT:
            return "INCOMPATIBLE_POST_ENGAGEMENT";
          case r("AdsAPIObjectives").INCOMPATIBLE_WEBSITE_CLICKS:
            return "INCOMPATIBLE_WEBSITE_CLICKS";
          case r("AdsAPIObjectives").INCOMPATIBLE_WEBSITE_CONVERSIONS:
            return "INCOMPATIBLE_WEBSITE_CONVERSIONS";
          case r("AdsAPIObjectives").INSTAGRAM_BRAND_AWARENESS:
            return "INSTAGRAM_BRAND_AWARENESS";
          case r("AdsAPIObjectives").LEAD_GENERATION:
            return "LEAD_GENERATION";
          case r("AdsAPIObjectives").LINK_CLICKS:
            return "LINK_CLICKS";
          case r("AdsAPIObjectives").LOCAL_AWARENESS:
            return "LOCAL_AWARENESS";
          case r("AdsAPIObjectives").LOCAL_IMPRESSIONS:
            return "LOCAL_IMPRESSIONS";
          case r("AdsAPIObjectives").MEDIA_DOWNLOADS:
            return "MEDIA_DOWNLOADS";
          case r("AdsAPIObjectives").MESSAGES:
            return "MESSAGES";
          case r("AdsAPIObjectives").MILLE:
            return "MILLE";
          case r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT:
            return "MOBILE_APP_ENGAGEMENT";
          case r("AdsAPIObjectives").MOBILE_APP_INSTALLS:
            return "MOBILE_APP_INSTALLS";
          case r("AdsAPIObjectives").MULTIPLE:
            return "MULTIPLE";
          case r("AdsAPIObjectives").NONE:
            return "NONE";
          case r("AdsAPIObjectives").OFFER_CLAIMS:
            return "OFFER_CLAIMS";
          case r("AdsAPIObjectives").OUTCOME_ACQUISITION:
            return "OUTCOME_ACQUISITION";
          case r("AdsAPIObjectives").OUTCOME_AWARENESS:
            return "OUTCOME_AWARENESS";
          case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
            return "OUTCOME_ENGAGEMENT";
          case r("AdsAPIObjectives").OUTCOME_LEADS:
            return "OUTCOME_LEADS";
          case r("AdsAPIObjectives").OUTCOME_SALES:
            return "OUTCOME_SALES";
          case r("AdsAPIObjectives").OUTCOME_TRAFFIC:
            return "OUTCOME_TRAFFIC";
          case r("AdsAPIObjectives").PAGE_LIKES:
            return "PAGE_LIKES";
          case r("AdsAPIObjectives").POST_ENGAGEMENT:
            return "POST_ENGAGEMENT";
          case r("AdsAPIObjectives").PRODUCT_CATALOG_SALES:
            return "PRODUCT_CATALOG_SALES";
          case r("AdsAPIObjectives").PROFILE_FOLLOWERS:
            return "PROFILE_FOLLOWERS";
          case r("AdsAPIObjectives").REACH:
            return "REACH";
          case r("AdsAPIObjectives").RESEARCH_POLL:
            return "RESEARCH_POLL";
          case r("AdsAPIObjectives").STORE_VISITS:
            return "STORE_VISITS";
          case r("AdsAPIObjectives").VIDEO_VIEWS:
            return "VIDEO_VIEWS";
          case r("AdsAPIObjectives").WEBSITE_CONVERSIONS:
            return "WEBSITE_CONVERSIONS";
          case r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY:
            return "WILDCARD_INTERNAL_ONLY";
          case r("AdsAPIObjectives").XPLATFORM_SALES:
            return "XPLATFORM_SALES";
          default:
            return null;
        }
      },
      L = function (t) {
        var e,
          n,
          r,
          o =
            t.fragmentID != null && t.fragmentID.indexOf("-") < 0
              ? t.fragmentID
              : t.campaignID;
        return {
          advantage_plus_audience: {
            delivery_status: S(
              (e = t.deliveryStatus) == null || (e = e.getValue()) == null
                ? void 0
                : e.status,
            ),
            delivery_optimal_audience_size:
              (n =
                (r = t.deliveryStatus) == null ||
                (r = r.getValue()) == null ||
                (r = r.extra_data) == null
                  ? void 0
                  : r.optimal_audience_size) != null
                ? n
                : 0,
            regulated_categories: t.regulatedCategories,
            smart_promotion_type: t.smartPromotionType,
            objective: R(t.objective),
            targeting_spec: JSON.stringify(t.targetingAPISpec),
            targeting_signal: t.targetingAsSignal,
          },
          ad_object_id_input_applies_to: o,
        };
      };
    ((l.isAUObjective = u),
      (l.isCampaignAdavantageAudienceEnabled = d),
      (l.containsAnyTargetingAutomationCampaignSetSelector = m),
      (l.containsAnyAdvantageAudienceCampaignSelector = p),
      (l.containsEveryAdvantageAudienceCampaignSelector = _),
      (l.passesAdvantageAudienceSelector = f),
      (l.shouldRenderAdvantageAudienceSelector = g),
      (l.shouldRenderAdvantageAudienceToggleContainerSelector = h),
      (l.isAdvantageAudienceEnabledForCampaign = y),
      (l.isAdvantageAudienceEnabledInTargetSpec = C),
      (l.isAdvantageAudienceEnabledForAnyCampaignSelector = b),
      (l.ADVANTAGE_AUDIENCE_ADDITIONAL_OPTIONS_FIELD = v),
      (l.ADVANTAGE_ICON = o(
        "meta-brand-star-four-points-filled-12",
      ).metaBrandStarFourPointsAdvantageFilled12),
      (l.convertStatusForGraphQL = S),
      (l.convertObjectiveForGraphQL = R),
      (l.generateAAInputParams = L));
  },
  98,
);
