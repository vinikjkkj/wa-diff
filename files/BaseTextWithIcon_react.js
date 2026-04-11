__d(
  "BaseTextWithIcon.react",
  [
    "BaseNonBreakingSpace.react",
    "BaseView.react",
    "XPlatReactEnvironment",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        icon: { alignSelf: "xpvyfi4", flex: "x98rzlu", $$css: !0 },
        iconContainer: { flexDirection: "x1q0g3np", $$css: !0 },
        iconContainerWeb: {
          display: "xt0psk2",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        iconWeb: {
          alignItems: "x6s0dn4",
          display: "x3nfvp2",
          verticalAlign: "xxymvpz",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.children,
        a = e.iconAfter,
        i = e.iconBefore,
        l = e.iconOverrideVerticalStyle,
        c = e.observeDirectionality,
        d = e.spacing,
        m = e.spacingPx,
        p = l === void 0 ? null : l,
        _ = c === void 0 ? !1 : c,
        f = d === void 0 ? 0.5 : d,
        g = o("XPlatReactEnvironment").isWeb() ? u.iconWeb : u.icon,
        h = o("XPlatReactEnvironment").isWeb()
          ? u.iconContainerWeb
          : u.iconContainer,
        y;
      t[0] !== i || t[1] !== p || t[2] !== f || t[3] !== m
        ? ((y =
            i != null &&
            s.jsxs(r("BaseView.react"), {
              xstyle: h,
              children: [
                s.jsx(r("BaseView.react"), { xstyle: [g, p], children: i }),
                s.jsx(r("BaseNonBreakingSpace.react"), {
                  size: m != null ? void 0 : f,
                  sizePx: m,
                }),
              ],
            })),
          (t[0] = i),
          (t[1] = p),
          (t[2] = f),
          (t[3] = m),
          (t[4] = y))
        : (y = t[4]);
      var C = y,
        b;
      t[5] !== a || t[6] !== p || t[7] !== f || t[8] !== m
        ? ((b =
            a != null &&
            s.jsxs(r("BaseView.react"), {
              xstyle: h,
              children: [
                s.jsx(r("BaseNonBreakingSpace.react"), {
                  size: m != null ? void 0 : f,
                  sizePx: m,
                }),
                s.jsx(r("BaseView.react"), { xstyle: [g, p], children: a }),
              ],
            })),
          (t[5] = a),
          (t[6] = p),
          (t[7] = f),
          (t[8] = m),
          (t[9] = b))
        : (b = t[9]);
      var v = b,
        S;
      t[10] !== n || t[11] !== v || t[12] !== C
        ? ((S = s.jsxs(s.Fragment, { children: [C, n, v] })),
          (t[10] = n),
          (t[11] = v),
          (t[12] = C),
          (t[13] = S))
        : (S = t[13]);
      var R = S;
      if (_) {
        var L;
        return (
          t[14] !== R
            ? ((L = s.jsx(o("react-strict-dom").html.span, {
                dir: "auto",
                children: R,
              })),
              (t[14] = R),
              (t[15] = L))
            : (L = t[15]),
          L
        );
      }
      return R;
    }
    l.default = c;
  },
  98,
);
