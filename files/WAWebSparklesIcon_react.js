__d(
  "WAWebSparklesIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "sparkles";
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
      var E = 25,
        k = 24;
      (a != null || p != null) && ((E = a), (k = p));
      var I = i != null ? i : d,
        T = _ != null ? _ : "0 0 24 25",
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
            d: "M6.96618 14.136C6.90537 13.8719 6.74322 13.75 6.49997 13.75C6.25672 13.75 6.07429 13.8922 6.03376 14.136C5.46619 17.1834 5.48646 17.1631 2.42568 17.7726C2.14189 17.8335 2 18.0164 2 18.2398C2 18.4836 2.14189 18.6665 2.42568 18.7274C5.48646 19.3369 5.38511 19.3572 6.03376 22.3437C6.07429 22.5875 6.25672 22.75 6.49997 22.75C6.76347 22.75 6.90537 22.6078 6.96618 22.3437C7.61483 19.3572 7.51347 19.3369 10.5743 18.7274C10.8377 18.6665 11 18.5039 11 18.2398C11 17.996 10.8377 17.8335 10.5743 17.7726C7.51724 17.2044 7.51348 17.1835 6.9682 14.1472L6.96618 14.136Z",
            fill: "currentColor",
            style: { fillOpacity: 1 },
          })),
          (n[16] = M))
        : (M = n[16]);
      var w;
      n[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = c.jsx("path", {
            d: "M15.1417 3.39253C15.1195 2.99372 14.854 2.75 14.4779 2.75C14.146 2.75 13.8805 2.99372 13.8585 3.34822C13.1506 8.57718 12.9956 8.55501 7.57521 9.61853C7.24331 9.66284 7 9.90658 7 10.2611C7 10.6156 7.24331 10.8593 7.57521 10.9036C12.9956 11.6791 13.1725 11.8342 13.8585 17.1296C13.8805 17.5063 14.146 17.75 14.4779 17.75C14.854 17.75 15.1195 17.5063 15.1417 17.1075C15.7833 11.9007 16.0708 11.9228 21.4248 10.9036C21.7567 10.8371 22 10.6156 22 10.2611C22 9.88441 21.7567 9.66284 21.3362 9.61853C16.0266 8.73228 15.7833 8.59932 15.1417 3.39253Z",
            fill: "currentColor",
            style: { fillOpacity: 1 },
          })),
          (n[17] = w))
        : (w = n[17]);
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
    l.SparklesIcon = m;
  },
  98,
);
