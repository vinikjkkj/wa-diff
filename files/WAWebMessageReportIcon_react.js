__d(
  "WAWebMessageReportIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "message-report";
    function m(t) {
      var n = o("react-compiler-runtime").c(29),
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
      var M, w, A;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.941247 5.52617L2.99693 8.84848V17.3333C2.99693 18.8061 4.19083 20 5.66359 20H19.3303C20.803 20 21.9969 18.8061 21.9969 17.3333V6.66667C21.9969 5.19391 20.803 4 19.3303 4H1.79162C1.00821 4 0.529036 4.85997 0.941247 5.52617ZM4.99693 8.27977V17.3333C4.99693 17.7015 5.2954 18 5.66359 18H19.3303C19.6985 18 19.9969 17.7015 19.9969 17.3333V6.66667C19.9969 6.29848 19.6985 6 19.3303 6H3.58632L4.99693 8.27977Z",
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            d: "M13.1061 15.7125C12.9144 15.9042 12.6769 16 12.3936 16C12.1102 16 11.8727 15.9042 11.6811 15.7125C11.4894 15.5208 11.3936 15.2833 11.3936 15C11.3936 14.7167 11.4894 14.4792 11.6811 14.2875C11.8727 14.0958 12.1102 14 12.3936 14C12.6769 14 12.9144 14.0958 13.1061 14.2875C13.2977 14.4792 13.3936 14.7167 13.3936 15C13.3936 15.2833 13.2977 15.5208 13.1061 15.7125Z",
            fill: "currentColor",
          })),
          (A = c.jsx("path", {
            d: "M13.1061 12.7125C12.9144 12.9042 12.6769 13 12.3936 13C12.2602 13 12.1311 12.975 12.0061 12.925C11.8811 12.875 11.7727 12.8042 11.6811 12.7125C11.5894 12.6208 11.5186 12.5125 11.4686 12.3875C11.4186 12.2625 11.3936 12.1333 11.3936 12V9C11.3936 8.71667 11.4894 8.47917 11.6811 8.2875C11.8727 8.09583 12.1102 8 12.3936 8C12.6769 8 12.9144 8.09583 13.1061 8.2875C13.2977 8.47917 13.3936 8.71667 13.3936 9V12C13.3936 12.2833 13.2977 12.5208 13.1061 12.7125Z",
            fill: "currentColor",
          })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A))
        : ((M = n[16]), (w = n[17]), (A = n[18]));
      var F;
      n[19] !== E || n[20] !== k || n[21] !== T || n[22] !== $ || n[23] !== N
        ? ((F = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, M, w, A],
          })),
          (n[19] = E),
          (n[20] = k),
          (n[21] = T),
          (n[22] = $),
          (n[23] = N),
          (n[24] = F))
        : (F = n[24]);
      var O;
      return (
        n[25] !== u || n[26] !== I || n[27] !== F
          ? ((O = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: F }),
            )),
            (n[25] = u),
            (n[26] = I),
            (n[27] = F),
            (n[28] = O))
          : (O = n[28]),
        O
      );
    }
    l.MessageReportIcon = m;
  },
  98,
);
