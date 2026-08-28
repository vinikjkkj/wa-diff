__d(
  "MWSCastingCenterUtils",
  ["fbt", "MWSCastingCenterDeviceMediaStatus", "UserAgent", "formatDate"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 3e4;
    function u() {
      return r("UserAgent").isBrowser("Chrome for iOS");
    }
    function c(e) {
      var t = e.mediaType,
        n = e.status,
        a = e.time,
        i = "warning",
        l =
          t === "LAUNCH_APP"
            ? s._(/*BTDS*/ "Launching...")
            : s._(/*BTDS*/ "Opening...");
      if (n != null)
        switch (n) {
          case o("MWSCastingCenterDeviceMediaStatus").DeviceMediaStatus
            .LAUNCHING:
            break;
          case o("MWSCastingCenterDeviceMediaStatus").DeviceMediaStatus
            .LAUNCHED:
            ((i = "active"),
              (l =
                t === "LAUNCH_APP"
                  ? s._(/*BTDS*/ "Launched at {time}", [
                      s._param("time", r("formatDate")(a, "g:i A")),
                    ])
                  : s._(/*BTDS*/ "Opened at {time}", [
                      s._param("time", r("formatDate")(a, "g:i A")),
                    ])));
            break;
          case o("MWSCastingCenterDeviceMediaStatus").DeviceMediaStatus
            .DEVICE_UNAVAILABLE:
            ((i = "error"), (l = s._(/*BTDS*/ "Device unreachable")));
            break;
          case o("MWSCastingCenterDeviceMediaStatus").DeviceMediaStatus
            .CONTENT_UNAVAILABLE:
            ((i = "error"),
              (l =
                t === "LAUNCH_APP"
                  ? s._(/*BTDS*/ "App not installed")
                  : s._(/*BTDS*/ "File missing")));
            break;
          case o("MWSCastingCenterDeviceMediaStatus").DeviceMediaStatus
            .NETWORK_FAILURE:
            ((i = "error"), (l = s._(/*BTDS*/ "Network request failed")));
            break;
          case o("MWSCastingCenterDeviceMediaStatus").DeviceMediaStatus.FAILED:
            ((i = "error"), (l = s._(/*BTDS*/ "Unexpected error")));
            break;
        }
      return { statusIndicator: i, statusText: l };
    }
    ((l.REQUEST_TIMEOUT_MS = e),
      (l.isBrowserSupportedForMobileManagedCasting = u),
      (l.getMediaStatusIndicator = c));
  },
  226,
);
