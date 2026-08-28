__d(
  "WAWebApiGetDeviceUpdateLock",
  ["WAWebModelStorageUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.callback,
        n = e.hasAdvAccountTypeChange,
        r = n === void 0 ? !1 : n,
        a = e.hasNewNotification,
        i = e.shouldUpdateSyncdMissingKeyDevices,
        l = i === void 0 ? !1 : i,
        s = ["participant", "device-list"];
      return (
        a && (s = [].concat(s, ["message", "message-association"])),
        l && (s = [].concat(s, ["missing-keys"])),
        r && (s = [].concat(s, ["contact"])),
        o("WAWebModelStorageUtils")
          .getStorage()
          .lock(s, function () {
            return t();
          })
      );
    }
    l.getDeviceUpdateLock = e;
  },
  98,
);
