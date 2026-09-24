__d(
  "WAWebCallUserJourneyLogger",
  [
    "WARandomHex",
    "WAWebCallUserJourneyAppSessionId",
    "WAWebCallUserJourneyGating",
    "WAWebCallUserJourneyWamEvent",
    "WAWebUserJourneyEventMs",
    "WAWebWamEnumCallActionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Object.freeze({
        TAP_MUTE: (e = o("WAWebWamEnumCallActionType")).CALL_ACTION_TYPE
          .TAP_MUTE,
        TAP_UNMUTE: e.CALL_ACTION_TYPE.TAP_UNMUTE,
        TURN_ON_CAMERA: e.CALL_ACTION_TYPE.TURN_ON_CAMERA,
        TURN_OFF_CAMERA: e.CALL_ACTION_TYPE.TURN_OFF_CAMERA,
        TYPE_CHARACTER: e.CALL_ACTION_TYPE.TYPE_CHARACTER,
        OPEN_DEVICE_OPTIONS: e.CALL_ACTION_TYPE.OPEN_DEVICE_OPTIONS,
        OPEN_AUDIO_DEVICE_OPTIONS: e.CALL_ACTION_TYPE.OPEN_AUDIO_DEVICE_OPTIONS,
        OPEN_VIDEO_DEVICE_OPTIONS: e.CALL_ACTION_TYPE.OPEN_VIDEO_DEVICE_OPTIONS,
        TAP_ADD_PARTICIPANT: e.CALL_ACTION_TYPE.TAP_ADD_PARTICIPANT,
        OPEN_PARTICIPANT_LIST: e.CALL_ACTION_TYPE.OPEN_PARTICIPANT_LIST,
        OPEN_SEARCH_BAR: e.CALL_ACTION_TYPE.OPEN_SEARCH_BAR,
        CANCEL: e.CALL_ACTION_TYPE.CANCEL,
        CLICK_VIEW_UNKNOWN_PEER_VIDEO:
          e.CALL_ACTION_TYPE.CLICK_VIEW_UNKNOWN_PEER_VIDEO,
        MESSAGE_OTHER_FOCUS_VIEW: e.CALL_ACTION_TYPE.MESSAGE_OTHER_FOCUS_VIEW,
        MUTE_OTHER: e.CALL_ACTION_TYPE.MUTE_OTHER,
        REMOVE_USER: e.CALL_ACTION_TYPE.REMOVE_USER,
        RING_PARTICIPANT: e.CALL_ACTION_TYPE.RING_PARTICIPANT,
        TAP_WAVE_ONE: e.CALL_ACTION_TYPE.TAP_WAVE_ONE,
        PAGINATE: e.CALL_ACTION_TYPE.PAGINATE,
        PIN: e.CALL_ACTION_TYPE.PIN,
        UNPIN: e.CALL_ACTION_TYPE.UNPIN,
        SWITCH_TO_GALLERY_VIEW: e.CALL_ACTION_TYPE.SWITCH_TO_GALLERY_VIEW,
        SWITCH_TO_SPEAKER_VIEW: e.CALL_ACTION_TYPE.SWITCH_TO_SPEAKER_VIEW,
        SCREEN_SHARE_VIDEO_CALL_ACCEPT:
          e.CALL_ACTION_TYPE.SCREEN_SHARE_VIDEO_CALL_ACCEPT,
        SCREEN_SHARE_VIDEO_CALL_DECLINE:
          e.CALL_ACTION_TYPE.SCREEN_SHARE_VIDEO_CALL_DECLINE,
        START_SCREEN_SHARE: e.CALL_ACTION_TYPE.START_SCREEN_SHARE,
        TAP_SCREEN_SHARE: e.CALL_ACTION_TYPE.TAP_SCREEN_SHARE,
        TAP_MORE: e.CALL_ACTION_TYPE.TAP_MORE,
        TAP_REACTION: e.CALL_ACTION_TYPE.TAP_REACTION,
        TAP_RAISE_HAND: e.CALL_ACTION_TYPE.TAP_RAISE_HAND,
        TAP_CONFIRM_ADD_PARTICIPANT:
          e.CALL_ACTION_TYPE.TAP_CONFIRM_ADD_PARTICIPANT,
        TAP_CONFIRM_ADD_PARTICIPANT_FROM_CHAT:
          e.CALL_ACTION_TYPE.TAP_CONFIRM_ADD_PARTICIPANT_FROM_CHAT,
        TAP_DISMISS_BUTTON: e.CALL_ACTION_TYPE.TAP_DISMISS_BUTTON,
        TAP_E2EE: e.CALL_ACTION_TYPE.TAP_E2EE,
        TAP_LOWER_HAND: e.CALL_ACTION_TYPE.TAP_LOWER_HAND,
        END_CALL: e.CALL_ACTION_TYPE.END_CALL,
        OPEN_CHAT: e.CALL_ACTION_TYPE.OPEN_CHAT,
      }),
      u = (function () {
        function e() {
          ((this.$1 = null),
            (this.$2 = !1),
            (this.$3 = !1),
            (this.$4 = !1),
            (this.$5 = null));
        }
        var t = e.prototype;
        return (
          (t.startCall = function (t) {
            ((this.$1 = t),
              (this.$2 = !1),
              (this.$3 = !1),
              (this.$4 = !1),
              (this.$5 = null));
          }),
          (t.setCallConnected = function (t) {
            this.$2 = t;
          }),
          (t.setGroupCall = function (t) {
            this.$3 = this.$3 || t;
          }),
          (t.setVideoCall = function (t) {
            this.$4 = t;
          }),
          (t.setConnectedParticipants = function (t) {
            this.$5 = t;
          }),
          (t.logAction = function (n) {
            var t = this.$1;
            if (
              !(
                t == null ||
                !o(
                  "WAWebCallUserJourneyGating",
                ).isCallUserJourneyLoggingEnabled()
              )
            ) {
              var r = {
                  appSessionId: o(
                    "WAWebCallUserJourneyAppSessionId",
                  ).callUserJourneyAppSessionId(e.appSessionId),
                  callActionType: n.callActionType,
                  callRandomId: t,
                  isCallConnected: this.$2,
                  isGroupCall: this.$3,
                  isVideoCall: this.$4,
                  uiSurface: n.uiSurface,
                },
                a = this.$5;
              (a != null && (r.numConnectedParticipants = a),
                n.subSurface != null && (r.subSurface = n.subSurface));
              var i = o("WAWebUserJourneyEventMs").userJourneyEventMs();
              (i != null && (r.userJourneyEventMs = i),
                new (o("WAWebCallUserJourneyWamEvent").CallUserJourneyWamEvent)(
                  r,
                ).commit());
            }
          }),
          (t.clearCall = function () {
            ((this.$1 = null),
              (this.$2 = !1),
              (this.$3 = !1),
              (this.$4 = !1),
              (this.$5 = null));
          }),
          e
        );
      })();
    u.appSessionId = o("WARandomHex").randomHex(16);
    var c = new u();
    ((l.PARITY_CALL_ACTION_TYPE = s),
      (l.WAWebCallUserJourneyLogger = u),
      (l.CallUserJourneyLogger = c));
  },
  98,
);
