__d(
  "WAWebTrashActiveIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "trash-active";
    function m(t) {
      var n = o("react-compiler-runtime").c(30),
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
      var M, w, A, F;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("path", {
            d: "M16 7.5H22.25C22.6642 7.5 23 7.83579 23 8.25C23 8.66421 22.6642 9 22.25 9H16V7.5Z",
            fill: "currentColor",
          })),
          (A = c.jsx("path", {
            d: "M16 12H21.25C21.6642 12 22 12.3358 22 12.75C22 13.1642 21.6642 13.5 21.25 13.5H16V12Z",
            fill: "currentColor",
          })),
          (F = c.jsx("path", {
            d: "M16 16.5H19.25C19.6642 16.5 20 16.8358 20 17.25C20 17.6642 19.6642 18 19.25 18H16V16.5Z",
            fill: "currentColor",
          })),
          (M = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M11 4.88889H13.1429C13.6143 4.88889 14 5.28889 14 5.77778C14 6.26667 13.6143 6.66667 13.1429 6.66667H2.85714C2.38571 6.66667 2 6.26667 2 5.77778C2 5.28889 2.38571 4.88889 2.85714 4.88889H5L5.60857 4.25778C5.76286 4.09778 5.98571 4 6.20857 4H9.79143C10.0143 4 10.2371 4.09778 10.3914 4.25778L11 4.88889ZM4.57143 20C3.62857 20 2.85714 19.2 2.85714 18.2222V9.33333C2.85714 8.35556 3.62857 7.55556 4.57143 7.55556H11.4286C12.3714 7.55556 13.1429 8.35556 13.1429 9.33333V18.2222C13.1429 19.2 12.3714 20 11.4286 20H4.57143Z",
            fill: "currentColor",
          })),
          (n[16] = M),
          (n[17] = w),
          (n[18] = A),
          (n[19] = F))
        : ((M = n[16]), (w = n[17]), (A = n[18]), (F = n[19]));
      var O;
      n[20] !== E || n[21] !== k || n[22] !== T || n[23] !== $ || n[24] !== N
        ? ((O = c.jsxs("svg", {
            viewBox: T,
            height: D,
            width: x,
            preserveAspectRatio: "xMidYMid meet",
            className: $,
            fill: "none",
            children: [N, w, A, F, M],
          })),
          (n[20] = E),
          (n[21] = k),
          (n[22] = T),
          (n[23] = $),
          (n[24] = N),
          (n[25] = O))
        : (O = n[25]);
      var B;
      return (
        n[26] !== u || n[27] !== I || n[28] !== O
          ? ((B = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: I }, u, { children: O }),
            )),
            (n[26] = u),
            (n[27] = I),
            (n[28] = O),
            (n[29] = B))
          : (B = n[29]),
        B
      );
    }
    l.TrashActiveIcon = m;
  },
  98,
);
