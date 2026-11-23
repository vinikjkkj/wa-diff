__d(
  "AdsBulkEditCampaignAdvantageAudienceMinimumAgePlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
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
    "AdsUEditorHooks",
    "AdsValidationConsts",
    "AdsYouthAdsAgeLimitEligibility",
    "AdsYouthAdsUtils",
    "GeoTableWidth",
    "adsUEditorCampaignGroupObjectiveSelector",
    "adsUEditorDATargetingConsolidationSelectors",
    "immutable",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("AdsFluxHooks").useAdsSelector(
          r("AdsTargetingAccountControlInfoSelector"),
        ),
        n = o("AdsUEditorHooks").useUEditorCampaignAdsSelector(
          o("adsUEditorDATargetingConsolidationSelectors")
            .adsUEditorShouldDisableDATargetingOldUISelector,
        ),
        a = o("AdsUEditorHooks").useUEditorCampaignAdsSelector(
          r("adsUEditorCampaignGroupObjectiveSelector"),
        );
      return u.jsx(
        r("AdsTargetingAgeEditor.react"),
        babelHelpers.extends({}, e, {
          accountControlInfo: t,
          campaignObjective: a,
          isBulkEditPanel: !0,
          shouldDisableDATargetingOldUI: n,
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
                return e.age_max;
              })
            : null,
        m = o("AdsBulkValueUtils").getUniformValueOrDefault(c, null),
        p = o("AdsBulkValueUtils").mapBulkValue(
          t == null ? void 0 : t[n],
          function (e) {
            return e.user_age_unknown;
          },
        ),
        _ = o("AdsBulkValueUtils").getUniformValueOrDefault(p, null),
        f = o("AdsBulkValueUtils").isMixedValue(p),
        g = function (a, l) {
          if (
            (r("AdsBulkEditChangeTargetingDataAction").dispatch(
              {
                ageMax: a,
                ageMin: l,
                columnKey: r("AdsCampaignBulkEditColumnKeys").AGE,
                adObjectIDs: e,
              },
              {
                line: "123",
                module:
                  "AdsBulkEditCampaignAdvantageAudienceMinimumAgePlugin.js",
                moduleID: i.id,
              },
            ),
            o(
              "AdsAdvantageAudienceBulkUtils",
            ).isAdvantageAudienceEnabledInBulkTargetSpec(t))
          ) {
            var n = l != null ? l : r("AdsValidationConsts").minAge,
              s = a != null ? a : r("AdsValidationConsts").maxAge;
            r("AdsBulkEditChangeTargetingDataAction").dispatch(
              {
                ageRange: [n, s],
                columnKey: r("AdsCampaignBulkEditColumnKeys").AGE_SUGGESTION,
                adObjectIDs: e,
              },
              {
                line: "136",
                module:
                  "AdsBulkEditCampaignAdvantageAudienceMinimumAgePlugin.js",
                moduleID: i.id,
              },
            );
          }
        },
        h = function (n) {
          n != null &&
            r("AdsBulkEditChangeTargetingDataAction").dispatch(
              {
                userAgeUnknown: n,
                columnKey: r("AdsCampaignBulkEditColumnKeys").MINIMUM_AGE,
                adObjectIDs: e,
              },
              {
                line: "145",
                module:
                  "AdsBulkEditCampaignAdvantageAudienceMinimumAgePlugin.js",
                moduleID: i.id,
              },
            );
        },
        y = o("AdsYouthAdsUtils").getYouthAdsAgeMinLimitFromBulkSpec(
          t == null
            ? void 0
            : t[n].map(function (e) {
                return e.toJS();
              }),
        ),
        C = o("AdsYouthAdsUtils").getYouthAdsLegalAgeTypeFromBulkSpec(
          t == null ? void 0 : t[n],
        );
      return u.jsx("div", {
        className: void 0,
        children: u.jsx(d, {
          advantageAudienceAgeSectionEnabled: !0,
          ageMax: m,
          ageMin: s,
          ageMinLimit: r("AdsValidationConsts").minMessagingDestinationAge,
          changeAgeMaxAndAgeMin: g,
          changeUserAgeUnknown: h,
          disabled: !e.length,
          isTargetingGuidanceEnabled: !0,
          isUserAgeUnknownBulkValueMixed: f,
          renderSource: r("AdsTargetingAgeEditorRenderSourceEnum").BulkEdit,
          supportEmptyAge: !0,
          userAgeUnknown: _,
          youthAdsAgeMinLimit: y,
          youthAdsLegalAgeType: C,
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e, t, n) {
      var a = t.targeting.age_max,
        l = t.targeting.age_min,
        s = t.targeting.age_range || r("immutable").List(),
        c = (s == null || s.toArray == null ? void 0 : s.toArray()) || s,
        m = t.targeting.user_age_unknown,
        p = function (a, l) {
          (r("AdsBulkEditChangeTargetingDataAction").dispatch(
            {
              ageMax: a,
              ageMin: l,
              columnKey: r("AdsCampaignBulkEditColumnKeys").AGE,
              adObjectIDs: e,
            },
            {
              line: "196",
              module: "AdsBulkEditCampaignAdvantageAudienceMinimumAgePlugin.js",
              moduleID: i.id,
            },
          ),
            o(
              "AdsAdvantageAudienceUtils",
            ).isAdvantageAudienceEnabledForCampaign(t) &&
              l >= (c[0] || l) &&
              r("AdsBulkEditChangeTargetingDataAction").dispatch(
                {
                  ageRange: [l, c[1] || a],
                  columnKey: r("AdsCampaignBulkEditColumnKeys").AGE_SUGGESTION,
                  adObjectIDs: e,
                },
                {
                  line: "208",
                  module:
                    "AdsBulkEditCampaignAdvantageAudienceMinimumAgePlugin.js",
                  moduleID: i.id,
                },
              ));
        },
        _ = function (a) {
          o("AdsAdvantageAudienceUtils").isAdvantageAudienceEnabledForCampaign(
            t,
          ) &&
            a != null &&
            r("AdsBulkEditChangeTargetingDataAction").dispatch(
              {
                userAgeUnknown: a,
                columnKey: r("AdsCampaignBulkEditColumnKeys").MINIMUM_AGE,
                adObjectIDs: e,
              },
              {
                line: "222",
                module:
                  "AdsBulkEditCampaignAdvantageAudienceMinimumAgePlugin.js",
                moduleID: i.id,
              },
            );
        },
        f = o("AdsYouthAdsUtils").getYouthAdsAgeMinLimit(t.targeting.toJS()),
        g = o(
          "AdsYouthAdsAgeLimitEligibility",
        ).getLegalYouthAgeVersionFromGeoLocations(
          t.targeting.get(r("AdsAPITargetFields").GEO_LOCATIONS),
        );
      return u.jsx("div", {
        className: r("joinClasses")(void 0, n.className),
        children: u.jsx(d, {
          advantageAudienceAgeSectionEnabled: !0,
          ageMax: a,
          ageMin: l,
          ageMinLimit: r("AdsValidationConsts").minMessagingDestinationAge,
          changeAgeMaxAndAgeMin: p,
          changeUserAgeUnknown: _,
          disabled: !1,
          isTargetingGuidanceEnabled: !0,
          renderSource: r("AdsTargetingAgeEditorRenderSourceEnum").BulkEdit,
          supportEmptyAge: !1,
          userAgeUnknown: m,
          youthAdsAgeMinLimit: f,
          youthAdsLegalAgeType: g,
        }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignMinimumAge",
          dialogType: r("AdsBulkEditDialogTypes").MINIMUM_AGE,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_MIN_AGE;
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
                    : null;
          },
          getTestID: function () {
            return "quick_edit_minimum_age_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").MINIMUM_AGE,
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
              t.hasCapaL0Campaign === !0
            );
          },
          isHidden: function (t) {
            return !t.shouldRenderAdvantageAudienceCampaignSection;
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").MINIMUM_AGE },
          getBulkControlConfig: function () {
            return { renderer: m };
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
              cellRenderer: p,
              columnKey: r("AdsCampaignBulkEditColumnKeys").MINIMUM_AGE,
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
