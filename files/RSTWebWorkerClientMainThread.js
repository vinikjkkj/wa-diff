__d(
  "RSTWebWorkerClientMainThread",
  [
    "RSTWebWorkerClientMainThreadImpl",
    "RSTWebWorkerResource",
    "WorkerBundleResource",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("RSTWebWorkerClientMainThreadImpl"))(function () {
        return o("WorkerBundleResource").createDedicatedWebWorker(
          r("RSTWebWorkerResource"),
          { logImportScriptsErrors: !0, name: "RSTWebWorker" },
        );
      }),
      s = e;
    l.default = s;
  },
  98,
);
