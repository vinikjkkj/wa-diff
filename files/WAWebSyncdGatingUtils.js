__d(
  "WAWebSyncdGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("syncd_key_max_use_days");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "syncd_inline_mutations_max_count",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "syncd_patch_protobuf_max_size",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "syncd_wait_for_key_timeout_days",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_enable_syncd_key_persistence_only_after_server_ack",
      );
    }
    ((l.getSyncdKeyMaxUseDays = e),
      (l.getSyncdInlineMutationsMaxCount = s),
      (l.getSyncdPatchProtobufMaxSize = u),
      (l.getSyncdWaitForKeyTimeoutDays = c),
      (l.getEnableSyncdKeyPersistenceOnlyAfterServerAck = d));
  },
  98,
);
