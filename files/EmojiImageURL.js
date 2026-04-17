__d(
  "EmojiImageURL",
  ["invariant", "EmojiConfig", "EmojiStaticConfig"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, n) {
      for (
        var r = t.unescape(encodeURIComponent(e)), o = n, a = 0;
        a < r.length;
        a++
      )
        ((o = (o << 5) - o + e.charCodeAt(a)), (o &= 4294967295));
      return (o & 255).toString(16);
    }
    function u(t, n, o) {
      n in r("EmojiStaticConfig").supportedSizes || s(0, 772, n);
      var a =
          r("EmojiConfig").pixelRatio +
          "/" +
          n +
          "/" +
          t +
          r("EmojiStaticConfig").fileExt,
        i = e(a, r("EmojiStaticConfig").checksumBase);
      return r("EmojiConfig").schemaAuth + "/" + o + i + "/" + a;
    }
    function c(e, t) {
      return (
        t === void 0 && (t = 16),
        u(e, t, r("EmojiStaticConfig").types.COMPOSITE)
      );
    }
    function d(e, t) {
      return (
        t === void 0 && (t = 16),
        u(e, t, r("EmojiStaticConfig").types.EMOJI_3)
      );
    }
    function m(e, t) {
      return (
        t === void 0 && (t = 16),
        u(e, t, r("EmojiStaticConfig").types.FB_EMOJI_EXTENDED)
      );
    }
    function p(e, t) {
      return (
        t === void 0 && (t = 16),
        u(e, t, r("EmojiStaticConfig").types.FBEMOJI)
      );
    }
    function _(e, t) {
      return u(e, t, r("EmojiStaticConfig").types.MESSENGER);
    }
    ((l.getCompositeURL = c),
      (l.getEmoji3URL = d),
      (l.getFBEmojiExtendedURL = m),
      (l.getFBEmojiURL = p),
      (l.getMessengerURL = _));
  },
  98,
);
