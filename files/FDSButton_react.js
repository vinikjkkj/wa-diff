__d(
  "FDSButton.react",
  [
    "BaseStyledButton.react",
    "CometGHLRenderingContext",
    "FDSIcon.react",
    "FDSText.react",
    "FDSTooltip.react",
    "asyncToGeneratorRuntime",
    "gkx",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
    "useCometTheme",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "addOnPrimary",
        "addOnSecondary",
        "disabled",
        "endContent",
        "icon",
        "id",
        "isLabelHidden",
        "label",
        "labelIsHidden",
        "linkProps",
        "onFocusIn",
        "onFocusOut",
        "onHoverIn",
        "onHoverOut",
        "onPress",
        "onPressIn",
        "onPressOut",
        "padding",
        "pressAction",
        "reduceEmphasis",
        "ref",
        "showDynamicHover",
        "size",
        "startContent",
        "suppressHydrationWarning",
        "testid",
        "testOnly_pressed",
        "tooltip",
        "tooltipPosition",
        "type",
        "variant",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = c.useOptimistic,
      _ = c.useRef,
      f = "x1u38n1b-B",
      g = "x1u38n1b-B",
      h = r("gkx")("9735"),
      y = {
        contentDisabled: { opacity: "xuzhngd", $$css: !0 },
        darkOverlay: {
          backgroundColor: "x18l40ae",
          color: "x14ctfv",
          $$css: !0,
        },
        darkOverlayPressed: { backgroundColor: "x1lxk4cn", $$css: !0 },
        disabled: { backgroundColor: "xwcfey6", $$css: !0 },
        fadeOut: {
          opacity: "x17kgks6",
          transitionDelay: "x5w5eug",
          transitionDuration: "x1ebt8du",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "x1dhq9h",
          $$css: !0,
        },
        fdsOverrideBlack: { backgroundColor: "xal61yo", $$css: !0 },
        fdsOverrideCollaborativePostCTA: {
          backgroundColor: "x14hiurz",
          mixBlendMode: "x1nor908",
          $$css: !0,
        },
        fdsOverrideNegative: { backgroundColor: "x1ciooss", $$css: !0 },
        fdsOverridePositive: { backgroundColor: "xv9rvxn", $$css: !0 },
        overlay: { backgroundColor: "x14hiurz", $$css: !0 },
        overlayDeemphasized: { backgroundColor: "x1f2gare", $$css: !0 },
        overlayDeemphasizedOverlayPressed: {
          backgroundColor: "x1f2gare",
          $$css: !0,
        },
        overlayDisabled: { backgroundColor: "x1ahlmzr", $$css: !0 },
        overlayOverlayPressed: { backgroundColor: "xiwuv7k", $$css: !0 },
        paddingIconOnly: {
          paddingInlineEnd: "x7at6mh",
          paddingInlineStart: "xkde5i4",
          $$css: !0,
        },
        pendingContainer: { position: "x1n2onr6", $$css: !0 },
        primary: { backgroundColor: "xtvsq51", $$css: !0 },
        primaryDeemphasized: { backgroundColor: "x1hr4nm9", $$css: !0 },
        primaryDeemphasizedOverlayPressed: {
          backgroundColor: "x18z898i",
          $$css: !0,
        },
        primaryOverlayPressed: { backgroundColor: "x1iutvsz", $$css: !0 },
        secondary: { backgroundColor: "x1qhmfi1", $$css: !0 },
        secondaryDeemphasized: { backgroundColor: "xjbqb8w", $$css: !0 },
        secondaryDeemphasizedOverlayPressed: {
          backgroundColor: "x18z898i",
          $$css: !0,
        },
        secondaryOverlayPressed: { backgroundColor: "x1iutvsz", $$css: !0 },
        shimmerOverlay: {
          animationDuration: "x1m9vv7p",
          animationIterationCount: "xa4qsjk",
          animationName: "x106wr5q x16y9qdo",
          animationTimingFunction: "x1esw782",
          backgroundImage: "xxdcsk3 x189605d",
          backgroundRepeat: "xiy17q3",
          backgroundSize: "xakli9p",
          bottom: "x1ey2m1c",
          insetInlineEnd: "xtijo5x",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          top: "x13vifvy",
          zIndex: "x1vjfegm",
          $$css: !0,
        },
        sizeLarge: { height: "x1fq8qgq", $$css: !0 },
        sizeMedium: { height: "x1r1pt67", $$css: !0 },
      },
      C = {
        "dark-overlay": {
          deemphasized: "white",
          default: "white",
          disabled: "disabled",
        },
        overlay: {
          deemphasized: "white",
          default: "primary",
          disabled: "disabled",
        },
        primary: {
          deemphasized: "highlight",
          default: "white",
          disabled: "disabled",
        },
        secondary: {
          deemphasized: "highlight",
          default: "secondary",
          disabled: "disabled",
        },
      },
      b = {
        "dark-overlay": {
          deemphasized: "white",
          default: "white",
          disabled: "disabled",
        },
        overlay: {
          deemphasized: "white",
          default: "primary",
          disabled: "disabled",
        },
        primary: {
          deemphasized: "highlight",
          default: "white",
          disabled: "disabled",
        },
        secondary: {
          deemphasized: "highlight",
          default: "primary",
          disabled: "disabled",
        },
      };
    function v(t) {
      var a,
        i,
        l,
        s = o("react-compiler-runtime").c(110),
        c,
        d,
        f,
        g,
        v,
        S,
        R,
        L,
        E,
        k,
        I,
        T,
        D,
        x,
        $,
        P,
        N,
        M,
        w,
        A,
        F,
        O,
        B,
        W,
        q,
        U,
        V,
        H,
        G,
        z,
        j;
      if (s[0] !== t) {
        var K = t.addOnPrimary,
          Q = t.addOnSecondary,
          X = t.disabled,
          Y = t.endContent,
          J = t.icon,
          Z = t.id,
          ee = t.isLabelHidden,
          te = t.label,
          ne = t.labelIsHidden,
          re = t.linkProps,
          oe = t.onFocusIn,
          ae = t.onFocusOut,
          ie = t.onHoverIn,
          le = t.onHoverOut,
          se = t.onPress,
          ue = t.onPressIn,
          ce = t.onPressOut,
          de = t.padding,
          me = t.pressAction,
          pe = t.reduceEmphasis,
          _e = t.ref,
          fe = t.showDynamicHover,
          ge = t.size,
          he = t.startContent,
          ye = t.suppressHydrationWarning,
          Ce = t.testid,
          be = t.testOnly_pressed,
          ve = t.tooltip,
          Se = t.tooltipPosition,
          Re = t.type,
          Le = t.variant,
          Ee = babelHelpers.objectWithoutPropertiesLoose(t, e);
        ((c = K),
          (d = Q),
          (F = X),
          (g = Y),
          (S = J),
          (R = Z),
          (L = ee),
          (E = te),
          (k = ne),
          (I = re),
          (T = oe),
          (D = ae),
          (x = ie),
          ($ = le),
          (P = se),
          (N = ue),
          (M = ce),
          (O = de),
          (w = me),
          (B = pe),
          (v = _e),
          (W = ge),
          (A = he),
          (q = ye),
          (H = Ce),
          (U = be),
          (G = ve),
          (V = Se),
          (z = Re),
          (j = Le),
          (f = Ee),
          (s[0] = t),
          (s[1] = c),
          (s[2] = d),
          (s[3] = f),
          (s[4] = g),
          (s[5] = v),
          (s[6] = S),
          (s[7] = R),
          (s[8] = L),
          (s[9] = E),
          (s[10] = k),
          (s[11] = I),
          (s[12] = T),
          (s[13] = D),
          (s[14] = x),
          (s[15] = $),
          (s[16] = P),
          (s[17] = N),
          (s[18] = M),
          (s[19] = w),
          (s[20] = A),
          (s[21] = F),
          (s[22] = O),
          (s[23] = B),
          (s[24] = W),
          (s[25] = q),
          (s[26] = U),
          (s[27] = V),
          (s[28] = H),
          (s[29] = G),
          (s[30] = z),
          (s[31] = j));
      } else
        ((c = s[1]),
          (d = s[2]),
          (f = s[3]),
          (g = s[4]),
          (v = s[5]),
          (S = s[6]),
          (R = s[7]),
          (L = s[8]),
          (E = s[9]),
          (k = s[10]),
          (I = s[11]),
          (T = s[12]),
          (D = s[13]),
          (x = s[14]),
          ($ = s[15]),
          (P = s[16]),
          (N = s[17]),
          (M = s[18]),
          (w = s[19]),
          (A = s[20]),
          (F = s[21]),
          (O = s[22]),
          (B = s[23]),
          (W = s[24]),
          (q = s[25]),
          (U = s[26]),
          (V = s[27]),
          (H = s[28]),
          (G = s[29]),
          (z = s[30]),
          (j = s[31]));
      var ke = F === void 0 ? !1 : F,
        Ie = O === void 0 ? "normal" : O,
        Te = B === void 0 ? !1 : B,
        De = W === void 0 ? "medium" : W,
        xe = q === void 0 ? !1 : q,
        $e = U === void 0 ? !1 : U,
        Pe = V === void 0 ? "above" : V,
        Ne = (a = j != null ? j : z) != null ? a : "primary",
        Me = (i = L != null ? L : k) != null ? i : !1,
        we = A != null ? A : c,
        Ae = g != null ? g : d,
        Fe =
          Ne === "fdsOverride_collaborativePostCTA"
            ? "secondary"
            : Ne in C
              ? Ne
              : "primary",
        Oe = ke ? "disabled" : Te ? "deemphasized" : "default",
        Be = C[Fe][Oe],
        We = b[Fe][Oe],
        qe = _(null),
        Ue = r("useCometTheme")("light"),
        Ve = Ue[0],
        He = Ue[1],
        Ge = p(!1),
        ze = Ge[0],
        je = Ge[1],
        Ke = ke || ze,
        Qe = ze,
        Xe;
      s[32] !== w
        ? ((Xe = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              w != null && (je(!0), yield w());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (s[32] = w),
          (s[33] = Xe))
        : (Xe = s[33]);
      var Ye = Xe,
        Je = m(r("CometGHLRenderingContext")),
        Ze = I != null && Je,
        et = (l = f["aria-label"]) != null ? l : E,
        tt = Ze ? void 0 : et,
        nt = r("useMergeRefs")(qe, v),
        rt = h ? ke : void 0,
        ot;
      s[34] !== Me || s[35] !== E || s[36] !== De || s[37] !== Be
        ? ((ot = Me
            ? null
            : u.jsx(r("FDSText.react"), {
                color: Be,
                numberOfLines: 1,
                type: De === "large" ? "button1" : "button2",
                children: E,
              })),
          (s[34] = Me),
          (s[35] = E),
          (s[36] = De),
          (s[37] = Be),
          (s[38] = ot))
        : (ot = s[38]);
      var at = Ne === "overlay" && ke && y.contentDisabled,
        it = Ne === "overlay" && He,
        lt = De === "medium" && y.sizeMedium,
        st = De === "large" && y.sizeLarge,
        ut = S != null && Me && y.paddingIconOnly,
        ct;
      s[39] !== at ||
      s[40] !== it ||
      s[41] !== lt ||
      s[42] !== st ||
      s[43] !== ut
        ? ((ct = [at, it, lt, st, ut]),
          (s[39] = at),
          (s[40] = it),
          (s[41] = lt),
          (s[42] = st),
          (s[43] = ut),
          (s[44] = ct))
        : (ct = s[44]);
      var dt = h ? void 0 : Ke,
        mt;
      s[45] !== S || s[46] !== We
        ? ((mt =
            S &&
            u.jsx(r("FDSIcon.react"), {
              color: We,
              icon: S,
              isDecorative: !0,
              size: 16,
            })),
          (s[45] = S),
          (s[46] = We),
          (s[47] = mt))
        : (mt = s[47]);
      var pt = h && ke ? void 0 : P,
        _t = h && ke ? void 0 : N,
        ft = h && ke ? void 0 : M,
        gt = Te && y.primaryDeemphasizedOverlayPressed,
        ht = Fe === "secondary" && y.secondaryOverlayPressed,
        yt = Fe === "secondary" && Te && y.secondaryDeemphasizedOverlayPressed,
        Ct = Fe === "overlay" && y.overlayOverlayPressed,
        bt = Fe === "overlay" && Te && y.overlayDeemphasizedOverlayPressed,
        vt = Fe === "dark-overlay" && y.darkOverlayPressed,
        St = Fe === "dark-overlay" && Te && y.overlayDeemphasizedOverlayPressed,
        Rt;
      s[48] !== gt ||
      s[49] !== ht ||
      s[50] !== yt ||
      s[51] !== Ct ||
      s[52] !== bt ||
      s[53] !== vt ||
      s[54] !== St
        ? ((Rt = [
            y.primaryOverlayPressed,
            gt,
            ht,
            yt,
            Ct,
            bt,
            vt,
            St,
            y.fadeOut,
          ]),
          (s[48] = gt),
          (s[49] = ht),
          (s[50] = yt),
          (s[51] = Ct),
          (s[52] = bt),
          (s[53] = vt),
          (s[54] = St),
          (s[55] = Rt))
        : (Rt = s[55]);
      var Lt = Ne === "primary" && y.primary,
        Et = Ne === "primary" && Te && y.primaryDeemphasized,
        kt = Ne === "secondary" && y.secondary,
        It = Ne === "secondary" && Te && y.secondaryDeemphasized,
        Tt = Ne === "fdsOverride_black" && y.fdsOverrideBlack,
        Dt = Ne === "fdsOverride_negative" && y.fdsOverrideNegative,
        xt = Ne === "fdsOverride_positive" && y.fdsOverridePositive,
        $t =
          Ne === "fdsOverride_collaborativePostCTA" &&
          y.fdsOverrideCollaborativePostCTA,
        Pt = Ne === "overlay" && y.overlay,
        Nt = Ne === "overlay" && Te && y.overlayDeemphasized,
        Mt = ke && y.disabled,
        wt = Ne === "overlay" && ke && y.overlayDisabled,
        At = Ne === "dark-overlay" && y.darkOverlay,
        Ft;
      s[56] !== Lt ||
      s[57] !== Et ||
      s[58] !== kt ||
      s[59] !== It ||
      s[60] !== Tt ||
      s[61] !== Dt ||
      s[62] !== xt ||
      s[63] !== $t ||
      s[64] !== Pt ||
      s[65] !== Nt ||
      s[66] !== Mt ||
      s[67] !== wt ||
      s[68] !== At
        ? ((Ft = [Lt, Et, kt, It, Tt, Dt, xt, $t, Pt, Nt, Mt, wt, At]),
          (s[56] = Lt),
          (s[57] = Et),
          (s[58] = kt),
          (s[59] = It),
          (s[60] = Tt),
          (s[61] = Dt),
          (s[62] = xt),
          (s[63] = $t),
          (s[64] = Pt),
          (s[65] = Nt),
          (s[66] = Mt),
          (s[67] = wt),
          (s[68] = At),
          (s[69] = Ft))
        : (Ft = s[69]);
      var Ot;
      s[70] !== f ||
      s[71] !== tt ||
      s[72] !== Ae ||
      s[73] !== we ||
      s[74] !== R ||
      s[75] !== I ||
      s[76] !== nt ||
      s[77] !== T ||
      s[78] !== D ||
      s[79] !== x ||
      s[80] !== $ ||
      s[81] !== Qe ||
      s[82] !== Ie ||
      s[83] !== xe ||
      s[84] !== ot ||
      s[85] !== ct ||
      s[86] !== dt ||
      s[87] !== mt ||
      s[88] !== pt ||
      s[89] !== _t ||
      s[90] !== ft ||
      s[91] !== Rt ||
      s[92] !== Ft ||
      s[93] !== rt ||
      s[94] !== $e ||
      s[95] !== H ||
      s[96] !== Ye
        ? ((Ot = u.jsx(
            r("BaseStyledButton.react"),
            babelHelpers.extends({}, f, {
              addOnEnd: Ae,
              addOnStart: we,
              "aria-disabled": rt,
              "aria-label": tt,
              content: ot,
              contentXstyle: ct,
              disabled: dt,
              icon: mt,
              id: R,
              linkProps: I,
              onFocusIn: T,
              onFocusOut: D,
              onHoverIn: x,
              onHoverOut: $,
              onPress: pt,
              onPressAction: Ye,
              onPressIn: _t,
              onPressOut: ft,
              overlayDisabled: Qe,
              overlayPressedStyle: Rt,
              padding: Ie,
              ref: nt,
              suppressHydrationWarning: xe,
              testOnly_pressed: $e,
              testid: void 0,
              xstyle: Ft,
            }),
          )),
          (s[70] = f),
          (s[71] = tt),
          (s[72] = Ae),
          (s[73] = we),
          (s[74] = R),
          (s[75] = I),
          (s[76] = nt),
          (s[77] = T),
          (s[78] = D),
          (s[79] = x),
          (s[80] = $),
          (s[81] = Qe),
          (s[82] = Ie),
          (s[83] = xe),
          (s[84] = ot),
          (s[85] = ct),
          (s[86] = dt),
          (s[87] = mt),
          (s[88] = pt),
          (s[89] = _t),
          (s[90] = ft),
          (s[91] = Rt),
          (s[92] = Ft),
          (s[93] = rt),
          (s[94] = $e),
          (s[95] = H),
          (s[96] = Ye),
          (s[97] = Ot))
        : (Ot = s[97]);
      var Bt = Ot,
        Wt;
      s[98] !== Bt || s[99] !== ze || s[100] !== w
        ? ((Wt =
            w != null
              ? u.jsxs(o("react-strict-dom").html.div, {
                  style: ze ? y.pendingContainer : void 0,
                  children: [
                    Bt,
                    ze &&
                      u.jsx(o("react-strict-dom").html.div, {
                        style: y.shimmerOverlay,
                      }),
                  ],
                })
              : Bt),
          (s[98] = Bt),
          (s[99] = ze),
          (s[100] = w),
          (s[101] = Wt))
        : (Wt = s[101]);
      var qt = Wt,
        Ut;
      s[102] !== Ve || s[103] !== qt || s[104] !== Ne
        ? ((Ut = Ne === "overlay" ? u.jsx(Ve, { children: qt }) : qt),
          (s[102] = Ve),
          (s[103] = qt),
          (s[104] = Ne),
          (s[105] = Ut))
        : (Ut = s[105]);
      var Vt = Ut;
      if (G != null) {
        var Ht;
        return (
          s[106] !== Vt || s[107] !== G || s[108] !== Pe
            ? ((Ht = u.jsx(r("FDSTooltip.react"), {
                position: Pe,
                tooltip: G,
                children: Vt,
              })),
              (s[106] = Vt),
              (s[107] = G),
              (s[108] = Pe),
              (s[109] = Ht))
            : (Ht = s[109]),
          Ht
        );
      }
      return Vt;
    }
    l.default = v;
  },
  98,
);
