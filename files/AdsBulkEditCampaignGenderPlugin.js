__d(
  "AdsBulkEditCampaignGenderPlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsAdvantageAudienceUtils",
    "AdsBAYouthAdsUtils",
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
    "AdsTargetingConstants",
    "AdsTargetingGenderSelector.react",
    "AdsTargetingPGDIndividualSettingCheckboxContainerWrapper.react",
    "AdsTargetingYouthDisabledOptionPopover.react",
    "AdsUEditorAgeGenderValueRulesOnlyConstants",
    "AdsUEditorHooks",
    "AdsYouthAdsYT2GatingUtils",
    "AdsYouthDeliveryStatusUtils",
    "GeoBaseText.react",
    "GeoTableWidth",
    "adsTargetingPGDIsAnyEligibleForUnifiedAppSalesAudienceSelector",
    "adsTargetingPGDIsIndividualSettingCampaign",
    "adsUEditorDATargetingConsolidationSelectors",
    "gkx",
    "immutable",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e, t) {
      var n = "targeting",
        a = t == null ? void 0 : t[n],
        l =
          a != null
            ? o("AdsBulkValueUtils").mapBulkValue(a, function (e) {
                return e.genders;
              })
            : null,
        s;
      o("AdsBulkValueUtils").isBulkValue(l) &&
        (s = "bulk_edit_targeting_gender_selector_women");
      var c = o("AdsYouthAdsYT2GatingUtils").isYouthAdsYT2AdExEnabled(),
        d = o("AdsBulkValueUtils")
          .mapBulkValue(t == null ? void 0 : t[n], function (e) {
            return c
              ? o("AdsYouthDeliveryStatusUtils").shouldDisableGenderEditor(
                  o("AdsYouthDeliveryStatusUtils").getTargetedAudienceGroups(
                    e.toJS(),
                  ),
                )
              : o("AdsBAYouthAdsUtils").isTargetingYouth(e);
          })
          .getValues()
          .some(Boolean),
        m = !e.length || d,
        p = o("AdsBulkValueUtils").getUniformValueOrDefault(l, null),
        _ = null;
      (p != null && (_ = p.first()),
        (_ === null || m) && (_ = o("AdsTargetingConstants").GENDERS.Empty));
      var f = function (n, o) {
          r("AdsBulkEditChangeTargetingDataAction").dispatch(
            {
              columnKey: r("AdsCampaignBulkEditColumnKeys").GENDER,
              genders: r("immutable").List([o]),
              adObjectIDs: e,
            },
            {
              line: "117",
              module: "AdsBulkEditCampaignGenderPlugin.js",
              moduleID: i.id,
            },
          );
        },
        g = u.jsx("div", {
          className: void 0,
          children: u.jsx(r("AdsTargetingGenderSelector.react"), {
            dataTestIDForWomen: s,
            disabled: m,
            initialGender: _,
            onDataUpdate: f,
            size: "large",
          }),
        });
      return d
        ? u.jsx(r("AdsTargetingYouthDisabledOptionPopover.react"), {
            field: c ? "gender" : void 0,
            children: g,
          })
        : g;
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t,
        n,
        a = e.adObjectIDs,
        l = e.campaign,
        c = e.extraData,
        d = o("AdsUEditorHooks").useUEditorCampaignAdsSelector(
          r("adsTargetingPGDIsAnyEligibleForUnifiedAppSalesAudienceSelector"),
        ),
        m = o("AdsUEditorHooks").useUEditorCampaignAdsSelector(
          o("adsUEditorDATargetingConsolidationSelectors")
            .adsUEditorShouldDisableDATargetingOldUISelector,
        ),
        p = l.targeting.genders,
        _ = p;
      p != null
        ? (_ = p.first())
        : (_ = o("AdsTargetingConstants").GENDERS.All);
      var f = function (t, n) {
          r("AdsBulkEditChangeTargetingDataAction").dispatch(
            {
              columnKey: r("AdsCampaignBulkEditColumnKeys").GENDER,
              genders: r("immutable").List([n]),
              adObjectIDs: a,
            },
            {
              line: "170",
              module: "AdsBulkEditCampaignGenderPlugin.js",
              moduleID: i.id,
            },
          );
        },
        g = l.targeting,
        h = o("AdsYouthAdsYT2GatingUtils").isYouthAdsYT2AdExEnabled(),
        y = h
          ? o("AdsYouthDeliveryStatusUtils").shouldDisableGenderEditor(
              o("AdsYouthDeliveryStatusUtils").getTargetedAudienceGroups(
                g.toJS(),
              ),
            )
          : o("AdsBAYouthAdsUtils").isAgeinBAYouthAdsCutoff(
              g.age_min,
              (t = g.geo_locations) == null ? void 0 : t.toJS(),
            ) && !o("AdsBAYouthAdsUtils").isTargetingGender(g.toJS().genders),
        C = u.jsx(r("AdsTargetingGenderSelector.react"), {
          disabled: y || m,
          initialGender: _,
          onDataUpdate: f,
          size: "large",
        }),
        b =
          (r("adsTargetingPGDIsIndividualSettingCampaign")(l) || d) &&
          !o("AdsAdvantageAudienceUtils").isAdvantageAudienceEnabledForCampaign(
            l,
          );
      if (
        (b &&
          (C = u.jsx(
            r("AdsTargetingPGDIndividualSettingCheckboxContainerWrapper.react"),
            { individualSettingType: "gender", children: C },
          )),
        y)
      )
        return u.jsx("div", {
          className: r("joinClasses")(void 0, c.className),
          children: u.jsx(r("AdsTargetingYouthDisabledOptionPopover.react"), {
            field: h ? "gender" : void 0,
            children: C,
          }),
        });
      var v =
          ((n = l.targeting) == null ||
          (n = n.targeting_automation) == null ||
          (n = n.individual_setting) == null
            ? void 0
            : n.gender) === 1,
        S = o(
          "AdsAdvantageAudienceUtils",
        ).isAdvantageAudienceEnabledForCampaign(l),
        R = v && (!b || _ === o("AdsTargetingConstants").GENDERS.All),
        L = (R || S) && r("gkx")("13671");
      return u.jsxs("div", {
        className: r("joinClasses")(void 0, c.className),
        children: [
          C,
          L &&
            u.jsx(r("GeoBaseText.react"), {
              color: "placeholder",
              size: "accent",
              children: s._(/*BTDS*/ ""),
            }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = o("AdsFluxHooks").adsFluxContainer(d, null, {
      containerName: i.id,
    });
    function p(e, t, n) {
      return u.jsx(m, { adObjectIDs: e, campaign: t, extraData: n });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    var _ = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignGender",
          dialogType: r("AdsBulkEditDialogTypes").GENDER,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_GENDER;
          },
          getTooltip: function (t) {
            return t.hasSAPCampaign === !0
              ? o("AdsBulkEditMenuContent").SAP_DISABLED_GENDER_FIELD_TOOLTIP
              : t.isRF === !0
                ? o("AdsBulkEditMenuContent").CAMPAIGN_RF_TOOLTIP
                : t.selectedRegulatedCategory === !0
                  ? o("AdsBulkEditMenuContent")
                      .CAMPAIGN_REGULATED_CATEGORY_TOOLTIP
                  : t.hasCapaCampaign === !0 || t.hasCapaL0Campaign === !0
                    ? o("AdsBulkEditMenuContent")
                        .CAMPAIGN__CAPA_UNAVAILABLE_TOOLTIP_GENDER
                    : t.hasVAROnlyClosedBetaCampaign === !0
                      ? o("AdsUEditorAgeGenderValueRulesOnlyConstants")
                          .BULK_EDIT_GENDER_SETTINGS_DISABLED_TOOLTIP
                      : null;
          },
          getTestID: function () {
            return "quick_edit_gender_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").GENDER,
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
          pivots: { dialogType: r("AdsBulkEditDialogTypes").GENDER },
          getBulkControlConfig: function () {
            return { renderer: c };
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
              columnKey: r("AdsCampaignBulkEditColumnKeys").GENDER,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(360),
              fieldsPaths: [r("AdsAPICampaignPaths").TARGETING.GENDERS],
            },
          ],
        },
      ),
      f = _;
    l.default = f;
  },
  226,
);
