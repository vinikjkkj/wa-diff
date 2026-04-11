__d(
  "FDSCircleButton.react",
  [
    "CometPressable.react",
    "ComponentWithDataAttributes.react",
    "FDSActionPropPendingStyles.stylex",
    "FDSIcon.react",
    "MetaConfig",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = [
        "color_DEPRECATED",
        "dataAttributes",
        "disabled",
        "dynamicHoverTiltAngle",
        "dynamicHoverTranslationPercent",
        "focusable",
        "icon",
        "iconRatio",
        "linkProps",
        "onFocusIn",
        "onFocusOut",
        "onHoverIn",
        "onHoverOut",
        "onPress",
        "onPressAction",
        "onPressIn",
        "onPressOut",
        "overlayHoveredStyle",
        "showDynamicHover",
        "size",
        "testid",
        "testOnly_pressed",
        "type",
        "type_DEPRECATED",
      ],
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useCallback,
      f = p.useOptimistic,
      g = r("MetaConfig")._("338"),
      h = {
        pressableOverlayPressed: { backgroundColor: "x1lxk4cn", $$css: !0 },
        root: {
          alignItems: "x6s0dn4",
          borderStartStartRadius: "x1iwo8zk",
          borderStartEndRadius: "x1033uif",
          borderEndEndRadius: "x179ill4",
          borderEndStartRadius: "x1b60jn0",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          boxSizing: "x9f619",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x1c1uobl",
          position: "x1n2onr6",
          $$css: !0,
        },
        shimmerOverlayCircular: {
          borderStartStartRadius: "x1iwo8zk",
          borderStartEndRadius: "x1033uif",
          borderEndEndRadius: "x179ill4",
          borderEndStartRadius: "x1b60jn0",
          $$css: !0,
        },
      },
      y = {
        24: { height: "xxk0z11", width: "xvy4d1p", $$css: !0 },
        28: { height: "x1fgtraw", width: "xgd8bvy", $$css: !0 },
        32: { height: "x10w6t97", width: "x1td3qas", $$css: !0 },
        36: { height: "xc9qbxq", width: "x14qfxbe", $$css: !0 },
        40: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        48: { height: "xsdox4t", width: "x1useyqa", $$css: !0 },
      },
      C = {
        "dark-overlay": {
          backgroundColor: "x18l40ae",
          color: "x14ctfv",
          $$css: !0,
        },
        deemphasized: { backgroundColor: "xjbqb8w", $$css: !0 },
        "deemphasized-overlay": { backgroundColor: "x1hr4nm9", $$css: !0 },
        normal: { backgroundColor: "x1qhmfi1", $$css: !0 },
        overlay: {
          backgroundColor: "x9bbmet",
          boxShadow: "x10f5nwc",
          color: "xi81zsa",
          $$css: !0,
        },
        "overlay-floating": {
          backgroundColor: "x1l31dnx",
          boxShadow: "x1qeybcx",
          $$css: !0,
        },
        "overlay-raised": {
          backgroundColor: "x9bbmet",
          boxShadow: "x1k54i6l",
          color: "xi81zsa",
          $$css: !0,
        },
        "primary-background-overlay": { backgroundColor: "xtvsq51", $$css: !0 },
      },
      b = {
        "dark-overlay": { backgroundColor: "x18l40ae", $$css: !0 },
        deemphasized: { backgroundColor: "xjbqb8w", $$css: !0 },
        "deemphasized-overlay": { backgroundColor: "x1f2gare", $$css: !0 },
        normal: { backgroundColor: "xwcfey6", $$css: !0 },
        overlay: {
          backgroundColor: "x1ahlmzr",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          boxShadow: "xxnfx33",
          color: "x1dntmbh",
          $$css: !0,
        },
        "primary-background-overlay": { backgroundColor: "xtvsq51", $$css: !0 },
      },
      v = {
        default: { backgroundColor: "x1qhmfi1", $$css: !0 },
        disabled: { backgroundColor: "xwcfey6", $$css: !0 },
        "primary-deemphasized": { backgroundColor: "x1hr4nm9", $$css: !0 },
        "primary-on-color": { backgroundColor: "x1l1wi26", $$css: !0 },
        "primary-on-media": { backgroundColor: "xyyilqk", $$css: !0 },
        "secondary-on-color": { backgroundColor: "x1j2iz3o", $$css: !0 },
        "secondary-on-media": { backgroundColor: "x18fn2jl", $$css: !0 },
      },
      S = {
        default: { backgroundColor: v.default, iconColor: "primary" },
        disabled: { backgroundColor: v.disabled, iconColor: "disabled" },
        "primary-deemphasized": {
          backgroundColor: v["primary-deemphasized"],
          iconColor: "primaryDeemphasizedButtonIcon",
        },
        "primary-on-color": {
          backgroundColor: v["primary-on-color"],
          iconColor: "primaryButtonIconOnColor",
        },
        "primary-on-media": {
          backgroundColor: v["primary-on-media"],
          iconColor: "primaryButtonIconOnMedia",
        },
        "secondary-on-color": {
          backgroundColor: v["secondary-on-color"],
          iconColor: "secondaryIconOnColor",
        },
        "secondary-on-media": {
          backgroundColor: v["secondary-on-media"],
          iconColor: "secondaryButtonIconOnMedia",
        },
      },
      R =
        ((u = {}),
        (u[24] = 12),
        (u[28] = 16),
        (u[32] = 16),
        (u[36] = 20),
        (u[40] = 20),
        (u[48] = 24),
        u),
      L =
        ((c = {}),
        (c[24] = 20),
        (c[28] = 20),
        (c[32] = 24),
        (c[36] = 28),
        (c[40] = 32),
        (c[48] = 32),
        c);
    function E(t) {
      var a = o("react-compiler-runtime").c(81),
        i,
        l;
      a[0] !== t
        ? ((l = t.ref),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l))
        : ((i = a[1]), (l = a[2]));
      var u,
        c,
        d,
        p,
        _,
        C,
        b,
        v,
        S,
        E,
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
        H;
      if (a[3] !== i) {
        var G = i;
        ((c = G.color_DEPRECATED),
          (d = G.dataAttributes),
          (W = G.disabled),
          (p = G.dynamicHoverTiltAngle),
          (_ = G.dynamicHoverTranslationPercent),
          (C = G.focusable),
          (b = G.icon),
          (v = G.iconRatio),
          (S = G.linkProps),
          (E = G.onFocusIn),
          (x = G.onFocusOut),
          ($ = G.onHoverIn),
          (P = G.onHoverOut),
          (N = G.onPress),
          (M = G.onPressAction),
          (w = G.onPressIn),
          (A = G.onPressOut),
          (F = G.overlayHoveredStyle),
          (O = G.showDynamicHover),
          (B = G.size),
          (V = G.testid),
          (U = G.testOnly_pressed),
          (H = G.type),
          (q = G.type_DEPRECATED),
          (u = babelHelpers.objectWithoutPropertiesLoose(G, s)),
          (a[3] = i),
          (a[4] = u),
          (a[5] = c),
          (a[6] = d),
          (a[7] = p),
          (a[8] = _),
          (a[9] = C),
          (a[10] = b),
          (a[11] = v),
          (a[12] = S),
          (a[13] = E),
          (a[14] = x),
          (a[15] = $),
          (a[16] = P),
          (a[17] = N),
          (a[18] = M),
          (a[19] = w),
          (a[20] = A),
          (a[21] = F),
          (a[22] = O),
          (a[23] = B),
          (a[24] = W),
          (a[25] = q),
          (a[26] = U),
          (a[27] = V),
          (a[28] = H));
      } else
        ((u = a[4]),
          (c = a[5]),
          (d = a[6]),
          (p = a[7]),
          (_ = a[8]),
          (C = a[9]),
          (b = a[10]),
          (v = a[11]),
          (S = a[12]),
          (E = a[13]),
          (x = a[14]),
          ($ = a[15]),
          (P = a[16]),
          (N = a[17]),
          (M = a[18]),
          (w = a[19]),
          (A = a[20]),
          (F = a[21]),
          (O = a[22]),
          (B = a[23]),
          (W = a[24]),
          (q = a[25]),
          (U = a[26]),
          (V = a[27]),
          (H = a[28]));
      var z = W === void 0 ? !1 : W,
        j = q === void 0 ? "normal" : q,
        K = f(!1),
        Q = K[0],
        X = K[1],
        Y;
      a[29] !== M
        ? ((Y = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              M != null && (X(!0), yield M());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[29] = M),
          (a[30] = Y))
        : (Y = a[30]);
      var J = Y,
        Z = z === !0 || Q,
        ee;
      a[31] !== d
        ? ((ee =
            d != null
              ? Object.keys(d).reduce(function (e, t) {
                  return (e != null && t != null && (e["data-" + t] = d[t]), e);
                }, {})
              : null),
          (a[31] = d),
          (a[32] = ee))
        : (ee = a[32]);
      var te = ee,
        ne = g ? Z : void 0,
        re = g ? void 0 : Z,
        oe = g && z ? void 0 : N,
        ae = M != null ? J : void 0,
        ie = g && z ? void 0 : w,
        le = g && z ? void 0 : A,
        se;
      a[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((se = { scale: 0.96 }), (a[33] = se))
        : (se = a[33]);
      var ue = y[B],
        ce;
      a[34] !== Z || a[35] !== H || a[36] !== j
        ? ((ce = H != null && r("MetaConfig")._("179") ? D(Z, H) : T(Z, j)),
          (a[34] = Z),
          (a[35] = H),
          (a[36] = j),
          (a[37] = ce))
        : (ce = a[37]);
      var de;
      a[38] !== ue || a[39] !== ce
        ? ((de = [h.root, ue, ce]), (a[38] = ue), (a[39] = ce), (a[40] = de))
        : (de = a[40]);
      var me;
      a[41] !== c || a[42] !== Z || a[43] !== H || a[44] !== j
        ? ((me = H != null && r("MetaConfig")._("179") ? I(Z, H) : k(Z, c, j)),
          (a[41] = c),
          (a[42] = Z),
          (a[43] = H),
          (a[44] = j),
          (a[45] = me))
        : (me = a[45]);
      var pe = v === "large" ? L[B] : R[B],
        _e;
      a[46] !== b || a[47] !== me || a[48] !== pe
        ? ((_e = m.jsx(r("FDSIcon.react"), {
            color: me,
            icon: b,
            isDecorative: !0,
            size: pe,
          })),
          (a[46] = b),
          (a[47] = me),
          (a[48] = pe),
          (a[49] = _e))
        : (_e = a[49]);
      var fe;
      a[50] !== u ||
      a[51] !== p ||
      a[52] !== _ ||
      a[53] !== C ||
      a[54] !== S ||
      a[55] !== E ||
      a[56] !== x ||
      a[57] !== $ ||
      a[58] !== P ||
      a[59] !== F ||
      a[60] !== l ||
      a[61] !== O ||
      a[62] !== le ||
      a[63] !== de ||
      a[64] !== _e ||
      a[65] !== ne ||
      a[66] !== re ||
      a[67] !== oe ||
      a[68] !== ae ||
      a[69] !== ie ||
      a[70] !== U ||
      a[71] !== V
        ? ((fe = m.jsx(
            r("CometPressable.react"),
            babelHelpers.extends({}, u, {
              "aria-disabled": ne,
              disabled: re,
              dynamicHoverTiltAngle: p,
              dynamicHoverTranslationPercent: _,
              focusable: C,
              linkProps: S,
              onFocusIn: E,
              onFocusOut: x,
              onHoverIn: $,
              onHoverOut: P,
              onPress: oe,
              onPressAction: ae,
              onPressIn: ie,
              onPressOut: le,
              overlayHoveredStyle: F,
              overlayPressedStyle: h.pressableOverlayPressed,
              overlayRadius: "50%",
              pressedStyleValue: se,
              ref: l,
              showDynamicHover: O,
              testOnly_pressed: U,
              testid: void 0,
              xstyle: de,
              children: _e,
            }),
          )),
          (a[50] = u),
          (a[51] = p),
          (a[52] = _),
          (a[53] = C),
          (a[54] = S),
          (a[55] = E),
          (a[56] = x),
          (a[57] = $),
          (a[58] = P),
          (a[59] = F),
          (a[60] = l),
          (a[61] = O),
          (a[62] = le),
          (a[63] = de),
          (a[64] = _e),
          (a[65] = ne),
          (a[66] = re),
          (a[67] = oe),
          (a[68] = ae),
          (a[69] = ie),
          (a[70] = U),
          (a[71] = V),
          (a[72] = fe))
        : (fe = a[72]);
      var ge = fe,
        he;
      a[73] !== ge || a[74] !== Q || a[75] !== M
        ? ((he =
            M != null
              ? m.jsxs(o("react-strict-dom").html.div, {
                  style: o("FDSActionPropPendingStyles.stylex").styles
                    .pendingContainer,
                  children: [
                    ge,
                    Q &&
                      m.jsx(o("react-strict-dom").html.div, {
                        style: [
                          o("FDSActionPropPendingStyles.stylex").styles
                            .shimmerOverlay,
                          h.shimmerOverlayCircular,
                        ],
                      }),
                  ],
                })
              : ge),
          (a[73] = ge),
          (a[74] = Q),
          (a[75] = M),
          (a[76] = he))
        : (he = a[76]);
      var ye = he,
        Ce;
      return (
        a[77] !== d || a[78] !== te || a[79] !== ye
          ? ((Ce =
              te != null
                ? m.jsx(r("ComponentWithDataAttributes.react"), {
                    dataAttributes: d,
                    children: ye,
                  })
                : ye),
            (a[77] = d),
            (a[78] = te),
            (a[79] = ye),
            (a[80] = Ce))
          : (Ce = a[80]),
        Ce
      );
    }
    function k(e, t, n) {
      return e ? "disabled" : t != null ? t : x(n);
    }
    function I(e, t) {
      var n = e ? S.disabled : S[t];
      return n.iconColor;
    }
    function T(e, t) {
      return [
        C[t],
        e &&
          b[t === "overlay-raised" || t === "overlay-floating" ? "overlay" : t],
      ];
    }
    function D(e, t) {
      var n = e ? (t === "secondary-on-media" ? S[t] : S.disabled) : S[t];
      return n.backgroundColor;
    }
    function x(e) {
      switch (e) {
        case "primary-background-overlay":
        case "dark-overlay":
          return "white";
        case "deemphasized-overlay":
          return "highlight";
        default:
          return "primary";
      }
    }
    var $ = E;
    l.default = $;
  },
  98,
);
