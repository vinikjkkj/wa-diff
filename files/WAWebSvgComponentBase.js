__d(
  "WAWebSvgComponentBase",
  [
    "Locale",
    "WAWebClassnames",
    "err",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
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
      var n = o("react-compiler-runtime").c(36),
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
      var v, S, R, L, E, k;
      if (
        n[13] !== l ||
        n[14] !== c ||
        n[15] !== p ||
        n[16] !== _ ||
        n[17] !== f ||
        n[18] !== g ||
        n[19] !== y ||
        n[20] !== C
      ) {
        var I;
        y != null
          ? (I = y === "rtl")
          : (I = p === !0 ? o("Locale").isRTL() : !1);
        var T = (u || (u = r("stylex")))(
            I && m.reverse,
            _ === !0 && m.inline,
            C,
          ),
          D = f === !1 ? !1 : l == null;
        ((v = g),
          (S = D),
          (R = l),
          (L = c),
          (E = g),
          (k = o("WAWebClassnames").classnamesConvertMeToStylexPlease(T)),
          (n[13] = l),
          (n[14] = c),
          (n[15] = p),
          (n[16] = _),
          (n[17] = f),
          (n[18] = g),
          (n[19] = y),
          (n[20] = C),
          (n[21] = v),
          (n[22] = S),
          (n[23] = R),
          (n[24] = L),
          (n[25] = E),
          (n[26] = k));
      } else
        ((v = n[21]),
          (S = n[22]),
          (R = n[23]),
          (L = n[24]),
          (E = n[25]),
          (k = n[26]));
      var x;
      return (
        n[27] !== a ||
        n[28] !== h ||
        n[29] !== v ||
        n[30] !== S ||
        n[31] !== R ||
        n[32] !== L ||
        n[33] !== E ||
        n[34] !== k
          ? ((x = d.jsx(
              "span",
              babelHelpers.extends(
                {
                  "data-testid": v,
                  "aria-hidden": S,
                  "aria-label": R,
                  ref: L,
                  "data-icon": E,
                  className: k,
                },
                h,
                { children: a },
              ),
            )),
            (n[27] = a),
            (n[28] = h),
            (n[29] = v),
            (n[30] = S),
            (n[31] = R),
            (n[32] = L),
            (n[33] = E),
            (n[34] = k),
            (n[35] = x))
          : (x = n[35]),
        x
      );
    }
    l.BaseSvgSpan = p;
  },
  98,
);
