__d(
  "WAWebAnimatedEmojiGatingUtils",
  ["WAWebABProps", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("animated_emojis_enabled");
    }
    function s() {
      return (
        !r("gkx")("26258") &&
        o("WAWebABProps").getABPropConfigValue(
          "animated_emoji_final_set_enabled",
        )
      );
    }
    function u() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "animated_soccer_ball_prod_enabled",
        ) ||
        o("WAWebABProps").getABPropConfigValue(
          "animated_soccer_ball_test_enabled",
        )
      );
    }
    ((l.isAnimatedEmojiEnabled = e),
      (l.isAnimatedEmojiFinalSetEnabled = s),
      (l.isAnimatedEmojiSoccerBallEnabled = u));
  },
  98,
);
