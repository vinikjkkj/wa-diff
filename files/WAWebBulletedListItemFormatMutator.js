__d(
  "WAWebBulletedListItemFormatMutator",
  [
    "WAWebBulletedListFormatMutator",
    "WAWebBulletedListItemFormatRegex",
    "WAWebBulletedListItemMutatorComponent.react",
    "WAWebCreateRegexMutator",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = /(?:^)\*( (?! +)[^\n]*(?:$))/gm,
      c = /(?:^)\-( (?! +)[^\n]*(?:$))/gm,
      d = new Set([r("WAWebBulletedListFormatMutator")]);
    function m(e, t) {
      var n,
        o = r("WAWebCreateRegexMutator")(e, 1),
        a =
          ((n = (function (e) {
            function n() {
              return e.apply(this, arguments) || this;
            }
            return (
              babelHelpers.inheritsLoose(n, e),
              (n.jsx = function (n, o, a) {
                var e = a.inline,
                  i = a.selectable,
                  l = i === void 0 ? !1 : i,
                  u = o[1];
                return s.jsx(r("WAWebBulletedListItemMutatorComponent.react"), {
                  inline: e,
                  selectable: l,
                  text: u,
                  symbol: t,
                  children: n,
                });
              }),
              n
            );
          })(o)),
          (n.displayName = "BulletedListItem"),
          (n.nestable = function (e) {
            return d.has(e);
          }),
          (n.unformatDecorations = { pre: t }),
          n);
      return a;
    }
    var p = m(
        o("WAWebBulletedListItemFormatRegex").BULLETED_LIST_ITEM_REGEX,
        "*",
      ),
      _ = m(o("WAWebBulletedListItemFormatRegex").HYPHEN_LIST_ITEM_REGEX, "-"),
      f = m(u, "*"),
      g = m(c, "-");
    ((l.BulletedListItem = p),
      (l.HyphenListItem = _),
      (l.BulletedListItemWithEmpty = f),
      (l.HyphenListItemWithEmpty = g));
  },
  98,
);
