__d(
  "BaseImage.react",
  [
    "CometSSRPreloadImageCollection",
    "ExecutionEnvironment",
    "ReactDOM",
    "RecoverableViolationWithComponentStack.react",
    "gkx",
    "mergeRefs",
    "react",
    "stylex",
    "testID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ref",
        "alt",
        "aria-labelledby",
        "elementtiming",
        "isDecorative",
        "objectFit",
        "onLoad",
        "referrerPolicy",
        "sizes",
        "src",
        "srcSet",
        "testid",
        "variant",
        "xstyle",
      ],
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useMemo,
      f = m.useRef,
      g = {
        contain: { objectFit: "x19kjcj4", $$css: !0 },
        cover: { objectFit: "xl1xv1r", $$css: !0 },
        fill: { objectFit: "xz74otr", $$css: !0 },
      };
    function h(t) {
      var n,
        a = t.ref,
        i = t.alt,
        l = i === void 0 ? "" : i,
        c = t["aria-labelledby"],
        m = t.elementtiming,
        h = t.isDecorative,
        y = t.objectFit,
        C = y === void 0 ? "fill" : y,
        b = t.onLoad,
        v = t.referrerPolicy,
        S = v === void 0 ? "origin-when-cross-origin" : v,
        R = t.sizes,
        L = t.src,
        E = t.srcSet,
        k = t.testid,
        I = t.variant,
        T = t.xstyle,
        D = babelHelpers.objectWithoutPropertiesLoose(t, e),
        x = f(null),
        $ = _(
          function () {
            return r("mergeRefs")(x, a);
          },
          [x, a],
        );
      return (
        !(s || (s = r("ExecutionEnvironment"))).canUseDOM &&
          L &&
          (r("gkx")("9159")
            ? o("ReactDOM").preload(L, {
                as: "image",
                imageSizes: R,
                imageSrcSet: E,
              })
            : o("CometSSRPreloadImageCollection").addImage(L)),
        p(
          function () {
            var e = x.current;
            b != null && e != null && e.complete && b();
          },
          [b],
        ),
        L === ""
          ? d.jsx(r("RecoverableViolationWithComponentStack.react"), {
              errorMessage: "Invalid src provided to image",
              projectName: "comet_ui",
            })
          : d.jsx(
              "img",
              babelHelpers.extends(
                {},
                D,
                r("testID")(k),
                (u || (u = r("stylex"))).props(
                  g[C],
                  T,
                  I == null || (n = I.xstyleConfig) == null ? void 0 : n.image,
                ),
                {
                  alt: l,
                  "aria-hidden": h,
                  "aria-labelledby": c,
                  elementtiming: m,
                  onLoad: b,
                  ref: $,
                  referrerPolicy: S,
                  sizes: R,
                  src: L,
                  srcSet: E,
                },
              ),
            )
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
