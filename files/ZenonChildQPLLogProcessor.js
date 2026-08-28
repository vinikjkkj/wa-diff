__d(
  "ZenonChildQPLLogProcessor",
  [
    "Promise",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "ZenonDismissReason",
    "ZenonE2eeMandatedStateManager",
    "ZenonInfraActionsLogger",
    "justknobx",
    "performanceNavigationStart",
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
            n = e.isE2eeMandated;
          ((this.$8 = !1),
            (this.$9 = !1),
            (this.$10 = !1),
            (this.$11 = !1),
            (this.$12 = !1),
            (this.$13 = !1),
            (this.$14 = !1),
            (this.$1 = t.localCallID),
            (this.$2 = t.serverInfoData),
            (this.$3 = t.signalingID),
            (this.$4 = n),
            (this.$5 = t.appID),
            (this.$6 = t.isVideo));
        }
        var a = t.prototype;
        return (
          (a.processEvent = function (a) {
            switch (a.name) {
              case "updateLogIdentifiers":
                a.logIdentifiers.localCallID != null &&
                  ((this.$1 = a.logIdentifiers.localCallID),
                  (u || (u = r("QuickPerformanceLogger"))).markerAnnotate(
                    r("qpl")._(398997251, "1544"),
                    {
                      string: {
                        appID: this.$5,
                        localCallID: a.logIdentifiers.localCallID,
                      },
                    },
                    { instanceKey: +this.$3 },
                  ));
                break;
              case "callJoinRequest": {
                ((this.$8 = a.hasOfferInRingRequest),
                  r("QPLUserFlow").start(r("qpl")._(64232269, "6493"), {
                    annotations: {
                      bool: {
                        isCaller: a.isCaller,
                        isE2eeMandated: this.$4,
                        isVideo: this.$6,
                      },
                    },
                  }));
                var t = (u || (u = r("QuickPerformanceLogger"))).getMarker(
                  r("qpl")._(398997251, "1544"),
                  +this.$3,
                );
                if (!t)
                  (r("QPLUserFlow").start(r("qpl")._(398997251, "1544"), {
                    annotations: {
                      bool: {
                        isE2eeInfraMandated: r(
                          "ZenonE2eeMandatedStateManager",
                        ).isInfraE2eeMandated(),
                        isE2eeMandated: this.$4,
                        isVideo: this.$6,
                      },
                      string: {
                        appID: this.$5,
                        cameraPermission: a.cameraPermission,
                        localCallID: this.$1,
                        microphonePermission: a.microphonePermission,
                        serverInfoData: this.$2,
                      },
                    },
                    instanceKey: +this.$3,
                  }),
                    (this.$7 = null));
                else {
                  (u || (u = r("QuickPerformanceLogger"))).markerAnnotate(
                    r("qpl")._(398997251, "1544"),
                    {
                      string: {
                        cameraPermission: a.cameraPermission,
                        microphonePermission: a.microphonePermission,
                      },
                    },
                    { instanceKey: +this.$3 },
                  );
                  var i = t.points.find(function (e) {
                    return e.name === "popup_opened";
                  });
                  if (i) {
                    var l = r("performanceNavigationStart")();
                    ((this.$7 = i.timeSinceStart + t.timestamp),
                      r("ZenonInfraActionsLogger").logCheckpoint({
                        checkpoint:
                          "popup_opened to child window navStart: " +
                          (l - this.$7),
                      }));
                  }
                }
                (r("QPLUserFlow").addAnnotations(
                  r("qpl")._(398997251, "1544"),
                  {
                    bool: { dgwMessageQueueEnabled: r("justknobx")._("4481") },
                  },
                  { instanceKey: +this.$3 },
                ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "call_join_request",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ),
                  r("QPLUserFlow").addAnnotations(
                    r("qpl")._(398997251, "1544"),
                    { bool: { isCaller: a.isCaller } },
                    { instanceKey: +this.$3 },
                  ),
                  this.$16());
                break;
              }
              case "inviteSent":
                ((this.$9 = !0),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(64232269, "6493"),
                    "invite_sent",
                  ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "invite_sent",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ),
                  this.$16());
                break;
              case "setRemoteSignalingID":
                (r("QPLUserFlow").addPoint(
                  r("qpl")._(64232269, "6493"),
                  "set_remote_signaling_id",
                ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "set_remote_signaling_id",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ),
                  r("QPLUserFlow").addAnnotations(
                    r("qpl")._(398997251, "1544"),
                    { string: { serverInfoData: a.remoteSignalingID } },
                    { instanceKey: +this.$3 },
                  ));
                break;
              case "inviteResponseReceived":
                (r("QPLUserFlow").addPoint(
                  r("qpl")._(64232269, "6493"),
                  "invite_response_received",
                ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "invite_response_received",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ));
                break;
              case "inviteResponseProcessed":
                (r("QPLUserFlow").addPoint(
                  r("qpl")._(64232269, "6493"),
                  "invite_response_processed",
                ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "invite_response_processed",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ));
                break;
              case "setHasAnswerInJoinResponse":
                ((this.$10 = a.hasAnswerInJoinResponse), this.$16());
                break;
              case "atLeastOneParticipantAnswered":
                r("QPLUserFlow").addPoint(
                  r("qpl")._(398997251, "1544"),
                  "at_least_one_participant_answered",
                  { instanceKey: +this.$3, timestamp: this.$15() },
                );
                break;
              case "setRemoteSdpAnswer":
                (r("QPLUserFlow").addPoint(
                  r("qpl")._(64232269, "6493"),
                  "set_remote_sdp_answer",
                ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "set_remote_sdp_answer",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ));
                break;
              case "mediaConnected":
                (r("QPLUserFlow").addPoint(
                  r("qpl")._(64232269, "6493"),
                  "media_connected",
                ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "media_connected",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ));
                break;
              case "callConnected":
                (r("QPLUserFlow").addPoint(
                  r("qpl")._(64232269, "6493"),
                  "call_connected",
                ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "call_connected",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ));
                break;
              case "setRemoteSdpOffer":
                (r("QPLUserFlow").addPoint(
                  r("qpl")._(64232269, "6493"),
                  "set_remote_sdp_offer",
                ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "set_remote_sdp_offer",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ));
                break;
              case "firstMediaPacketReceived":
                this.$14 ||
                  (r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "first_" + a.type + "_packet",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ),
                  (this.$14 = !0),
                  r("QPLUserFlow").endSuccess(r("qpl")._(398997251, "1544"), {
                    instanceKey: +this.$3,
                    timestamp: this.$15(),
                  }));
                break;
              case "sfuE2eeNegotiationComplete":
                (r("QPLUserFlow").addPoint(
                  r("qpl")._(64232269, "6493"),
                  "sfu_e2ee_negotiation_complete",
                ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "sfu_e2ee_negotiation_complete",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ));
                break;
              case "e2eeComponentCreated":
                (r("QPLUserFlow").addPoint(
                  r("qpl")._(64232269, "6493"),
                  "e2ee_component_created",
                ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "e2ee_component_created",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ),
                  r("QPLUserFlow").addAnnotations(
                    r("qpl")._(398997251, "1544"),
                    { bool: { isE2eeStackReady: a.isE2eeStackReady } },
                    { instanceKey: +this.$3 },
                  ));
                break;
              case "callEscalated":
                ((this.$11 = !0),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(64232269, "6493"),
                    "renegotion_cmu_request_sent",
                  ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "renegotion_cmu_request_sent",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ),
                  this.$16());
                break;
              case "renegotiationSmuReqWithAnswerReceived":
                ((this.$12 = !0),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(64232269, "6493"),
                    "renegotation_smu_request_with_answer_received",
                  ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "renegotation_smu_request_with_answer_received",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ),
                  this.$16());
                break;
              case "renegotiationSmuReqWithOfferReceived":
                ((this.$13 = !0),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(64232269, "6493"),
                    "renegotation_smu_request_with_offer_received",
                  ),
                  r("QPLUserFlow").addPoint(
                    r("qpl")._(398997251, "1544"),
                    "renegotation_smu_request_with_offer_received",
                    { instanceKey: +this.$3, timestamp: this.$15() },
                  ),
                  this.$16());
                break;
              case "callEnded":
                (r("QPLUserFlow").endSuccess(r("qpl")._(64232269, "6493")),
                  r("QPLUserFlow").endCancel(r("qpl")._(398997251, "1544"), {
                    annotations: {
                      string: {
                        endCallReason: o(
                          "ZenonDismissReason",
                        ).ZenonDismissReason.getName(a.endCallReason),
                        endCallSubreason: a.endCallSubreason,
                      },
                    },
                    instanceKey: +this.$3,
                    timestamp: this.$15(),
                  }));
                break;
            }
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.$16 = function () {
            var e = "sfu";
            (this.$12 || this.$13
              ? (e = "deescalated_from_sfu_to_p2p")
              : this.$11
                ? (e = "escalated_from_p2p_to_sfu")
                : (!this.$10 || (this.$8 && !this.$9)) && (e = "p2p"),
              r("QPLUserFlow").addAnnotations(r("qpl")._(64232269, "6493"), {
                string: { mediaPath: e },
              }),
              r("QPLUserFlow").addAnnotations(
                r("qpl")._(398997251, "1544"),
                { string: { mediaPath: e } },
                { instanceKey: +this.$3 },
              ));
          }),
          (a.$15 = function () {
            return this.$7 != null
              ? this.$7 + (s || (s = r("performanceNow")))()
              : (u || (u = r("QuickPerformanceLogger"))).currentTimestamp();
          }),
          t
        );
      })(),
      d = { LogProcessor: c };
    ((l.ZenonChildQPLLogProcessor = c),
      (l.ZenonChildQPLLogProcessorConfig = d));
  },
  98,
);
