__d(
  "WAWebText_DONOTUSE.react",
  ["WAWebClassnames", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = ["ref"],
      u = ["level"],
      c = ["ref"],
      d = ["ref"],
      m = ["ref"],
      p = ["ref"],
      _ = ["htmlFor"],
      f,
      g,
      h = g || (g = o("react")),
      y = {
        10: { fontSize: "x190qgfh", $$css: !0 },
        12: { fontSize: "x1pg5gke", $$css: !0 },
        13: { fontSize: "x1nxh6w3", $$css: !0 },
        14: { fontSize: "x1f6kntn", $$css: !0 },
        15: { fontSize: "x6prxxf", $$css: !0 },
        16: { fontSize: "x1jchvi3", $$css: !0 },
        18: { fontSize: "x1c3i2sq", $$css: !0 },
        20: { fontSize: "x1603h9y", $$css: !0 },
        24: { fontSize: "xngnso2", $$css: !0 },
        28: { fontSize: "x1q74xe4", $$css: !0 },
        32: { fontSize: "x579bpy", $$css: !0 },
        inherit: { fontSize: "x1qlqyl8", $$css: !0 },
      },
      C = {
        light: { fontWeight: "x1iikomf", $$css: !0 },
        normal: { fontWeight: "x1fcty0u", $$css: !0 },
        medium: { fontWeight: "xk50ysn", $$css: !0 },
        semibold: { fontWeight: "x1s688f", $$css: !0 },
        bold: { fontWeight: "x117nqv4", $$css: !0 },
        inherit: { fontWeight: "x1pd3egz", $$css: !0 },
      },
      b = {
        accent: { color: "x1v5yvga", $$css: !0 },
        danger: { color: "x30a034", $$css: !0 },
        dark: { color: "x14ug900", $$css: !0 },
        primary: { color: "x14ug900", $$css: !0 },
        secondary: { color: "xhslqc4", $$css: !0 },
        muted: { color: "xhslqc4", $$css: !0 },
        success: { color: "x1du590y", $$css: !0 },
        disabled: { color: "xhslqc4", $$css: !0 },
        link: { color: "x1ph7ams", $$css: !0 },
      },
      v = {
        sectionTitle: {
          fontSize: "x1f6kntn",
          lineHeight: "x1u7k74",
          color: "x1v5yvga",
          $$css: !0,
        },
        sectionTitleLarger: {
          fontSize: "x1jchvi3",
          lineHeight: "x1u7k74",
          color: "x1v5yvga",
          $$css: !0,
        },
        chatInfoSectionTitle: {
          fontSize: "x1f6kntn",
          lineHeight: "x1u7k74",
          color: "xhslqc4",
          $$css: !0,
        },
        plain: { fontSize: "x1f6kntn", lineHeight: "x16h55sf", $$css: !0 },
      };
    function S(t) {
      var n,
        a,
        i = o("react-compiler-runtime").c(18),
        l,
        s;
      i[0] !== t
        ? ((s = t.ref),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (i[0] = t),
          (i[1] = l),
          (i[2] = s))
        : ((l = i[1]), (s = i[2]));
      var u = l,
        c = u.as,
        d = u.size,
        m = u.theme,
        p = u.weight,
        _ = c === void 0 ? "span" : c,
        g = d === void 0 ? "14" : d,
        S = p === void 0 ? "normal" : p,
        R = _,
        L = l.color ? b[l.color] : null,
        E = C[S],
        k = ((n = l.xstyle) != null ? n : {}).fontSize != null ? null : g,
        I = k != null ? y[k] : null,
        T;
      m && (T = v[m]);
      var D = l.extras,
        x;
      i[3] !== L ||
      i[4] !== I ||
      i[5] !== l.className ||
      i[6] !== l.xstyle ||
      i[7] !== T ||
      i[8] !== E
        ? ((x = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            (f || (f = r("stylex")))([I, T, E, L, l.xstyle]),
            l.className,
          )),
          (i[3] = L),
          (i[4] = I),
          (i[5] = l.className),
          (i[6] = l.xstyle),
          (i[7] = T),
          (i[8] = E),
          (i[9] = x))
        : (x = i[9]);
      var $ = (a = l.ariaLabel) != null ? a : void 0,
        P;
      return (
        i[10] !== R ||
        i[11] !== l.children ||
        i[12] !== l.testid ||
        i[13] !== s ||
        i[14] !== D ||
        i[15] !== x ||
        i[16] !== $
          ? ((P = h.jsx(
              R,
              babelHelpers.extends({}, D, {
                ref: s,
                className: x,
                "aria-label": $,
                "data-testid": void 0,
                children: l.children,
              }),
            )),
            (i[10] = R),
            (i[11] = l.children),
            (i[12] = l.testid),
            (i[13] = s),
            (i[14] = D),
            (i[15] = x),
            (i[16] = $),
            (i[17] = P))
          : (P = i[17]),
        P
      );
    }
    var R = { 1: "h1", 2: "h2", 3: "h3", 4: "h4", 5: "h5", 6: "h6" };
    function L(e) {
      var t = o("react-compiler-runtime").c(10),
        n,
        r;
      t[0] !== e
        ? ((r = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, s)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a, i;
      if (t[3] !== n) {
        var l = n;
        ((a = l.level),
          (i = babelHelpers.objectWithoutPropertiesLoose(l, u)),
          (t[3] = n),
          (t[4] = a),
          (t[5] = i));
      } else ((a = t[4]), (i = t[5]));
      var c = a === void 0 ? "1" : a,
        d = R[c],
        m;
      return (
        t[6] !== r || t[7] !== d || t[8] !== i
          ? ((m = h.jsx(S, babelHelpers.extends({ ref: r, as: d }, i))),
            (t[6] = r),
            (t[7] = d),
            (t[8] = i),
            (t[9] = m))
          : (m = t[9]),
        m
      );
    }
    function E(e) {
      var t = o("react-compiler-runtime").c(6),
        n,
        r;
      t[0] !== e
        ? ((r = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, c)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a;
      return (
        t[3] !== n || t[4] !== r
          ? ((a = h.jsx(S, babelHelpers.extends({ ref: r, as: "p" }, n))),
            (t[3] = n),
            (t[4] = r),
            (t[5] = a))
          : (a = t[5]),
        a
      );
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(6),
        n,
        r;
      t[0] !== e
        ? ((r = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, d)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a;
      return (
        t[3] !== n || t[4] !== r
          ? ((a = h.jsx(S, babelHelpers.extends({ ref: r, as: "div" }, n))),
            (t[3] = n),
            (t[4] = r),
            (t[5] = a))
          : (a = t[5]),
        a
      );
    }
    function I(e) {
      var t = o("react-compiler-runtime").c(6),
        n,
        r;
      t[0] !== e
        ? ((r = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, m)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a;
      return (
        t[3] !== n || t[4] !== r
          ? ((a = h.jsx(S, babelHelpers.extends({ ref: r, as: "span" }, n))),
            (t[3] = n),
            (t[4] = r),
            (t[5] = a))
          : (a = t[5]),
        a
      );
    }
    function T(e) {
      var t = o("react-compiler-runtime").c(12),
        n,
        r;
      t[0] !== e
        ? ((r = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, p)),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2]));
      var a, i;
      if (t[3] !== n) {
        var l = n;
        ((a = l.htmlFor),
          (i = babelHelpers.objectWithoutPropertiesLoose(l, _)),
          (t[3] = n),
          (t[4] = a),
          (t[5] = i));
      } else ((a = t[4]), (i = t[5]));
      var s;
      t[6] !== a ? ((s = { htmlFor: a }), (t[6] = a), (t[7] = s)) : (s = t[7]);
      var u;
      return (
        t[8] !== r || t[9] !== s || t[10] !== i
          ? ((u = h.jsx(
              S,
              babelHelpers.extends({ ref: r, as: "label" }, i, { extras: s }),
            )),
            (t[8] = r),
            (t[9] = s),
            (t[10] = i),
            (t[11] = u))
          : (u = t[11]),
        u
      );
    }
    ((l.Text = S),
      (l.TextHeader = L),
      (l.TextParagraph = E),
      (l.TextDiv = k),
      (l.TextSpan = I),
      (l.TextLabel = T));
  },
  98,
);
