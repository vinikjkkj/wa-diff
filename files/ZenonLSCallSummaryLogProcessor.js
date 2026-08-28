__d(
  "ZenonLSCallSummaryLogProcessor",
  [
    "DateConsts",
    "LsRtcCallSummaryFalcoEvent",
    "LsRtcTslogFalcoEvent",
    "ODS",
    "PersistedQueue",
    "ResumableUploadService",
    "URI",
    "ZenonAuditedCheckpointLogId",
    "ZenonDeviceId",
    "ZenonDismissReason",
    "ZenonInfraActionsLogger",
    "ZenonLSCallSummary",
    "ZenonLSCallSummaryStore",
    "ZenonLoggingEventTypes",
    "ZenonPeerID",
    "asyncToGeneratorRuntime",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 10 * o("DateConsts").MS_PER_SEC,
      c = "tslog_upload_backend",
      d = 500 * 1024 * 0.6,
      m = (function () {
        function t(e) {
          var t,
            n = e.data,
            a = e.updateLogIdentifiers;
          ((this.$2 = null),
            (this.$3 = !1),
            (this.$6 = !1),
            (n.peerID = o("ZenonPeerID").ZenonMWPeerID),
            (this.$5 = n.peerID),
            (this.$4 = (t = n.disableTsData) != null ? t : !1));
          var i = o(
            "ZenonLSCallSummaryStore",
          ).ZenonLSCallSummaryStoreInstance.retrieveCallSummary(
            n.peerID,
            n.signalingID,
          );
          (i
            ? ((this.$1 = i),
              this.$1.unsetEndCallFields(),
              this.$1.setDeviceID(
                o("ZenonDeviceId").getZenonLocalStorageDeviceIdWithFallback(),
              ))
            : (this.$1 = new (r("ZenonLSCallSummary"))(n)),
            n.conferenceName != null &&
              this.$1.setConferenceName(n.conferenceName),
            this.$1.save(
              o("ZenonLSCallSummaryStore").ZenonLSCallSummaryStoreInstance,
            ),
            a({ localCallID: this.$1.getCallInfo().localCallID }));
        }
        var a = t.prototype;
        return (
          (a.$7 = function (t) {
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__PLATFORM,
              checkpoint: t,
            });
          }),
          (a.$8 = function (t) {
            var e,
              n = t.format,
              a = t.timeSeries;
            if (a == null || a.length === 0) {
              this.$7("Not sending empty TSLog data");
              return;
            }
            this.$7("Sending TSLog data of length " + a.length);
            var i = (e = t.sequenceNumber) == null ? void 0 : e.toString(),
              l = babelHelpers.extends({}, this.$1.getLoggingArgs(), {
                format: n,
                is_terminal: t.isTerminal,
                sequence_number: i,
                source: o("ZenonLoggingEventTypes").tslogSource,
                time_series: a,
              });
            if (r("gkx")("25247") && a.length > d) {
              this.$7("Sending TSLog data through Upload Service");
              var u = new (s || (s = r("URI")))(window.location.href)
                  .getDomain()
                  .split(".")
                  .slice(-2)
                  .join("."),
                m = r("ResumableUploadService").create({
                  consumer: c,
                  serviceDomain: u,
                }),
                p = new File([JSON.stringify(l)], "tslog");
              r("promiseDone")(m.resume(p));
            } else
              (r("PersistedQueue").eventEmitter.emit("active", null),
                r("LsRtcTslogFalcoEvent").logImmediately(function () {
                  return l;
                }));
          }),
          (a.processEvent = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this;
                switch (t.name) {
                  case "logTSData":
                    if (this.$4) return;
                    (this.$7("Preparing TSLog data for sending"),
                      this.$8(t.serializedTSLog),
                      this.$7("Sent TSLog data"));
                    break;
                  case "mqttConnectionState": {
                    this.$6 = t.pending;
                    break;
                  }
                }
                if (!this.$3)
                  switch (t.name) {
                    case "callConnected":
                      (this.$1.onCallConnected(),
                        this.$1.save(
                          o("ZenonLSCallSummaryStore")
                            .ZenonLSCallSummaryStoreInstance,
                        ));
                      break;
                    case "answerSdpReceived":
                    case "offerSdpReceived":
                      (this.$1.onRemoteConsentReceived(),
                        this.$1.save(
                          o("ZenonLSCallSummaryStore")
                            .ZenonLSCallSummaryStoreInstance,
                        ));
                      break;
                    case "callEnded":
                      ((this.$3 = !0),
                        this.$2 !== null && window.clearInterval(this.$2),
                        t.endCallReason ===
                          o("ZenonDismissReason").ZenonDismissReason
                            .ClientError &&
                          (e || (e = o("ODS"))).bumpEntityKey(
                            4083,
                            "zenon_client_crashes",
                            "zenon_client_error_end_call_reason",
                          ),
                        yield this.$1.onCallEnded(
                          t.endCallReason,
                          t.isRemoteEnded,
                          !1,
                          t.endCallSubreason,
                        ),
                        this.$1.save(
                          o("ZenonLSCallSummaryStore")
                            .ZenonLSCallSummaryStoreInstance,
                        ),
                        r("ZenonInfraActionsLogger").logCheckpoint({
                          auditId: r("ZenonAuditedCheckpointLogId")
                            .RP_ROOMS_INFRA_WWW__PLATFORM,
                          checkpoint:
                            "[ZP] ZenonLoggingEvent_callEnded: " +
                            JSON.stringify({
                              dismissReason: t.endCallReason,
                              endCallReason: o(
                                "ZenonDismissReason",
                              ).dismissToEndCallReason(t.endCallReason),
                              endCallSubreason: t.endCallSubreason,
                              mqttPending: this.$6,
                            }),
                        }),
                        r(
                          "ZenonInfraActionsLogger",
                        ).logCheckpointEmployeesTestUsersOnly({
                          checkpoint: "Uploading NSL call summary",
                        }),
                        r("LsRtcCallSummaryFalcoEvent").logCritical(
                          function () {
                            return babelHelpers.extends(
                              {},
                              n.$1.getSummaryLoggingInfo(),
                            );
                          },
                        ),
                        this.$1.remove(
                          o("ZenonLSCallSummaryStore")
                            .ZenonLSCallSummaryStoreInstance,
                        ));
                      break;
                    case "callEscalated":
                      (this.$1.onCallEscalated(),
                        this.$1.save(
                          o("ZenonLSCallSummaryStore")
                            .ZenonLSCallSummaryStoreInstance,
                        ));
                      break;
                    case "callJoinRequest":
                      (this.$1.setRtcActorID(t.rtcActorID),
                        this.$1.save(
                          o("ZenonLSCallSummaryStore")
                            .ZenonLSCallSummaryStoreInstance,
                        ));
                      break;
                    case "peerConnectionStateChanged":
                      (this.$1.onPCStateChange(t.connected),
                        this.$1.save(
                          o("ZenonLSCallSummaryStore")
                            .ZenonLSCallSummaryStoreInstance,
                        ));
                      break;
                    case "setMaxConnectedParticipants":
                      (this.$1.setMaxConnectedParticipants(
                        t.connectedParticipantsCount,
                      ),
                        this.$1.save(
                          o("ZenonLSCallSummaryStore")
                            .ZenonLSCallSummaryStoreInstance,
                        ));
                      break;
                    case "setMediaStats":
                      (this.$1.setMediaStats(t.mediaStats),
                        this.$1.save(
                          o("ZenonLSCallSummaryStore")
                            .ZenonLSCallSummaryStoreInstance,
                        ));
                      break;
                    case "setRemoteSignalingID":
                      (this.$1.setSharedCallId(t.remoteSignalingID),
                        t.conferenceName !== null &&
                          t.conferenceName !== "" &&
                          this.$1.setConferenceName(t.conferenceName),
                        this.$1.save(
                          o("ZenonLSCallSummaryStore")
                            .ZenonLSCallSummaryStoreInstance,
                        ));
                      break;
                    case "startHeartbeat":
                      this.$2 === null &&
                        (this.$2 = window.setInterval(function () {
                          (n.$1.save(
                            o("ZenonLSCallSummaryStore")
                              .ZenonLSCallSummaryStoreInstance,
                          ),
                            n.$1.updateLastUpdatedTime());
                        }, u));
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
      p = { LogProcessor: m };
    ((l.ZenonLSCallSummaryLogProcessor = m),
      (l.ZenonLSCallSummaryLogProcessorConfig = p));
  },
  98,
);
