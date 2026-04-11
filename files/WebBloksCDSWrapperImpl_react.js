__d(
  "WebBloksCDSWrapperImpl.react",
  [
    "WebBloksCDSScreenModeContext.react",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.backgroundOverlayColor,
        a = e.content,
        i = e.header,
        l = e.shouldRenderGradient,
        c = e.topBanner,
        m = o("WebBloksTheme").useTheme(),
        p;
      if (t[0] !== n || t[1] !== m) {
        var _ = m.getTheme();
        if (n != null) {
          var f = o("WebBloksUtils").getRGBColorWithTheme(n, _),
            g;
          (t[3] !== f
            ? ((g = s.jsx("div", {
                className: C.backgroundOverlayColor,
                style: { backgroundColor: f },
              })),
              (t[3] = f),
              (t[4] = g))
            : (g = t[4]),
            (p = g));
        }
        ((t[0] = n), (t[1] = m), (t[2] = p));
      } else p = t[2];
      var h = u(r("WebBloksCDSScreenModeContext.react")),
        y;
      t[5] !== l
        ? ((y = l ? s.jsx(d, {}) : null), (t[5] = l), (t[6] = y))
        : (y = t[6]);
      var b;
      t[7] !== p || t[8] !== y
        ? ((b = s.jsxs("div", {
            className: C.gradientContainer,
            children: [y, p],
          })),
          (t[7] = p),
          (t[8] = y),
          (t[9] = b))
        : (b = t[9]);
      var v;
      t[10] !== a || t[11] !== i || t[12] !== b || t[13] !== c
        ? ((v = s.jsxs(s.Fragment, { children: [b, c, i, a] })),
          (t[10] = a),
          (t[11] = i),
          (t[12] = b),
          (t[13] = c),
          (t[14] = v))
        : (v = t[14]);
      var S = v,
        R;
      if (t[15] !== S || t[16] !== h) {
        var L =
          h === "full_screen" || h == null
            ? s.jsx("div", { className: C.minHeight, children: S })
            : S;
        ((R = s.jsx("div", { className: C.root, children: L })),
          (t[15] = S),
          (t[16] = h),
          (t[17] = R));
      } else R = t[17];
      return R;
    }
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx("div", {
              className: C.gradient,
              children: s.jsx("div", { className: C.canvas }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    var m = "hsla(44, 100%, 66%, 1)",
      p = "hsla(338, 68%, 65%, 1)",
      _ = "hsla(338, 68%, 65%, 0.4)",
      f = "hsla(272, 100%, 60%, 1)",
      g = "hsla(142, 70%, 49%, 1)",
      h = "hsla(209, 100%, 53%, 1)",
      y = "hsla(213, 100%, 44%, 1)",
      C = o("WebBloksStyle").createStyles({
        root: {
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          overflow: "scroll",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
          width: "100%",
        },
        minHeight: {
          height: "100%",
          minHeight: "600px",
          display: "flex",
          flexDirection: "column",
        },
        gradientContainer: {
          bottom: 0,
          clipPath: "inset(0 0 0 0)",
          right: 0,
          pointerEvents: "none",
          position: "absolute",
          backgroundColor:
            o("WebBloksTheme").WebBloksThemeVars["cds-surface-background"],
          left: 0,
          top: 0,
        },
        gradient: {
          backgroundColor:
            o("WebBloksTheme").WebBloksThemeVars["cds-surface-background"],
          borderRadius: "inherit",
          clipPath: "inset(0 0 0 0)",
          height: "100%",
          position: "relative",
          width: "100%",
          zIndex: 0,
        },
        canvas: {
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.25), rgba(255,255,255,0) 40%), radial-gradient(" +
            m +
            " 30%, " +
            p +
            ", " +
            _ +
            " 41%, transparent 52%), radial-gradient(" +
            f +
            " 37%, transparent 46%), linear-gradient(155deg, transparent 65%, " +
            g +
            " 95%), linear-gradient(45deg, " +
            y +
            ", " +
            h +
            ")",
          backgroundPosition: "bottom left, 109% 68%, 109% 68%, center, center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "200% 200%, 285% 500%, 285% 500%, cover, cover",
          bottom: 0,
          right: 0,
          opacity: 0.08,
          pointerEvents: "none",
          position: "absolute",
          left: 0,
          top: 0,
        },
        backgroundOverlayColor: {
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
        },
      });
    l.default = c;
  },
  98,
);
