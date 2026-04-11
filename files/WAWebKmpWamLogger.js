__d(
  "WAWebKmpWamLogger",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = {
            reportSyncdMutationsSummary: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t) {
                  var n = yield o(
                      "WAWebSyncdWamReportingUtils",
                    ).getShortMdSessionId(),
                    a = r("WANullthrows")(g(e.collectionName)),
                    i = yield y(o("WAWebKmpKotlinUtils").asMap(e.keyMap));
                  new (o(
                    "WAWebMdSyncdMutationsSummaryWamEvent",
                  ).MdSyncdMutationsSummaryWamEvent)({
                    appSessionId: o(
                      "WAWebGetSharedSessionId",
                    ).getSharedSessionId(),
                    companionSessionIds: n,
                    isInBootstrap: e.isInBootstrap,
                    lidMutations: e.lidMutations,
                    mutationBundle: p(e.bundleType),
                    mutationDirection: _(e.mutationDirection),
                    patchMac: e.patchMac
                      ? o("WABase64").encodeB64UrlSafe(
                          o("WAWebKmpKotlinUtils").asUint8Array(e.patchMac)
                            .buffer,
                        )
                      : void 0,
                    removeMutations: e.removeMutations,
                    seqNumber: parseInt(t.toDecimalString(), 10),
                    setMutations: e.setMutations,
                    snapshotMac: o("WABase64").encodeB64UrlSafe(
                      o("WAWebKmpKotlinUtils").asUint8Array(e.snapshotMac)
                        .buffer,
                    ),
                    syncdCollection: a,
                    syncdKeyidKeyhash: i,
                  }).commit();
                },
              );
              function t(t, n) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            reportSyncdBundle: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e, t) {
                  var n = yield o(
                      "WAWebSyncdWamReportingUtils",
                    ).getShortMdSessionId(),
                    a = r("WANullthrows")(g(e.collectionName)),
                    i = yield o(
                      "WAWebSyncdWamReportingUtils",
                    ).encodeKeyDataForWam(
                      o("WAWebKmpKotlinUtils").asUint8Array(
                        e.syncdKeyData.keyData,
                      ).buffer,
                    );
                  new (o("WAWebMdSyncdBundleWamEvent").MdSyncdBundleWamEvent)({
                    appSessionId: o(
                      "WAWebGetSharedSessionId",
                    ).getSharedSessionId(),
                    bundleVersion: parseInt(
                      e.versionNumber.toDecimalString(),
                      10,
                    ),
                    companionSessionIds: n,
                    computedLthash: o("WABase64").encodeB64UrlSafe(
                      o("WAWebKmpKotlinUtils").asUint8Array(e.computedLtHash)
                        .buffer,
                    ),
                    expectedMac: o("WABase64").encodeB64UrlSafe(
                      o("WAWebKmpKotlinUtils").asUint8Array(e.expectedMac)
                        .buffer,
                    ),
                    kmpSyncdFlow: f(e.mutationDirection),
                    mutationBundle: p(e.bundleType),
                    mutationDirection: _(e.mutationDirection),
                    patchMac: e.computedPatchMac
                      ? o("WABase64").encodeB64UrlSafe(
                          o("WAWebKmpKotlinUtils").asUint8Array(
                            e.computedPatchMac,
                          ).buffer,
                        )
                      : void 0,
                    patchSize: e.patchSize
                      ? parseInt(e.patchSize.toDecimalString(), 10)
                      : void 0,
                    processingErrorMessage: e.errorMessage || void 0,
                    seqNumber: parseInt(t.toDecimalString(), 10),
                    snapshotMac: o("WABase64").encodeB64UrlSafe(
                      o("WAWebKmpKotlinUtils").asUint8Array(
                        e.computedSnapshotMac,
                      ).buffer,
                    ),
                    snapshotSize: e.snapshotSize
                      ? parseInt(e.snapshotSize.toDecimalString(), 10)
                      : void 0,
                    syncdCollection: a,
                    syncdKeyhash: i,
                    syncdKeyid: o("WABase64").encodeB64UrlSafe(
                      o("WAWebKmpKotlinUtils").asUint8Array(e.syncdKeyId.bytes)
                        .buffer,
                    ),
                  }).commit();
                },
              );
              function t(t, n) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            reportBootstrapAppStateDataDownloaded: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = new (o(
                    "WAWebMdBootstrapAppStateDataDownloadedWamEvent",
                  ).MdBootstrapAppStateDataDownloadedWamEvent)({
                    mdBootstrapPayloadType: e.isCriticalCollection
                      ? o("WAWebWamEnumMdBootstrapPayloadType")
                          .MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL
                      : o("WAWebWamEnumMdBootstrapPayloadType")
                          .MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
                    mdTimestamp: Number(e.timestampMs),
                    mdBootstrapStepDuration: Number(e.stepDurationMs),
                    mdBootstrapStepResult: e.isSuccess
                      ? o("WAWebWamEnumMdBootstrapStepResult")
                          .MD_BOOTSTRAP_STEP_RESULT.SUCCESS
                      : o("WAWebWamEnumMdBootstrapStepResult")
                          .MD_BOOTSTRAP_STEP_RESULT.FAILURE,
                    mdSessionId: yield o(
                      "WAWebSyncdMdSyncFieldstatMeta",
                    ).MdSyncFieldStatsMeta.getMdSessionId(),
                  });
                  e.payloadSizeBytes != null &&
                    (t.mdBootstrapPayloadSize = Number(e.payloadSizeBytes));
                  var n = yield o(
                    "WAWebSyncdMdSyncFieldstatMeta",
                  ).MdSyncFieldStatsMeta.getStorageEstimation();
                  (n.mdStorageQuotaBytes !==
                    o("WAWebSyncdMdSyncFieldstatMeta")
                      .STORAGE_QUOTA_UNAVAILABLE &&
                    ((t.mdStorageQuotaUsedBytes = n.mdStorageQuotaUsedBytes),
                    (t.mdStorageQuotaBytes = n.mdStorageQuotaBytes)),
                    t.commit());
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            reportMdCriticalEvent: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t,
                    n = o("WAWebWamEnumMdSyncdCriticalEventCode")
                      .MD_SYNCD_CRITICAL_EVENT_CODE[e.criticalEventCode.name];
                  if (n == null) {
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[KmpWamLogger] Unknown critical event code: ",
                            "",
                          ])),
                        e.criticalEventCode.name,
                      )
                      .sendLogs("kmp-unknown-critical-event");
                    return;
                  }
                  new (o(
                    "WAWebMdCriticalEventWamEvent",
                  ).MdCriticalEventWamEvent)({
                    mdCriticalEventCode: n,
                    mutationActionName:
                      (t = e.mutationActionName) != null ? t : void 0,
                  }).commit();
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
            reportMdFatalError: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  var t = h(e.fatalErrorCode.name);
                  if (t == null) {
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[KmpWamLogger] Unknown fatal error code: ",
                            "",
                          ])),
                        e.fatalErrorCode.name,
                      )
                      .sendLogs("kmp-unknown-fatal-error");
                    return;
                  }
                  var n =
                    e.collectionName != null
                      ? g(e.collectionName.toWamSyncdCollectionType())
                      : void 0;
                  yield new (o(
                    "WAWebMdFatalErrorWamEvent",
                  ).MdFatalErrorWamEvent)({
                    mdFatalErrorCode: t,
                    collection: n,
                    isFatal: e.isFatal,
                  }).commitAndWaitForFlush(!0);
                },
              );
              function t(t) {
                return e.apply(this, arguments);
              }
              return t;
            })(),
          };
          return e;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
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
    function _(e) {
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
    function f(e) {
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
    function g(t) {
      e: {
        if (
          t ===
          o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE.REGULAR
        )
          return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .REGULAR;
        if (
          t ===
          o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE.REGULAR_LOW
        )
          return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .REGULAR_LOW;
        if (
          t ===
          o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .REGULAR_HIGH
        )
          return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .REGULAR_HIGH;
        if (
          t ===
          o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .CRITICAL_BLOCK
        )
          return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .CRITICAL_BLOCK;
        if (
          t ===
          o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .CRITICAL_UNBLOCK_LOW
        )
          return o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE
            .CRITICAL_UNBLOCK_LOW;
        {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[KmpWamLogger] Unexpected collection name value ",
                  "",
                ])),
              t,
            )
            .sendLogs("kmp-invalid-collection-name");
          return;
        }
      }
    }
    function h(e) {
      var t = e
          .replace(/([a-z])([A-Z])/g, "$1_$2")
          .replace(/([a-z])(\d)/g, "$1_$2")
          .toUpperCase(),
        n = o("WAWebWamEnumMdSyncdFatalErrorCode").MD_SYNCD_FATAL_ERROR_CODE;
      return n[t];
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (c || (c = n("Promise"))).all(
              e.entries().map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1],
                        r = o("WABase64").encodeB64UrlSafe(
                          o("WAWebKmpKotlinUtils").asUint8Array(t.bytes).buffer,
                        ),
                        a = yield o(
                          "WAWebSyncdWamReportingUtils",
                        ).encodeKeyDataForWam(
                          o("WAWebKmpKotlinUtils").asUint8Array(n.keyData)
                            .buffer,
                        );
                      return [r, a];
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            ),
            r = t.reduce(function (e, t) {
              var n = t[0],
                r = t[1];
              return ((e[n] = r), e);
            }, {});
          return JSON.stringify(r);
        })),
        C.apply(this, arguments)
      );
    }
    l.getWamLogger = d;
  },
  98,
);
