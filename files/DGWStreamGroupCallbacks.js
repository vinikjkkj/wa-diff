__d(
  "DGWStreamGroupCallbacks",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
      TRANSPORT_SERVER_INTERNAL_ERROR: 0,
      TRANSPORT_ABNORMAL_CLOSURE: 1,
      TRANSPORT_GOING_AWAY: 2,
      TRANSPORT_UNKNOWN_ERROR: 3,
      TRANSPORT_KEEPALIVE_TIMEOUT: 4,
      TRANSPORT_UNAUTHORIZED: 5,
      TRANSPORT_REJECTED: 6,
      TRANSPORT_BAD_REQUEST: 7,
      TRANSPORT_DGW_SERVER_ERROR: 8,
      TRANSPORT_NORMAL_CLOSURE: 9,
    });
    function l(t) {
      switch (t) {
        case e.TRANSPORT_SERVER_INTERNAL_ERROR:
          return "TRANSPORT_SERVER_INTERNAL_ERROR";
        case e.TRANSPORT_ABNORMAL_CLOSURE:
          return "TRANSPORT_ABNORMAL_CLOSURE";
        case e.TRANSPORT_GOING_AWAY:
          return "TRANSPORT_GOING_AWAY";
        case e.TRANSPORT_UNKNOWN_ERROR:
          return "TRANSPORT_UNKNOWN_ERROR";
        case e.TRANSPORT_KEEPALIVE_TIMEOUT:
          return "TRANSPORT_KEEPALIVE_TIMEOUT";
        case e.TRANSPORT_UNAUTHORIZED:
          return "TRANSPORT_UNAUTHORIZED";
        case e.TRANSPORT_REJECTED:
          return "TRANSPORT_REJECTED";
        case e.TRANSPORT_BAD_REQUEST:
          return "TRANSPORT_BAD_REQUEST";
        case e.TRANSPORT_DGW_SERVER_ERROR:
          return "TRANSPORT_DGW_SERVER_ERROR";
        case e.TRANSPORT_NORMAL_CLOSURE:
          return "TRANSPORT_NORMAL_CLOSURE";
      }
    }
    function s(t) {
      switch (t) {
        case e.TRANSPORT_UNAUTHORIZED:
          return !1;
        default:
          return !0;
      }
    }
    var u = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.onStreamGroupError = function () {}),
        (t.onStreamGroupMustDrain = function () {}),
        (t.onStreamGroupTransportClose = function () {}),
        e
      );
    })();
    ((i.DGWStreamGroupError = e),
      (i.dgwStreamGroupErrorToString = l),
      (i.isRetryableError = s),
      (i.NoOpDGWStreamGroupCallbacks = u));
  },
  66,
);
