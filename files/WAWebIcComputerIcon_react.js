__d(
  "WAWebIcComputerIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-computer";
    function m(t) {
      var n = o("react-compiler-runtime").c(27),
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
      var E = 24,
        k = 24;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 24 24",
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
      var M;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            d: "M2 21C1.71667 21 1.47917 20.9042 1.2875 20.7125C1.09583 20.5208 1 20.2833 1 20C1 19.7167 1.09583 19.4792 1.2875 19.2875C1.47917 19.0958 1.71667 19 2 19H22C22.2833 19 22.5208 19.0958 22.7125 19.2875C22.9042 19.4792 23 19.7167 23 20C23 20.2833 22.9042 20.5208 22.7125 20.7125C22.5208 20.9042 22.2833 21 22 21H2ZM4 18C3.45 18 2.97917 17.8042 2.5875 17.4125C2.19583 17.0208 2 16.55 2 16V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H20C20.55 3 21.0208 3.19583 21.4125 3.5875C21.8042 3.97917 22 4.45 22 5V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H4ZM4 16H20V5H4V16Z",
            fill: "currentColor",
          })),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] !== E || n[18] !== k || n[19] !== T || n[20] !== $ || n[21] !== N
        ? ((w = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M],
          })),
          (n[17] = E),
          (n[18] = k),
          (n[19] = T),
          (n[20] = $),
          (n[21] = N),
          (n[22] = w))
        : (w = n[22]);
      var A;
      return (
        n[23] !== u || n[24] !== I || n[25] !== w
          ? ((A = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: w }),
            )),
            (n[23] = u),
            (n[24] = I),
            (n[25] = w),
            (n[26] = A))
          : (A = n[26]),
        A
      );
    }
    l.IcComputerIcon = m;
  },
  98,
);
