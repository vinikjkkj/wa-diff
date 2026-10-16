__d(
  "WAWebEmojiFormatMutator",
  [
    "WAUnicodeUtils",
    "WAWebEmoji",
    "WAWebEmojiMutatorComponent.react",
    "WAWebExtractRangesUsingRegex",
    "WAWebFormatMutator",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          babelHelpers.inheritsLoose(t, e),
          (t.jsx = function (t, n, o) {
            var e = n[0],
              a = o.ellipsifiable,
              i = o.emojiXstyle,
              l = o.selectable,
              u = l === void 0 ? !1 : l,
              c = o.size;
            return s.jsx(r("WAWebEmojiMutatorComponent.react"), {
              ellipsifiable: a,
              emoji: e,
              size: c,
              selectable: u,
              xstyle: i,
            });
          }),
          (t.match = function (t, n, a) {
            var e = a != null && a !== 0 ? a : t.length,
              i = o("WAUnicodeUtils").firstNCodepoints(t, e);
            return r("WAWebExtractRangesUsingRegex")(
              i,
              o("WAWebEmoji").EmojiUtil.emojiRegex(),
              0,
              c,
            );
          }),
          t
        );
      })(r("WAWebFormatMutator"));
    ((u.ellipsifiable = !0), (u.compatibility = !0));
    function c(e, t) {
      return o("WAWebEmoji").EmojiUtil.getGlyphId(e[0]) ? e : null;
    }
    l.default = u;
  },
  98,
);
