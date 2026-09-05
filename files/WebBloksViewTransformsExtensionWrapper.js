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
        i = o("WebBloksEnvironmentContext").useDataBloksName(),
        l = [],
        u = a.get("alpha"),
        c;
      t[0] !== a
        ? ((c = a.get("rotation")), (t[0] = a), (t[1] = c))
        : (c = t[1]);
      var d = c,
        m = a.get("scale_x"),
        p = a.get("scale_y"),
        _ = a.get("translate_x"),
        f = a.get("translate_y"),
        g = r("useWebBloksViewTransformsExtensionWrapperVisibilityState")({
          alpha: u,
          scaleX: m,
          scaleY: p,
        });
      (_ != null && l.push("translateX(" + o("WebBloksUtils").toPx(_) + ")"),
        f != null && l.push("translateY(" + o("WebBloksUtils").toPx(f) + ")"),
        d != null && l.push("rotate(" + d + "deg)"),
        m != null && l.push("scaleX(" + m + ")"),
        p != null && l.push("scaleY(" + p + ")"));
      var h = l.join(" "),
        y = a.get("css_transition_duration"),
        C;
      t[2] !== a
        ? ((C = a.get("css_transition_timing_function")),
          (t[2] = a),
          (t[3] = C))
        : (C = t[3]);
      var b = C,
        v;
      t[4] !== a
        ? ((v = a.get("css_transition_delay")), (t[4] = a), (t[5] = v))
        : (v = t[5]);
      var S = v,
        R = a.get("will_change"),
        L = void 0,
        E = void 0;
      if (y != null && y > 0) {
        var k = b != null ? b : "ease",
          I = y + "s",
          T = S != null ? " " + S + "s" : "";
        ((L = "transform " + I + " " + k + T + ", opacity " + I + " " + k + T),
          R !== !1 && (E = "transform, opacity"));
      } else R === !0 && (E = "transform, opacity");
      var D = a.get("drop_shadow_color"),
        x;
      t[6] !== a
        ? ((x = a.get("drop_shadow_offset_x")), (t[6] = a), (t[7] = x))
        : (x = t[7]);
      var $ = x,
        P;
      t[8] !== a
        ? ((P = a.get("drop_shadow_offset_y")), (t[8] = a), (t[9] = P))
        : (P = t[9]);
      var N = P,
        M;
      t[10] !== a
        ? ((M = a.get("drop_shadow_blur_radius")), (t[10] = a), (t[11] = M))
        : (M = t[11]);
      var w = M,
        A = o("WebBloksTheme").useTheme().getTheme(),
        F = void 0;
      if (D != null) {
        var O = $ != null ? $ : 0,
          B = N != null ? N : 0,
          W = w != null ? w : 0,
          q = o("WebBloksUtils").getRGBColorWithTheme(D, A);
        F = "drop-shadow(" + O + "px " + B + "px " + W + "px " + q + ")";
      }
      var U;
      t[12] !== i
        ? ((U = i("bk.components.ViewTransformsExtension")),
          (t[12] = i),
          (t[13] = U))
        : (U = t[13]);
      var V = o("WebBloksStyle").getStyleProps({
          height: "100%",
          width: "100%",
          transform: h,
          opacity: u,
          transition: L,
          willChange: E,
          filter: F,
          pointerEvents: "inherit",
        }),
        H;
      return (
        t[14] !== n || t[15] !== U || t[16] !== V || t[17] !== g
          ? ((H = s.jsx(
              "div",
              babelHelpers.extends(
                {},
                U,
                { "data-bloks-visibility-state": g },
                V,
                { children: n },
              ),
            )),
            (t[14] = n),
            (t[15] = U),
            (t[16] = V),
            (t[17] = g),
            (t[18] = H))
          : (H = t[18]),
        H
      );
    }
    l.default = u;
  },
  98,
);
