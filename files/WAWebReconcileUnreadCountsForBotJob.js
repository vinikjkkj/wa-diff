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
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "reconcileForBot",
          async function () {
            var n,
              a = o("WAWebWidToJid").widToChatJid(t),
              i = o(
                "WAWebThreadsMetadataIdUtils",
              ).craftThreadsMetadataInternalIdPrefixForChatAndThreadType(
                a,
                o("WAWebThreadUtils").ThreadType.AiThread,
              ),
              l = await o("WAWebSchemaThreadsMetadata")
                .getThreadsMetadataTable()
                .startsWithAnyOf(["internalId"], [i]),
              u = r("sumBy")(l, function (e) {
                var t;
                return (t = e.unreadCount) != null ? t : 0;
              }),
              c = t.toString(),
              d = await o("WAWebSchemaChat").getChatTable().bulkGet([c]),
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
                await o("WAWebSchemaChat")
                  .getChatTable()
                  .bulkCreateOrMerge([{ id: c, unreadCount: u }]),
                { unreadCount: u })
              : (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[reconcile-unread] unread=",
                      " matches sum=",
                      "",
                    ])),
                  p,
                  u,
                ),
                null);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.reconcileForBot = u;
  },
  98,
);
