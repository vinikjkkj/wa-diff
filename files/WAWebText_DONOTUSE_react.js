__d(
  "WAWebText_DONOTUSE.react",
  ["WAWebClassnames", "react", "stylex"],
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
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = l.as,
        u = s === void 0 ? "span" : s,
        c = l.size,
        d = c === void 0 ? "14" : c,
        m = l.theme,
        p = l.weight,
        _ = p === void 0 ? "normal" : p,
        g = u,
        S = l.color ? b[l.color] : null,
        R = C[_],
        L = ((n = l.xstyle) != null ? n : {}).fontSize != null ? null : d,
        E = L != null ? y[L] : null,
        k;
      return (
        m && (k = v[m]),
        h.jsx(
          g,
          babelHelpers.extends({}, l.extras, {
            ref: i,
            className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
              (f || (f = r("stylex")))([E, k, R, S, l.xstyle]),
              l.className,
            ),
            "aria-label": (a = l.ariaLabel) != null ? a : void 0,
            "data-testid": void 0,
            children: l.children,
          }),
        )
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    var R = { 1: "h1", 2: "h2", 3: "h3", 4: "h4", 5: "h5", 6: "h6" };
    function L(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s),
        r = n.level,
        o = r === void 0 ? "1" : r,
        a = babelHelpers.objectWithoutPropertiesLoose(n, u);
      return h.jsx(S, babelHelpers.extends({ ref: t, as: R[o] }, a));
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, c);
      return h.jsx(S, babelHelpers.extends({ ref: t, as: "p" }, n));
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, d);
      return h.jsx(S, babelHelpers.extends({ ref: t, as: "div" }, n));
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, m);
      return h.jsx(S, babelHelpers.extends({ ref: t, as: "span" }, n));
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, p),
        r = n.htmlFor,
        o = babelHelpers.objectWithoutPropertiesLoose(n, _);
      return h.jsx(
        S,
        babelHelpers.extends({ ref: t, as: "label" }, o, {
          extras: { htmlFor: r },
        }),
      );
    }
    ((T.displayName = T.name + " [from " + i.id + "]"),
      (l.Text = S),
      (l.TextHeader = L),
      (l.TextParagraph = E),
      (l.TextDiv = k),
      (l.TextSpan = I),
      (l.TextLabel = T));
  },
  98,
);
