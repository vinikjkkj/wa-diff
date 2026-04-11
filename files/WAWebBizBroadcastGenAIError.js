__d(
  "WAWebBizBroadcastGenAIError",
  ["fbt", "$InternalEnum"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "EMPTY_RESPONSE",
      "GENERATION_FAILED",
      "INSUFFICIENT_CONTEXT",
      "INVALID_INPUT",
      "RATE_LIMIT",
    ]);
    function u(t) {
      switch (t) {
        case e.INVALID_INPUT:
          return s._(/*BTDS*/ "Update your message and retry AI suggestions.");
        case e.INSUFFICIENT_CONTEXT:
          return s._(/*BTDS*/ "Add more details to get AI suggestions.");
        case e.RATE_LIMIT:
          return s._(
            /*BTDS*/ "You've reached the daily limit for AI suggestions. Please try again later.",
          );
        case e.GENERATION_FAILED:
          return s._(/*BTDS*/ "AI suggestions unavailable. Please try again.");
        case e.EMPTY_RESPONSE:
          return s._(/*BTDS*/ "AI suggestions unavailable. Please try again.");
      }
    }
    ((l.GenAIErrorType = e), (l.getErrorMessage = u));
  },
  226,
);
