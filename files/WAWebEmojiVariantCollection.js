__d(
  "WAWebEmojiVariantCollection",
  [
    "WAWebBaseCachePolicy",
    "WAWebBaseCollection",
    "WAWebEmoji",
    "WAWebEmojiVariantModel",
    "WAWebUserPrefsKeys",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.setVariant = function (t, n) {
          var e = o("WAWebEmoji").EmojiUtil.getSkinToneBase(t);
          if (e) this.gadd({ id: e, variant: n });
          else throw r("err")("attempt to store variantless emoji");
        }),
        (n.getVariant = function (t) {
          if (o("WAWebEmoji").EmojiUtil.getSkinToneBase(t)) {
            var e = this.get(t);
            return e
              ? o("WAWebEmoji").EmojiUtil.normalizeEmoji(e.variant)
              : null;
          }
          throw r("err")("attempt to get variantless emoji");
        }),
        (n.getVariantIfExists = function (t) {
          if (o("WAWebEmoji").EmojiUtil.getSkinToneBase(t)) {
            var e = this.get(t);
            return e
              ? o("WAWebEmoji").EmojiUtil.normalizeEmoji(e.variant)
              : null;
          }
          return null;
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = r("WAWebEmojiVariantModel")),
      (e.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS.EMOJI_VARIANT_COLLECTION,
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.LOAD,
        delay: 1e3,
      }));
    var s = new e();
    l.EmojiVariantCollection = s;
  },
  98,
);
