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
          async function () {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[migrateMetaAiMessagesToHistoricalThread]: Starting migration",
                ])),
            );
            try {
              await R(v);
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
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT },
        )
        .fireAndForget();
    }
    async function R(e) {
      if (
        (await o(
          "WAWebDbEncryptionKey",
        ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
        o("WAWebUserPrefsBot").isMetaAIThreadMigrationComplete())
      ) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[migrateMetaAiMessagesToHistoricalThread]: Migration already complete, skipping",
            ])),
        );
        return;
      }
      if (await I()) {
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[migrateMetaAiMessagesToHistoricalThread]: All messages migrated and ai threads infra enabled, marking migration complete",
            ])),
        ),
          await o(
            "WAWebUserPrefsBot",
          ).markMetaAIThreadMigrationStateAsComplete());
        return;
      }
      var t = await E(e);
      if (t.length === 0) {
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[migrateMetaAiMessagesToHistoricalThread]: No messages to migrate for ",
              "",
            ])),
          o("WAWebBotUtils").META_BOT_PN_WID.toString(),
        );
        return;
      }
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "[migrateMetaAiMessagesToHistoricalThread]: Found ",
            " messages to process",
          ])),
        t.length,
      );
      var n = t.filter(function (e) {
        return e.internalThreadIDs == null || e.internalThreadIDs.length === 0;
      });
      if (n.length === 0) {
        (o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "[migrateMetaAiMessagesToHistoricalThread]: All messages already have thread IDs",
            ])),
        ),
          await k(t));
        return;
      }
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "[migrateMetaAiMessagesToHistoricalThread]: ",
            " messages need migration",
          ])),
        n.length,
      );
      var r = L(n),
        a = r.messageUpdates,
        i = r.threadUpdates;
      try {
        await o("WAWebModelStorageUtils")
          .getStorage()
          .lock(["message", "thread-metadata"], async function (e) {
            var t = e[0],
              n = e[1];
            (await t.bulkCreateOrMerge(a),
              await o(
                "WAWebThreadMetadataBulkJob",
              ).bulkCreateOrUpdateThreadsMetadata(i));
          });
      } catch (e) {
        if (e != null && typeof e == "object" && e.name === "AbortError") {
          o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[migrateMetaAiMessagesToHistoricalThread]: Transaction aborted, will retry on next scheduled run",
              ])),
          );
          return;
        }
        throw e;
      }
      (await k(t),
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[migrateMetaAiMessagesToHistoricalThread]: Successfully migrated ",
              " messages",
            ])),
          n.length,
        ));
    }
    function L(e) {
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
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[migrateMetaAiMessagesToHistoricalThread]: Messages missing timestamp (t) values",
            ])),
        ),
        { messageUpdates: r, threadUpdates: [] }
      );
    }
    function E(e) {
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
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
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
    async function k(e) {
      var t = e[e.length - 1];
      (t == null ? void 0 : t.internalId) != null
        ? await o("WAWebUserPrefsBot").setMetaAIThreadMigrationState({
            lastConvertedMessageInternalId: t.internalId,
            migrationProgress:
              o("WAWebUserPrefsBot").MetaAIThreadMigrationProgress.IN_PROGRESS,
          })
        : o("WALogger").WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "[migrateMetaAiMessagesToHistoricalThread]: Last message has no internalId",
              ])),
          );
    }
    async function I() {
      var e = o("WAWebUserPrefsBot").getMetaAIThreadMigrationState();
      if (
        e == null ||
        e.migrationProgress !==
          o("WAWebUserPrefsBot").MetaAIThreadMigrationProgress.IN_PROGRESS
      )
        return !1;
      var t = e.lastConvertedMessageInternalId,
        n = await T(t);
      if (!n) return !1;
      var r = await o("WAWebBotDeviceCapabilities").primaryHasAiThreadSupport();
      return !(!r || !o("WAWebBotBaseGating").isAiChatThreadsInfraEnabled());
    }
    async function T(e) {
      var t = o("WAWebDBMessageUtils").endOfChat(
          o("WAWebBotUtils").META_BOT_PN_WID,
        ),
        n = await o("WAWebSchemaMessage")
          .getMessageTable()
          .betweenCount(["internalId"], e, t, {
            lowerInclusive: !1,
            upperInclusive: !1,
            limit: 1,
          });
      return n === 0;
    }
    ((l.migrateMetaAiMessagesToHistoricalThread = S),
      (l.migrateMessagesForMetaAiBot = R),
      (l.shouldMarkMigrationComplete = I));
  },
  98,
);
