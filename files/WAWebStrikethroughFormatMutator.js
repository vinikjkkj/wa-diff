__d(
  "WAWebStrikethroughFormatMutator",
  [
    "WAWebAdjustDelimitedRange",
    "WAWebCreateRegexMutator",
    "WAWebStrikethroughFormatRegex",
    "WAWebStrikethroughMutatorComponent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebAdjustDelimitedRange")("_"),
      c = r("WAWebCreateRegexMutator")(
        r("WAWebStrikethroughFormatRegex"),
        1,
        u,
      ),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = o.selectable;
            return s.jsx(r("WAWebStrikethroughMutatorComponent.react"), {
              selectable: e,
              children: t,
            });
          }),
          t
        );
      })(c);
    l.default = d;
  },
  98,
);
