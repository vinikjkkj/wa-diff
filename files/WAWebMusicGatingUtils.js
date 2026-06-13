__d(
  "WAWebMusicGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebABProps").getABPropConfigValue("wabba_receiver_enabled");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "wabba_save_to_camera_roll_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_music_receiver_enabled",
      );
    }
    var c = 6e4,
      d = 600;
    ((l.isStatusMusicReceiverEnabled = e),
      (l.isStatusMusicSaveToDiskEnabled = s),
      (l.isStatusMusicReceiverEnabledForNewsletter = u),
      (l.MAX_MUSIC_DOWNLOAD_EMBED_DURATION_MS = c),
      (l.MIN_SECONDS_BETWEEN_MUSIC_CONSUMPTION_AVAILABILITY_CHECK = d));
  },
  98,
);
