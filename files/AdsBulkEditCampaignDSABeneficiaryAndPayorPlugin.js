__d(
  "AdsBulkEditCampaignDSABeneficiaryAndPayorPlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditFieldsDialogConfig",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsNameBulkEditPluginUtils",
    "AdsUEditorCampaignDigitalServicesActBeneficiaryAndPayorContainer.react",
    "GeoTableWidth",
    "isFalsey",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "DSABeneficiaryAndPayor",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_DSA_BENEFICIARY_AND_PAYOR,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_DSA_BENEFICIARY_AND_PAYOR,
          },
          getLabel: function () {
            return o("AdsBulkEditMenuContent")
              .CAMPAIGN_DSA_BENEFICIARY_AND_PAYOR;
          },
          getTestID: function () {
            return "quick_edit_campaign_dsa_beneficiary_and_payor";
          },
          getTooltip: function (t) {
            return null;
          },
          onClick: function (t) {
            var e = t.source;
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").CAMPAIGN_DSA_BENEFICIARY_AND_PAYOR,
              "ad_set",
              e,
            );
          },
          isDisabled: function (t) {
            return !1;
          },
          getBulkControlConfig: function () {
            return {
              renderer: function (t, n) {
                return u.jsx("div", {
                  children: u.jsx(
                    r(
                      "AdsUEditorCampaignDigitalServicesActBeneficiaryAndPayorContainer.react",
                    ),
                    {},
                  ),
                });
              },
            };
          },
          isHidden: function (t) {
            var e = t.isDSARequired;
            return r("isFalsey")(e);
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
                .CAMPAIGN_DSA_BENEFICIARY_AND_PAYOR,
              cellRenderer: function () {
                return u.jsx("div", {
                  children: u.jsx(
                    r(
                      "AdsUEditorCampaignDigitalServicesActBeneficiaryAndPayorContainer.react",
                    ),
                    {},
                  ),
                });
              },
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").proportional(
                o("AdsBulkEditFieldsDialogConfig").GEO_DATA_TABLE.CELL_WIDTH,
              ),
              fieldsPaths: [
                r("AdsAPICampaignPaths").DSA_BENEFICIARY,
                r("AdsAPICampaignPaths").DSA_PAYOR,
              ],
            },
          ],
        },
      ),
      d = c;
    l.default = d;
  },
  226,
);
