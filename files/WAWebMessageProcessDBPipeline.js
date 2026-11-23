__d(
  "WAWebMessageProcessDBPipeline",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebHandleOrphansForNewMsg",
    "WAWebMessageProcessorCache",
    "WAWebWamWorkerOfflineProcessReporter",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 1e4;
    function m(e) {
      var t;
      try {
        t = o("WAWebMessageProcessorCache").messageProcessorCache.addMessages(
          e.msgData.map(function (e) {
            return { msg: e };
          }),
          e.flushImmediatly,
        );
      } catch (e) {
        var n = Promise.reject(e);
        return { done: n, written: n };
      }
      return { done: p(e, t), written: t };
    }
    async function p(e, t) {
      var n = await _(t);
      e.flushImmediatly && n && f(e.msgData, e.uiNotified);
    }
    function _(t) {
      return t
        .then(function () {
          return (
            o(
              "WAWebWamWorkerOfflineProcessReporter",
            ).WorkerOfflineResumeReporter.updateProcessedMessageCount(),
            !0
          );
        })
        .catch(function (t) {
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[processRenderableMessages] cache->DB write failed: ",
                    "",
                  ])),
                t,
              )
              .tags("messaging")
              .sendLogs(
                "processRenderableMessages write to DB from cache, failed",
              ),
            !1
          );
        });
    }
    async function f(e, t) {
      try {
        (t.isSettled || (await g(t.promise)),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "process msgs orphans ",
                "",
              ])),
            e.length,
          ),
          await Promise.all(
            e.map(function (e) {
              return o("WAWebHandleOrphansForNewMsg").handleOrphansForNewMsg(e);
            }),
          ));
      } catch (e) {
        o("WALogger")
          .ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "processMsgDataDBPipeline: draining orphans failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .tags("messaging")
          .sendLogs("orphan-drain-failed", { sampling: 0.01 });
      }
    }
    async function g(e) {
      try {
        await o("WAPromiseTimeout").promiseTimeout(
          e,
          d,
          "orphan drain waiting on UI notification",
        );
      } catch (e) {
        var t =
          e instanceof o("WACustomError").TimeoutError
            ? "timed out"
            : "rejected";
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "processMsgDataDBPipeline: UI notification ",
                ", draining anyway",
              ])),
            t,
          )
          .catching(r("getErrorSafe")(e))
          .tags("messaging")
          .sendLogs("orphan-drain-ui-notification-unsettled", {
            sampling: 0.1,
          });
      }
    }
    l.processMsgDataDBPipeline = m;
  },
  98,
);
