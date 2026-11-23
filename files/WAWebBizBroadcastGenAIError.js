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
          return s._(/*BTDS*/ "");
        case e.INSUFFICIENT_CONTEXT:
          return s._(/*BTDS*/ "");
        case e.RATE_LIMIT:
          return s._(/*BTDS*/ "");
        case e.GENERATION_FAILED:
          return s._(/*BTDS*/ "");
        case e.EMPTY_RESPONSE:
          return s._(/*BTDS*/ "");
      }
    }
    ((l.GenAIErrorType = e), (l.getErrorMessage = u));
  },
  226,
);
