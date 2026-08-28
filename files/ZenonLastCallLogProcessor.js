__d(
  "ZenonLastCallLogProcessor",
  [
    "ZenonLastCallManager",
    "ZenonLastCallStore",
    "ZenonPeerID",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4,
      s = (function () {
        function t(e) {
          var t = e.data,
            n = e.updateLogIdentifiers;
          ((this.$2 = !1),
            (this.$3 = 0),
            (this.$1 = new (r("ZenonLastCallManager"))(
              babelHelpers.extends({}, t, {
                peerID: o("ZenonPeerID").ZenonMWPeerID,
              }),
            )),
            n({ localCallID: this.$1.getCallInfo().localCallID }));
        }
        var a = t.prototype;
        return (
          (a.processEvent = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                if (!this.$2) {
                  switch (t.name) {
                    case "updateLogIdentifiers":
                      (t.logIdentifiers.localCallID != null &&
                        this.$1.setLocalCallID(t.logIdentifiers.localCallID),
                        t.logIdentifiers.sharedCallID != null &&
                          this.$1.setSharedCallId(
                            t.logIdentifiers.sharedCallID,
                          ),
                        t.logIdentifiers.clientSessionID != null &&
                          this.$1.setSignalingID(
                            t.logIdentifiers.clientSessionID,
                          ));
                      break;
                    case "setRemoteSignalingID":
                      (this.$1.setSharedCallId(t.remoteSignalingID),
                        this.$1.setConferenceName(t.conferenceName));
                      break;
                    case "callEnded":
                      this.$2 = !0;
                      break;
                  }
                  Date.now() - this.$3 >= e &&
                    (this.$1.save(
                      o("ZenonLastCallStore").ZenonLastCallStoreInstance,
                    ),
                    (this.$3 = Date.now()));
                }
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          t
        );
      })(),
      u = { LogProcessor: s };
    ((l.MIN_UPDATE_INTERVAL = e),
      (l.ZenonLastCallLogProcessor = s),
      (l.ZenonLastCallLogProcessorConfig = u));
  },
  98,
);
