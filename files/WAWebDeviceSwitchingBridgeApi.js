__d(
  "WAWebDeviceSwitchingBridgeApi",
  ["WAWebDeviceSwitchAction"],
  function (t, n, r, o, a, i, l) {
    var e = {
      showDeviceSwitchOtp: function (t) {
        var e = t.otpCode;
        o("WAWebDeviceSwitchAction").handleOpenDeviceSwitchCode(e);
      },
    };
    l.DeviceSwitchingBridgeApi = e;
  },
  98,
);
