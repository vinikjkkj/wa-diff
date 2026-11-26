__d(
  "IGDBackend",
  [
    "IGDAWMainWebWorkerConfig",
    "IGDBackendBridgeHandlers",
    "IGDCOP",
    "IGDLoadRecentParticipantsApi",
    "MAWClearSignalAndTempStores",
    "MAWCommsConfig",
    "MAWConfig",
    "MAWCreateGroupApi",
    "MAWCurrentUser",
    "MAWDebugDefineFunctions",
    "MAWEphemeralConsts",
    "MAWExternalId",
    "MAWExtractMsFromExternalId",
    "MAWFbCat",
    "MAWMpsBridgeHandlers",
    "MAWODSProxy",
    "MAWQplProxy",
    "MAWReStoreDb",
    "MAWServerRPC",
    "MAWSharedOfflineQueueMetric",
    "MAWSharedOfflineResumeUINotifier",
    "MAWTaskDefinitions",
    "WAArrayBufferUtils",
    "WADebugTools",
    "WAMessageLoggingPublisher",
    "WAMockServerShell",
    "WAPassiveMode",
    "WAQueryGroupOverChatD",
    "WAService",
    "WATagsLogger",
    "WAWaitForComms",
    "WAWaitForUserUnblocked",
    "isUseridAnnotationEnabled",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("WATagsLogger").TAGS(["backend"]);
    async function m(t, n, a, i, l) {
      (d.LOG(
        e || (e = babelHelpers.taggedTemplateLiteralLoose(["initWAInfra"])),
      ),
        d.LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose(["deviceJid: ", ""])),
          t.deviceJid,
        ),
        o("MAWQplProxy").sendQplPointThroughBridge(
          r("qpl")._(25310776, "6155"),
          "igd_backend_setup_start",
        ),
        o("MAWFbCat").setFbCat(
          o("WAArrayBufferUtils").stringToArrayBuffer(t.fbCat),
        ));
      var m = o("MAWServerRPC").makeServerRPC(),
        p = await o("WAService")
          .makeWAService({
            config: l,
            dependencies: {
              clearSignalAndTempStores: o("MAWClearSignalAndTempStores")
                .clearSignalAndTempStores,
              createGroups: o("MAWCreateGroupApi").createGroups,
              ephemeralMaxDeletionWindowForUnseenMessage: function () {
                return o("MAWEphemeralConsts")
                  .ephemeralMaxDelectionWindowForUnseenMessage;
              },
              extractMsFromStanzaId: o("MAWExtractMsFromExternalId")
                .extractMsFromStanzaId,
              generateExternalId: o("MAWExternalId").generateExternalId,
              isEmployee: o("MAWCurrentUser").isEmployee,
              isUseridAnnotationEnabled: r("isUseridAnnotationEnabled"),
              loadRecentParticipants: o("MAWReStoreDb").shouldUseReStoreDb()
                ? o("IGDLoadRecentParticipantsApi").loadRecentParticipants
                : function () {
                    return Promise.resolve(new Set());
                  },
              mediaUploadRoot: function () {
                return "/wa-igd/mms";
              },
              queryGroup: o("WAQueryGroupOverChatD").queryGroupOverChatD,
              recordDeviceChangeHistory: function () {
                return Promise.resolve();
              },
            },
            getCommsConfig: o("MAWCommsConfig").getCommsConfig,
            hmacKey: n,
            qpl: {
              franking: r("qpl")._(25299246, "150"),
              messageReceiveReliability: r("qpl")._(25306682, "11176"),
            },
            regData: t,
            serverRPC: m,
          })
          .catch(function (e) {
            throw (
              d.ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to init worker (post-startup): ",
                    "",
                  ])),
                e,
              ),
              e
            );
          }),
        _ = o("MAWSharedOfflineQueueMetric").makeOfflineQueueMetric(
          p.oneQueue,
          o("WAPassiveMode").passiveModeNotifier,
          o("WAMessageLoggingPublisher").messageLoggingPublisher,
        );
      (o("MAWConfig").setConfig(o("IGDAWMainWebWorkerConfig").mawConfig),
        o("IGDCOP").cop.subscribeToOfflineQueue(p.oneQueue, p.protocolQueue),
        o(
          "MAWSharedOfflineResumeUINotifier",
        ).offlineResumeUINotifier.subscribeToWAEvents(p.oneQueue),
        o(
          "MAWSharedOfflineResumeUINotifier",
        ).offlineResumeUINotifier.subscribeToMawEvents(o("IGDCOP").cop),
        o("WAMockServerShell").isMockServerMode ||
          r("promiseDone")(
            o("WAWaitForComms")
              .waitForComms()
              .then(function () {
                return o("MAWTaskDefinitions").registerTasks(
                  o("WAWaitForUserUnblocked").waitForUserUnblocked(),
                );
              }),
          ),
        a.setHandlers(
          "backend",
          o("IGDBackendBridgeHandlers").getIGDBridgeHandlers(d),
          o("MAWODSProxy").bumpBridgeRouteUsage,
        ),
        a.setHandlers("mps", o("MAWMpsBridgeHandlers").mpsBridgeHandlers),
        await p.startComms(),
        d.LOG(
          c || (c = babelHelpers.taggedTemplateLiteralLoose(["Worker inited"])),
        ),
        o("WAWaitForComms").unblockComms(),
        o("MAWQplProxy").sendQplPointThroughBridge(
          r("qpl")._(25310776, "6155"),
          "igd_backend_setup_end",
        ));
    }
    l.startIGDBackend = m;
  },
  98,
);
