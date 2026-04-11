__d(
  "WAWebCommonQuantityControls.react",
  [
    "fbt",
    "WAWebBizCartConstants",
    "WAWebCommonToastMaxProductQuantityReached",
    "WAWebL10N",
    "WAWebPlusIcon.react",
    "WAWebQuantityControlsRemoveItemBtnDarkIcon.react",
    "WAWebQuantityControlsRemoveItemBtnIcon.react",
    "WAWebStopEvent",
    "WAWebThemeContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo,
      d = {
        svg: {
          color: "xhslqc4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onClick,
        r,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {
            className:
              "x1280gxy xuv73ul x1xeqo68 xpfj8cy xy5ipz4 xbrszos xea3l6g x18isctg x2q3nzr x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xhslqc4 x1ypdohk x10w6t97 x1td3qas xajj3lu x1ss49kh xtj9sai xgak4ha x1lwdpx3 xb90sal x1rlzdi xrhz2io xysibl7 x4yb96v x1kylhsf xed3198 x12ln5q2",
          }),
          (a = s._(/*BTDS*/ "Add 1 item")),
          (t[0] = r),
          (t[1] = a))
        : ((r = t[0]), (a = t[1]));
      var i;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebPlusIcon.react").PlusIcon, {
            xstyle: d.svg,
            width: 20,
          })),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== n
          ? ((l = u.jsx(
              "button",
              babelHelpers.extends({}, r, {
                title: a,
                onClick: n,
                children: i,
              }),
            )),
            (t[3] = n),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.isDarkTheme,
        r = e.onClick,
        a = n
          ? o("WAWebQuantityControlsRemoveItemBtnDarkIcon.react")
              .QuantityControlsRemoveItemBtnDarkIcon
          : o("WAWebQuantityControlsRemoveItemBtnIcon.react")
              .QuantityControlsRemoveItemBtnIcon,
        i,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = {
            className:
              "x1280gxy xuv73ul x1xeqo68 xpfj8cy xy5ipz4 xbrszos xea3l6g x18isctg x2q3nzr x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 x9f619 xhslqc4 x1ypdohk x10w6t97 x1td3qas xajj3lu x1ss49kh xtj9sai xgak4ha x1lwdpx3 xb90sal x1rlzdi xrhz2io xysibl7 x4yb96v x1kylhsf xed3198 x12ln5q2",
          }),
          (l = s._(/*BTDS*/ "Remove 1 item")),
          (t[0] = i),
          (t[1] = l))
        : ((i = t[0]), (l = t[1]));
      var c;
      t[2] !== a
        ? ((c = u.jsx(a, { xstyle: d.svg, width: 14, height: 14 })),
          (t[2] = a),
          (t[3] = c))
        : (c = t[3]);
      var m;
      return (
        t[4] !== r || t[5] !== c
          ? ((m = u.jsx(
              "button",
              babelHelpers.extends({}, i, {
                title: l,
                onClick: r,
                children: c,
              }),
            )),
            (t[4] = r),
            (t[5] = c),
            (t[6] = m))
          : (m = t[6]),
        m
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.quantity,
        r = e.quantityTitle,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {
            className:
              "x6s0dn4 x78zum5 x1jchvi3 x10w6t97 xl56j7k x1td3qas xpfry4w xbrszos xea3l6g x18isctg x2q3nzr x17t9dm2",
          }),
          (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n || t[2] !== r
          ? ((i = u.jsx(
              "div",
              babelHelpers.extends({}, a, { title: r, children: n }),
            )),
            (t[1] = n),
            (t[2] = r),
            (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(31),
        n = o("WAWebThemeContext").useIsDarkTheme(),
        a = e.quantity,
        i = e.quantityTitle,
        l = e.isCollapsed,
        c = e.onAddOneClick,
        d = e.onRemoveOneClick,
        f = e.maxQuantity,
        g;
      t[0] !== i
        ? ((g = i === void 0 ? s._(/*BTDS*/ "Selected items") : i),
          (t[0] = i),
          (t[1] = g))
        : (g = t[1]);
      var h = g,
        y = l === void 0 ? !1 : l,
        C =
          f === void 0 ? o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY : f,
        b;
      t[2] !== d
        ? ((b = function (t) {
            (o("WAWebStopEvent").stopEvent(t), d());
          }),
          (t[2] = d),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S;
      t[4] !== C || t[5] !== c || t[6] !== a
        ? ((S = function (t) {
            (o("WAWebStopEvent").stopEvent(t),
              a < C
                ? c()
                : r("WAWebCommonToastMaxProductQuantityReached")(C, !0));
          }),
          (t[4] = C),
          (t[5] = c),
          (t[6] = a),
          (t[7] = S))
        : (S = t[7]);
      var R = S,
        L;
      t[8] !== v || t[9] !== n
        ? ((L = u.jsx(p, { isDarkTheme: n, onClick: v })),
          (t[8] = v),
          (t[9] = n),
          (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = {
            className:
              "x6s0dn4 x14ug900 x78zum5 x1jchvi3 x10w6t97 xl56j7k x1td3qas",
          }),
          (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] !== a
        ? ((k = r("WAWebL10N").n(a)), (t[12] = a), (t[13] = k))
        : (k = t[13]);
      var I;
      t[14] !== h || t[15] !== k
        ? ((I = u.jsx(
            "div",
            babelHelpers.extends({}, E, { title: h, children: k }),
          )),
          (t[14] = h),
          (t[15] = k),
          (t[16] = I))
        : (I = t[16]);
      var T;
      t[17] !== R
        ? ((T = u.jsx(m, { onClick: R })), (t[17] = R), (t[18] = T))
        : (T = t[18]);
      var D;
      t[19] !== T || t[20] !== L || t[21] !== I
        ? ((D = u.jsxs(u.Fragment, { children: [L, I, T] })),
          (t[19] = T),
          (t[20] = L),
          (t[21] = I),
          (t[22] = D))
        : (D = t[22]);
      var x = D;
      if (y) {
        var $;
        (t[23] !== a || t[24] !== h
          ? (($ = u.jsx(_, { quantity: a, quantityTitle: h })),
            (t[23] = a),
            (t[24] = h),
            (t[25] = $))
          : ($ = t[25]),
          (x = $));
      }
      if (a === 0) {
        var P;
        (t[26] !== R
          ? ((P = u.jsx(m, { onClick: R })), (t[26] = R), (t[27] = P))
          : (P = t[27]),
          (x = P));
      }
      var N;
      t[28] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = { className: "x3nfvp2 x13a6bvl" }), (t[28] = N))
        : (N = t[28]);
      var M;
      return (
        t[29] !== x
          ? ((M = u.jsx("div", babelHelpers.extends({}, N, { children: x }))),
            (t[29] = x),
            (t[30] = M))
          : (M = t[30]),
        M
      );
    }
    l.default = f;
  },
  226,
);
