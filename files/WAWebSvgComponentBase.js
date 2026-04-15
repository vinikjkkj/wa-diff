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
        "className_DONOTUSE",
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
      var n = o("react-compiler-runtime").c(38),
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
      var l, c, p, _, f, g, h, y, C, b;
      if (n[3] !== i) {
        var v = i;
        ((g = v["aria-hidden"]),
          (l = v["aria-label"]),
          (c = v.className_DONOTUSE),
          (p = v.containerRef),
          (_ = v.directional),
          (f = v.displayInline),
          (h = v.name),
          (C = v.overrideDirection),
          (b = v.xstyle),
          (y = babelHelpers.objectWithoutPropertiesLoose(v, s)),
          (n[3] = i),
          (n[4] = l),
          (n[5] = c),
          (n[6] = p),
          (n[7] = _),
          (n[8] = f),
          (n[9] = g),
          (n[10] = h),
          (n[11] = y),
          (n[12] = C),
          (n[13] = b));
      } else
        ((l = n[4]),
          (c = n[5]),
          (p = n[6]),
          (_ = n[7]),
          (f = n[8]),
          (g = n[9]),
          (h = n[10]),
          (y = n[11]),
          (C = n[12]),
          (b = n[13]));
      var S, R, L, E, k, I;
      if (
        n[14] !== l ||
        n[15] !== c ||
        n[16] !== p ||
        n[17] !== _ ||
        n[18] !== f ||
        n[19] !== g ||
        n[20] !== h ||
        n[21] !== C ||
        n[22] !== b
      ) {
        var T;
        C != null
          ? (T = C === "rtl")
          : (T = _ === !0 ? o("Locale").isRTL() : !1);
        var D = (u || (u = r("stylex")))(
            T && m.reverse,
            f === !0 && m.inline,
            b,
          ),
          x = g === !1 ? !1 : l == null;
        ((S = h),
          (R = x),
          (L = l),
          (E = p),
          (k = h),
          (I = o("WAWebClassnames").classnamesConvertMeToStylexPlease(c, D)),
          (n[14] = l),
          (n[15] = c),
          (n[16] = p),
          (n[17] = _),
          (n[18] = f),
          (n[19] = g),
          (n[20] = h),
          (n[21] = C),
          (n[22] = b),
          (n[23] = S),
          (n[24] = R),
          (n[25] = L),
          (n[26] = E),
          (n[27] = k),
          (n[28] = I));
      } else
        ((S = n[23]),
          (R = n[24]),
          (L = n[25]),
          (E = n[26]),
          (k = n[27]),
          (I = n[28]));
      var $;
      return (
        n[29] !== a ||
        n[30] !== y ||
        n[31] !== S ||
        n[32] !== R ||
        n[33] !== L ||
        n[34] !== E ||
        n[35] !== k ||
        n[36] !== I
          ? (($ = d.jsx(
              "span",
              babelHelpers.extends(
                {
                  "data-testid": void 0,
                  "aria-hidden": R,
                  "aria-label": L,
                  ref: E,
                  "data-icon": k,
                  className: I,
                },
                y,
                { children: a },
              ),
            )),
            (n[29] = a),
            (n[30] = y),
            (n[31] = S),
            (n[32] = R),
            (n[33] = L),
            (n[34] = E),
            (n[35] = k),
            (n[36] = I),
            (n[37] = $))
          : ($ = n[37]),
        $
      );
    }
    l.BaseSvgSpan = p;
  },
  98,
);
