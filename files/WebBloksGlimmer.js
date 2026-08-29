__d(
  "WebBloksGlimmer",
  ["WebBloksStyle", "WebBloksTheme", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = 200;
    function d(e, t) {
      return o("WebBloksStyle").keyframes({
        "0%": { opacity: e },
        "50%": { opacity: t },
        "100%": { opacity: e },
      });
    }
    var m = d(0.04, 0.17),
      p = d(0.04, 0.07),
      _ = d(0.65, 1);
    function f(e, t) {
      var n = o("WebBloksTheme").WebBloksThemeVars["fds-gray-65"],
        r = m;
      return (
        e === "background" &&
          (t === "wash"
            ? ((n = o("WebBloksTheme").WebBloksThemeVars["fds-white"]), (r = _))
            : t === "default" && (r = p)),
        { background: n, animationName: r }
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.externalStyle,
        r = e.node,
        a = o("WebBloksStyle").useStyle(r, n),
        i = a.style,
        l = a.wrapper,
        u = a.wrapperProps,
        d = r.get("shape"),
        m;
      t[0] !== r
        ? ((m = r.get("corner_radius")), (t[0] = r), (t[1] = m))
        : (m = t[1]);
      var p = m,
        _;
      if (t[2] !== r) {
        var g;
        ((_ = (g = r.get("index")) != null ? g : 0), (t[2] = r), (t[3] = _));
      } else _ = t[3];
      var y = _,
        C;
      if (t[4] !== r) {
        var b;
        ((C = (b = r.get("component_style")) != null ? b : "default"),
          (t[4] = r),
          (t[5] = C));
      } else C = t[5];
      var v = C,
        S;
      if (t[6] !== r) {
        var R;
        ((S = (R = r.get("surface_background_color")) != null ? R : "default"),
          (t[6] = r),
          (t[7] = S));
      } else S = t[7];
      var L = S,
        E;
      t[8] !== v || t[9] !== L
        ? ((E = f(v, L)), (t[8] = v), (t[9] = L), (t[10] = E))
        : (E = t[10]);
      var k = E,
        I = k.animationName,
        T = k.background,
        D = d === "circle" ? "50%" : p,
        x = y * c + "ms",
        $;
      t[11] !== I || t[12] !== T || t[13] !== D || t[14] !== i || t[15] !== x
        ? (($ = babelHelpers.extends({}, i, {
            borderRadius: D,
            background: T,
            animationName: I,
            animationDelay: x,
          })),
          (t[11] = I),
          (t[12] = T),
          (t[13] = D),
          (t[14] = i),
          (t[15] = x),
          (t[16] = $))
        : ($ = t[16]);
      var P = $,
        N;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            h.root,
          )),
          (t[17] = N))
        : (N = t[17]);
      var M;
      t[18] !== P || t[19] !== u
        ? ((M = s.jsx(
            "div",
            babelHelpers.extends({}, u, {
              "data-visualcompletion": "loading-state",
              className: N,
              style: P,
            }),
          )),
          (t[18] = P),
          (t[19] = u),
          (t[20] = M))
        : (M = t[20]);
      var w;
      return (
        t[21] !== M || t[22] !== l
          ? ((w = l(M)), (t[21] = M), (t[22] = l), (t[23] = w))
          : (w = t[23]),
        w
      );
    }
    var h = o("WebBloksStyle").createStyles({
      root: {
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "cubic-bezier(0.5, 0, 0.5, 1)",
        animationFillMode: "backwards",
      },
    });
    l.default = g;
  },
  98,
);
