__d(
  "WAGetLocalDeviceIdApi",
  ["WADbSignal", "WALogger", "WASignalDB", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {
        return o("WASignalDB")
          .getDb()
          .runInTransaction(
            ["meta"],
            "readonly",
            async function (t) {
              var n,
                a = await t.stores.meta.get(
                  o("WADbSignal").MetaKeysEnum.deviceId,
                );
              if (
                (a == null || (n = a.value) == null ? void 0 : n.deviceId) ==
                null
              ) {
                var i = "[Remote Presence Error] DeviceId was null";
                throw (
                  o("WALogger").ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    i,
                  ),
                  r("err")(i)
                );
              }
              return a.value.deviceId;
            },
            o("WASignalDB").signalOp("getLocalDeviceId"),
          );
      };
    l.getLocalDeviceId = s;
  },
  98,
);
