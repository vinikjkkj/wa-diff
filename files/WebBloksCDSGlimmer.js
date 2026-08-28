__d(
  "WebBloksCDSGlimmer",
  [
    "WebBloksStyle",
    "WebBloksTheme",
    "WebBloksUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo,
      c = 200,
      d = "#",
      m = "$",
      p = "&",
      _ = "(",
      f = ")",
      g = "*",
      h = "#",
      y = "$";
    function C(e) {
      var t = o("react-compiler-runtime").c(34),
        n = e.node,
        r = o("WebBloksTheme").useTheme(),
        a,
        i,
        l;
      if (t[0] !== n || t[1] !== r) {
        ((l = r.getTheme()), (a = n.get(_)));
        var u = n.get(d);
        ((i =
          u != null ? o("WebBloksUtils").getRGBColorWithTheme(u, l) : void 0),
          (t[0] = n),
          (t[1] = r),
          (t[2] = a),
          (t[3] = i),
          (t[4] = l));
      } else ((a = t[2]), (i = t[3]), (l = t[4]));
      var C = i,
        v;
      if (t[5] !== n) {
        var S;
        ((v = (S = n.get(g)) != null ? S : "rectangle"),
          (t[5] = n),
          (t[6] = v));
      } else v = t[6];
      var R = v,
        L;
      t[7] !== n || t[8] !== R
        ? ((L = R === "circle" ? "50%" : o("WebBloksUtils").toPx(n.get(m))),
          (t[7] = n),
          (t[8] = R),
          (t[9] = L))
        : (L = t[9]);
      var E = L,
        k,
        I;
      if (t[10] !== n) {
        var T,
          D,
          x = n.get(p);
        ((k = (T = x == null ? void 0 : x.get(y)) != null ? T : 0.05),
          (I = (D = x == null ? void 0 : x.get(h)) != null ? D : 0.15),
          (t[10] = n),
          (t[11] = k),
          (t[12] = I));
      } else ((k = t[11]), (I = t[12]));
      var $ = I,
        P,
        N;
      if (t[13] !== n) {
        var M,
          w,
          A = n.get(f);
        ((P = (M = A == null ? void 0 : A.get(y)) != null ? M : 0.3),
          (N = (w = A == null ? void 0 : A.get(h)) != null ? w : 0.5),
          (t[13] = n),
          (t[14] = P),
          (t[15] = N));
      } else ((P = t[14]), (N = t[15]));
      var F = N,
        O;
      t[16] !== $ || t[17] !== k
        ? ((O = o("WebBloksStyle").keyframes({
            "0%": { opacity: k },
            "100%": { opacity: $ },
          })),
          (t[16] = $),
          (t[17] = k),
          (t[18] = O))
        : (O = t[18]);
      var B;
      t[19] !== F || t[20] !== P
        ? ((B = o("WebBloksStyle").keyframes({
            "0%": { opacity: P },
            "100%": { opacity: F },
          })),
          (t[19] = F),
          (t[20] = P),
          (t[21] = B))
        : (B = t[21]);
      var W;
      t[22] !== O || t[23] !== B
        ? ((W = { darkFade: O, lightFade: B }),
          (t[22] = O),
          (t[23] = B),
          (t[24] = W))
        : (W = t[24]);
      var q = W,
        U = q.darkFade,
        V = q.lightFade,
        H = l === o("WebBloksTheme").THEME.light ? V : U,
        G = l === o("WebBloksTheme").THEME.light ? P : k,
        z = (a % 10) * c + "ms",
        j;
      t[25] !== H || t[26] !== E || t[27] !== G || t[28] !== C || t[29] !== z
        ? ((j = {
            animationDelay: z,
            animationName: H,
            backgroundColor: C,
            borderRadius: E,
            opacity: G,
          }),
          (t[25] = H),
          (t[26] = E),
          (t[27] = G),
          (t[28] = C),
          (t[29] = z),
          (t[30] = j))
        : (j = t[30]);
      var K;
      return (
        t[31] !== n.styleId || t[32] !== j
          ? ((K = s.jsx("div", {
              "data-bloks-name": n.styleId,
              className: b.root,
              style: j,
            })),
            (t[31] = n.styleId),
            (t[32] = j),
            (t[33] = K))
          : (K = t[33]),
        K
      );
    }
    var b = o("WebBloksStyle").createStyles({
      root: {
        animationDirection: "alternate",
        animationDuration: "1s",
        animationIterationCount: "infinite",
        animationTimingFunction: "cubic-bezier(0.5, 0.0, 0.5, 1.0)",
        height: "100%",
        width: "100%",
        pointerEvents: "initial",
      },
    });
    l.default = C;
  },
  98,
);
