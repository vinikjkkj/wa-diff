__d(
  "WAWebKmpAbProps",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebKmpKotlinUtils",
    "WAWebSyncdWamReportingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        getSyncDLTHashConsistencyCheckOnSnapshotMacMismatch: function () {
          return o("WAWebABProps").getABPropConfigValue(
            "syncd_lthash_consistency_check_on_snapshot_mac_mismatch",
          );
        },
        getEnableSyncdDebugDataInPatch: function () {
          return o("WAWebABProps").getABPropConfigValue(
            "enable_syncd_debug_data_in_patch",
          );
        },
        getLthashCheckHours: function () {
          return o("WAWebABProps").getABPropConfigValue("lthash_check_hours");
        },
        getSyncdAdditionalMutationsCount: function () {
          return o("WAWebABProps").getABPropConfigValue(
            "syncd_additional_mutations_count",
          );
        },
        getSyncdInlineMutationsMaxCount: function () {
          return o("WAWebABProps").getABPropConfigValue(
            "syncd_inline_mutations_max_count",
          );
        },
        getSyncdPatchProtobufMaxSize: function () {
          return o("WAWebABProps").getABPropConfigValue(
            "syncd_patch_protobuf_max_size",
          );
        },
        getSyncdPatchInlinePayloadMaxSizeInKb: function () {
          return 0;
        },
        getSyncdCriticalContactsLimit: function () {
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: kmp: unexpected call to getSyncdCriticalContactsLimit",
                  ])),
              )
              .sendLogs("kmp-unexpected-call-critical-contacts-limit"),
            1e3
          );
        },
        getSyncdBundleLoggingAllowlist: function () {
          return o("WAWebKmpKotlinUtils").asKtList(
            [].concat(
              o("WAWebSyncdWamReportingUtils").getSyncdWamAllowlist(
                "md_syncd_bundle_logging",
              ),
            ),
          );
        },
        getSyncdMutationSummaryLoggingAllowlist: function () {
          return o("WAWebKmpKotlinUtils").asKtList(
            [].concat(
              o("WAWebSyncdWamReportingUtils").getSyncdWamAllowlist(
                "md_syncd_mutation_summary_logging",
              ),
            ),
          );
        },
        getImpSendSignalPostConnectWebcEnabled: function () {
          return o("WAWebABProps").getABPropConfigValue(
            "imp_send_signal_post_connect_webc_enabled",
          );
        },
        getImpSendSignalPostConnectDelay: function () {
          return o("WAWebABProps").getABPropConfigValue(
            "imp_send_signal_post_connect_delay",
          );
        },
      };
    l.abProps = s;
  },
  98,
);
