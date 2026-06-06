__d(
  "WAWebRenameAiThreadAction",
  [
    "WALogger",
    "WAWebAiThreadRenameSync",
    "WAWebAiThreadTypeUtils",
    "WAWebThreadJourneyLogger",
    "WAWebThreadMetadataBulkJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
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
            (yield o(
              "WAWebThreadMetadataBulkJob",
            ).bulkCreateOrUpdateThreadsMetadata([i]),
              yield r("WAWebAiThreadRenameSync").sendMutation(t.id, n),
              t.set({ title: n }));
          }
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[renameAiThreadAction]: End",
              ])),
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.renameAiThreadAction = c;
  },
  98,
);
