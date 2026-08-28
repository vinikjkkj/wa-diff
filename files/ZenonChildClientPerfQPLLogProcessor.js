__d(
  "ZenonChildClientPerfQPLLogProcessor",
  [
    "Promise",
    "QuickPerformanceLogger",
    "ZenonCallInfoManager",
    "ZenonClientPerfQPLConstants",
    "ZenonDismissReason",
    "ZenonTransportChannelStatus",
    "performanceNow",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (function () {
        function t(e) {
          var t = e.data,
            n = e.isE2eeMandated,
            o = e.startFromNavigation;
          ((this.$4 = !0),
            (this.$7 = r("qpl")._(41156609, "943")),
            (this.$3 = new (r("ZenonCallInfoManager"))(t)),
            (this.$5 = new (r("ZenonTransportChannelStatus"))()),
            (this.$1 = t.signalingID),
            (this.$2 = n),
            (this.$4 = o),
            (this.$6 = t.isVideo));
        }
        var a = t.prototype;
        return (
          (a.processEvent = function (a) {
            switch (a.name) {
              case "updateLogIdentifiers":
                a.logIdentifiers.localCallID != null &&
                  (this.$3.setLocalCallID(a.logIdentifiers.localCallID),
                  (u || (u = r("QuickPerformanceLogger"))).markerAnnotate(
                    this.$7,
                    { string: { local_call_id: a.logIdentifiers.localCallID } },
                    { instanceKey: +this.$1 },
                  ));
                break;
              case "setRemoteSignalingID":
                (this.$3.setSharedCallId(a.remoteSignalingID),
                  (u || (u = r("QuickPerformanceLogger"))).markerAnnotate(
                    this.$7,
                    { string: { shared_call_id: a.remoteSignalingID } },
                    { instanceKey: +this.$1 },
                  ));
                break;
              case "callJoinRequest":
                this.$9();
                break;
              case "connectionStart":
                this.$10(
                  this.$7 === r("qpl")._(41156609, "943")
                    ? o("ZenonClientPerfQPLConstants")
                        .POINT_CONNECTION_OUTGOING_START
                    : o("ZenonClientPerfQPLConstants")
                        .POINT_CONNECTION_INCOMING_CONNECTION_STARTED,
                );
                break;
              case "inviteSent":
                this.$10(
                  o("ZenonClientPerfQPLConstants").POINT_CONNECTION_INVITE_SENT,
                );
                break;
              case "mwMessageSent":
                a.mwMessage.jsonPayload.body.joinRequest &&
                  this.$10(
                    o("ZenonClientPerfQPLConstants")
                      .POINT_SIGNALING_MW_JOIN_REQ_SENT,
                  );
                break;
              case "mwThriftMessageSent":
                a.mwThriftMessage.messageBody.joinRequest &&
                  this.$10(
                    o("ZenonClientPerfQPLConstants")
                      .POINT_SIGNALING_MW_JOIN_REQ_SENT,
                  );
                break;
              case "mwMessageRecv":
                a.mwMessage.jsonPayload.body.joinResponse &&
                  this.$10(
                    o("ZenonClientPerfQPLConstants")
                      .POINT_SIGNALING_MW_JOIN_RESPONSE_RECV,
                  );
                break;
              case "mwThriftMessageRecv":
                a.mwThriftMessage.messageBody.joinResponse &&
                  this.$10(
                    o("ZenonClientPerfQPLConstants")
                      .POINT_SIGNALING_MW_JOIN_RESPONSE_RECV,
                  );
                break;
              case "atLeastOneParticipantAlerted":
                this.$10(
                  o("ZenonClientPerfQPLConstants")
                    .POINT_CONNECTION_INVITE_ACK_RECV,
                );
                break;
              case "atLeastOneParticipantAnswered":
                this.$10(
                  o("ZenonClientPerfQPLConstants").POINT_CONNECTION_ANSWER_RECV,
                );
                break;
              case "answerSdpReceived":
                this.$10(
                  o("ZenonClientPerfQPLConstants")
                    .POINT_CONNECTION_ANSWER_SDP_RECV,
                );
                break;
              case "prAnswerSdpReceived":
                this.$10(
                  o("ZenonClientPerfQPLConstants")
                    .POINT_CONNECTION_PRANSWER_SDP_RECV,
                );
                break;
              case "offerSdpReceived":
                this.$10(
                  o("ZenonClientPerfQPLConstants")
                    .POINT_CONNECTION_OFFER_SDP_RECV,
                );
                break;
              case "answerSent":
                this.$10(
                  o("ZenonClientPerfQPLConstants").POINT_CONNECTION_ANSWER_SENT,
                );
                break;
              case "peerConnectionManagerCreated":
                this.$10(
                  o("ZenonClientPerfQPLConstants")
                    .POINT_MEDIA_PEER_CONNECTION_FACTORY_CREATED,
                );
                break;
              case "negotiationComplete":
                this.$10(
                  o("ZenonClientPerfQPLConstants")
                    .POINT_CONNECTION_NEGOTIATION_COMPLETE,
                );
                break;
              case "mediaConnected":
                this.$10(
                  o("ZenonClientPerfQPLConstants")
                    .POINT_CONNECTION_NETWORK_READY,
                );
                break;
              case "connectionReady":
                this.$10(
                  o("ZenonClientPerfQPLConstants").POINT_CONNECTION_READY,
                );
                break;
              case "firstMediaPacketSent":
                a.type === "audio"
                  ? this.$10(
                      o("ZenonClientPerfQPLConstants")
                        .POINT_MEDIA_FIRST_AUDIO_PACKET_SENT,
                    )
                  : this.$10(
                      o("ZenonClientPerfQPLConstants")
                        .POINT_MEDIA_FIRST_VIDEO_PACKET_SENT,
                    );
                break;
              case "firstMediaPacketReceived":
                a.type === "audio"
                  ? this.$10(
                      o("ZenonClientPerfQPLConstants")
                        .POINT_MEDIA_FIRST_AUDIO_PACKET,
                    )
                  : this.$10(
                      o("ZenonClientPerfQPLConstants")
                        .POINT_MEDIA_FIRST_VIDEO_PACKET,
                    );
                break;
              case "sfuE2eeNegotiationComplete":
                this.$10(
                  o("ZenonClientPerfQPLConstants")
                    .POINT_ZENON_SFU_E2EE_NEGOTIATION_COMPLETE,
                );
                break;
              case "dismissSent":
                this.$10(
                  o("ZenonClientPerfQPLConstants")
                    .POINT_CONNECTION_DISMISS_SENT,
                );
                break;
              case "dismissRecv":
                this.$10(
                  o("ZenonClientPerfQPLConstants")
                    .POINT_CONNECTION_DISMISS_RECV,
                );
                break;
              case "callEnded":
                ((u || (u = r("QuickPerformanceLogger"))).markerAnnotate(
                  this.$7,
                  {
                    string: {
                      endCallReason: o(
                        "ZenonDismissReason",
                      ).ZenonDismissReason.getName(a.endCallReason),
                      endCallSubreason: a.endCallSubreason,
                    },
                  },
                  { instanceKey: +this.$1 },
                ),
                  (u || (u = r("QuickPerformanceLogger"))).markerEnd(
                    this.$7,
                    2,
                    +this.$1,
                    this.$11(),
                  ));
                break;
            }
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.$9 = function () {
            var e = (u || (u = r("QuickPerformanceLogger"))).getMarker(
                r("qpl")._(41156610, "2039"),
                +this.$1,
              ),
              t =
                e == null
                  ? void 0
                  : e.points.find(function (e) {
                      return (
                        e.name ===
                        o("ZenonClientPerfQPLConstants")
                          .POINT_ZENON_POPUP_OPENED
                      );
                    });
            if (!e || !t) {
              ((this.$7 = r("qpl")._(41156609, "943")), (this.$8 = null));
              var n = this.$3.getCallInfo(),
                a = n.deviceID,
                i = n.localCallID,
                l = n.serverInfoData;
              (this.$4
                ? (
                    u || (u = r("QuickPerformanceLogger"))
                  ).markerStartFromNavStart(this.$7, +this.$1)
                : (u || (u = r("QuickPerformanceLogger"))).markerStart(
                    this.$7,
                    +this.$1,
                  ),
                (u || (u = r("QuickPerformanceLogger"))).markerAnnotate(
                  this.$7,
                  {
                    bool: { isE2eeMandated: this.$2 },
                    int: { signaling_id: +this.$1 },
                    string: {
                      device_id: a,
                      local_call_id: i,
                      shared_call_id: l,
                    },
                  },
                  { instanceKey: +this.$1 },
                ));
            } else
              ((this.$7 = r("qpl")._(41156610, "2039")),
                (this.$8 = t.timeSinceStart + e.timestamp));
            (u.markerAnnotate(
              this.$7,
              {
                int: {
                  invite_requested_video: this.$6 ? 1 : 0,
                  start_with_video: this.$6 ? 1 : 0,
                },
                string: {
                  outgoing_transport_channel: this.$5.getTransportName(),
                },
              },
              { instanceKey: +this.$1 },
            ),
              this.$10(
                o("ZenonClientPerfQPLConstants").POINT_ZENON_CALL_JOIN_REQUEST,
              ));
          }),
          (a.$10 = function (t) {
            (u || (u = r("QuickPerformanceLogger"))).markerPoint(this.$7, t, {
              instanceKey: +this.$1,
              timestamp: this.$11(),
            });
          }),
          (a.$11 = function () {
            return this.$8 == null
              ? (u || (u = r("QuickPerformanceLogger"))).currentTimestamp()
              : this.$8 + (s || (s = r("performanceNow")))();
          }),
          t
        );
      })(),
      d = { LogProcessor: c };
    ((l.ZenonChildClientPerfQPLLogProcessor = c),
      (l.ZenonChildClientPerfQPLLogProcessorConfig = d));
  },
  98,
);
