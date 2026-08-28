__d(
  "ZenonChildSWConnectFunnelLogProcessor",
  [
    "Promise",
    "QuickPerformanceLogger",
    "RtcPlatformClientPerfQuickLogModule",
    "ZenonDismissReason",
    "ZenonSWConnectFunnelLogger",
    "performanceNow",
    "qex",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (function () {
        function t(e) {
          var t = this,
            n = e.data;
          ((this.$3 = n.signalingID),
            r("qex")._("4380") &&
              (this.$1 = new (o(
                "ZenonSWConnectFunnelLogger",
              ).ZenonSWChildFunnelLogger)(n.signalingID, function () {
                return t.$4();
              })));
        }
        var a = t.prototype;
        return (
          (a.processEvent = function (t) {
            var e,
              r = this.$1;
            if (r == null) return (u || (u = n("Promise"))).resolve();
            switch (t.name) {
              case "callJoinRequest":
                (this.$5(), r.addPoint("sw_child_setup_started"));
                break;
              case "sharedWorkerSetupComplete":
                r.addPoint("sw_child_setup_complete");
                break;
              case "inviteSent":
                r.getIsCaller() && r.addPoint("sw_ring_sent");
                break;
              case "mwThriftMessageSent":
                t.mwThriftMessage.messageBody.joinRequest &&
                  r.addPoint("sw_join_request_sent");
                break;
              case "mwThriftMessageRecv":
                t.mwThriftMessage.messageBody.joinResponse &&
                  r.addPoint("sw_join_response_received");
                break;
              case "atLeastOneParticipantAlerted":
                r.getIsCaller() && r.addPoint("sw_ring_response_received");
                break;
              case "offerSdpReceived":
                r.getIsCaller() || r.addPoint("sw_sdp_offer_received");
                break;
              case "answerSent":
                r.getIsCaller() || r.addPoint("sw_sdp_answer_sent");
                break;
              case "setRemoteSdpAnswer":
                r.getIsCaller() && r.addPoint("sw_sdp_answer_received");
                break;
              case "mediaConnected":
                r.addPoint("sw_ice_connected");
                break;
              case "callConnected":
                r.addPoint("sw_media_connected");
                break;
              case "firstMediaPacketReceived":
                r.endSuccess("sw_first_media_packet");
                break;
              case "callEnded":
                r.endCancel(
                  o("ZenonDismissReason").ZenonDismissReason.getName(
                    t.endCallReason,
                  ),
                  (e = t.endCallSubreason) != null ? e : "",
                );
                break;
            }
            return (u || (u = n("Promise"))).resolve();
          }),
          (a.$5 = function () {
            var t = this.$1;
            if (t != null && (t.detectFlow(), !t.getIsCaller())) {
              var o = n("RtcPlatformClientPerfQuickLogModule"),
                a = n("qpl"),
                i = (e || (e = r("QuickPerformanceLogger"))).getMarker(
                  a._(41156610, "2039"),
                  +this.$3,
                ),
                l =
                  i == null
                    ? void 0
                    : i.points.find(function (e) {
                        return e.name === "zenon_popup_opened";
                      });
              i && l && (this.$2 = l.timeSinceStart + i.timestamp);
            }
          }),
          (a.$4 = function () {
            return this.$2 == null
              ? (e || (e = r("QuickPerformanceLogger"))).currentTimestamp()
              : this.$2 + (s || (s = r("performanceNow")))();
          }),
          t
        );
      })(),
      d = { LogProcessor: c };
    ((l.ZenonChildSWConnectFunnelLogProcessor = c),
      (l.ZenonChildSWConnectFunnelLogProcessorConfig = d));
  },
  98,
);
