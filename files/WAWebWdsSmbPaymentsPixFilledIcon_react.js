__d(
  "WAWebWdsSmbPaymentsPixFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-smb-payments-pix-filled";
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
      var E = 24,
        k = 24;
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
      var M;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsxs("g", {
            fill: "currentColor",
            clipPath: "url(#a)",
            children: [
              c.jsx("path", {
                d: "M2.1 9.17a4 4 0 0 0 0 5.66l1.28 1.28h4.3a.6.6 0 0 0 .41-.17l2.33-2.32a2.12 2.12 0 0 1 2.99 0l2.33 2.33a.6.6 0 0 0 .42.17h4.45l1.29-1.3a4 4 0 0 0 0-5.65L20.62 7.9h-4.29a.6.6 0 0 0-.42.17l-2.32 2.32a2.12 2.12 0 0 1-2.99 0L8.27 8.05a.6.6 0 0 0-.42-.17H3.39L2.1 9.18Z",
              }),
              c.jsx("path", {
                d: "M18.6 18.12h-2.45a2.6 2.6 0 0 1-1.83-.76L12 15.03a.12.12 0 0 0-.16 0L9.5 17.36a2.6 2.6 0 0 1-1.83.75h-2.3l3.8 3.79a4 4 0 0 0 5.65 0l3.78-3.78ZM14.83 2.1l3.79 3.79h-2.3a2.6 2.6 0 0 0-1.82.76l-2.32 2.32a.12.12 0 0 1-.17 0L9.68 6.64a2.6 2.6 0 0 0-1.83-.76H5.4L9.17 2.1a4 4 0 0 1 5.66 0Z",
              }),
            ],
          })),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("defs", {
            children: c.jsx("clipPath", {
              id: "a",
              children: c.jsx("path", { d: "M0 0h24v24H0z" }),
            }),
          })),
          (n[17] = w))
        : (w = n[17]);
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
    l.WdsSmbPaymentsPixFilledIcon = m;
  },
  98,
);
