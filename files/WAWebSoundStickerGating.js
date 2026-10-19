__d(
  "WAWebSoundStickerGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "sound_stickers_consumption_enabled",
      );
    }
    function s() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "sound_stickers_creation_enabled",
        )
      );
    }
    function u() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "sound_stickers_audio_playing_enabled",
        )
      );
    }
    ((l.isSoundStickerConsumptionEnabled = e),
      (l.isSoundStickerCreationEnabled = s),
      (l.isSoundStickerPlaybackEnabled = u));
  },
  98,
);
