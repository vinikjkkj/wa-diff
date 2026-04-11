__d(
  "WAWebCodeFormatMutator",
  ["WAWebCodeMutatorComponent.react", "WAWebCreateRegexMutator", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = /```([\s\S]*?\S[\s\S]*?)```/g,
      c = r("WAWebCreateRegexMutator")(u, 1),
      d = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = o.selectable,
              a = e === void 0 ? !1 : e;
            return s.jsx(r("WAWebCodeMutatorComponent.react"), {
              selectable: a,
              children: t,
            });
          }),
          t
        );
      })(c);
    d.format = !1;
    var m = function (t) {
      return t.replace(u, " ");
    };
    ((l.Code = d), (l.removeCodeBlocks = m));
  },
  98,
);
