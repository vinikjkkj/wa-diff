__d(
  "WAWebSyncdMetricCriticalBootstrapStage",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebCollectionHandlerWamMutation",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = n("$InternalEnum").Mirrored([
        "ABOUT_TO_APPLY_MUTATIONS",
        "APPLIED_MUTATIONS",
        "MUTATIONS_DECRYPTED",
        "REQUEST_BUILT",
        "RESPONSE_RECEIVED",
        "RESPONSE_PARSED_VALID",
        "ENTERED_RETRY_MODE",
        "MISSING_KEYS_RECEIVED",
      ]);
    function c(e) {
      (o(
        "WAWebSyncdCriticalBootstrapProcessingApi",
      ).logCriticalBootstrapStageIfNecessary(
        o("WAWebWamEnumBootstrapAppStateDataStageCode")
          .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.MUTATIONS_DECRYPTED,
      ),
        e.forEach(function (e) {
          var t = e.binarySyncData,
            n = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
              t,
            ),
            r = n.value;
          if (r != null) {
            var a;
            (r.archiveChatAction
              ? (a = r.archiveChatAction.messageRange)
              : r.markChatAsReadAction
                ? (a = r.markChatAsReadAction.messageRange)
                : r.clearChatAction
                  ? (a = r.clearChatAction.messageRange)
                  : r.deleteChatAction && (a = r.deleteChatAction.messageRange),
              a != null &&
                o(
                  "WAWebCollectionHandlerWamMutation",
                ).logMetricsForMutationLength(a.messages.length));
          }
        }));
    }
    function d(t) {
      var n,
        r =
          t == null || (n = t.string) == null
            ? void 0
            : n.criticalBootstrapStage;
      if (r == null)
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: missing bootstrap stage",
              ])),
          ),
          null
        );
      var a = u.cast(r);
      return a == null
        ? (o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: unknown bootstrap stage ",
                "",
              ])),
            r,
          ),
          null)
        : { type: a };
    }
    ((l.SyncdCriticalBootstrapStageType = u),
      (l.reportSyncdDecryptedMutations = c),
      (l.convertSyncdCriticalBootstrapStageFromAnnotations = d));
  },
  98,
);
