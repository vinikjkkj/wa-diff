__d(
  "ZenonCallInstanceSDK",
  [
    "QuickPerformanceLogger",
    "Random",
    "ZenonLoggingUtils",
    "ZenonSdkMethod",
    "ZenonTransportType",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e, t) {
          ((this.$2 = e), (this.$1 = t));
        }
        var n = t.prototype;
        return (
          (n.ringParticipants = function (t, n) {
            return this.$3(
              this.$1.ringParticipants(this.$2, t, n),
              o("ZenonSdkMethod").ZenonSdkMethod.RING_PARTICIPANTS,
            );
          }),
          (n.removeParticipants = function (t) {
            return this.$3(
              this.$1.removeParticipants(this.$2, t),
              o("ZenonSdkMethod").ZenonSdkMethod.REMOVE_PARTICIPANTS,
            );
          }),
          (n.forceEncodingEnabled = function (t) {
            return this.$3(
              this.$1.forceEncodingEnabled(this.$2, t),
              o("ZenonSdkMethod").ZenonSdkMethod.FORCE_ENCODING_ENABLED,
            );
          }),
          (n.addLocalTrack = function (t) {
            return this.$3(
              this.$1.addLocalTrack(this.$2, t),
              o("ZenonSdkMethod").ZenonSdkMethod.ADD_LOCAL_TRACK,
              { string: { trackType: t.contentType } },
            );
          }),
          (n.stopLocalTrack = function (t) {
            return this.$3(
              this.$1.stopLocalTrack(this.$2, t),
              o("ZenonSdkMethod").ZenonSdkMethod.STOP_LOCAL_TRACK,
            );
          }),
          (n.muteTrack = function (t, n) {
            return (
              n === void 0 && (n = !1),
              this.$3(
                this.$1.muteTrack(this.$2, t, n),
                o("ZenonSdkMethod").ZenonSdkMethod.MUTE_TRACK,
              )
            );
          }),
          (n.unmuteTrack = function (t, n) {
            return (
              n === void 0 && (n = !1),
              this.$3(
                this.$1.unmuteTrack(this.$2, t, n),
                o("ZenonSdkMethod").ZenonSdkMethod.UNMUTE_TRACK,
              )
            );
          }),
          (n.subscribeToRemoteVideo = function (t, n) {
            return this.$3(
              this.$1.subscribeToRemoteVideo(this.$2, t, n),
              o("ZenonSdkMethod").ZenonSdkMethod.SUBSCRIBE_TO_REMOTE_VIDEO,
            );
          }),
          (n.getLogIdentifiers = function () {
            return this.$1.getLogIdentifiers(this.$2);
          }),
          (n.unsubscribeFromStateSyncTopic = function (t) {
            return this.$3(
              this.$1.unsubscribeFromStateSyncTopic(this.$2, t),
              o("ZenonSdkMethod").ZenonSdkMethod
                .UNSUBSCRIBE_FROM_STATESYNC_TOPIC,
            );
          }),
          (n.subscribeToStateSyncTopic = function (t) {
            return this.$3(
              this.$1.updateStateSyncTopic(this.$2, t, null),
              o("ZenonSdkMethod").ZenonSdkMethod.SUBSCRIBE_TO_STATESYNC_TOPIC,
            );
          }),
          (n.replaceLocalTrack = function (t, n, r) {
            return (
              r === void 0 && (r = !1),
              this.$3(
                this.$1.replaceLocalTrack(this.$2, t, n, r),
                o("ZenonSdkMethod").ZenonSdkMethod.REPLACE_LOCAL_TRACK,
                { string: { trackType: n.contentType } },
              )
            );
          }),
          (n.removeLocalTrack = function (t) {
            return this.$3(
              this.$1.removeLocalTrack(this.$2, t),
              o("ZenonSdkMethod").ZenonSdkMethod.REMOVE_LOCAL_TRACK,
            );
          }),
          (n.createDataMessageSubscription = function (t, n, r, a) {
            return this.$3(
              this.$1.createDataMessageSubscription(this.$2, t, n, r, a),
              o("ZenonSdkMethod").ZenonSdkMethod
                .CREATE_DATA_MESSAGE_SUBSCRIPTION,
            );
          }),
          (n.removeDataMessageSubscription = function (t, n) {
            return this.$3(
              this.$1.removeDataMessageSubscription(this.$2, t, n),
              o("ZenonSdkMethod").ZenonSdkMethod
                .REMOVE_DATA_MESSAGE_SUBSCRIPTION,
            );
          }),
          (n.sendGenericDataMessage = function (t, n, r, a) {
            return (
              a === void 0 &&
                (a = o("ZenonTransportType").ZenonTransportType.SIGNALING),
              this.$3(
                this.$1.sendGenericDataMessage(this.$2, t, n, r, a),
                o("ZenonSdkMethod").ZenonSdkMethod.SEND_GENERIC_DATA_MESSAGE,
              )
            );
          }),
          (n.registerDataMessageService = function (t, n) {
            return this.$3(
              this.$1.registerDataMessageService(this.$2, t, n),
              o("ZenonSdkMethod").ZenonSdkMethod.REGISTER_SERVICE_NODE_ID,
            );
          }),
          (n.submitRating = function (t, n, r, o, a) {
            this.$1.submitRating(this.$2, t, n, r, o, a);
          }),
          (n.getConferenceName = function () {
            return this.$1.getConferenceName(this.$2);
          }),
          (n.getMediaMode = function () {
            return this.$1.getMediaMode(this.$2);
          }),
          (n.getSCTPDataChannelState = function (t) {
            return this.$1.getSCTPDataChannelState(this.$2, t);
          }),
          (n.updateStateSyncTopic = function (t, n) {
            return this.$3(
              this.$1.updateStateSyncTopic(this.$2, t, n),
              o("ZenonSdkMethod").ZenonSdkMethod.UPDATE_STATESYNC_TOPIC,
            );
          }),
          (n.approveParticipants = function (t) {
            return this.$3(
              this.$1.approveParticipants(this.$2, t),
              o("ZenonSdkMethod").ZenonSdkMethod.APPROVE_PARTICIPANTS,
            );
          }),
          (n.denyParticipants = function (t) {
            return this.$3(
              this.$1.denyParticipants(this.$2, t),
              o("ZenonSdkMethod").ZenonSdkMethod.DENY_PARTICIPANTS,
            );
          }),
          (n.getSignalingProtocol = function () {
            return this.$1.getSignalingProtocol(this.$2);
          }),
          (n.getEncryptionKeysManagerState = function () {
            return this.$1.getEncryptionKeysManagerState(this.$2);
          }),
          (n.endCall = function (t, n) {
            return this.$3(
              this.$1.endCall(this.$2, t, n),
              o("ZenonSdkMethod").ZenonSdkMethod.END_CALL,
            );
          }),
          (n.join = function (t) {
            var e = this;
            return this.$3(
              this.$1.join(babelHelpers.extends({ clientCallID: this.$2 }, t)),
              o("ZenonSdkMethod").ZenonSdkMethod.JOIN,
            ).then(function () {
              return e;
            });
          }),
          (n.initLogging = function (t) {
            this.$1.initializeLogging(this.$2, t);
          }),
          (n.getClientCallID_DEPRECATED = function () {
            return this.$2;
          }),
          (n.$3 = function (n, a, i) {
            i === void 0 && (i = {});
            var t = r("qpl")._(398989351, "1493"),
              l = r("Random").uint32(),
              s = o("ZenonLoggingUtils").shouldAllowLogging();
            return (
              s &&
                (i.string ? (i.string.method = a) : (i.string = { method: a }),
                (e || (e = r("QuickPerformanceLogger"))).markerStart(t, l),
                e.markerAnnotate(t, i, { instanceKey: l })),
              n
                .then(function () {
                  s &&
                    (e || (e = r("QuickPerformanceLogger"))).markerEnd(t, 2, l);
                })
                .catch(function () {
                  s &&
                    (e || (e = r("QuickPerformanceLogger"))).markerEnd(
                      t,
                      87,
                      l,
                    );
                })
            );
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
