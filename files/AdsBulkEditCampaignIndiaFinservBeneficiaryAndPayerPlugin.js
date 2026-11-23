__d(
  "AdsBulkEditCampaignIndiaFinservBeneficiaryAndPayerPlugin",
  [
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditFieldsDialogConfig",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCAAPGlimmerComponents.react",
    "AdsCampaignBulkEditColumnKeys",
    "AdsErrorBoundary.react",
    "AdsIndiaFinServBulkEditControlField.react",
    "AdsNameBulkEditPluginUtils",
    "AdsUEditorCampaignCAAPSectionIndiaContainer.react",
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
          key: "campaignIndiaFinservBeneficiaryAndPayer",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_INDIA_FINSERV_ADS_BENEFICIARY_AND_PAYER,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_INDIA_FINSERV_ADS_BENEFICIARY_AND_PAYER,
          },
          isHidden: function (t) {
            var e = t.adsCAAPIsIndiaActiveRegulationRegion;
            return e !== !0;
          },
          getLabel: function () {
            return o("AdsBulkEditMenuContent")
              .CAMPAIGN_INDIA_FINSERV_ADS_BENEFICIARY_AND_PAYER;
          },
          isDisabled: function () {
            return !1;
          },
          getTestID: function () {
            return "quick_edit_campaign_india_finserv_beneficiary_and_payer";
          },
          getBulkControlConfig: function () {
            return {
              renderer: function () {
                return s.jsx(r("AdsErrorBoundary.react"), {
                  moduleName: i.id,
                  children: s.jsx(
                    r("AdsIndiaFinServBulkEditControlField.react"),
                    {},
                  ),
                });
              },
            };
          },
          onClick: function (t) {
            var e = t.source;
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes")
                .CAMPAIGN_INDIA_FINSERV_ADS_BENEFICIARY_AND_PAYER,
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
                .CAMPAIGN_INDIA_FINSERV_ADS_BENEFICIARY_AND_PAYER,
              cellRenderer: function (t, n) {
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
                            .AdsCAAPFinservCheckboxGlimmer,
                          {},
                        ),
                        name: i.id,
                        children: s.jsx(
                          r(
                            "AdsUEditorCampaignCAAPSectionIndiaContainer.react",
                          ),
                          { displaySectionInCard: !1 },
                        ),
                      }),
                    }),
                  })
                );
              },
              label: o("AdsBulkEditMenuContent")
                .CAMPAIGN_INDIA_FINSERV_ADS_BENEFICIARY_AND_PAYER,
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
