__d(
  "WebBloksGlimmer",
  ["WebBloksModel", "WebBloksStyle", "WebBloksTheme", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = 200,
      d = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      p = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      _ = o("WebBloksModel").defineWebBloksAttributeKey("("),
      f = o("WebBloksModel").defineWebBloksAttributeKey(")");
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
      var t,
        n,
        r,
        a = e.externalStyle,
        i = e.node,
        l = o("WebBloksStyle").useStyle(i, a),
        g = l.style,
        h = l.wrapper,
        y = l.wrapperProps,
        C = i.get(_),
        v = i.get(m),
        R = (t = i.get(p)) != null ? t : 0,
        L = (n = i.get(d)) != null ? n : "default",
        E = (r = i.get(f)) != null ? r : "default",
        k = u(
          function () {
            return b(L, E);
          },
          [L, E],
        ),
        I = k.animationName,
        T = k.background,
        D = C === "circle" ? "50%" : v,
        x = u(
          function () {
            return babelHelpers.extends({}, g, {
              borderRadius: D,
              background: T,
              animationName: I,
              animationDelay: R * c + "ms",
            });
          },
          [g, D, T, I, R],
        );
      return h(
        s.jsx(
          "div",
          babelHelpers.extends({}, y, {
            "data-visualcompletion": "loading-state",
            className: o("WebBloksStyle").classNames(
              o("WebBloksStyle").WebBloksStyles.container,
              S.root,
            ),
            style: x,
          }),
        ),
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
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
