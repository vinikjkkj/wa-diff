__d(
  "WAWebBoldFormatMutator",
  [
    "WAWebAdjustDelimitedRange",
    "WAWebBoldFormatRegex",
    "WAWebBoldMutatorComponent.react",
    "WAWebCreateRegexMutator",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebAdjustDelimitedRange")("*"),
      c = r("WAWebCreateRegexMutator")(r("WAWebBoldFormatRegex"), 1, u),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = o.boldXstyle,
              a = o.selectable,
              i = a === void 0 ? !1 : a;
            return s.jsx(r("WAWebBoldMutatorComponent.react"), {
              selectable: i,
              xstyle: e,
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
