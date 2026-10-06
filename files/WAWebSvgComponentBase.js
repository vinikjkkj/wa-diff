__d(
  "WAWebSvgComponentBase",
  ["Locale", "err", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["children"],
      s = [
        "aria-hidden",
        "aria-label",
        "containerRef",
        "directional",
        "displayInline",
        "name",
        "overrideDirection",
        "xstyle",
      ],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        reverse: { display: "x1lliihq", transform: "xpk2tj9", $$css: !0 },
        inline: { display: "x1rg5ohu", verticalAlign: "x16dsc37", $$css: !0 },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(26),
        a,
        i;
      if (
        (n[0] !== t
          ? ((a = t.children),
            (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
            (n[0] = t),
            (n[1] = a),
            (n[2] = i))
          : ((a = n[1]), (i = n[2])),
        a == null)
      )
        throw r("err")("Cannot use BaseSvgSpan without SVG children");
      var l, c, p, _, f, g, h, y, C;
      if (n[3] !== i) {
        var b = i;
        ((f = b["aria-hidden"]),
          (l = b["aria-label"]),
          (c = b.containerRef),
          (p = b.directional),
          (_ = b.displayInline),
          (g = b.name),
          (y = b.overrideDirection),
          (C = b.xstyle),
          (h = babelHelpers.objectWithoutPropertiesLoose(b, s)),
          (n[3] = i),
          (n[4] = l),
          (n[5] = c),
          (n[6] = p),
          (n[7] = _),
          (n[8] = f),
          (n[9] = g),
          (n[10] = h),
          (n[11] = y),
          (n[12] = C));
      } else
        ((l = n[4]),
          (c = n[5]),
          (p = n[6]),
          (_ = n[7]),
          (f = n[8]),
          (g = n[9]),
          (h = n[10]),
          (y = n[11]),
          (C = n[12]));
      var v;
      if (n[13] !== p || n[14] !== _ || n[15] !== y || n[16] !== C) {
        var S;
        (y != null
          ? (S = y === "rtl")
          : (S = p === !0 ? o("Locale").isRTL() : !1),
          (v = (u || (u = r("stylex"))).props(
            S && m.reverse,
            _ === !0 && m.inline,
            C,
          )),
          (n[13] = p),
          (n[14] = _),
          (n[15] = y),
          (n[16] = C),
          (n[17] = v));
      } else v = n[17];
      var R = v,
        L = f === !1 ? !1 : l == null,
        E;
      return (
        n[18] !== L ||
        n[19] !== l ||
        n[20] !== a ||
        n[21] !== c ||
        n[22] !== g ||
        n[23] !== h ||
        n[24] !== R
          ? ((E = d.jsx(
              "span",
              babelHelpers.extends(
                {
                  "data-testid": g,
                  "aria-hidden": L,
                  "aria-label": l,
                  ref: c,
                  "data-icon": g,
                },
                R,
                h,
                { children: a },
              ),
            )),
            (n[18] = L),
            (n[19] = l),
            (n[20] = a),
            (n[21] = c),
            (n[22] = g),
            (n[23] = h),
            (n[24] = R),
            (n[25] = E))
          : (E = n[25]),
        E
      );
    }
    l.BaseSvgSpan = p;
  },
  98,
);
