__d(
  "WAWebAiThreadPinSyncUtils",
  [
    "WALogger",
    "WALongInt",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebBackendApi",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaThreadsMetadata",
    "WAWebSyncdDb",
    "WAWebThreadId",
    "WAWebThreadMetadataBulkJob",
    "WAWebThreadUtils",
    "WAWebThreadsMetadataIdUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3;
    function u(e, t, n) {
      var r,
        a,
        i = o("WATimeUtils").castToUnixTime(
          (r = t.lastMessageTimestamp) != null ? r : 0,
        ),
        l = o("WATimeUtils").castToUnixTime(
          (a = t.creationTimestamp) != null ? a : 0,
        ),
        s = {
          threadId: e,
          chatId: e.key.remote,
          lastMessageTimestamp: i,
          creationTimestamp: l,
          pinThreadTimestamp: n,
        };
      return o("WAWebThreadMetadataBulkJob")
        .bulkCreateOrUpdateThreadsMetadata([s])
        .then(function () {
          o("WAWebBackendApi").frontendFireAndForget("updateChatAiThreads", {
            aiThreads: [s],
          });
        });
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebWidFactory").createWid(e),
            n = o(
              "WAWebThreadsMetadataIdUtils",
            ).craftThreadsMetadataInternalIdPrefixForChatAndThreadType(
              o("WAWebWidToJid").widToChatJid(t),
              o("WAWebThreadUtils").ThreadType.AiThread,
            ),
            a = yield o("WAWebSchemaThreadsMetadata")
              .getThreadsMetadataTable()
              .startsWithAnyOf(["internalId"], [n]),
            i = [];
          for (var l of a) {
            var s = l.pinThreadTimestamp;
            if (s != null && s > 0 && l.aiThreadInfo != null) {
              var u = r("WAWebThreadId").tryFrom(l.id);
              u != null && i.push({ threadId: u, timestamp: s, dbRow: l });
            }
          }
          var c = yield m(e);
          return [].concat(i, c);
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebSyncdDb").getSyncActionsRows(
              ["action"],
              [o("WASyncdConst").Actions.AiThreadPin],
            ),
            a = [];
          for (var i of n)
            if (i.actionState === o("WASyncdConst").SyncActionState.Orphan)
              try {
                var l = JSON.parse(i.index);
                if (l.length < s) continue;
                var u = l[1];
                if (u !== t) continue;
                var c = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                  i.binarySyncData,
                ).value;
                if (
                  (c == null ? void 0 : c.threadPinAction) == null ||
                  (c == null ? void 0 : c.threadPinAction.pinned) !== !0
                )
                  continue;
                var d = l[2];
                if (r("WAWebWid").isWid(u)) {
                  var m = o("WAWebWidFactory").createWid(u);
                  if (m.isBot()) {
                    var p,
                      _ = o("WAWebWidFactory").asBotWidOrThrow(m),
                      f = o(
                        "WAWebAiThreadCreationUtils",
                      ).createAiThreadFromMutationIndex(_, d);
                    a.push({
                      threadId: f,
                      timestamp: o("WALongInt").numberOrThrowIfTooLarge(
                        (p = c.timestamp) != null ? p : 0,
                      ),
                      isOrphan: !0,
                    });
                  }
                }
              } catch (t) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][ai-thread-pin] failed to parse orphan sync action row",
                    ])),
                );
                continue;
              }
          return a;
        })),
        p.apply(this, arguments)
      );
    }
    ((l.updatePinState = u), (l.getLocalThreadPins = c));
  },
  98,
);
