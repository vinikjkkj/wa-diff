__d(
  "XMDSButton.react",
  [
    "BaseStyledButton.react",
    "MetaConfig",
    "XMDSButtonSpinnerContainer.react",
    "XMDSSpinner.react",
    "XMDSText.react",
    "XMDSTooltip.react",
    "react",
    "react-compiler-runtime",
    "useCDSButtonSpinner",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "addOnEnd",
        "addOnStart",
        "contentXstyle",
        "disabled",
        "label",
        "labelIsHidden",
        "linkProps",
        "loading",
        "onPress",
        "ref",
        "resetFocusAfterLoading",
        "size",
        "testid",
        "tooltip",
        "tooltipPosition",
        "type",
        "widthMode",
        "xstyle",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useMemo,
      m = c.useRef,
      p = c.useState,
      _ = r("MetaConfig")._("363"),
      f = {
        button: {
          borderStartStartRadius: "x21tfra",
          borderStartEndRadius: "x1inkh0v",
          borderEndEndRadius: "xdmlb9z",
          borderEndStartRadius: "x99u3i8",
          $$css: !0,
        },
        disabled: { opacity: "xti2d7y", $$css: !0 },
        onMedia: { backgroundColor: "xrmyhay", $$css: !0 },
        pressed: { opacity: "x1ks1olk", $$css: !0 },
        primary: { backgroundColor: "xtvsq51", $$css: !0 },
        primaryDestructive: { backgroundColor: "x1ejdgk5", $$css: !0 },
        primaryOnMedia: { backgroundColor: "xyyilqk", $$css: !0 },
        secondary: {
          backgroundColor: "x1qhmfi1",
          borderTopColor: "x1s9qjmn",
          borderInlineEndColor: "x71vvrb",
          borderBottomColor: "x7gj0x1",
          borderInlineStartColor: "x167l43f",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          $$css: !0,
        },
        secondaryDestructive: {
          backgroundColor: "x1a4om8m",
          borderTopColor: "xlyiply",
          borderInlineEndColor: "xmfhr8w",
          borderBottomColor: "x4vss3y",
          borderInlineStartColor: "xbsyyi8",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          $$css: !0,
        },
        secondaryEmphasized: {
          backgroundColor: "x1qhmfi1",
          borderTopColor: "x12ezzi8",
          borderInlineEndColor: "xk7q072",
          borderBottomColor: "x7uw254",
          borderInlineStartColor: "x1xjjfxs",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          $$css: !0,
        },
        secondaryExperimental: { backgroundColor: "xcbv0la", $$css: !0 },
        secondaryOnMedia: { backgroundColor: "x1f4ngb1", $$css: !0 },
        secondaryOutline: {
          backgroundColor: "x1qhmfi1",
          borderTopColor: "x1s9qjmn",
          borderInlineEndColor: "x71vvrb",
          borderBottomColor: "x7gj0x1",
          borderInlineStartColor: "x167l43f",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          $$css: !0,
        },
        sizeLarge: {
          borderStartStartRadius: "xqbgfmv",
          borderStartEndRadius: "xbe3n85",
          borderEndEndRadius: "x7a1id4",
          borderEndStartRadius: "x1d9i5bo",
          height: "x1xila8y",
          paddingInlineStart: "x1bumbmr",
          paddingInlineEnd: "xc8cyl1",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        sizeLargeWithAddOnEnd: { paddingInlineEnd: "xyauj1b", $$css: !0 },
        sizeLargeWithAddOnStart: { paddingInlineStart: "xd4mpni", $$css: !0 },
        sizeMedium: {
          borderStartStartRadius: "xj9xf8b",
          borderStartEndRadius: "xku6xm2",
          borderEndEndRadius: "x1ctn6jl",
          borderEndStartRadius: "xf0qvnx",
          height: "xp88ac2",
          paddingInlineStart: "x185berc",
          paddingInlineEnd: "x5ujcfi",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        sizeMediumWithAddOnEnd: { paddingInlineEnd: "x1drw3yx", $$css: !0 },
        sizeMediumWithAddOnStart: { paddingInlineStart: "x31k296", $$css: !0 },
        sizeSmall: {
          borderStartStartRadius: "x5zhcno",
          borderStartEndRadius: "x183u03e",
          borderEndEndRadius: "x1l1h38j",
          borderEndStartRadius: "x1sek5qj",
          height: "xhiysgs",
          paddingInlineStart: "xlff4si",
          paddingInlineEnd: "x1pkuq60",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        sizeSmallWithAddOnEnd: { paddingInlineEnd: "x1twhhy7", $$css: !0 },
        sizeSmallWithAddOnStart: { paddingInlineStart: "xjc8h4x", $$css: !0 },
        text: { backgroundColor: "xjbqb8w", $$css: !0 },
        textWhileLoading: { opacity: "xg01cxk", $$css: !0 },
        tonalDestructive: { backgroundColor: "x1cmk2g", $$css: !0 },
        tonalPrimary: { backgroundColor: "xnhoea0", $$css: !0 },
      },
      g = {
        "on-media": {
          iconColor: "secondary-button",
          spinnerColor: "secondary-button",
          textColor: "secondaryButtonText",
        },
        primary: {
          iconColor: "primary-button",
          spinnerColor: "primary-button",
          textColor: "primaryButtonText",
        },
        primaryDestructive: {
          iconColor: "primary-destructive-button",
          spinnerColor: "on-filled-destructive-button",
          textColor: "primaryButtonText",
        },
        primaryOnMedia: {
          iconColor: "primary-on-media-button",
          spinnerColor: "primary-on-media-button",
          textColor: "primaryOnMediaButtonText",
        },
        secondary: {
          iconColor: "secondary-button",
          spinnerColor: "secondary-button",
          textColor: "secondaryButtonText",
        },
        secondaryDestructive: {
          iconColor: "secondary-destructive-button",
          spinnerColor: "on-outline-destructive-button",
          textColor: "secondaryDestructiveButtonText",
        },
        secondaryEmphasized: {
          iconColor: "blueLink",
          spinnerColor: "blueLink",
          textColor: "blueLink",
        },
        secondaryExperimental: {
          iconColor: "secondary-button",
          spinnerColor: "secondary-button",
          textColor: "secondaryButtonTextExperimental",
        },
        secondaryOnMedia: {
          iconColor: "secondary-on-media-button",
          spinnerColor: "secondary-on-media-button",
          textColor: "secondaryOnMediaButtonText",
        },
        secondaryOutline: {
          iconColor: "secondary-button",
          spinnerColor: "on-outline-secondary-button",
          textColor: "secondaryButtonText",
        },
        text: {
          iconColor: "primary",
          spinnerColor: "on-ghost-primary-button",
          textColor: "primaryText",
        },
        textEmphasized: {
          iconColor: "blueLink",
          spinnerColor: "on-ghost-secondary-button",
          textColor: "blueLink",
        },
        tonalDestructive: {
          iconColor: "tonal-destructive-button",
          spinnerColor: "on-tonal-destructive-button",
          textColor: "tonalDestructiveButtonText",
        },
        tonalPrimary: {
          iconColor: "tonal-primary-button",
          spinnerColor: "on-tonal-primary-button",
          textColor: "tonalPrimaryButtonText",
        },
      },
      h = {
        large: "primaryLabel",
        medium: "secondaryLabel",
        small: "tertiaryLabel",
      };
    function y(t) {
      var n = o("react-compiler-runtime").c(70),
        a = t.addOnEnd,
        i = t.addOnStart,
        l = t.contentXstyle,
        s = t.disabled,
        c = t.label,
        d = t.labelIsHidden,
        y = t.linkProps,
        C = t.loading,
        b = t.onPress,
        v = t.ref,
        S = t.resetFocusAfterLoading,
        R = t.size,
        L = t.testid,
        E = t.tooltip,
        k = t.tooltipPosition,
        I = t.type,
        T = t.widthMode,
        D = t.xstyle,
        x = babelHelpers.objectWithoutPropertiesLoose(t, e),
        $ = s === void 0 ? !1 : s,
        P = d === void 0 ? !1 : d,
        N = C === void 0 ? !1 : C,
        M = S === void 0 ? !1 : S,
        w = R === void 0 ? "medium" : R,
        A = I === void 0 ? "primary" : I,
        F = T === void 0 ? "flexible" : T,
        O = (function (e) {
          return Array.isArray(e) &&
            e.length === 2 &&
            e[0] === !0 &&
            e[1] === "secondary"
            ? "secondaryExperimental"
            : Array.isArray(e) &&
                e.length === 2 &&
                e[0] === !1 &&
                e[1] === "tonalPrimary"
              ? "secondary"
              : Array.isArray(e) &&
                  e.length === 2 &&
                  e[0] === !1 &&
                  e[1] === "tonalDestructive"
                ? "secondaryDestructive"
                : A;
        })([_, A]),
        B = g[O],
        W = B.iconColor,
        q = B.spinnerColor,
        U = B.textColor,
        V;
      n[0] !== q
        ? ((V = function (t) {
            return Array.isArray(t) &&
              t.length === 2 &&
              t[0] === !1 &&
              t[1] === "primaryDestructive"
              ? "primary-button"
              : (Array.isArray(t) &&
                    t.length === 2 &&
                    t[0] === !1 &&
                    t[1] === "secondaryDestructive") ||
                  (Array.isArray(t) &&
                    t.length === 2 &&
                    t[0] === !1 &&
                    t[1] === "secondaryOutline") ||
                  (Array.isArray(t) &&
                    t.length === 2 &&
                    t[0] === !1 &&
                    t[1] === "text")
                ? "secondary-button"
                : Array.isArray(t) &&
                    t.length === 2 &&
                    t[0] === !1 &&
                    t[1] === "textEmphasized"
                  ? "blueLink"
                  : (Array.isArray(t) &&
                        t.length === 2 &&
                        t[0] === !1 &&
                        t[1] === "tonalDestructive") ||
                      (Array.isArray(t) &&
                        t.length === 2 &&
                        t[0] === !1 &&
                        t[1] === "tonalPrimary")
                    ? "secondary-button"
                    : q;
          }),
          (n[0] = q),
          (n[1] = V))
        : (V = n[1]);
      var H;
      n[2] !== A ? ((H = [_, A]), (n[2] = A), (n[3] = H)) : (H = n[3]);
      var G = V(H),
        z = { color: W, size: 16 },
        j = { color: G, size: 24 },
        K = h[w],
        Q = p(!1),
        X = Q[0],
        Y = Q[1],
        J = m(null),
        Z = r("useMergeRefs")(v, J),
        ee = o("useCDSButtonSpinner").useCDSButtonSpinner(J, N, M),
        te = ee.handleContainerBlur,
        ne = ee.handleContainerFocus,
        re = ee.spinnerRef,
        oe =
          a != null
            ? u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  { 0: {}, 1: { className: "xg01cxk" } }[!!N << 0],
                  { children: a({ iconProps: z, spinnerProps: j }) },
                ),
              )
            : null,
        ae =
          i != null
            ? u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  { 0: {}, 1: { className: "xg01cxk" } }[!!N << 0],
                  { children: i({ iconProps: z }) },
                ),
              )
            : null,
        ie = function () {
          return x["aria-label"] != null ? x["aria-label"] : P ? c : void 0;
        },
        le;
      e: {
        if (ae != null && c != null && !P) {
          if (w === "small") {
            le = f.sizeSmallWithAddOnStart;
            break e;
          }
          if (w === "medium") {
            le = f.sizeMediumWithAddOnStart;
            break e;
          }
          if (w === "large") {
            le = f.sizeLargeWithAddOnStart;
            break e;
          }
        }
        le = void 0;
      }
      var se = le,
        ue;
      e: {
        if (oe != null) {
          if (w === "small") {
            ue = f.sizeSmallWithAddOnEnd;
            break e;
          }
          if (w === "medium") {
            ue = f.sizeMediumWithAddOnEnd;
            break e;
          }
          if (w === "large") {
            ue = f.sizeLargeWithAddOnEnd;
            break e;
          }
        }
        ue = void 0;
      }
      var ce = ue,
        de;
      n[4] !== F
        ? ((de = {
            0: { className: "x3nfvp2 x1n2onr6" },
            2: { className: "x3nfvp2 x1n2onr6 xh8yej3" },
            1: { className: "x3nfvp2 x1n2onr6 x14atkfc" },
            3: { className: "x3nfvp2 x1n2onr6 x14atkfc" },
          }[((F === "flexible") << 1) | ((F === "constrained") << 0)]),
          (n[4] = F),
          (n[5] = de))
        : (de = n[5]);
      var me;
      n[6] !== N || n[7] !== w || n[8] !== G || n[9] !== re
        ? ((me = N
            ? u.jsx(r("XMDSButtonSpinnerContainer.react"), {
                children: u.jsx(r("XMDSSpinner.react"), {
                  color: G,
                  ref: re,
                  size: w === "large" ? 24 : 16,
                }),
              })
            : null),
          (n[6] = N),
          (n[7] = w),
          (n[8] = G),
          (n[9] = re),
          (n[10] = me))
        : (me = n[10]);
      var pe = r("BaseStyledButton.react"),
        _e = ie(),
        fe;
      n[11] !== c || n[12] !== P || n[13] !== N || n[14] !== U || n[15] !== K
        ? ((fe =
            c && !P
              ? u.jsx(r("XMDSText.react"), {
                  color: U,
                  maxLines: 1,
                  textStyle: K,
                  xstyle: N && f.textWhileLoading,
                  children: c,
                })
              : null),
          (n[11] = c),
          (n[12] = P),
          (n[13] = N),
          (n[14] = U),
          (n[15] = K),
          (n[16] = fe))
        : (fe = n[16]);
      var ge = A === "primary" && f.primary,
        he = A === "secondary" && (_ ? f.secondaryExperimental : f.secondary),
        ye = A === "primaryDestructive" && f.primaryDestructive,
        Ce = A === "primaryOnMedia" && f.primaryOnMedia,
        be = A === "secondaryDestructive" && f.secondaryDestructive,
        ve = A === "secondaryEmphasized" && f.secondaryEmphasized,
        Se = A === "secondaryOnMedia" && f.secondaryOnMedia,
        Re = A === "secondaryOutline" && f.secondaryOutline,
        Le = A === "on-media" && f.onMedia,
        Ee = A === "tonalPrimary" && (_ ? f.tonalPrimary : f.secondary),
        ke =
          A === "tonalDestructive" &&
          (_ ? f.tonalDestructive : f.secondaryDestructive),
        Ie = A === "text" && f.text,
        Te = A === "textEmphasized" && f.text,
        De = w === "small" && f.sizeSmall,
        xe = w === "medium" && f.sizeMedium,
        $e = w === "large" && f.sizeLarge,
        Pe = X && f.pressed,
        Ne = $ && f.disabled,
        Me;
      n[17] !== ce ||
      n[18] !== se ||
      n[19] !== l ||
      n[20] !== ge ||
      n[21] !== he ||
      n[22] !== ye ||
      n[23] !== Ce ||
      n[24] !== be ||
      n[25] !== ve ||
      n[26] !== Se ||
      n[27] !== Re ||
      n[28] !== Le ||
      n[29] !== Ee ||
      n[30] !== ke ||
      n[31] !== Ie ||
      n[32] !== Te ||
      n[33] !== De ||
      n[34] !== xe ||
      n[35] !== $e ||
      n[36] !== Pe ||
      n[37] !== Ne
        ? ((Me = [
            f.button,
            ge,
            he,
            ye,
            Ce,
            be,
            ve,
            Se,
            Re,
            Le,
            Ee,
            ke,
            Ie,
            Te,
            De,
            xe,
            $e,
            Pe,
            Ne,
            se,
            ce,
            l,
          ]),
          (n[17] = ce),
          (n[18] = se),
          (n[19] = l),
          (n[20] = ge),
          (n[21] = he),
          (n[22] = ye),
          (n[23] = Ce),
          (n[24] = be),
          (n[25] = ve),
          (n[26] = Se),
          (n[27] = Re),
          (n[28] = Le),
          (n[29] = Ee),
          (n[30] = ke),
          (n[31] = Ie),
          (n[32] = Te),
          (n[33] = De),
          (n[34] = xe),
          (n[35] = $e),
          (n[36] = Pe),
          (n[37] = Ne),
          (n[38] = Me))
        : (Me = n[38]);
      var we = $ || N,
        Ae,
        Fe;
      n[39] !== Y
        ? ((Ae = function () {
            return Y(!0);
          }),
          (Fe = function () {
            return Y(!1);
          }),
          (n[39] = Y),
          (n[40] = Ae),
          (n[41] = Fe))
        : ((Ae = n[40]), (Fe = n[41]));
      var Oe = y != null ? "link" : "button",
        Be;
      n[42] !== pe ||
      n[43] !== oe ||
      n[44] !== ae ||
      n[45] !== x ||
      n[46] !== y ||
      n[47] !== Z ||
      n[48] !== b ||
      n[49] !== w ||
      n[50] !== _e ||
      n[51] !== fe ||
      n[52] !== Me ||
      n[53] !== we ||
      n[54] !== Ae ||
      n[55] !== Fe ||
      n[56] !== Oe ||
      n[57] !== L ||
      n[58] !== D
        ? ((Be = u.jsx(
            pe,
            babelHelpers.extends({}, x, {
              addOnEnd: oe,
              addOnStart: ae,
              "aria-label": _e,
              content: fe,
              contentXstyle: Me,
              disabled: we,
              linkProps: y,
              onPress: b,
              onPressIn: Ae,
              onPressOut: Fe,
              overlayPressedStyle: f.pressed,
              padding: "normal",
              ref: Z,
              role: Oe,
              size: w,
              testid: void 0,
              xstyle: D,
            }),
          )),
          (n[42] = pe),
          (n[43] = oe),
          (n[44] = ae),
          (n[45] = x),
          (n[46] = y),
          (n[47] = Z),
          (n[48] = b),
          (n[49] = w),
          (n[50] = _e),
          (n[51] = fe),
          (n[52] = Me),
          (n[53] = we),
          (n[54] = Ae),
          (n[55] = Fe),
          (n[56] = Oe),
          (n[57] = L),
          (n[58] = D),
          (n[59] = Be))
        : (Be = n[59]);
      var We;
      n[60] !== te ||
      n[61] !== ne ||
      n[62] !== de ||
      n[63] !== me ||
      n[64] !== Be
        ? ((We = u.jsxs(
            "div",
            babelHelpers.extends({}, de, {
              onBlur: te,
              onFocus: ne,
              children: [me, Be],
            }),
          )),
          (n[60] = te),
          (n[61] = ne),
          (n[62] = de),
          (n[63] = me),
          (n[64] = Be),
          (n[65] = We))
        : (We = n[65]);
      var qe = We;
      if (E != null) {
        var Ue;
        return (
          n[66] !== qe || n[67] !== E || n[68] !== k
            ? ((Ue = u.jsx(r("XMDSTooltip.react"), {
                position: k,
                tooltip: E,
                children: qe,
              })),
              (n[66] = qe),
              (n[67] = E),
              (n[68] = k),
              (n[69] = Ue))
            : (Ue = n[69]),
          Ue
        );
      }
      return qe;
    }
    l.default = y;
  },
  98,
);
