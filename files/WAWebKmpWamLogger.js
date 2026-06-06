__d(
  "WAWebKmpWamLogger",
  [
    "WABase64",
    "WALogger",
    "WANullthrows",
    "WAWebGetSharedSessionId",
    "WAWebKmpKotlinUtils",
    "WAWebMdBootstrapAppStateDataDownloadedWamEvent",
    "WAWebMdCriticalEventWamEvent",
    "WAWebMdFatalErrorWamEvent",
    "WAWebMdSyncdBundleWamEvent",
    "WAWebMdSyncdMutationsSummaryWamEvent",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebSyncdWamReportingUtils",
    "WAWebWamEnumKmpSyncdFlowEnum",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWamEnumMdBootstrapStepResult",
    "WAWebWamEnumMdSyncdCriticalEventCode",
    "WAWebWamEnumMdSyncdFatalErrorCode",
    "WAWebWamEnumMutationBundleType",
    "WAWebWamEnumMutationDirectionType",
    "WAWebWamEnumSyncdCollectionType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c() {
      var t = {
        reportSyncdMutationsSummary: async function (t, n) {
          var e = await o("WAWebSyncdWamReportingUtils").getShortMdSessionId(),
            a = r("WANullthrows")(_(t.collectionName)),
            i = await g(o("WAWebKmpKotlinUtils").asMap(t.keyMap));
          new (o(
            "WAWebMdSyncdMutationsSummaryWamEvent",
          ).MdSyncdMutationsSummaryWamEvent)({
            appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
            companionSessionIds: e,
            isInBootstrap: t.isInBootstrap,
            lidMutations: t.lidMutations,
            mutationBundle: d(t.bundleType),
            mutationDirection: m(t.mutationDirection),
            patchMac: t.patchMac
              ? o("WABase64").encodeB64UrlSafe(
                  o("WAWebKmpKotlinUtils").asUint8Array(t.patchMac).buffer,
                )
              : void 0,
            removeMutations: t.removeMutations,
            seqNumber: parseInt(n.toDecimalString(), 10),
            setMutations: t.setMutations,
            snapshotMac: o("WABase64").encodeB64UrlSafe(
              o("WAWebKmpKotlinUtils").asUint8Array(t.snapshotMac).buffer,
            ),
            syncdCollection: a,
            syncdKeyidKeyhash: i,
          }).commit();
        },
        reportSyncdBundle: async function (t, n) {
          var e = await o("WAWebSyncdWamReportingUtils").getShortMdSessionId(),
            a = r("WANullthrows")(_(t.collectionName)),
            i = await o("WAWebSyncdWamReportingUtils").encodeKeyDataForWam(
              o("WAWebKmpKotlinUtils").asUint8Array(t.syncdKeyData.keyData)
                .buffer,
            );
          new (o("WAWebMdSyncdBundleWamEvent").MdSyncdBundleWamEvent)({
            appSessionId: o("WAWebGetSharedSessionId").getSharedSessionId(),
            bundleVersion: parseInt(t.versionNumber.toDecimalString(), 10),
            companionSessionIds: e,
            computedLthash: o("WABase64").encodeB64UrlSafe(
              o("WAWebKmpKotlinUtils").asUint8Array(t.computedLtHash).buffer,
            ),
            expectedMac: o("WABase64").encodeB64UrlSafe(
              o("WAWebKmpKotlinUtils").asUint8Array(t.expectedMac).buffer,
            ),
            kmpSyncdFlow: p(t.mutationDirection),
            mutationBundle: d(t.bundleType),
            mutationDirection: m(t.mutationDirection),
            patchMac: t.computedPatchMac
              ? o("WABase64").encodeB64UrlSafe(
                  o("WAWebKmpKotlinUtils").asUint8Array(t.computedPatchMac)
                    .buffer,
                )
              : void 0,
            patchSize: t.patchSize
              ? parseInt(t.patchSize.toDecimalString(), 10)
              : void 0,
            processingErrorMessage: t.errorMessage || void 0,
            seqNumber: parseInt(n.toDecimalString(), 10),
            snapshotMac: o("WABase64").encodeB64UrlSafe(
              o("WAWebKmpKotlinUtils").asUint8Array(t.computedSnapshotMac)
                .buffer,
            ),
            snapshotSize: t.snapshotSize
              ? parseInt(t.snapshotSize.toDecimalString(), 10)
              : void 0,
            syncdCollection: a,
            syncdKeyhash: i,
            syncdKeyid: o("WABase64").encodeB64UrlSafe(
              o("WAWebKmpKotlinUtils").asUint8Array(t.syncdKeyId.bytes).buffer,
            ),
          }).commit();
        },
        reportBootstrapAppStateDataDownloaded: async function (t) {
          var e = new (o(
            "WAWebMdBootstrapAppStateDataDownloadedWamEvent",
          ).MdBootstrapAppStateDataDownloadedWamEvent)({
            mdBootstrapPayloadType: t.isCriticalCollection
              ? o("WAWebWamEnumMdBootstrapPayloadType")
                  .MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL
              : o("WAWebWamEnumMdBootstrapPayloadType")
                  .MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
            mdTimestamp: Number(t.timestampMs),
            mdBootstrapStepDuration: Number(t.stepDurationMs),
            mdBootstrapStepResult: t.isSuccess
              ? o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT
                  .SUCCESS
              : o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT
                  .FAILURE,
            mdSessionId: await o(
              "WAWebSyncdMdSyncFieldstatMeta",
            ).MdSyncFieldStatsMeta.getMdSessionId(),
          });
          t.payloadSizeBytes != null &&
            (e.mdBootstrapPayloadSize = Number(t.payloadSizeBytes));
          var n = await o(
            "WAWebSyncdMdSyncFieldstatMeta",
          ).MdSyncFieldStatsMeta.getStorageEstimation();
          (n.mdStorageQuotaBytes !==
            o("WAWebSyncdMdSyncFieldstatMeta").STORAGE_QUOTA_UNAVAILABLE &&
            ((e.mdStorageQuotaUsedBytes = n.mdStorageQuotaUsedBytes),
            (e.mdStorageQuotaBytes = n.mdStorageQuotaBytes)),
            e.commit());
        },
        reportMdCriticalEvent: async function (n) {
          var t,
            r = o("WAWebWamEnumMdSyncdCriticalEventCode")
              .MD_SYNCD_CRITICAL_EVENT_CODE[n.criticalEventCode.name];
          if (r == null) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[KmpWamLogger] Unknown critical event code: ",
                    "",
                  ])),
                n.criticalEventCode.name,
              )
              .sendLogs("kmp-unknown-critical-event");
            return;
          }
          new (o("WAWebMdCriticalEventWamEvent").MdCriticalEventWamEvent)({
            mdCriticalEventCode: r,
            mutationActionName: (t = n.mutationActionName) != null ? t : void 0,
          }).commit();
        },
        reportMdFatalError: async function (t) {
          var e = f(t.fatalErrorCode.name);
          if (e == null) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[KmpWamLogger] Unknown fatal error code: ",
                    "",
                  ])),
                t.fatalErrorCode.name,
              )
              .sendLogs("kmp-unknown-fatal-error");
            return;
          }
          var n =
            t.collectionName != null
              ? _(t.collectionName.toWamSyncdCollectionType())
              : void 0;
          await new (o("WAWebMdFatalErrorWamEvent").MdFatalErrorWamEvent)({
            mdFatalErrorCode: e,
            collection: n,
            isFatal: t.isFatal,
          }).commitAndWaitForFlush(!0);
        },
      };
      return t;
    }
    function d(e) {
      return e.name === "PATCH"
        ? o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.PATCH
        : e.name === "SNAPSHOT"
          ? o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE.SNAPSHOT
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e.name,
              );
            })();
    }
    function m(e) {
      return e.name === "INCOMING"
        ? o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE
            .INCOMING
        : e.name === "OUTGOING"
          ? o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE
              .OUTGOING
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e.name,
              );
            })();
    }
    function p(e) {
      return e.name === "INCOMING"
        ? o("WAWebWamEnumKmpSyncdFlowEnum").KMP_SYNCD_FLOW_ENUM
            .KMP_INCOMING_PROCESSOR
        : e.name === "OUTGOING"
          ? o("WAWebWamEnumKmpSyncdFlowEnum").KMP_SYNCD_FLOW_ENUM
              .KMP_OUTGOING_PROCESSOR
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e.name,
              );
            })();
    }
    function _(e) {
      e: {
        if (
          e ===
          o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE.REGULAR
        )
          return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .REGULAR;
        if (
          e ===
          o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE.REGULAR_LOW
        )
          return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .REGULAR_LOW;
        if (
          e ===
          o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .REGULAR_HIGH
        )
          return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .REGULAR_HIGH;
        if (
          e ===
          o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .CRITICAL_BLOCK
        )
          return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .CRITICAL_BLOCK;
        if (
          e ===
          o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .CRITICAL_UNBLOCK_LOW
        )
          return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .CRITICAL_UNBLOCK_LOW;
        {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[KmpWamLogger] Unexpected collection name value ",
                  "",
                ])),
              e,
            )
            .sendLogs("kmp-invalid-collection-name");
          return;
        }
      }
    }
    function f(e) {
      var t = e
          .replace(/([a-z])([A-Z])/g, "$1_$2")
          .replace(/([a-z])(\d)/g, "$1_$2")
          .toUpperCase(),
        n = o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE;
      return n[t];
    }
    async function g(e) {
      var t = await Promise.all(
          e.entries().map(async function (e) {
            var t = e[0],
              n = e[1],
              r = o("WABase64").encodeB64UrlSafe(
                o("WAWebKmpKotlinUtils").asUint8Array(t.bytes).buffer,
              ),
              a = await o("WAWebSyncdWamReportingUtils").encodeKeyDataForWam(
                o("WAWebKmpKotlinUtils").asUint8Array(n.keyData).buffer,
              );
            return [r, a];
          }),
        ),
        n = t.reduce(function (e, t) {
          var n = t[0],
            r = t[1];
          return ((e[n] = r), e);
        }, {});
      return JSON.stringify(n);
    }
    l.getWamLogger = c;
  },
  98,
);
