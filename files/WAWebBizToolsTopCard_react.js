__d(
  "WAWebBizToolsTopCard.react",
  [
    "WAWebBizToolsTopCardIcon.react",
    "WAWebButton.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 48,
      c = { marginBottom16: { marginBottom: "x1ua1l7f", $$css: !0 } };
    function d() {
      return s.jsx(r("WAWebBizToolsTopCardIcon.react"), {
        height: u,
        width: u,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.promotion,
        r = n.promotion.promotion.data,
        a = r.primaryAction,
        i = r.textElementValue,
        l = r.titleElementValue;
      if (a == null) return null;
      var u = a.deepLink,
        m = a.text,
        p = a.universalLink,
        _ = u != null ? u : p;
      if (_ == null || _ === "") return null;
      var f = n.image,
        g;
      t[0] !== f
        ? ((g = f != null ? f : s.jsx(d, {})), (t[0] = f), (t[1] = g))
        : (g = t[1]);
      var h = g,
        y;
      t[2] !== n
        ? ((y = function () {
            n.primaryActionClick();
          }),
          (t[2] = n),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = {
            className:
              "x1p57kb1 xvtqlqk xvpt6g3 xdx6fka x1380le5 xyxtwap x7vsco6 x178xt8z x1lun4ml xso031l xpilrb4 x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu xx42vgk xbogo7e x120ee7l x1vb5itz x6nvzda x4i4b9w xhl9efl xj65ea0",
          }),
          (t[4] = b))
        : (b = t[4]);
      var v;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { className: "x2lah0s x1useyqa" }), (t[5] = v))
        : (v = t[5]);
      var S;
      t[6] !== h
        ? ((S = s.jsx("div", babelHelpers.extends({}, v, { children: h }))),
          (t[6] = h),
          (t[7] = S))
        : (S = t[7]);
      var R;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { className: "xlese2p" }), (t[8] = R))
        : (R = t[8]);
      var L;
      t[9] !== l
        ? ((L = s.jsx(o("WAWebText.react").WAWebTextTitle, {
            weight: "semibold",
            children: l,
          })),
          (t[9] = l),
          (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] !== i
        ? ((E = s.jsx(o("WAWebText.react").WAWebTextMuted, {
            color: "secondary",
            xstyle: c.marginBottom16,
            children: i,
          })),
          (t[11] = i),
          (t[12] = E))
        : (E = t[12]);
      var k;
      t[13] !== L || t[14] !== E
        ? ((k = s.jsxs(
            "div",
            babelHelpers.extends({}, R, { children: [L, E] }),
          )),
          (t[13] = L),
          (t[14] = E),
          (t[15] = k))
        : (k = t[15]);
      var I;
      t[16] !== S || t[17] !== k
        ? ((I = s.jsxs(o("WAWebFlex.react").FlexRow, { children: [S, k] })),
          (t[16] = S),
          (t[17] = k),
          (t[18] = I))
        : (I = t[18]);
      var T;
      t[19] !== m || t[20] !== C
        ? ((T = s.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            children: s.jsx(o("WAWebButton.react").WAWebButtonPrimary, {
              onClick: C,
              children: m,
            }),
          })),
          (t[19] = m),
          (t[20] = C),
          (t[21] = T))
        : (T = t[21]);
      var D;
      return (
        t[22] !== I || t[23] !== T || t[24] !== b
          ? ((D = s.jsxs(
              "div",
              babelHelpers.extends({}, b, { children: [I, T] }),
            )),
            (t[22] = I),
            (t[23] = T),
            (t[24] = b),
            (t[25] = D))
          : (D = t[25]),
        D
      );
    }
    l.default = m;
  },
  98,
);
