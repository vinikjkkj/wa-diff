__d(
  "WebBloksAsyncActionWithDataManifestV2",
  [
    "WebBloksAsyncActions",
    "WebBloksScreen",
    "WebBloksScriptDebuggingUtils",
    "webBloksPerformanceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-async-action-start",
        { detail: { appId: t } },
      );
      var a = r == null ? void 0 : r.get("on_success_with_result"),
        i = r == null ? void 0 : r.get("on_failure"),
        l = r == null ? void 0 : r.get("props"),
        s;
      (l != null &&
        (s = o(
          "WebBloksScreen",
        ).WebBloksScreen.getExternalVariablesFromBloksScript(e, l)),
        o("WebBloksAsyncActions")
          .executeAsyncAction(e, t, n, s)
          .then(function (t) {
            (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
              "--web-bloks-async-action-success",
            ),
              a != null && e.execute(a, [t, e.bloksContext]));
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
              i != null && e.execute(i, [e.bloksContext]));
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
