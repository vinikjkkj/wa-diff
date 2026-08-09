__d(
  "createSharedWorkerV2BundleUrlExperimental",
  [
    "XCometFBMultiSiteWebWorkerV2InitScriptControllerRouteBuilder",
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
          "XCometFBMultiSiteWebWorkerV2InitScriptControllerRouteBuilder",
        ).buildUri({ worker_type: n ? "MODULE" : "CLASSIC", name: e })) == null
          ? void 0
          : t.toString(),
      );
    }
    l.default = e;
  },
  98,
);
