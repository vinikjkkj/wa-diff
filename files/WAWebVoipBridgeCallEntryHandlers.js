__d(
  "WAWebVoipBridgeCallEntryHandlers",
  [
    "WAWebIncomingOfferNoticeVoipHandlerAction",
    "WAWebVoipActionRequestOpenChat",
    "WAWebVoipActivityTracker",
    "WAWebVoipStartCall",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      handleIncomingOfferNotice: function (t) {
        var e,
          n = t.callCreatorJid,
          a = t.callId,
          i = t.isGroup,
          l = t.isVideo,
          s = t.offerTime,
          u = o("WAWebWidFactory").createWid(n);
        ((e = o("WAWebVoipActivityTracker")).startActivityTracking(),
          e.startUiActivityTracking(),
          e.trackUiActivity(e.VoipUiActivity.CALL_RECEIVED_INCOMING),
          i
            ? o("WAWebVoipActivityTracker").trackActivity(
                l
                  ? o("WAWebVoipActivityTracker").VoipActivity
                      .RECEIVED_INCOMING_VIDEO_GROUP_CALL
                  : o("WAWebVoipActivityTracker").VoipActivity
                      .RECEIVED_INCOMING_AUDIO_GROUP_CALL,
              )
            : o("WAWebVoipActivityTracker").trackActivity(
                l
                  ? o("WAWebVoipActivityTracker").VoipActivity
                      .RECEIVED_INCOMING_VIDEO_CALL
                  : o("WAWebVoipActivityTracker").VoipActivity
                      .RECEIVED_INCOMING_AUDIO_CALL,
              ),
          r("WAWebIncomingOfferNoticeVoipHandlerAction")({
            callCreator: u,
            callId: a,
            isGroup: i,
            isVideo: l,
            offerTime: s,
          }));
      },
      startVoipCallByWid: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isVideo,
            n = e.peerJid;
          yield o("WAWebVoipStartCall").startWAWebVoipCall(n, t, 0, 0, null, {
            entryTrust: "user_gesture",
          });
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      requestOpenChat: function (t) {
        var e = t.chatJid,
          n = o("WAWebWidFactory").createWid(String(e));
        return o("WAWebVoipActionRequestOpenChat").requestOpenChat(n);
      },
      requestJoinCall: function (t) {
        var e = t.callId;
        o("WAWebVoipStartCall").joinOngoingCallByCallId(e);
      },
    };
    l.VoipBridgeCallEntryHandlers = e;
  },
  98,
);
