__d(
  "BaseRow.react",
  [
    "BaseRowContext",
    "BaseView.react",
    "react",
    "react-compiler-runtime",
    "useBaseRowA11yWrap",
    "useMergeRefs",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ref",
        "align",
        "children",
        "columns",
        "direction",
        "expanding",
        "role",
        "verticalAlign",
        "wrap",
        "xstyle",
      ],
      s,
      u = s || (s = o("react")),
      c = s.useMemo,
      d = {
        expanding: {
          flexBasis: "x1r8uery",
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          minWidth: "xeuugli",
          $$css: !0,
        },
        row: {
          display: "x78zum5",
          flexShrink: "x2lah0s",
          position: "x1n2onr6",
          $$css: !0,
        },
      },
      m = {
        center: { justifyContent: "xl56j7k", $$css: !0 },
        end: { justifyContent: "x13a6bvl", $$css: !0 },
        justify: { justifyContent: "x1qughib", $$css: !0 },
        start: { justifyContent: "x1nhvcw1", $$css: !0 },
      },
      p = {
        bottom: { alignItems: "xuk3077", $$css: !0 },
        center: { alignItems: "x6s0dn4", $$css: !0 },
        stretch: { alignItems: "x1qjc9v5", $$css: !0 },
        top: { alignItems: "x1cy8zhl", $$css: !0 },
      },
      _ = {
        backward: { flexDirection: "x15zctf7", $$css: !0 },
        forward: { flexDirection: "x1q0g3np", $$css: !0 },
      },
      f = {
        backward: { flexWrap: "x8hhl5t", $$css: !0 },
        forward: { flexWrap: "x1a02dak", $$css: !0 },
        none: { flexWrap: "xozqiw3", $$css: !0 },
      },
      g = { end: "start", start: "end" };
    function h(t) {
      var n = o("react-compiler-runtime").c(35),
        a,
        i,
        l,
        s,
        c,
        h,
        y,
        C,
        b,
        v,
        S;
      n[0] !== t
        ? ((l = t.ref),
          (c = t.align),
          (a = t.children),
          (h = t.columns),
          (y = t.direction),
          (C = t.expanding),
          (s = t.role),
          (b = t.verticalAlign),
          (v = t.wrap),
          (S = t.xstyle),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = s),
          (n[5] = c),
          (n[6] = h),
          (n[7] = y),
          (n[8] = C),
          (n[9] = b),
          (n[10] = v),
          (n[11] = S))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (s = n[4]),
          (c = n[5]),
          (h = n[6]),
          (y = n[7]),
          (C = n[8]),
          (b = n[9]),
          (v = n[10]),
          (S = n[11]));
      var R = c === void 0 ? "justify" : c,
        L = h === void 0 ? 0 : h,
        E = y === void 0 ? "forward" : y,
        k = C === void 0 ? !1 : C,
        I = b === void 0 ? "stretch" : b,
        T = v === void 0 ? "none" : v,
        D;
      n[12] !== L || n[13] !== T
        ? ((D = { columns: L, wrap: T }), (n[12] = L), (n[13] = T), (n[14] = D))
        : (D = n[14]);
      var x = D,
        $ = r("useBaseRowA11yWrap")(E === "forward" && T === "backward"),
        P = $[0],
        N = $[1],
        M = r("useMergeRefs")(l, N),
        w = a;
      if (E === "forward" && T === "backward" && P && Array.isArray(a)) {
        var A = a;
        if (A.length === 2) {
          var F = A[0],
            O = A[1],
            B;
          (n[15] !== F || n[16] !== O
            ? ((B = [O, F]), (n[15] = F), (n[16] = O), (n[17] = B))
            : (B = n[17]),
            (w = B));
        }
      }
      var W = k && d.expanding,
        q = m[E === "backward" && (R === "start" || R === "end") ? g[R] : R],
        U = p[I],
        V = f[T],
        H =
          P &&
          E === "forward" &&
          T === "backward" &&
          Array.isArray(a) &&
          a.length === 2 &&
          f.forward,
        G = _[E],
        z;
      n[18] !== U ||
      n[19] !== V ||
      n[20] !== H ||
      n[21] !== G ||
      n[22] !== W ||
      n[23] !== q ||
      n[24] !== S
        ? ((z = [d.row, W, q, U, V, H, G, S]),
          (n[18] = U),
          (n[19] = V),
          (n[20] = H),
          (n[21] = G),
          (n[22] = W),
          (n[23] = q),
          (n[24] = S),
          (n[25] = z))
        : (z = n[25]);
      var j;
      n[26] !== w || n[27] !== x
        ? ((j = u.jsx(r("BaseRowContext").Provider, { value: x, children: w })),
          (n[26] = w),
          (n[27] = x),
          (n[28] = j))
        : (j = n[28]);
      var K;
      return (
        n[29] !== M || n[30] !== i || n[31] !== s || n[32] !== z || n[33] !== j
          ? ((K = u.jsx(
              r("BaseView.react"),
              babelHelpers.extends({}, i, {
                ref: M,
                role: s,
                xstyle: z,
                children: j,
              }),
            )),
            (n[29] = M),
            (n[30] = i),
            (n[31] = s),
            (n[32] = z),
            (n[33] = j),
            (n[34] = K))
          : (K = n[34]),
        K
      );
    }
    l.default = h;
  },
  98,
);
