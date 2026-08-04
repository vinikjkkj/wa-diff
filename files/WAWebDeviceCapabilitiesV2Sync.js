__d(
  "WAWebDeviceCapabilitiesV2Sync",
  [
    "WAWebABProps",
    "WAWebDeviceCapabilitiesSyncBase",
    "WAWebSyncdConst",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.getAction = function () {
            return o("WAWebSyncdConst").Actions.DeviceCapabilitiesV2;
          }),
          (r.getJidIndex = function () {
            return o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow().toString();
          }),
          (r.getValueField = function () {
            return "deviceCapabilitiesV2";
          }),
          (r.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                return o("WAWebABProps").getABPropConfigValue(
                  "device_capabilities_v2_sync_enabled",
                )
                  ? e.prototype.applyMutations.call(this, t)
                  : t.map(function () {
                      return {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Success,
                      };
                    });
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          t
        );
      })(r("WAWebDeviceCapabilitiesSyncBase")),
      s = new e();
    l.default = s;
  },
  98,
);
