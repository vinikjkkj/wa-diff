__d(
  "ZenonSignalingModel",
  ["ZenonMediaModeManager", "ZenonStateSyncStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, a, i, l, s) {
        ((this.$9 = new (r("ZenonStateSyncStore"))()),
          (this.$11 = new (o("ZenonMediaModeManager").ZenonMediaModeManager)()),
          (this.$1 = s),
          (this.$2 = e),
          (this.$3 = t),
          (this.$4 = n),
          (this.$5 = a),
          (this.$6 = i),
          (this.$7 = l));
      }
      var t = e.prototype;
      return (
        (t.getActorID = function () {
          return this.$1;
        }),
        (t.setActorID = function (t) {
          this.$1 = t;
        }),
        (t.getSignalingID = function () {
          return this.$2;
        }),
        (t.updateRemoteSignalingID = function (t) {
          this.$3 = t;
        }),
        (t.getRemoteSignalingID = function () {
          return this.$3;
        }),
        (t.getUserInfo = function () {
          return this.$4;
        }),
        (t.getRemoteInfo = function () {
          return this.$5;
        }),
        (t.getRoomInfo = function () {
          return this.$6;
        }),
        (t.updateRoomInfo = function (t) {
          this.$6 = t;
        }),
        (t.getProtocol = function () {
          return this.$7;
        }),
        (t.getMediaModeManager = function () {
          return this.$11;
        }),
        (t.getStateSyncStore = function () {
          return this.$9;
        }),
        (t.updateOverlayConfigServerLayer = function (t) {
          this.$8 = t;
        }),
        (t.getOverlayConfigServerLayer = function () {
          return this.$8;
        }),
        (t.setNotifyCallback = function (t) {
          this.$10 = t;
        }),
        (t.notify = function () {
          this.$10 && this.$10();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
