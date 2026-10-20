__d(
  "WAWebVoipSctpConnectionManagerConstants",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored(["Off", "TcpOnly"]),
      l = {
        CLOSE_OLD_CONNECTION_BEFORE_CALL_END: !1,
        FAUX_WEB_CLIENT_RELAY_PORT: 3478,
        TRUE_WEB_CLIENT_RELAY_PORT: 3480,
        WEB_PLATFORM_TCP_VIP_PORT: 3478,
        RELAY_ICE_TCP_MODE: e.Off,
        USE_AUTH_TOKEN_FOR_ICE: !0,
      },
      s = 500,
      u = 256 * 1024,
      c = 3,
      d = [1e3, 2e3, 3e3],
      m = 500;
    ((i.RelayIceTcpMode = e),
      (i.SctpConnectionConfig = l),
      (i.SLOW_WEBRTC_SETUP_THRESHOLD_MS = s),
      (i.MAX_BUFFER_BYTES = u),
      (i.MAX_SAME_PATH_RECONNECT_ATTEMPTS = c),
      (i.SAME_PATH_RECONNECT_BACKOFF_MS = d),
      (i.PER_CONNECTION_STAGGER_DELAY_MS = m));
  },
  66,
);
