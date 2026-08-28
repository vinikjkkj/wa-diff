__d(
  "ZenonEncryptionKeysManagerState",
  ["E2eeMetricsSerializers", "WebAssemblyMemorySingleton"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {
        debug_only_stats: {
          error_count_decrypted: 0,
          error_count_encrypted: 0,
          frames_decrypted: 0,
          frames_encrypted: 0,
        },
        decrypt_frames_dropped: 0,
        encrypt_frames_dropped: 0,
        total_decrypt_time: 0,
        total_encrypt_time: 0,
      };
      for (var n of e.values())
        ((t.debug_only_stats.error_count_decrypted +=
          n.debug_only_stats.error_count_decrypted),
          (t.debug_only_stats.error_count_encrypted +=
            n.debug_only_stats.error_count_encrypted),
          (t.debug_only_stats.frames_decrypted +=
            n.debug_only_stats.frames_decrypted),
          (t.debug_only_stats.frames_encrypted +=
            n.debug_only_stats.frames_encrypted),
          (t.decrypt_frames_dropped += n.decrypt_frames_dropped),
          (t.encrypt_frames_dropped += n.encrypt_frames_dropped),
          (t.total_decrypt_time += n.total_decrypt_time),
          (t.total_encrypt_time += n.total_encrypt_time));
      return t;
    }
    var s = function () {
      return {
        e2eeStats: {
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
        },
        identityStoreDescription: "not yet created",
        sfuE2eeNegotiationState: -1,
      };
    };
    ((l.aggregatePerTrackStats = e),
      (l.ZenonEncryptionKeysManagerState$DefaultConstructor = s));
  },
  98,
);
