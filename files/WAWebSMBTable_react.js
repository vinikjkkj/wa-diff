__d(
  "WAWebSMBTable.react",
  ["WAWebFlex.react", "WAWebSpinner.react", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = {
        table: { width: "xh8yej3", $$css: !0 },
        headerRow: {
          width: "xh8yej3",
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "xvtqlqk",
          position: "x7wzq59",
          top: "x13vifvy",
          backgroundColor: "x1c7u0tx",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        headerCells: { paddingTop: "x1p57kb1", height: "xn3w4p2", $$css: !0 },
        headerCellsHoverable: {
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          ":hover_backgroundColor": "x1n67ipk",
          $$css: !0,
        },
        cell: {
          boxSizing: "x9f619",
          paddingInlineStart: "x1phvje8",
          paddingInlineEnd: "xcldk2z",
          paddingLeft: null,
          paddingRight: null,
          minWidth: "xeuugli",
          width: "xh8yej3",
          $$css: !0,
        },
        rowBase: {
          alignItems: "x6s0dn4",
          boxSizing: "x9f619",
          flexShrink: "x2lah0s",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "xvtqlqk",
          width: "xh8yej3",
          $$css: !0,
        },
        nonClickableRow: {
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          $$css: !0,
        },
        rowContent: { width: "xh8yej3", $$css: !0 },
      };
    function _(e) {
      var t,
        n,
        r = {};
      return (
        e.type === "pixel"
          ? ((r.width = e.px + "px"), (r.flexShrink = 0))
          : e.type === "proportional"
            ? (r.flex = e.value + " 0 0%")
            : e.type === "fill" && (r.flex = "1 1 0%"),
        ((t = e.options) == null ? void 0 : t.minWidth) != null &&
          (r.minWidth = e.options.minWidth),
        ((n = e.options) == null ? void 0 : n.maxWidth) != null &&
          (r.maxWidth = e.options.maxWidth),
        r
      );
    }
    function f(e, t, n, r, a, i, l, u) {
      var c = {
          isFirstRow: t === 0,
          isLastRow: t === n - 1,
          item: e,
          rowIndex: t,
        },
        d = s.jsx(s.Fragment, {
          children: r.map(function (e) {
            return s.jsx(
              o("WAWebFlex.react").FlexColumn,
              {
                xstyle: p.cell,
                style: _(e.width),
                children: e.cell != null ? e.cell(c) : null,
              },
              e.key,
            );
          }),
        });
      if (l != null)
        return s.jsx(
          o("WAWebFlex.react").FlexRow,
          { children: l(e, d, t) },
          a(e, t),
        );
      if (i != null) {
        var m = a(e, t),
          f = u != null && m === u;
        return s.jsx(
          o("WAWebFlex.react").FlexRow,
          {
            xstyle: p.rowBase,
            children: s.jsx("div", {
              role: "button",
              tabIndex: 0,
              className: {
                0: "x1ypdohk x1xrf6ya xscbp6u x78zum5 xh8yej3 xyi3aci xwf5gio x1p453bz x1suzm8a x1n67ipk",
                1: "x1ypdohk x1xrf6ya xscbp6u x78zum5 xh8yej3 xyi3aci xwf5gio x1p453bz x1suzm8a x1n67ipk x1h3rtpe",
              }[!!f << 0],
              onClick: function () {
                return i(e, t);
              },
              onKeyDown: function (r) {
                (r.key === "Enter" || r.key === " ") &&
                  (r.preventDefault(), i(e, t));
              },
              children: s.jsx(o("WAWebFlex.react").FlexRow, {
                align: "center",
                xstyle: p.rowContent,
                children: d,
              }),
            }),
          },
          m,
        );
      }
      return s.jsx(
        o("WAWebFlex.react").FlexRow,
        { xstyle: [p.rowBase, p.nonClickableRow], children: d },
        a(e, t),
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.columns,
        n = e.getItemKey,
        a = e.hasMore,
        i = e.isLoadingMore,
        l = e.items,
        u = e.onLoadMore,
        g = e.onRowClick,
        h = e.pinnedItems,
        y = e.renderRow,
        C = e.selectedKey,
        b = m(null),
        v = c(
          function (e) {
            var t,
              n = e[0],
              r = (t = n.isIntersecting) != null ? t : n.intersectionRatio > 0;
            r && a === !0 && i !== !0 && (u == null || u());
          },
          [a, i, u],
        );
      return (
        d(
          function () {
            var e = b.current;
            if (!(e == null || u == null)) {
              var t = new IntersectionObserver(v, { rootMargin: "100px" });
              return (
                t.observe(e),
                function () {
                  t.disconnect();
                }
              );
            }
          },
          [v, u],
        ),
        s.jsxs(o("WAWebFlex.react").FlexColumn, {
          xstyle: p.table,
          children: [
            s.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: p.headerRow,
              children: t.map(function (e) {
                return s.jsx(
                  o("WAWebFlex.react").FlexColumn,
                  {
                    xstyle: [
                      p.cell,
                      p.headerCells,
                      e.header != null && p.headerCellsHoverable,
                    ],
                    style: _(e.width),
                    children:
                      e.renderHeader != null
                        ? e.renderHeader()
                        : e.header != null
                          ? s.jsx("div", {
                              className: "x193iq5w",
                              children: s.jsx(r("WDSText.react"), {
                                maxLines: 1,
                                type: "Body2Emphasized",
                                colorName: "contentDeemphasized",
                                children: e.header,
                              }),
                            })
                          : null,
                  },
                  e.key,
                );
              }),
            }),
            h != null &&
              h.map(function (e, r) {
                var o;
                return f(
                  e,
                  r,
                  ((o = h == null ? void 0 : h.length) != null ? o : 0) +
                    l.length,
                  t,
                  n,
                  g,
                  y,
                  C,
                );
              }),
            l.map(function (e, r) {
              var o,
                a = (o = h == null ? void 0 : h.length) != null ? o : 0;
              return f(e, r + a, a + l.length, t, n, g, y, C);
            }),
            i === !0 &&
              s.jsx("div", {
                className: "x78zum5 xl56j7k x6s0dn4 x1p57kb1 xvpt6g3 xh8yej3",
                children: s.jsx(o("WAWebSpinner.react").Spinner, { size: 24 }),
              }),
            a === !0 && s.jsx("div", { ref: b, className: "xjm9jq1" }),
          ],
        })
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
