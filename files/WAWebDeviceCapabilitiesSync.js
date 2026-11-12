__d(
  "WAWebDeviceCapabilitiesSync",
  ["WAWebDeviceCapabilitiesSyncBase", "WAWebSyncdConst", "WAWebUserUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getAction = function () {
            return o("WAWebSyncdConst").Actions.DeviceCapabilities;
          }),
          (n.getJidIndex = function () {
            return o("WAWebUserUtils")
              .getMeDevicePnOrThrow_DO_NOT_USE()
              .toString({ legacy: !0 });
          }),
          t
        );
      })(r("WAWebDeviceCapabilitiesSyncBase")),
      s = new e();
    l.default = s;
  },
  98,
);
