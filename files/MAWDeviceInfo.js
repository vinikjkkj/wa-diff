__d(
  "MAWDeviceInfo",
  ["UserAgentData"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.get = function () {
            var e, t;
            return {
              device: [r("UserAgentData").browserName].join(" "),
              hardware: r("UserAgentData").platformName,
              lc: "en",
              lg: "en",
              manufacturer: r("UserAgentData").platformName,
              mcc: "000",
              mnc: "000",
              osBuild:
                (e = r("UserAgentData").platformVersion) != null ? e : "",
              osVersion:
                (t = r("UserAgentData").platformVersion) != null ? t : "",
              sim_mcc: "000",
              sim_mnc: "000",
            };
          }),
          e
        );
      })(),
      s = new e();
    l.deviceInfo = s;
  },
  98,
);
