__d(
  "WAWebDrawerBody.react",
  ["WAWebFlatListContainer.react", "WAWebThemeContext", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "ariaLabel",
        "ariaRole",
        "backgroundColor",
        "children",
        "flatListControllers",
        "isRefresh",
        "overflow",
        "theme",
        "xstyle",
      ],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        container: {
          position: "x1n2onr6",
          zIndex: "xupqr0c",
          display: "x78zum5",
          flexBasis: "x1r8uery",
          flexGrow: "x1iyjqo2",
          flexDirection: "xdt5ytf",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          opacity: "x1hc1fzr",
          $$css: !0,
        },
        noscroll: { overflowX: "x6ikm8r", overflowY: "x10wlt62", $$css: !0 },
        centerItem: {
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
        padding: { marginTop: "x1anpbxc", marginBottom: "xyorhqc", $$css: !0 },
        centerColumn: {
          width: "x1l2rt3b",
          paddingTop: "x13crsa5",
          paddingInlineEnd: "xyri2b",
          paddingBottom: "x1rxj1xn",
          paddingInlineStart: "x1c1uobl",
          marginTop: "xdj266r",
          marginInlineEnd: "x11t971q",
          marginBottom: "xat24cr",
          marginInlineStart: "xvc5jky",
          backgroundColor: "x1280gxy",
          $$css: !0,
        },
        darkMode: {
          "::-webkit-scrollbar-track_backgroundColor": "x1anedsm",
          $$css: !0,
        },
        lightScrollStyles: { scrollbarColor: "xpi494a", $$css: !0 },
        darkScrollStyles: { scrollbarColor: "xiu8dh7", $$css: !0 },
      },
      p = { default: { backgroundColor: "x1280gxy", $$css: !0 } },
      _ = { default: { backgroundColor: "x1280gxy", $$css: !0 } };
    function f(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = o("WAWebThemeContext").useIsDarkTheme(),
        l = a.ariaLabel,
        c = a.ariaRole,
        f = a.backgroundColor,
        g = a.children,
        h = a.flatListControllers,
        y = a.isRefresh,
        C = a.overflow,
        b = a.theme,
        v = a.xstyle,
        S = babelHelpers.objectWithoutPropertiesLoose(a, s),
        R = (u || (u = r("stylex")))([
          m.container,
          C === "hidden" && m.noscroll,
          b === "center-content" && m.centerItem,
          b === "padding" && m.padding,
          b === "center-column" && m.centerColumn,
          b === "custom-scroll" && !i && m.lightScrollStyles,
          b === "custom-scroll" && i && m.darkScrollStyles,
          i && m.darkMode,
          f != null && (y === !0 ? _[f] : p[f]),
          v,
        ]);
      return h && h.length > 0
        ? d.jsx(
            r("WAWebFlatListContainer.react"),
            babelHelpers.extends(
              { ref: n, flatListControllers: h, className: R },
              S,
              { children: g },
            ),
          )
        : d.jsx(
            "div",
            babelHelpers.extends(
              { className: R, ref: n, "aria-label": l, role: c },
              S,
              { children: g },
            ),
          );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
