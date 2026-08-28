__d(
  "ZenonSharedWorkerConstants",
  ["MultiwayCommonTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "CALL_HANDLED_IN_OTHER_TAB",
      u = "connection-ack",
      c = "LOGGING_EVENT",
      d = "RAW_MW_THRIFT_MESSAGE",
      m = "SIGNALING_MESSAGE",
      p = "SIGNALING_MESSAGE_SENT",
      _ = "INIT_DGW_CONFIG",
      f = "register",
      g = "SEND_SIGNALING_MESSAGE",
      h =
        ((e = {}),
        (e[o("MultiwayCommonTypes").MessageType.DISMISS] = "DISMISS"),
        (e[o("MultiwayCommonTypes").MessageType.HANGUP] = "HANGUP"),
        (e[o("MultiwayCommonTypes").MessageType.JOIN] = "JOIN"),
        e);
    function y(e) {
      var t;
      return (t = h[e]) != null ? t : "UNKNOWN";
    }
    ((l.CALL_HANDLED_IN_OTHER_TAB = s),
      (l.CONNECTION_ACK = u),
      (l.LOGGING_EVENT = c),
      (l.RAW_MW_THRIFT_MESSAGE = d),
      (l.SIGNALING_MESSAGE = m),
      (l.SIGNALING_MESSAGE_SENT = p),
      (l.INIT_DGW_CONFIG = _),
      (l.REGISTER = f),
      (l.SEND_SIGNALING_MESSAGE = g),
      (l.messageTypeToString = y));
  },
  98,
);
