__d(
  "AdsBulkEditAdgroupAgenticCheckoutOptInPlugin",
  [
    "cx",
    "AdsAdObjectRelayIDUtils",
    "AdsAdgroupBulkEditColumnKeys",
    "AdsBulkEditAdgroupAgenticCheckoutOptInPlugin_Query.graphql",
    "AdsBulkEditAgenticCheckoutOptInFieldContentContainer.react",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditFieldsDialogConfig",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsErrorBoundary.react",
    "AdsNameBulkEditPluginUtils",
    "AdsUEditorHooks",
    "AdsUEditorHostIDs",
    "CometPlaceholder.react",
    "GeoTableWidth",
    "RelayEverywhereUEditorRegistry",
    "RelayHooks",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var a,
        i,
        l = t.adgroupIDs,
        s = t.isBulkControl,
        u = s === void 0 ? !1 : s,
        d = o("AdsUEditorHooks").useUEditorAdgroupContext(),
        m = o("AdsAdObjectRelayIDUtils").encodeAdObjectRelayIDArray(
          l,
          r("AdsUEditorHostIDs").BULK_EDIT_DIALOG,
          o("AdsAdObjectRelayIDUtils").AdsUEditorAdObjectLevels.ADGROUP,
        ),
        p = o("RelayHooks").useClientQuery(
          e !== void 0
            ? e
            : (e = n(
                "AdsBulkEditAdgroupAgenticCheckoutOptInPlugin_Query.graphql",
              )),
          {
            adgroupContextKey: o(
              "RelayEverywhereUEditorRegistry",
            ).Adgroup.getKey(d),
            adgroupRelayIDs: m,
          },
        );
      return c.jsx(
        r("AdsBulkEditAgenticCheckoutOptInFieldContentContainer.react"),
        {
          adgroupIDs: l,
          fragmentKey: p.selected_ad_account.combined_adgroups,
          identityCatalogID:
            (a = p.selected_ad_account.shops_ads_identity_product_catalog) ==
            null
              ? void 0
              : a.id,
          isBulkControl: u,
          isIdentityCatalogAgenticCheckoutEnabled:
            (i = p.selected_ad_account.shops_ads_identity_product_catalog) ==
            null
              ? void 0
              : i.is_agentic_checkout_enabled,
        },
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.adgroupIDs,
        n = e.isBulkControl,
        o = n === void 0 ? !1 : n;
      return c.jsx(r("AdsErrorBoundary.react"), {
        moduleName: i.id,
        children: c.jsx(r("CometPlaceholder.react"), {
          fallback: null,
          name: i.id,
          children: c.jsx(d, { adgroupIDs: t, isBulkControl: o }),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return c.jsx("div", {
        className: "_9a7j",
        children: c.jsx(m, { adgroupIDs: e, isBulkControl: !0 }),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t, n) {
      return c.jsx("div", {
        className: r("joinClasses")("_9a7j", n.className),
        children: c.jsx(m, { adgroupIDs: e }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = babelHelpers.extends(
        {
          type: "adgroupBulkEditMenu",
          key: "adgroupAgenticCheckoutOptIn",
          dialogType: r("AdsBulkEditDialogTypes")
            .ADGROUP_AGENTIC_CHECKOUT_OPT_IN,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").ADGROUP_AGENTIC_CHECKOUT_OPT_IN;
          },
          getTestID: function () {
            return "quick_edit_adgroup_agentic_checkout_opt_in_button";
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").ADGROUP_AGENTIC_CHECKOUT_OPT_IN,
              "ad",
              t.source,
            );
          },
          isHidden: function (t) {
            var e = t.adgroupExtraVisibility;
            return (
              (e == null ? void 0 : e.shouldShowAgenticCheckoutOptIn) !== !0
            );
          },
          isColumnHidden: function (t) {
            var e = t.shouldDisable;
            return e;
          },
          pivots: {
            dialogType: r("AdsBulkEditDialogTypes")
              .ADGROUP_AGENTIC_CHECKOUT_OPT_IN,
          },
          getBulkControlConfig: function () {
            return { renderer: p };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditAdgroupNameColumnConfig(),
            ),
            {
              cellRenderer: _,
              columnKey: r("AdsAdgroupBulkEditColumnKeys")
                .ADGROUP_AGENTIC_CHECKOUT_OPT_IN,
              label: o("AdsBulkEditMenuContent")
                .ADGROUP_AGENTIC_CHECKOUT_OPT_IN,
              width: o("GeoTableWidth").proportional(
                o("AdsBulkEditFieldsDialogConfig").GEO_DATA_TABLE.CELL_WIDTH,
                { minWidth: 200 },
              ),
            },
          ],
        },
      ),
      g = f;
    l.default = g;
  },
  98,
);
