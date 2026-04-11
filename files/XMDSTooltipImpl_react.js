__d(
  "XMDSTooltipImpl.react",
  [
    "CometPlaceholder.react",
    "deferredLoadComponent",
    "react",
    "react-compiler-runtime",
    "requireDeferredForDisplay",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")(
          "XMDSTooltipDeferredImpl.react",
        ).__setRef("XMDSTooltipImpl.react"),
      );
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      return (
        t[0] !== e
          ? ((n = s.jsx(r("CometPlaceholder.react"), {
              fallback: null,
              name: i.id,
              children: s.jsx(u, babelHelpers.extends({}, e)),
            })),
            (t[0] = e),
            (t[1] = n))
          : (n = t[1]),
        n
      );
    }
    l.default = c;
  },
  98,
);
