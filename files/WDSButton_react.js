__d(
  "WDSButton.react",
  [
    "BaseButtonV3.react",
    "WDSIconIcArrowDropDown.react",
    "WDSSpinner.react",
    "WDSText.react",
    "cr:10098",
    "getPlatformByGK",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = r("react")),
      d = (s || (s = o("react"))).useState,
      m = {
        loading: { cursor: "xky4qsq", $$css: !0 },
        disabled: { cursor: "x1h6gzvc", $$css: !0 },
      },
      p = {
        base: { transform: "x3oybdh", transition: "x6nhntm", $$css: !0 },
        pressableHovered: { transform: "x89bh2v", $$css: !0 },
        pressablePressed: { transform: "xfimr68", $$css: !0 },
      },
      _ = {
        widthModeConstrained: { width: "xezivpi", $$css: !0 },
        widthModeFit: { width: "xeq5yr9", $$css: !0 },
        widthModeFlexible: { boxSizing: "x9f619", width: "xh8yej3", $$css: !0 },
        widthModeNoShrink: { flexShrink: "x2lah0s", $$css: !0 },
      },
      f = {
        constrained: _.widthModeConstrained,
        fit: _.widthModeFit,
        flexible: _.widthModeFlexible,
      },
      g = {
        mediaLight: {
          ":focus-visible_outlineColor": "x41cuts",
          ":focus-visible_outlineStyle": "x9v5kkp",
          ":focus-visible_outlineOffset": "xyu9ima",
          ":focus-visible_outlineWidth": "x100v1rl",
          $$css: !0,
        },
        mediaDark: {
          ":focus-visible_outlineColor": "x3ce2fp",
          ":focus-visible_outlineStyle": "x9v5kkp",
          ":focus-visible_outlineOffset": "xyu9ima",
          ":focus-visible_outlineWidth": "x100v1rl",
          $$css: !0,
        },
        default: {
          ":focus-visible_outlineColor": "xtnn1bt",
          ":focus-visible_outlineStyle": "x9v5kkp",
          ":focus-visible_outlineOffset": "xmw7ebm",
          ":focus-visible_outlineWidth": "xrdum7p",
          $$css: !0,
        },
      };
    function h(t) {
      var a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.children,
        u = l.disabled,
        h = l.Icon,
        y = l.label,
        C = l.loading,
        b = l.size,
        v = b === void 0 ? "medium" : b,
        S = l.type,
        R = S === void 0 ? "default" : S,
        L = l.widthMode,
        E = L === void 0 ? "fit" : L,
        k = l.variant,
        I = k === void 0 ? "filled" : k,
        T = l.directional,
        D = l.linkProps,
        x = l.id,
        $ = l.onFocusIn,
        P = l.onFocusOut,
        N = l.onPress,
        M = l.onPressIn,
        w = l.onPressOut,
        A = l.testid,
        F = l.xstyle,
        O = l.platform,
        B = O === void 0 ? o("getPlatformByGK").WDS_PLATFORM : O,
        W = l.tabOrder,
        q = l["aria-disabled"],
        U = l["aria-expanded"],
        V = l["aria-haspopup"],
        H = l["aria-pressed"],
        G = l["aria-label"],
        z = B != null ? B : o("getPlatformByGK").WDS_PLATFORM,
        j =
          l.showEndDropdownIcon === !0 &&
          (z === "windowsWeb" || z === "macWeb"),
        K = d(!1),
        Q = K[0],
        X = K[1],
        Y = d(!1),
        J = Y[0],
        Z = Y[1];
      function ee(e) {
        C === !0 || u === !0 || (Z(!0), l.onHoverIn == null || l.onHoverIn(e));
      }
      function te(e) {
        C === !0 ||
          u === !0 ||
          (Z(!1), l.onHoverOut == null || l.onHoverOut(e));
      }
      function ne(e) {
        C === !0 || u === !0 || (X(!0), M == null || M(e));
      }
      function re(e) {
        C === !0 || u === !0 || (X(!1), w == null || w(e));
      }
      function oe(e) {
        C !== !0 && (N == null || N(e));
      }
      var ae = (D == null ? void 0 : D.href) != null,
        ie = h != null,
        le = j === !0,
        se = y != null,
        ue = n("cr:10098").getButtonIconSizeAndStyle(v, ie && !se),
        ce = ue[0],
        de = ue[1],
        me;
      h != null &&
        (me = c.jsx(h, { height: ce, width: ce, xstyle: de, directional: T }));
      var pe;
      j === !0 &&
        (pe = c.jsx(r("WDSIconIcArrowDropDown.react"), {
          height: ce,
          width: ce,
          xstyle: de,
          directional: T,
        }));
      var _e = n("cr:10098").getButtonColorStyles(
          I,
          R,
          ie || C === !0,
          se,
          u === !0,
          C === !0,
          z,
        ),
        fe = g,
        ge;
      R === "media"
        ? (ge = I === "filled" ? fe.mediaLight : fe.mediaDark)
        : (ge = fe.default);
      var he = [ge, C === !0 && m.loading, u === !0 && m.disabled],
        ye =
          I === "filled" && C !== !0
            ? [_e.xstyleConfig.pressableHovered, p.pressableHovered]
            : _e.xstyleConfig.pressableHovered,
        Ce =
          I === "borderless"
            ? [
                _e.xstyleConfig.pressable,
                he,
                E !== "flexible" && _.widthModeNoShrink,
              ]
            : [
                _e.xstyleConfig.pressable,
                he,
                p.base,
                E !== "flexible" && _.widthModeNoShrink,
              ],
        be = {
          xstyleConfig: {
            pressable: Ce,
            pressableDisabled: _e.xstyleConfig.pressableDisabled,
            pressableFocused: _e.xstyleConfig.pressableFocused,
            pressableHovered: ye,
            pressablePressed: [
              _e.xstyleConfig.pressablePressed,
              p.pressablePressed,
            ],
          },
        },
        ve = se
          ? c.jsx(r("WDSText.react"), {
              type: "Body2Emphasized",
              selectable: !1,
              maxLines: 1,
              platform: z,
              colorName: n("cr:10098").getButtonFontColor(I, R, u === !0, z),
              children: y,
            })
          : null,
        Se = n("cr:10098").getButtonSizeStyles(v, ie || C === !0, le, se, I, z),
        Re = {
          ref: i,
          id: x,
          testid: A,
          sizeVariant: {
            xstyleConfig: babelHelpers.extends({}, Se, {
              content: le ? [Se.content, Se.addOnEnd, F] : [Se.content, F],
              width: (a = f[E]) != null ? a : null,
            }),
          },
          onPointerDown: ne,
          onPointerUp: re,
          onFocusIn: $,
          onFocusOut: P,
          addOnStart:
            C === !0
              ? c.jsx(r("WDSSpinner.react"), { size: ce, platform: z })
              : me,
          addOnEnd: pe,
          onMouseEnter: ee,
          onMouseLeave: te,
          variant: be,
          focusable: !l.disabled,
        };
      return ae && D != null
        ? c.jsxs(
            r("BaseButtonV3.react"),
            babelHelpers.extends({}, Re, D, {
              onClick: oe,
              "data-tab": W,
              hovered: J,
              children: [ve, s],
            }),
          )
        : c.jsxs(
            r("BaseButtonV3.react"),
            babelHelpers.extends({}, Re, {
              "data-tab": W,
              onClick: oe,
              "aria-disabled": q,
              "aria-expanded": U,
              "aria-haspopup": V,
              "aria-pressed": H,
              "aria-label": G,
              disabled: u === !0,
              hovered: J,
              pressed: Q,
              children: [ve, s],
            }),
          );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
