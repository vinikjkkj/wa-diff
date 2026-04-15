__d(
  "WAWebStorefrontIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "storefront";
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
            d: "M4.0002 3H20.0002C20.2835 3 20.521 3.09583 20.7127 3.2875C20.9044 3.47917 21.0002 3.71667 21.0002 4C21.0002 4.28333 20.9044 4.52083 20.7127 4.7125C20.521 4.90417 20.2835 5 20.0002 5H4.0002C3.71686 5 3.47936 4.90417 3.2877 4.7125C3.09603 4.52083 3.0002 4.28333 3.0002 4C3.0002 3.71667 3.09603 3.47917 3.2877 3.2875C3.47936 3.09583 3.71686 3 4.0002 3ZM4.0002 21C3.71686 21 3.47936 20.9042 3.2877 20.7125C3.09603 20.5208 3.0002 20.2833 3.0002 20V14H2.8252C2.50853 14 2.2502 13.8792 2.0502 13.6375C1.8502 13.3958 1.78353 13.1167 1.8502 12.8L2.8502 6.8C2.9002 6.56667 3.01686 6.375 3.2002 6.225C3.38353 6.075 3.59186 6 3.8252 6H20.1752C20.4085 6 20.6169 6.075 20.8002 6.225C20.9835 6.375 21.1002 6.56667 21.1502 6.8L22.1502 12.8C22.2169 13.1167 22.1502 13.3958 21.9502 13.6375C21.7502 13.8792 21.4919 14 21.1752 14H21.0002V20C21.0002 20.2833 20.9044 20.5208 20.7127 20.7125C20.521 20.9042 20.2835 21 20.0002 21C19.7169 21 19.4794 20.9042 19.2877 20.7125C19.096 20.5208 19.0002 20.2833 19.0002 20V14H15.0002V20C15.0002 20.2833 14.9044 20.5208 14.7127 20.7125C14.521 20.9042 14.2835 21 14.0002 21H4.0002ZM5.0002 19H13.0002V14H5.0002V19ZM4.0502 12H19.9502L19.3502 8H4.6502L4.0502 12Z",
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
    l.StorefrontIcon = m;
  },
  98,
);
