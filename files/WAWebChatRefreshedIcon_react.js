__d(
  "WAWebChatRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "chat-refreshed";
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
            d: "M3.00013 9L0.940133 5.53C0.540219 4.86348 1.01283 4 1.79012 4H19.3335C20.8062 4 22.0001 5.19391 22.0001 6.66667V17.3333C22.0001 18.8061 20.8062 20 19.3335 20H5.6668C4.19404 20 3.00013 18.8061 3.00013 17.3333V9ZM5.00013 8.44603L3.53252 6H19.3335C19.7017 6 20.0001 6.29848 20.0001 6.66667V17.3333C20.0001 17.7015 19.7017 18 19.3335 18H5.6668C5.29861 18 5.00013 17.7015 5.00013 17.3333V8.44603Z",
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            d: "M7.00013 10C7.00013 9.44772 7.44785 9 8.00013 9H17.0001C17.5524 9 18.0001 9.44772 18.0001 10C18.0001 10.5523 17.5524 11 17.0001 11H8.00013C7.44785 11 7.00013 10.5523 7.00013 10Z",
            fill: "currentColor",
          })),
          (A = c.jsx("path", {
            d: "M7.00013 14C7.00013 13.4477 7.44785 13 8.00013 13H14.0001C14.5524 13 15.0001 13.4477 15.0001 14C15.0001 14.5523 14.5524 15 14.0001 15H8.00013C7.44785 15 7.00013 14.5523 7.00013 14Z",
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
    l.ChatRefreshedIcon = m;
  },
  98,
);
