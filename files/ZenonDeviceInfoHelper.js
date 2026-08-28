__d(
  "ZenonDeviceInfoHelper",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = -1,
      l = !1,
      s = {
        getBatteryStats: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield s.internalGetWindow().navigator.getBattery;
            if (typeof t != "function")
              return { level: e, placeholder: !0, wasCharged: !1 };
            var n = yield t.call(navigator);
            return (
              n.charging
                ? (l = !0)
                : (n.onchargingchange = function (e) {
                    (e.target.charging && (l = !0),
                      (e.target.onchargingchange = null));
                  }),
              { level: n.level * 100, placeholder: !1, wasCharged: l }
            );
          });
          function r() {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        internalGetWindow: function () {
          return window;
        },
      },
      u = s;
    i.default = u;
  },
  66,
);
