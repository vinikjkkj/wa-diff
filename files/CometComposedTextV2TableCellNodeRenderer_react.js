__d(
  "CometComposedTextV2TableCellNodeRenderer.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = e || (e = r("react")),
      c = { verticalAlign: "x78p4oq", $$css: !0 },
      d = {
        base: {
          borderTopColor: "xcjokc5",
          borderInlineEndColor: "x68rvky",
          borderBottomColor: "x1p222ug",
          borderInlineStartColor: "x14h0grb",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          paddingBottom: "x1ameusm",
          paddingInlineEnd: "xxs2qlo",
          paddingInlineStart: "x3cpdvt",
          paddingTop: "x6m38un",
          textAlign: "x1yc453h",
          $$css: !0,
        },
        dynamic: function (t, n) {
          return [
            c,
            {
              width:
                (n != null ? n + "px" : null) != null
                  ? "x5lhr3w"
                  : n != null
                    ? n + "px"
                    : null,
              $$css: !0,
            },
            {
              "--x-verticalAlign": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t != null ? t : "middle"),
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(n != null ? n + "px" : null),
            },
          ];
        },
        dynamicBackgroundColor: function (t) {
          return [
            { backgroundColor: t != null ? "xl8spv7" : t, $$css: !0 },
            { "--x-backgroundColor": t != null ? t : void 0 },
          ];
        },
        header: {
          backgroundColor: "x1whljyo",
          paddingBottom: "x7z7y0d",
          paddingInlineEnd: "xltfhaz",
          paddingInlineStart: "x165j36c",
          paddingTop: "xoonb6o",
          $$css: !0,
        },
        inFirstColumn: { borderInlineStartWidth: "x14e42zd", $$css: !0 },
        inFirstRow: { borderTopWidth: "x972fbf", $$css: !0 },
        inLastColumn: { borderInlineEndWidth: "x10w94by", $$css: !0 },
        inLastRow: { borderBottomWidth: "x1qhh985", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        a = e.node,
        i,
        l,
        c,
        m;
      if (t[0] !== n || t[1] !== a) {
        m = Symbol.for("react.early_return_sentinel");
        e: {
          var p,
            _,
            f = a.getState(),
            g =
              f.headerState === "ROW" ||
              f.headerState === "COLUMN" ||
              f.headerState === "BOTH",
            h = f.position,
            y = (h == null ? void 0 : h.isInFirstRow) === !0,
            C = (h == null ? void 0 : h.isInLastRow) === !0,
            b = (h == null ? void 0 : h.isInFirstColumn) === !0,
            v = (h == null ? void 0 : h.isInLastColumn) === !0;
          if (g) {
            var S, R;
            m = u.jsx(
              "th",
              babelHelpers.extends(
                {
                  colSpan: (S = f.colSpan) != null ? S : void 0,
                  rowSpan: (R = f.rowSpan) != null ? R : void 0,
                },
                (s || (s = r("stylex"))).props(
                  d.base,
                  d.dynamic(f.verticalAlign, f.width),
                  d.header,
                  f.backgroundColor != null &&
                    d.dynamicBackgroundColor(f.backgroundColor),
                  y && d.inFirstRow,
                  C && d.inLastRow,
                  b && d.inFirstColumn,
                  v && d.inLastColumn,
                ),
                { children: n },
              ),
            );
            break e;
          }
          ((i = (p = f.colSpan) != null ? p : void 0),
            (l = (_ = f.rowSpan) != null ? _ : void 0),
            (c = (s || (s = r("stylex"))).props(
              d.base,
              d.dynamic(f.verticalAlign, f.width),
              y && d.inFirstRow,
              C && d.inLastRow,
              b && d.inFirstColumn,
              v && d.inLastColumn,
            )));
        }
        ((t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = c),
          (t[5] = m));
      } else ((i = t[2]), (l = t[3]), (c = t[4]), (m = t[5]));
      if (m !== Symbol.for("react.early_return_sentinel")) return m;
      var L;
      return (
        t[6] !== n || t[7] !== i || t[8] !== l || t[9] !== c
          ? ((L = u.jsx(
              "td",
              babelHelpers.extends({ colSpan: i, rowSpan: l }, c, {
                children: n,
              }),
            )),
            (t[6] = n),
            (t[7] = i),
            (t[8] = l),
            (t[9] = c),
            (t[10] = L))
          : (L = t[10]),
        L
      );
    }
    l.default = m;
  },
  98,
);
