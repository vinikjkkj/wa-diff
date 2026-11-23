__d(
  "AdsBulkEditCampaignAdvantageAudienceAgeSuggestionPlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAdvantageAudienceUtils",
    "AdsBulkEditChangeTargetingDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsCampaignBulkEditStore",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsFluxHooks",
    "AdsNameBulkEditPluginUtils",
    "AdsTargetingAccountControlInfoSelector",
    "AdsTargetingAgeEditor.react",
    "AdsTargetingAgeEditorRenderSourceEnum",
    "AdsTargetingPGDIndividualSettingCheckboxContainerWrapper.react",
    "AdsTargetingUnknownAgeEditor.react",
    "AdsUEditorAgeGenderValueRulesOnlyConstants",
    "AdsUEditorHooks",
    "AdsValidationConsts",
    "AdsYouthAdsAgeLimitEligibility",
    "AdsYouthAdsUtils",
    "AdsYouthAdsYT2GatingUtils",
    "AdsYouthDeliveryStatusUtils",
    "GeoBaseText.react",
    "GeoTableWidth",
    "WAMOStatusAdsManagerUtils",
    "adsTargetingPGDIsAnyEligibleForUnifiedAppSalesAudienceSelector",
    "adsTargetingPGDIsIndividualSettingCampaign",
    "adsUEditorCampaignGroupObjectiveSelector",
    "adsUEditorDATargetingConsolidationSelectors",
    "gkx",
    "immutable",
    "isPGDCampaignObjetiveEligibleForWaMo",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = function (t, n) {
        var e, o;
        (r("AdsBulkEditChangeTargetingDataAction").dispatch(
          {
            columnKey: r("AdsCampaignBulkEditColumnKeys")
              .TARGETING_AUTOMATION_INDIVIDUAL_SETTING_AGE,
            targetingAutomationIndividualSettingAge: 0,
            adObjectIDs: t,
          },
          {
            line: "71",
            module:
              "AdsBulkEditCampaignAdvantageAudienceAgeSuggestionPlugin.js",
            moduleID: i.id,
          },
        ),
          r("AdsBulkEditChangeTargetingDataAction").dispatch(
            {
              ageMax:
                (e = n == null ? void 0 : n[1]) != null
                  ? e
                  : r("AdsValidationConsts").maxAge,
              ageMin:
                (o = n == null ? void 0 : n[0]) != null
                  ? o
                  : r("AdsValidationConsts").minAgeDefault,
              columnKey: r("AdsCampaignBulkEditColumnKeys").AGE,
              adObjectIDs: t,
            },
            {
              line: "78",
              module:
                "AdsBulkEditCampaignAdvantageAudienceAgeSuggestionPlugin.js",
              moduleID: i.id,
            },
          ),
          r("AdsBulkEditChangeTargetingDataAction").dispatch(
            {
              ageRange: [],
              columnKey: r("AdsCampaignBulkEditColumnKeys").AGE_SUGGESTION,
              adObjectIDs: t,
            },
            {
              line: "84",
              module:
                "AdsBulkEditCampaignAdvantageAudienceAgeSuggestionPlugin.js",
              moduleID: i.id,
            },
          ));
      };
    function d(e, t, n, a) {
      var l;
      if (
        o("AdsAdvantageAudienceUtils").isAdvantageAudienceEnabledForCampaign(e)
      ) {
        r("AdsBulkEditChangeTargetingDataAction").dispatch(
          {
            ageRange: [n, a],
            columnKey: r("AdsCampaignBulkEditColumnKeys").AGE_SUGGESTION,
            adObjectIDs: t,
          },
          {
            line: "102",
            module:
              "AdsBulkEditCampaignAdvantageAudienceAgeSuggestionPlugin.js",
            moduleID: i.id,
          },
        );
        return;
      }
      var s =
        ((l = e.targeting.targeting_automation) == null ||
        (l = l.individual_setting) == null
          ? void 0
          : l.age) === 1;
      if (s) {
        if (n < r("AdsValidationConsts").minAgeDefault) {
          c(t, [n, a]);
          return;
        }
        r("AdsBulkEditChangeTargetingDataAction").dispatch(
          {
            ageRange: [n, a],
            columnKey: r("AdsCampaignBulkEditColumnKeys").AGE_SUGGESTION,
            adObjectIDs: t,
          },
          {
            line: "117",
            module:
              "AdsBulkEditCampaignAdvantageAudienceAgeSuggestionPlugin.js",
            moduleID: i.id,
          },
        );
        return;
      }
      r("AdsBulkEditChangeTargetingDataAction").dispatch(
        {
          ageMax: a,
          ageMin: n,
          columnKey: r("AdsCampaignBulkEditColumnKeys").AGE,
          adObjectIDs: t,
        },
        {
          line: "124",
          module: "AdsBulkEditCampaignAdvantageAudienceAgeSuggestionPlugin.js",
          moduleID: i.id,
        },
      );
    }
    function m(e) {
      var t,
        n =
          ((t = e.targeting.targeting_automation) == null ||
          (t = t.individual_setting) == null
            ? void 0
            : t.age) === 1;
      if (
        o("AdsAdvantageAudienceUtils").isAdvantageAudienceEnabledForCampaign(
          e,
        ) ||
        n
      ) {
        var a,
          i,
          l = e.targeting.age_range || r("immutable").List(),
          s = (l == null || l.toArray == null ? void 0 : l.toArray()) || l;
        return [
          (a = s[0]) != null ? a : e.targeting.age_min,
          (i = s[1]) != null ? i : e.targeting.age_max,
        ];
      }
      return [e.targeting.age_min, e.targeting.age_max];
    }
    function p(e) {
      var t = r("AdsValidationConsts").minAge;
      if (
        (e.optimization_goal === r("AdsAPIOptimizationGoals").REPLIES &&
          (e.destination_type === "MESSENGER" ||
            e.destination_type === "WHATSAPP") &&
          (t = r("AdsValidationConsts").minMessagingDestinationAge),
        o("AdsAdvantageAudienceUtils").isAdvantageAudienceEnabledForCampaign(e))
      ) {
        var n = e.targeting.age_min;
        t = Math.max(t, n != null ? n : r("AdsValidationConsts").minAgeDefault);
      }
      return t;
    }
    function _(e, t, n) {
      var o = r("AdsCampaignBulkEditStore").getState().rows;
      e.forEach(function (e) {
        var r,
          a = (r = o.get(e)) == null ? void 0 : r.current;
        a != null && d(a, [e], t, n);
      });
    }
    function f(e) {
      var t = r("AdsCampaignBulkEditStore").getState().rows,
        n = null,
        o = null,
        a = !1,
        i = !0,
        l = r("AdsValidationConsts").minAge;
      return (
        e.forEach(function (e) {
          var r,
            s = (r = t.get(e)) == null ? void 0 : r.current;
          if (s != null) {
            l = Math.max(l, p(s));
            var u = m(s),
              c = u[0],
              d = u[1];
            a ? (c !== n || d !== o) && (i = !1) : ((n = c), (o = d), (a = !0));
          }
        }),
        i || ((n = null), (o = null)),
        u.jsx(r("AdsTargetingAgeEditor.react"), {
          ageMax: o,
          ageMin: n,
          ageMinLimit: l,
          changeAgeMaxAndAgeMin: function (n, o) {
            return _(
              e,
              o != null ? o : r("AdsValidationConsts").minAge,
              n != null ? n : r("AdsValidationConsts").maxAge,
            );
          },
          disabled: e.length === 0,
          isBulkEditPanel: !0,
          isTargetingGuidanceEnabled: !0,
          renderSource: r("AdsTargetingAgeEditorRenderSourceEnum").BulkEdit,
          supportEmptyAge: !0,
        })
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = o("AdsFluxHooks").useAdsSelector(
          r("AdsTargetingAccountControlInfoSelector"),
        ),
        n = o("AdsUEditorHooks").useUEditorCampaignAdsSelector(
          o("adsUEditorDATargetingConsolidationSelectors")
            .adsUEditorShouldDisableDATargetingOldUISelector,
        );
      return u.jsx(
        r("AdsTargetingAgeEditor.react"),
        babelHelpers.extends({}, e, {
          accountControlInfo: t,
          shouldDisableDATargetingOldUI: n,
        }),
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = o("AdsFluxHooks").adsFluxContainer(g, null, {
      containerName: i.id,
    });
    function y(e) {
      var t,
        n = e.adObjectIDs,
        a = e.campaign,
        l = e.extraData,
        c = o("AdsUEditorHooks").useUEditorCampaignAdsSelector(
          r("adsTargetingPGDIsAnyEligibleForUnifiedAppSalesAudienceSelector"),
        ),
        _ = o("AdsUEditorHooks").useUEditorCampaignAdsSelector(
          o("adsUEditorDATargetingConsolidationSelectors")
            .adsUEditorShouldDisableDATargetingOldUISelector,
        ),
        f = o("AdsUEditorHooks").useUEditorCampaignAdsSelector(
          r("adsUEditorCampaignGroupObjectiveSelector"),
        ),
        g = o("AdsFluxHooks").useAdsSelector(
          r("AdsTargetingAccountControlInfoSelector"),
        ),
        y =
          ((t = a.targeting.targeting_automation) == null ||
          (t = t.individual_setting) == null
            ? void 0
            : t.age) === 1,
        C = m(a),
        b = C[0],
        v = C[1],
        S = function (t, r) {
          d(a, n, r, t);
        },
        R = function (t) {
          !o("AdsAdvantageAudienceUtils").isAdvantageAudienceEnabledForCampaign(
            a,
          ) &&
            t != null &&
            r("AdsBulkEditChangeTargetingDataAction").dispatch(
              {
                userAgeUnknown: t,
                columnKey: r("AdsCampaignBulkEditColumnKeys").AGE_SUGGESTION,
                adObjectIDs: n,
              },
              {
                line: "305",
                module:
                  "AdsBulkEditCampaignAdvantageAudienceAgeSuggestionPlugin.js",
                moduleID: i.id,
              },
            );
        },
        L = a.targeting.user_age_unknown,
        E = p(a),
        k = o("AdsYouthAdsYT2GatingUtils").isYouthAdsYT2AdExEnabled()
          ? o("AdsYouthDeliveryStatusUtils").getAgeCutoffForCampaign(
              a.toJS(),
              f,
            )
          : o("AdsYouthAdsUtils").getYouthAdsAgeMinLimit(a.targeting.toJS()),
        I = o(
          "AdsYouthAdsAgeLimitEligibility",
        ).getLegalYouthAgeVersionFromGeoLocations(
          a.targeting.get(r("AdsAPITargetFields").GEO_LOCATIONS),
        ),
        T =
          !o("AdsAdvantageAudienceUtils").isAdvantageAudienceEnabledForCampaign(
            a,
          ) &&
          o("WAMOStatusAdsManagerUtils").shouldShowUnknownAgeForCampaign(a),
        D =
          T &&
          b === r("AdsValidationConsts").minAge &&
          v === r("AdsValidationConsts").maxAge,
        x = r("isPGDCampaignObjetiveEligibleForWaMo")(f),
        $ =
          r("adsTargetingPGDIsIndividualSettingCampaign")(a) || c || T
            ? h
            : r("AdsTargetingAgeEditor.react"),
        P = u.jsx($, {
          ageMax: v,
          ageMin: b,
          ageMinLimit: E,
          campaignObjective: f,
          changeAgeMaxAndAgeMin: S,
          changeUserAgeUnknown: R,
          disabled: !1,
          hideUnknownAge: !T,
          isAgeRangeFieldSelector: y,
          isBulkEditPanel: !0,
          isTargetingGuidanceEnabled: !0,
          renderSource: r("AdsTargetingAgeEditorRenderSourceEnum").BulkEdit,
          shouldDisableDATargetingOldUI: _,
          supportEmptyAge: !1,
          userAgeUnknown: L,
          youthAdsAgeMinLimit: k,
          youthAdsLegalAgeType: I,
        }),
        N =
          (r("adsTargetingPGDIsIndividualSettingCampaign")(a) || c) &&
          !o("AdsAdvantageAudienceUtils").isAdvantageAudienceEnabledForCampaign(
            a,
          );
      N &&
        (P = u.jsx(
          r("AdsTargetingPGDIndividualSettingCheckboxContainerWrapper.react"),
          {
            individualSettingType: "age",
            suffix: T
              ? u.jsx(r("AdsTargetingUnknownAgeEditor.react"), {
                  accountControlInfo: g,
                  changeUserAgeUnknown: R,
                  isAdvantageAudienceSavedAudience: !1,
                  isBulkEditPanel: !0,
                  isPGD: x,
                  shouldDisableUnknownAge: D,
                  userAgeUnknown: L,
                })
              : void 0,
            children: P,
          },
        ));
      var M = o(
          "AdsAdvantageAudienceUtils",
        ).isAdvantageAudienceEnabledForCampaign(a),
        w = y && (!N || b === r("AdsValidationConsts").minAgeDefault),
        A = (w || M) && r("gkx")("13671");
      return u.jsxs("div", {
        className: r("joinClasses")(void 0, l.className),
        children: [
          P,
          A &&
            u.jsx(r("GeoBaseText.react"), {
              color: "placeholder",
              size: "accent",
              children: s._(/*BTDS*/ ""),
            }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = o("AdsFluxHooks").adsFluxContainer(y, null, {
      containerName: i.id,
    });
    function b(e, t, n) {
      return u.jsx(C, { adObjectIDs: e, campaign: t, extraData: n });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    var v = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignAdvantageAudienceAgeSuggestion",
          dialogType: r("AdsBulkEditDialogTypes").AGE_SUGGESTION,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_AGE;
          },
          getTooltip: function (t) {
            return t.hasSAPCampaign === !0
              ? o("AdsBulkEditMenuContent").SAP_DISABLED_AGE_FIELD_TOOLTIP
              : t.isRF === !0
                ? o("AdsBulkEditMenuContent").CAMPAIGN_RF_TOOLTIP
                : t.selectedRegulatedCategory === !0
                  ? o("AdsBulkEditMenuContent")
                      .CAMPAIGN_REGULATED_CATEGORY_TOOLTIP
                  : t.hasCapaCampaign === !0 || t.hasCapaL0Campaign === !0
                    ? o("AdsBulkEditMenuContent")
                        .CAMPAIGN__CAPA_UNAVAILABLE_TOOLTIP_AGE
                    : t.hasVAROnlyClosedBetaCampaign === !0
                      ? o("AdsUEditorAgeGenderValueRulesOnlyConstants")
                          .BULK_EDIT_AGE_SETTINGS_DISABLED_TOOLTIP
                      : null;
          },
          getTestID: function () {
            return "quick_edit_advantage_audience_age_suggestion_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").AGE_SUGGESTION,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            return (
              t.hasSAPCampaign === !0 ||
              t.isRF === !0 ||
              t.selectedRegulatedCategory === !0 ||
              t.hasCapaCampaign === !0 ||
              t.hasCapaL0Campaign === !0 ||
              t.hasVAROnlyClosedBetaCampaign === !0
            );
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").AGE_SUGGESTION },
          getBulkControlConfig: function () {
            return { renderer: f };
          },
          getSchema: function () {
            return { targeting: r("AdsEmptyUniformMixedBulkValueTypes") };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              cellRenderer: b,
              columnKey: r("AdsCampaignBulkEditColumnKeys").AGE_SUGGESTION,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(360),
              fieldsPaths: [
                r("AdsAPICampaignPaths").TARGETING.AGE_MAX,
                r("AdsAPICampaignPaths").TARGETING.AGE_MIN,
              ],
            },
          ],
        },
      ),
      S = v;
    l.default = S;
  },
  226,
);
