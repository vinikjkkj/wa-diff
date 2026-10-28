__d(
  "WebBloksScriptDebuggingUtils",
  [
    "WebBloksAsyncActions",
    "WebBloksRenderDiagnostics",
    "WebBloksScriptPrinter",
    "WebDriverConfig",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a) {
      var i = t == null ? void 0 : t.stackFrame;
      if (
        (r("WebDriverConfig").isJestE2ETestRun &&
          e.toastManager.enqueueSimpleToast(t.toString()),
        e.environment.logger.scriptError(t),
        o("WebBloksRenderDiagnostics").isWebBloksRenderDiagnosticsInstalled())
      ) {
        var l, s;
        o("WebBloksRenderDiagnostics").reportWebBloksScriptError({
          errorClass: o(
            "WebBloksRenderDiagnostics",
          ).classifyWebBloksRenderError(t),
          loggingId:
            (l =
              a == null || (s = a.getSourceMapNode()) == null
                ? void 0
                : s.getLoggingID()) != null
              ? l
              : void 0,
          message: o("WebBloksRenderDiagnostics").safeErrorMessage(t),
        });
      }
    }
    var s = "com.bloks.www.bloks.error.report_to_sandbox";
    function u(e, t, n) {
      e &&
        o("WebBloksAsyncActions")
          .executeAsyncAction(e, s, { message: t, bloks_raw_stack_trace: n })
          .catch(function () {
            return null;
          });
    }
    function c(e) {
      var t = e.slice();
      function n(e, t) {
        t === void 0 && (t = -1);
        var r = t + 1;
        for (var o of e) Array.isArray(o) ? (r = n(o, r)) : (o.lispyOffset = r);
        return r;
      }
      return (n(t), t);
    }
    ((l.logScriptError = e),
      (l.sendErrorToSandboxLogs = u),
      (l.attachLispyOffsetsForWebBloksScriptNode = c));
  },
  98,
);
