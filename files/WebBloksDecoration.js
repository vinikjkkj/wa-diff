__d(
  "WebBloksDecoration",
  [
    "WebBloksBooleanUtils",
    "WebBloksDrawable",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = 0,
      d = 3,
      m = 6,
      p = "#000000",
      _ = "#",
      f = "$",
      g = "&",
      h = "(",
      y = "+",
      C = "=",
      b = ".",
      v = "8",
      S = "9",
      R = ":",
      L = "3",
      E = ";",
      k = "4",
      I = "+";
    function T(e, t, n, a) {
      var i = o("WebBloksTheme").useTheme().getTheme(),
        l = e == null ? void 0 : e.get(_),
        T = r("WebBloksDrawable")(l, a, { enabled: t != null ? t : void 0 }),
        D = e == null ? void 0 : e.get(h),
        x = u(
          function () {
            var t = e == null ? void 0 : e.get(g),
              n = e == null ? void 0 : e.get(f);
            return t != null
              ? o("WebBloksUtils").convertThemedColorToArr(t, i)
              : n != null
                ? o("WebBloksUtils").convertRGBOrHexStringToArr(n)
                : null;
          },
          [e, i],
        ),
        $ = x != null && x[3] < 1;
      if (D != null && x != null && !$) {
        var P,
          N = o("WebBloksUtils").toPx(D),
          M = o("WebBloksUtils").convertRGBArrToString(x),
          w = e == null ? void 0 : e.get(C),
          A = (P = o("WebBloksUtils").cast(w)) == null ? void 0 : P.get(I);
        if (A != null && A.length > 0)
          for (var F of A)
            e: {
              if (F === "top") {
                T.borderTop = N + " solid " + M;
                break e;
              }
              if (F === "right") {
                T.borderRight = N + " solid " + M;
                break e;
              }
              if (F === "bottom") {
                T.borderBottom = N + " solid " + M;
                break e;
              }
              if (F === "left") {
                T.borderLeft = N + " solid " + M;
                break e;
              }
              break e;
            }
        else T.border = N + " solid " + M;
      }
      var O = u(
          function () {
            if (D == null || x == null || !$) return null;
            var e = o("WebBloksUtils").toPx(D),
              t = {
                position: "absolute",
                pointerEvents: "none",
                inset: 0,
                borderRadius: "inherit",
                border:
                  e + " solid " + o("WebBloksUtils").convertRGBArrToString(x),
              };
            return s.jsx("div", { style: t });
          },
          [D, x, $],
        ),
        B = e == null ? void 0 : e.get(L),
        W = e == null ? void 0 : e.get(k);
      if (W != null || B != null) {
        var q,
          U,
          V,
          H = p;
        if (W != null) {
          var G = o("WebBloksUtils").convertThemedColorToArr(W, i),
            z = G[0],
            j = G[1],
            K = G[2],
            Q = G[3],
            X = Q * (B != null ? B : 1);
          H = o("WebBloksUtils").convertRGBArrToString([z, j, K, X]);
        }
        var Y = (q = e == null ? void 0 : e.get(R)) != null ? q : c,
          J = (U = e == null ? void 0 : e.get(S)) != null ? U : d,
          Z = (V = e == null ? void 0 : e.get(E)) != null ? V : m;
        T.boxShadow = Y + "px " + J + "px " + Z + "px " + H;
      }
      var ee = e == null ? void 0 : e.get(y);
      (o("WebBloksBooleanUtils").isTrue(ee) && (T.overflow = "hidden"),
        n &&
          !o("WebBloksBooleanUtils").isFalse(t) &&
          ((T.cursor = "pointer"), (T.pointerEvents = "auto")));
      var te = e == null ? void 0 : e.get(b);
      if (te != null) {
        var ne = e == null ? void 0 : e.get(v);
        if (ne != null && ne.length > 0)
          for (var re of ne)
            switch (re) {
              case "top_left":
                T.borderTopLeftRadius = o("WebBloksUtils").toPx(te);
                break;
              case "top_right":
                T.borderTopRightRadius = o("WebBloksUtils").toPx(te);
                break;
              case "bottom_right":
                T.borderBottomRightRadius = o("WebBloksUtils").toPx(te);
                break;
              case "bottom_left":
                T.borderBottomLeftRadius = o("WebBloksUtils").toPx(te);
                break;
              default:
                break;
            }
        else T.borderRadius = o("WebBloksUtils").toPx(te);
      }
      return [T, O];
    }
    l.default = T;
  },
  98,
);
