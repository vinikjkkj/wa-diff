__d(
  "WebWorkerV2DynamicData",
  [
    "FBLogger",
    "Promise",
    "XCometFBMultiSiteWebWorkerV2HasteResponseControllerRouteBuilder",
    "cometAsyncFetchShared",
    "err",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map();
    function u(e, t) {
      t === void 0 && (t = !1);
      var n = e.name,
        r = s.get(n);
      if (r == null || t) {
        var o = Math.floor(+Date.now() / 1e3);
        ((r = c(e, t).then(function (e) {
          return { time: o, data: e };
        })),
          s.set(n, r));
      }
      return r;
    }
    function c(t, o) {
      var a = t.name,
        i = t.v2HasteResponsePreloader;
      if (i == null || o) return d(a, o);
      var l = null,
        s = new (e || (e = n("Promise")))(function (e, t) {
          i.onLoaded(function (t) {
            var n = t.data;
            ((n == null || n.hrp == null) &&
              r("FBLogger")("worker").mustfix(
                "Preloaded data for worker %s is missing haste response, preload data keys: %s",
                a,
                n == null ? "null" : Object.keys(n).join(", "),
              ),
              (l = n),
              e(n));
          }).onError(t);
        });
      return e.race([
        s,
        new e(function (e, t) {
          window.setTimeout(function () {
            l == null ? r("promiseDone")(d(a, o), e, t) : e(l);
          }, 1e4);
        }),
      ]);
    }
    function d(e, t) {
      var n = null;
      return (
        t &&
          ((n = new FormData()),
          n.set("__rev", "null"),
          n.set("__spin_r", "null")),
        r("cometAsyncFetchShared")(
          r("XCometFBMultiSiteWebWorkerV2HasteResponseControllerRouteBuilder")
            .buildUri({ worker_module: e })
            .toString(),
          {
            formData: n != null ? n : void 0,
            data: {},
            getFullPayload: !0,
            method: "POST",
            skipSRState: !0,
            retryCount: t ? 2 : void 0,
          },
        ).then(function (t) {
          if (
            t != null &&
            typeof t == "object" &&
            Object.prototype.hasOwnProperty.call(t, "hrp") &&
            typeof t.hrp == "object"
          )
            return t;
          throw r("err")(
            "Unexpected data from WorkerInitResourceDeliveryController for worker %s",
            e,
          );
        })
      );
    }
    l.readDynamicDataForWorker = u;
  },
  98,
);
