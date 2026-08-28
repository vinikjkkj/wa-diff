__d(
  "ZenonLSE2EEStatsManager",
  [
    "E2eeMetricsSerializers",
    "WebAssemblyMemorySingleton",
    "ZenonCallFalcoEventUtils",
    "ZenonCallInfoManager",
    "ZenonPeerID",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["deviceID"],
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$ZenonLSE2EEStatsManager$p_1 = {
              group_e2ee_metrics: o(
                "E2eeMetricsSerializers",
              ).GroupE2eeMetrics$DefaultConstructor(),
              p2p_e2ee_metrics: o(
                "E2eeMetricsSerializers",
              ).P2pE2eeMetrics$DefaultConstructor(),
              track_specific_e2ee_stats: new Map(),
              wasm_metrics: o(
                "WebAssemblyMemorySingleton",
              ).WebAssemblyMemorySingleton.getMetrics(),
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.updateE2eeStats = function (t) {
            this.$ZenonLSE2EEStatsManager$p_1 = t;
          }),
          (r.getGroupE2eeMetricsInFalcoShape = function () {
            var e = this.getCallInfo(),
              t = e.deviceID,
              n = e.localCallID,
              r = e.serverInfoData;
            return babelHelpers.extends(
              {
                g_e2ee_web_wasm_final_memory_usage_kb: String(
                  this.$ZenonLSE2EEStatsManager$p_1.wasm_metrics.memory_size_kb,
                ),
                g_e2ee_web_wasm_memory_reallocation_count: String(
                  this.$ZenonLSE2EEStatsManager$p_1.wasm_metrics
                    .memory_reallocation_count,
                ),
                local_call_id: n,
              },
              r != null && { shared_call_id: r },
              {
                steady_time_ms: o(
                  "ZenonCallFalcoEventUtils",
                ).performanceNowParsed(),
                system_time_ms: String(Date.now()),
                web_device_id: t,
              },
              this.$ZenonLSE2EEStatsManager$p_1.group_e2ee_metrics,
            );
          }),
          (r.getP2pE2eeMetricsInFalcoShape = function () {
            var e = this.getCallInfo(),
              t = e.deviceID,
              n = e.localCallID,
              r = e.peerID,
              a = e.serverInfoData;
            return babelHelpers.extends(
              { local_call_id: n },
              a != null && { shared_call_id: a },
              {
                peer_id: o("ZenonPeerID").convertPeerIDForLogging(r),
                steady_time_ms: o(
                  "ZenonCallFalcoEventUtils",
                ).performanceNowParsed(),
                system_time_ms: String(Date.now()),
                web_device_id: t,
              },
              this.$ZenonLSE2EEStatsManager$p_1.p2p_e2ee_metrics,
            );
          }),
          (r.save = function (t) {
            var e = this.getCallInfo(),
              n = e.peerID,
              r = e.signalingID;
            t.storeE2eeStats(n, r, this);
          }),
          (r.delete = function (t) {
            var e = this.getCallInfo(),
              n = e.peerID,
              r = e.signalingID;
            t.removeLocalStorageObjects([{ peerID: n, signalingID: r }]);
          }),
          (r.toJsonString = function () {
            var e = {
              callInfo: this.getCallInfo(),
              groupE2eeMetrics:
                this.$ZenonLSE2EEStatsManager$p_1.group_e2ee_metrics,
              p2pE2eeMetrics:
                this.$ZenonLSE2EEStatsManager$p_1.p2p_e2ee_metrics,
              trackSpecificE2eeStatsWithTrackId: Array.from(
                this.$ZenonLSE2EEStatsManager$p_1.track_specific_e2ee_stats,
              ),
              wasmMetrics: this.$ZenonLSE2EEStatsManager$p_1.wasm_metrics,
            };
            return JSON.stringify(e);
          }),
          (n.fromJsonString = function (r) {
            var t;
            try {
              t = JSON.parse(r);
            } catch (e) {
              return null;
            }
            var o = t.callInfo,
              a = o.deviceID,
              i = babelHelpers.objectWithoutPropertiesLoose(o, e),
              l = new n(i);
            return (
              (l.$ZenonLSE2EEStatsManager$p_1 = {
                group_e2ee_metrics: t.groupE2eeMetrics,
                p2p_e2ee_metrics: t.p2pE2eeMetrics,
                track_specific_e2ee_stats: new Map(
                  t.trackSpecificE2eeStatsWithTrackId,
                ),
                wasm_metrics: t.wasmMetrics,
              }),
              l
            );
          }),
          n
        );
      })(r("ZenonCallInfoManager"));
    l.default = s;
  },
  98,
);
