__d(
  "WAWebApiGetDeviceUpdateLock",
  ["WAWebBizCoexGatingUtils", "WAWebModelStorageUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      (n === void 0 && (n = !1), r === void 0 && (r = !1));
      var a = ["participant", "device-list"];
      return (
        t && (a = [].concat(a, ["message", "message-association"])),
        n && (a = [].concat(a, ["missing-keys"])),
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() &&
          r &&
          (a = [].concat(a, ["contact"])),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(a, function () {
            return e();
          })
      );
    }
    l.getDeviceUpdateLock = e;
  },
  98,
);
