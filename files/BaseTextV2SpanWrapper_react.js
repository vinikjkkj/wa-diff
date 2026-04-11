__d(
  "BaseTextV2SpanWrapper.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        "::after_content": "x100rkj9",
        "::after_display": "x1azrkns",
        "::before_content": "x10tli2e",
        "::before_display": "xpo3ry2",
        $$css: !0,
      },
      d = {
        block: {
          "::after_content": "x1s928wv",
          "::after_display": "xhkezso",
          "::after_height": "x1gmr53x",
          "::before_content": "x1cpjm7i",
          "::before_display": "x1fgarty",
          "::before_height": "x1943h6x",
          $$css: !0,
        },
        computedPseudoStyles: function (t) {
          return [
            c,
            {
              "::after_marginTop":
                t.baselineTrim != null ? "x140p0ai" : t.baselineTrim,
              "::before_marginBottom":
                t.capHeightTrim != null ? "x1gufx9m" : t.capHeightTrim,
              $$css: !0,
            },
            {
              "--x-8dd7yt": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t.baselineTrim),
              "--x-hxtmnb": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t.capHeightTrim),
            },
          ];
        },
        computedStyles: function (t) {
          return [
            {
              fontSize: t.fontSize != null ? "xdmh292" : t.fontSize,
              lineHeight: t.lineHeight != null ? "x15dsfln" : t.lineHeight,
              $$css: !0,
            },
            {
              "--x-fontSize": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t.fontSize),
              "--x-lineHeight": t.lineHeight != null ? t.lineHeight : void 0,
            },
          ];
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(12),
        a = t.ref,
        i = t.children,
        l = t.computedValues,
        s = t.dir,
        c = t.id,
        m = t.nested,
        p = t.suppressHydrationWarning,
        _ = t.testid,
        f = t.xstyle,
        g;
      n[0] !== l || n[1] !== m || n[2] !== f
        ? ((g = (e || (e = r("stylex"))).props(
            d.computedStyles(l),
            !m && d.computedPseudoStyles(l),
            !m && d.block,
            f,
          )),
          (n[0] = l),
          (n[1] = m),
          (n[2] = f),
          (n[3] = g))
        : (g = n[3]);
      var h;
      return (
        n[4] !== i ||
        n[5] !== s ||
        n[6] !== c ||
        n[7] !== a ||
        n[8] !== p ||
        n[9] !== g ||
        n[10] !== _
          ? ((h = u.jsx(
              "span",
              babelHelpers.extends(
                {
                  "data-testid": void 0,
                  dir: s,
                  id: c,
                  ref: a,
                  suppressHydrationWarning: p,
                },
                g,
                { children: i },
              ),
            )),
            (n[4] = i),
            (n[5] = s),
            (n[6] = c),
            (n[7] = a),
            (n[8] = p),
            (n[9] = g),
            (n[10] = _),
            (n[11] = h))
          : (h = n[11]),
        h
      );
    }
    l.default = m;
  },
  98,
);
