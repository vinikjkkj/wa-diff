__d(
  "WAWebWdsSmbPictoReceiptAndroidIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-smb-picto-receipt-android";
    function m(t) {
      var n = o("react-compiler-runtime").c(28),
        a,
        i,
        l,
        u,
        m,
        p;
      n[0] !== t
        ? ((a = t.height),
          (l = t.iconXstyle),
          (i = t.name),
          (m = t.viewBox),
          (p = t.width),
          (u = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = m),
          (n[6] = p))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (m = n[5]),
          (p = n[6]));
      var _;
      if (m) {
        var f = m,
          g = f.height,
          h = f.width,
          y = f.x,
          C = f.y,
          b = g === void 0 ? 0 : g,
          v = h === void 0 ? 0 : h,
          S = y === void 0 ? 0 : y,
          R = C === void 0 ? 0 : C,
          L;
        (n[7] !== b || n[8] !== v || n[9] !== S || n[10] !== R
          ? ((L = [S, R, v, b]),
            (n[7] = b),
            (n[8] = v),
            (n[9] = S),
            (n[10] = R),
            (n[11] = L))
          : (L = n[11]),
          (_ = L.join(" ")));
      }
      var E = 88,
        k = 88;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _,
        D = E,
        x = k,
        $;
      n[12] !== l
        ? (($ = (s || (s = r("stylex")))(l)), (n[12] = l), (n[13] = $))
        : ($ = n[13]);
      var P = i != null ? i : d,
        N;
      n[14] !== P
        ? ((N = c.jsx("title", { children: P })), (n[14] = P), (n[15] = N))
        : (N = n[15]);
      var M, w;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            fill: "#25D366",
            stroke: "#111B21",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.238,
            d: "M66.254 13.173c2.785 0 2.785-2.673 5.57-2.673h.013v67c-2.779 0-2.785-2.674-5.564-2.674-2.78 0-2.785 2.674-5.564 2.674-2.78 0-2.786-2.674-5.565-2.674-2.779 0-2.785 2.674-5.564 2.674s-2.785-2.674-5.564-2.674-2.779 2.674-5.564 2.674-2.791-2.674-5.57-2.674c-2.78 0-2.78 2.674-5.565 2.674-2.785 0-2.785-2.674-5.57-2.674s-2.785 2.674-5.57 2.674h-.013v-67c2.78 0 2.785 2.673 5.564 2.673 2.78 0 2.785-2.673 5.564-2.673 2.78 0 2.786 2.673 5.565 2.673 2.779 0 2.785-2.673 5.564-2.673s2.785 2.673 5.564 2.673S46.764 10.5 49.55 10.5s2.792 2.673 5.57 2.673c2.78 0 2.78-2.673 5.565-2.673 2.785 0 2.785 2.673 5.57 2.673Z",
          })),
          (w = c.jsx("path", {
            stroke: "#111B21",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.238,
            d: "M28.422 27.434h31.152M28.422 44h31.152M28.422 60.565h31.152",
          })),
          (n[16] = M),
          (n[17] = w))
        : ((M = n[16]), (w = n[17]));
      var A;
      n[18] !== E || n[19] !== k || n[20] !== $ || n[21] !== N || n[22] !== _
        ? ((A = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M, w],
          })),
          (n[18] = E),
          (n[19] = k),
          (n[20] = $),
          (n[21] = N),
          (n[22] = _),
          (n[23] = A))
        : (A = n[23]);
      var F;
      return (
        n[24] !== u || n[25] !== I || n[26] !== A
          ? ((F = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: A }),
            )),
            (n[24] = u),
            (n[25] = I),
            (n[26] = A),
            (n[27] = F))
          : (F = n[27]),
        F
      );
    }
    l.WdsSmbPictoReceiptAndroidIcon = m;
  },
  98,
);
