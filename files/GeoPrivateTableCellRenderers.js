__d(
  "GeoPrivateTableCellRenderers",
  [
    "GeoFbtUtils",
    "GeoPrivateTableHeaderCell.react",
    "GeoTableContentCell.react",
    "GeoTableContentGlimmer.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["customHeaderRenderer"],
      s,
      u = s || (s = o("react")),
      c = 2,
      d = {
        glimmer: { marginTop: "x1gslohp", marginBottom: "x12nagc", $$css: !0 },
      };
    function m(e) {
      var t = e.customHeaderRenderer,
        n = e.header;
      if (n == null) return n;
      if (
        !o("GeoFbtUtils").isFbt(n) &&
        typeof n != "number" &&
        n.label != null
      ) {
        var a = n;
        return u.jsx(r("GeoPrivateTableHeaderCell.react"), {
          customHeaderRenderer: t,
          "data-testid": void 0,
          maxLines: a.nowrap === !0 ? 1 : c,
          overflowWrap: a.overflowWrap,
          showTooltipInfoIcon: a.showTooltipInfoIcon,
          title: a.label,
          tooltip: a.tooltip,
          trailingContent: a.trailingContent,
        });
      }
      return typeof n == "number"
        ? u.jsx(r("GeoPrivateTableHeaderCell.react"), { title: String(n) })
        : u.jsx(r("GeoPrivateTableHeaderCell.react"), {
            customHeaderRenderer: t,
            maxLines: c,
            title: n,
          });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.cell;
      return function (e) {
        var n = t == null ? void 0 : t(e);
        return typeof n == "number" || o("GeoFbtUtils").isFbt(n)
          ? u.jsx(r("GeoTableContentCell.react"), {
              title: typeof n == "number" ? String(n) : n,
            })
          : n;
      };
    }
    function _(e) {
      var t = e.loadingCell;
      return function (e) {
        var n,
          o = e.isFirstRow,
          a = e.isLastRow,
          i = e.rowIndex;
        return (n =
          t == null
            ? void 0
            : t({ loadingIndex: i, isFirstRow: o, isLastRow: a })) != null
          ? n
          : u.jsx(r("GeoTableContentGlimmer.react"), {
              index: i,
              xstyle: d.glimmer,
            });
      };
    }
    function f(e) {
      var t = e.footer;
      return typeof t == "number"
        ? u.jsx(r("GeoTableContentCell.react"), { title: String(t) })
        : o("GeoFbtUtils").isFbt(t)
          ? u.jsx(r("GeoTableContentCell.react"), { title: t })
          : t;
    }
    function g(t) {
      var n = t.customHeaderRenderer,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return babelHelpers.extends({}, r, {
        header: m(t),
        cell: p(t),
        footer: f(t),
        loadingCell: _(t),
      });
    }
    function h(e) {
      return { processedColumns: e };
    }
    function y(e) {
      return Array.isArray(e) ? e.map(g) : e.processedColumns;
    }
    ((l.mapHeaderCellRenderer = m),
      (l.mapBodyCellRenderer = p),
      (l.mapLoadingCellRenderer = _),
      (l.mapFooterCellRenderer = f),
      (l.mapColumnCellRenderers = g),
      (l.markColumnsAsProcessed = h),
      (l.mapColumnsCellRenderers = y));
  },
  98,
);
