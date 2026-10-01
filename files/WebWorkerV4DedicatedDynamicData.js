__d(
  "WebWorkerV4DedicatedDynamicData",
  ["FBLogger", "Promise", "cometAsyncFetchShared", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e4,
      u = new Map();
    function c(e, t, n, r) {
      r === void 0 && (r = !1);
      var o = e.name,
        a = t.getPath() + ":" + o,
        i = u.get(a);
      if (i == null || r) {
        var l = Math.floor(+Date.now() / 1e3),
          s = d(e, t, r, n).then(function (e) {
            return { time: l, data: e };
          });
        (s.catch(function () {
          u.get(a) === s && u.delete(a);
        }),
          u.set(a, s),
          (i = s));
      }
      return i;
    }
    function d(t, o, a, i) {
      var l = t.name,
        u = t.v4HasteResponsePreloader;
      if (u == null || a)
        return (
          i == null || i.addPoint("worker_fetch_hrp_start"),
          m(l, o, a).then(function (e) {
            return (i == null || i.addPoint("worker_fetch_hrp_end"), e);
          })
        );
      var c = null,
        d = function () {
          return (
            c == null &&
              (i == null || i.addPoint("worker_fallback_fetch_hrp_start"),
              (c = m(l, o, a).then(function (e) {
                return (
                  i == null || i.addPoint("worker_fallback_fetch_hrp_end"),
                  e
                );
              }))),
            c
          );
        },
        p = !1;
      i == null || i.addPoint("worker_preloader_hrp_start");
      var _ = new (e || (e = n("Promise")))(function (e) {
          u.onLoaded(function (t) {
            var n = t.data;
            if (
              (i == null || i.addPoint("worker_preloader_hrp_end"),
              (p = !0),
              n == null || n.hrp == null)
            ) {
              (r("FBLogger")("worker").mustfix(
                "Preloaded data for V4 dedicated worker %s is missing haste response, preload data keys: %s",
                l,
                n == null ? "null" : Object.keys(n).join(", "),
              ),
                e(d()));
              return;
            }
            e(n);
          }).onError(function () {
            ((p = !0),
              r("FBLogger")("worker").mustfix(
                "Preloader for V4 dedicated worker %s errored, falling back to HTTP",
                l,
              ),
              e(d()));
          });
        }),
        f = new e(function (e) {
          window.setTimeout(function () {
            p || e(d());
          }, s);
        });
      return e.race([_, f]);
    }
    function m(e, t, n) {
      var o = null;
      return (
        n &&
          ((o = new FormData()),
          o.set("__rev", "null"),
          o.set("__spin_r", "null")),
        r("cometAsyncFetchShared")(
          t.buildUri({ worker_module: e }).toString(),
          {
            formData: o != null ? o : void 0,
            data: {},
            getFullPayload: !0,
            method: "POST",
            skipSRState: !0,
            retryCount: n ? 2 : void 0,
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
            "Unexpected data from WebWorkerV4DedicatedHasteResponseController for worker %s",
            e,
          );
        })
      );
    }
    l.readDynamicDataForWorkerV4 = c;
  },
  98,
);
