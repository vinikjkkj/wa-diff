__d(
  "WebBloksAsyncActionWithDataManifest",
  [
    "WebBloksAsyncActions",
    "WebBloksScriptDebuggingUtils",
    "webBloksPerformanceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r, a, i) {
      (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-async-action-start",
        { detail: { appId: t } },
      ),
        o("WebBloksAsyncActions")
          .executeAsyncAction(e, t, n)
          .then(function (t) {
            (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
              "--web-bloks-async-action-success",
            ),
              e.execute(r, [t, e.bloksContext]));
          })
          .catch(function (t) {
            (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
              "--web-bloks-async-action-error",
            ),
              o("WebBloksScriptDebuggingUtils").logScriptError(
                e.objectSet,
                t,
                null,
                e,
              ),
              e.execute(a, [e.bloksContext]));
          })
          .catch(function (t) {
            (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
              "--web-bloks-async-action-error",
            ),
              e.objectSet.environment.logger.mustfix(
                "AsyncAction: failed to run error handler",
                t,
              ));
          }));
    }
    l.default = e;
  },
  98,
);
