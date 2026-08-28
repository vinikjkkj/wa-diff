__d(
  "AdsTargetingAudienceEditorGKSelectors",
  [
    "AMUsabilityHBTCatchAllUtils",
    "ARXUsabilityHoldoutUtils",
    "AdsAccountStore",
    "AdsAccountUtils",
    "AdsCampaignGoalExpressionUtils",
    "AdsInterfacesLogger",
    "adsCreateSelector",
    "adsCreateStructuredSelector",
    "gkx",
    "justknobx",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [r("AdsAccountStore").getSelectedAccount],
        function (t) {
          return r("AdsAccountUtils").hasCapability(
            t.getValue(),
            "ENABLE_BUSINESS_GK_BASED_VBLAL_IN_VO",
          );
        },
        { name: i.id + ".shouldUseVBLALInVOSelector" },
      ),
      s = r("adsCreateStructuredSelector")(
        { shouldAdAccountUseVBLALInVO: e },
        i.id + ".adsManagerGKSelectors",
      ),
      u = r("adsCreateSelector")(
        [r("AdsAccountStore").getSelectedAccount],
        function () {
          return !0;
        },
        { name: i.id + ".showEstimatedAudienceSizeRangeUIGKSelector" },
      ),
      c = function () {
        return r("gkx")("21262");
      },
      d = function () {
        return r("gkx")("16309");
      },
      m = r("adsCreateSelector")(
        [],
        function () {
          return !0;
        },
        { name: i.id + ".passTargetingFrictionAdvantageProductsGuidance" },
      ),
      p = function () {
        return r("gkx")("2185");
      },
      _ = function () {
        return r("gkx")("1669");
      },
      f = function () {
        return r("gkx")("12711");
      },
      g = function () {
        return r("gkx")("11469");
      },
      h = function () {
        return r("gkx")("6923");
      },
      y = function () {
        return r("gkx")("2361") || r("gkx")("2851");
      },
      C = function () {
        return r("gkx")("8827");
      },
      b = function () {
        return r("gkx")("9318");
      },
      v = function () {
        return r("gkx")("9344");
      },
      S = function () {
        return r("gkx")("9785");
      },
      R = function () {
        return r("gkx")("200");
      },
      L = function () {
        return !0;
      },
      E = function () {
        return o(
          "ARXUsabilityHoldoutUtils",
        ).isAccountIn2026H1UsabilityHBTHoldout() && !r("justknobx")._("4179")
          ? (k(),
            o(
              "AMUsabilityHBTCatchAllUtils",
            ).isAccountInUsabilityH1HBTCatchAllTest())
          : r("gkx")("10654");
      };
    function k() {
      r("gkx")("16417");
    }
    var I = function () {
      return o("AdsCampaignGoalExpressionUtils").shouldUseGoalExpression({
        isHECEnabled: !1,
      }) || o("AdsCampaignGoalExpressionUtils").shouldUseGoalExpressionFull()
        ? !0
        : r("gkx")("17597");
    };
    function T() {
      return r("gkx")("21201");
    }
    function D() {
      return r("gkx")("13496");
    }
    function x() {
      return r("gkx")("21275");
    }
    var $ = function () {
        return r("gkx")("4017");
      },
      P = function () {
        return r("gkx")("2204");
      },
      N = function () {
        return r("gkx")("21201");
      };
    function M() {
      return r("gkx")("21276");
    }
    function w() {
      return r("gkx")("21278");
    }
    function A() {
      return !0;
    }
    function F() {
      var e = r("gkx")("720");
      return e;
    }
    var O = (function () {
        return r("gkx")("404");
      })(),
      B = (function () {
        return r("gkx")("16699");
      })(),
      W = (function () {
        return r("gkx")("649");
      })(),
      q = (function () {
        return r("gkx")("5793");
      })();
    function U() {
      return r("gkx")("7703");
    }
    function V() {
      return r("gkx")("7705");
    }
    var H = "performance_intent_upleveling_beta_universe";
    function G() {
      var e = r("qex")._("4323");
      return (
        e === "aggressive" ||
        e === "conservative_outlier" ||
        e === "conservative_eas_city"
      );
    }
    function z(e) {
      var t,
        n = e.adAccountID,
        o = e.campaignID,
        a = e.componentName,
        i = e.interactionType,
        l = e.isEnabled,
        s = r("qex")._("5352");
      r("AdsInterfacesLogger").log({
        data:
          ((t = {}),
          (t.ad_account_id = n),
          (t.adgroup_id = o),
          (t.component_name = a),
          (t.is_enabled = l),
          (t.qe_universe_name = H),
          (t.experiment_variant = s),
          (t.sub_event = i),
          t),
        eventName: "perf_intent_beta_arm_exposure",
      });
    }
    var j = "broadgeo_lower_granularities_upleveling_beta_universe",
      K = {
        AGGRESSIVE: "aggressive",
        CONSERVATIVE_NOT_PERSONALIZED: "conservative_not_personalized",
        CONSERVATIVE_PERSONALIZED: "conservative_personalized",
        CONSERVATIVE_NOT_PERSONALIZED_OPTOUT:
          "conservative_not_personalized_opt_out",
      };
    function Q() {
      var e = r("qex")._("1980");
      return e === K.CONSERVATIVE_PERSONALIZED && !r("gkx")("5856") ? null : e;
    }
    function X() {
      var e = Q();
      return (
        e === K.AGGRESSIVE ||
        e === K.CONSERVATIVE_NOT_PERSONALIZED ||
        e === K.CONSERVATIVE_PERSONALIZED ||
        e === K.CONSERVATIVE_NOT_PERSONALIZED_OPTOUT
      );
    }
    function Y() {
      var e = Q();
      return (
        e === K.AGGRESSIVE ||
        e === K.CONSERVATIVE_NOT_PERSONALIZED ||
        e === K.CONSERVATIVE_NOT_PERSONALIZED_OPTOUT
      );
    }
    function J() {
      return Q() === K.CONSERVATIVE_PERSONALIZED;
    }
    function Z() {
      return Q() === K.CONSERVATIVE_NOT_PERSONALIZED_OPTOUT;
    }
    function ee(e) {
      var t,
        n = e.adAccountID,
        o = e.campaignID,
        a = e.componentName,
        i = e.interactionType,
        l = e.isEnabled,
        s = r("qex")._("5353");
      r("AdsInterfacesLogger").log({
        data:
          ((t = {}),
          (t.ad_account_id = n),
          (t.adgroup_id = o),
          (t.component_name = a),
          (t.is_enabled = l),
          (t.qe_universe_name = j),
          (t.experiment_variant = s),
          (t.sub_event = i),
          t),
        eventName: "bg_lower_granularities_beta_arm_exposure",
      });
    }
    var te = function () {
        return r("gkx")("14812");
      },
      ne = function () {
        return r("gkx")("14582");
      };
    function re() {
      r("gkx")("10693");
    }
    var oe = function () {
        return o(
          "ARXUsabilityHoldoutUtils",
        ).isAccountIn2026H1UsabilityHBTHoldout() && !r("justknobx")._("4383")
          ? (re(),
            o(
              "AMUsabilityHBTCatchAllUtils",
            ).isAccountInUsabilityH1HBTCatchAllTest())
          : r("gkx")("21171");
      },
      ae = function () {
        return r("gkx")("9593");
      },
      ie = function () {
        return r("gkx")("3916");
      },
      le = function () {
        return r("justknobx")._("1347");
      },
      se = function () {
        return o(
          "ARXUsabilityHoldoutUtils",
        ).isAccountIn2026H1UsabilityHBTHoldout() && !r("justknobx")._("4521")
          ? (ue(),
            o(
              "AMUsabilityHBTCatchAllUtils",
            ).isAccountInUsabilityH1HBTCatchAllTest())
          : r("gkx")("23030");
      };
    function ue() {
      r("gkx")("6879");
    }
    ((l.adsManagerGKSelectors = s),
      (l.showEstimatedAudienceSizeRangeUIGKSelector = u),
      (l.passFbaMacaPhase1UIGK = c),
      (l.passEASTerminologyUpdateGK = d),
      (l.passTargetingFrictionAdvantageProductsGuidance = m),
      (l.passDetailedTargetingDeprecationFrictionGuidance = p),
      (l.passWASingleCAForAdsMMGK = _),
      (l.passSubscriberUploadConfusionAdsMMGK = f),
      (l.passMMLiquidityAdAccountSPDecoupleM2GK = g),
      (l.passMMSubscriberCountryCodeInferenceGK = h),
      (l.passWABusinessMessagingHubGK = y),
      (l.passMMComprehensionOnePoolGK = C),
      (l.passMMComprehensionL2PoolAndTooltipNamingGK = b),
      (l.passMMComprehensionUploadDelayClarityGK = v),
      (l.passMMAllowMultipleWarningsOrErrorsDFCAMappingGK = S),
      (l.passNoLiftCRMGK = R),
      (l.passDFCAUsabilityImprovementsPhaseTwoGKOrHbtQE = L),
      (l.passDFCAUsabilityImprovementsPhaseThreeGK = E),
      (l.passCAExclusionOnlyAudienceCreationGKAndGoalExpressionQE = I),
      (l.messageMarketingAMGKBeta = T),
      (l.messageMarketingAMGKLiquidity = D),
      (l.subscriberCustomFieldsAMGK = x),
      (l.passMessageMarketingWhatsappCAGK = $),
      (l.passMessageMarketingMessengerAlphaGK = P),
      (l.passMessageMarketingAMGK = N),
      (l.subscriberDeletionAMGK = M),
      (l.passSubscriberListAMAdditionalFieldsGK = w),
      (l.enableParallelProcessingOfZipCodes = A),
      (l.passBusinessConstraints = F),
      (l.passTargetingBroadGeoRolloutGK = O),
      (l.passPerfIntentHecfLaunchGK = B),
      (l.passOmniMultiSourceTargeting = W),
      (l.passTargetingBroadGeoEnableForUnification = q),
      (l.isTargetingBroadGeoEnableUGPGuidanceEnabled = U),
      (l.isTargetingBroadGeoEnableUGPGuidanceEnabledNoExposure = V),
      (l.PERF_INTENT_BETA_QE_UNIVERSE = H),
      (l.isInPerfIntentBetaArm = G),
      (l.logPerfIntentBetaArmExposure = z),
      (l.BG_LG_BETA_QE_UNIVERSE = j),
      (l.BG_LG_BETA_ARMS = K),
      (l.getBGLowerGranularitiesBetaArm = Q),
      (l.passAnyBroadGeoLowerGranularitiesBetaArm = X),
      (l.passAnyBroadGeoLowerGranularitiesNotPersonalizedBetaArm = Y),
      (l.isInBGLowerGranularitiesBetaPersonalizedArm = J),
      (l.isInBGLowerGranularitiesBetaOptOutArm = Z),
      (l.logBGLowerGranularitiesBetaArmExposure = ee),
      (l.passGeoLocationUplift = te),
      (l.passGeoLocationUpliftPhaseTwo = ne),
      (l.passGeoLocationUpliftPhaseThree = oe),
      (l.getIsMmLiquidityDfcaUxrImprovementsEnabled = ae),
      (l.getIsImprovedDownloadSubscribersEnabled = ie),
      (l.getDoesPassPastDfcaBusinessGk = le),
      (l.passWcaEasFixGK = se));
  },
  98,
);
