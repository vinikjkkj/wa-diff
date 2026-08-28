__d(
  "WebBloksAsyncActionWithDataManifestV2",
  [
    "WebBloksAsyncActions",
    "WebBloksScreen",
    "WebBloksScriptDebuggingUtils",
    "webBloksPerformanceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "#",
      s = "$",
      u = "(";
    function c(t, n, r, a) {
      o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
        "--web-bloks-async-action-start",
        { detail: { appId: n } },
      );
      var i = a == null ? void 0 : a.get(s),
        l = a == null ? void 0 : a.get(e),
        c = a == null ? void 0 : a.get(u),
        d;
      (c != null &&
        (d = o(
          "WebBloksScreen",
        ).WebBloksScreen.getExternalVariablesFromBloksScript(t, c)),
        o("WebBloksAsyncActions")
          .executeAsyncAction(t, n, r, d)
          .then(function (e) {
            (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
              "--web-bloks-async-action-success",
            ),
              i != null && t.execute(i, [e, t.bloksContext]));
          })
          .catch(function (e) {
            (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
              "--web-bloks-async-action-error",
            ),
              o("WebBloksScriptDebuggingUtils").logScriptError(
                t.objectSet,
                e,
                null,
                t,
              ),
              l != null && t.execute(l, [t.bloksContext]));
          })
          .catch(function (e) {
            (o("webBloksPerformanceUtils").addWebBloksPerformanceMark(
              "--web-bloks-async-action-error",
            ),
              t.objectSet.environment.logger.mustfix(
                "AsyncAction: failed to run error handler",
                e,
              ));
          }));
    }
    l.default = c;
  },
  98,
);
