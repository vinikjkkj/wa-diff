__d(
  "DGWStream",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "ABNORMAL_CLOSURE",
      "GOING_AWAY",
      "SERVER_INTERNAL_ERROR",
      "PREMATURE_CLOSE",
      "UNKNOWN_ERROR",
      "KEEPALIVE_TIMEOUT",
      "TRANSPORT_CLOSED_BEFORE_STREAM_INIT",
      "TRANSPORT_ESTABLISHMENT_ERROR",
      "TRANSPORT_ESTABLISHMENT_TIMEOUT",
      "ESTABLISHMENT_TIMEOUT",
      "UNAUTHENTICATED",
      "UNAUTHORIZED",
      "REJECTED",
      "BAD_REQUEST",
      "DGW_SERVER_ERROR",
      "ESTABLISHMENT_ERROR",
      "ACK_TIMEOUT",
      "ACK_TRANSPORT_CLOSED",
    ]);
    function l(t) {
      switch (t) {
        case e.UNAUTHENTICATED:
        case e.UNAUTHORIZED:
        case e.REJECTED:
        case e.BAD_REQUEST:
        case e.UNKNOWN_ERROR:
        case e.SERVER_INTERNAL_ERROR:
          return !1;
        default:
          return !0;
      }
    }
    function s(t) {
      var n = u(t);
      return n != null ? e.getName(n) : String(t);
    }
    function u(t) {
      if (t instanceof Error) {
        var n = t.message;
        if (e.isValid(n)) return e.cast(n);
      }
    }
    ((i.StreamError = e),
      (i.isRetryableError = l),
      (i.streamErrorMessage = s),
      (i.toStreamError = u));
  },
  66,
);
