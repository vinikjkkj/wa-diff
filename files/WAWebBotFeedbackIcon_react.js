__d(
  "WAWebBotFeedbackIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "bot-feedback";
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
        ? ((M = c.jsx("g", {
            children: c.jsx("path", {
              d: "M2 14C1.45 14 0.979167 13.8041 0.5875 13.4125C0.195833 13.0208 0 12.55 0 12V6.22496C0 5.9583 0.05 5.70413 0.15 5.46246C0.25 5.2208 0.391667 5.0083 0.575 4.82496L4.65 0.749964C4.81667 0.583297 5.025 0.487464 5.275 0.462464C5.525 0.437464 5.75 0.491631 5.95 0.624964C6.15 0.758297 6.3 0.937464 6.4 1.16246C6.5 1.38746 6.525 1.61663 6.475 1.84996L5.8 4.99996H10.05C10.85 4.99996 11.425 5.3083 11.775 5.92496C12.125 6.54163 12.1667 7.16663 11.9 7.79996L9.775 12.775C9.60833 13.1583 9.3625 13.4583 9.0375 13.675C8.7125 13.8916 8.35 14 7.95 14H2ZM7.95 12L10 7.14996V6.99996H3.35L3.95 4.29996L2 6.19996V12H7.95ZM17.85 23.225C17.6833 23.0916 17.5792 22.925 17.5375 22.725C17.4958 22.525 17.4917 22.3333 17.525 22.15L18.2 19H14C13.2 19 12.6125 18.6958 12.2375 18.0875C11.8625 17.4791 11.8167 16.85 12.1 16.2L14.225 11.225C14.3917 10.8416 14.6375 10.5416 14.9625 10.325C15.2875 10.1083 15.65 9.99996 16.05 9.99996H22C22.55 9.99996 23.0208 10.1958 23.4125 10.5875C23.8042 10.9791 24 11.45 24 12V17.775C24 18.0416 23.95 18.2958 23.85 18.5375C23.75 18.7791 23.6083 18.9916 23.425 19.175L19.35 23.25C19.1333 23.4666 18.8833 23.5625 18.6 23.5375C18.3167 23.5125 18.0667 23.4083 17.85 23.225ZM16.05 12L14 16.85V17H20.65L20.05 19.7L22 17.8V12H16.05Z",
              fill: "currentColor",
            }),
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
    l.BotFeedbackIcon = m;
  },
  98,
);
