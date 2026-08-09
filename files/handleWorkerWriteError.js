__d(
  "handleWorkerWriteError",
  ["FBLogger", "WebStorageCleanupReason"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e instanceof Error) {
        r("FBLogger")("worker")
          .catching(e)
          .mustfix("Error occured checking in shared worker reference");
        return;
      }
      if (e === "writes disabled") {
        var t;
        r("FBLogger")("worker").warn(
          "Writes to WebAsyncStorage is disabled. Unable to save shared worker reference. Reason: %s",
          (t = o("WebStorageCleanupReason").getLastCleanupReason()) != null
            ? t
            : "n/a",
        );
        return;
      }
      r("FBLogger")("worker").mustfix(
        "Error occured checking in shared worker reference: %s",
        JSON.stringify(e),
      );
    }
    l.default = e;
  },
  98,
);
