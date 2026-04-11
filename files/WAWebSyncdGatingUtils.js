__d(
  "WAWebSyncdGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("syncd_key_max_use_days");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "syncd_sentinel_timeout_seconds",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "syncd_inline_mutations_max_count",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "syncd_patch_protobuf_max_size",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "syncd_wait_for_key_timeout_days",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_syncd_key_persistence_only_after_server_ack",
      );
    }
    ((l.getSyncdKeyMaxUseDays = e),
      (l.getSyncdSentinelTimeoutSeconds = s),
      (l.getSyncdInlineMutationsMaxCount = u),
      (l.getSyncdPatchProtobufMaxSize = c),
      (l.getSyncdWaitForKeyTimeoutDays = d),
      (l.getEnableSyncdKeyPersistenceOnlyAfterServerAck = m));
  },
  98,
);
