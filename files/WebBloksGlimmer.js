__d(
  "WebBloksGlimmer",
  ["WebBloksStyle", "WebBloksTheme", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = 200,
      d = "#",
      m = "$",
      p = "&",
      _ = "(",
      f = ")";
    function g(e, t) {
      return o("WebBloksStyle").keyframes({
        "0%": { opacity: e },
        "50%": { opacity: t },
        "100%": { opacity: e },
      });
    }
    var h = g(0.04, 0.17),
      y = g(0.04, 0.07),
      C = g(0.65, 1);
    function b(e, t) {
      var n = o("WebBloksTheme").WebBloksThemeVars["fds-gray-65"],
        r = h;
      return (
        e === "background" &&
          (t === "wash"
            ? ((n = o("WebBloksTheme").WebBloksThemeVars["fds-white"]), (r = C))
            : t === "default" && (r = y)),
        { background: n, animationName: r }
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(24),
        n = e.externalStyle,
        r = e.node,
        a = o("WebBloksStyle").useStyle(r, n),
        i = a.style,
        l = a.wrapper,
        u = a.wrapperProps,
        g = r.get(_),
        h;
      t[0] !== r ? ((h = r.get(m)), (t[0] = r), (t[1] = h)) : (h = t[1]);
      var y = h,
        C;
      if (t[2] !== r) {
        var v;
        ((C = (v = r.get(p)) != null ? v : 0), (t[2] = r), (t[3] = C));
      } else C = t[3];
      var R = C,
        L;
      if (t[4] !== r) {
        var E;
        ((L = (E = r.get(d)) != null ? E : "default"), (t[4] = r), (t[5] = L));
      } else L = t[5];
      var k = L,
        I;
      if (t[6] !== r) {
        var T;
        ((I = (T = r.get(f)) != null ? T : "default"), (t[6] = r), (t[7] = I));
      } else I = t[7];
      var D = I,
        x;
      t[8] !== k || t[9] !== D
        ? ((x = b(k, D)), (t[8] = k), (t[9] = D), (t[10] = x))
        : (x = t[10]);
      var $ = x,
        P = $.animationName,
        N = $.background,
        M = g === "circle" ? "50%" : y,
        w = R * c + "ms",
        A;
      t[11] !== P || t[12] !== N || t[13] !== M || t[14] !== i || t[15] !== w
        ? ((A = babelHelpers.extends({}, i, {
            borderRadius: M,
            background: N,
            animationName: P,
            animationDelay: w,
          })),
          (t[11] = P),
          (t[12] = N),
          (t[13] = M),
          (t[14] = i),
          (t[15] = w),
          (t[16] = A))
        : (A = t[16]);
      var F = A,
        O;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = o("WebBloksStyle").classNames(
            o("WebBloksStyle").WebBloksStyles.container,
            S.root,
          )),
          (t[17] = O))
        : (O = t[17]);
      var B;
      t[18] !== F || t[19] !== u
        ? ((B = s.jsx(
            "div",
            babelHelpers.extends({}, u, {
              "data-visualcompletion": "loading-state",
              className: O,
              style: F,
            }),
          )),
          (t[18] = F),
          (t[19] = u),
          (t[20] = B))
        : (B = t[20]);
      var W;
      return (
        t[21] !== B || t[22] !== l
          ? ((W = l(B)), (t[21] = B), (t[22] = l), (t[23] = W))
          : (W = t[23]),
        W
      );
    }
    var S = o("WebBloksStyle").createStyles({
      root: {
        animationDuration: "2s",
        animationIterationCount: "infinite",
        animationTimingFunction: "cubic-bezier(0.5, 0, 0.5, 1)",
        animationFillMode: "backwards",
      },
    });
    l.default = v;
  },
  98,
);
