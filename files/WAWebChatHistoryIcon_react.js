__d(
  "WAWebChatHistoryIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "chat-history";
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
        k = 22;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 22 20",
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
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.14407 10.0018C3.14407 4.94179 7.31407 0.861789 12.4041 1.00179C17.0941 1.13179 21.0141 5.05179 21.1441 9.74179C21.2841 14.8318 17.1941 19.0018 12.1441 19.0018C10.0641 19.0018 8.14407 18.2918 6.62407 17.1018C6.15407 16.7318 6.12407 16.0318 6.54407 15.6018C6.90407 15.2418 7.46407 15.2118 7.86407 15.5218C9.04407 16.4518 10.5341 17.0018 12.1441 17.0018C16.0441 17.0018 19.1941 13.8118 19.1441 9.90179C19.0941 6.18179 15.9641 3.05179 12.2441 3.00179C8.32407 2.95179 5.14407 6.10179 5.14407 10.0018H6.94407C7.38407 10.0018 7.61407 10.5418 7.29407 10.8518L4.50407 13.6518C4.30407 13.8518 3.99407 13.8518 3.79407 13.6518L1.00407 10.8518C0.684073 10.5418 0.904073 10.0018 1.35407 10.0018H3.14407ZM11.1441 6.75179C11.1441 6.34179 11.4841 6.00179 11.8941 6.00179C12.3141 6.00179 12.6441 6.34179 12.6441 6.74179V10.1418L15.5241 11.8518C15.8741 12.0618 15.9941 12.5218 15.7841 12.8818C15.5741 13.2318 15.1141 13.3518 14.7541 13.1418L11.6341 11.2918C11.3341 11.1118 11.1441 10.7818 11.1441 10.4318V6.75179Z",
            fill: "#8696A0",
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
    l.ChatHistoryIcon = m;
  },
  98,
);
