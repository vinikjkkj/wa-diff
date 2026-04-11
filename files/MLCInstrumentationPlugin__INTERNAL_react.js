__d(
  "MLCInstrumentationPlugin__INTERNAL.react",
  [
    "MLCHealthInstrumentationPlugin__INTERNAL.react",
    "MLCInteractionInstrumentationPlugin__INTERNAL.react",
    "MLCTypingPerformancePlugin__INTERNAL.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = "facebook",
      c = u;
    function d(e) {
      return s.jsxs(s.Fragment, {
        children: [
          s.jsx(
            r("MLCTypingPerformancePlugin__INTERNAL.react"),
            babelHelpers.extends({}, e),
          ),
          s.jsx(
            r("MLCHealthInstrumentationPlugin__INTERNAL.react"),
            babelHelpers.extends({}, e),
          ),
          s.jsx(
            r("MLCInteractionInstrumentationPlugin__INTERNAL.react"),
            babelHelpers.extends({}, e),
          ),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
