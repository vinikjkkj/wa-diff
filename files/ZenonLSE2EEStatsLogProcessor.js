__d(
  "ZenonLSE2EEStatsLogProcessor",
  [
    "DateConsts",
    "LsRtcGroupE2eeFalcoEvent",
    "LsRtcP2pE2eeFalcoEvent",
    "ZenonInfraActionsLogger",
    "ZenonLSE2EEStatsManager",
    "ZenonLSE2EEStore",
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
            (t.peerID = o("ZenonPeerID").ZenonMWPeerID),
            (this.$4 = t.peerID));
          var a = o(
            "ZenonLSE2EEStore",
          ).ZenonLSE2EEStoreInstance.retrieveE2eeStats(t.peerID, t.signalingID);
          (a
            ? (this.$1 = a)
            : (this.$1 = new (r("ZenonLSE2EEStatsManager"))(t)),
            n({ localCallID: this.$1.getCallInfo().localCallID }));
        }
        var a = t.prototype;
        return (
          (a.processEvent = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this;
                if (!this.$3)
                  switch (t.name) {
                    case "updateE2EEStats":
                      (this.$1.updateE2eeStats(t.e2eeStats),
                        this.$1.save(
                          o("ZenonLSE2EEStore").ZenonLSE2EEStoreInstance,
                        ));
                      break;
                    case "setRemoteSignalingID":
                      (this.$1.setSharedCallId(t.remoteSignalingID),
                        this.$1.save(
                          o("ZenonLSE2EEStore").ZenonLSE2EEStoreInstance,
                        ));
                      break;
                    case "startHeartbeat":
                      this.$2 === null &&
                        (this.$2 = window.setInterval(function () {
                          n.$1.save(
                            o("ZenonLSE2EEStore").ZenonLSE2EEStoreInstance,
                          );
                        }, e));
                      break;
                    case "callEnded":
                      ((this.$3 = !0),
                        this.$2 !== null && window.clearInterval(this.$2),
                        r(
                          "ZenonInfraActionsLogger",
                        ).logCheckpointEmployeesTestUsersOnly({
                          checkpoint: "Uploading NSL E2EE summary",
                        }),
                        r("LsRtcGroupE2eeFalcoEvent").logCritical(function () {
                          return n.$1.getGroupE2eeMetricsInFalcoShape();
                        }),
                        r("LsRtcP2pE2eeFalcoEvent").logCritical(function () {
                          return n.$1.getP2pE2eeMetricsInFalcoShape();
                        }),
                        this.$1.delete(
                          o("ZenonLSE2EEStore").ZenonLSE2EEStoreInstance,
                        ));
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
    ((l.ZenonLSE2EEStatsLogProcessor = s),
      (l.ZenonLSE2EEStatsLogProcessorConfig = u));
  },
  98,
);
