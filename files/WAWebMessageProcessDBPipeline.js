__d(
  "WAWebMessageProcessDBPipeline",
  [
    "Promise",
    "WALogger",
    "WAWebHandleOrphansForNewMsg",
    "WAWebMessageProcessorCache",
    "WAWebWamWorkerOfflineProcessReporter",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, r) {
      return o("WAWebMessageProcessorCache")
        .messageProcessorCache.addMessages(
          t.map(function (e) {
            return { msg: e };
          }),
          r,
        )
        .then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o(
              "WAWebWamWorkerOfflineProcessReporter",
            ).WorkerOfflineResumeReporter.updateProcessedMessageCount(),
              r &&
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "process msgs orphans ",
                      "",
                    ])),
                  t.length,
                ),
                yield (u || (u = n("Promise"))).all(
                  t.map(function (e) {
                    return o(
                      "WAWebHandleOrphansForNewMsg",
                    ).handleOrphansForNewMsg(e);
                  }),
                )));
          }),
        )
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
    l.processMsgDataDBPipeline = c;
  },
  98,
);
