__d(
  "BaseToastContentWrapper.react",
  [
    "BaseTheme.react",
    "BaseView.react",
    "CometThemeInfraBaseThemeContext.react",
    "CometThemeInfraBaseThemeGated.react",
    "XPlatReactFocusRegion.react",
    "basePushToast",
    "focusScopeQueries",
    "react",
    "react-compiler-runtime",
    "useCurrentDisplayMode",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext,
      c = {
        dark: "__fb-dark-mode ",
        light: "__fb-light-mode ",
        type: "CLASSNAMES",
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.ariaLabelledBy,
        a = e.children,
        i = e.ref,
        l = e.role,
        d = e.testid,
        m = e.themeConfig,
        p = e.useInvertedDisplayMode,
        _ = e.xstyle,
        f = r("useCurrentDisplayMode")(),
        g = f === "dark" ? "light" : "dark",
        h = u(r("CometThemeInfraBaseThemeContext.react")),
        y;
      if (
        t[0] !== n ||
        t[1] !== a ||
        t[2] !== h ||
        t[3] !== g ||
        t[4] !== i ||
        t[5] !== l ||
        t[6] !== d ||
        t[7] !== m ||
        t[8] !== p ||
        t[9] !== _
      ) {
        var C = p
          ? r("CometThemeInfraBaseThemeGated.react")
            ? s.jsx(r("CometThemeInfraBaseThemeGated.react"), {
                "aria-labelledby": n,
                displayMode: g,
                ref: i,
                role: l,
                testid: void 0,
                themes: h,
                xstyle: _,
                children: a,
              })
            : s.jsx(r("BaseTheme.react"), {
                "aria-labelledby": n,
                config: m != null ? m : c,
                displayMode: g,
                ref: i,
                role: l,
                testid: void 0,
                xstyle: _,
                children: a,
              })
          : s.jsx(r("BaseView.react"), {
              "aria-labelledby": n,
              ref: i,
              role: l,
              testid: void 0,
              xstyle: _,
              children: a,
            });
        ((y = o("basePushToast").passesNewToastAPIGK()
          ? s.jsx(r("XPlatReactFocusRegion.react"), {
              containFocusQuery: o("focusScopeQueries").tabbableScopeQuery,
              children: C,
            })
          : C),
          (t[0] = n),
          (t[1] = a),
          (t[2] = h),
          (t[3] = g),
          (t[4] = i),
          (t[5] = l),
          (t[6] = d),
          (t[7] = m),
          (t[8] = p),
          (t[9] = _),
          (t[10] = y));
      } else y = t[10];
      return y;
    }
    l.default = d;
  },
  98,
);
