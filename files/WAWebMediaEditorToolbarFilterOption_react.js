__d(
  "WAWebMediaEditorToolbarFilterOption.react",
  [
    "ReactKonva",
    "WAWebCheckmarkIcon.react",
    "WAWebFlex.react",
    "WAWebMediaEditorUtilsFilters",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["composition", "overlay"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState,
      p = {
        checkmarkIconStyle: {
          position: "x10l6tqk",
          color: "x1awj2ng",
          opacity: "x1hc1fzr",
          zIndex: "xhtitgo",
          $$css: !0,
        },
      };
    function _(t) {
      var n = o("react-compiler-runtime").c(54),
        r = t.filter,
        a = t.imageUrl,
        i = t.onFilterChange,
        l = t.onHover,
        s = t.selected,
        c;
      n[0] !== s
        ? ((c = {
            0: "x1nxh6w3 x1v9usgg x1u78mur x2b8uid x1vvkbs x1mzt3pk x1tiyuxx",
            1: "x1nxh6w3 x1v9usgg x1u78mur x2b8uid x1vvkbs x1mzt3pk x1tiyuxx x1fh42yi",
          }[!!s << 0]),
          (n[0] = s),
          (n[1] = c))
        : (c = n[1]);
      var _ = c,
        f,
        g;
      n[2] !== r
        ? ((f = o("WAWebMediaEditorUtilsFilters").getFilterValue(r)),
          (g = f.toString()),
          (n[2] = r),
          (n[3] = f),
          (n[4] = g))
        : ((f = n[3]), (g = n[4]));
      var h = g + " filter",
        y = m(null),
        C = y[0],
        b = y[1],
        v,
        S;
      (n[5] !== a || n[6] !== C
        ? ((v = function () {
            a && (C == null || C.cache());
          }),
          (S = [a, C]),
          (n[5] = a),
          (n[6] = C),
          (n[7] = v),
          (n[8] = S))
        : ((v = n[7]), (S = n[8])),
        d(v, S));
      var R;
      n[9] !== r || n[10] !== i
        ? ((R = function () {
            return i(r);
          }),
          (n[9] = r),
          (n[10] = i),
          (n[11] = R))
        : (R = n[11]);
      var L = R,
        E;
      n[12] !== r || n[13] !== l
        ? ((E = function () {
            return l(r);
          }),
          (n[12] = r),
          (n[13] = l),
          (n[14] = E))
        : (E = n[14]);
      var k = E,
        I;
      n[15] !== l
        ? ((I = function () {
            return l(null);
          }),
          (n[15] = l),
          (n[16] = I))
        : (I = n[16]);
      var T = I,
        D;
      n[17] !== r
        ? ((D = o("WAWebMediaEditorUtilsFilters").getKonvaFilters(r)),
          (n[17] = r),
          (n[18] = D))
        : (D = n[18]);
      var x = D,
        $;
      n[19] !== r
        ? (($ = o("WAWebMediaEditorUtilsFilters").getFilterPresets(r)),
          (n[19] = r),
          (n[20] = $))
        : ($ = n[20]);
      var P, N, M;
      if (n[21] !== $) {
        var w = $;
        ((P = w.composition),
          (M = w.overlay),
          (N = babelHelpers.objectWithoutPropertiesLoose(w, e)),
          (n[21] = $),
          (n[22] = P),
          (n[23] = N),
          (n[24] = M));
      } else ((P = n[22]), (N = n[23]), (M = n[24]));
      var A = String(r),
        F;
      n[25] !== A
        ? ((F = A.toLowerCase()), (n[25] = A), (n[26] = F))
        : (F = n[26]);
      var O = "filter-option-" + F,
        B;
      n[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = {
            className: "x1n2onr6 x1247r65 x1mgsydn x78zum5 xdt5ytf x6s0dn4",
          }),
          (n[27] = B))
        : (B = n[27]);
      var W;
      n[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((W = {
            className:
              "x1n2onr6 x1useyqa xsdox4t xbrszos xea3l6g x18isctg x2q3nzr x6ikm8r x10wlt62 x1277o0a x14snt5h x18br7mf",
          }),
          (n[28] = W))
        : (W = n[28]);
      var q;
      n[29] !== P || n[30] !== N || n[31] !== a || n[32] !== x || n[33] !== M
        ? ((q =
            a &&
            u.jsxs(o("ReactKonva").Group, {
              children: [
                u.jsx(
                  o("ReactKonva").Image,
                  babelHelpers.extends(
                    {
                      ref: b,
                      image: a,
                      width: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
                      height: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
                      crop: {
                        x: Math.max((a.width - a.height) / 2, 0),
                        y: Math.max((a.height - a.width) / 2, 0),
                        width: Math.min(a.width, a.height),
                        height: Math.min(a.width, a.height),
                      },
                      filters: x,
                    },
                    N,
                  ),
                ),
                u.jsx(o("ReactKonva").Rect, {
                  width: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
                  height: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
                  fill: M,
                  globalCompositeOperation: P,
                }),
              ],
            })),
          (n[29] = P),
          (n[30] = N),
          (n[31] = a),
          (n[32] = x),
          (n[33] = M),
          (n[34] = q))
        : (q = n[34]);
      var U;
      n[35] !== q
        ? ((U = u.jsx(o("ReactKonva").Stage, {
            width: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
            height: o("WAWebMediaEditorUtilsFilters").IMAGE_DIMENSION,
            children: u.jsx(o("ReactKonva").Layer, { children: q }),
          })),
          (n[35] = q),
          (n[36] = U))
        : (U = n[36]);
      var V;
      n[37] !== s
        ? ((V =
            s &&
            u.jsx("div", {
              className:
                "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x1jxbiih x18km98s xbrszos xea3l6g x18isctg x2q3nzr x78zum5 x6s0dn4 xl56j7k x1vjfegm",
              children: u.jsx(o("WAWebCheckmarkIcon.react").CheckmarkIcon, {
                xstyle: p.checkmarkIconStyle,
              }),
            })),
          (n[37] = s),
          (n[38] = V))
        : (V = n[38]);
      var H;
      n[39] !== U || n[40] !== V
        ? ((H = u.jsxs(
            "div",
            babelHelpers.extends({}, W, { children: [U, V] }),
          )),
          (n[39] = U),
          (n[40] = V),
          (n[41] = H))
        : (H = n[41]);
      var G;
      n[42] !== f || n[43] !== _
        ? ((G = u.jsx("span", { className: _, children: f })),
          (n[42] = f),
          (n[43] = _),
          (n[44] = G))
        : (G = n[44]);
      var z;
      return (
        n[45] !== h ||
        n[46] !== L ||
        n[47] !== T ||
        n[48] !== k ||
        n[49] !== s ||
        n[50] !== O ||
        n[51] !== H ||
        n[52] !== G
          ? ((z = u.jsx(o("WAWebFlex.react").FlexColumn, {
              children: u.jsxs(
                "div",
                babelHelpers.extends({ "data-testid": void 0 }, B, {
                  onClick: L,
                  onKeyPress: L,
                  onTouchStart: L,
                  role: "button",
                  tabIndex: 0,
                  "aria-label": h,
                  "aria-pressed": s,
                  onMouseOver: k,
                  onMouseLeave: T,
                  onFocus: k,
                  onBlur: T,
                  children: [H, G],
                }),
              ),
            })),
            (n[45] = h),
            (n[46] = L),
            (n[47] = T),
            (n[48] = k),
            (n[49] = s),
            (n[50] = O),
            (n[51] = H),
            (n[52] = G),
            (n[53] = z))
          : (z = n[53]),
        z
      );
    }
    l.default = _;
  },
  98,
);
