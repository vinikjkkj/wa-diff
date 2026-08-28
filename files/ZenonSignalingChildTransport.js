__d(
  "ZenonSignalingChildTransport",
  [
    "Promise",
    "QuickPerformanceLogger",
    "Random",
    "SecurePostMessage",
    "URI",
    "ZenonProductConnectFunnel",
    "ZenonSignalingTransportTypes",
    "gkx",
    "isEmpty",
    "isFacebookishURI",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = (function () {
        function t(e) {
          var t = this,
            n = e.onLocalCallIDUpdate,
            a = e.parentNonce,
            i = e.peerID,
            l = e.roomID,
            u = e.serverInfoData,
            c = e.timeoutMS;
          ((this.$6 = null),
            (this.$8 = null),
            (this.$12 = function (e) {
              var n = e.data,
                a = Math.trunc((s || (s = r("performanceNow")))()),
                i = n.acceptedTs,
                l = n.ringingTs,
                u = n.triggeredTs;
              if (n.nonce === t.$1)
                switch (n.type) {
                  case o("ZenonSignalingTransportTypes")
                    .ChildTransportMessageType.PARENT_INITIATED_CALL:
                    t.$6 && t.$6(n.mwThriftRingRequest);
                    return;
                  case o("ZenonSignalingTransportTypes")
                    .ChildTransportMessageType.PARENT_QPL_MARKER:
                    n.version === 2 &&
                      n.markers.forEach(function (e, t) {
                        (
                          d || (d = r("QuickPerformanceLogger"))
                        ).activeMarkers.set(t, e);
                      });
                    return;
                  case o("ZenonSignalingTransportTypes")
                    .ChildTransportMessageType.PARENT_LOG_IDENTIFIERS:
                    n.localCallID != null &&
                      ((t.$8 = n.localCallID), t.$9 && t.$9(n.localCallID));
                    return;
                  case o("ZenonSignalingTransportTypes")
                    .ChildTransportMessageType.PARENT_PCF_TIMINGS:
                    r("ZenonProductConnectFunnel").setPreJoinTimings({
                      acceptedTs: i != null ? a + i : null,
                      ringingTs: l != null ? a + l : null,
                      triggeredTs: u != null ? a + u : null,
                    });
                    return;
                }
            }),
            (this.$2 = a),
            (this.$1 = this.$10()),
            (this.$3 = i),
            (this.$7 = c),
            (this.$4 = l),
            (this.$5 = u),
            (this.$9 = n));
        }
        var a = t.prototype;
        return (
          (a.getLocalCallIDFromParent = function () {
            return this.$8;
          }),
          (a.connect = function () {
            var t = this,
              r = new (e || (e = n("Promise")))(function (e) {
                ((t.$6 = function (t) {
                  return e({ isTimeout: !1, mwThriftRingRequest: t });
                }),
                  t.$11());
              }),
              o = new e(function (e) {
                window.setTimeout(function () {
                  e({ isTimeout: !0, mwThriftRingRequest: null });
                }, t.$7);
              }),
              a = e.race([r, o]);
            return a.then(function (e) {
              return (
                (t.$6 = null),
                e.isTimeout
                  ? { state: "join_unavailable" }
                  : {
                      mwThriftRingRequest: e.mwThriftRingRequest,
                      state: "join_ready",
                    }
              );
            });
          }),
          (a.$11 = function () {
            var e = this,
              t = window.opener;
            if (t && t.postMessage) {
              window.addEventListener("message", this.$12, !1);
              var n = {
                  childNonce: this.$1,
                  nonce: this.$2,
                  peerID: this.$3,
                  roomID: this.$4,
                  serverInfoData: this.$5,
                  type: o("ZenonSignalingTransportTypes")
                    .ChildTransportMessageType.CHILD_WINDOW_READY,
                },
                a = new MessageChannel();
              a.port1.onmessage = function (t) {
                e.$12(t);
              };
              var i = window.location.origin;
              (r("gkx")("22889") ||
                (!(u || (u = r("isEmpty")))(document.referrer) &&
                  i !== document.referrer &&
                  r("isFacebookishURI")(
                    new (c || (c = r("URI")))(document.referrer),
                  ) &&
                  (i = document.referrer)),
                o("SecurePostMessage").sendMessageToSpecificOrigin(t, n, i, [
                  a.port2,
                ]));
            }
          }),
          (a.$10 = function () {
            return String(o("Random").random());
          }),
          t
        );
      })();
    l.default = m;
  },
  98,
);
