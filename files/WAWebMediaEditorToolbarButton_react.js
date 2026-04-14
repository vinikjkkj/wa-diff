__d(
  "WAWebMediaEditorToolbarButton.react",
  [
    "WAWebChevronCustomIcons",
    "WAWebFlex.react",
    "WAWebMediaEditorToolbarColor.react",
    "WDSFocusStateStyles",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = {
        container: {
          color: "x1heor9g",
          boxSizing: "x9f619",
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          fontSize: "x6prxxf",
          lineHeight: "x152skdk",
          cursor: "x1ypdohk",
          borderStartStartRadius: "x12ol6y4",
          borderStartEndRadius: "x180vkcf",
          borderEndEndRadius: "x1khw62d",
          borderEndStartRadius: "x709u02",
          ":hover_backgroundColor": "x1ubxc9n",
          ":active_backgroundColor": "x11xlx4c",
          $$css: !0,
        },
        selected: { backgroundColor: "x4wrhlh", $$css: !0 },
        disabled: {
          opacity: "xbyyjgo",
          ":hover_backgroundColor": "x1n5bzlp",
          ":active_backgroundColor": "xyftt0y",
          $$css: !0,
        },
        icon: { width: "xvy4d1p", height: "xxk0z11", $$css: !0 },
        paddingAll8: {
          paddingTop: "x16ovd2e",
          paddingInlineEnd: "x1nzty39",
          paddingBottom: "x12xbjc7",
          paddingInlineStart: "x12w63v0",
          $$css: !0,
        },
      };
    function m(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.children,
        l = a.onClick,
        u = a.icon,
        m = a.caret,
        p = a.disabled,
        _ = p === void 0 ? !1 : p,
        f = a.title,
        g = a.selected,
        h = g === void 0 ? !1 : g,
        y = a.theme,
        C =
          y === void 0
            ? o("WAWebMediaEditorToolbarColor.react").Theme.Default
            : y,
        b = a.testid,
        v = b === void 0 ? "" : b,
        S;
      if (m)
        switch (m) {
          case "up":
            S = c.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, {
              displayInline: !0,
              height: 24,
            });
            break;
          case "down":
            S = c.jsx(o("WAWebChevronCustomIcons").ChevronDownCustomIcon, {
              displayInline: !0,
              height: 24,
            });
            break;
          default:
            break;
        }
      return c.jsxs(
        "button",
        babelHelpers.extends(
          { ref: n, onClick: l, "data-testid": void 0 },
          (s || (s = r("stylex"))).props(
            d.container,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            C === o("WAWebMediaEditorToolbarColor.react").Theme.Default &&
              d.paddingAll8,
            _ && d.disabled,
            !_ && h && d.selected,
            a.xstyle,
          ),
          {
            title: f,
            children: [
              u &&
                c.jsx(o("WAWebFlex.react").FlexRow, {
                  align: "center",
                  justify: "center",
                  xstyle: d.icon,
                  children: u,
                }),
              i != null &&
                c.jsx("span", {
                  className:
                    "x1iyjqo2 xxk0z11 x1o2sk6j x2b8uid x1wbi8v6 x7g7pl8",
                  children: i,
                }),
              S && c.jsx("span", { children: S }),
            ],
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.ToolbarButton = m));
  },
  98,
);
