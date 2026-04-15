__d(
  "WAWebReplyRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "reply-refreshed";
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
            d: "M6.8249 12L9.7249 14.9C9.9249 15.1 10.0207 15.3334 10.0124 15.6C10.0041 15.8667 9.8999 16.1 9.6999 16.3C9.4999 16.4834 9.26657 16.5792 8.9999 16.5875C8.73324 16.5959 8.4999 16.5 8.2999 16.3L3.6999 11.7C3.4999 11.5 3.3999 11.2667 3.3999 11C3.3999 10.7334 3.4999 10.5 3.6999 10.3L8.2999 5.70005C8.48324 5.51672 8.7124 5.42505 8.9874 5.42505C9.2624 5.42505 9.4999 5.51672 9.6999 5.70005C9.8999 5.90005 9.9999 6.13755 9.9999 6.41255C9.9999 6.68755 9.8999 6.92505 9.6999 7.12505L6.8249 10H15.9999C17.3832 10 18.5624 10.4875 19.5374 11.4625C20.5124 12.4375 20.9999 13.6167 20.9999 15V18C20.9999 18.2834 20.9041 18.5209 20.7124 18.7125C20.5207 18.9042 20.2832 19 19.9999 19C19.7166 19 19.4791 18.9042 19.2874 18.7125C19.0957 18.5209 18.9999 18.2834 18.9999 18V15C18.9999 14.1667 18.7082 13.4584 18.1249 12.875C17.5416 12.2917 16.8332 12 15.9999 12H6.8249Z",
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
    l.ReplyRefreshedIcon = m;
  },
  98,
);
