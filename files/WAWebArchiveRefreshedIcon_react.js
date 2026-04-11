__d(
  "WAWebArchiveRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "archive-refreshed";
    function m(t) {
      var n,
        a = o("react-compiler-runtime").c(33),
        i,
        l,
        u,
        m,
        p,
        _,
        f;
      a[0] !== t
        ? ((i = t.height),
          (u = t.iconXstyle),
          (m = t.innerStyles),
          (l = t.name),
          (_ = t.viewBox),
          (f = t.width),
          (p = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (a[0] = t),
          (a[1] = i),
          (a[2] = l),
          (a[3] = u),
          (a[4] = m),
          (a[5] = p),
          (a[6] = _),
          (a[7] = f))
        : ((i = a[1]),
          (l = a[2]),
          (u = a[3]),
          (m = a[4]),
          (p = a[5]),
          (_ = a[6]),
          (f = a[7]));
      var g;
      if (_) {
        var h = _,
          y = h.height,
          C = h.width,
          b = h.x,
          v = h.y,
          S = y === void 0 ? 0 : y,
          R = C === void 0 ? 0 : C,
          L = b === void 0 ? 0 : b,
          E = v === void 0 ? 0 : v,
          k;
        (a[8] !== S || a[9] !== R || a[10] !== L || a[11] !== E
          ? ((k = [L, E, R, S]),
            (a[8] = S),
            (a[9] = R),
            (a[10] = L),
            (a[11] = E),
            (a[12] = k))
          : (k = a[12]),
          (g = k.join(" ")));
      }
      var I = 24,
        T = 24;
      (i != null || f != null) && ((I = i), (T = f));
      var D = l != null ? l : d,
        x = g != null ? g : "0 0 24 24",
        $ = I,
        P = T,
        N;
      a[13] !== u
        ? ((N = (s || (s = r("stylex")))(u)), (a[13] = u), (a[14] = N))
        : (N = a[14]);
      var M = l != null ? l : d,
        w;
      a[15] !== M
        ? ((w = c.jsx("title", { children: M })), (a[15] = M), (a[16] = w))
        : (w = a[16]);
      var A;
      a[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = c.jsx("path", {
            d: "M5 8V19H19V8H5ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V6.525C3 6.29167 3.0375 6.06667 3.1125 5.85C3.1875 5.63333 3.3 5.43333 3.45 5.25L4.7 3.725C4.88333 3.49167 5.1125 3.3125 5.3875 3.1875C5.6625 3.0625 5.95 3 6.25 3H17.75C18.05 3 18.3375 3.0625 18.6125 3.1875C18.8875 3.3125 19.1167 3.49167 19.3 3.725L20.55 5.25C20.7 5.43333 20.8125 5.63333 20.8875 5.85C20.9625 6.06667 21 6.29167 21 6.525V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5ZM5.4 6H18.6L17.75 5H6.25L5.4 6Z",
            fill: "currentColor",
          })),
          (a[17] = A))
        : (A = a[17]);
      var F;
      if (a[18] !== ((n = m) == null ? void 0 : n.arrow)) {
        var O, B;
        ((F = (s || (s = r("stylex")))((O = m) == null ? void 0 : O.arrow)),
          (a[18] = (B = m) == null ? void 0 : B.arrow),
          (a[19] = F));
      } else F = a[19];
      var W;
      a[20] !== F
        ? ((W = c.jsx("path", {
            d: "M15.3 14.45L12 17.75L8.7 14.45C8.3134 14.0634 8.3134 13.4366 8.7 13.05C9.0866 12.6634 9.7134 12.6634 10.1 13.05L11 13.95V10.75C11 10.1977 11.4477 9.75 12 9.75C12.5523 9.75 13 10.1977 13 10.75V13.95L13.9 13.05C14.2866 12.6634 14.9134 12.6634 15.3 13.05C15.6866 13.4366 15.6866 14.0634 15.3 14.45Z",
            fill: "currentColor",
            className: F,
          })),
          (a[20] = F),
          (a[21] = W))
        : (W = a[21]);
      var q;
      a[22] !== I ||
      a[23] !== T ||
      a[24] !== x ||
      a[25] !== N ||
      a[26] !== w ||
      a[27] !== W
        ? ((q = c.jsxs("svg", {
            viewBox: x,
            height: $,
            width: P,
            preserveAspectRatio: "xMidYMid meet",
            className: N,
            fill: "none",
            children: [w, A, W],
          })),
          (a[22] = I),
          (a[23] = T),
          (a[24] = x),
          (a[25] = N),
          (a[26] = w),
          (a[27] = W),
          (a[28] = q))
        : (q = a[28]);
      var U;
      return (
        a[29] !== p || a[30] !== D || a[31] !== q
          ? ((U = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: D }, p, { children: q }),
            )),
            (a[29] = p),
            (a[30] = D),
            (a[31] = q),
            (a[32] = U))
          : (U = a[32]),
        U
      );
    }
    l.ArchiveRefreshedIcon = m;
  },
  98,
);
