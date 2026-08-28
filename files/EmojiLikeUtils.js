__d(
  "EmojiLikeUtils",
  ["EmojiLikeConstants", "MercuryTagHelper"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return (e.tags ? e.tags.push(s(t)) : (e.tags = [s(t)]), e);
    }
    function s(e) {
      var t = o("EmojiLikeConstants").TAG_PREFIX_NEW;
      return t + ":" + e;
    }
    function u(e, t) {
      return (e.tags ? e.tags.push(c(t)) : (e.tags = [c(t)]), e);
    }
    function c(e) {
      return o("EmojiLikeConstants").SOURCE_TAG_PREFIX + ":" + e;
    }
    function d(e) {
      return m(e) != null;
    }
    function m(e) {
      if (!e.tags) return null;
      var t = o("MercuryTagHelper").get(
        e.tags,
        o("EmojiLikeConstants").TAG_PREFIX_NEW,
      );
      return (
        t ||
        o("MercuryTagHelper").get(
          e.tags,
          o("EmojiLikeConstants").TAG_PREFIX_OLD,
        )
      );
    }
    ((l.setEmojiSize = e),
      (l.setEmojiSource = u),
      (l.isEmojiLike = d),
      (l.getEmojiSize = m));
  },
  98,
);
