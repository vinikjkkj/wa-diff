__d(
  "CometAIStreamingState",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "STREAMING",
      "PROCESSING",
      "SEARCHING",
      "LLM_DONE",
      "OVERALL_DONE",
      "ERROR",
      "INTEGRITY_CHECK_FAILED",
    ]);
    i.StreamingState = e;
  },
  66,
);
