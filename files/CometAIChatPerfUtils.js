__d(
  "CometAIChatPerfUtils",
  ["CometAIStreamingState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e != null)
        switch (e) {
          case "STREAMING":
            return o("CometAIStreamingState").StreamingState.STREAMING;
          case "PROCESSING":
            return o("CometAIStreamingState").StreamingState.PROCESSING;
          case "SEARCHING":
            return o("CometAIStreamingState").StreamingState.SEARCHING;
          case "STREAMING_DONE":
            return o("CometAIStreamingState").StreamingState.LLM_DONE;
          case "OVERALL_DONE":
            return o("CometAIStreamingState").StreamingState.OVERALL_DONE;
          case "ERROR":
            return o("CometAIStreamingState").StreamingState.ERROR;
          case "INTEGRITY_CHECK_FAILED":
            return o("CometAIStreamingState").StreamingState
              .INTEGRITY_CHECK_FAILED;
          default:
            return;
        }
    }
    function s(e) {
      return e == null ? !1 : e === "PROCESSING" || e === "SEARCHING";
    }
    ((l.convertStreamingState = e), (l.isAgentTyping = s));
  },
  98,
);
