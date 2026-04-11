__d(
  "WDSRichTextShell.react",
  ["Locale", "WDSTextFieldVariants", "react", "react-strict-dom"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = o("Locale").isRTL(),
      c = {
        container: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          $$css: !0,
        },
        content: {
          flexGrow: "x1iyjqo2",
          position: "x1n2onr6",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          minWidth: "xeuugli",
          $$css: !0,
        },
        multiLineContainer: {
          height: "xt7dq6l",
          paddingTop: "x889kno",
          paddingBottom: "x1a8lsjc",
          alignItems: "x1cy8zhl",
          $$css: !0,
        },
        multiLineContent: { alignItems: "x1cy8zhl", $$css: !0 },
      };
    function d(e) {
      var t = e.addOnBottom,
        n = e.addOnEnd,
        r = e.addOnStart,
        a = e.children,
        i = e.hasAddOnEnd,
        l = e.hasValue,
        d = e.isDisabled,
        m = e.isFocused,
        p = e.isMultiLine,
        _ = e.label,
        f = e.labelTestId,
        g = e.platform,
        h = e.shouldShowError,
        y = o("WDSTextFieldVariants").WDSTextFieldLabelVariant(h, d, i, g),
        C = o("WDSTextFieldVariants").WDSTextFieldColorVariant(h, g),
        b = y.xstyleConfig,
        v = C.xstyleConfig,
        S = g === "iOS";
      return s.jsxs(o("react-strict-dom").html.div, {
        style: b.root,
        children: [
          s.jsxs(o("react-strict-dom").html.div, {
            style: [
              c.container,
              b.container,
              v == null ? void 0 : v.container,
              d && b.containerDisabled,
              d && (v == null ? void 0 : v.containerDisabled),
              p === !0 && c.multiLineContainer,
            ],
            children: [
              r != null &&
                s.jsx(o("react-strict-dom").html.div, {
                  style: b.addOnStart,
                  children: r,
                }),
              s.jsxs(o("react-strict-dom").html.div, {
                style: [c.content, b.content, p === !0 && c.multiLineContent],
                children: [
                  _ != null &&
                    !S &&
                    s.jsx(o("react-strict-dom").html.label, {
                      "data-testid": void 0,
                      style: [
                        b.label,
                        v == null ? void 0 : v.label,
                        d && b.labelDisabled,
                        d && (v == null ? void 0 : v.labelDisabled),
                        m && b.labelFocused,
                        m && (v == null ? void 0 : v.labelFocused),
                        l && b.labelFilled,
                        l && (v == null ? void 0 : v.labelFilled),
                        (m || l) && u && b.labelFilled,
                      ],
                      children: _,
                    }),
                  S &&
                    _ != null &&
                    s.jsx(o("react-strict-dom").html.label, {
                      "data-testid": void 0,
                      style: [b.label, v == null ? void 0 : v.label],
                      children: _,
                    }),
                  a,
                ],
              }),
              n != null &&
                s.jsx(o("react-strict-dom").html.div, {
                  style: b.addOnEnd,
                  children: n,
                }),
            ],
          }),
          t != null &&
            s.jsx(o("react-strict-dom").html.div, {
              style: b.addOnBottom,
              children: t,
            }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
