__d(
  "WebWorkerV4DynamicData",
  [
    "FBLogger",
    "Promise",
    "SiteData",
    "XCometFBMultiSiteWebWorkerV4HasteResponseControllerRouteBuilder",
    "cometAsyncFetchShared",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e4,
      u = new Map();
    function c(e, t) {
      t === void 0 && (t = !1);
      var n = e.name,
        o = u.get(n),
        a = o != null,
        i = o;
      if (i == null || t) {
        var l = Math.floor(+Date.now() / 1e3),
          s = r("SiteData").client_revision;
        ((i = m(e, t).then(function (e) {
          return { clientRevision: s, data: e, time: l };
        })),
          u.set(n, i));
      }
      return i.then(function (e) {
        var t = e.clientRevision,
          n = e.data,
          r = e.time;
        return { cacheHit: a, clientRevision: t, data: n, time: r };
      });
    }
    function d(e) {
      u.delete(e);
    }
    function m(t, o) {
      var a = t.name,
        i = t.v4HasteResponsePreloader;
      if (i == null || o) return p(a);
      var l = null,
        u = function () {
          return (l == null && (l = p(a)), l);
        },
        c = !1,
        d = new (e || (e = n("Promise")))(function (e) {
          i.onLoaded(function (t) {
            var n = t.data;
            ((c = !0),
              (n == null || n.hrp == null) &&
                r("FBLogger")("worker").mustfix(
                  "Preloaded data for V4 worker %s is missing haste response, preload data keys: %s",
                  a,
                  n == null ? "null" : Object.keys(n).join(", "),
                ),
              e(n));
          }).onError(function () {
            (r("FBLogger")("worker").mustfix(
              "Preloader for V4 worker %s errored, falling back to HTTP",
              a,
            ),
              e(u()));
          });
        }),
        m = new e(function (e) {
          window.setTimeout(function () {
            c || e(u());
          }, s);
        });
      return e.race([d, m]);
    }
    function p(e) {
      var t = r(
        "XCometFBMultiSiteWebWorkerV4HasteResponseControllerRouteBuilder",
      )
        .buildUri({ worker_module: e })
        .toString();
      return r("cometAsyncFetchShared")(t, {
        data: {},
        getFullPayload: !0,
        method: "POST",
        skipSRState: !0,
      }).then(function (t) {
        if (
          t != null &&
          typeof t == "object" &&
          Object.prototype.hasOwnProperty.call(t, "hrp") &&
          typeof t.hrp == "object"
        )
          return t;
        throw r("err")(
          "Unexpected data from V4 HasteResponseController for worker %s",
          e,
        );
      });
    }
    ((l.readDynamicDataForV4Worker = c), (l.clearV4HrpCache = d));
  },
  98,
);
