__d(
  "WAWebRefreshGroupHistoryStoredHintJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebBackendApi",
    "WAWebDBMessageSerialization",
    "WAWebGroupHistoryCountedTimestamp",
    "WAWebGroupHistoryStoredHint",
    "WAWebGroupHistoryStoredHintGating",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaMessage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "fillGroupHistoryStoredHint",
          async function () {
            try {
              await u(t);
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "group history stored hint fill failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("group-history-stored-hint-fill-failed");
            }
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.LOW },
        )
        .waitUntilCompleted();
    }
    async function u(e) {
      if (
        o("WAWebGroupHistoryStoredHintGating").isGroupHistoryStoredHintEnabled()
      ) {
        var t = await o("WAWebSchemaMessage")
            .getMessageTable()
            .get(e.toString()),
          n = t != null ? d(t) : null;
        if (n != null) {
          var r = await o(
            "WAWebGroupHistoryCountedTimestamp",
          ).getNewestCountedGroupHistoryTimestamp(
            o("WAWebSchemaMessage").getMessageTable(),
            e.remote,
            n,
          );
          if (
            !(
              r == null ||
              r ===
                o("WAWebGroupHistoryStoredHint")
                  .GROUP_HISTORY_NO_COUNTED_MESSAGES
            )
          ) {
            var a = { internalId: n, timestamp: null };
            (await c(e, a, r)) &&
              o("WAWebBackendApi").frontendFireAndForget(
                "updateStoredGroupHistoryHints",
                {
                  updates: [
                    { messageKey: e, expectedTimestamp: null, timestamp: r },
                  ],
                },
              );
          }
        }
      }
    }
    function c(e, t, n) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["message"], async function (r) {
          var a,
            i = r[0],
            l = await i.get(e.toString());
          return l == null ||
            l.internalId !== t.internalId ||
            ((a = l.groupHistoryLastCountedMessageTimestamp) != null
              ? a
              : null) !== t.timestamp ||
            !o("WAWebGroupHistoryStoredHint").isGroupHistoryStoredHintEvent(
              o("WAWebDBMessageSerialization").messageFromDbRow(l),
            )
            ? !1
            : (await i.merge(e.toString(), {
                groupHistoryLastCountedMessageTimestamp: n,
              }),
              !0);
        });
    }
    function d(e) {
      return e.groupHistoryLastCountedMessageTimestamp != null ||
        !o("WAWebGroupHistoryStoredHint").isGroupHistoryStoredHintEvent(
          o("WAWebDBMessageSerialization").messageFromDbRow(e),
        )
        ? null
        : e.internalId;
    }
    l.fillGroupHistoryStoredHint = s;
  },
  98,
);
