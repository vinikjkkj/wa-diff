__d(
  "ZenonReliabilityQPLLogProcessor",
  [
    "Promise",
    "QuickPerformanceLogger",
    "ZenonCallInfoManager",
    "ZenonDismissReason",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        function t(e) {
          var t = e.data;
          ((this.$2 = !1),
            (this.$3 = r("qpl")._(144192964, "2904")),
            (this.$1 = new (r("ZenonCallInfoManager"))(t)),
            (s || (s = r("QuickPerformanceLogger"))).markerStartFromNavStart(
              this.$3,
              this.$4(),
              { cancelOnUnload: !0, crashResilient: !0 },
            ),
            s.markerAnnotate(this.$3, this.$5(), { instanceKey: this.$4() }));
        }
        var a = t.prototype;
        return (
          (a.$5 = function (t) {
            t === void 0 && (t = !1);
            var e = this.$1.getCallInfo(),
              n = e.callTrigger,
              r = e.conferenceName,
              o = e.deviceID,
              a = e.isCaller,
              i = e.localCallID,
              l = e.serverInfoData,
              s = e.signalingID,
              u = {
                int: { is_outgoing: a ? 1 : 0 },
                string: {
                  call_trigger: n != null ? n : void 0,
                  conference_name: r != null ? r : void 0,
                  device_id: o != null ? o : void 0,
                  exit_type: t ? "web_crash" : void 0,
                  is_connected: this.$2 ? "1" : "0",
                  localCallId: i != null ? i : void 0,
                  shared_call_id: l != null ? l : void 0,
                  signaling_id: s != null ? s : void 0,
                  trigger_source: n != null ? n : void 0,
                },
              };
            return u;
          }),
          (a.$4 = function () {
            return +this.$1.getCallInfo().signalingID;
          }),
          (a.processEvent = function (o) {
            var t,
              a = (t = o.logIdentifiers) != null ? t : {},
              i = a.clientSessionID,
              l = a.localCallID,
              u = a.sharedCallID;
            switch (o.name) {
              case "updateLogIdentifiers":
                (l != null && this.$1.setLocalCallID(l),
                  i != null && this.$1.setSignalingID(i),
                  u != null && this.$1.setSharedCallId(u),
                  (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(
                    this.$3,
                    this.$5(),
                    { instanceKey: this.$4() },
                  ));
                break;
              case "callConnected":
                ((this.$2 = !0),
                  (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(
                    this.$3,
                    this.$5(),
                    { instanceKey: this.$4() },
                  ));
                break;
              case "callEnded":
                (this.$6(o) &&
                  (s || (s = r("QuickPerformanceLogger"))).markerAnnotate(
                    this.$3,
                    this.$5(!0),
                    { instanceKey: this.$4() },
                  ),
                  (s || (s = r("QuickPerformanceLogger"))).markerEnd(
                    this.$3,
                    this.$6(o) ? 722 : 2,
                    this.$4(),
                    (s || (s = r("QuickPerformanceLogger"))).currentTimestamp(),
                  ));
                break;
            }
            return (e || (e = n("Promise"))).resolve();
          }),
          (a.$6 = function (t) {
            return (
              t.endCallReason ===
                o("ZenonDismissReason").ZenonDismissReason.WebRTCError ||
              t.endCallReason ===
                o("ZenonDismissReason").ZenonDismissReason.ClientError
            );
          }),
          t
        );
      })(),
      c = { LogProcessor: u };
    l.ZenonReliabilityQPLLogProcessorConfig = c;
  },
  98,
);
