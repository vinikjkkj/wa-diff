__d(
  "WAWebCheckboxSelectableWrapper.react",
  [
    "WAWebCheckBox.react",
    "WAWebContactModel",
    "WAWebKeyboardHotKeys.react",
    "WAWebNoop",
    "WAWebReachoutTimelockUtils",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        checkboxSelectableWrapper: {
          position: "x1n2onr6",
          width: "xh8yej3",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(35),
        n = e.children,
        a = e.disabled,
        i = e.active,
        l = e.selections,
        d = e.model,
        m = e.checked,
        p = e.checkboxTheme,
        _ = e.onClick,
        f = e.wrapperTestid,
        g = e.checkboxAriaLabel,
        h = _ === void 0 ? r("WAWebNoop") : _,
        y;
      t[0] !== d.id
        ? ((y = d.id.toString()), (t[0] = d.id), (t[1] = y))
        : (y = t[1]);
      var C = r("useWAWebActiveSelection")(i, y),
        b = C[0],
        v;
      t[2] !== m || t[3] !== d || t[4] !== l
        ? ((v = function () {
            return l.isSelected(d) || !!m;
          }),
          (t[2] = m),
          (t[3] = d),
          (t[4] = l),
          (t[5] = v))
        : (v = t[5]);
      var S = u(v),
        R = S[0],
        L = S[1],
        E;
      t[6] !== d
        ? ((E =
            o(
              "WAWebReachoutTimelockUtils",
            ).isUserReachoutTimelockedAndVisible() &&
            d instanceof r("WAWebContactModel") &&
            !d.canSendMsgWhileTimelocked),
          (t[6] = d),
          (t[7] = E))
        : (E = t[7]);
      var k = u(E),
        I = k[0],
        T = k[1],
        D;
      t[8] !== R
        ? ((D = function (t) {
            t !== R && L(t);
          }),
          (t[8] = R),
          (t[9] = D))
        : (D = t[9]);
      var x = D,
        $;
      t[10] !== h
        ? (($ = function (t) {
            (t.preventDefault(), h(t));
          }),
          (t[10] = h),
          (t[11] = $))
        : ($ = t[11]);
      var P = $,
        N;
      t[12] !== P
        ? ((N = { enter: P, space: P }), (t[12] = P), (t[13] = N))
        : (N = t[13]);
      var M = N,
        w;
      (t[14] !== d.id
        ? ((w = d.id.toString()), (t[14] = d.id), (t[15] = w))
        : (w = t[15]),
        o("useWAWebListener").useListener(l, w, x));
      var A;
      (t[16] !== d
        ? ((A = function () {
            T(
              o(
                "WAWebReachoutTimelockUtils",
              ).isUserReachoutTimelockedAndVisible() &&
                d instanceof r("WAWebContactModel") &&
                !d.canSendMsgWhileTimelocked,
            );
          }),
          (t[16] = d),
          (t[17] = A))
        : (A = t[17]),
        o("useWAWebListener").useListener(
          d,
          "change:canSendMsgWhileTimelocked",
          A,
        ));
      var F = I ? r("WAWebNoop") : P,
        O;
      t[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = {
            className:
              "x10l6tqk x1pe450p x11uqc5h x78zum5 x6s0dn4 x5yr21d x47corl",
          }),
          (t[18] = O))
        : (O = t[18]);
      var B = a === !0 || I,
        W;
      t[19] !== g || t[20] !== p || t[21] !== R || t[22] !== B
        ? ((W = s.jsx(o("WAWebCheckBox.react").CheckBox, {
            onChange: r("WAWebNoop"),
            ariaLabel: g,
            checked: R,
            disabled: B,
            tabIndex: -1,
            theme: p,
          })),
          (t[19] = g),
          (t[20] = p),
          (t[21] = R),
          (t[22] = B),
          (t[23] = W))
        : (W = t[23]);
      var q;
      t[24] !== e.testid || t[25] !== W
        ? ((q = s.jsx(
            "div",
            babelHelpers.extends({}, O, { "data-testid": void 0, children: W }),
          )),
          (t[24] = e.testid),
          (t[25] = W),
          (t[26] = q))
        : (q = t[26]);
      var U;
      return (
        t[27] !== n ||
        t[28] !== M ||
        t[29] !== b ||
        t[30] !== R ||
        t[31] !== q ||
        t[32] !== F ||
        t[33] !== f
          ? ((U = s.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
              component: "div",
              handlers: M,
              ref: b,
              xstyle: c.checkboxSelectableWrapper,
              onClick: F,
              "data-testid": void 0,
              role: "checkbox",
              "aria-checked": R,
              tabIndex: -1,
              children: [q, n],
            })),
            (t[27] = n),
            (t[28] = M),
            (t[29] = b),
            (t[30] = R),
            (t[31] = q),
            (t[32] = F),
            (t[33] = f),
            (t[34] = U))
          : (U = t[34]),
        U
      );
    }
    l.default = d;
  },
  98,
);
