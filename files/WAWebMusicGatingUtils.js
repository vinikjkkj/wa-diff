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
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "channels_music_forwarding_disabled",
      );
    }
    var d = 6e4,
      m = 600;
    ((l.isStatusMusicReceiverEnabled = e),
      (l.isStatusMusicSaveToDiskEnabled = s),
      (l.isStatusMusicReceiverEnabledForNewsletter = u),
      (l.isMusicForwardingDisabled = c),
      (l.MAX_MUSIC_DOWNLOAD_EMBED_DURATION_MS = d),
      (l.MIN_SECONDS_BETWEEN_MUSIC_CONSUMPTION_AVAILABILITY_CHECK = m));
  },
  98,
);
