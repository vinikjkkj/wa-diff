__d(
  "ZenonLSCallStartEventLogProcessor",
  [
    "DateConsts",
    "ZenonInfraActionsLogger",
    "ZenonLSCallStartEventManager",
    "ZenonLSCallStartEventStore",
    "ZenonPeerID",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10 * o("DateConsts").MS_PER_SEC,
      s = (function () {
        function t(e) {
          var t = e.data,
            n = e.updateLogIdentifiers;
          ((this.$2 = null),
            (this.$3 = !1),
            (this.$4 = !1),
            (t.peerID = o("ZenonPeerID").ZenonMWPeerID),
            (this.$6 = n),
            (this.$5 = t.peerID));
          var a = o(
            "ZenonLSCallStartEventStore",
          ).ZenonLSCallStartEventStoreInstance.retrieveCallStartEventManager(
            t.peerID,
            t.signalingID,
          );
          (a
            ? (this.$1 = a)
            : (this.$1 = new (r("ZenonLSCallStartEventManager"))(t)),
            n({ localCallID: this.$1.getCallInfo().localCallID }));
        }
        var a = t.prototype;
        return (
          (a.log = function () {
            this.$4 ||
              ((this.$4 = !0),
              this.$1.delete(
                o("ZenonLSCallStartEventStore")
                  .ZenonLSCallStartEventStoreInstance,
              ));
          }),
          (a.processEvent = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this;
                if (!this.$3)
                  switch (t.name) {
                    case "atLeastOneParticipantAnswered":
                      (this.$1.updateEventTimestamp("answer_recv_ms"),
                        this.$1.save(
                          o("ZenonLSCallStartEventStore")
                            .ZenonLSCallStartEventStoreInstance,
                        ));
                      break;
                    case "connectionReady":
                      (this.$1.updateEventTimestamp("connection_ready_ms"),
                        this.$1.save(
                          o("ZenonLSCallStartEventStore")
                            .ZenonLSCallStartEventStoreInstance,
                        ));
                      break;
                    case "connectionStart":
                      (t.isIncomingConnection
                        ? this.$1.updateEventTimestamp(
                            "incoming_connection_start_ms",
                          )
                        : this.$1.updateEventTimestamp(
                            "outgoing_connection_start_ms",
                          ),
                        this.$1.save(
                          o("ZenonLSCallStartEventStore")
                            .ZenonLSCallStartEventStoreInstance,
                        ));
                      break;
                    case "answerSent":
                      (this.$1.updateEventTimestamp("answer_sent_ms"),
                        this.$1.save(
                          o("ZenonLSCallStartEventStore")
                            .ZenonLSCallStartEventStoreInstance,
                        ));
                      break;
                    case "callEnded":
                      ((this.$3 = !0),
                        this.$2 !== null && window.clearInterval(this.$2),
                        r(
                          "ZenonInfraActionsLogger",
                        ).logCheckpointEmployeesTestUsersOnly({
                          checkpoint: "Uploading NSL call start summary",
                        }),
                        this.log());
                      break;
                    case "inviteSent":
                      (this.$1.updateEventTimestamp("invite_sent_ms"),
                        this.$1.save(
                          o("ZenonLSCallStartEventStore")
                            .ZenonLSCallStartEventStoreInstance,
                        ));
                      break;
                    case "mediaConnected":
                      (this.$1.updateEventTimestamp("network_ready_ms"),
                        this.$1.save(
                          o("ZenonLSCallStartEventStore")
                            .ZenonLSCallStartEventStoreInstance,
                        ));
                      break;
                    case "setRemoteSignalingID":
                      (this.$6({ sharedCallID: t.remoteSignalingID }),
                        this.$1.setSharedCallId(t.remoteSignalingID),
                        this.$1.save(
                          o("ZenonLSCallStartEventStore")
                            .ZenonLSCallStartEventStoreInstance,
                        ));
                      break;
                    case "answerSdpReceived":
                      (this.$1.receivedFromServer(),
                        this.$1.save(
                          o("ZenonLSCallStartEventStore")
                            .ZenonLSCallStartEventStoreInstance,
                        ));
                      break;
                    case "prAnswerSdpReceived":
                      (this.$1.receivedFromServer(),
                        this.$1.save(
                          o("ZenonLSCallStartEventStore")
                            .ZenonLSCallStartEventStoreInstance,
                        ));
                      break;
                    case "offerSdpReceived":
                      (this.$1.receivedFromInvite(),
                        this.$1.save(
                          o("ZenonLSCallStartEventStore")
                            .ZenonLSCallStartEventStoreInstance,
                        ));
                      break;
                    case "startHeartbeat":
                      this.$2 === null &&
                        (this.$2 = window.setInterval(function () {
                          n.$1.save(
                            o("ZenonLSCallStartEventStore")
                              .ZenonLSCallStartEventStoreInstance,
                          );
                        }, e));
                      break;
                  }
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          t
        );
      })(),
      u = { LogProcessor: s };
    ((l.ZenonLSCallStartEventLogProcessor = s),
      (l.ZenonLSCallStartEventLogProcessorConfig = u));
  },
  98,
);
