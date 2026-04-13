__d(
  "WAWebSMBTable.react",
  [
    "WAWebFlex.react",
    "WAWebSpinner.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
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
      var t = o("react-compiler-runtime").c(46),
        n = e.columns,
        r = e.getItemKey,
        a = e.hasMore,
        i = e.isLoadingMore,
        l = e.items,
        u = e.onLoadMore,
        c = e.onRowClick,
        _ = e.pinnedItems,
        g = e.renderRow,
        y = e.selectedKey,
        C = m(null),
        b;
      t[0] !== a || t[1] !== i || t[2] !== u
        ? ((b = function (t) {
            var e,
              n = t[0],
              r = (e = n.isIntersecting) != null ? e : n.intersectionRatio > 0;
            r && a === !0 && i !== !0 && (u == null || u());
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = u),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S,
        R;
      (t[4] !== v || t[5] !== u
        ? ((S = function () {
            var e = C.current;
            if (!(e == null || u == null)) {
              var t = new IntersectionObserver(v, { rootMargin: "100px" });
              return (
                t.observe(e),
                function () {
                  t.disconnect();
                }
              );
            }
          }),
          (R = [v, u]),
          (t[4] = v),
          (t[5] = u),
          (t[6] = S),
          (t[7] = R))
        : ((S = t[6]), (R = t[7])),
        d(S, R));
      var L;
      t[8] !== n ? ((L = n.map(h)), (t[8] = n), (t[9] = L)) : (L = t[9]);
      var E;
      t[10] !== L
        ? ((E = s.jsx(o("WAWebFlex.react").FlexRow, {
            xstyle: p.headerRow,
            children: L,
          })),
          (t[10] = L),
          (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] !== n ||
      t[13] !== r ||
      t[14] !== l.length ||
      t[15] !== c ||
      t[16] !== _ ||
      t[17] !== g ||
      t[18] !== y
        ? ((k =
            _ != null &&
            _.map(function (e, t) {
              var o;
              return f(
                e,
                t,
                ((o = _ == null ? void 0 : _.length) != null ? o : 0) +
                  l.length,
                n,
                r,
                c,
                g,
                y,
              );
            })),
          (t[12] = n),
          (t[13] = r),
          (t[14] = l.length),
          (t[15] = c),
          (t[16] = _),
          (t[17] = g),
          (t[18] = y),
          (t[19] = k))
        : (k = t[19]);
      var I;
      if (
        t[20] !== n ||
        t[21] !== r ||
        t[22] !== l ||
        t[23] !== c ||
        t[24] !== (_ == null ? void 0 : _.length) ||
        t[25] !== g ||
        t[26] !== y
      ) {
        var T;
        (t[28] !== n ||
        t[29] !== r ||
        t[30] !== l.length ||
        t[31] !== c ||
        t[32] !== (_ == null ? void 0 : _.length) ||
        t[33] !== g ||
        t[34] !== y
          ? ((T = function (t, o) {
              var e,
                a = (e = _ == null ? void 0 : _.length) != null ? e : 0;
              return f(t, o + a, a + l.length, n, r, c, g, y);
            }),
            (t[28] = n),
            (t[29] = r),
            (t[30] = l.length),
            (t[31] = c),
            (t[32] = _ == null ? void 0 : _.length),
            (t[33] = g),
            (t[34] = y),
            (t[35] = T))
          : (T = t[35]),
          (I = l.map(T)),
          (t[20] = n),
          (t[21] = r),
          (t[22] = l),
          (t[23] = c),
          (t[24] = _ == null ? void 0 : _.length),
          (t[25] = g),
          (t[26] = y),
          (t[27] = I));
      } else I = t[27];
      var D;
      t[36] !== i
        ? ((D =
            i === !0 &&
            s.jsx("div", {
              className: "x78zum5 xl56j7k x6s0dn4 x1p57kb1 xvpt6g3 xh8yej3",
              children: s.jsx(o("WAWebSpinner.react").Spinner, { size: 24 }),
            })),
          (t[36] = i),
          (t[37] = D))
        : (D = t[37]);
      var x;
      t[38] !== a
        ? ((x = a === !0 && s.jsx("div", { ref: C, className: "xjm9jq1" })),
          (t[38] = a),
          (t[39] = x))
        : (x = t[39]);
      var $;
      return (
        t[40] !== E || t[41] !== k || t[42] !== I || t[43] !== D || t[44] !== x
          ? (($ = s.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: p.table,
              children: [E, k, I, D, x],
            })),
            (t[40] = E),
            (t[41] = k),
            (t[42] = I),
            (t[43] = D),
            (t[44] = x),
            (t[45] = $))
          : ($ = t[45]),
        $
      );
    }
    function h(e) {
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
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
