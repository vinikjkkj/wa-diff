__d(
  "CometComposedTextV2HeadingNodeRenderer.react",
  [
    "BaseTextV2.react",
    "BaseTextV2CDSTypeVariants",
    "BaseTextV2FontMetrics",
    "CometComposedTextV2URParserContext.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { inherit: { color: "x1heor9g", $$css: !0 } };
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.children,
        a = e.node,
        i = o(
          "CometComposedTextV2URParserContext.react",
        ).useCometComposedTextV2URParserContext(),
        l = i.renderers,
        c = l.headingNodeRenderer,
        d;
      t[0] !== a ? ((d = a.getState()), (t[0] = a), (t[1] = d)) : (d = t[1]);
      var m = d,
        p = m.tag,
        _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { xstyleConfig: { textColor: u.inherit } }), (t[2] = _))
        : (_ = t[2]);
      var f = _,
        g;
      t[3] !== n || t[4] !== c || t[5] !== p
        ? ((g = c
            ? c({ children: n, tag: p })
            : p === "h1"
              ? s.jsx(r("BaseTextV2.react"), {
                  colorVariant: f,
                  fontMetrics: o("BaseTextV2FontMetrics")
                    .OptimisticDisplayFontMetrics,
                  isSemanticHeading: !0,
                  typeVariant: o("BaseTextV2CDSTypeVariants")
                    .BaseTextHeadline1CDSTypeVariant,
                  children: n,
                })
              : p === "h2"
                ? s.jsx(r("BaseTextV2.react"), {
                    colorVariant: f,
                    fontMetrics: o("BaseTextV2FontMetrics")
                      .OptimisticDisplayFontMetrics,
                    isSemanticHeading: !0,
                    typeVariant: o("BaseTextV2CDSTypeVariants")
                      .BaseTextHeadline2CDSTypeVariant,
                    children: n,
                  })
                : p === "h3"
                  ? s.jsx(r("BaseTextV2.react"), {
                      colorVariant: f,
                      fontMetrics: o("BaseTextV2FontMetrics")
                        .OptimisticDisplayFontMetrics,
                      isSemanticHeading: !0,
                      typeVariant: o("BaseTextV2CDSTypeVariants")
                        .BaseTextHeadline3CDSTypeVariant,
                      children: n,
                    })
                  : p === "h4"
                    ? s.jsx(r("BaseTextV2.react"), {
                        colorVariant: f,
                        fontMetrics: o("BaseTextV2FontMetrics")
                          .OptimisticDisplayFontMetrics,
                        isSemanticHeading: !0,
                        typeVariant: o("BaseTextV2CDSTypeVariants")
                          .BaseTextPrimaryLabelCDSTypeVariant,
                        children: n,
                      })
                    : p === "h5"
                      ? s.jsx(r("BaseTextV2.react"), {
                          colorVariant: f,
                          fontMetrics: o("BaseTextV2FontMetrics")
                            .OptimisticDisplayFontMetrics,
                          isSemanticHeading: !0,
                          typeVariant: o("BaseTextV2CDSTypeVariants")
                            .BaseTextSecondaryLabelCDSTypeVariant,
                          children: n,
                        })
                      : p === "h6"
                        ? s.jsx(r("BaseTextV2.react"), {
                            colorVariant: f,
                            fontMetrics: o("BaseTextV2FontMetrics")
                              .OptimisticDisplayFontMetrics,
                            isSemanticHeading: !0,
                            typeVariant: o("BaseTextV2CDSTypeVariants")
                              .BaseTextTertiaryLabelCDSTypeVariant,
                            children: n,
                          })
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                p,
                            );
                          })()),
          (t[3] = n),
          (t[4] = c),
          (t[5] = p),
          (t[6] = g))
        : (g = t[6]);
      var h = g,
        y;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { className: "xwib8y2 xyamay9" }), (t[7] = y))
        : (y = t[7]);
      var C;
      return (
        t[8] !== h
          ? ((C = s.jsx("div", babelHelpers.extends({}, y, { children: h }))),
            (t[8] = h),
            (t[9] = C))
          : (C = t[9]),
        C
      );
    }
    l.default = c;
  },
  98,
);
