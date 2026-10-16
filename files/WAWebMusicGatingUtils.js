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
        "channel_status_consumption_music_enabled",
      );
    }
    function d() {
      return !1;
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "music_on_chats_standalone_receiver_enabled",
      );
    }
    var p = 6e4,
      _ = 600;
    ((l.isStatusMusicReceiverEnabled = e),
      (l.isStatusMusicSaveToDiskEnabled = s),
      (l.isStatusMusicReceiverEnabledForNewsletter = u),
      (l.isNewsletterStatusMusicConsumptionEnabled = c),
      (l.isMusicOnChatsForwardingEnabled = d),
      (l.isMusicOnChatsReceiverEnabled = m),
      (l.MAX_MUSIC_DOWNLOAD_EMBED_DURATION_MS = p),
      (l.MIN_SECONDS_BETWEEN_MUSIC_CONSUMPTION_AVAILABILITY_CHECK = _));
  },
  98,
);
