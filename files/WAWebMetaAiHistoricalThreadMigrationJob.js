__d(
  "WAWebMetaAiHistoricalThreadMigrationJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WATimeUtils",
    "WAWebAiThreadCreationUtils",
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotDeviceCapabilities",
    "WAWebBotUtils",
    "WAWebDBMessageUtils",
    "WAWebDbEncryptionKey",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "WAWebThreadMetadataBulkJob",
    "WAWebUserPrefsBot",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v = 100;
    function S() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "migrateMetaAiMessagesToHistoricalThread",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[migrateMetaAiMessagesToHistoricalThread]: Starting migration",
                ])),
            );
            try {
              yield R(v);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[migrateMetaAiMessagesToHistoricalThread]: Error migrating messages: ",
                      "",
                    ])),
                  e,
                )
                .tags("ai-threads")
                .sendLogs(
                  "migrateMetaAiMessagesToHistoricalThread: Error migrating messages",
                );
            }
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[migrateMetaAiMessagesToHistoricalThread]: Migration completed",
                ])),
            );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT },
        )
        .fireAndForget();
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            (yield o(
              "WAWebDbEncryptionKey",
            ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
            o("WAWebUserPrefsBot").isMetaAIThreadMigrationComplete())
          ) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[migrateMetaAiMessagesToHistoricalThread]: Migration already complete, skipping",
                ])),
            );
            return;
          }
          if (yield D()) {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[migrateMetaAiMessagesToHistoricalThread]: All messages migrated and ai threads infra enabled, marking migration complete",
                ])),
            ),
              yield o(
                "WAWebUserPrefsBot",
              ).markMetaAIThreadMigrationStateAsComplete());
            return;
          }
          var t = yield k(e);
          if (t.length === 0) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[migrateMetaAiMessagesToHistoricalThread]: No messages to migrate for ",
                  "",
                ])),
              o("WAWebBotUtils").META_BOT_PN_WID.toString(),
            );
            return;
          }
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[migrateMetaAiMessagesToHistoricalThread]: Found ",
                " messages to process",
              ])),
            t.length,
          );
          var r = t.filter(function (e) {
            return (
              e.internalThreadIDs == null || e.internalThreadIDs.length === 0
            );
          });
          if (r.length === 0) {
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[migrateMetaAiMessagesToHistoricalThread]: All messages already have thread IDs",
                ])),
            ),
              yield I(t));
            return;
          }
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[migrateMetaAiMessagesToHistoricalThread]: ",
                " messages need migration",
              ])),
            r.length,
          );
          var a = E(r),
            i = a.messageUpdates,
            l = a.threadUpdates;
          try {
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message", "thread-metadata"],
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e[0],
                        n = e[1];
                      (yield t.bulkCreateOrMerge(i),
                        yield o(
                          "WAWebThreadMetadataBulkJob",
                        ).bulkCreateOrUpdateThreadsMetadata(l));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              );
          } catch (e) {
            if (e != null && typeof e == "object" && e.name === "AbortError") {
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[migrateMetaAiMessagesToHistoricalThread]: Transaction aborted, will retry on next scheduled run",
                  ])),
              );
              return;
            }
            throw e;
          }
          (yield I(t),
            o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[migrateMetaAiMessagesToHistoricalThread]: Successfully migrated ",
                  " messages",
                ])),
              r.length,
            ));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t = o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId(),
        n = { aiThreadType: o("WAWebAiThreadTypeUtils").AiThreadType.Default },
        r = e.map(function (e) {
          var n,
            r = (n = e.internalThreadIDs) != null ? n : [],
            a =
              e.internalId != null
                ? o("WAWebDBMessageUtils").getInChatMsgId(e.internalId)
                : 0,
            i = o("WAWebDBMessageUtils").craftInternalThreadId(a, t);
          return { id: e.id, internalThreadIDs: [].concat(r, [i]) };
        }),
        a = e[0],
        i = e[e.length - 1];
      if (
        (a == null ? void 0 : a.t) != null &&
        (i == null ? void 0 : i.t) != null
      ) {
        var l = [
          {
            threadId: t,
            chatId: o("WAWebBotUtils").META_BOT_PN_WID,
            creationTimestamp: o("WATimeUtils").castToUnixTime(a.t),
            lastMessageTimestamp: o("WATimeUtils").castToUnixTime(i.t),
            aiThreadInfo: n,
          },
        ];
        return { messageUpdates: r, threadUpdates: l };
      }
      return (
        o("WALogger").WARN(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[migrateMetaAiMessagesToHistoricalThread]: Messages missing timestamp (t) values",
            ])),
        ),
        { messageUpdates: r, threadUpdates: [] }
      );
    }
    function k(e) {
      var t,
        n = o("WAWebUserPrefsBot").getMetaAIThreadMigrationState(),
        r =
          (t = n == null ? void 0 : n.lastConvertedMessageInternalId) != null
            ? t
            : o("WAWebDBMessageUtils").beginningOfChat(
                o("WAWebBotUtils").META_BOT_PN_WID,
              ),
        a = o("WAWebDBMessageUtils").endOfChat(
          o("WAWebBotUtils").META_BOT_PN_WID,
        );
      return (
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[migrateMetaAiMessagesToHistoricalThread]: Fetching messages for ",
              " from ",
              "",
            ])),
          o("WAWebBotUtils").META_BOT_PN_WID.toString(),
          r,
        ),
        o("WAWebSchemaMessage")
          .getMessageTable()
          .between(["internalId"], r, a, {
            lowerInclusive: !1,
            upperInclusive: !1,
            limit: e,
          })
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e[e.length - 1];
          (t == null ? void 0 : t.internalId) != null
            ? yield o("WAWebUserPrefsBot").setMetaAIThreadMigrationState({
                lastConvertedMessageInternalId: t.internalId,
                migrationProgress:
                  o("WAWebUserPrefsBot").MetaAIThreadMigrationProgress
                    .IN_PROGRESS,
              })
            : o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[migrateMetaAiMessagesToHistoricalThread]: Last message has no internalId",
                  ])),
              );
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsBot").getMetaAIThreadMigrationState();
          if (
            e == null ||
            e.migrationProgress !==
              o("WAWebUserPrefsBot").MetaAIThreadMigrationProgress.IN_PROGRESS
          )
            return !1;
          var t = e.lastConvertedMessageInternalId,
            n = yield $(t);
          if (!n) return !1;
          var r = yield o(
            "WAWebBotDeviceCapabilities",
          ).primaryHasAiThreadSupport();
          return !(
            !r || !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled()
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebDBMessageUtils").endOfChat(
              o("WAWebBotUtils").META_BOT_PN_WID,
            ),
            n = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .betweenCount(["internalId"], e, t, {
                lowerInclusive: !1,
                upperInclusive: !1,
                limit: 1,
              });
          return n === 0;
        })),
        P.apply(this, arguments)
      );
    }
    ((l.migrateMetaAiMessagesToHistoricalThread = S),
      (l.migrateMessagesForMetaAiBot = R),
      (l.shouldMarkMigrationComplete = D));
  },
  98,
);
