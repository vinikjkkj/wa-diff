__d(
  "AdsTargetingDevicesAccessor",
  ["AdsTargetingDevices.experimental"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = {},
      u = {};
    (r("AdsTargetingDevices.experimental").allDevices.forEach(function (t, n) {
      e[t] = n;
    }),
      r("AdsTargetingDevices.experimental").iosDeviceIndicies.forEach(
        function (e) {
          s[e] = !0;
        },
      ),
      r("AdsTargetingDevices.experimental").androidDevicesIndicies.forEach(
        function (e) {
          u[e] = !0;
        },
      ));
    function c(t) {
      return s[e[t]] != null;
    }
    function d(t) {
      return u[e[t]] != null;
    }
    ((l.isIOSDevice = c), (l.isAndroidDevice = d));
  },
  98,
);
