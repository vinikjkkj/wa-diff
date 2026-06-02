__d(
  "WAWebRenameAiThreadAction",
  [
    "WALogger",
    "WAWebAiThreadRenameSync",
    "WAWebAiThreadTypeUtils",
    "WAWebThreadJourneyLogger",
    "WAWebThreadMetadataBulkJob",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(t, n, a) {
      if (
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[renameAiThreadAction]: Start",
            ])),
        ),
        t.title !== n)
      ) {
        (o("WAWebThreadJourneyLogger").ThreadJourneyLogger.logThreadRename(
          t.id,
          t.creationTimestamp,
        ),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[renameAiThreadAction]: Call renameAiThreadTitle job",
              ])),
          ));
        var i = {
          threadId: t.id,
          chatId: a,
          lastMessageTimestamp: t.lastMessageTimestamp,
          creationTimestamp: t.creationTimestamp,
          aiThreadInfo: o("WAWebAiThreadTypeUtils").getAiThreadInfoFromType(
            n,
            t.aiThreadType,
          ),
        };
        (await o(
          "WAWebThreadMetadataBulkJob",
        ).bulkCreateOrUpdateThreadsMetadata([i]),
          await r("WAWebAiThreadRenameSync").sendMutation(t.id, n),
          t.set({ title: n }));
      }
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[renameAiThreadAction]: End",
          ])),
      );
    }
    l.renameAiThreadAction = c;
  },
  98,
);
