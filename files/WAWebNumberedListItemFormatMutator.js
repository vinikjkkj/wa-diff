__d(
  "WAWebNumberedListItemFormatMutator",
  [
    "WAWebCreateRegexMutator",
    "WAWebNumberedListFormatMutator",
    "WAWebNumberedListItemFormatRegex",
    "WAWebNumberedListItemMutatorComponent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = /(?:^)(\d{1,2}\.)( (?! +)[^\n]*(?:$))/gm,
      c = new Set([r("WAWebNumberedListFormatMutator")]);
    function d(e) {
      var t,
        n = r("WAWebCreateRegexMutator")(e, 2),
        o =
          ((t = (function (e) {
            function t() {
              return e.apply(this, arguments) || this;
            }
            return (
              babelHelpers.inheritsLoose(t, e),
              (t.jsx = function (t, n, o) {
                var e = o.inline,
                  a = o.selectable,
                  i = a === void 0 ? !1 : a,
                  l = n[1],
                  u = n[2];
                return s.jsx(r("WAWebNumberedListItemMutatorComponent.react"), {
                  inline: e,
                  selectable: i,
                  text: u,
                  numbering: l,
                  children: t,
                });
              }),
              t
            );
          })(n)),
          (t.displayName = "NumberedListItem"),
          (t.nestable = function (e) {
            return c.has(e);
          }),
          (t.unformatDecorations = {
            pre: function (t) {
              return t[1];
            },
          }),
          t);
      return o;
    }
    var m = d(r("WAWebNumberedListItemFormatRegex")),
      p = d(u);
    ((l.NumberedListItem = m), (l.NumberedListItemWithEmpty = p));
  },
  98,
);
