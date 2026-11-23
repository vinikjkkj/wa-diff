__d(
  "WARemoveCurrentDevice",
  [
    "WAGetCurrentUserDeviceInfoApi",
    "WAGlobals",
    "WALogger",
    "WARemoveDevice",
    "WAResultOrError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = async function () {
        var t = await o(
          "WAGetCurrentUserDeviceInfoApi",
        ).getCurrentUserDeviceInfo();
        if (t == null)
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "There is no stored user info, it was already deleted or this job was called twice, possibly from another tab",
                ])),
            ),
            o("WAResultOrError").makeResult()
          );
        var n = t.deviceId,
          r = t.identityKey,
          a = await o("WARemoveDevice").removeDevice({
            deviceId: n,
            identity: r,
          });
        return (
          a.success &&
            (await o("WAGlobals").getDependencies().clearSignalAndTempStores()),
          o("WAResultOrError").makeResult()
        );
      };
    l.removeCurrentDevice = s;
  },
  98,
);
