__d(
  "AdsBulkEditCampaignCAAPSingaporeUniversalBeneficiaryAndPayerPlugin",
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
    "AdsUEditorCampaignCAAPBeneficiaryAndPayerEditableContainer.react",
    "CometPlaceholder.react",
    "GeoFormInputInlineContext",
    "GeoTableWidth",
    "adsCAAPLogger",
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
          key: "campaignCAAPSingaporeUniversalBeneficiaryAndPayer",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_CAAP_SINGAPORE_UNIVERSAL_BENEFICIARY_AND_PAYER,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_CAAP_SINGAPORE_UNIVERSAL_BENEFICIARY_AND_PAYER,
          },
          isHidden: function (t) {
            var e = t.adsCAAPActiveRegulationRegions;
            return !(
              e != null &&
              e.includes(r("AdsRegionalRegulatedCategory").SINGAPORE_UNIVERSAL)
            );
          },
          getLabel: function () {
            return o("AdsBulkEditMenuContent")
              .CAMPAIGN_CAAP_SINGAPORE_UNIVERSAL_BENEFICIARY_AND_PAYER;
          },
          isDisabled: function () {
            return !1;
          },
          getTestID: function () {
            return "quick_edit_campaign_caap_singapore_universal_beneficiary_and_payer";
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
                      regulations: [
                        {
                          regulatedCategory: r("AdsRegionalRegulatedCategory")
                            .SINGAPORE_UNIVERSAL,
                          isFinServ: !1,
                          isUniversal: !0,
                        },
                      ],
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
                .CAMPAIGN_CAAP_SINGAPORE_UNIVERSAL_BENEFICIARY_AND_PAYER,
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
                .CAMPAIGN_CAAP_SINGAPORE_UNIVERSAL_BENEFICIARY_AND_PAYER,
              cellRenderer: function () {
                var e = r("uuidv4")();
                return (
                  o("adsCAAPLogger").logComplianceSectionImpression({
                    impressionID: e,
                    type: o("adsCAAPLogger").ComplianceSurfaceType.BULK_EDITING,
                  }),
                  s.jsx(r("AdsErrorBoundary.react"), {
                    moduleName: i.id,
                    children: s.jsx(r("GeoFormInputInlineContext").Provider, {
                      value: u,
                      children: s.jsx(r("CometPlaceholder.react"), {
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
                            impressionID: e,
                            regulation: {
                              regulatedCategory: r(
                                "AdsRegionalRegulatedCategory",
                              ).SINGAPORE_UNIVERSAL,
                            },
                          },
                        ),
                      }),
                    }),
                  })
                );
              },
              label: o("AdsBulkEditMenuContent")
                .CAMPAIGN_CAAP_SINGAPORE_UNIVERSAL_BENEFICIARY_AND_PAYER,
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
