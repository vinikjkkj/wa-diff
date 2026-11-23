__d(
  "AdsBulkEditAdgroupTextPlugin",
  [
    "fbt",
    "AdsAdgroupBulkEditColumnKeys",
    "AdsBulkEditAdgroupAdgroupMessagePlugin",
    "AdsBulkEditAdgroupHeadlinePlugin",
    "AdsBulkEditAdgroupLinkDescriptionPlugin",
    "AdsBulkEditAdgroupTextDescriptionCell.react",
    "AdsBulkEditAdgroupTextFieldCell.react",
    "AdsBulkEditDefaultPluginProps",
    "AdsBulkEditDialogTypes",
    "AdsBulkEditMenuItemUtils",
    "AdsNameBulkEditPluginUtils",
    "GeoTableWidth",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = [
        {
          columnKey: r("AdsAdgroupBulkEditColumnKeys").MESSAGE,
          plugin: r("AdsBulkEditAdgroupAdgroupMessagePlugin"),
        },
        {
          columnKey: r("AdsAdgroupBulkEditColumnKeys").HEADLINE,
          plugin: r("AdsBulkEditAdgroupHeadlinePlugin"),
        },
        {
          columnKey: r("AdsAdgroupBulkEditColumnKeys").ADGROUP_LINK_DESCRIPTION,
          plugin: r("AdsBulkEditAdgroupLinkDescriptionPlugin"),
        },
      ],
      d = o("GeoTableWidth").proportional(50, { minWidth: 160 }),
      m = o("GeoTableWidth").proportional(100, { minWidth: 160 }),
      p = s._(/*BTDS*/ "");
    function _(e, t) {
      var n = e.plugin;
      return (
        (n.isHidden == null ? void 0 : n.isHidden(t)) === !0 || n.isDisabled(t)
      );
    }
    function f(e, t) {
      return e.columnKey ===
        r("AdsAdgroupBulkEditColumnKeys").ADGROUP_LINK_DESCRIPTION
        ? u.jsx(r("AdsBulkEditAdgroupTextDescriptionCell.react"), {
            children: t,
          })
        : t;
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t, n) {
      var o,
        a = c.find(function (e) {
          return e.columnKey === n;
        }),
        i =
          a == null || (o = a.plugin.getBulkControlConfig()) == null
            ? void 0
            : o.renderer;
      return a == null || i == null
        ? null
        : u.jsx(r("AdsBulkEditAdgroupTextFieldCell.react"), {
            isBulkControl: !0,
            plugin: a.plugin,
            children: f(a, i(e, t, n)),
          });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return c.flatMap(function (e) {
        var t = e.plugin.columnConfigs.find(function (t) {
          return t.columnKey === e.columnKey;
        });
        return t == null
          ? []
          : [
              babelHelpers.extends({}, t, {
                cellRenderer: function (o, a, i) {
                  return u.jsx(r("AdsBulkEditAdgroupTextFieldCell.react"), {
                    plugin: e.plugin,
                    children: f(e, t.cellRenderer(o, a, i)),
                  });
                },
                width: m,
              }),
            ];
      });
    }
    var y = babelHelpers.extends(
        {
          type: "adgroupBulkEditMenu",
          key: "adgroupText",
          dialogType: r("AdsBulkEditDialogTypes").ADGROUP_TEXT,
        },
        r("AdsBulkEditDefaultPluginProps"),
        {
          getLabel: function () {
            return p;
          },
          getTestID: function () {
            return "quick_edit_adgroup_text_button";
          },
          getTooltip: function (t) {
            if (
              !c.every(function (e) {
                return _(e, t);
              })
            )
              return null;
            for (var e of c) {
              var n =
                e.plugin.getTooltip == null ? void 0 : e.plugin.getTooltip(t);
              if (n != null) return n;
            }
            return null;
          },
          onClick: function (t) {
            o("AdsBulkEditMenuItemUtils").onClickHandler(
              r("AdsBulkEditDialogTypes").ADGROUP_TEXT,
              "ad",
              t.source,
            );
          },
          isDisabled: function (t) {
            return c.every(function (e) {
              return _(e, t);
            });
          },
          pivots: { dialogType: r("AdsBulkEditDialogTypes").ADGROUP_TEXT },
          useLargeRows: !0,
          getBulkControlConfig: function () {
            return { renderer: g };
          },
          columnConfigs: [
            babelHelpers.extends(
              {},
              o(
                "AdsNameBulkEditPluginUtils",
              ).getBulkEditAdgroupNameColumnConfig(),
              { width: d },
            ),
          ].concat(h()),
        },
      ),
      C = y;
    l.default = C;
  },
  226,
);
