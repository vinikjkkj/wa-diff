__d(
  "WAWebDeviceCapabilitiesV2Sync",
  [
    "WAWebABProps",
    "WAWebDeviceCapabilitiesSyncBase",
    "WAWebSyncdConst",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getAction = function () {
            return o("WAWebSyncdConst").Actions.DeviceCapabilitiesV2;
          }),
          (n.getJidIndex = function () {
            return o("WAWebUserUtils").getMeDeviceLidOrThrow().toString();
          }),
          (n.getValueField = function () {
            return "deviceCapabilitiesV2";
          }),
          (n.applyMutations = async function (n) {
            return o("WAWebABProps").getABPropConfigValue(
              "device_capabilities_v2_sync_enabled",
            )
              ? e.prototype.applyMutations.call(this, n)
              : n.map(function () {
                  return {
                    actionState: o("WAWebSyncdConst").SyncActionState.Success,
                  };
                });
          }),
          t
        );
      })(r("WAWebDeviceCapabilitiesSyncBase")),
      s = new e();
    l.default = s;
  },
  98,
);
