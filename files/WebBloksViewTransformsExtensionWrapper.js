__d(
  "WebBloksViewTransformsExtensionWrapper",
  [
    "WebBloksEnvironmentContext",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.children,
        a = e.node,
        i = o("WebBloksEnvironmentContext").useWebBloksEnvironment(),
        l = i.omitDataBloksName,
        u = [],
        c = a.get("alpha"),
        d;
      t[0] !== a
        ? ((d = a.get("rotation")), (t[0] = a), (t[1] = d))
        : (d = t[1]);
      var m = d,
        p = a.get("scale_x"),
        _ = a.get("scale_y"),
        f = a.get("translate_x"),
        g = a.get("translate_y"),
        h = r("useWebBloksViewTransformsExtensionWrapperVisibilityState")({
          alpha: c,
          scaleX: p,
          scaleY: _,
        });
      (f != null && u.push("translateX(" + o("WebBloksUtils").toPx(f) + ")"),
        g != null && u.push("translateY(" + o("WebBloksUtils").toPx(g) + ")"),
        m != null && u.push("rotate(" + m + "deg)"),
        p != null && u.push("scaleX(" + p + ")"),
        _ != null && u.push("scaleY(" + _ + ")"));
      var y = u.join(" "),
        C = a.get("css_transition_duration"),
        b;
      t[2] !== a
        ? ((b = a.get("css_transition_timing_function")),
          (t[2] = a),
          (t[3] = b))
        : (b = t[3]);
      var v = b,
        S;
      t[4] !== a
        ? ((S = a.get("css_transition_delay")), (t[4] = a), (t[5] = S))
        : (S = t[5]);
      var R = S,
        L = a.get("will_change"),
        E = void 0,
        k = void 0;
      if (C != null && C > 0) {
        var I = v != null ? v : "ease",
          T = C + "s",
          D = R != null ? " " + R + "s" : "";
        ((E = "transform " + T + " " + I + D + ", opacity " + T + " " + I + D),
          (k = "transform, opacity"));
      } else L === !0 && (k = "transform, opacity");
      var x = a.get("drop_shadow_color"),
        $;
      t[6] !== a
        ? (($ = a.get("drop_shadow_offset_x")), (t[6] = a), (t[7] = $))
        : ($ = t[7]);
      var P = $,
        N;
      t[8] !== a
        ? ((N = a.get("drop_shadow_offset_y")), (t[8] = a), (t[9] = N))
        : (N = t[9]);
      var M = N,
        w;
      t[10] !== a
        ? ((w = a.get("drop_shadow_blur_radius")), (t[10] = a), (t[11] = w))
        : (w = t[11]);
      var A = w,
        F = o("WebBloksTheme").useTheme().getTheme(),
        O = void 0;
      if (x != null) {
        var B = P != null ? P : 0,
          W = M != null ? M : 0,
          q = A != null ? A : 0,
          U = o("WebBloksUtils").getRGBColorWithTheme(x, F);
        O = "drop-shadow(" + B + "px " + W + "px " + q + "px " + U + ")";
      }
      var V;
      t[12] !== l
        ? ((V = l
            ? null
            : { "data-bloks-name": "bk.components.ViewTransformsExtension" }),
          (t[12] = l),
          (t[13] = V))
        : (V = t[13]);
      var H = o("WebBloksStyle").getStyleProps({
          height: "100%",
          width: "100%",
          transform: y,
          opacity: c,
          transition: E,
          willChange: k,
          filter: O,
          pointerEvents: "inherit",
        }),
        G;
      return (
        t[14] !== n || t[15] !== V || t[16] !== H || t[17] !== h
          ? ((G = s.jsx(
              "div",
              babelHelpers.extends(
                {},
                V,
                { "data-bloks-visibility-state": h },
                H,
                { children: n },
              ),
            )),
            (t[14] = n),
            (t[15] = V),
            (t[16] = H),
            (t[17] = h),
            (t[18] = G))
          : (G = t[18]),
        G
      );
    }
    l.default = u;
  },
  98,
);
