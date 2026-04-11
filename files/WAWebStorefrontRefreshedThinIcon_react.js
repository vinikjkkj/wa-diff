__d(
  "WAWebStorefrontRefreshedThinIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "storefront-refreshed-thin";
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
        k = 18;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 18 20",
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
            d: "M2.74974 3H15.2441C15.4565 3 15.6356 3.07146 15.7814 3.21437C15.9272 3.35729 16.0002 3.53437 16.0002 3.74562C16.0002 3.95687 15.9283 4.13542 15.7847 4.28125C15.641 4.42708 15.4629 4.5 15.2506 4.5H2.75619C2.54383 4.5 2.36474 4.42854 2.2189 4.28563C2.07307 4.14271 2.00015 3.96563 2.00015 3.75438C2.00015 3.54313 2.07196 3.36458 2.21557 3.21875C2.35932 3.07292 2.53737 3 2.74974 3ZM2.75015 17.5C2.53765 17.5 2.35953 17.4281 2.21578 17.2844C2.07203 17.1406 2.00015 16.9625 2.00015 16.75V12H1.58349C1.34738 12 1.14946 11.9028 0.989736 11.7083C0.830014 11.5139 0.784875 11.2986 0.85432 11.0625L1.85432 6.0625C1.89168 5.89847 1.9789 5.76368 2.11599 5.65813C2.25321 5.55271 2.40904 5.5 2.58349 5.5H15.4233C15.5995 5.5 15.7549 5.55271 15.8893 5.65813C16.0238 5.76368 16.1093 5.89847 16.146 6.0625L17.146 11.0625C17.2154 11.2986 17.1703 11.5139 17.0106 11.7083C16.8508 11.9028 16.6529 12 16.4168 12H16.0002V16.7442C16.0002 16.9564 15.9287 17.1354 15.7858 17.2812C15.6429 17.4271 15.4658 17.5 15.2545 17.5C15.0433 17.5 14.8647 17.4281 14.7189 17.2844C14.5731 17.1406 14.5002 16.9625 14.5002 16.75V12H11.0002V16.7442C11.0002 16.9564 10.9283 17.1354 10.7845 17.2812C10.6408 17.4271 10.4627 17.5 10.2502 17.5H2.75015ZM3.50015 16H9.50015V12H3.50015V16ZM2.54182 10.5H15.4585L14.8335 7H3.16682L2.54182 10.5Z",
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
    l.StorefrontRefreshedThinIcon = m;
  },
  98,
);
