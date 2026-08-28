__d(
  "AdsCopyDataManager",
  [
    "errorCode",
    "AdDraftFragmentSource",
    "AdFLEXPerfConfig",
    "AdsAPIOptimizationGoals",
    "AdsCityRadiusRemovalQEUtils",
    "AdsCopyAcrossObjectiveOption",
    "AdsCopyCopyErrorDataAction",
    "AdsCopyDraftOption",
    "AdsCrepePerformanceUtils",
    "AdsDraftDraftFragmentBatchLoadedDataAction",
    "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
    "AdsDuplicationZeroEditTracker",
    "AdsDuplicationZeroEditTrackingKillSwitch",
    "AdsFrequencyControlEditorConstants",
    "AdsGraphAPI",
    "AdsInterfacesRouter",
    "AdsLandingPageViewsUtils",
    "AdsLinkClicksDeprecationDuplicationUtils",
    "AdsMgmtOpenTrayStore",
    "AdsMgmtStandaloneRouteUtils",
    "AdsPECampaignGroupSelectors",
    "AdsPERouterHelper",
    "AdsPerfInteractionEditorTreeUtils",
    "AdsPerfInteractionLogDataUtil",
    "AdsPerfInteractionsController",
    "AdsToggleSource",
    "FBLogger",
    "GraphAPIRetry",
    "Promise",
    "QPLUserFlow",
    "ReelsAdPlacement",
    "adsCopyCompleted",
    "adsCopySourceToObjectCreationSource",
    "adsMgmtTrayStateSelector",
    "asyncToGeneratorRuntime",
    "createMapBy",
    "curry",
    "emptyFunction",
    "err",
    "getAdsProcessingDuplicationOverrideTrackingComponent",
    "gkx",
    "ifRequired",
    "isEmpty",
    "isTruthy",
    "maybeApplyIDs",
    "maybePreloadAdsPreflightRecommendations",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = 3;
    function m(e) {
      var t = o("AdsPECampaignGroupSelectors").getByFieldsSelector(),
        n = t(e, { frequency_control_specs: null });
      if (n != null && n.hasValue()) {
        var r = n.getValueEnforcing().frequency_control_specs;
        return Array.from(r != null ? r : []).length > 0;
      }
      return !1;
    }
    function p(e) {
      var t = new Set();
      return (
        e.forEach(function (e) {
          if (e.ad_object_type === "campaign") {
            var n = e.values.find(function (e) {
              return e.field === "frequency_control_specs";
            });
            if (n != null) {
              var r = JSON.parse(n.new_value);
              r != null && r.length > 0 && t.add(e.ad_object_id);
            }
          }
        }),
        e.map(function (e) {
          if (
            e.ad_object_type !== "ad_set" ||
            t.has(e.parent_ad_object_id) ||
            m(e.parent_ad_object_id)
          )
            return e;
          var n = e.values,
            a = n.find(function (e) {
              return e.field === "frequency_control_specs";
            });
          if (a != null) {
            var i = JSON.parse(a.new_value);
            if (i != null && i.length > 0) return e;
          }
          var l = n.find(function (e) {
            return e.field === "optimization_goal";
          });
          if (l == null) return e;
          var s = JSON.parse(l.new_value);
          if (s !== r("AdsAPIOptimizationGoals").REACH) return e;
          var u = [
              o("AdsFrequencyControlEditorConstants")
                .DEFAULT_FREQUENCY_CONTROL_SPEC,
            ],
            c =
              a != null
                ? n.map(function (e) {
                    return e.field === "frequency_control_specs"
                      ? babelHelpers.extends({}, e, {
                          new_value: JSON.stringify(u),
                        })
                      : e;
                  })
                : [].concat(n, [
                    {
                      field: "frequency_control_specs",
                      old_value: JSON.stringify(null),
                      new_value: JSON.stringify(u),
                    },
                  ]);
          return babelHelpers.extends({}, e, { values: c });
        })
      );
    }
    function _(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          if (!(e.ad_object_type !== "campaign" || e.ad_object_id == null)) {
            var n = e.values.find(function (e) {
              return e.field === "promoted_object";
            });
            if (n != null)
              try {
                var r,
                  o = JSON.parse(n.new_value);
                t.set(
                  e.ad_object_id,
                  (r = o == null ? void 0 : o.product_catalog_id) != null
                    ? r
                    : null,
                );
              } catch (e) {}
          }
        }),
        t
      );
    }
    function f(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          if (!(e.ad_object_type !== "campaign" || e.ad_object_id == null)) {
            var n = e.values.find(function (e) {
              return e.field === "objective";
            });
            if (n != null)
              try {
                t.set(e.ad_object_id, JSON.parse(n.new_value));
              } catch (e) {}
          }
        }),
        t
      );
    }
    function g(e, t, n) {
      var a = o(
        "AdsLinkClicksDeprecationDuplicationUtils",
      ).isAppConversionLocation(e, t == null ? void 0 : t.application_id);
      if (e == null && !a) return null;
      var i = o(
        "AdsLinkClicksDeprecationDuplicationUtils",
      ).getDuplicatedLinkClicksGoal({
        isAdvantagePlusOn: n,
        isApp: a,
        isMessaging: o(
          "AdsLinkClicksDeprecationDuplicationUtils",
        ).isMessagingDestination(e),
      });
      return i === r("AdsAPIOptimizationGoals").LINK_CLICKS ? null : i;
    }
    function h(e) {
      if (!o("AdsLandingPageViewsUtils").shouldUseLPVToVisitsRebranding())
        return e;
      var t = _(e),
        n = f(e);
      return e.map(function (e) {
        var a;
        if (e.ad_object_type !== "ad_set") return e;
        var i = e.values,
          l = i.find(function (e) {
            return e.field === "optimization_goal";
          });
        if (l == null) return e;
        var s = JSON.parse(l.new_value),
          u = i.find(function (e) {
            return e.field === "destination_type";
          }),
          c = u != null ? JSON.parse(u.new_value) : null,
          d = e.parent_ad_object_id,
          m = d != null ? n.get(d) : null,
          p =
            (a = o(
              "AdsLinkClicksDeprecationDuplicationUtils",
            ).getDuplicatedTrafficMessagingGoal(m, c)) != null
              ? a
              : o(
                  "AdsLinkClicksDeprecationDuplicationUtils",
                ).getDuplicatedTrafficWebsiteGoal(m, c, s);
        if (p == null) {
          if (s !== r("AdsAPIOptimizationGoals").LINK_CLICKS) return e;
          var _ = i.find(function (e) {
              return e.field === "promoted_object";
            }),
            f = _ != null ? JSON.parse(_.new_value) : null,
            h = d != null ? t.get(d) : null,
            y =
              h != null || (f == null ? void 0 : f.product_catalog_id) != null;
          p = g(c, f, y);
        }
        if (p == null || p === s) return e;
        var C = i.map(function (e) {
          return e.field === "optimization_goal"
            ? babelHelpers.extends({}, e, { new_value: JSON.stringify(p) })
            : e;
        });
        return babelHelpers.extends({}, e, { values: C });
      });
    }
    var y = [
      (c = r("AdDraftFragmentSource")).CLICK_AD_DUPLICATE,
      c.CLICK_CAMPAIGN_DUPLICATE,
      c.CLICK_CAMPAIGN_GROUP_DUPLICATE,
      c.UPGRADE_DUPLICATE,
      c.QUICK_DUPLICATE_REDIRECT,
      c.QUICK_DUPLICATE_FROM_TOOLBAR,
    ];
    function C(e, t, a, l, s, c) {
      var d, m, _, f, g;
      l === void 0 && (l = null);
      var y =
          e.length > 0
            ? (d =
                (m = e[0]) == null || (m = m.extraData) == null
                  ? void 0
                  : m.count) != null
              ? d
              : 1
            : 0,
        C = o(
          "getAdsProcessingDuplicationOverrideTrackingComponent",
        ).getAdsProcessingDuplicationOverrideTrackingComponent(t, y),
        b = C != null ? { overrideTrackingSurface: String(C) } : {},
        v = r("AdsPerfInteractionsController").startInteraction(
          (_ =
            r("AdFLEXPerfConfig") == null ||
            (f = r("AdFLEXPerfConfig").get()) == null
              ? void 0
              : f.adsPerfInteractionsDuplicationProcessingDuplicationEvent) !=
            null
            ? _
            : "am.duplication.processing_duplication",
          i.id,
          b,
        );
      o("AdsPerfInteractionEditorTreeUtils").isCampaignStructureOpen() &&
        r("AdsPerfInteractionsController").startInteraction(
          "am.editor.load_campaign_tree",
          i.id,
        );
      var S = [],
        L = [],
        E = [];
      if (
        (e.forEach(function (e) {
          var n = R(e, t, a, v, c);
          L.push(n);
        }),
        o(
          "AdsPerfInteractionLogDataUtil",
        ).addHeroTracingInteractionCustomMetadata(
          v,
          ((g = {}),
          (g.source = t),
          (g.event_source = a),
          (g.item_count = y),
          (g.is_creation_package = o(
            "AdsCrepePerformanceUtils",
          ).isCreationPackage()),
          g),
        ),
        r("QPLUserFlow").addAnnotations(r("qpl")._(270218207, "7032"), {
          string_array: { start_callsite_extra: [t, a] },
        }),
        s != null)
      ) {
        var k = {};
        switch (a) {
          case r("AdDraftFragmentSource").CLICK_CAMPAIGN_GROUP_DUPLICATE:
            k.fragment_intent_campaign_group_count = s.campaignGroup * y;
          case r("AdDraftFragmentSource").CLICK_CAMPAIGN_DUPLICATE:
            k.fragment_intent_campaign_count = s.campaign * y;
          case r("AdDraftFragmentSource").CLICK_AD_DUPLICATE:
            k.fragment_intent_adgroup_count = s.adgroup * y;
            break;
          case r("AdDraftFragmentSource").QUICK_DUPLICATE_FROM_EDIT_DROPDOWN:
          case r("AdDraftFragmentSource").QUICK_DUPLICATE_FROM_TREE:
            k = {
              fragment_intent_campaign_group_count: s.campaignGroup,
              fragment_intent_campaign_count: s.campaign,
              fragment_intent_adgroup_count: s.adgroup,
            };
            break;
        }
        o(
          "AdsPerfInteractionLogDataUtil",
        ).addHeroTracingInteractionCustomMetadata(v, k);
      }
      var I = e
        .map(function (e) {
          var t;
          return (t = e.extraData) == null ? void 0 : t.campaignGroupID;
        })
        .filter(r("isTruthy"))
        .filter(Boolean);
      r("promiseDone")(
        (u || (u = n("Promise"))).all(L).then(function (e) {
          var t,
            n = e.filter(Boolean);
          if (n.length === 0) throw r("err")("Copy failed - reject promise");
          var l = [];
          (n.forEach(function (e) {
            var t = x(e);
            if (
              ((S = S.concat(t.fragments)),
              E.push(t),
              o(
                "AdsDuplicationZeroEditTrackingKillSwitch",
              ).isZeroEditDuplicationTrackingEnabled())
            )
              try {
                o("AdsDuplicationZeroEditTracker").registerCopiedFragments(
                  t.draftID,
                  t.fragments,
                  a,
                );
              } catch (e) {
                r("FBLogger")("ads").warn(
                  "Failed to register fragments duplication zero edit",
                );
              }
            t.fullAdDraftFragments != null &&
              (l = l.concat(t.fullAdDraftFragments));
          }),
            (l = p(l)),
            (l = h(l)),
            l.some(T) &&
              o(
                "AdsCityRadiusRemovalQEUtils",
              ).isInCityRadiusRemovalQETreatment() &&
              (l = l.map(D)),
            r("AdsDraftDraftFragmentBatchLoadedDataAction").dispatch(
              {
                fragments: r("createMapBy")(l, function (e) {
                  return e.id;
                }),
              },
              { line: "525", module: "AdsCopyDataManager.js", moduleID: i.id },
            ));
          var s = 0,
            u = 0,
            c = 0;
          (S.forEach(function (e) {
            e.ad_object_type === "ad"
              ? (s += 1)
              : e.ad_object_type === "ad_set"
                ? (u += 1)
                : e.ad_object_type === "campaign" && (c += 1);
          }),
            o(
              "AdsPerfInteractionLogDataUtil",
            ).addHeroTracingInteractionCustomMetadata(
              v,
              ((t = {}),
              (t.duplicated_adgroups_count = s),
              (t.duplicated_campaigns_count = u),
              (t.duplicated_campaign_groups_count = c),
              t),
            ),
            r("maybePreloadAdsPreflightRecommendations")(l));
        }),
        function () {
          return r("adsCopyCompleted")(E, S, t, l, I, v);
        },
        r("emptyFunction"),
      );
    }
    function b(e) {
      var t,
        n,
        a = r("ifRequired")(
          "adsMgmtAdgroupSelectedIdsSelector",
          function (e) {
            return e.adsMgmtAdgroupSelectedIdsSelector();
          },
          function () {
            return (
              r("FBLogger")("ads").mustfix(
                "Duplication Eager Loading Error: %s isn't required, fragmentSource: %s",
                "adsMgmtAdgroupSelectedIdsSelector",
                e,
              ),
              []
            );
          },
        ),
        i = r("ifRequired")(
          "adsMgmtCampaignSelectedIdsSelector",
          function (e) {
            var t = e.adsMgmtCampaignSelectedIdsSelector;
            return t();
          },
          function () {
            return (
              r("FBLogger")("ads").mustfix(
                "Duplication Eager Loading Error: %s isn't required, fragmentSource: %s",
                "adsMgmtCampaignSelectedIdsSelector",
                e,
              ),
              []
            );
          },
        ),
        l = r("ifRequired")(
          "adsMgmtCampaignGroupSelectedIdsSelector",
          function (e) {
            var t = e.adsMgmtCampaignGroupSelectedIdsSelector;
            return t();
          },
          function () {
            return (
              r("FBLogger")("ads").mustfix(
                "Duplication Eager Loading Error: %s isn't required, fragmentSource: %s",
                "adsMgmtCampaignGroupSelectedIdsSelector",
                e,
              ),
              []
            );
          },
        );
      if (a.length === 0 && i.length === 0 && l.length === 0) {
        r("FBLogger")("ads").mustfix(
          "Duplication Eager Loading Error: all preselected IDs are empty, fragmentSource: %s",
          e,
        );
        return;
      }
      var s =
        (t = r("AdsInterfacesRouter").getOrNull()) == null
          ? void 0
          : t.getLeafRoute().name;
      if (s == null) {
        r("FBLogger")("ads").mustfix(
          "Duplication Eager Loading Error: could not get the level from the route, fragmentSource: %s",
          e,
        );
        return;
      }
      var u = v(s);
      if (u == null) {
        r("FBLogger")("ads").warn(
          "Duplication Eager Loading Error: could not get ad object level from route level, fragmentSource: %s, level: %s",
          e,
          s,
        );
        return;
      }
      var c = r("AdsPERouterHelper").getRouteBuilder(),
        d = r("curry")(o("maybeApplyIDs").maybeApplyIDsImpl, c);
      (c.context({
        toggleSource: r("AdsToggleSource").copy,
        shouldEditorBeHidden: !0,
      }),
        d("campaign", l),
        d("ad_set", i),
        d("ad", a));
      var m =
        (n = o("AdsMgmtStandaloneRouteUtils").getEditorRouteNameForStandalone(
          !1,
          u,
          "EDITOR_DRAWER",
        )) != null
          ? n
          : "";
      (c.route(m), c.navigate(!0));
    }
    function v(e) {
      return e === "AdsPEAdsICERoute"
        ? "ad"
        : e === "AdsPEAdsetsICERoute"
          ? "ad_set"
          : e === "AdsPECampaignsICERoute"
            ? "campaign"
            : null;
    }
    function S(e, t, n, o, a) {
      var i = r("adsCopySourceToObjectCreationSource")(t, n);
      return C(e, t, i, o, a, n);
    }
    function R(e, t, a, l, s) {
      var u,
        c,
        m,
        p,
        _,
        f,
        g,
        h,
        y = e.accountID,
        C = e.draftID,
        v = e.extraData,
        S = e.ids,
        R = e.newParentID,
        E = e.requestID;
      S.length === 0 &&
        r("FBLogger")("ads", "duplication_errors").mustfix(
          "ids should not be an empty array. Request: %s",
          JSON.stringify(e),
        );
      var T = o("AdsGraphAPI")
          .get(i.id)
          .adaccount(y)
          .edge("asyncadcopiesfullfragments"),
        D = k(e.extraData),
        x = {
          addraft_id: C,
          ad_object_ids: S,
          conversion_option: D,
          auto_conversion: o("AdsCopyAcrossObjectiveOption")
            .AdsCopyAcrossObjectiveOption.CONVERSION,
          copy_count: v ? v.count : null,
          copy_options: I(e.extraData),
          excluded_adset_ids:
            v == null || (u = v.odaxMigrationData) == null
              ? void 0
              : u.excluded_adset_ids,
          odax_objective:
            v == null || (c = v.odaxMigrationData) == null
              ? void 0
              : c.targetObjective,
          is_compatible_odax_objective:
            v == null || (m = v.odaxMigrationData) == null
              ? void 0
              : m.isCompatibleTargetObjective,
          l3_custom_rename: r("isTruthy")(
            v == null || (p = v.odaxMigrationData) == null
              ? void 0
              : p.customName,
          )
            ? v == null || (_ = v.odaxMigrationData) == null
              ? void 0
              : _.customName
            : v == null
              ? void 0
              : v.splitTestCustomName,
          deep_copy: !0,
          all_ad_object_ids: [],
          rename_strategy:
            (v == null ? void 0 : v.rename_strategy) || "ONLY_TOP_LEVEL_RENAME",
          reparenting_id: R,
          skip_tracking_specs: !0,
          source: a,
          draft_conversion: r("AdsCopyDraftOption").DRAFT_CONVERSION,
          split_test_study_id:
            v == null || (f = v.splitTestFreeformDuplicationConfig) == null
              ? void 0
              : f.studyID,
          creation_package_config_id:
            (g = v == null ? void 0 : v.creationPackageConfigID) != null
              ? g
              : v == null || (h = v.unificationUpgradeData) == null
                ? void 0
                : h.creationPackageConfigID,
          dsa_beneficiary: v == null ? void 0 : v.dsaBeneficiary,
          dsa_payor: v == null ? void 0 : v.dsaPayor,
          opt_in_duplication_automated_chat_upgrade_recommendations:
            (v == null
              ? void 0
              : v.duplicationAutomatedChatUpgradeRecommendations) != null &&
            (v == null
              ? void 0
              : v.duplicationAutomatedChatUpgradeRecommendations.length) > 0,
          opt_in_duplication_cta_upgrade_recommendations:
            (v == null
              ? void 0
              : v.duplicationCtaUpgradeOptInRecommendations) != null &&
            (v == null
              ? void 0
              : v.duplicationCtaUpgradeOptInRecommendations.length) > 0,
          opt_in_duplication_budget_recommendations:
            (v == null ? void 0 : v.duplicationBudgetRecommendations) != null &&
            (v == null ? void 0 : v.duplicationBudgetRecommendations.length) >
              0,
          opt_in_duplication_dc_optimization_recommendations:
            (v == null
              ? void 0
              : v.duplicationDCOptimizationUpgradeRecommendations) != null &&
            (v == null
              ? void 0
              : v.duplicationDCOptimizationUpgradeRecommendations.length) > 0,
          custom_targeting: v == null ? void 0 : v.customTargeting,
          custom_budget: v == null ? void 0 : v.customBudget,
          custom_budget_type: v == null ? void 0 : v.customBudgetType,
          custom_start_date: v == null ? void 0 : v.customStartDate,
          custom_end_date: v == null ? void 0 : v.customEndDate,
          regional_regulated_categories:
            v == null ? void 0 : v.regionalRegulatedCategories,
          broad_geo_upsell_toggle: v == null ? void 0 : v.broadGeoUpsellToggle,
          l1_custom_rename: v == null ? void 0 : v.newAdgroupName,
          l2_custom_rename: v == null ? void 0 : v.newCampaignName,
        },
        $ = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = null,
              t = yield o(
                "GraphAPIRetry",
              ).postWithRetries_UNSAFE_IDEMPOTENT_ONLY(T, x, d, function (t) {
                var n =
                  t.code === 1 &&
                  (t.error_subcode === 1357045 ||
                    t.error_subcode === 1357051) &&
                  r("gkx")("22338");
                return (n && (e = !0), n);
              });
            return (
              (t.extraData = v),
              (t.requestID = E || 0),
              (t.sourceAdObjectIDs = S),
              o(
                "AdsPerfInteractionLogDataUtil",
              ).addHeroTracingInteractionCustomMetadata(l, {
                has_retried_after_empty_response: e,
              }),
              t
            );
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return (
        !o(
          "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
        ).isEligibleForPreloadEditorOnHoverSilent() &&
          !o(
            "AdsDuplicationPreloadEditorOnHoverExperimentUtils",
          ).isEligibleForPreloadEditorOnSelectSilent() &&
          L(a) &&
          b(a),
        $().then(
          function (e) {
            return e;
          },
          function (e) {
            r("AdsCopyCopyErrorDataAction").dispatch(
              {
                accountID: y,
                error: e,
                ids: S,
                extraData: v,
                level: s,
                requestID: E || 0,
                source: t,
              },
              { line: "810", module: "AdsCopyDataManager.js", moduleID: i.id },
            );
          },
        )
      );
    }
    function L(e) {
      return (
        r("adsMgmtTrayStateSelector")() === null &&
        o("AdsMgmtOpenTrayStore").AdsMgmtOpenTrayStore.getIsEditorHidden() ===
          !1 &&
        y.indexOf(e) >= 0
      );
    }
    function E(e, t) {
      var n, o, a, i, l, s, u, c;
      if (
        (n = e.campaignIDsToAddInstagramReelsPlacement) != null &&
        n.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var d;
        t.ADD_INSTAGRAM_REELS_PLACEMENT =
          ((d = {}),
          (d.CAMPAIGN_ID = e.campaignIDsToAddInstagramReelsPlacement),
          (d.DUPLICATION_TYPE = e.custom_event_type),
          d);
      }
      if (
        (o = e.campaignIDsToAddReelsPlacement) != null &&
        (o = o.get(r("ReelsAdPlacement").INSTAGRAM_REELS)) != null &&
        o.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var m, p;
        t.ADD_INSTAGRAM_REELS_PLACEMENT =
          ((p = {}),
          (p.CAMPAIGN_ID =
            (m = e.campaignIDsToAddReelsPlacement) == null
              ? void 0
              : m.get(r("ReelsAdPlacement").INSTAGRAM_REELS)),
          (p.DUPLICATION_TYPE = e.custom_event_type),
          p);
      }
      if (
        (a = e.campaignIDsToAddReelsPlacement) != null &&
        (a = a.get(r("ReelsAdPlacement").FACEBOOK_REELS)) != null &&
        a.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var _, f;
        t.ADD_FACEBOOK_REELS_PLACEMENT =
          ((f = {}),
          (f.CAMPAIGN_ID =
            (_ = e.campaignIDsToAddReelsPlacement) == null
              ? void 0
              : _.get(r("ReelsAdPlacement").FACEBOOK_REELS)),
          (f.DUPLICATION_TYPE = e.custom_event_type),
          f);
      }
      if (
        (i = e.campaignIDsToAddReelsPlacement) != null &&
        (i = i.get(r("ReelsAdPlacement").FB_REELS_OVERLAY)) != null &&
        i.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var g, h;
        t.ADD_FACEBOOK_REELS_OVERLAY_PLACEMENT =
          ((h = {}),
          (h.CAMPAIGN_ID =
            (g = e.campaignIDsToAddReelsPlacement) == null
              ? void 0
              : g.get(r("ReelsAdPlacement").FB_REELS_OVERLAY)),
          (h.DUPLICATION_TYPE = e.custom_event_type),
          h);
      }
      if (
        e.campaignIDsToAddInstreamVideoPlacement &&
        e.campaignIDsToAddInstreamVideoPlacement.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var y;
        t.ADD_INSTREAM_VIDEOS_PLACEMENT =
          ((y = {}),
          (y.CAMPAIGN_ID = e.campaignIDsToAddInstreamVideoPlacement),
          (y.DUPLICATION_TYPE = e.custom_event_type),
          y);
      }
      if (
        (l = e.campaignIDsToAddInstagramExploreHomePlacement) != null &&
        l.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var C;
        t.ADD_INSTAGRAM_EXPLORE_HOME_PLACEMENT =
          ((C = {}),
          (C.CAMPAIGN_ID = e.campaignIDsToAddInstagramExploreHomePlacement),
          (C.DUPLICATION_TYPE = e.custom_event_type),
          C);
      }
      if (
        (s = e.campaignIDsToAddInstagramLeadGenUpsellPlacements) != null &&
        s.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var b;
        t.ADD_INSTAGRAM_LEAD_GEN_UPSELL_PLACEMENTS =
          ((b = {}),
          (b.CAMPAIGN_ID = e.campaignIDsToAddInstagramLeadGenUpsellPlacements),
          (b.DUPLICATION_TYPE = e.custom_event_type),
          b);
      }
      if (
        (u = e.campaignIDsToAddFacebookProfileFeedPlacement) != null &&
        u.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var v;
        t.ADD_FACEBOOK_PROFILE_FEED_PLACEMENT =
          ((v = {}),
          (v.CAMPAIGN_ID = e.campaignIDsToAddFacebookProfileFeedPlacement),
          (v.DUPLICATION_TYPE = e.custom_event_type),
          v);
      }
      if (
        e.campaignIDsToOptInConnectedTVPlacement &&
        e.campaignIDsToOptInConnectedTVPlacement.length
      ) {
        var S;
        t.ADD_CONNECTED_TV_PLACEMENT =
          ((S = {}),
          (S.CAMPAIGN_ID = e.campaignIDsToOptInConnectedTVPlacement),
          S);
      }
      if (
        e.campaignIDsToAddMessengerPlacement &&
        e.campaignIDsToAddMessengerPlacement.length &&
        r("isTruthy")(e.custom_event_type)
      ) {
        var R;
        t.ADD_MESSENGER_PLACEMENT =
          ((R = {}),
          (R.CAMPAIGN_ID = e.campaignIDsToAddMessengerPlacement),
          (R.DUPLICATION_TYPE = e.custom_event_type),
          R);
      }
      ((c = e.splitTestFreeformDuplicationConfig) == null
        ? void 0
        : c.addMessengerMarketingMessagesPlacement) === !0 &&
        (t.ADD_MESSENGER_MARKETING_MESSAGES_PLACEMENT = {});
    }
    function k(t) {
      var n,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _,
        f,
        g,
        h,
        y,
        C,
        b,
        v,
        S,
        R,
        L,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j,
        K,
        Q,
        X,
        Y,
        J,
        Z,
        ee,
        te,
        ne,
        re,
        oe,
        ae,
        ie,
        le;
      if (!t) return {};
      var se = {};
      if (t.preCacheUUID != null) {
        var ue;
        se.PRE_CACHE_UUID =
          ((ue = {}), (ue.PRE_CACHE_UUID = t.preCacheUUID), ue);
      }
      if (
        (E(t, se),
        (n = t.campaignIDsToRollbackTargetingPGDIndividualSetting) != null &&
          n.length)
      ) {
        var ce;
        se.ROLLBACK_TARGETING_PGD_INDIVIDUAL_SETTING =
          ((ce = {}),
          (ce.CAMPAIGN_IDS_TO_ROLLBACK_TARGETING_PGD_INDIVIDUAL_SETTING =
            t.campaignIDsToRollbackTargetingPGDIndividualSetting),
          ce);
      }
      if (
        t.campaignIDsToAddWhatsAppDestination &&
        t.campaignIDsToAddWhatsAppDestination.length
      ) {
        var de;
        se.ADD_WHATSAPP_DESTINATION =
          ((de = {}),
          (de.CAMPAIGN_ID = t.campaignIDsToAddWhatsAppDestination),
          de);
      }
      if (
        t.campaignIDsToAddMessengerDestination &&
        t.campaignIDsToAddMessengerDestination.length
      ) {
        var me;
        se.ADD_MESSENGER_DESTINATION =
          ((me = {}),
          (me.CAMPAIGN_ID = t.campaignIDsToAddMessengerDestination),
          me);
      }
      if (t.shopAdsUpsell === !0) {
        var pe;
        se.SHOPS_ADS_UPSELL_DATA =
          ((pe = {}), (pe.SHOPS_ADS_UPSELL_ENABLED = t.shopAdsUpsell), pe);
      }
      if (t.shopsAdsAdgroupUpgradesMap) {
        var _e;
        se.SHOPS_ADS_DUPLICATION_UPGRADE =
          ((_e = {}),
          (_e.ADGROUP_IDS_TO_UPGRADE = t.shopsAdsAdgroupUpgradesMap),
          _e);
      }
      if (t.convertToConversionLeadOptimizationGoal === !0) {
        var fe;
        se.SWITCH_OPTIMIZATION_GOAL_TO_QUALITY_LEAD =
          ((fe = {}),
          (fe.SHOULD_SWITCH_TO_QUALITY_LEAD_OPTIMIZATION_GOAL =
            t.convertToConversionLeadOptimizationGoal),
          fe);
      }
      if (t.convertToLeadGenerationOptimizationGoal === !0) {
        var ge;
        se.SWITCH_CLO_PROXY_TO_LEAD_GENERATION =
          ((ge = {}),
          (ge.SHOULD_SWITCH_CLO_PROXY_TO_LEAD_GENERATION =
            t.convertToLeadGenerationOptimizationGoal),
          ge);
      }
      if (t.convertToConversationsOptimizationGoal === !0) {
        var he;
        se.CONVERT_TO_CONVERSATIONS_OPTIMIZATION_GOAL =
          ((he = {}),
          (he.SHOULD_OPT_IN_CONVERSATIONS_OPTIMIZATION_GOAL =
            t.convertToConversationsOptimizationGoal),
          he);
      }
      if (t.convertToLeadsObjective === !0) {
        var ye;
        se.CONVERT_TO_LEADS_OBJECTIVE =
          ((ye = {}),
          (ye.SHOULD_OPT_IN_LEADS_OBJECTIVE = t.convertToLeadsObjective),
          ye);
      }
      if (t.convertToEngagementObjective === !0) {
        var Ce;
        se.CONVERT_TO_ENGAGEMENT_OBJECTIVE =
          ((Ce = {}),
          (Ce.SHOULD_OPT_IN_ENGAGEMENT_OBJECTIVE =
            t.convertToEngagementObjective),
          Ce);
      }
      if (t.convertToMessengerDestination === !0) {
        var be;
        se.CONVERT_TO_MESSENGER_DESTINATION =
          ((be = {}),
          (be.SHOULD_OPT_IN_MESSENGER_DESTINATION =
            t.convertToMessengerDestination),
          be);
      }
      if (t.convertToSMCTA === !0) {
        var ve;
        se.CONVERT_TO_SMCTA =
          ((ve = {}), (ve.SHOULD_OPT_IN_SMCTA = t.convertToSMCTA), ve);
      }
      if (t.convertToEmptyFrequencyControl === !0) {
        var Se;
        se.CONVERT_TO_EMPTY_FREQUENCY_CONTROL =
          ((Se = {}),
          (Se.SHOULD_OPT_IN_EMPTY_FREQUENCY_CONTROL =
            t.convertToEmptyFrequencyControl),
          Se);
      }
      if ((o = t.reelsMusicDuplicationEligible) != null && o.length) {
        var Re;
        se.CONVERT_TO_AUTOFLOW_MUSIC_ADGROUP =
          ((Re = {}), (Re.ADGROUP_ID = t.reelsMusicDuplicationEligible), Re);
      }
      if (
        (a = t.adgroupIDsToTurnOnSiteExtensionsGuidanceDuplication) != null &&
        a.length
      ) {
        var Le;
        se.ADD_SITE_EXTENSIONS =
          ((Le = {}),
          (Le.ADGROUP_ID =
            t.adgroupIDsToTurnOnSiteExtensionsGuidanceDuplication),
          Le);
      }
      if ((i = t.adgroupIDsToTurnOnSmsVerification) != null && i.length) {
        var Ee;
        se.TURN_ON_SMS_VERIFICATION =
          ((Ee = {}),
          (Ee.ADGROUP_ID = t.adgroupIDsToTurnOnSmsVerification),
          Ee);
      }
      if (t.turnOnSmsVerificationForAllAds === !0) {
        var ke;
        se.TURN_ON_SMS_VERIFICATION = babelHelpers.extends(
          {},
          se.TURN_ON_SMS_VERIFICATION,
          ((ke = {}),
          (ke.SHOULD_OPT_IN_SMS_VERIFICATION =
            t.turnOnSmsVerificationForAllAds),
          ke),
        );
      }
      if ((l = t.adgroupIDsToTurnOnBizAIAgent) != null && l.length) {
        var Ie;
        se.TURN_ON_BIZ_AI_AGENT =
          ((Ie = {}), (Ie.ADGROUP_ID = t.adgroupIDsToTurnOnBizAIAgent), Ie);
      }
      if (
        (s = t.adgroupIDsToTurnOnCtxRecommendedTemplateBundle) != null &&
        s.length
      ) {
        var Te;
        se.TURN_ON_CTX_RECOMMENDED_TEMPLATE_BUNDLE =
          ((Te = {}),
          (Te.ADGROUP_ID = t.adgroupIDsToTurnOnCtxRecommendedTemplateBundle),
          (Te.CTX_ELIGIBLE_CHILD_REC_TYPES =
            t.ctxRecommendedTemplateBundleEligibleChildRecTypes),
          Te);
      }
      if (t.convertToPurchaseOptimizationGoal === !0) {
        var De;
        se.CONVERT_TO_PURCHASE_OPTIMIZATION_GOAL =
          ((De = {}),
          (De.SHOULD_OPT_IN_PURCHASE_OPTIMIZATION_GOAL =
            t.convertToPurchaseOptimizationGoal),
          De);
      }
      if (t.convertToOffsiteConversionGoal === !0) {
        var xe;
        se.CONVERT_TO_OFFSITE_CONVERSION_GOAL =
          ((xe = {}),
          (xe.SHOULD_OPT_IN_OFFSITE_CONVERSION_GOAL =
            t.convertToOffsiteConversionGoal),
          xe);
      }
      if (t.convertToValueOptimizationGoal === !0) {
        var $e;
        se.CONVERT_TO_VALUE_OPTIMIZATION_GOAL =
          (($e = {}),
          ($e.SHOULD_OPT_IN_VALUE_OPTIMIZATION_GOAL =
            t.convertToValueOptimizationGoal),
          $e);
      }
      if (t.destinationCampaignGroupObjective != null) {
        var Pe;
        se.DESTINATION_CAMPAIGN_GROUP =
          ((Pe = {}),
          (Pe.DESTINATION_CAMPAIGN_GROUP_OBJECTIVE =
            t.destinationCampaignGroupObjective),
          Pe);
      }
      if (t.convertToAutoflowAdgroup != null) {
        var Ne;
        se.CONVERT_TO_AUTOFLOW_ADGROUP =
          ((Ne = {}),
          (Ne.SHOULD_OPT_IN_AUTOFLOW = t.convertToAutoflowAdgroup),
          Ne);
      }
      if (t.convertToMultiAdvertiserAdsAdgroup === !0) {
        var Me;
        se.CONVERT_TO_MULTI_ADVERTISER_ADS_ADGROUP =
          ((Me = {}),
          (Me.SHOULD_OPT_IN_MULTI_ADVERTISER_ADS =
            t.convertToMultiAdvertiserAdsAdgroup),
          Me);
      }
      if ((u = t.adgroupIDsToTurnOnCatalogDynamicMedia) != null && u.length) {
        var we;
        se.TURN_ON_CATALOG_DYNAMIC_MEDIA =
          ((we = {}),
          (we.ADGROUP_ID = t.adgroupIDsToTurnOnCatalogDynamicMedia),
          we);
      }
      if (
        (c = t.advantagePlusCreativeCatalogDuplicationEligibleAdgroup) !=
          null &&
        c.length
      ) {
        var Ae;
        se.CONVERT_TO_ACO_ADGROUP =
          ((Ae = {}),
          (Ae.SHOULD_OPT_IN_ACO =
            t.advantagePlusCreativeCatalogDuplicationEligibleAdgroup),
          Ae);
      }
      if (
        (d = t.adgroupIDsToTurnOnCreativeImageTemplates) != null &&
        d.length
      ) {
        var Fe;
        se.TURN_ON_CREATIVE_IMAGE_TEMPLATES =
          ((Fe = {}),
          (Fe.ADGROUP_ID = t.adgroupIDsToTurnOnCreativeImageTemplates),
          Fe);
      }
      if ((m = t.adgroupIDsToTurnOnCreativeImageTouchups) != null && m.length) {
        var Oe;
        se.TURN_ON_CREATIVE_IMAGE_TOUCHUPS =
          ((Oe = {}),
          (Oe.ADGROUP_ID = t.adgroupIDsToTurnOnCreativeImageTouchups),
          Oe);
      }
      if (
        (p = t.adgroupIDsToTurnOnCreativeTextOptimizations) != null &&
        p.length
      ) {
        var Be;
        se.TURN_ON_CREATIVE_TEXT_OPTIMIZATIONS =
          ((Be = {}),
          (Be.ADGROUP_ID = t.adgroupIDsToTurnOnCreativeTextOptimizations),
          Be);
      }
      if ((_ = t.adgroupIDsToTurnOnCreativeVideoAutocrop) != null && _.length) {
        var We;
        se.TURN_ON_CREATIVE_VIDEO_AUTO_CROP =
          ((We = {}),
          (We.ADGROUP_ID = t.adgroupIDsToTurnOnCreativeVideoAutocrop),
          We);
      }
      if ((f = t.duplicationUpgradeRelatedMediaData) != null && f.length) {
        var qe;
        se.TURN_ON_RELATED_MEDIA_DUPLICATION_UPGRADE =
          ((qe = {}),
          (qe.RELATED_MEDIA = t.duplicationUpgradeRelatedMediaData),
          qe);
      }
      if (t.duplicationUpgradeDurationSettingsRecommendationData != null) {
        var Ue;
        se.UPGRADE_DURATION_SETTINGS_FOR_DUPLICATION =
          ((Ue = {}),
          (Ue.CAMPAIGN_ID =
            t.duplicationUpgradeDurationSettingsRecommendationData.campaign_ids),
          (Ue.SABR_RECOMMENDED_DURATION_DAYS =
            t.duplicationUpgradeDurationSettingsRecommendationData.recommended_duration_days),
          Ue);
      }
      if (
        (g = t.campaignIDsToTurnOnLookalikeTargetingRelaxation) != null &&
        g.length
      ) {
        var Ve;
        se.TURN_ON_LOOKALIKE_TARGETING_RELAXATION =
          ((Ve = {}),
          (Ve.CAMPAIGN_ID = t.campaignIDsToTurnOnLookalikeTargetingRelaxation),
          Ve);
      }
      if (
        (h = t.campaignIDsToTurnOnCustomAudienceTargetingRelaxation) != null &&
        h.length
      ) {
        var He;
        se.TURN_ON_CUSTOM_AUDIENCE_TARGETING_RELAXATION =
          ((He = {}),
          (He.CAMPAIGN_ID =
            t.campaignIDsToTurnOnCustomAudienceTargetingRelaxation),
          He);
      }
      if (
        (y = t.campaignGroupIDsToTurnOnAdsetBudgetSharing) != null &&
        y.length
      ) {
        var Ge;
        se.TURN_ON_AD_SET_BUDGET_SHARING =
          ((Ge = {}),
          (Ge.CAMPAIGN_GROUP_IDS_TO_UPGRADE_TO_AD_SET_BUDGET_SHARING =
            t.campaignGroupIDsToTurnOnAdsetBudgetSharing),
          Ge);
      }
      if (
        (C = t.adgroupIdsToTurnOnWhatsappBrowserExtension) != null &&
        C.length
      ) {
        var ze;
        se.ADD_WHATSAPP_BROWSER_ADD_ON =
          ((ze = {}),
          (ze.ADGROUP_IDS_TO_UPGRADE =
            t.adgroupIdsToTurnOnWhatsappBrowserExtension),
          ze);
      }
      if (
        (b = t.adgroupIdsToTurnOnMessengerBrowserExtension) != null &&
        b.length
      ) {
        var je;
        se.CONVERT_TO_MESSENGER_BROWSER_ADD_ON =
          ((je = {}),
          (je.ADGROUP_IDS_TO_UPGRADE =
            t.adgroupIdsToTurnOnMessengerBrowserExtension),
          je);
      }
      if (
        (v = t.campaignIDsToTurnOnDetailedTargetingOptimization) != null &&
        v.length
      ) {
        var Ke;
        se.TURN_ON_DETAILED_TARGETING_OPTIMIZATION =
          ((Ke = {}),
          (Ke.CAMPAIGN_ID = t.campaignIDsToTurnOnDetailedTargetingOptimization),
          Ke);
      }
      if (
        (S = t.campaignIDsToTurnOnAdvantageAudienceTargetingAutomation) !=
          null &&
        S.length
      ) {
        var Qe;
        se.TURN_ON_ADVANTAGE_AUDIENCE_TARGETING_AUTOMATION =
          ((Qe = {}),
          (Qe.CAMPAIGN_ID =
            t.campaignIDsToTurnOnAdvantageAudienceTargetingAutomation),
          Qe);
      }
      if (
        (R = t.campaignIDsToTurnOnCreativeAudiencePairing) != null &&
        R.length
      ) {
        var Xe;
        se.TURN_ON_CREATIVE_AUDIENCE_PAIRING =
          ((Xe = {}),
          (Xe.CAMPAIGN_ID = t.campaignIDsToTurnOnCreativeAudiencePairing),
          Xe);
      }
      if ((L = t.campaignIDsToTurnOnBroadgeoTargeting) != null && L.length) {
        var Ye;
        se.TURN_ON_BROAD_GEO_TARGETING =
          ((Ye = {}),
          (Ye.CAMPAIGN_ID = t.campaignIDsToTurnOnBroadgeoTargeting),
          Ye);
      }
      if ((k = t.campaignIDsToTurnOnDeviceTargeting) != null && k.length) {
        var Je;
        se.TURN_ON_DEVICE_TARGETING =
          ((Je = {}),
          (Je.CAMPAIGN_ID = t.campaignIDsToTurnOnDeviceTargeting),
          Je);
      }
      if ((I = t.turnOnEngagedViewAttribution) != null && I.length) {
        var Ze;
        se.TURN_ON_ENGAGED_VIEW_ATTRIBUTION =
          ((Ze = {}),
          (Ze.CAMPAIGN_IDS_TO_TURN_ON_ENGAGED_VIEW_ATTRIBUTION =
            t.turnOnEngagedViewAttribution),
          Ze);
      }
      if ((T = t.turnOnIncrementalAttribution) != null && T.length) {
        var et;
        se.TURN_ON_INCREMENTAL_ATTRIBUTION =
          ((et = {}), (et.CAMPAIGN_ID = t.turnOnIncrementalAttribution), et);
      }
      if ((D = t.campaignIDsToTurnOnAdvantagePlacements) != null && D.length) {
        var tt;
        se.TURN_ON_ADVANTAGE_PLACEMENTS =
          ((tt = {}),
          (tt.CAMPAIGN_ID = t.campaignIDsToTurnOnAdvantagePlacements),
          tt);
      }
      if (
        ((x = t.unificationUpgradeData) == null
          ? void 0
          : x.isUnificationUpgrade) === !0
      ) {
        var nt;
        se.UNIFICATION_DUPLICATION_UPGRADE =
          ((nt = {}),
          (nt.IS_UNIFICATION_UPGRADE =
            t.unificationUpgradeData.isUnificationUpgrade),
          (nt.SHOULD_SPLIT_CAMPAIGN =
            t.unificationUpgradeData.shouldSplitCampaignForUnificationUpgrade),
          nt);
      }
      if (t.isEligibleForBAUToPGDStandardDuplication === !0) {
        var rt;
        se.BAU_TO_PGD_STANDARD_DUPLICATION =
          ((rt = {}), (rt.IS_BAU_TO_PGD_STANDARD_DUPLICATION = !0), rt);
      }
      if (($ = t.copyAdgroupAgain) != null && $.length) {
        var ot;
        se.COPY_ADGROUP_AGAIN =
          ((ot = {}), (ot.ADGROUP_ID = t.copyAdgroupAgain), ot);
      }
      if (
        (P = t.campaignIDsToSwitchToWebAndAppConversionLocation) != null &&
        P.length
      ) {
        var at;
        se.SWITCH_CONVERSION_LOCATION_TO_WEB_AND_APP =
          ((at = {}),
          (at.CAMPAIGN_ID = t.campaignIDsToSwitchToWebAndAppConversionLocation),
          at);
      }
      if (
        (N = t.campaignIDsToUpsellSoftOptOutToNonAplusP) != null &&
        N.length
      ) {
        var it;
        se.UPSELL_SOFT_OPT_OUT_TO_NON_APLUS_P =
          ((it = {}),
          (it.CAMPAIGN_ID = t.campaignIDsToUpsellSoftOptOutToNonAplusP),
          it);
      }
      if (
        (M = t.adgroupIDsToConvertToAdvantagePlusDestination) != null &&
        M.length
      ) {
        var lt;
        se.CONVERT_TO_ADVANTAGE_PLUS_DESTINATION_ADGROUP =
          ((lt = {}),
          (lt.ADGROUP_ID = t.adgroupIDsToConvertToAdvantagePlusDestination),
          lt);
      }
      if (
        (w = t.campaignIDsToSwitchToWebAndInstantFormConversionLocation) !=
          null &&
        w.length
      ) {
        var st;
        se.SWITCH_CONVERSION_LOCATION_TO_WEBSITE_AND_INSTANT_FORM =
          ((st = {}),
          (st.CAMPAIGN_ID =
            t.campaignIDsToSwitchToWebAndInstantFormConversionLocation),
          st);
      }
      if (
        (A = t.campaignIDsToSwitchToWebAndInstoreConversionLocation) != null &&
        A.length
      ) {
        var ut;
        se.SWITCH_CONVERSION_LOCATION_TO_WEB_AND_INSTORE =
          ((ut = {}),
          (ut.CAMPAIGN_ID =
            t.campaignIDsToSwitchToWebAndInstoreConversionLocation),
          ut);
      }
      if (
        (F = t.campaignIDsToSwitchToWebsiteAndCallsConversionLocation) !=
          null &&
        F.length
      ) {
        var ct;
        se.SWITCH_CONVERSION_LOCATION_TO_WEBSITE_AND_CALLS =
          ((ct = {}),
          (ct.CAMPAIGN_ID =
            t.campaignIDsToSwitchToWebsiteAndCallsConversionLocation),
          ct);
      }
      if ((O = t.campaignIDsToEnableCallAdsL2Dayparting) != null && O.length) {
        var dt;
        se.CALL_ADS_L2_DAYPARTING =
          ((dt = {}),
          (dt.CAMPAIGN_ID = t.campaignIDsToEnableCallAdsL2Dayparting),
          dt);
      }
      if (
        (B = t.campaignIDsToConvertToCTDLeadsOptimization) != null &&
        B.length
      ) {
        var mt;
        se.SWITCH_OPTIMIZATION_GOAL_TO_LEAD_GENERATION =
          ((mt = {}),
          (mt.CAMPAIGN_ID = t.campaignIDsToConvertToCTDLeadsOptimization),
          mt);
      }
      if (
        (W = t.campaignIDsToConvertToCTMLeadsOptimization) != null &&
        W.length
      ) {
        var pt;
        se.SWITCH_OPTIMIZATION_GOAL_TO_LEAD_GENERATION =
          ((pt = {}),
          (pt.CAMPAIGN_ID = t.campaignIDsToConvertToCTMLeadsOptimization),
          pt);
      }
      if (
        (q = t.campaignIDsToConvertToCTMValueOptimization) != null &&
        q.length
      ) {
        var _t;
        se.SWITCH_OPTIMIZATION_GOAL_TO_VALUE_OPTIMIZATION_FOR_CTX =
          ((_t = {}),
          (_t.CAMPAIGN_ID = t.campaignIDsToConvertToCTMValueOptimization),
          _t);
      }
      if ((U = t.adgroupIDsToConvertToB2PMessaging) != null && U.length) {
        var ft;
        se.CONVERT_TO_B2P_MESSAGING =
          ((ft = {}),
          (ft.ADGROUP_ID = t.adgroupIDsToConvertToB2PMessaging),
          ft);
      }
      if ((V = t.adgroupIDsToConvertToChatOnWhatsapp) != null && V.length) {
        var gt;
        se.CONVERT_TO_CHAT_ON_WHATSAPP =
          ((gt = {}),
          (gt.ADGROUP_ID = t.adgroupIDsToConvertToChatOnWhatsapp),
          gt);
      }
      if (
        (H = t.adgroupIDsToConvertToPartnershipAdsDynamicHeader) != null &&
        H.length
      ) {
        var ht;
        se.CONVERT_TO_PARTNERSHIP_AD_DYNAMIC_HEADER =
          ((ht = {}),
          (ht.ADGROUP_ID = t.adgroupIDsToConvertToPartnershipAdsDynamicHeader),
          ht);
      }
      if (
        (G = t.campaignIDsToConvertToPurchaseOptimization) != null &&
        G.length
      ) {
        var yt;
        se.SWITCH_OPTIMIZATION_GOAL_TO_PURCHASE_OPTIMIZATION =
          ((yt = {}),
          (yt.CAMPAIGN_ID = t.campaignIDsToConvertToPurchaseOptimization),
          yt);
      }
      if (
        (z = t.campaignIDsToConvertToCTDPurchaseOptimization) != null &&
        z.length
      ) {
        var Ct;
        se.SWITCH_OPTIMIZATION_GOAL_TO_PURCHASE_OPTIMIZATION =
          ((Ct = {}),
          (Ct.CAMPAIGN_ID = t.campaignIDsToConvertToCTDPurchaseOptimization),
          Ct);
      }
      if (
        (j = t.campaignIDsToConvertToCTWALeadOptimization) != null &&
        j.length
      ) {
        var bt;
        se.SWITCH_OPTIMIZATION_GOAL_TO_LEAD_GENERATION =
          ((bt = {}),
          (bt.CAMPAIGN_ID = t.campaignIDsToConvertToCTWALeadOptimization),
          bt);
      }
      if (
        (K = t.campaignIDsToConvertToCTWAPurchaseOptimization) != null &&
        K.length
      ) {
        var vt;
        se.SWITCH_OPTIMIZATION_GOAL_TO_PURCHASE_OPTIMIZATION =
          ((vt = {}),
          (vt.CAMPAIGN_ID = t.campaignIDsToConvertToCTWAPurchaseOptimization),
          vt);
      }
      if (
        (Q = t.campaignIDsToConvertToInAppAdImpressionRoasAndroid) != null &&
        Q.length
      ) {
        var St;
        se.IN_APP_AD_IMPRESSION_ROAS_ANDROID =
          ((St = {}),
          (St.CAMPAIGN_ID =
            t.campaignIDsToConvertToInAppAdImpressionRoasAndroid),
          St);
      }
      if (
        (X = t.campaignIDsToConvertToValueOptimizationGoalIAP) != null &&
        X.length
      ) {
        var Rt;
        se.CONVERT_TO_VALUE_OPTIMIZATION_GOAL_IAP =
          ((Rt = {}),
          (Rt.CAMPAIGN_ID = t.campaignIDsToConvertToValueOptimizationGoalIAP),
          Rt);
      }
      if ((Y = t.campaignIDsToConvertToQualityLead) != null && Y.length) {
        var Lt;
        se.SWITCH_OPTIMIZATION_GOAL_TO_QUALITY_LEAD =
          ((Lt = {}),
          (Lt.CAMPAIGN_ID = t.campaignIDsToConvertToQualityLead),
          Lt);
      }
      if (
        (J = t.campaignIDsToConvertToOffsiteQualityLead) != null &&
        J.length
      ) {
        var Et;
        se.SWITCH_OPTIMIZATION_GOAL_TO_QUALITY_LEAD =
          ((Et = {}),
          (Et.CAMPAIGN_ID = t.campaignIDsToConvertToOffsiteQualityLead),
          Et);
      }
      if ((Z = t.campaignIDsToConvertToValue) != null && Z.length) {
        var kt;
        se.CONVERT_TO_VALUE_OPTIMIZATION_GOAL =
          ((kt = {}), (kt.CAMPAIGN_ID = t.campaignIDsToConvertToValue), kt);
      }
      if ((ee = t.campaignIDsToConvertToLandingPageView) != null && ee.length) {
        var It;
        se.SWITCH_OPTIMIZATION_GOAL_TO_LPV =
          ((It = {}),
          (It.CAMPAIGN_ID = t.campaignIDsToConvertToLandingPageView),
          It);
      }
      if (
        (te = t.campaignIDsToConvertToMultiMessageDestinations) != null &&
        te.length
      ) {
        var Tt;
        se.CONVERT_TO_MULTI_MESSAGE_DESTINATIONS =
          ((Tt = {}),
          (Tt.CAMPAIGN_ID = t.campaignIDsToConvertToMultiMessageDestinations),
          Tt);
      }
      if ((t == null ? void 0 : t.isOptedIntoUnifiedPCA) === !0) {
        var Dt;
        se.UNIFIED_PCA =
          ((Dt = {}),
          (Dt.IS_OPTED_INTO_UNIFIED_PCA = t.isOptedIntoUnifiedPCA),
          Dt);
      }
      if (
        (ne = t.campaignIDsToConvertToOffsiteConversion) != null &&
        ne.length
      ) {
        var xt;
        se.CONVERT_TO_OFFSITE_CONVERSION_GOAL =
          ((xt = {}),
          (xt.CAMPAIGN_ID = t.campaignIDsToConvertToOffsiteConversion),
          xt);
      }
      if (
        (re = t.shopsAdsSAOffDuplicationUpgradeAdgroupIDs) != null &&
        re.length
      ) {
        var $t;
        se.SHOPS_ADS_SAOFF_DWU_UPGRADE =
          (($t = {}),
          ($t.ADGROUP_IDS_TO_UPGRADE =
            t.shopsAdsSAOffDuplicationUpgradeAdgroupIDs),
          $t);
      }
      if (
        (oe = t.voViewThroughDefaultDuplicationUpgradeCampaignIds) != null &&
        oe.length
      ) {
        var Pt;
        se.VO_VIEW_THROUGH_ATTRIBUTION =
          ((Pt = {}),
          (Pt.CAMPAIGN_ID =
            t.voViewThroughDefaultDuplicationUpgradeCampaignIds),
          Pt);
      }
      if (
        (ae = t.smartDefaultValueRulesDuplicationUpgradeCampaignIds) != null &&
        ae.length
      ) {
        var Nt;
        se.TURN_ON_SMART_DEFAULT_VALUE_RULES =
          ((Nt = {}),
          (Nt.CAMPAIGN_ID =
            t.smartDefaultValueRulesDuplicationUpgradeCampaignIds),
          Nt);
      }
      if (
        (ie = t.campaignIDsToAddInstagram3MajorPlacement) != null &&
        ie.length
      ) {
        var Mt;
        se.ADD_INSTAGRAM_3_MAJOR_PLACEMENTS =
          ((Mt = {}),
          (Mt.CAMPAIGN_ID = t.campaignIDsToAddInstagram3MajorPlacement),
          Mt);
      }
      if (t.adsDuplicationUpgradeProductExtensionsData != null) {
        var wt;
        se.PRODUCT_EXTENSION_DUPLICATION_UPGRADE =
          ((wt = {}),
          (wt.PRODUCT_EXTENSION_UPGRADE_SPEC =
            t.adsDuplicationUpgradeProductExtensionsData),
          wt);
      }
      if ((t == null ? void 0 : t.ctxDownfunnelTargetObjective) != null) {
        var At;
        se.CTX_DOWNFUNNEL_TARGET_OBJECTIVE =
          ((At = {}),
          (At.CTX_DOWNFUNNEL_TARGET_OBJECTIVE =
            t == null ? void 0 : t.ctxDownfunnelTargetObjective),
          At);
      }
      return (e || (e = r("isEmpty")))(se)
        ? {}
        : ((le = {}), (le.conversion_spec = se), le);
    }
    function I(e) {
      var t = [];
      ((e == null ? void 0 : e.isDuplicateTurnOnAdsStatus) === !0 &&
        t.push("FORCE_RUN_STATUS_ACTIVE"),
        e && e.shouldIncludeComment === !0 && t.push("REUSE_CREATIVE"));
      var n = e == null ? void 0 : e.splitTestFreeformDuplicationConfig;
      return (
        (n == null ? void 0 : n.studyID) != null &&
          (n == null ? void 0 : n.adObjectLevelToCopy) === "campaign" &&
          t.push("AUTO_ACTIVATE_AAA_CAMPAIGN"),
        t
      );
    }
    function T(e) {
      var t, n;
      if (e.ad_object_type !== "ad_set") return !1;
      var r = e.values;
      if (!Array.isArray(r)) return !1;
      var o = r.findIndex(function (e) {
        return (e == null ? void 0 : e.field) === "targeting";
      });
      if (o < 0) return !1;
      var a = (t = r[o]) == null ? void 0 : t.new_value,
        i;
      if (typeof a == "string")
        try {
          i = JSON.parse(a);
        } catch (e) {
          return !1;
        }
      else if (a != null && typeof a == "object") i = a;
      else return !1;
      var l =
        (n = i) == null || (n = n.excluded_geo_locations) == null
          ? void 0
          : n.cities;
      return Array.isArray(l) && l.length > 0;
    }
    function D(e) {
      var t;
      if (e.ad_object_type !== "ad_set") return e;
      var n = e.values;
      if (!Array.isArray(n)) return e;
      var r = n.findIndex(function (e) {
        return (e == null ? void 0 : e.field) === "targeting";
      });
      if (r < 0) return e;
      var o = n[r],
        a = o == null ? void 0 : o.new_value,
        i,
        l = !1;
      if (typeof a == "string") {
        l = !0;
        try {
          i = JSON.parse(a);
        } catch (t) {
          return e;
        }
      } else if (a != null && typeof a == "object") i = a;
      else return e;
      var s =
        (t = i) == null || (t = t.excluded_geo_locations) == null
          ? void 0
          : t.cities;
      if (!Array.isArray(s) || s.length === 0) return e;
      var u = s.map(function (e) {
          return e != null && e.radius === 0
            ? e
            : babelHelpers.extends({}, e, { radius: 0 });
        }),
        c = babelHelpers.extends({}, i, {
          excluded_geo_locations: babelHelpers.extends(
            {},
            i.excluded_geo_locations,
            { cities: u },
          ),
        }),
        d = l ? JSON.stringify(c) : c,
        m = n.map(function (e, t) {
          return t === r ? babelHelpers.extends({}, e, { new_value: d }) : e;
        });
      return babelHelpers.extends({}, e, { values: m });
    }
    function x(e) {
      var t = e.addraft_fragments,
        n = t.map(function (e) {
          return e.ad_object_id;
        }),
        r = {
          fragments: t,
          draftID: e.addraft_id,
          ids: n,
          extraData: e.extraData,
          requestID: e.requestID,
          sourceAdObjectIDs: e.sourceAdObjectIDs,
          fullAdDraftFragments: e.full_addraft_fragments,
        };
      return r;
    }
    ((l.maybeConvertOptimizationGoalForDuplication = h),
      (l.copyWithFragmentSource = C),
      (l.copy = S),
      (l.getConversionOptions = k),
      (l.fragmentHasExcludedCities = T),
      (l.zeroExcludedCityRadiusOnDuplicate = D));
  },
  98,
);
