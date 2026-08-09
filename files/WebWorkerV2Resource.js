__d(
  "WebWorkerV2Resource",
  [
    "WebWorkerV2DynamicData",
    "XCometFBMultiSiteWebWorkerV2InitScriptControllerRouteBuilder",
    "forEachObject",
    "getAsyncParamsFromCurrentPageURI",
    "getWorkerInitScriptSPINParams",
    "nullthrows",
    "promiseDone",
    "supportsModuleWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a = t != null ? t : e.name,
        i = r("supportsModuleWorker")(!1) && n !== !0 ? "module" : "classic",
        l = r("getWorkerInitScriptSPINParams")();
      r("forEachObject")(
        r("getAsyncParamsFromCurrentPageURI")(),
        function (e, t) {
          l.set(t, e);
        },
      );
      var s = r("nullthrows")(
          r("XCometFBMultiSiteWebWorkerV2InitScriptControllerRouteBuilder")
            .buildUri({
              worker_type:
                r("supportsModuleWorker")(!1) && n !== !0
                  ? "MODULE"
                  : "CLASSIC",
            })
            .addQueryParams(l),
        ).toString(),
        u = s,
        c = new Worker(u, { name: a, type: i });
      return (
        r("promiseDone")(
          o("WebWorkerV2DynamicData")
            .readDynamicDataForWorker(e)
            .then(function (e) {
              var t = e.data;
              c.postMessage({
                type: "ww-hrp-init",
                hrp: t.hrp,
                js_env: t.js_env,
                is_dev: !1,
                tiered: !0,
              });
            }),
        ),
        { worker: c, url: u.toString() }
      );
    }
    l.createDedicatedV2WebWorker = e;
  },
  98,
);
