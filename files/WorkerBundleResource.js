__d(
  "WorkerBundleResource",
  [
    "TrustedTypesWebWorkerScriptURLPolicy",
    "XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder",
    "getWorkerInitScriptSPINParams",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o,
        a,
        i =
          (n = t == null ? void 0 : t.logImportScriptsErrors) != null ? n : !1,
        l = (o = t == null ? void 0 : t.name) != null ? o : e.name,
        u = new window.URL(e.url, window.location.href).href;
      if (u == null) {
        var c = new Error("Can't start up worker without a resource url.");
        throw (c.stack, c);
      }
      for (
        var d = r("nullthrows")(
            (a = r("XCometFBMultiSiteWebWorkerInitScriptControllerRouteBuilder")
              .buildUri({})
              .addQueryParams(r("getWorkerInitScriptSPINParams")())) == null ||
              (a = a.addQueryParams(s())) == null
              ? void 0
              : a.toString(),
          ),
          m = new Worker(
            r("TrustedTypesWebWorkerScriptURLPolicy").createScriptURL(d),
            { name: l },
          ),
          p = arguments.length,
          _ = new Array(p > 2 ? p - 2 : 0),
          f = 2;
        f < p;
        f++
      )
        _[f - 2] = arguments[f];
      return (
        m.postMessage({
          bundleUrl: u,
          initArgs: _,
          isDev: !1,
          resource: e,
          logImportScriptsErrors: i,
          type: "sr-init",
        }),
        m
      );
    }
    function s() {
      var e = new URLSearchParams(window.location.search),
        t = new Map();
      return (
        e.forEach(function (e, n) {
          ["gk_enable", "gk_enable[]", "gk_disable", "gk_disable[]"].includes(
            n,
          ) && t.set(n, e);
        }),
        t
      );
    }
    l.createDedicatedWebWorker = e;
  },
  98,
);
