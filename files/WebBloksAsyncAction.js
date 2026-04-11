__d(
  "WebBloksAsyncAction",
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
          .then(function () {
            (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
              "--web-bloks-async-action-success",
            ),
              e.executeCatch(r, []));
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
              e.executeCatch(a, []));
          }));
    }
    l.default = e;
  },
  98,
);
