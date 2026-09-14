__d(
  "WAWebMessageProcessDBPipeline",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebHandleOrphansForNewMsg",
    "WAWebMessageProcessorCache",
    "WAWebWamWorkerOfflineProcessReporter",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 1e4;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield f(e.msgData, e.flushImmediatly);
          e.flushImmediatly && t && g(e.msgData, e.uiNotified);
        })),
        _.apply(this, arguments)
      );
    }
    function f(t, n) {
      return o("WAWebMessageProcessorCache")
        .messageProcessorCache.addMessages(
          t.map(function (e) {
            return { msg: e };
          }),
          n,
        )
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
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            (t.isSettled || (yield y(t.promise)),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "process msgs orphans ",
                    "",
                  ])),
                e.length,
              ),
              yield (d || (d = n("Promise"))).all(
                e.map(function (e) {
                  return o(
                    "WAWebHandleOrphansForNewMsg",
                  ).handleOrphansForNewMsg(e);
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              e,
              m,
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
        })),
        C.apply(this, arguments)
      );
    }
    l.processMsgDataDBPipeline = p;
  },
  98,
);
