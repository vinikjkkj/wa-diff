__d(
  "WAWebWdsIcPhotoAiIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-photo-ai";
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
      var M, w;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            fill: "currentColor",
            d: "M14.79 4a1 1 0 0 0-1-1H5c-.55 0-1.02.2-1.41.59C3.19 3.98 3 4.45 3 5v14c0 .55.2 1.02.59 1.41.39.4.86.59 1.41.59h14c.55 0 1.02-.2 1.41-.59.4-.39.59-.86.59-1.41v-8.32a1 1 0 1 0-2 0V19H5V5h8.79a1 1 0 0 0 1-1ZM19.47.64a.58.58 0 0 1 1.06 0l.77 1.78c.06.14.16.24.3.3l1.79.77c.47.2.47.86 0 1.06l-1.79.76a.58.58 0 0 0-.3.3l-.79 1.83a.58.58 0 0 1-1.05 0l-.84-1.83a.58.58 0 0 0-.3-.3l-1.73-.76a.58.58 0 0 1 0-1.06l1.8-.77a.58.58 0 0 0 .3-.3l.78-1.78Z",
          })),
          (w = c.jsx("path", {
            fill: "currentColor",
            d: "M7 16.93h10c.2 0 .35-.1.45-.28a.44.44 0 0 0-.05-.52l-2.75-3.68a.48.48 0 0 0-.4-.2c-.17 0-.3.07-.4.2l-2.6 3.48-1.85-2.48a.48.48 0 0 0-.4-.2c-.17 0-.3.07-.4.2l-2 2.68a.44.44 0 0 0-.05.52c.1.19.25.28.45.28Z",
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
    l.WdsIcPhotoAiIcon = m;
  },
  98,
);
