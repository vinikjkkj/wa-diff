__d(
  "WebBloksScriptDebuggingUtils",
  ["WebBloksAsyncActions", "WebBloksScriptPrinter", "WebDriverConfig"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, o) {
      var a = t == null ? void 0 : t.stackFrame;
      (r("WebDriverConfig").isJestE2ETestRun &&
        e.toastManager.enqueueSimpleToast(t.toString()),
        e.environment.logger.scriptError(t));
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
