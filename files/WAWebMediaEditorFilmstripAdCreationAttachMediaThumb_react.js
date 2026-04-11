__d(
  "WAWebMediaEditorFilmstripAdCreationAttachMediaThumb.react",
  [
    "fbt",
    "WAWebBizAdCreationCreativeThumbnail.react",
    "WAWebKeyboardIsKeyActivation",
    "WAWebStateUtils",
    "WDSIconIcClose.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = { overlayIconColor: { color: "x17t9dm2", $$css: !0 } };
    function p(t) {
      var n = o("react-compiler-runtime").c(35),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        u = l.attachMedia,
        p = l.isActive,
        _ = l.onDeleteClick,
        f = l.onSelectClick,
        g = d(!1),
        h = g[0],
        y = g[1],
        C;
      n[3] !== u || n[4] !== _
        ? ((C = function (t) {
            (t.stopPropagation(), _(o("WAWebStateUtils").unproxy(u), t));
          }),
          (n[3] = u),
          (n[4] = _),
          (n[5] = C))
        : (C = n[5]);
      var b = C,
        v;
      n[6] !== u || n[7] !== f
        ? ((v = function (t) {
            (t.stopPropagation(), f(o("WAWebStateUtils").unproxy(u), t));
          }),
          (n[6] = u),
          (n[7] = f),
          (n[8] = v))
        : (v = n[8]);
      var S = v,
        R;
      n[9] !== S
        ? ((R = function (t) {
            r("WAWebKeyboardIsKeyActivation")(t) &&
              (t.stopPropagation(), t.preventDefault(), S(t));
          }),
          (n[9] = S),
          (n[10] = R))
        : (R = n[10]);
      var L = R,
        E;
      n[11] !== p
        ? ((E = {
            0: {
              className:
                "x9f619 xx42vgk xbogo7e x120ee7l x1vb5itz xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x1rg5ohu x2lah0s x6ikm8r x10wlt62 x1n2onr6 xxymvpz x1sbwfh8 x16q7b9a x1vjfegm",
            },
            1: {
              className:
                "x9f619 xlr9sxt xvvg52n xwd4zgb xq8v1ta x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x1rg5ohu x2lah0s x6ikm8r x10wlt62 x1n2onr6 xxymvpz x1sbwfh8 x16q7b9a x1vjfegm xlze6vy x47fsot x1rrvw3c x18djku1 xamhcws x1alpsbp xlxy82 xyumdvf",
            },
          }[(p === !0) << 0]),
          (n[11] = p),
          (n[12] = E))
        : (E = n[12]);
      var k, I;
      n[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function () {
            return y(!0);
          }),
          (I = function () {
            return y(!1);
          }),
          (n[13] = k),
          (n[14] = I))
        : ((k = n[13]), (I = n[14]));
      var T;
      n[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = s._(/*BTDS*/ "Image thumbnail")), (n[15] = T))
        : (T = n[15]);
      var D;
      n[16] !== u
        ? ((D = c.jsx(r("WAWebBizAdCreationCreativeThumbnail.react"), {
            attachMediaProp: u,
            variant: "Editor",
          })),
          (n[16] = u),
          (n[17] = D))
        : (D = n[17]);
      var x;
      n[18] !== h
        ? ((x = {
            0: {
              className:
                "x1trrmfo x78zum5 x1ngp85i xe9xzdg xg01cxk x10l6tqk x1g2r6go x19991ni x9lcvmn x11uqc5h",
            },
            1: {
              className:
                "x1trrmfo x78zum5 x1ngp85i xe9xzdg x10l6tqk x1g2r6go x19991ni x9lcvmn x11uqc5h x1hc1fzr",
            },
          }[!!h << 0]),
          (n[18] = h),
          (n[19] = x))
        : (x = n[19]);
      var $;
      n[20] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = {
            className:
              "x6s0dn4 x1rk1j4g x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1ejq31n x18oe1m7 x1sy0etr xstzfhl x972fbf x10w94by x1qhh985 x14e42zd x1ypdohk x78zum5 xmix8c7 xl56j7k xexx8yu xyri2b x18d9i69 x1c1uobl x1xp8n7a",
          }),
          (n[20] = $))
        : ($ = n[20]);
      var P, N;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Delete media")),
          (N = c.jsx(r("WDSIconIcClose.react"), {
            height: 12,
            width: 12,
            iconXstyle: m.overlayIconColor,
          })),
          (n[21] = P),
          (n[22] = N))
        : ((P = n[21]), (N = n[22]));
      var M;
      n[23] !== b
        ? ((M = c.jsx(
            "button",
            babelHelpers.extends({}, $, {
              onClick: b,
              "aria-label": P,
              children: N,
            }),
          )),
          (n[23] = b),
          (n[24] = M))
        : (M = n[24]);
      var w;
      n[25] !== M || n[26] !== x
        ? ((w = c.jsx("div", babelHelpers.extends({}, x, { children: M }))),
          (n[25] = M),
          (n[26] = x),
          (n[27] = w))
        : (w = n[27]);
      var A;
      return (
        n[28] !== S ||
        n[29] !== L ||
        n[30] !== i ||
        n[31] !== w ||
        n[32] !== E ||
        n[33] !== D
          ? ((A = c.jsxs(
              "button",
              babelHelpers.extends({}, E, {
                onMouseEnter: k,
                onMouseLeave: I,
                onClick: S,
                onKeyPress: L,
                "aria-label": T,
                ref: i,
                children: [D, w],
              }),
            )),
            (n[28] = S),
            (n[29] = L),
            (n[30] = i),
            (n[31] = w),
            (n[32] = E),
            (n[33] = D),
            (n[34] = A))
          : (A = n[34]),
        A
      );
    }
    l.default = p;
  },
  226,
);
