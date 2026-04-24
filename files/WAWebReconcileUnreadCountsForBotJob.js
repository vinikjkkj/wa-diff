__d(
  "WAWebReconcileUnreadCountsForBotJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaChat",
    "WAWebSchemaThreadsMetadata",
    "WAWebThreadUtils",
    "WAWebThreadsMetadataIdUtils",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "reconcileForBot",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n,
              a = o("WAWebWidToJid").widToChatJid(t),
              i = o(
                "WAWebThreadsMetadataIdUtils",
              ).craftThreadsMetadataInternalIdPrefixForChatAndThreadType(
                a,
                o("WAWebThreadUtils").ThreadType.AiThread,
              ),
              l = yield o("WAWebSchemaThreadsMetadata")
                .getThreadsMetadataTable()
                .startsWithAnyOf(["internalId"], [i]),
              u = r("sumBy")(l, function (e) {
                var t;
                return (t = e.unreadCount) != null ? t : 0;
              }),
              c = t.toString(),
              d = yield o("WAWebSchemaChat").getChatTable().bulkGet([c]),
              m = d[0];
            if (m == null) return null;
            var p = (n = m.unreadCount) != null ? n : 0;
            return p !== u
              ? (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[reconcile-unread] chat.unreadCount=",
                      " threadSum=",
                      ", fixing",
                    ])),
                  p,
                  u,
                ),
                yield o("WAWebSchemaChat")
                  .getChatTable()
                  .bulkCreateOrMerge([{ id: c, unreadCount: u }]),
                { unreadCount: u })
              : (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[reconcile-unread] chat.unreadCount=",
                      " already matches threadSum=",
                      ", no fix needed",
                    ])),
                  p,
                  u,
                ),
                null);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.reconcileForBot = u;
  },
  98,
);
