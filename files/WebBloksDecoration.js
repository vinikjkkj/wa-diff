__d(
  "WebBloksDecoration",
  [
    "WebBloksBooleanUtils",
    "WebBloksDrawable",
    "WebBloksModel",
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
      _ = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      f = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      g = o("WebBloksModel").defineWebBloksAttributeKey("&"),
      h = o("WebBloksModel").defineWebBloksAttributeKey("("),
      y = o("WebBloksModel").defineWebBloksAttributeKey("+"),
      C = o("WebBloksModel").defineWebBloksAttributeKey("="),
      b = o("WebBloksModel").defineWebBloksAttributeKey("."),
      v = o("WebBloksModel").defineWebBloksAttributeKey("8"),
      S = o("WebBloksModel").defineWebBloksAttributeKey("9"),
      R = o("WebBloksModel").defineWebBloksAttributeKey(":"),
      L = o("WebBloksModel").defineWebBloksAttributeKey("3"),
      E = o("WebBloksModel").defineWebBloksAttributeKey(";"),
      k = o("WebBloksModel").defineWebBloksAttributeKey("4"),
      I = o("WebBloksModel").defineWebBloksAttributeKey("+");
    function T(e, t, n, a) {
      var i = o("WebBloksTheme").useTheme().getTheme(),
        l = e == null ? void 0 : e.get(_),
        T = r("WebBloksDrawable")(l, a, { enabled: t != null ? t : void 0 }),
        D = babelHelpers.extends({}, T),
        x = e == null ? void 0 : e.get(h),
        $ = u(
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
        P = $ != null && $[3] < 1;
      if (x != null && $ != null && !P) {
        var N,
          M = o("WebBloksUtils").toPx(x),
          w = o("WebBloksUtils").convertRGBArrToString($),
          A = e == null ? void 0 : e.get(C),
          F = (N = o("WebBloksUtils").cast(A)) == null ? void 0 : N.get(I);
        if (F != null && F.length > 0)
          for (var O of F)
            e: {
              if (O === "top") {
                D.borderTop = M + " solid " + w;
                break e;
              }
              if (O === "right") {
                D.borderRight = M + " solid " + w;
                break e;
              }
              if (O === "bottom") {
                D.borderBottom = M + " solid " + w;
                break e;
              }
              if (O === "left") {
                D.borderLeft = M + " solid " + w;
                break e;
              }
              break e;
            }
        else D.border = M + " solid " + w;
      }
      var B = u(
          function () {
            if (x == null || $ == null || !P) return null;
            var e = o("WebBloksUtils").toPx(x),
              t = {
                position: "absolute",
                pointerEvents: "none",
                inset: 0,
                borderRadius: "inherit",
                border:
                  e + " solid " + o("WebBloksUtils").convertRGBArrToString($),
              };
            return s.jsx("div", { style: t });
          },
          [x, $, P],
        ),
        W = e == null ? void 0 : e.get(L),
        q = e == null ? void 0 : e.get(k);
      if (q != null || W != null) {
        var U,
          V,
          H,
          G = p;
        if (q != null) {
          var z = o("WebBloksUtils").convertThemedColorToArr(q, i),
            j = z[0],
            K = z[1],
            Q = z[2],
            X = z[3],
            Y = X * (W != null ? W : 1);
          G = o("WebBloksUtils").convertRGBArrToString([j, K, Q, Y]);
        }
        var J = (U = e == null ? void 0 : e.get(R)) != null ? U : c,
          Z = (V = e == null ? void 0 : e.get(S)) != null ? V : d,
          ee = (H = e == null ? void 0 : e.get(E)) != null ? H : m;
        D.boxShadow = J + "px " + Z + "px " + ee + "px " + G;
      }
      var te = e == null ? void 0 : e.get(y);
      (o("WebBloksBooleanUtils").isTrue(te) && (D.overflow = "hidden"),
        n &&
          !o("WebBloksBooleanUtils").isFalse(t) &&
          ((D.cursor = "pointer"), (D.pointerEvents = "auto")));
      var ne = e == null ? void 0 : e.get(b);
      if (ne != null) {
        var re = e == null ? void 0 : e.get(v);
        if (re != null && re.length > 0)
          for (var oe of re)
            switch (oe) {
              case "top_left":
                D.borderTopLeftRadius = o("WebBloksUtils").toPx(ne);
                break;
              case "top_right":
                D.borderTopRightRadius = o("WebBloksUtils").toPx(ne);
                break;
              case "bottom_right":
                D.borderBottomRightRadius = o("WebBloksUtils").toPx(ne);
                break;
              case "bottom_left":
                D.borderBottomLeftRadius = o("WebBloksUtils").toPx(ne);
                break;
              default:
                break;
            }
        else D.borderRadius = o("WebBloksUtils").toPx(ne);
      }
      return [D, B];
    }
    l.default = T;
  },
  98,
);
