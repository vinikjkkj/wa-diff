__d(
  "WAWebAppCommsCloseReason",
  ["WASocketCloseReason"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        AppLock: "app_lock",
        BetaOptInChanged: "beta_opt_in_changed",
        ClientFailureAccountLocked: "client_failure_account_locked",
        ClientFailureClientTooOld: "client_failure_client_too_old",
        ClientFailureNotAuthorized: "client_failure_not_authorized",
        ClientLogout: "client_logout",
        ClientTabTakeover: "client_tab_takeover",
        DebugClose: "debug_close",
        HandshakeTimeout: "handshake_timeout",
        NetworkOffline: "network_offline",
        PageUnload: "page_unload",
        ReconnectSocket: "reconnect_socket",
        RefreshQr: "refresh_qr",
        RegistrationFailure: "registration_failure",
        ServerFailure: "server_failure",
        StreamErrorAck: "stream_error_ack",
        StreamErrorCode515: "stream_error_code_515",
        StreamErrorCode516: "stream_error_code_516",
        StreamErrorCodeOther: "stream_error_code_other",
        StreamErrorDeviceRemoved: "stream_error_device_removed",
        StreamErrorOther: "stream_error_other",
        StreamErrorReplaced: "stream_error_replaced",
        StreamErrorXmlNotWellFormed: "stream_error_xml_not_well_formed",
        WindowsHybridDisconnect: "windows_hybrid_disconnect",
        WindowsHybridReconnect: "windows_hybrid_reconnect",
      },
      s = o("WASocketCloseReason").socketCloseReasons(e);
    l.AppCommsCloseReason = s;
  },
  98,
);
