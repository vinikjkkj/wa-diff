__d(
  "AdsBulkEditAdgroupPACMediaPlugin",
  [
    "cx",
    "fbt",
    "AdsAdgroupBulkEditColumnKeys",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMediaFieldBulkControlContentContainer.react",
    "AdsBulkEditMediaFieldContentContainer.react",
    "AdsBulkEditMenuContent",
    "AdsBulkEditMenuItemUtils",
    "AdsNameBulkEditPluginUtils",
    "GeoTableWidth",
    "joinClasses",
    "react",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d(e) {
      return c.jsx("div", {
        className: "_9a7j",
        children: c.jsx(
          r("AdsBulkEditMediaFieldBulkControlContentContainer.react"),
          {},
        ),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e, t, n) {
      return c.jsx("div", {
        className: r("joinClasses")("_9a7j", n.className),
        children: c.jsx(r("AdsBulkEditMediaFieldContentContainer.react"), {}),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    var p = babelHelpers.extends(
        {
          type: "adgroupBulkEditMenu",
          key: "adgroupPACMedia",
          dialogType: r("AdsBulkEditDialogTypes").ADGROUP_PAC_MEDIA,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return o("AdsBulkEditMenuContent").ADGROUP_MEDIA;
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").ADGROUP_PAC_MEDIA,
              "ad",
              t.source,
            );
          },
          isDisabled: function (t) {
            return !1;
          },
          isHidden: function (t) {
            var e = t.adgroupExtraVisibility;
            return (e == null ? void 0 : e.shouldEnablePACBulkEditing) !== !0;
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").ADGROUP_PAC_MEDIA },
          getBulkControlConfig: function () {
            return { renderer: d };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditAdgroupNameColumnConfig(),
            ),
            {
              cellRenderer: m,
              columnKey: r("AdsAdgroupBulkEditColumnKeys").ADGROUP_PAC_MEDIA,
              label: u._(/*BTDS*/ ""),
              width: o("GeoTableWidth").pixel(360),
            },
          ],
        },
      ),
      _ = p;
    l.default = _;
  },
  226,
);
