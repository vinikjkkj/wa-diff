__d(
  "ZenonProductConnectFunnelLogProcessor",
  [
    "RtcProductConnectFunnelFalcoEvent",
    "ZenonInfraActionsLogger",
    "ZenonPeerID",
    "ZenonProductConnectFunnelManager",
    "ZenonProductConnectFunnelStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e) {
          var t = e.data,
            n = e.updateLogIdentifiers;
          ((this.$1 = !1),
            (this.$2 = !1),
            (t.peerID = o("ZenonPeerID").ZenonMWPeerID),
            (this.$4 = n));
          var a = o(
            "ZenonProductConnectFunnelStore",
          ).ZenonProductConnectFunnelStoreInstance.retrieveFunnel(
            t.peerID,
            t.signalingID,
          );
          (a
            ? (this.$3 = a)
            : (this.$3 = new (r("ZenonProductConnectFunnelManager"))(t)),
            n({ localCallID: this.$3.getCallInfo().localCallID }));
        }
        var t = e.prototype;
        return (
          (t.log = function () {
            var e = this;
            this.$2 ||
              ((this.$2 = !0),
              r("RtcProductConnectFunnelFalcoEvent").logCritical(function () {
                return e.$3.getFunnelMetricsInFalcoShape();
              }),
              this.$3.delete(
                o("ZenonProductConnectFunnelStore")
                  .ZenonProductConnectFunnelStoreInstance,
              ));
          }),
          (t.processEvent = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (!this.$1)
                  switch ((this.$3.setFirstAction(), e.name)) {
                    case "callConnected":
                      (this.$3.setConnected(),
                        this.$3.save(
                          o("ZenonProductConnectFunnelStore")
                            .ZenonProductConnectFunnelStoreInstance,
                        ));
                      break;
                    case "callEnded":
                      ((this.$1 = !0),
                        this.$3.setEnded(),
                        this.log(),
                        r(
                          "ZenonInfraActionsLogger",
                        ).logCheckpointEmployeesTestUsersOnly({
                          checkpoint:
                            "Uploading product connect funnel summary",
                        }));
                      break;
                    case "atLeastOneParticipantAlerted":
                      this.$3.setPeerRinging();
                      break;
                    case "callJoinRequest":
                      this.$3.setSelfConnecting();
                      break;
                    case "setMediaPath":
                      this.$3.setSelfConnected();
                      break;
                    case "smuWithAnswerReceived":
                    case "setRemoteSdpAnswer":
                      this.$3.setPeerConnecting();
                      break;
                    case "peerConnectionStateChanged":
                      this.$3.setPeerConnected();
                      break;
                    case "setRemoteSignalingID":
                      (this.$3.setSharedCallId(e.remoteSignalingID),
                        this.$3.save(
                          o("ZenonProductConnectFunnelStore")
                            .ZenonProductConnectFunnelStoreInstance,
                        ));
                      break;
                    case "updateLogIdentifiers":
                      this.$3.save(
                        o("ZenonProductConnectFunnelStore")
                          .ZenonProductConnectFunnelStoreInstance,
                      );
                      break;
                    case "firstMediaPacketReceived":
                      this.$3.setFirstMediaPacketReceived(e.timestamp);
                      break;
                    case "firstMediaPacketSent":
                      this.$3.setFirstMediaPacketSent(e.timestamp);
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
    l.ZenonProductConnectFunnelLogProcessorConfig = s;
  },
  98,
);
