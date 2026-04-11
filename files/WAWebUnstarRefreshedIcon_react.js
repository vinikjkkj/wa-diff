__d(
  "WAWebUnstarRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "unstar-refreshed";
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
      var M, w;
      n[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = c.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.74533 8.16L2.8072 4.22188C2.41668 3.83135 2.41668 3.19819 2.8072 2.80766C3.19773 2.41714 3.83089 2.41714 4.22142 2.80766L21.192 19.7782C21.5825 20.1688 21.5825 20.8019 21.192 21.1924C20.8015 21.583 20.1683 21.583 19.7778 21.1924L18.431 19.8457C18.2675 20.5959 17.383 21.0615 16.6387 20.6151L12.0001 17.8332L7.36144 20.6151C6.4528 21.16 5.33537 20.3459 5.57548 19.314L6.79399 14.0771L2.70679 10.5543C1.90226 9.86091 2.32885 8.54113 3.38705 8.44981L6.74533 8.16ZM15.9078 17.3225L16.049 17.9294L12.6172 15.8713C12.2373 15.6434 11.7628 15.6434 11.3829 15.8713L7.95108 17.9294L8.85162 14.059C8.95276 13.6243 8.80433 13.1695 8.46628 12.8781L5.45091 10.2791L8.59329 10.008L15.9078 17.3225Z",
            fill: "currentColor",
          })),
          (w = c.jsx("path", {
            d: "M13.5527 9.20828C13.5881 9.29156 13.6323 9.36947 13.684 9.44106L13.9546 9.71174C14.1275 9.83653 14.3336 9.91534 14.5539 9.93435L18.5492 10.2791L16.3863 12.1434L17.8044 13.5615L21.2933 10.5543C22.0979 9.86091 21.6713 8.54113 20.6131 8.44981L15.2051 7.98312L13.1044 3.04179C12.6903 2.06777 11.3098 2.06778 10.8957 3.04179L9.81852 5.5756L11.3435 7.10054L12.0001 5.55606L13.5527 9.20828Z",
            fill: "currentColor",
          })),
          (n[16] = M),
          (n[17] = w))
        : ((M = n[16]), (w = n[17]));
      var A;
      n[18] !== E || n[19] !== k || n[20] !== T || n[21] !== $ || n[22] !== N
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
          (n[20] = T),
          (n[21] = $),
          (n[22] = N),
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
    l.UnstarRefreshedIcon = m;
  },
  98,
);
