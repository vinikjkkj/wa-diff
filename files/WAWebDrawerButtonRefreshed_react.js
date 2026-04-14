__d(
  "WAWebDrawerButtonRefreshed.react",
  [
    "WAWebFlex.react",
    "WAWebL10NFbtTypeUtils",
    "WAWebUISpacing",
    "WDSText.react",
    "react",
    "stylex",
    "useMergeRefs",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = {
        btn: {
          borderStartStartRadius: "x7zqoo0",
          borderStartEndRadius: "xt1g1te",
          borderEndEndRadius: "x1iz9ej4",
          borderEndStartRadius: "x1ga13z8",
          ":focus_backgroundColor": "x1aiwb2g",
          ":hover_backgroundColor": "x1n67ipk",
          $$css: !0,
        },
        container: { boxSizing: "x9f619", height: "x1x0gksc", $$css: !0 },
        iconContainer: { width: "x100vrsf", color: "xhslqc4", $$css: !0 },
        danger: { color: "xqnyt8g", $$css: !0 },
        disabled: {
          opacity: "xyd83as",
          cursor: "xt0e3qv",
          ":hover_backgroundColor": "x1rpam2w",
          ":focus_backgroundColor": "xlwr4kp",
          $$css: !0,
        },
        middleContainer: { $$css: !0 },
      };
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.ariaLabel,
        l = a.children,
        u = a.danger,
        m = a.disabled,
        p = a.icon,
        _ = a.onClick,
        f = a.testid,
        g = a.tooltip,
        h = r("useWAWebStaticButtonA11y")(_, { disabled: m }),
        y = h[0],
        C = h[1],
        b = r("useMergeRefs")(y, n),
        v = o("WAWebL10NFbtTypeUtils").isStringOrFbt(l) ? l : null,
        S = g != null ? g : v,
        R = i != null ? i : v,
        L = m !== !0 && u === !0,
        E = c.jsx(r("WDSText.react"), {
          type: "Body1",
          colorName: L ? "secondaryNegativeEmphasized" : "contentDefault",
          children: l,
        });
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          C,
          (s || (s = r("stylex"))).props(
            d.btn,
            m === !0 && d.disabled,
            o("WAWebUISpacing").uiMargin.horiz10,
          ),
          {
            "data-ignore-capture": "any",
            "data-testid": void 0,
            ref: b,
            title: S,
            "aria-label": R,
            children: c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "stretch",
              xstyle: [
                d.container,
                o("WAWebUISpacing").uiPadding.horiz20,
                o("WAWebUISpacing").uiPadding.vert10,
              ],
              children: [
                c.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  xstyle: [
                    d.iconContainer,
                    o("WAWebUISpacing").uiMargin.end14,
                    L && d.danger,
                  ],
                  children: p,
                }),
                c.jsx(o("WAWebFlex.react").FlexColumn, {
                  justify: "center",
                  grow: 1,
                  xstyle: d.middleContainer,
                  children: E,
                }),
              ],
            }),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
