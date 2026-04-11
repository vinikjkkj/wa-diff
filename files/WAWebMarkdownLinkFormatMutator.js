__d(
  "WAWebMarkdownLinkFormatMutator",
  ["WAWebCreateRegexMutator", "WAWebLinkMutatorComponent.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = /(^|[^!])\[([^\[\]]+)\]\(([^)]+)\)/g;
    function c(e, t) {
      var n = e[1];
      return (
        n.length > 0 && ((e.index += n.length), (e[0] = e[0].slice(n.length))),
        e
      );
    }
    var d = r("WAWebCreateRegexMutator")(u, 2, c),
      m = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e,
              a = n[3],
              i = (e = o == null ? void 0 : o.selectable) != null ? e : !1;
            return s.jsx(r("WAWebLinkMutatorComponent.react"), {
              href: a,
              selectable: i,
              children: t,
            });
          }),
          t
        );
      })(d);
    l.default = m;
  },
  98,
);
