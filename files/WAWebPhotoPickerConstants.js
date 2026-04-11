__d(
  "WAWebPhotoPickerConstants",
  ["$InternalEnum", "WAWebEmoji", "compactMap"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored([
        "GROUP",
        "PROFILE",
        "COMMUNITY",
        "DEFAULT_ANNOUNCEMENT_GROUP",
        "GENERAL_GROUP",
        "COVER_PHOTO",
        "NEWSLETTER",
      ]),
      s = n("$InternalEnum").Mirrored(["COVER_PHOTO", "EMOJI_SUGGESTIONS"]),
      u;
    function c() {
      return (
        u == null &&
          (u = r("compactMap")(
            [
              String.fromCodePoint(127979),
              String.fromCodePoint(128054),
              String.fromCodePoint(128049),
              String.fromCodePoint(127969),
              String.fromCodePoint(129716),
              String.fromCodePoint(127800),
              String.fromCodePoint(127912),
              String.fromCodePoint(127958, 65039),
              String.fromCodePoint(128218),
              String.fromCodePoint(127916),
              String.fromCodePoint(127918),
              String.fromCodePoint(128247),
              String.fromCodePoint(128241),
              String.fromCodePoint(9917),
              String.fromCodePoint(127936),
              String.fromCodePoint(127955),
              String.fromCodePoint(127944),
              String.fromCodePoint(128512),
              String.fromCodePoint(128663),
              String.fromCodePoint(127828),
              String.fromCodePoint(127922),
              String.fromCodePoint(9992, 65039),
              String.fromCodePoint(10084, 65039),
            ],
            function (e) {
              return o("WAWebEmoji").EmojiUtil.normalizeEmojiFromString(e);
            },
          )),
        u
      );
    }
    ((l.PhotoPickerType = e),
      (l.PhotoPickerThemeType = s),
      (l.getPhotoPickerQualifiedEmojis = c));
  },
  98,
);
