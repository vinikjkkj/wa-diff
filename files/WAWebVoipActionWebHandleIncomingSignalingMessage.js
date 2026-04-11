__d(
  "WAWebVoipActionWebHandleIncomingSignalingMessage",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebVoipActionWriteCallLogOfferNotice",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipSignalingEnums",
    "WAWebVoipWaCallEnums",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n) {
      var a = o("WAWebVoipSignalingEnums").TYPE_NAME[t.type];
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            'voip:handleIncomingSignalingMsg: type: "',
            '" msg: ',
          ])),
        a,
      );
      var i = r("WAWebCallCollection").processIncomingCall(
        t.call_id,
        t.peer_jid,
        {
          isVideo: t.isVideoCall,
          offerTime: t.t,
          isSilenced: !!t.silence_reason,
          offerReceivedWhileOffline: t.is_offline,
          groupWid: t.group_jid,
        },
      );
      if (!i) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip:disabled: sig type ",
              ", call not found",
            ])),
          t.type,
        );
        return;
      }
      switch (t.type) {
        case o("WAWebVoipSignalingEnums").TYPE.OFFER:
          if (
            (t.t != null && (i.offerTime = t.t),
            (i.isVideo = !!t.isVideoCall),
            i.setState(o("WAWebVoipWaCallEnums").CallState.ReceivedCall),
            (i.isVoiceChat =
              t.silence_reason === "vc_init" ||
              t.silence_reason === "vc_wave_all"),
            (i.silenceReason = t.silence_reason),
            t.silence_reason === "vc_wave_all")
          ) {
            var l = i.isGroup
              ? { isGroup: !0, groupJid: i.groupJid }
              : { isGroup: !1 };
            o(
              "WAWebVoipActionWriteCallLogOfferNotice",
            ).generateCallLogOfferNotice(
              babelHelpers.extends(
                {
                  callCreatorWid: t.peer_jid,
                  offerTime: i.offerTime,
                  isVideo: i.isVideo,
                  silenceReason: t.silence_reason,
                  callId: t.call_id,
                  isOffline: t.is_offline,
                  callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome.Missed,
                },
                l,
              ),
            );
          }
          break;
        case o("WAWebVoipSignalingEnums").TYPE.TERMINATE: {
          if (
            (o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera(),
            i.isVoiceChat)
          ) {
            var u;
            t.silence_reason = (u = i.silenceReason) != null ? u : "";
          }
          i.setState(o("WAWebVoipWaCallEnums").CallState.CallStateEnding);
          var c = n.maybeAttrString("reason"),
            d = c === "group_call_ended",
            m = d ? { isGroup: !0, groupJid: i.groupJid } : { isGroup: !1 },
            p;
          switch (c) {
            case "group_call_ended":
            case "timeout":
            case void 0:
            case null:
              p = o("WAWebCallLogMsgData.flow").CallOutcome.Missed;
              break;
            case "accepted_elsewhere":
              p = o("WAWebCallLogMsgData.flow").CallOutcome.AcceptedElsewhere;
              break;
            case "rejected_elsewhere":
              p = o("WAWebCallLogMsgData.flow").CallOutcome.Rejected;
              break;
          }
          p &&
            o(
              "WAWebVoipActionWriteCallLogOfferNotice",
            ).generateCallLogOfferNotice(
              babelHelpers.extends(
                {
                  callCreatorWid: t.call_creator,
                  offerTime: i.offerTime,
                  isVideo: i.isVideo,
                  silenceReason: t.silence_reason,
                  callId: t.call_id,
                  isOffline: t.is_offline,
                  callOutcome: p,
                },
                m,
              ),
            );
          break;
        }
      }
    }
    l.handleVoipWebIncomingSignalingMessageAction = u;
  },
  98,
);
