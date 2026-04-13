__d(
  "WAWebPollRefreshedThinIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "poll-refreshed-thin";
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
      var E = 20,
        k = 16;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 16 20",
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
            d: "M1 6C1 5.72222 1.09722 5.48611 1.29167 5.29167C1.48611 5.09722 1.72222 5 2 5L10 5C10.2778 5 10.5139 5.09722 10.7083 5.29167C10.9028 5.48611 11 5.72222 11 6C11 6.27778 10.9028 6.51389 10.7083 6.70833C10.5139 6.90278 10.2778 7 10 7L2 7C1.72222 7 1.48611 6.90278 1.29167 6.70833C1.09722 6.51389 1 6.27778 1 6ZM1 10C1 9.72222 1.09722 9.48611 1.29167 9.29167C1.48611 9.09722 1.72222 9 2 9L14 9C14.2778 9 14.5139 9.09722 14.7083 9.29167C14.9028 9.48611 15 9.72222 15 10C15 10.2778 14.9028 10.5139 14.7083 10.7083C14.5139 10.9028 14.2778 11 14 11L2 11C1.72222 11 1.48611 10.9028 1.29167 10.7083C1.09722 10.5139 1 10.2778 1 10ZM1 14C1 13.7222 1.09722 13.4861 1.29167 13.2917C1.48611 13.0972 1.72222 13 2 13L7 13C7.27778 13 7.51389 13.0972 7.70833 13.2917C7.90278 13.4861 8 13.7222 8 14C8 14.2778 7.90278 14.5139 7.70833 14.7083C7.51389 14.9028 7.27778 15 7 15L2 15C1.72222 15 1.48611 14.9028 1.29167 14.7083C1.09722 14.5139 1 14.2778 1 14Z",
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
    l.PollRefreshedThinIcon = m;
  },
  98,
);
