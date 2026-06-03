__d(
  "WAWebChatClearBridge",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = o("WATimeUtils").unixTimeMs(),
            s = yield (e || (e = n("Promise"))).all([
              r("WAWebClearChatSync").getClearChatMutation(l, t.id, !i, !1, !1),
              r("WAWebClearChatSync").getClearChatMutation(l, t.id, !i, !1, !0),
            ]),
            u = s[0],
            c = s[1],
            d;
          return (
            yield o("WAWebMessageRangeUtils").lockForMessageRangeSync(
              ["message", "message-association"],
              [u],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var e;
                yield o("WAWebApiActiveMessageRanges").addActiveMessageRange(
                  t.id.toString(),
                  o("WAWebApiActiveMessageRanges").getActiveRangeAction(
                    "clearChat",
                    { deleteStarred: !i },
                  ),
                  c.binarySyncAction,
                );
                var n = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                    c.binarySyncAction,
                  ),
                  a = r("WANullthrows")(
                    (e = n.clearChatAction) == null ? void 0 : e.messageRange,
                  );
                d = yield o(
                  "WAWebDBQueryAndRemoveMessageHistory",
                ).queryAndRemoveMessagesInMessageRange(t.id, a, {
                  skipStarred: i,
                  skipRecentSystemMessages: !1,
                });
              }),
            ),
            yield o("WAWebThreadMetadataJob").deleteAllThreadsForChat(
              o("WAWebWidToJid").widToChatJid(t.id),
            ),
            { result: d }
          );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, r) {
      return s(e, t, r).then(
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            if (t.result != null && t.result.length > 0) {
              var n = t.result;
              (yield o("WAWebBackendApi").frontendSendAndReceive(
                "deleteModelsForLastAddOnPreview",
                { messagesIds: n },
              ),
                yield o("WAWebPersistedJobManagerWorkerCompatible")
                  .getJobManager()
                  .waitUntilPersisted(
                    o(
                      "WAWebPersistedJobDefinitions",
                    ).jobSerializers.deleteAddOns(e.id.toString(), n),
                  ),
                o("WAWebDBReportingTokenUtils").handleDeleteReportingInfos(n, {
                  removeWholeRow: !0,
                }));
            }
            return t;
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      );
    }
    l.sendClear = c;
  },
  98,
);
