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
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "reconcileForBot",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n,
              r = o("WAWebWidToJid").widToChatJid(t),
              a = o(
                "WAWebThreadsMetadataIdUtils",
              ).craftThreadsMetadataInternalIdPrefixForChatAndThreadType(
                r,
                o("WAWebThreadUtils").ThreadType.AiThread,
              ),
              i = yield o("WAWebSchemaThreadsMetadata")
                .getThreadsMetadataTable()
                .startsWithAnyOf(["internalId"], [a]),
              l = i.reduce(function (e, t) {
                var n;
                return e + ((n = t.unreadCount) != null ? n : 0);
              }, 0),
              u = t.toString(),
              c = yield o("WAWebSchemaChat").getChatTable().bulkGet([u]),
              d = c[0];
            if (d == null) return null;
            var m = (n = d.unreadCount) != null ? n : 0;
            return m !== l
              ? (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[reconcile-unread] chat.unreadCount=",
                      " threadSum=",
                      ", fixing",
                    ])),
                  m,
                  l,
                ),
                yield o("WAWebSchemaChat")
                  .getChatTable()
                  .bulkCreateOrMerge([{ id: u, unreadCount: l }]),
                { unreadCount: l })
              : (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[reconcile-unread] chat.unreadCount=",
                      " already matches threadSum=",
                      ", no fix needed",
                    ])),
                  m,
                  l,
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
