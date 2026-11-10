__d(
  "WASocketCloseReason",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e;
    }
    var l = {
        ClientCloseUnspecified: "client_close_unspecified",
        ConnectionAborted: "connection_aborted",
        DeadSocket: "dead_socket",
        FrameSocketDrained: "frame_socket_drained",
        StanzaHandlerRequested: "stanza_handler_requested",
        Unknown: "unknown",
        WsCloseAbnormal: "ws_close_abnormal",
        WsCloseBadGateway: "ws_close_bad_gateway",
        WsCloseExtensionRequired: "ws_close_extension_required",
        WsCloseGoingAway: "ws_close_going_away",
        WsCloseInvalidPayload: "ws_close_invalid_payload",
        WsCloseNoStatus: "ws_close_no_status",
        WsCloseNormal: "ws_close_normal",
        WsCloseOther: "ws_close_other",
        WsClosePolicyViolation: "ws_close_policy_violation",
        WsCloseProtocolError: "ws_close_protocol_error",
        WsCloseServerError: "ws_close_server_error",
        WsCloseServiceRestart: "ws_close_service_restart",
        WsCloseTlsFailure: "ws_close_tls_failure",
        WsCloseTooBig: "ws_close_too_big",
        WsCloseTryAgainLater: "ws_close_try_again_later",
        WsCloseUnsupportedData: "ws_close_unsupported_data",
      },
      s = l,
      u = new Map([
        [1e3, s.WsCloseNormal],
        [1001, s.WsCloseGoingAway],
        [1002, s.WsCloseProtocolError],
        [1003, s.WsCloseUnsupportedData],
        [1005, s.WsCloseNoStatus],
        [1006, s.WsCloseAbnormal],
        [1007, s.WsCloseInvalidPayload],
        [1008, s.WsClosePolicyViolation],
        [1009, s.WsCloseTooBig],
        [1010, s.WsCloseExtensionRequired],
        [1011, s.WsCloseServerError],
        [1012, s.WsCloseServiceRestart],
        [1013, s.WsCloseTryAgainLater],
        [1014, s.WsCloseBadGateway],
        [1015, s.WsCloseTlsFailure],
      ]);
    function c(e) {
      var t;
      return e == null
        ? s.ClientCloseUnspecified
        : (t = u.get(e.code)) != null
          ? t
          : s.WsCloseOther;
    }
    ((i.socketCloseReasons = e),
      (i.CommsCloseReason = s),
      (i.wsCloseReason = c));
  },
  66,
);
