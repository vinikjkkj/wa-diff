__d(
  "WAWebAnimatedEmojiGatingUtils",
  ["WAWebABProps", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("animated_emojis_enabled");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "animated_emoji_set_1_enabled",
      );
    }
    function u() {
      return (
        !r("gkx")("26258") &&
        o("WAWebABProps").getABPropConfigValue(
          "animated_emoji_final_set_enabled",
        )
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "animated_race_mercedes_car_emoji_enabled",
      );
    }
    ((l.isAnimatedEmojiEnabled = e),
      (l.isAnimatedEmojiSet1Enabled = s),
      (l.isAnimatedEmojiFinalSetEnabled = u),
      (l.isAnimatedEmojiMercedesRacingEnabled = c));
  },
  98,
);
