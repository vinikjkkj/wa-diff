__d(
  "MAIBAChatStreamingStateUtils",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "INIT" || e === "CLIENT_INIT";
    }
    function s(e) {
      return e === "SEARCHING";
    }
    function u(e) {
      return e == null
        ? !1
        : e === "STREAMING" ||
            e === "STREAMING_PREVIEW" ||
            e === "LLM_DONE" ||
            !c(e);
    }
    function c(e) {
      return [
        "CLIENT_INIT",
        "CLIENT_SWITCH_TO_ASYNC",
        "INIT",
        "IMAGINING_HERO",
        "SEARCHING",
        "IMAGINING",
        "STREAMING",
        "STREAMING_PREVIEW",
        "LLM_DONE",
      ].includes(e);
    }
    ((l.isStreamingStateInit = e),
      (l.isStreamingStateSearching = s),
      (l.hasStartedStreaming = u),
      (l.isStreamingStateLoading = c));
  },
  98,
);
