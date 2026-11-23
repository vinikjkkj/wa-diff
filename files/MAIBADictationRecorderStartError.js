__d(
  "MAIBADictationRecorderStartError",
  ["ExecutionEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 200;
    function u() {
      if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        var t;
        return (
          typeof ((t = navigator.mediaDevices) == null
            ? void 0
            : t.getUserMedia) == "function" && "AudioWorkletNode" in window
        );
      }
      return !1;
    }
    function c(e, t) {
      return t
        ? (function (e) {
            return e === "NotAllowedError"
              ? "permission_denied"
              : e === "NotFoundError"
                ? "no_mic"
                : e === "NotReadableError"
                  ? "mic_busy"
                  : e === "SecurityError"
                    ? "insecure_context"
                    : e === "AbortError"
                      ? "recorder_aborted"
                      : "unknown";
          })(e == null ? void 0 : e.name)
        : "unsupported";
    }
    function d(e, t) {
      var n, r;
      return {
        errorMessage: ((n = e == null ? void 0 : e.message) != null
          ? n
          : ""
        ).slice(0, s),
        errorName: (r = e == null ? void 0 : e.name) != null ? r : "",
        errorSubType: c(e, t),
      };
    }
    ((l.isMAIBADictationCaptureSupported = u),
      (l.classifyMAIBADictationRecorderStartError = c),
      (l.getMAIBADictationRecorderStartErrorDetails = d));
  },
  98,
);
