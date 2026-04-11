__d(
  "WAWebEmojiAssetLoaderConfig",
  ["WAWebEmojiJsonEmojiUnicode", "WAWebEmojiJsonWaEmojiUnicode"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        APPLE: {
          UNICODE_TO_EMOJI: r("WAWebEmojiJsonEmojiUnicode"),
          SELECTOR: "apple",
        },
        WHATSAPP: {
          UNICODE_TO_EMOJI: r("WAWebEmojiJsonWaEmojiUnicode"),
          SELECTOR: "wa",
        },
      };
    }
    l.default = e;
  },
  98,
);
