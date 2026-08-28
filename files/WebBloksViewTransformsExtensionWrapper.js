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
      s = e || (e = o("react")),
      u = "\x8D",
      c = "\x8A",
      d = "#",
      m = "$",
      p = "&",
      _ = "(",
      f = "=",
      g = "5",
      h = "6",
      y = "7",
      C = "8",
      b = "9",
      v = ":",
      S = ";";
    function R(e) {
      var t = o("react-compiler-runtime").c(19),
        n = e.children,
        a = e.node,
        i = o("WebBloksEnvironmentContext").useDataBloksName(),
        l = [],
        R = a.get(u),
        L;
      t[0] !== a ? ((L = a.get(c)), (t[0] = a), (t[1] = L)) : (L = t[1]);
      var E = L,
        k = a.get(d),
        I = a.get(m),
        T = a.get(p),
        D = a.get(_),
        x = r("useWebBloksViewTransformsExtensionWrapperVisibilityState")({
          alpha: R,
          scaleX: k,
          scaleY: I,
        });
      (T != null && l.push("translateX(" + o("WebBloksUtils").toPx(T) + ")"),
        D != null && l.push("translateY(" + o("WebBloksUtils").toPx(D) + ")"),
        E != null && l.push("rotate(" + E + "deg)"),
        k != null && l.push("scaleX(" + k + ")"),
        I != null && l.push("scaleY(" + I + ")"));
      var $ = l.join(" "),
        P = a.get(g),
        N;
      t[2] !== a ? ((N = a.get(h)), (t[2] = a), (t[3] = N)) : (N = t[3]);
      var M = N,
        w;
      t[4] !== a ? ((w = a.get(f)), (t[4] = a), (t[5] = w)) : (w = t[5]);
      var A = w,
        F = a.get(y),
        O = void 0,
        B = void 0;
      if (P != null && P > 0) {
        var W = M != null ? M : "ease",
          q = P + "s",
          U = A != null ? " " + A + "s" : "";
        ((O = "transform " + q + " " + W + U + ", opacity " + q + " " + W + U),
          (B = "transform, opacity"));
      } else F === !0 && (B = "transform, opacity");
      var V = a.get(b),
        H;
      t[6] !== a ? ((H = a.get(v)), (t[6] = a), (t[7] = H)) : (H = t[7]);
      var G = H,
        z;
      t[8] !== a ? ((z = a.get(S)), (t[8] = a), (t[9] = z)) : (z = t[9]);
      var j = z,
        K;
      t[10] !== a ? ((K = a.get(C)), (t[10] = a), (t[11] = K)) : (K = t[11]);
      var Q = K,
        X = o("WebBloksTheme").useTheme().getTheme(),
        Y = void 0;
      if (V != null) {
        var J = G != null ? G : 0,
          Z = j != null ? j : 0,
          ee = Q != null ? Q : 0,
          te = o("WebBloksUtils").getRGBColorWithTheme(V, X);
        Y = "drop-shadow(" + J + "px " + Z + "px " + ee + "px " + te + ")";
      }
      var ne;
      t[12] !== i
        ? ((ne = i("bk.components.ViewTransformsExtension")),
          (t[12] = i),
          (t[13] = ne))
        : (ne = t[13]);
      var re = o("WebBloksStyle").getStyleProps({
          height: "100%",
          width: "100%",
          transform: $,
          opacity: R,
          transition: O,
          willChange: B,
          filter: Y,
          pointerEvents: "inherit",
        }),
        oe;
      return (
        t[14] !== n || t[15] !== ne || t[16] !== re || t[17] !== x
          ? ((oe = s.jsx(
              "div",
              babelHelpers.extends(
                {},
                ne,
                { "data-bloks-visibility-state": x },
                re,
                { children: n },
              ),
            )),
            (t[14] = n),
            (t[15] = ne),
            (t[16] = re),
            (t[17] = x),
            (t[18] = oe))
          : (oe = t[18]),
        oe
      );
    }
    l.default = R;
  },
  98,
);
