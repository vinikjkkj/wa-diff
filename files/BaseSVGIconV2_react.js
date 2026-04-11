__d(
  "BaseSVGIconV2.react",
  [
    "BaseIsDecorativeContext",
    "FBLogger",
    "IconSource.public",
    "react",
    "react-compiler-runtime",
    "useBaseSVGIconVariantStylesProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useContext;
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.alt,
        a = e.colorVariant,
        i = e.icon,
        l = e.id,
        c = e.sizeVariant,
        d = u(r("BaseIsDecorativeContext")),
        m = n == null || n === "",
        p = m && d === !0 ? !0 : void 0,
        _ = r("useBaseSVGIconVariantStylesProvider")(a);
      if (i == null || i instanceof r("IconSource.public"))
        return (
          r("FBLogger")("comet_ui")
            .blameToPreviousFile()
            .mustfix(
              "BaseSVGIconV2: Attempt to render an instance of IconSource or a null SVG was passed in",
            ),
          null
        );
      if (i._isSVG === !0) {
        var f;
        t[0] !== i ||
        t[1] !== n ||
        t[2] !== a ||
        t[3] !== l ||
        t[4] !== m ||
        t[5] !== p ||
        t[6] !== c
          ? ((f = function (t) {
              return s.jsx(
                i,
                babelHelpers.extends(
                  {
                    "aria-hidden": p,
                    "aria-label": m ? void 0 : n,
                    color: a.color,
                    height: c.size,
                    id: l,
                    title: m ? void 0 : n,
                    width: c.size,
                  },
                  t,
                ),
              );
            }),
            (t[0] = i),
            (t[1] = n),
            (t[2] = a),
            (t[3] = l),
            (t[4] = m),
            (t[5] = p),
            (t[6] = c),
            (t[7] = f))
          : (f = t[7]);
        var g;
        return (
          t[8] !== _ || t[9] !== f
            ? ((g = _(f)), (t[8] = _), (t[9] = f), (t[10] = g))
            : (g = t[10]),
          g
        );
      }
      return null;
    }
    l.default = c;
  },
  98,
);
