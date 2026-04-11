__d(
  "BasePortal.react",
  [
    "BaseChameleonThemeContext",
    "BaseDOMContainer.react",
    "BasePortalTargetContext",
    "BaseThemeProvider.react",
    "CometThemeInfraBaseThemeContext.react",
    "CometThemeInfraFallbackConfig",
    "CometThemeInfraUtils",
    "DSPDisplayModeContext",
    "ExecutionEnvironment",
    "ReactDOM",
    "react",
    "stylex",
    "suspendOrThrowIfUsedInSSR",
    "useStable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["children", "hidden", "target", "xstyle"],
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d.useContext;
    function _(t) {
      var n = t.children,
        a = t.hidden,
        i = a === void 0 ? !1 : a,
        l = t.target,
        d = t.xstyle,
        _ = babelHelpers.objectWithoutPropertiesLoose(t, e),
        f = p(r("BasePortalTargetContext")),
        g = p(r("BaseChameleonThemeContext")),
        h = l || f,
        y = r("useStable")(function () {
          return (s || (s = r("ExecutionEnvironment"))).canUseDOM
            ? document.createElement("div")
            : null;
        });
      (u || (u = r("suspendOrThrowIfUsedInSSR")))(
        "BasePortal: Portals are not currently supported by the server renderer.",
      );
      var C = p(r("CometThemeInfraBaseThemeContext.react")),
        b = p(r("DSPDisplayModeContext")),
        v = C[b != null ? b : "auto"],
        S = r("CometThemeInfraFallbackConfig").fallbackThemes,
        R = S[b != null ? b : "auto"];
      return h != null
        ? o("ReactDOM").createPortal(
            m.jsx(r("BaseThemeProvider.react"), {
              children: function (t, a) {
                return m.jsxs(
                  "div",
                  babelHelpers.extends(
                    {
                      className:
                        (c || (c = r("stylex")))(
                          t,
                          g.classNames,
                          o(
                            "CometThemeInfraUtils",
                          ).enableCometThemeInfraThemeInXMDSComponents() && v,
                          o(
                            "CometThemeInfraUtils",
                          ).enableCometThemeInfraThemeInXMDSComponents() &&
                            v === null &&
                            R,
                          d,
                        ) || void 0,
                      hidden: i,
                    },
                    _,
                    {
                      style: a,
                      children: [
                        m.jsx(r("BasePortalTargetContext").Provider, {
                          value: y,
                          children: n,
                        }),
                        m.jsx(r("BaseDOMContainer.react"), { node: y }),
                      ],
                    },
                  ),
                );
              },
            }),
            h,
          )
        : null;
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
