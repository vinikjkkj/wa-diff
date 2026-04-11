__d(
  "WAWebBulletedListItemFormatMutator",
  [
    "WAWebBulletedListFormatMutator",
    "WAWebBulletedListItemMutatorComponent.react",
    "WAWebCreateRegexMutator",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = /(?:^)[\*\u2022]( (?! +)[^\n]+(?:$))/gm,
      c = /(?:^)\-( (?! +)[^\n]+(?:$))/gm,
      d = /(?:^)\*( (?! +)[^\n]*(?:$))/gm,
      m = /(?:^)\-( (?! +)[^\n]*(?:$))/gm,
      p = new Set([r("WAWebBulletedListFormatMutator")]);
    function _(e, t) {
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
            return p.has(e);
          }),
          (n.unformatDecorations = { pre: t }),
          n);
      return a;
    }
    var f = _(u, "*"),
      g = _(c, "-"),
      h = _(d, "*"),
      y = _(m, "-");
    ((l.BulletedListItem = f),
      (l.HyphenListItem = g),
      (l.BulletedListItemWithEmpty = h),
      (l.HyphenListItemWithEmpty = y));
  },
  98,
);
