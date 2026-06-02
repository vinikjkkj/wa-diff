__d(
  "WAWebChatClearBridge",
  [
    "WANullthrows",
    "WATimeUtils",
    "WAWebApiActiveMessageRanges",
    "WAWebBackendApi",
    "WAWebClearChatSync",
    "WAWebDBQueryAndRemoveMessageHistory",
    "WAWebDBReportingTokenUtils",
    "WAWebMessageRangeUtils",
    "WAWebPersistedJobDefinitions",
    "WAWebPersistedJobManagerWorkerCompatible",
    "WAWebProtobufSyncAction.pb",
    "WAWebThreadMetadataJob",
    "WAWebWidToJid",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var a = o("WATimeUtils").unixTimeMs(),
        i = await Promise.all([
          r("WAWebClearChatSync").getClearChatMutation(a, e.id, !n, !1, !1),
          r("WAWebClearChatSync").getClearChatMutation(a, e.id, !n, !1, !0),
        ]),
        l = i[0],
        s = i[1],
        u;
      return (
        await o("WAWebMessageRangeUtils").lockForMessageRangeSync(
          ["message", "message-association"],
          [l],
          async function () {
            var t;
            await o("WAWebApiActiveMessageRanges").addActiveMessageRange(
              e.id.toString(),
              o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                "clearChat",
                { deleteStarred: !n },
              ),
              s.binarySyncAction,
            );
            var a = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                s.binarySyncAction,
              ),
              i = r("WANullthrows")(
                (t = a.clearChatAction) == null ? void 0 : t.messageRange,
              );
            u = await o(
              "WAWebDBQueryAndRemoveMessageHistory",
            ).queryAndRemoveMessagesInMessageRange(e.id, i, {
              skipStarred: n,
              skipRecentSystemMessages: !1,
            });
          },
        ),
        await o("WAWebThreadMetadataJob").deleteAllThreadsForChat(
          o("WAWebWidToJid").widToChatJid(e.id),
        ),
        { result: u }
      );
    }
    function s(t, n, r) {
      return e(t, n, r).then(async function (e) {
        if (e.result != null && e.result.length > 0) {
          var n = e.result;
          (await o("WAWebBackendApi").frontendSendAndReceive(
            "deleteModelsForLastAddOnPreview",
            { messagesIds: n },
          ),
            await o("WAWebPersistedJobManagerWorkerCompatible")
              .getJobManager()
              .waitUntilPersisted(
                o("WAWebPersistedJobDefinitions").jobSerializers.deleteAddOns(
                  t.id.toString(),
                  n,
                ),
              ),
            o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(n, {
              removeWholeRow: !0,
            }));
        }
        return e;
      });
    }
    l.sendClear = s;
  },
  98,
);
