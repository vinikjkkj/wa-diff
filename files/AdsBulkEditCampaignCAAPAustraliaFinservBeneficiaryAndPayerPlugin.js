__d(
  "AdsBulkEditCampaignCAAPAustraliaFinservBeneficiaryAndPayerPlugin",
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
    "AdsUEditorCampaignCAAPFinservSelfDeclarationCheckboxContainerWithPreload.react",
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
          key: "campaignCAAPAustraliaFinservBeneficiaryAndPayer",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_CAAP_AUSTRALIA_FINSERV_BENEFICIARY_AND_PAYER,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_CAAP_AUSTRALIA_FINSERV_BENEFICIARY_AND_PAYER,
          },
          isHidden: function (t) {
            var e = t.adsCAAPActiveRegulationRegions;
            return !(
              e != null &&
              e.includes(r("AdsRegionalRegulatedCategory").AUSTRALIA_FINSERV)
            );
          },
          getLabel: function () {
            return o("AdsBulkEditMenuContent")
              .CAMPAIGN_CAAP_AUSTRALIA_FINSERV_BENEFICIARY_AND_PAYER;
          },
          isDisabled: function () {
            return !1;
          },
          getTestID: function () {
            return "quick_edit_campaign_caap_australia_finserv_beneficiary_and_payer";
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
                            .AUSTRALIA_FINSERV,
                          isFinServ: !0,
                          isUniversal: !1,
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
                .CAMPAIGN_CAAP_AUSTRALIA_FINSERV_BENEFICIARY_AND_PAYER,
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
                .CAMPAIGN_CAAP_AUSTRALIA_FINSERV_BENEFICIARY_AND_PAYER,
              cellRenderer: function (t, n) {
                var e,
                  a = r("uuidv4")();
                o("adsCAAPLogger").logComplianceSectionImpression({
                  impressionID: a,
                  type: o("adsCAAPLogger").ComplianceSurfaceType.BULK_EDITING,
                });
                var l =
                  (e = n.regional_regulated_categories) == null
                    ? void 0
                    : e.includes(
                        r("AdsRegionalRegulatedCategory").AUSTRALIA_FINSERV,
                      );
                return s.jsx(r("AdsErrorBoundary.react"), {
                  moduleName: i.id,
                  children: s.jsxs(r("GeoFormInputInlineContext").Provider, {
                    value: u,
                    children: [
                      s.jsx(r("CometPlaceholder.react"), {
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
                            isFinservCheckboxShown: !0,
                            isSecuritiesCheckboxAllowed: !1,
                          },
                        ),
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
                            impressionID: "",
                            isSelfDeclarationChecked: l,
                            regulation: {
                              regulatedCategory: r(
                                "AdsRegionalRegulatedCategory",
                              ).AUSTRALIA_FINSERV,
                            },
                          },
                        ),
                      }),
                    ],
                  }),
                });
              },
              label: o("AdsBulkEditMenuContent")
                .CAMPAIGN_CAAP_AUSTRALIA_FINSERV_BENEFICIARY_AND_PAYER,
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
