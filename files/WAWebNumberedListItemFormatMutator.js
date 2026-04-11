__d(
  "WAWebNumberedListItemFormatMutator",
  [
    "WAWebCreateRegexMutator",
    "WAWebNumberedListFormatMutator",
    "WAWebNumberedListItemMutatorComponent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = /(?:^)(\d{1,2}\.)( (?! +)[^\n]+(?:$))/gm,
      c = /(?:^)(\d{1,2}\.)( (?! +)[^\n]*(?:$))/gm,
      d = new Set([r("WAWebNumberedListFormatMutator")]);
    function m(e) {
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
            return d.has(e);
          }),
          (t.unformatDecorations = {
            pre: function (t) {
              return t[1];
            },
          }),
          t);
      return o;
    }
    var p = m(u),
      _ = m(c);
    ((l.NumberedListItem = p), (l.NumberedListItemWithEmpty = _));
  },
  98,
);
