__d(
  "WebBloksCAAPerformSSOLogin",
  [
    "ThisControllerNoLongerExists",
    "WebBloksErrors",
    "WebBloksScriptDebuggingUtils",
    "WebBloksURLUtils",
    "XAsyncRequest",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      var s = o("ThisControllerNoLongerExists")
        .__DEADROUTEBUILDER__("pgtw250gk")
        .buildURL({});
      new (r("XAsyncRequest"))(s)
        .setMethod("POST")
        .setAutoProcess(!1)
        .setData({
          ucid: t,
          source_app: n,
          waterfall_id: a,
          event_request_id: i,
        })
        .setHandler(function (t) {
          try {
            t.payload.failure_flow
              ? e.execute(l, [t.payload.failure_flow])
              : o("WebBloksURLUtils").openURL(t.payload.next);
          } catch (t) {
            (o("WebBloksScriptDebuggingUtils").logScriptError(
              e.bloksContext.objectSet,
              new (o("WebBloksErrors").WebBloksScriptError)(
                r("getErrorSafe")(t).message,
                e,
              ),
              l,
              e,
            ),
              o("WebBloksURLUtils").openURL("/"));
          }
        })
        .send();
    }
    l.default = e;
  },
  98,
);
