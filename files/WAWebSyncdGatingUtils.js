__d(
  "WAWebSyncdGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "syncd_inline_mutations_max_count",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "syncd_patch_protobuf_max_size",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "syncd_wait_for_key_timeout_days",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_syncd_key_persistence_only_after_server_ack",
      );
    }
    ((l.getSyncdInlineMutationsMaxCount = e),
      (l.getSyncdPatchProtobufMaxSize = s),
      (l.getSyncdWaitForKeyTimeoutDays = u),
      (l.getEnableSyncdKeyPersistenceOnlyAfterServerAck = c));
  },
  98,
);
