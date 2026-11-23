__d(
  "WAFlowsNativeMediaUploadTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["ADD", "DELETE", "UPDATE"]),
      l = n("$InternalEnum")({
        PROGRESS: "progress",
        SUCCESS: "success",
        ERROR: "error",
      });
    ((i.WAFInternalStateMediaMutation = e), (i.WAFMediaUploadState = l));
  },
  66,
);
