__d(
  "WebWorkerV4Resource",
  [
    "FBLogger",
    "WebWorkerV4DedicatedDynamicData",
    "err",
    "forEachObject",
    "getAsyncParamsFromCurrentPageURI",
    "getWorkerInitScriptSPINParams",
    "nullthrows",
    "supportsModuleWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      var i = n != null ? n : e.name,
        l = r("supportsModuleWorker")(!1) && a !== !0,
        s = l ? "module" : "classic",
        u = r("getWorkerInitScriptSPINParams")();
      r("forEachObject")(
        r("getAsyncParamsFromCurrentPageURI")(),
        function (e, t) {
          u.set(t, e);
        },
      );
      var c = r("nullthrows")(
          t.initScriptRouteBuilder
            .buildUri({ worker_type: l ? "MODULE" : "CLASSIC" })
            .addQueryParams(u),
        ).toString(),
        d = new Worker(c, { name: i, type: s });
      return (
        o("WebWorkerV4DedicatedDynamicData")
          .readDynamicDataForWorkerV4(e, t.hasteResponseRouteBuilder)
          .then(function (e) {
            var t = e.data;
            d.postMessage({
              type: "ww-hrp-init",
              hrp: t.hrp,
              js_env: t.js_env,
              is_dev: !1,
              tiered: !0,
            });
          })
          .catch(function (e) {
            (r("FBLogger")("webworker_v4_dedicated")
              .catching(e instanceof Error ? e : r("err")(String(e)))
              .mustfix("HRP fetch failed for worker %s", i),
              d.terminate());
          }),
        d
      );
    }
    l.createDedicatedV4WebWorker = e;
  },
  98,
);
