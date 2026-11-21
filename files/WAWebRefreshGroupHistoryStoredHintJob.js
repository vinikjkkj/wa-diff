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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "fillGroupHistoryStoredHint",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              yield u(t);
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
          }),
          { priority: o("WAJobOrchestratorTypes").JobPriority.LOW },
        )
        .waitUntilCompleted();
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o(
              "WAWebGroupHistoryStoredHintGating",
            ).isGroupHistoryStoredHintEnabled()
          ) {
            var t = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .get(e.toString()),
              n = t != null ? m(t) : null;
            if (n != null) {
              var r = yield o(
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
                (yield d(e, a, r)) &&
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateStoredGroupHistoryHints",
                    {
                      updates: [
                        {
                          messageKey: e,
                          expectedTimestamp: null,
                          timestamp: r,
                        },
                      ],
                    },
                  );
              }
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, r) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(
          ["message"],
          (function () {
            var a = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                var a,
                  i = n[0],
                  l = yield i.get(e.toString());
                return l == null ||
                  l.internalId !== t.internalId ||
                  ((a = l.groupHistoryLastCountedMessageTimestamp) != null
                    ? a
                    : null) !== t.timestamp ||
                  !o(
                    "WAWebGroupHistoryStoredHint",
                  ).isGroupHistoryStoredHintEvent(
                    o("WAWebDBMessageSerialization").messageFromDbRow(l),
                  )
                  ? !1
                  : (yield i.merge(e.toString(), {
                      groupHistoryLastCountedMessageTimestamp: r,
                    }),
                    !0);
              },
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        );
    }
    function m(e) {
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
