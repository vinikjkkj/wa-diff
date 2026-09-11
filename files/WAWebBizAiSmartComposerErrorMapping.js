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
      l = {
        AI_FEATURE_DISABLED: 9,
        CONVERSATION_NOT_FOUND: 1,
        INTERNAL_SERVER_ERROR: 5,
        INVALID_RESPONSE: 6,
        MESSAGE_NOT_FOUND: 4,
        MESSAGE_STALE: 3,
        SUBSCRIPTION_QUOTA_EXHAUSTED: 10,
        UNKNOWN: 0,
        UNSUPPORTED_MESSAGE_TYPE: 2,
      },
      s = new Set(["INTERNAL_SERVER_ERROR", "MESSAGE_NOT_FOUND"]);
    function u(t) {
      var n;
      return (n = e.get(t)) != null ? n : "silent_fallback";
    }
    function c(e) {
      return s.has(e);
    }
    function d(e) {
      return l[e];
    }
    function m(t) {
      for (var n of e.keys()) if (n === t) return n;
      return "UNKNOWN";
    }
    ((i.mapSuggestedReplyErrorToState = u),
      (i.isAutoRetryableSuggestedReplyError = c),
      (i.getSuggestedReplyErrorWireValue = d),
      (i.normalizeSuggestedReplyErrorCode = m));
  },
  66,
);
