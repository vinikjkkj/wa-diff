__d(
  "AdsBulkEditCampaignAgePlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAdvantageAudienceBulkUtils",
    "AdsAdvantageAudienceUtils",
    "AdsBulkEditChangeTargetingDataAction",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsBulkValueUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsFluxHooks",
    "AdsNameBulkEditPluginUtils",
    "AdsTargetingAccountControlInfoSelector",
    "AdsTargetingAgeEditor.react",
    "AdsTargetingAgeEditorRenderSourceEnum",
    "AdsUEditorAgeGenderValueRulesOnlyConstants",
    "AdsUEditorHooks",
    "AdsValidationConsts",
    "AdsYouthAdsAgeLimitEligibility",
    "AdsYouthAdsUtils",
    "AdsYouthAdsYT2GatingUtils",
    "AdsYouthDeliveryStatusUtils",
    "GeoTableWidth",
    "WAMOAdsManagerBulkUtils",
    "WAMOStatusAdsManagerUtils",
    "joinClasses",
    "react",
    "shouldDisableUnknownAgeSelector",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("AdsFluxHooks").useAdsSelector(
          r("AdsTargetingAccountControlInfoSelector"),
        ),
        n = o("AdsUEditorHooks").useUEditorCampaignContext(),
        a = o("AdsFluxHooks").useAdsSelector(
          r("shouldDisableUnknownAgeSelector"),
          n,
          n,
        );
      return u.jsx(
        r("AdsTargetingAgeEditor.react"),
        babelHelpers.extends({}, e, {
          accountControlInfo: t,
          shouldDisableUnknownAge: a,
        }),
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = o("AdsFluxHooks").adsFluxContainer(c, null, {
      containerName: i.id,
    });
    function m(e, t) {
      var n = "targeting",
        a = t == null ? void 0 : t[n],
        l =
          a != null
            ? o("AdsBulkValueUtils").mapBulkValue(a, function (e) {
                return e.age_min;
              })
            : null,
        s = o("AdsBulkValueUtils").getUniformValueOrDefault(l, null),
        c =
          a != null
            ? o("AdsBulkValueUtils").mapBulkValue(a, function (e) {
                return e.user_age_unknown;
              })
            : null,
        m = o("AdsBulkValueUtils").getUniformValueOrDefault(c, null),
        p = o("AdsBulkValueUtils").isMixedValue(c),
        _ =
          !o(
            "AdsAdvantageAudienceBulkUtils",
          ).isAdvantageAudienceEnabledInBulkTargetSpec(t) &&
          o("WAMOAdsManagerBulkUtils").shouldShowUnknownAgeInBulkSpec(t),
        f =
          a != null
            ? o("AdsBulkValueUtils").mapBulkValue(a, function (e) {
                return e.age_max;
              })
            : null,
        g = o("AdsBulkValueUtils").getUniformValueOrDefault(f, null),
        h = function (n, o) {
          return r("AdsBulkEditChangeTargetingDataAction").dispatch(
            {
              ageMax: n,
              ageMin: o,
              columnKey: r("AdsCampaignBulkEditColumnKeys").AGE,
              adObjectIDs: e,
            },
            {
              line: "132",
              module: "AdsBulkEditCampaignAgePlugin.js",
              moduleID: i.id,
            },
          );
        },
        y = function (n) {
          n != null &&
            r("AdsBulkEditChangeTargetingDataAction").dispatch(
              {
                userAgeUnknown: n,
                columnKey: r("AdsCampaignBulkEditColumnKeys").AGE,
                adObjectIDs: e,
              },
              {
                line: "141",
                module: "AdsBulkEditCampaignAgePlugin.js",
                moduleID: i.id,
              },
            );
        },
        C = o("AdsBulkValueUtils").parallelIterator(
          function (e) {
            var t;
            return {
              targeting: e[0].toJS(),
              optimization_goal: e[1],
              placement: (t = e[2]) == null ? void 0 : t.toJS(),
            };
          },
          [
            t == null ? void 0 : t[n],
            t == null ? void 0 : t.optimization_goal,
            t == null ? void 0 : t.placement,
          ],
        ),
        b = o("AdsYouthAdsUtils").getYT2YouthAdsAgeMinLimitFromBulkSpec(C),
        v = o("AdsYouthAdsUtils").getYouthAdsLegalAgeTypeFromBulkSpec(
          t == null ? void 0 : t[n],
        ),
        S = _ ? d : r("AdsTargetingAgeEditor.react");
      return u.jsx("div", {
        className: void 0,
        children: u.jsx(S, {
          ageMax: g,
          ageMin: s,
          ageMinLimit: r("AdsValidationConsts").minAge,
          changeAgeMaxAndAgeMin: h,
          changeUserAgeUnknown: y,
          disabled: !e.length,
          isBulkEditPanel: !0,
          isTargetingGuidanceEnabled: !0,
          isUserAgeUnknownBulkValueMixed: p,
          renderSource: r("AdsTargetingAgeEditorRenderSourceEnum").BulkEdit,
          supportEmptyAge: !0,
          userAgeUnknown: m,
          youthAdsAgeMinLimit: b,
          youthAdsLegalAgeType: v,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t, n) {
      var a = t.targeting.age_max,
        l = t.targeting.age_min,
        s = t.targeting.user_age_unknown,
        c =
          !o("AdsAdvantageAudienceUtils").isAdvantageAudienceEnabledForCampaign(
            t,
          ) &&
          o("WAMOStatusAdsManagerUtils").shouldShowUnknownAgeForCampaign(t),
        m = function (n, o) {
          return r("AdsBulkEditChangeTargetingDataAction").dispatch(
            {
              ageMax: n,
              ageMin: o,
              columnKey: r("AdsCampaignBulkEditColumnKeys").AGE,
              adObjectIDs: e,
            },
            {
              line: "214",
              module: "AdsBulkEditCampaignAgePlugin.js",
              moduleID: i.id,
            },
          );
        },
        p = function (n) {
          n != null &&
            r("AdsBulkEditChangeTargetingDataAction").dispatch(
              {
                userAgeUnknown: n,
                columnKey: r("AdsCampaignBulkEditColumnKeys").AGE,
                adObjectIDs: e,
              },
              {
                line: "223",
                module: "AdsBulkEditCampaignAgePlugin.js",
                moduleID: i.id,
              },
            );
        },
        _ = t.destination_type,
        f = t.optimization_goal,
        g = r("AdsValidationConsts").minAge;
      f === r("AdsAPIOptimizationGoals").REPLIES &&
        (_ === "MESSENGER" || _ === "WHATSAPP") &&
        (g = r("AdsValidationConsts").minMessagingDestinationAge);
      var h = o("AdsYouthAdsYT2GatingUtils").isYouthAdsYT2AdExEnabled()
          ? o("AdsYouthDeliveryStatusUtils").getAgeCutoffForCampaign(t.toJS())
          : o("AdsYouthAdsUtils").getYouthAdsAgeMinLimit(t.targeting.toJS()),
        y = o(
          "AdsYouthAdsAgeLimitEligibility",
        ).getLegalYouthAgeVersionFromGeoLocations(
          t.targeting.get(r("AdsAPITargetFields").GEO_LOCATIONS),
        ),
        C = c ? d : r("AdsTargetingAgeEditor.react");
      return u.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: u.jsx(C, {
          ageMax: a,
          ageMin: l,
          ageMinLimit: g,
          changeAgeMaxAndAgeMin: m,
          changeUserAgeUnknown: p,
          disabled: !1,
          isBulkEditPanel: !0,
          isTargetingGuidanceEnabled: !0,
          renderSource: r("AdsTargetingAgeEditorRenderSourceEnum").BulkEdit,
          supportEmptyAge: !1,
          userAgeUnknown: s,
          youthAdsAgeMinLimit: h,
          youthAdsLegalAgeType: y,
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignAge",
          dialogType: r("AdsBulkEditDialogTypes").AGE,
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
            return "quick_edit_age_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").AGE,
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
          pivots: { dialogType: r("AdsBulkEditDialogTypes").AGE },
          getBulkControlConfig: function () {
            return { renderer: m };
          },
          getSchema: function () {
            return {
              targeting: r("AdsEmptyUniformMixedBulkValueTypes"),
              optimization_goal: r("AdsEmptyUniformMixedBulkValueTypes"),
              placement: r("AdsEmptyUniformMixedBulkValueTypes"),
            };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              cellRenderer: p,
              columnKey: r("AdsCampaignBulkEditColumnKeys").AGE,
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
      f = _;
    l.default = f;
  },
  226,
);
