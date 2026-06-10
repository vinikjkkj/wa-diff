__d(
  "WAWebVoipSctpConnectionManagerConstants",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        CLOSE_OLD_CONNECTION_BEFORE_CALL_END: !1,
        FAUX_WEB_CLIENT_RELAY_PORT: 3478,
        TRUE_WEB_CLIENT_RELAY_PORT: 3480,
        USE_AUTH_TOKEN_FOR_ICE: !0,
      },
      l = 500,
      s = 256 * 1024,
      u = 3,
      c = [1e3, 2e3, 3e3],
      d = 500;
    ((i.SctpConnectionConfig = e),
      (i.SLOW_WEBRTC_SETUP_THRESHOLD_MS = l),
      (i.MAX_BUFFER_BYTES = s),
      (i.MAX_SAME_PATH_RECONNECT_ATTEMPTS = u),
      (i.SAME_PATH_RECONNECT_BACKOFF_MS = c),
      (i.PER_CONNECTION_STAGGER_DELAY_MS = d));
  },
  66,
);
