__d(
  "WAWebCodeFormatMutator",
  [
    "WAWebCodeBlockFormatRegex",
    "WAWebCodeMutatorComponent.react",
    "WAWebCreateRegexMutator",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = r("WAWebCreateRegexMutator")(r("WAWebCodeBlockFormatRegex"), 1),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = o.codeXstyle,
              a = o.selectable,
              i = a === void 0 ? !1 : a;
            return s.jsx(r("WAWebCodeMutatorComponent.react"), {
              selectable: i,
              xstyle: e,
              children: t,
            });
          }),
          t
        );
      })(u);
    ((c.previewChildrenOnly = !0), (c.format = !1));
    function d(e) {
      return e.replace(r("WAWebCodeBlockFormatRegex"), " ");
    }
    ((l.Code = c), (l.removeCodeBlocks = d));
  },
  98,
);
