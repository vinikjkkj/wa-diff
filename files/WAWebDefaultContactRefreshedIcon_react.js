__d(
  "WAWebDefaultContactRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "default-contact-refreshed";
    function m(t) {
      var n,
        a = o("react-compiler-runtime").c(32),
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
      var I = 212,
        T = 212;
      (i != null || f != null) && ((I = i), (T = f));
      var D = l != null ? l : d,
        x = g != null ? g : "0 0 48 48",
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
      if (a[17] !== ((n = m) == null ? void 0 : n.primary)) {
        var F, O;
        ((A = (s || (s = r("stylex")))((F = m) == null ? void 0 : F.primary)),
          (a[17] = (O = m) == null ? void 0 : O.primary),
          (a[18] = A));
      } else A = a[18];
      var B;
      a[19] !== A
        ? ((B = c.jsx("path", {
            d: "M24 23q-1.857 0-3.178-1.322Q19.5 20.357 19.5 18.5t1.322-3.178T24 14t3.178 1.322Q28.5 16.643 28.5 18.5t-1.322 3.178T24 23m-6.75 10q-.928 0-1.59-.66-.66-.662-.66-1.59v-.9q0-.956.492-1.758A3.3 3.3 0 0 1 16.8 26.87a16.7 16.7 0 0 1 3.544-1.308q1.8-.435 3.656-.436 1.856 0 3.656.436T31.2 26.87q.816.422 1.308 1.223T33 29.85v.9q0 .928-.66 1.59-.662.66-1.59.66z",
            fill: "#606263",
            className: A,
          })),
          (a[19] = A),
          (a[20] = B))
        : (B = a[20]);
      var W;
      a[21] !== I ||
      a[22] !== T ||
      a[23] !== x ||
      a[24] !== N ||
      a[25] !== w ||
      a[26] !== B
        ? ((W = c.jsxs("svg", {
            viewBox: x,
            height: $,
            width: P,
            preserveAspectRatio: "xMidYMid meet",
            className: N,
            fill: "none",
            children: [w, B],
          })),
          (a[21] = I),
          (a[22] = T),
          (a[23] = x),
          (a[24] = N),
          (a[25] = w),
          (a[26] = B),
          (a[27] = W))
        : (W = a[27]);
      var q;
      return (
        a[28] !== p || a[29] !== D || a[30] !== W
          ? ((q = c.jsx(
              o("WAWebSvgComponentBase").BaseSvgSpan,
              babelHelpers.extends({ name: D }, p, { children: W }),
            )),
            (a[28] = p),
            (a[29] = D),
            (a[30] = W),
            (a[31] = q))
          : (q = a[31]),
        q
      );
    }
    l.DefaultContactRefreshedIcon = m;
  },
  98,
);
