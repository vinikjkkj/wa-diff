__d(
  "ZenonProductConnectFunnelManager",
  ["ZenonCallInfoManager", "ZenonProductConnectFunnel", "performanceNow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n(n) {
          var o;
          return (
            (o = t.call(this, n) || this),
            (o.$ZenonProductConnectFunnelManager$p_1 = {
              connected: null,
              created: Math.trunc((e || (e = r("performanceNow")))()),
              ended: null,
              firstAction: null,
              firstMediaPacketReceived: null,
              firstMediaPacketSent: null,
              peerConnected: null,
              peerConnecting: null,
              peerRinging: null,
              selfConnected: null,
              selfConnecting: null,
            }),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.$ZenonProductConnectFunnelManager$p_2 = function (n) {
            this.$ZenonProductConnectFunnelManager$p_1[n] == null &&
              (this.$ZenonProductConnectFunnelManager$p_1[n] = Math.trunc(
                (e || (e = r("performanceNow")))(),
              ));
          }),
          (o.setFirstAction = function () {
            this.$ZenonProductConnectFunnelManager$p_2("firstAction");
          }),
          (o.setFirstMediaPacketSent = function (t) {
            var e = "firstMediaPacketSent";
            this.$ZenonProductConnectFunnelManager$p_1[e] == null &&
              (this.$ZenonProductConnectFunnelManager$p_1[e] = Math.trunc(t));
          }),
          (o.setFirstMediaPacketReceived = function (t) {
            var e = "firstMediaPacketReceived";
            this.$ZenonProductConnectFunnelManager$p_1[e] == null &&
              (this.$ZenonProductConnectFunnelManager$p_1[e] = Math.trunc(t));
          }),
          (o.setSelfConnecting = function () {
            this.$ZenonProductConnectFunnelManager$p_2("selfConnecting");
          }),
          (o.setSelfConnected = function () {
            this.$ZenonProductConnectFunnelManager$p_2("selfConnected");
          }),
          (o.setPeerRinging = function () {
            this.$ZenonProductConnectFunnelManager$p_2("peerRinging");
          }),
          (o.setPeerConnecting = function () {
            this.$ZenonProductConnectFunnelManager$p_2("peerConnecting");
          }),
          (o.setPeerConnected = function () {
            this.$ZenonProductConnectFunnelManager$p_2("peerConnected");
          }),
          (o.setConnected = function () {
            this.$ZenonProductConnectFunnelManager$p_2("connected");
          }),
          (o.setEnded = function () {
            this.$ZenonProductConnectFunnelManager$p_2("ended");
          }),
          (o.getFunnelMetricsInFalcoShape = function () {
            var e,
              t,
              n,
              o,
              a,
              i,
              l,
              s,
              u,
              c,
              d,
              m,
              p,
              _,
              f,
              g,
              h,
              y = this.getCallInfo(),
              C = y.callTrigger,
              b = y.isCaller,
              v = y.isVideo,
              S = y.localCallID,
              R = y.serverInfoData,
              L = y.signalingID,
              E = r("ZenonProductConnectFunnel").getTimings(L),
              k = r("ZenonProductConnectFunnel").getAnnotations(L),
              I = Math.min(
                (e = E == null ? void 0 : E.acceptedTs) != null ? e : 0,
                (t = E == null ? void 0 : E.ringingTs) != null ? t : 0,
                (n = E == null ? void 0 : E.triggeredTs) != null ? n : 0,
              ),
              T = I < 0 ? Math.abs(I) : 0,
              D = function (t) {
                return t != null ? t + T : null;
              },
              x = function (t) {
                return t != null ? String(D(t)) : null;
              },
              $ = {},
              P = function (t, n) {
                var e = x(n);
                e != null && ($[t] = e);
              };
            return (
              P(
                "media_first_audio_packet",
                (o = this.$ZenonProductConnectFunnelManager$p_1) == null
                  ? void 0
                  : o.firstMediaPacketReceived,
              ),
              P(
                "media_first_audio_packet_sent",
                (a = this.$ZenonProductConnectFunnelManager$p_1) == null
                  ? void 0
                  : a.firstMediaPacketSent,
              ),
              P(
                "permissions_request_end",
                E == null ? void 0 : E.permissionsReceivedTs,
              ),
              P(
                "permissions_request_start",
                E == null ? void 0 : E.permissionsRequestTs,
              ),
              {
                annotations: {
                  camera_permission:
                    (i = k == null ? void 0 : k.cameraPermission) != null
                      ? i
                      : "unknown",
                  microphone_permission:
                    (l = k == null ? void 0 : k.microphonePermission) != null
                      ? l
                      : "unknown",
                },
                call_trigger: C,
                funnel_event: "END",
                funnel_id: R != null ? R : S,
                funnel_origin: "UNKNOWN",
                is_outbound: b,
                is_video: v,
                local_call_id: S,
                points: $,
                shared_call_id: R,
                time_created_ms: D(
                  (s = this.$ZenonProductConnectFunnelManager$p_1) == null
                    ? void 0
                    : s.created,
                ),
                time_ended_ms:
                  (E == null ? void 0 : E.endCallTs) != null
                    ? D(E == null ? void 0 : E.endCallTs)
                    : D(
                        (u = this.$ZenonProductConnectFunnelManager$p_1) == null
                          ? void 0
                          : u.ended,
                      ),
                time_rsys_connected_ms: D(
                  (c = this.$ZenonProductConnectFunnelManager$p_1) == null
                    ? void 0
                    : c.connected,
                ),
                time_rsys_ended_ms: D(
                  (d = this.$ZenonProductConnectFunnelManager$p_1) == null
                    ? void 0
                    : d.ended,
                ),
                time_rsys_first_action_ms: D(
                  (m = this.$ZenonProductConnectFunnelManager$p_1) == null
                    ? void 0
                    : m.firstAction,
                ),
                time_rsys_peer_connected_ms: D(
                  (p = this.$ZenonProductConnectFunnelManager$p_1) == null
                    ? void 0
                    : p.peerConnected,
                ),
                time_rsys_peer_connecting_ms: D(
                  (_ = this.$ZenonProductConnectFunnelManager$p_1) == null
                    ? void 0
                    : _.peerConnecting,
                ),
                time_rsys_peer_ringing_ms: D(
                  (f = this.$ZenonProductConnectFunnelManager$p_1) == null
                    ? void 0
                    : f.peerRinging,
                ),
                time_rsys_self_connected_ms: D(
                  (g = this.$ZenonProductConnectFunnelManager$p_1) == null
                    ? void 0
                    : g.selfConnected,
                ),
                time_rsys_self_connecting_ms: D(
                  (h = this.$ZenonProductConnectFunnelManager$p_1) == null
                    ? void 0
                    : h.selfConnecting,
                ),
                time_ui_accepted_ms: D(E == null ? void 0 : E.acceptedTs),
                time_ui_connected_ms: D(E == null ? void 0 : E.connectedTs),
                time_ui_connecting_ms: D(E == null ? void 0 : E.connectingTs),
                time_ui_contacting_ms: D(E == null ? void 0 : E.contactingTs),
                time_ui_end_call_ms: D(E == null ? void 0 : E.endCallTs),
                time_ui_ringing_ms: D(E == null ? void 0 : E.ringingTs),
                time_ui_triggered_ms: D(E == null ? void 0 : E.triggeredTs),
              }
            );
          }),
          (o.save = function (t) {
            var e = this.getCallInfo(),
              n = e.peerID,
              r = e.signalingID;
            t.storeFunnel(n, r, this);
          }),
          (o.delete = function (t) {
            var e = this.getCallInfo(),
              n = e.peerID,
              o = e.signalingID;
            (t.removeLocalStorageObjects([{ peerID: n, signalingID: o }]),
              r("ZenonProductConnectFunnel").remove(o));
          }),
          (o.toJsonString = function () {
            var e = {
              callInfo: this.getCallInfo(),
              timings: this.$ZenonProductConnectFunnelManager$p_1,
            };
            return JSON.stringify(e);
          }),
          (n.fromJsonString = function (t) {
            var e;
            try {
              e = JSON.parse(t);
            } catch (e) {
              return null;
            }
            if (e == null || e.callInfo == null) return null;
            var r = new n(e.callInfo);
            return ((r.$ZenonProductConnectFunnelManager$p_1 = e.timings), r);
          }),
          n
        );
      })(r("ZenonCallInfoManager"));
    l.default = s;
  },
  98,
);
