__d(
  "WAWebBizAiSmartComposerErrorMapping",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map([
        ["SUBSCRIPTION_QUOTA_EXHAUSTED", "quota_handoff"],
        ["INTERNAL_SERVER_ERROR", "retryable_error"],
        ["INVALID_RESPONSE", "retryable_error"],
        ["UNKNOWN", "retryable_error"],
        ["CONVERSATION_NOT_FOUND", "retryable_error"],
        ["MESSAGE_NOT_FOUND", "retryable_error"],
        ["MESSAGE_STALE", "silent_fallback"],
        ["UNSUPPORTED_MESSAGE_TYPE", "retryable_error"],
        ["AI_FEATURE_DISABLED", "silent_fallback"],
      ]),
      l = new Set(["INTERNAL_SERVER_ERROR", "MESSAGE_NOT_FOUND"]);
    function s(t) {
      var n;
      return (n = e.get(t)) != null ? n : "silent_fallback";
    }
    function u(e) {
      return l.has(e);
    }
    function c(t) {
      for (var n of e.keys()) if (n === t) return n;
      return "UNKNOWN";
    }
    ((i.mapSuggestedReplyErrorToState = s),
      (i.isAutoRetryableSuggestedReplyError = u),
      (i.normalizeSuggestedReplyErrorCode = c));
  },
  66,
);
