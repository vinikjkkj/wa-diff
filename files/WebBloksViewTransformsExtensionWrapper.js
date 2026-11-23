__d(
  "WebBloksViewTransformsExtensionWrapper",
  [
    "WebBloksEnvironmentContext",
    "WebBloksModel",
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "useWebBloksViewTransformsExtensionWrapperVisibilityState",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = o("WebBloksModel").defineWebBloksAttributeKey("\x8D"),
      c = o("WebBloksModel").defineWebBloksAttributeKey("\x8A"),
      d = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      m = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      p = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      _ = o("WebBloksModel").defineWebBloksAttributeKey("("),
      f = o("WebBloksModel").defineWebBloksAttributeKey("="),
      g = o("WebBloksModel").defineWebBloksAttributeKey("5"),
      h = o("WebBloksModel").defineWebBloksAttributeKey("6"),
      y = o("WebBloksModel").defineWebBloksAttributeKey("7"),
      C = o("WebBloksModel").defineWebBloksAttributeKey("8"),
      b = o("WebBloksModel").defineWebBloksAttributeKey("9"),
      v = o("WebBloksModel").defineWebBloksAttributeKey(":"),
      S = o("WebBloksModel").defineWebBloksAttributeKey(";");
    function R(e) {
      var t = e.children,
        n = e.node,
        a = o("WebBloksEnvironmentContext").useDataBloksName(),
        i = [],
        l = n.get(u),
        R = n.get(c),
        L = n.get(d),
        E = n.get(m),
        k = n.get(p),
        I = n.get(_),
        T = r("useWebBloksViewTransformsExtensionWrapperVisibilityState")({
          alpha: l,
          scaleX: L,
          scaleY: E,
        }),
        D = typeof T == "string" ? { "data-bloks-visibility-state": T } : {};
      (k != null && i.push("translateX(" + o("WebBloksUtils").toPx(k) + ")"),
        I != null && i.push("translateY(" + o("WebBloksUtils").toPx(I) + ")"),
        R != null && i.push("rotate(" + R + "deg)"),
        L != null && i.push("scaleX(" + L + ")"),
        E != null && i.push("scaleY(" + E + ")"));
      var x = i.join(" "),
        $ = n.get(g),
        P = n.get(h),
        N = n.get(f),
        M = n.get(y),
        w = void 0,
        A = void 0;
      if ($ != null && $ > 0) {
        var F = P != null ? P : "ease",
          O = $ + "s",
          B = N != null ? " " + N + "s" : "";
        ((w = "transform " + O + " " + F + B + ", opacity " + O + " " + F + B),
          M !== !1 && (A = "transform, opacity"));
      } else M === !0 && (A = "transform, opacity");
      var W = n.get(b),
        q = n.get(v),
        U = n.get(S),
        V = n.get(C),
        H = o("WebBloksTheme").useTheme().getTheme(),
        G = void 0;
      if (W != null) {
        var z = q != null ? q : 0,
          j = U != null ? U : 0,
          K = V != null ? V : 0,
          Q = o("WebBloksUtils").getRGBColorWithTheme(W, H);
        G = "drop-shadow(" + z + "px " + j + "px " + K + "px " + Q + ")";
      }
      return s.jsx(
        "div",
        babelHelpers.extends(
          {},
          a("bk.components.ViewTransformsExtension"),
          D,
          o("WebBloksStyle").getStyleProps({
            height: "100%",
            width: "100%",
            transform: x,
            opacity: l,
            transition: w,
            willChange: A,
            filter: G,
            pointerEvents: "inherit",
          }),
          { children: t },
        ),
      );
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  98,
);
