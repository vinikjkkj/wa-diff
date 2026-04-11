__d(
  "WAWebDeviceInfoBridgeApi",
  ["Promise", "WAWebL10N", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "0.1",
      u = (function () {
        function t() {
          this.$1 = null;
        }
        var o = t.prototype;
        return (
          (o.get = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (
                this.$1 == null && (this.$1 = yield this.getOsRelease()),
                {
                  osVersion: this.$1,
                  osBuild: "0.1",
                  hardware: "desktop",
                  manufacturer: "",
                  device: "Desktop",
                  lg: r("WAWebL10N").getLanguage(),
                  lc: r("WAWebL10N").getRegion() || "",
                  mcc: "000",
                  mnc: "000",
                  sim_mnc: "000",
                  sim_mcc: "000",
                }
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (o.getOsRelease = function () {
            return (e || (e = n("Promise"))).resolve(s);
          }),
          t
        );
      })(),
      c = new u(),
      d = {
        getDeviceInfo: function () {
          return c.get();
        },
      };
    l.DeviceInfoBridgeApi = d;
  },
  98,
);
