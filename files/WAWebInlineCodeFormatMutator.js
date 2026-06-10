__d(
  "WAWebInlineCodeFormatMutator",
  [
    "WAWebAdjustDelimitedRange",
    "WAWebCreateRegexMutator",
    "WAWebInlineCodeFormatRegex",
    "WAWebInlineCodeMutatorComponent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebAdjustDelimitedRange")("`"),
      c = r("WAWebCreateRegexMutator")(r("WAWebInlineCodeFormatRegex"), 1, u),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = o.codeXstyle,
              a = o.quoted,
              i = a === void 0 ? !1 : a,
              l = o.selectable,
              u = l === void 0 ? !1 : l;
            return s.jsx(r("WAWebInlineCodeMutatorComponent.react"), {
              selectable: u,
              quoted: i,
              xstyle: e,
              children: t,
            });
          }),
          t
        );
      })(c);
    ((d.format = !1), (l.default = d));
  },
  98,
);
