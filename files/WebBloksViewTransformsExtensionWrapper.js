__d(
  "WebBloksViewTransformsExtensionWrapper",
  [
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
    "useWebBloksViewTransformsExtensionWrapperVisibilityState",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.children,
        a = e.node,
        i = [],
        l = a.get("alpha"),
        u;
      t[0] !== a
        ? ((u = a.get("rotation")), (t[0] = a), (t[1] = u))
        : (u = t[1]);
      var c = u,
        d = a.get("scale_x"),
        m = a.get("scale_y"),
        p = a.get("translate_x"),
        _ = a.get("translate_y"),
        f = r("useWebBloksViewTransformsExtensionWrapperVisibilityState")({
          alpha: l,
          scaleX: d,
          scaleY: m,
        });
      (p != null && i.push("translateX(" + o("WebBloksUtils").toPx(p) + ")"),
        _ != null && i.push("translateY(" + o("WebBloksUtils").toPx(_) + ")"),
        c != null && i.push("rotate(" + c + "deg)"),
        d != null && i.push("scaleX(" + d + ")"),
        m != null && i.push("scaleY(" + m + ")"));
      var g = i.join(" "),
        h = a.get("css_transition_duration"),
        y;
      t[2] !== a
        ? ((y = a.get("css_transition_timing_function")),
          (t[2] = a),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] !== a
        ? ((b = a.get("css_transition_delay")), (t[4] = a), (t[5] = b))
        : (b = t[5]);
      var v = b,
        S = a.get("will_change"),
        R = void 0,
        L = void 0;
      if (h != null && h > 0) {
        var E = C != null ? C : "ease",
          k = h + "s",
          I = v != null ? " " + v + "s" : "";
        ((R = "transform " + k + " " + E + I + ", opacity " + k + " " + E + I),
          (L = "transform, opacity"));
      } else S === !0 && (L = "transform, opacity");
      var T = a.get("drop_shadow_color"),
        D;
      t[6] !== a
        ? ((D = a.get("drop_shadow_offset_x")), (t[6] = a), (t[7] = D))
        : (D = t[7]);
      var x = D,
        $;
      t[8] !== a
        ? (($ = a.get("drop_shadow_offset_y")), (t[8] = a), (t[9] = $))
        : ($ = t[9]);
      var P = $,
        N;
      t[10] !== a
        ? ((N = a.get("drop_shadow_blur_radius")), (t[10] = a), (t[11] = N))
        : (N = t[11]);
      var M = N,
        w = o("WebBloksTheme").useTheme().getTheme(),
        A = void 0;
      if (T != null) {
        var F = x != null ? x : 0,
          O = P != null ? P : 0,
          B = M != null ? M : 0,
          W = o("WebBloksUtils").getRGBColorWithTheme(T, w);
        A = "drop-shadow(" + F + "px " + O + "px " + B + "px " + W + ")";
      }
      var q = "bk.components.ViewTransformsExtension",
        U = o("WebBloksStyle").getStyleProps({
          height: "100%",
          width: "100%",
          transform: g,
          opacity: l,
          transition: R,
          willChange: L,
          filter: A,
          pointerEvents: "inherit",
        }),
        V;
      return (
        t[12] !== n || t[13] !== U || t[14] !== f
          ? ((V = s.jsx(
              "div",
              babelHelpers.extends(
                { "data-bloks-name": q, "data-bloks-visibility-state": f },
                U,
                { children: n },
              ),
            )),
            (t[12] = n),
            (t[13] = U),
            (t[14] = f),
            (t[15] = V))
          : (V = t[15]),
        V
      );
    }
    l.default = u;
  },
  98,
);
