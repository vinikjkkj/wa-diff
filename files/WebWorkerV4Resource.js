__d(
  "WebWorkerV4Resource",
  [
    "Promise",
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
    var e;
    function s(t, a, i, l) {
      var s = i != null ? i : t.name,
        u = r("supportsModuleWorker")(!1) && l !== !0,
        c = u ? "module" : "classic",
        d = r("getWorkerInitScriptSPINParams")();
      r("forEachObject")(
        r("getAsyncParamsFromCurrentPageURI")(),
        function (e, t) {
          d.set(t, e);
        },
      );
      var m = r("nullthrows")(
          a.initScriptRouteBuilder
            .buildUri({ worker_type: u ? "MODULE" : "CLASSIC" })
            .addQueryParams(d),
        ).toString(),
        p = new Worker(m, { name: s, type: c }),
        _ = new (e || (e = n("Promise")))(function (e, n) {
          var i = function (o) {
            var t = o.data;
            if (
              typeof t == "object" &&
              ((t == null ? void 0 : t.type) === "ww-init-error" ||
                (t == null ? void 0 : t.type) === "ww-init-complete")
            ) {
              var a, l;
              if (
                (p.removeEventListener("message", i),
                (t == null ? void 0 : t.type) === "ww-init-complete")
              ) {
                e();
                return;
              }
              var s =
                  (a = t == null ? void 0 : t.error) != null ? a : "unknown",
                u = (l = t == null ? void 0 : t.reason) != null ? l : "unknown";
              n(
                r("err")(
                  "ww-hrp-init error: " + String(s) + ", reason: " + String(u),
                ),
              );
            }
          };
          (p.addEventListener("message", i),
            o("WebWorkerV4DedicatedDynamicData")
              .readDynamicDataForWorkerV4(t, a.hasteResponseRouteBuilder)
              .then(function (e) {
                var t = e.data;
                p.postMessage({
                  type: "ww-hrp-init",
                  hrp: t.hrp,
                  js_env: t.js_env,
                  is_dev: !1,
                  tiered: !0,
                });
              })
              .catch(n));
        });
      return { worker: p, initReady: _ };
    }
    l.createDedicatedV4WebWorker = s;
  },
  98,
);
