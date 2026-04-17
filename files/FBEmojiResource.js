__d(
  "FBEmojiResource",
  [
    "EmojiImageURL",
    "EmojiRenderer",
    "FBEmojiUtils",
    "SupportedEmoji3",
    "SupportedEmojiExtended",
    "SupportedFacebookEmoji",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("FBEmojiUtils").normalizeKey(e);
      return r("SupportedFacebookEmoji")[t] || r("SupportedEmoji3")[t]
        ? t
        : null;
    }
    function s(e) {
      return r("SupportedEmoji3")[e]
        ? "EMOJI_3"
        : r("SupportedFacebookEmoji")[e]
          ? "FB_EMOJI"
          : null;
    }
    var u = (function () {
      function t(e) {
        this.$1 = e;
      }
      var n = t.prototype;
      return (
        (n.getImageURL = function (t) {
          var e = this.$1;
          if (
            Object.prototype.hasOwnProperty.call(r("SupportedEmojiExtended"), e)
          )
            return o("EmojiImageURL").getFBEmojiExtendedURL(e, t);
          var n = s(e);
          switch (n) {
            case "EMOJI_3":
              return o("EmojiImageURL").getEmoji3URL(e, t);
            case "FB_EMOJI":
              return o("EmojiImageURL").getFBEmojiURL(e, t);
          }
          return null;
        }),
        (t.firstFromText = function (n) {
          var e = o("EmojiRenderer").parse(n);
          return e.length === 0 ? null : t.fromCodepoints(e[0].emoji);
        }),
        (t.fromCodepoints = function (r) {
          var n = e(o("FBEmojiUtils").getKeyFromCodepoints(r));
          return n == null ? null : new t(n);
        }),
        t
      );
    })();
    l.default = u;
  },
  98,
);
