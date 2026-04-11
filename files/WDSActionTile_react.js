__d(
  "WDSActionTile.react",
  [
    "WDSActionTileConfig",
    "WDSDisabledStateStyles",
    "WDSFocusStateStyles",
    "WDSText.react",
    "WDSTooltip.react",
    "react",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "Icon",
        "disabled",
        "id",
        "label",
        "onPress",
        "platform",
        "testid",
        "tooltip",
      ],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.Icon,
        l = a.disabled,
        u = a.id,
        d = a.label,
        m = a.onPress,
        p = a.platform,
        _ = a.testid,
        f = a.tooltip,
        g = babelHelpers.objectWithoutPropertiesLoose(a, s),
        h =
          p != null
            ? p
            : navigator.userAgent.includes("Mac OS X")
              ? "macWeb"
              : "windowsWeb",
        y = o("WDSActionTileConfig").getButtonSizeStyles(h),
        C = o("WDSActionTileConfig").getIconSizeAndStyle(),
        b = C[0],
        v = C[1],
        S = c.jsxs(o("react-strict-dom").html.div, {
          style: y.content,
          children: [
            c.jsx(i, { height: b, xstyle: v, width: b, colorName: "accent" }),
            c.jsx(o("react-strict-dom").html.div, {
              style: [o("WDSActionTileConfig").WDSActionTileStyles.label],
              children: c.jsx(r("WDSText.react"), {
                type: "Body2",
                maxLines: 1,
                colorName: "contentDefault",
                selectable: !1,
                children: d,
              }),
            }),
          ],
        });
      return c.jsx("div", {
        className: "xh8yej3 x18qnofl",
        children: c.jsx(r("WDSTooltip.react"), {
          label: f != null ? f : "",
          disabled: !l,
          children: c.jsx(
            o("react-strict-dom").html.button,
            babelHelpers.extends({}, g, {
              tabIndex: 0,
              onClick: l === !0 ? void 0 : m,
              ref: n,
              id: u,
              "data-testid": void 0,
              style: [
                y.container,
                o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
                l === !0 &&
                  o("WDSDisabledStateStyles").WDSDisabledStateStyles
                    .genericDisabledPersistent,
              ],
              children: S,
            }),
          ),
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
