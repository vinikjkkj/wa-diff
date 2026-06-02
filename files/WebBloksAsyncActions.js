__d(
  "WebBloksAsyncActions",
  ["WebBloksScriptDebuggingUtils", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n, r) {
      var a = o("WebBloksUtils").nullthrows(
          e.bloksContext.objectSet.environment.appLoader,
        ),
        i = null;
      return ((i = await a.fetchAction(t, n)), e.executeActionPayload(i, r));
    }
    async function s(t, n, r) {
      try {
        return await e(t, n, r);
      } catch (e) {
        o("WebBloksScriptDebuggingUtils").logScriptError(
          t.objectSet,
          e,
          null,
          t,
        );
      }
    }
    ((l.executeAsyncAction = e), (l.executeAsyncActionCatch = s));
  },
  98,
);
