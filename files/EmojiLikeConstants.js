__d(
  "EmojiLikeConstants",
  ["EmojiStaticConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze({
        XSMALL: "xsmall",
        SMALL: "small",
        MEDIUM: "medium",
        LARGE: "large",
      }),
      s = {
        dp16: "xsmall",
        dp32: "small",
        dp64: "medium",
        db64: "medium",
        dp128: "large",
      },
      u = Object.freeze({ PICKER: "picker", HOT_LIKE: "hot_like" }),
      c = [983040],
      d = "hot_emoji_source",
      m = "hot_emoji_size",
      p = "emoji_like",
      _ = "\uD83D\uDC4D",
      f = [128077];
    ((l.sizeMap = r("EmojiStaticConfig").sizeMap),
      (l.size = e),
      (l.sizeMapTransfer = s),
      (l.source = u),
      (l.FB_THUMBS_UP_EMOJI = c),
      (l.SOURCE_TAG_PREFIX = d),
      (l.TAG_PREFIX_NEW = m),
      (l.TAG_PREFIX_OLD = p),
      (l.THUMBS_UP_EMOJI = _),
      (l.THUMBS_UP_EMOJI_CODES = f));
  },
  98,
);
