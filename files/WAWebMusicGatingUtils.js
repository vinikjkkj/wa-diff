__d(
  "WAWebMusicGatingUtils",
  ["WAWebABProps", "WAWebBizAiHomeChat"],
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
    function m(e) {
      return p(e)
        ? _() &&
            o("WAWebABProps").getABPropConfigValue(
              "music_on_chats_standalone_producer_enabled",
            )
        : !1;
    }
    function p(e) {
      return (
        e.isGroup() ||
        (e.isRegularUser() &&
          !e.isHosted() &&
          !o("WAWebBizAiHomeChat").isBizAiHomeChat(e))
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "music_on_chats_standalone_receiver_enabled",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "music_on_chats_geogating_enabled",
      );
    }
    var g = 6e4,
      h = 600;
    ((l.isStatusMusicReceiverEnabled = e),
      (l.isStatusMusicSaveToDiskEnabled = s),
      (l.isStatusMusicReceiverEnabledForNewsletter = u),
      (l.isNewsletterStatusMusicConsumptionEnabled = c),
      (l.isMusicOnChatsForwardingEnabled = d),
      (l.canSendMusicTo = m),
      (l.isMusicOnChatsReceiverEnabled = _),
      (l.isMusicOnChatsGeogatingEnabled = f),
      (l.MAX_MUSIC_DOWNLOAD_EMBED_DURATION_MS = g),
      (l.MIN_SECONDS_BETWEEN_MUSIC_CONSUMPTION_AVAILABILITY_CHECK = h));
  },
  98,
);
