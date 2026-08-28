__d(
  "ZenonLSPeerConnectionSummaryLogProcessor",
  [
    "LsRtcPeerConnectionSummaryFalcoEvent",
    "ZenonInfraActionsLogger",
    "ZenonLSPeerConnectionSummary",
    "ZenonLSPeerConnectionSummaryStore",
    "ZenonPeerID",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e) {
          var t = e.data,
            n = e.updateLogIdentifiers;
          ((this.$2 = !1),
            (t.peerID = o("ZenonPeerID").ZenonMWPeerID),
            (this.$3 = t.signalingID),
            (this.$4 = t.peerID));
          var a = o(
            "ZenonLSPeerConnectionSummaryStore",
          ).ZenonLSPeerConnectionSummaryStoreInstance.retrievePeerConnectionSummary(
            t.peerID,
            t.signalingID,
          );
          (a
            ? (this.$1 = a)
            : (this.$1 = new (r("ZenonLSPeerConnectionSummary"))(t)),
            n({ localCallID: this.$1.getCallInfo().localCallID }));
        }
        var t = e.prototype;
        return (
          (t.processEvent = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (!this.$2)
                  switch (e.name) {
                    case "setMediaPath":
                      (this.$1.setMediaPath(e.mediaPath),
                        this.$1.save(
                          o("ZenonLSPeerConnectionSummaryStore")
                            .ZenonLSPeerConnectionSummaryStoreInstance,
                        ));
                      break;
                    case "setMediaStats":
                      (this.$1.setMediaStats(e.mediaStats),
                        this.$1.save(
                          o("ZenonLSPeerConnectionSummaryStore")
                            .ZenonLSPeerConnectionSummaryStoreInstance,
                        ));
                      break;
                    case "setRemoteSignalingID":
                      (this.$1.setSharedCallId(e.remoteSignalingID),
                        this.$1.save(
                          o("ZenonLSPeerConnectionSummaryStore")
                            .ZenonLSPeerConnectionSummaryStoreInstance,
                        ));
                      break;
                    case "peerConnectionStateChanged":
                      (this.$1.onPCStateChange(e.connected),
                        this.$1.save(
                          o("ZenonLSPeerConnectionSummaryStore")
                            .ZenonLSPeerConnectionSummaryStoreInstance,
                        ));
                      break;
                    case "answerSdpReceived":
                    case "offerSdpReceived":
                      (this.$1.onRemoteConsentReceived(),
                        this.$1.save(
                          o("ZenonLSPeerConnectionSummaryStore")
                            .ZenonLSPeerConnectionSummaryStoreInstance,
                        ));
                      break;
                    case "updateIceInfo":
                      (this.$1.updateIceInfo(e.sdpString, e.direction),
                        this.$1.save(
                          o("ZenonLSPeerConnectionSummaryStore")
                            .ZenonLSPeerConnectionSummaryStoreInstance,
                        ));
                      break;
                    case "callEnded":
                      ((this.$2 = !0),
                        this.$1.onCallEnded(),
                        this.$1.save(
                          o("ZenonLSPeerConnectionSummaryStore")
                            .ZenonLSPeerConnectionSummaryStoreInstance,
                        ),
                        r(
                          "ZenonInfraActionsLogger",
                        ).logCheckpointEmployeesTestUsersOnly({
                          checkpoint: "Uploading NSL PCS summary",
                        }),
                        r("LsRtcPeerConnectionSummaryFalcoEvent").logCritical(
                          function () {
                            return t.$1.getPeerConnectionSummary();
                          },
                        ),
                        this.$1.delete(
                          o("ZenonLSPeerConnectionSummaryStore")
                            .ZenonLSPeerConnectionSummaryStoreInstance,
                        ));
                      break;
                  }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })(),
      s = { LogProcessor: e };
    ((l.ZenonLSPeerConnectionSummaryLogProcessor = e),
      (l.ZenonLSPeerConnectionSummaryLogProcessorConfig = s));
  },
  98,
);
