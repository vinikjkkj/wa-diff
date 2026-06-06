__d(
  "WAWebMessageProcessDBPipeline",
  [
    "WALogger",
    "WAWebHandleOrphansForNewMsg",
    "WAWebMessageProcessorCache",
    "WAWebWamWorkerOfflineProcessReporter",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n) {
      return o("WAWebMessageProcessorCache")
        .messageProcessorCache.addMessages(
          t.map(function (e) {
            return { msg: e };
          }),
          n,
        )
        .then(async function () {
          (o(
            "WAWebWamWorkerOfflineProcessReporter",
          ).WorkerOfflineResumeReporter.updateProcessedMessageCount(),
            n &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "process msgs orphans ",
                    "",
                  ])),
                t.length,
              ),
              await Promise.all(
                t.map(function (e) {
                  return o(
                    "WAWebHandleOrphansForNewMsg",
                  ).handleOrphansForNewMsg(e);
                }),
              )));
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[processRenderableMessages] cache->DB write failed: ",
                  "",
                ])),
              e,
            )
            .tags("messaging")
            .sendLogs(
              "processRenderableMessages write to DB from cache, failed",
            );
        });
    }
    l.processMsgDataDBPipeline = u;
  },
  98,
);
