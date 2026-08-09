__d(
  "createSharedWorkerV2BundleUrl",
  [
    "XCometFBMultiSiteWebWorkerV2InitScriptControllerRouteBuilder",
    "getSharedWorkerHash",
    "getWorkerInitScriptSPINParams",
    "justknobx",
    "nullthrows",
    "supportsModuleWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e,
        t = r("supportsModuleWorker")(!0),
        n = r("getWorkerInitScriptSPINParams")();
      return (
        n.set("hash", r("getSharedWorkerHash")()),
        n.set("use_broadcast", r("justknobx")._("4177")),
        r("nullthrows")(
          (e = r(
            "XCometFBMultiSiteWebWorkerV2InitScriptControllerRouteBuilder",
          ).buildUri({ worker_type: t ? "MODULE" : "CLASSIC" })) == null ||
            (e = e.addQueryParams(n)) == null
            ? void 0
            : e.toString(),
        )
      );
    }
    var s = function () {
      return e();
    };
    l.createSharedWorkerV2BundleUrl = s;
  },
  98,
);
