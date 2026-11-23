__d(
  "MAWMpsSetup",
  [
    "BackendInitLoggingUtils",
    "EBMessageProbeSamplingPreprocessor",
    "MAWAttachmentCdnUrlWriter",
    "MAWCurrentUser",
    "MAWEBLSInWorkerSwitch",
    "MAWIndexedDbMetadata",
    "MAWMpsDecryptedProtobufToFullMessage",
    "MAWMpsDirectiveGenerator",
    "MAWMpsEbMetadata",
    "MAWMpsGenerateDeletionMessage",
    "MAWMpsMessagePointQuery",
    "MAWMpsMessageRangeQuery",
    "MAWMpsMutateMessagePreprocessor",
    "MAWMpsRTCCallLifecyclePreprocessor",
    "MAWMpsReadSideEffects",
    "MAWMpsSetExpiryPreprocessor",
    "MAWMpsXMAValidationPreprocessor",
    "MAWODSProxy",
    "MAWQplProxy",
    "MawMpsCopPostprocessor",
    "MawMpsDeleteTopLevelPreprocessor",
    "MawMpsDeleteTopLevelWithPlaceholderPreprocessor",
    "MawMpsDropDeviceNotificationsForTurnedOffSecurityAlertsPreprocessor",
    "MawMpsEphemeralSettingSyncPostprocessor",
    "MawMpsPayloadValidatorPreprocessor",
    "MawMpsSac",
    "MawMpsSnippetActivityRank",
    "MawMpsThreadConsistency",
    "MawMpsUploadMessagesToEBPostprocessor",
    "MessengerWebInitData",
    "MpsCacheServicesPostProcessors",
    "MpsExtensionConfiguration",
    "MpsFtsPostProcessor",
    "MpsMediaDeletionPostProcessor",
    "MpsThreadContentsPostProcessor",
    "WAE2EEIgnitionGating",
    "WAOdsEnums",
    "WATimeUtils",
    "WebMps",
    "WmiSacGating",
    "cr:19393",
    "justknobx",
    "pipeline-chain",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("pipeline-chain")
        .pipeline(
          o(
            "MawMpsDropDeviceNotificationsForTurnedOffSecurityAlertsPreprocessor",
          ).MawMpsDropDeviceNotificationsForTurnedOffSecurityAlertsPreprocessor,
        )
        .pipe(
          o("MAWMpsDirectiveGenerator").MawMpsDirectiveGeneratorPreprocessor,
        )
        .pipe(
          o("MAWMpsRTCCallLifecyclePreprocessor")
            .MAWMpsRTCCallLifecyclePreprocessor,
        )
        .pipe(
          o("MawMpsDeleteTopLevelWithPlaceholderPreprocessor")
            .MawMpsDeleteTopLevelWithPlaceholderPreprocessor,
        )
        .pipe(
          o("MAWMpsMutateMessagePreprocessor").MAWMpsMutateMessagePreprocessor,
        )
        .pipe(
          o("MawMpsDeleteTopLevelPreprocessor")
            .MawMpsDeleteTopLevelPreprocessor,
        )
        .pipe(o("MAWMpsSetExpiryPreprocessor").MAWMpsSetExpiryPreprocessor)
        .pipe(
          o("MAWMpsXMAValidationPreprocessor").MAWMpsXMAValidationPreprocessor,
        )
        .pipe(
          o("MawMpsPayloadValidatorPreprocessor")
            .MawMpsPayloadValidatorPreprocessor,
        )
        .pipe(
          o("EBMessageProbeSamplingPreprocessor")
            .EBMessageProbeSamplingPreprocessor,
        );
      return new (o("MpsExtensionConfiguration").MpsExtensionConfiguration)({
        postProcessors: {
          critical: [
            o("WmiSacGating").isSacEnabled()
              ? o("MawMpsSac").MawMpsSacPostprocessor
              : o("MawMpsThreadConsistency").MawThreadsConsistencyPostprocessor,
            o("MawMpsCopPostprocessor").MpsCopPostProcessor,
            o("MawMpsUploadMessagesToEBPostprocessor")
              .MawMpsUploadMessagesToEBPostprocessor,
          ],
          nonCritical: [
            o("MpsMediaDeletionPostProcessor").MpsMediaDeletionPostProcessor,
            o("MpsFtsPostProcessor").MpsFtsPostProcessor,
            o("MpsCacheServicesPostProcessors").MpsCacheServicesPostProcessor,
            o("MpsThreadContentsPostProcessor").MpsThreadContentsPostProcessor,
            o("MawMpsEphemeralSettingSyncPostprocessor")
              .MawMpsEphemeralSettingSyncPostprocessor,
          ],
        },
        preprocessors: e,
        rankSnippetActivity: o("MawMpsSnippetActivityRank").rankSnippetActivity,
        readSideEffects: o("MAWMpsReadSideEffects").readSideEffects,
        skipDedupedPostprocessing: o("WAE2EEIgnitionGating")
          .isE2EEIgnitionSyncEnabled,
      });
    }
    function s() {
      return {
        accountId: o("MAWCurrentUser").getID(),
        accountKey: r("MessengerWebInitData").accountKeyV2,
      };
    }
    function u(e) {
      var t = e.accountId,
        n = e.accountKey;
      return {
        blockingErrorThreshold: r("justknobx")._("3218"),
        name: o("MAWIndexedDbMetadata").webReverDbbName(t),
        onBlockingError: function (t) {
          (o("MAWQplProxy").sendQplPointThroughBridge(
            r("qpl")._(25310776, "6155"),
            "database_mps_setup_failed",
          ),
            o("MAWODSProxy").odsBumpEntityKey({
              entity: o("WAOdsEnums").Entity.WORM,
              key: "reverb.unrecoverable." + t,
            }));
        },
        qplEvent: r("qpl")._(1056840657, "2716"),
        strEncKey: n,
      };
    }
    var c = {
      fetchMetadata: o("MAWMpsEbMetadata").MAWMpsFetchEbMetadata,
      getMetadataFromCache: o("MAWMpsEbMetadata").MAWMpsGetEbMetadataFromCache,
      isEbEnabled: function () {
        return r("MAWEBLSInWorkerSwitch").get();
      },
      messagePointQuery: o("MAWMpsMessagePointQuery").MAWMpsMessagePointQuery,
      messageRangeQuery: o("MAWMpsMessageRangeQuery").MAWMpsMessageRangeQuery,
    };
    function d(e) {
      var t = o("WATimeUtils").millisTime();
      return o("MAWAttachmentCdnUrlWriter").writeAttachmentCdnUrls(
        e.map(function (e) {
          return { cdnUrl: e.cdnUrl, objectId: e.objectId, timestampMs: t };
        }),
      );
    }
    async function m() {
      await o("BackendInitLoggingUtils").measureMawInit(
        "make_mps",
        async function () {
          var t = s();
          if (n("cr:19393") != null) {
            await n("cr:19393").startMessengerWebWorkerRuntime(t);
            return;
          }
          await o("WebMps").makeMps({
            db: u(t),
            dependencies: {
              decryptedProtobufToFullMessage: o(
                "MAWMpsDecryptedProtobufToFullMessage",
              ).decryptedProtobufToFullMessage,
              eb: c,
              generateDeletionMessage: o("MAWMpsGenerateDeletionMessage")
                .generateDeletionMessage,
              persistAttachmentCdnUrls: d,
            },
            getMpsExtensionConfiguration: e,
          });
        },
      );
    }
    ((l.getMpsExtensionConfiguration = e),
      (l.messengerWebArgs = s),
      (l.mawMpsDbConfig = u),
      (l.mawMpsEbQuery = c),
      (l.persistAttachmentCdnUrls = d),
      (l.mawMpsSetup = m));
  },
  98,
);
