__d(
  "WAWebCellMenuItem.react",
  ["WAWebCellV2.react", "WAWebMenuItem.react", "WDSText.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "border",
        "children",
        "colorScheme",
        "detailLeft",
        "detailRight",
        "disabled",
        "forceActive",
        "isRefresh",
        "optionId",
        "primary",
        "primaryRight",
        "secondary",
        "secondaryRight",
        "size",
        "textWrap",
      ],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.border,
        l = a.children,
        u = a.colorScheme,
        d = a.detailLeft,
        m = a.detailRight,
        p = a.disabled,
        _ = a.forceActive,
        f = a.isRefresh,
        g = a.optionId,
        h = a.primary,
        y = a.primaryRight,
        C = a.secondary,
        b = a.secondaryRight,
        v = a.size,
        S = a.textWrap,
        R = S === void 0 ? "ellipsis" : S,
        L = babelHelpers.objectWithoutPropertiesLoose(a, s),
        E = o("WAWebMenuItem.react").useMenuItem(g),
        k = E.border,
        I = E.colorScheme,
        T = E.isActive,
        D = E.material,
        x = E.size,
        $ = u != null ? u : I,
        P;
      h != null &&
        (P = c.jsx(r("WDSText.react"), {
          type: "Body1",
          colorName: "contentDefault",
          maxLines: R === "ellipsis" ? 1 : null,
          children: h,
        }));
      var N;
      return (
        C != null &&
          (N = c.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            maxLines: R === "ellipsis" ? 1 : null,
            children: C,
          })),
        c.jsxs(
          o("WAWebMenuItem.react").WAWebMenuItem,
          babelHelpers.extends({ optionId: g, type: "action" }, L, {
            ref: n,
            children: [
              c.jsx(r("WAWebCellV2.react"), {
                middleContainerXStyle: a.middleContainerXStyle,
                onMouseEnter: a.onMouseEnter,
                onMouseLeave: a.onMouseLeave,
                size: v != null ? v : x,
                colorScheme: $,
                material: D,
                disabled: p,
                primary: P,
                primaryRight: y,
                secondary: N,
                secondaryRight: b,
                detailLeft: d,
                detailRight: m,
                active: _ === !0 || T,
                tabIndex: -1,
                border: i || k,
                isRefresh: f,
              }),
              l,
            ],
          }),
        )
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.CellV2MenuItem = d));
  },
  98,
);
