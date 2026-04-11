__d(
  "WDSChip.react",
  [
    "BaseButtonV3.react",
    "WDSChipConfig",
    "WDSIconIcArrowDropDown.react",
    "WDSText.react",
    "WDSTooltip.react",
    "getPlatformByGK",
    "intlSummarizeNumber",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "Icon",
        "label",
        "size",
        "directional",
        "iconOnly",
        "isSelected",
        "isNeutral",
        "onPress",
        "onPressIn",
        "onPressOut",
        "onHoverIn",
        "onHoverOut",
        "onFocus",
        "onBlur",
        "isDisabled",
        "focusable",
        "id",
        "testid",
        "smbLabelsContent",
        "showEndDropdownIcon",
        "endNumber",
        "truncateText",
        "platform",
        "tabOrder",
        "role",
        "aria-selected",
        "aria-pressed",
      ],
      u,
      c,
      d = c || (c = r("react")),
      m = (u || (u = o("react"))).useState,
      p = { truncatedText: { maxWidth: "x1qh4rir", $$css: !0 } };
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.Icon,
        l = a.label,
        u = a.size,
        c = u === void 0 ? "default" : u,
        _ = a.directional,
        f = _ === void 0 ? !0 : _,
        g = a.iconOnly,
        h = g === void 0 ? !1 : g,
        y = a.isSelected,
        C = y === void 0 ? !1 : y,
        b = a.isNeutral,
        v = b === void 0 ? !1 : b,
        S = a.onPress,
        R = a.onPressIn,
        L = a.onPressOut,
        E = a.onHoverIn,
        k = a.onHoverOut,
        I = a.onFocus,
        T = a.onBlur,
        D = a.isDisabled,
        x = D === void 0 ? !1 : D,
        $ = a.focusable,
        P = $ === void 0 ? !0 : $,
        N = a.id,
        M = a.testid,
        w = a.smbLabelsContent,
        A = a.showEndDropdownIcon,
        F = a.endNumber,
        O = a.truncateText,
        B = O === void 0 ? !1 : O,
        W = a.platform,
        q = W === void 0 ? o("getPlatformByGK").WDS_PLATFORM : W,
        U = a.tabOrder,
        V = a.role,
        H = a["aria-selected"],
        G = a["aria-pressed"],
        z = babelHelpers.objectWithoutPropertiesLoose(a, s),
        j = q != null ? q : o("getPlatformByGK").WDS_PLATFORM,
        K = m(!1),
        Q = K[0],
        X = K[1],
        Y = m(!1),
        J = Y[0],
        Z = Y[1];
      function ee(e) {
        x !== !0 && (Z(!0), a.onHoverIn == null || a.onHoverIn(e));
      }
      function te(e) {
        x !== !0 && (Z(!1), a.onHoverOut == null || a.onHoverOut(e));
      }
      function ne(e) {
        x !== !0 && (X(!0), a.onPressIn == null || a.onPressIn(e));
      }
      function re(e) {
        x !== !0 && (X(!1), a.onPressOut == null || a.onPressOut(e));
      }
      function oe(e) {
        S == null || S(e);
      }
      var ae = o("WDSChipConfig").getChipIconSizeAndStyle(j),
        ie = ae[0],
        le = ae[1],
        se;
      i != null &&
        (se = d.jsx(i, { height: ie, width: ie, xstyle: le, directional: f }));
      var ue;
      (A === !0 &&
        (ue = d.jsx(r("WDSIconIcArrowDropDown.react"), {
          height: ie,
          width: ie,
          xstyle: le,
          directional: f,
        })),
        F != null &&
          (ue = d.jsx(r("WDSText.react"), {
            type: "Body3Emphasized",
            colorName: o("WDSChipConfig").getButtonFontColor(C, v, x),
            selectable: !1,
            children: r("intlSummarizeNumber")(F),
          })));
      var ce;
      w
        ? (ce = w)
        : h && se
          ? (ce = se)
          : (ce = d.jsx(r("WDSText.react"), {
              maxLines: 1,
              xstyle: B && p.truncatedText,
              type: "Body2Emphasized",
              colorName: o("WDSChipConfig").getButtonFontColor(C, v, x),
              selectable: !1,
              children: l,
            }));
      var de = A != null;
      return d.jsx(r("WDSTooltip.react"), {
        label: l,
        disabled: !h,
        children: d.jsx(
          r("BaseButtonV3.react"),
          babelHelpers.extends({}, z, {
            role: V,
            "aria-pressed": (function () {
              return G != null
                ? G
                : H === !0 || H === "true"
                  ? !0
                  : H === !1 || H === "false"
                    ? !1
                    : C;
            })(),
            disabled: x || void 0,
            variant: o("WDSChipConfig").getButtonColorStyles(C, v),
            sizeVariant: {
              xstyleConfig: o("WDSChipConfig").getButtonSizeStyles(
                c,
                se != null,
                ue != null && de,
                ue != null && !de,
                h,
                j,
              ),
            },
            addOnStart: h ? void 0 : se,
            addOnEnd: h ? void 0 : ue,
            ref: n,
            focusable: P && !x,
            onClick: oe,
            onPointerDown: ne,
            onPointerUp: re,
            onMouseEnter: ee,
            onMouseLeave: te,
            onFocus: I,
            onBlur: T,
            "data-tab": U,
            hovered: J && !Q,
            pressed: Q,
            id: N,
            testid: void 0,
            children: ce,
          }),
        ),
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
