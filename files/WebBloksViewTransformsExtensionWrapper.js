__d(
  "WebBloksViewTransformsExtensionWrapper",
  [
    "WebBloksEnvironmentContext",
    "WebBloksModel",
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
      var t = o("react-compiler-runtime").c(21),
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
        }),
        $;
      t[2] !== x
        ? (($ =
            typeof x == "string" ? { "data-bloks-visibility-state": x } : {}),
          (t[2] = x),
          (t[3] = $))
        : ($ = t[3]);
      var P = $;
      (T != null && l.push("translateX(" + o("WebBloksUtils").toPx(T) + ")"),
        D != null && l.push("translateY(" + o("WebBloksUtils").toPx(D) + ")"),
        E != null && l.push("rotate(" + E + "deg)"),
        k != null && l.push("scaleX(" + k + ")"),
        I != null && l.push("scaleY(" + I + ")"));
      var N = l.join(" "),
        M = a.get(g),
        w;
      t[4] !== a ? ((w = a.get(h)), (t[4] = a), (t[5] = w)) : (w = t[5]);
      var A = w,
        F;
      t[6] !== a ? ((F = a.get(f)), (t[6] = a), (t[7] = F)) : (F = t[7]);
      var O = F,
        B = a.get(y),
        W = void 0,
        q = void 0;
      if (M != null && M > 0) {
        var U = A != null ? A : "ease",
          V = M + "s",
          H = O != null ? " " + O + "s" : "";
        ((W = "transform " + V + " " + U + H + ", opacity " + V + " " + U + H),
          B !== !1 && (q = "transform, opacity"));
      } else B === !0 && (q = "transform, opacity");
      var G = a.get(b),
        z;
      t[8] !== a ? ((z = a.get(v)), (t[8] = a), (t[9] = z)) : (z = t[9]);
      var j = z,
        K;
      t[10] !== a ? ((K = a.get(S)), (t[10] = a), (t[11] = K)) : (K = t[11]);
      var Q = K,
        X;
      t[12] !== a ? ((X = a.get(C)), (t[12] = a), (t[13] = X)) : (X = t[13]);
      var Y = X,
        J = o("WebBloksTheme").useTheme().getTheme(),
        Z = void 0;
      if (G != null) {
        var ee = j != null ? j : 0,
          te = Q != null ? Q : 0,
          ne = Y != null ? Y : 0,
          re = o("WebBloksUtils").getRGBColorWithTheme(G, J);
        Z = "drop-shadow(" + ee + "px " + te + "px " + ne + "px " + re + ")";
      }
      var oe;
      t[14] !== i
        ? ((oe = i("bk.components.ViewTransformsExtension")),
          (t[14] = i),
          (t[15] = oe))
        : (oe = t[15]);
      var ae = o("WebBloksStyle").getStyleProps({
          height: "100%",
          width: "100%",
          transform: N,
          opacity: R,
          transition: W,
          willChange: q,
          filter: Z,
          pointerEvents: "inherit",
        }),
        ie;
      return (
        t[16] !== n || t[17] !== oe || t[18] !== ae || t[19] !== P
          ? ((ie = s.jsx(
              "div",
              babelHelpers.extends({}, oe, P, ae, { children: n }),
            )),
            (t[16] = n),
            (t[17] = oe),
            (t[18] = ae),
            (t[19] = P),
            (t[20] = ie))
          : (ie = t[20]),
        ie
      );
    }
    l.default = R;
  },
  98,
);
