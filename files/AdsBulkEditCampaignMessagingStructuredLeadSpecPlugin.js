__d(
  "AdsBulkEditCampaignMessagingStructuredLeadSpecPlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsNameBulkEditPluginUtils",
    "CTXLeadDefinitionL2BulkEditContainer.react",
    "CTXStructuredLeadsGating",
    "GeoTableWidth",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = 400;
    function d(e, t) {
      return e.length === 0
        ? null
        : u.jsx(r("CTXLeadDefinitionL2BulkEditContainer.react"), {
            campaignIDs: e,
          });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      var o,
        a = (o = n == null ? void 0 : n.newCampaignStatus) != null ? o : !0;
      return a !== !0
        ? u.jsx(u.Fragment, {})
        : u.jsx(r("CTXLeadDefinitionL2BulkEditContainer.react"), {
            campaignIDs: e,
          });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignMessagingStructuredLeadSpec",
          dialogType: r("AdsBulkEditDialogTypes")
            .CAMPAIGN_MESSAGING_STRUCTURED_LEAD_SPEC,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return s._(/*BTDS*/ "");
          },
          getTestID: function () {
            return "quick_edit_messaging_structured_lead_spec_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes")
                .CAMPAIGN_MESSAGING_STRUCTURED_LEAD_SPEC,
              "ad_set",
              t.source,
            );
          },
          isHidden: function (t) {
            return !o("CTXStructuredLeadsGating").isCTXStructuredLeadsEnabled(
              t.isStructuredLeadsEligible,
              { logExposure: !1 },
            );
          },
          isDisabled: function (t) {
            return t.allCampaignsAreNew !== !0;
          },
          getTooltip: function (t) {
            return t.allCampaignsAreNew !== !0 ? s._(/*BTDS*/ "") : null;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .CAMPAIGN_MESSAGING_STRUCTURED_LEAD_SPEC,
          },
          getSchema: function () {
            return {
              messaging_structured_lead_spec: r(
                "AdsEmptyUniformMixedBulkValueTypes",
              ),
            };
          },
          getBulkControlConfig: function () {
            return { renderer: d };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              cellRenderer: m,
              columnKey: r("AdsCampaignBulkEditColumnKeys")
                .CAMPAIGN_MESSAGING_STRUCTURED_LEAD_SPEC,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(c),
              fieldsPaths: [
                r("AdsAPICampaignPaths").MESSAGING_STRUCTURED_LEAD_SPEC,
              ],
            },
          ],
        },
      ),
      _ = p;
    l.default = _;
  },
  226,
);
