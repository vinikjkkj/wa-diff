__d(
  "AdsBulkEditCampaignPlacementPlugin",
  [
    "fbt",
    "AdsAPICampaignPaths",
    "AdsBulkEditCampaignPlacementPluginColumnQuery.graphql",
    "AdsBulkEditCampaignPlacementPlugin_Query.graphql",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsCampaignBulkEditColumnKeys",
    "AdsEmptyUniformMixedBulkValueTypes",
    "AdsErrorBoundary.react",
    "AdsNameBulkEditPluginUtils",
    "AdsPlacementBulkEditColumnContainer.react",
    "AdsPlacementBulkEditContainer.react",
    "AdsUEditorHooks",
    "CometPlaceholder.react",
    "GeoTableWidth",
    "RelayHooks",
    "firstx",
    "joinClasses",
    "react",
    "useAdsUEditorSelectedCampaignRelayIDs",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react"));
    function m() {
      var t = o("AdsUEditorHooks").useUEditorCampaignContext(),
        a = r("useAdsUEditorSelectedCampaignRelayIDs")(t),
        i = o("RelayHooks").useClientQuery(
          e !== void 0
            ? e
            : (e = n("AdsBulkEditCampaignPlacementPlugin_Query.graphql")),
          { campaignRelayIDs: a },
        );
      return d.jsx(r("AdsPlacementBulkEditContainer.react"), {
        fragmentKey: i.selected_ad_account,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = function (t, n) {
      return d.jsx("div", {
        className: void 0,
        children: d.jsx(r("AdsErrorBoundary.react"), {
          moduleName: i.id,
          children: d.jsx(r("CometPlaceholder.react"), {
            fallback: null,
            name: i.id,
            children: d.jsx(m, {}),
          }),
        }),
      });
    };
    function _(e) {
      var t = e.adObjectIDs,
        a = e.className,
        i = o("AdsUEditorHooks").useUEditorCampaignContext(),
        l = r("useAdsUEditorSelectedCampaignRelayIDs")(i),
        s = o("RelayHooks").useClientQuery(
          u !== void 0
            ? u
            : (u = n("AdsBulkEditCampaignPlacementPluginColumnQuery.graphql")),
          { campaignRelayIDs: l },
        ),
        c = s.selected_ad_account.combined_campaigns.filter(Boolean);
      return d.jsx("div", {
        className: r("joinClasses")(void 0, a),
        children: d.jsx(r("AdsPlacementBulkEditColumnContainer.react"), {
          campaignID: r("firstx")(t),
          fragmentKey: c,
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.adObjectIDs,
        n = e.className;
      return d.jsx(r("AdsErrorBoundary.react"), {
        moduleName: i.id,
        children: d.jsx(r("CometPlaceholder.react"), {
          fallback: null,
          name: i.id,
          children: d.jsx(_, { adObjectIDs: t, className: n }),
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    var g = function (t, n, r) {
        return d.jsx(f, { adObjectIDs: t, className: r.className });
      },
      h = babelHelpers.extends(
        {
          type: "campaignBulkEditMenu",
          key: "campaignPlacement",
          dialogType: r("AdsBulkEditDialogTypes").PLACEMENT,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").CAMPAIGN_PLACEMENT;
          },
          getTestID: function () {
            return "quick_edit_placement_button";
          },
          getTooltip: function (t) {
            var e;
            if (t.isRF === !0)
              return o("AdsBulkEditMenuContent").CAMPAIGN_RF_TOOLTIP;
            if (
              ((e = t.isAutomatedCampaign) == null ? void 0 : e.isAutomated) ===
              !0
            ) {
              var n;
              return (n = t.isAutomatedCampaign) == null
                ? void 0
                : n.automatedCampaignMessage;
            }
            return t.isAutoPlacementEnabledOrInAutomationUnificationExp
              ? o("AdsBulkEditMenuContent").CAMPAIGN_PLACEMENT_AUTO_TOOLTIP
              : null;
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").PLACEMENT,
              "ad_set",
              t.source,
            );
          },
          isDisabled: function (t) {
            var e;
            return (
              t.isRF === !0 ||
              ((e = t.isAutomatedCampaign) == null ? void 0 : e.isAutomated) ===
                !0 ||
              !!t.isAutoPlacementEnabledOrInAutomationUnificationExp
            );
          },
          isHidden: function (t) {
            return !1;
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").PLACEMENT },
          getBulkControlConfig: function () {
            return { renderer: p };
          },
          getSchema: function () {
            return {
              targeting: { placement: r("AdsEmptyUniformMixedBulkValueTypes") },
            };
          },
          getSummarySection: function () {
            var e = d.jsx("div", {
              className: "x14vqqas xod5an3",
              children: s._(/*BTDS*/ ""),
            });
            return { position: "top", node: e };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditCampaignNameColumnConfig(),
            ),
            {
              cellRenderer: g,
              columnKey: r("AdsCampaignBulkEditColumnKeys").PLACEMENT,
              label: s._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(420),
              fieldsPaths: [
                r("AdsAPICampaignPaths").TARGETING.PUBLISHER_PLATFORMS,
                r("AdsAPICampaignPaths").TARGETING.AUDIENCE_NETWORK_POSITIONS,
                r("AdsAPICampaignPaths").TARGETING.FACEBOOK_POSITIONS,
                r("AdsAPICampaignPaths").TARGETING.INSTAGRAM_POSITIONS,
                r("AdsAPICampaignPaths").TARGETING.MESSENGER_POSITIONS,
              ],
            },
          ],
        },
      ),
      y = h;
    l.default = y;
  },
  226,
);
