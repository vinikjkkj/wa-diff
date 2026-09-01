__d(
  "WebWorkerV4DedicatedDynamicData",
  ["FBLogger", "Promise", "cometAsyncFetchShared", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e4,
      u = new Map();
    function c(e, t, n) {
      n === void 0 && (n = !1);
      var r = e.name,
        o = t.getPath() + ":" + r,
        a = u.get(o);
      if (a == null || n) {
        var i = Math.floor(+Date.now() / 1e3),
          l = d(e, t, n).then(function (e) {
            return { time: i, data: e };
          });
        (l.catch(function () {
          u.get(o) === l && u.delete(o);
        }),
          u.set(o, l),
          (a = l));
      }
      return a;
    }
    function d(t, o, a) {
      var i = t.name,
        l = t.v4HasteResponsePreloader;
      if (l == null || a) return m(i, o, a);
      var u = null,
        c = function () {
          return (u == null && (u = m(i, o, a)), u);
        },
        d = !1,
        p = new (e || (e = n("Promise")))(function (e) {
          l.onLoaded(function (t) {
            var n = t.data;
            if (((d = !0), n == null || n.hrp == null)) {
              (r("FBLogger")("worker").mustfix(
                "Preloaded data for V4 dedicated worker %s is missing haste response, preload data keys: %s",
                i,
                n == null ? "null" : Object.keys(n).join(", "),
              ),
                e(c()));
              return;
            }
            e(n);
          }).onError(function () {
            ((d = !0),
              r("FBLogger")("worker").mustfix(
                "Preloader for V4 dedicated worker %s errored, falling back to HTTP",
                i,
              ),
              e(c()));
          });
        }),
        _ = new e(function (e) {
          window.setTimeout(function () {
            d || e(c());
          }, s);
        });
      return e.race([p, _]);
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
