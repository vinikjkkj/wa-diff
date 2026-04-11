__d(
  "WDSSpinner.react",
  ["WDSSpinnerElement.react", "getPlatformByGK", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = s || (s = r("react")),
      d = "x17qceat-B",
      m = "xekv6nw-B",
      p = {
        height: "x16ye13r",
        width: "x5lhr3w",
        display: "x78zum5",
        alignItems: "x6s0dn4",
        justifyContent: "xl56j7k",
        $$css: !0,
      },
      _ = {
        container: function (t) {
          return [
            p,
            {
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
            },
          ];
        },
      },
      f = { width: "x5lhr3w", height: "x16ye13r", $$css: !0 },
      g = {
        morphIcon: function (t) {
          return [
            f,
            {
              "--x-width": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
              "--x-height": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t + "px"),
            },
          ];
        },
        morphContainer: {
          position: "x1n2onr6",
          display: "x3nfvp2",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function h(e, t) {
      if (e == null) return null;
      var n = Math.max(Math.min(e, t), 0);
      return (n * 100) / t;
    }
    function y(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.platform,
        l = i === void 0 ? o("getPlatformByGK").WDS_PLATFORM : i,
        s = a.size,
        d = s === void 0 ? (l === "iOS" ? 18 : 65) : s,
        m = a.stroke,
        p = m === void 0 ? 4 : m,
        f = a.strokeLinecap,
        y = f === void 0 ? "round" : f,
        C = a.xstyle,
        b = a.max,
        v = b === void 0 ? 100 : b,
        S = a.value,
        R = a.testid,
        L = R === void 0 ? "loading-spinner" : R,
        E = a.morphToIcon,
        k = E === void 0 ? !1 : E,
        I = a.iconToMorphTo,
        T = a.iconProps,
        D = h(S, v),
        x = c.jsx(
          "span",
          babelHelpers.extends(
            { ref: n, "data-testid": void 0 },
            (u || (u = r("stylex"))).props(_.container(d)),
            {
              children: c.jsx(r("WDSSpinnerElement.react"), {
                platform: l,
                size: d,
                stroke: p,
                progress: D,
                strokeLinecap: y,
                xstyle: C,
              }),
            },
          ),
        );
      return c.jsxs(
        "span",
        babelHelpers.extends({}, u.props(g.morphContainer, _.container(d)), {
          children: [
            c.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: { className: "x10l6tqk x78zum5 x6s0dn4 xl56j7k x1hc1fzr" },
                  1: {
                    className:
                      "x10l6tqk x78zum5 x6s0dn4 xl56j7k x1hc1fzr xvma63k xdz8niu x4hg4is x10e4vud",
                  },
                }[(k === !0 && I != null) << 0],
                { children: x },
              ),
            ),
            k === !0 &&
              I != null &&
              c.jsx("div", {
                className:
                  "x10l6tqk x78zum5 x6s0dn4 xl56j7k xg01cxk x127lhb5 xdz8niu x1t83zlg x4hg4is x10e4vud",
                children: c.jsx(
                  I,
                  babelHelpers.extends(
                    { width: d, height: d, xstyle: g.morphIcon(d) },
                    T,
                  ),
                ),
              }),
          ],
        }),
      );
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  98,
);
