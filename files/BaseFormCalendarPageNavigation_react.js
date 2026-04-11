__d(
  "BaseFormCalendarPageNavigation.react",
  [
    "fbt",
    "BaseButtonV3.react",
    "BaseFormCalendarMonthLabel.react",
    "BaseSVGIconV2.react",
    "CometAccessibilityAnnouncement.react",
    "Locale",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = e || (e = r("react")),
      d = o("Locale").isRTL();
    function m(e) {
      var t = o("react-compiler-runtime").c(48),
        n = e.handleClickNext,
        a = e.handleClickPrevious,
        i = e.monthNavigationAlignment,
        l = e.nextDisabled,
        m = e.previousDisabled,
        p = e.typeVariant,
        _ = e.visibleDate,
        f = p.calendarMonthNavigationVariant,
        g = f.buttonIconSizeVariant,
        h = f.buttonIconTypeVariant,
        y = f.iconColorVariant,
        C = f.iconSizeVariant,
        b = f.nextButtonIcon,
        v = f.prevButtonIcon,
        S = f.textColorVariant,
        R = f.textTypeVariant,
        L = f.xstyleConfig,
        E = d ? b : v,
        k;
      t[0] !== y || t[1] !== C || t[2] !== E
        ? ((k = c.jsx(r("BaseSVGIconV2.react"), {
            colorVariant: y,
            icon: E,
            sizeVariant: C,
          })),
          (t[0] = y),
          (t[1] = C),
          (t[2] = E),
          (t[3] = k))
        : (k = t[3]);
      var I = k,
        T = d ? v : b,
        D;
      t[4] !== y || t[5] !== C || t[6] !== T
        ? ((D = c.jsx(r("BaseSVGIconV2.react"), {
            colorVariant: y,
            icon: T,
            sizeVariant: C,
          })),
          (t[4] = y),
          (t[5] = C),
          (t[6] = T),
          (t[7] = D))
        : (D = t[7]);
      var x = D,
        $;
      t[8] !== g || t[9] !== h || t[10] !== a || t[11] !== I || t[12] !== m
        ? (($ = a
            ? c.jsx(r("BaseButtonV3.react"), {
                addOnStart: I,
                "aria-label": s._(/*BTDS*/ "Previous Month"),
                disabled: m,
                focusable: !0,
                onClick: a,
                sizeVariant: g,
                testid: void 0,
                variant: h,
                children: null,
              })
            : c.jsx("div", {})),
          (t[8] = g),
          (t[9] = h),
          (t[10] = a),
          (t[11] = I),
          (t[12] = m),
          (t[13] = $))
        : ($ = t[13]);
      var P = $,
        N;
      t[14] !== g || t[15] !== h || t[16] !== n || t[17] !== l || t[18] !== x
        ? ((N = n
            ? c.jsx(r("BaseButtonV3.react"), {
                addOnStart: x,
                "aria-label": s._(/*BTDS*/ "Next Month"),
                disabled: l,
                focusable: !0,
                onClick: n,
                sizeVariant: g,
                testid: void 0,
                variant: h,
                children: null,
              })
            : c.jsx("div", {})),
          (t[14] = g),
          (t[15] = h),
          (t[16] = n),
          (t[17] = l),
          (t[18] = x),
          (t[19] = N))
        : (N = t[19]);
      var M = N,
        w;
      t[20] !== S || t[21] !== R || t[22] !== p.fontMetrics || t[23] !== _
        ? ((w = c.jsx(r("CometAccessibilityAnnouncement.react"), {
            isVisible: !0,
            role: "status",
            children: c.jsx(r("BaseFormCalendarMonthLabel.react"), {
              date: _,
              fontMetrics: p.fontMetrics,
              textColorVariant: S,
              textTypeVariant: R,
            }),
          })),
          (t[20] = S),
          (t[21] = R),
          (t[22] = p.fontMetrics),
          (t[23] = _),
          (t[24] = w))
        : (w = t[24]);
      var A = w;
      if (i === "right") {
        var F;
        t[25] !== L.container
          ? ((F = (u || (u = r("stylex"))).props(L.container)),
            (t[25] = L.container),
            (t[26] = F))
          : (F = t[26]);
        var O;
        t[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = { className: "x6s0dn4 x78zum5 x1q0g3np x1qughib xh8yej3" }),
            (t[27] = O))
          : (O = t[27]);
        var B;
        t[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = { className: "x78zum5" }), (t[28] = B))
          : (B = t[28]);
        var W;
        t[29] !== M || t[30] !== P
          ? ((W = c.jsxs(
              "div",
              babelHelpers.extends({}, B, { children: [P, M] }),
            )),
            (t[29] = M),
            (t[30] = P),
            (t[31] = W))
          : (W = t[31]);
        var q;
        t[32] !== A || t[33] !== W
          ? ((q = c.jsxs(
              "div",
              babelHelpers.extends({}, O, { children: [A, W] }),
            )),
            (t[32] = A),
            (t[33] = W),
            (t[34] = q))
          : (q = t[34]);
        var U;
        return (
          t[35] !== q || t[36] !== F
            ? ((U = c.jsx("div", babelHelpers.extends({}, F, { children: q }))),
              (t[35] = q),
              (t[36] = F),
              (t[37] = U))
            : (U = t[37]),
          U
        );
      }
      var V;
      t[38] !== L.container
        ? ((V = (u || (u = r("stylex"))).props(L.container)),
          (t[38] = L.container),
          (t[39] = V))
        : (V = t[39]);
      var H;
      t[40] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = { className: "x6s0dn4 x78zum5 x1q0g3np x1qughib xh8yej3" }),
          (t[40] = H))
        : (H = t[40]);
      var G;
      t[41] !== A || t[42] !== M || t[43] !== P
        ? ((G = c.jsxs(
            "div",
            babelHelpers.extends({}, H, { children: [P, A, M] }),
          )),
          (t[41] = A),
          (t[42] = M),
          (t[43] = P),
          (t[44] = G))
        : (G = t[44]);
      var z;
      return (
        t[45] !== G || t[46] !== V
          ? ((z = c.jsx("div", babelHelpers.extends({}, V, { children: G }))),
            (t[45] = G),
            (t[46] = V),
            (t[47] = z))
          : (z = t[47]),
        z
      );
    }
    var p = c.memo(m);
    l.default = p;
  },
  226,
);
