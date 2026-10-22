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
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "music_on_chats_geogating_enabled",
      );
    }
    var _ = 6e4,
      f = 600;
    ((l.isStatusMusicReceiverEnabled = e),
      (l.isStatusMusicSaveToDiskEnabled = s),
      (l.isStatusMusicReceiverEnabledForNewsletter = u),
      (l.isNewsletterStatusMusicConsumptionEnabled = c),
      (l.isMusicOnChatsForwardingEnabled = d),
      (l.isMusicOnChatsReceiverEnabled = m),
      (l.isMusicOnChatsGeogatingEnabled = p),
      (l.MAX_MUSIC_DOWNLOAD_EMBED_DURATION_MS = _),
      (l.MIN_SECONDS_BETWEEN_MUSIC_CONSUMPTION_AVAILABILITY_CHECK = f));
  },
  98,
);
