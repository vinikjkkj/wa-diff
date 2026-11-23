__d(
  "AdsBulkEditCampaignUniversalBeneficiaryAndPayerPlugin",
  [
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditFieldsDialogConfig",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCAAPBulkEditControlField.react",
    "AdsCAAPGlimmerComponents.react",
    "AdsCampaignBulkEditColumnKeys",
    "AdsErrorBoundary.react",
    "AdsNameBulkEditPluginUtils",
    "AdsRegionalRegulatedCategory",
    "AdsSAVEUtils",
    "AdsUEditorCampaignCAAPBeneficiaryAndPayerEditableContainer.react",
    "AdsUEditorCampaignCAAPFinservSelfDeclarationCheckboxContainerWithPreload.react",
    "CometPlaceholder.react",
    "GeoFormInputInlineContext",
    "GeoTableWidth",
    "adsCAAPLocationUtils",
    "adsCAAPLogger",
    "justknobx",
    "react",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { isInline: !1 },
      c = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignUniversalBeneficiaryAndPayer",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_UNIVERSAL_BENEFICIARY_AND_PAYER,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_UNIVERSAL_BENEFICIARY_AND_PAYER,
          },
          isHidden: function (t) {
            var e = t.adsCAAPActiveRegulationRegions;
            return o("adsCAAPLocationUtils").hasOnlyLegacyRegulations(e);
          },
          getLabel: function () {
            return o("AdsBulkEditMenuContent")
              .CAMPAIGN_UNIVERSAL_BENEFICIARY_AND_PAYER;
          },
          isDisabled: function () {
            return !1;
          },
          getTestID: function () {
            return "quick_edit_campaign_universal_beneficiary_and_payer";
          },
          getBulkControlConfig: function () {
            return {
              renderer: function (t) {
                return s.jsx(r("AdsErrorBoundary.react"), {
                  moduleName: i.id,
                  children: s.jsx(r("CometPlaceholder.react"), {
                    fallback: null,
                    name: i.id,
                    children: s.jsx(r("AdsCAAPBulkEditControlField.react"), {
                      campaignIDs: t,
                      isSecuritiesCheckboxAllowed: r("justknobx")._("5950"),
                      regulations: [o("AdsSAVEUtils").SAVE_REGULATION_OBJECT],
                    }),
                  }),
                });
              },
            };
          },
          onClick: function (t) {
            var e = t.source;
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes")
                .CAMPAIGN_UNIVERSAL_BENEFICIARY_AND_PAYER,
              "ad_set",
              e,
            );
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .CAMPAIGN_UNIVERSAL_BENEFICIARY_AND_PAYER,
              cellRenderer: function (t, n) {
                var e = n.regional_regulated_categories,
                  a = r("uuidv4")();
                o("adsCAAPLogger").logComplianceSectionImpression({
                  impressionID: a,
                  type: o("adsCAAPLogger").ComplianceSurfaceType.BULK_EDITING,
                  regulations: e,
                });
                var l =
                  e &&
                  e.length === 1 &&
                  e[0] ===
                    r("AdsRegionalRegulatedCategory").VOLUNTARY_VERIFICATION;
                return s.jsx(r("AdsErrorBoundary.react"), {
                  moduleName: i.id,
                  children: s.jsxs(r("GeoFormInputInlineContext").Provider, {
                    value: u,
                    children: [
                      r("justknobx")._("5950") &&
                        s.jsx(r("AdsErrorBoundary.react"), {
                          moduleName: i.id,
                          children: s.jsx(r("CometPlaceholder.react"), {
                            fallback: s.jsx(
                              o("AdsCAAPGlimmerComponents.react")
                                .AdsCAAPFinservCheckboxGlimmer,
                              {},
                            ),
                            name: i.id,
                            children: s.jsx(
                              r(
                                "AdsUEditorCampaignCAAPFinservSelfDeclarationCheckboxContainerWithPreload.react",
                              ),
                              {
                                impressionID: a,
                                isFinservCheckboxShown: !1,
                                isSecuritiesCheckboxAllowed: !0,
                              },
                            ),
                          }),
                        }),
                      s.jsx(r("CometPlaceholder.react"), {
                        fallback: s.jsx(
                          o("AdsCAAPGlimmerComponents.react")
                            .AdsCAAPBPFieldGlimmer,
                          {},
                        ),
                        name: i.id,
                        children: s.jsx(
                          r(
                            "AdsUEditorCampaignCAAPBeneficiaryAndPayerEditableContainer.react",
                          ),
                          {
                            impressionID: a,
                            regulation:
                              o("AdsSAVEUtils").SAVE_REGULATION_OBJECT,
                            saveLaunchStatus: l ? "PREP" : null,
                          },
                        ),
                      }),
                    ],
                  }),
                });
              },
              label: o("AdsBulkEditMenuContent")
                .CAMPAIGN_UNIVERSAL_BENEFICIARY_AND_PAYER,
              width: o("GeoTableWidth").proportional(
                o("AdsBulkEditFieldsDialogConfig").GEO_DATA_TABLE.CELL_WIDTH,
              ),
            },
          ],
        },
      ),
      d = c;
    l.default = d;
  },
  98,
);
