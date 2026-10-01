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
    function s(t, a, i, l, s) {
      var u = i != null ? i : t.name,
        c = r("supportsModuleWorker")(!1) && l !== !0,
        d = c ? "module" : "classic",
        m = r("getWorkerInitScriptSPINParams")();
      r("forEachObject")(
        r("getAsyncParamsFromCurrentPageURI")(),
        function (e, t) {
          m.set(t, e);
        },
      );
      var p = r("nullthrows")(
          a.initScriptRouteBuilder
            .buildUri({ worker_type: c ? "MODULE" : "CLASSIC" })
            .addQueryParams(m),
        ).toString(),
        _ = new Worker(p, { name: u, type: d }),
        f = new (e || (e = n("Promise")))(function (e, n) {
          var i = function (o) {
            var t = o.data;
            if (
              typeof t == "object" &&
              ((t == null ? void 0 : t.type) === "ww-init-error" ||
                (t == null ? void 0 : t.type) === "ww-init-complete")
            ) {
              var a, l;
              if (
                (s == null || s.addPoint("worker_hrp_init_end"),
                _.removeEventListener("message", i),
                (t == null ? void 0 : t.type) === "ww-init-complete")
              ) {
                e();
                return;
              }
              var u =
                  (a = t == null ? void 0 : t.error) != null ? a : "unknown",
                c = (l = t == null ? void 0 : t.reason) != null ? l : "unknown";
              (s == null || s.addPoint("worker_hrp_init_error"),
                n(
                  r("err")(
                    "ww-hrp-init error: " +
                      String(u) +
                      ", reason: " +
                      String(c),
                  ),
                ));
            }
          };
          (_.addEventListener("message", i),
            s == null || s.addPoint("worker_read_hrp_start"),
            o("WebWorkerV4DedicatedDynamicData")
              .readDynamicDataForWorkerV4(t, a.hasteResponseRouteBuilder, s)
              .then(function (e) {
                var t = e.data;
                (s == null || s.addPoint("worker_read_hrp_end"),
                  s == null || s.addPoint("worker_hrp_init_start"),
                  _.postMessage({
                    type: "ww-hrp-init",
                    hrp: t.hrp,
                    js_env: t.js_env,
                    is_dev: !1,
                    tiered: !0,
                  }));
              })
              .catch(n));
        });
      return { worker: _, initReady: f };
    }
    l.createDedicatedV4WebWorker = s;
  },
  98,
);
