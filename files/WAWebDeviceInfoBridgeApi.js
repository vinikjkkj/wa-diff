__d(
  "WAWebDeviceInfoBridgeApi",
  ["WAWebL10N"],
  function (t, n, r, o, a, i, l) {
    var e = "0.1",
      s = (function () {
        function t() {
          this.$1 = null;
        }
        var n = t.prototype;
        return (
          (n.get = async function () {
            return (
              this.$1 == null && (this.$1 = await this.getOsRelease()),
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
          }),
          (n.getOsRelease = function () {
            return Promise.resolve(e);
          }),
          t
        );
      })(),
      u = new s(),
      c = {
        getDeviceInfo: function () {
          return u.get();
        },
      };
    l.DeviceInfoBridgeApi = c;
  },
  98,
);
