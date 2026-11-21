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
      var t;
      try {
        t = o("WAWebMessageProcessorCache").messageProcessorCache.addMessages(
          e.msgData.map(function (e) {
            return { msg: e };
          }),
          e.flushImmediatly,
        );
      } catch (e) {
        var r = (d || (d = n("Promise"))).reject(e);
        return { done: r, written: r };
      }
      return { done: _(e, t), written: t };
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield g(t);
          e.flushImmediatly && n && h(e.msgData, e.uiNotified);
        })),
        f.apply(this, arguments)
      );
    }
    function g(t) {
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
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            (t.isSettled || (yield C(t.promise)),
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        b.apply(this, arguments)
      );
    }
    l.processMsgDataDBPipeline = p;
  },
  98,
);
