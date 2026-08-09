__d(
  "createSharedWorkerV4BundleUrl",
  [
    "XCometFBMultiSiteSharedWorkerV4InitScriptControllerRouteBuilder",
    "nullthrows",
    "supportsModuleWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = r("supportsModuleWorker")(!0);
      return r("nullthrows")(
        (t = r(
          "XCometFBMultiSiteSharedWorkerV4InitScriptControllerRouteBuilder",
        ).buildUri({ hash: e, worker_type: n ? "MODULE" : "CLASSIC" })) == null
          ? void 0
          : t.toString(),
      );
    }
    l.default = e;
  },
  98,
);
