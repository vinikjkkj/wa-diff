__d(
  "WAWebWindowsHybridBridgeMetaConfig.v2633",
  [
    "WAWebABPropsCache",
    "WAWebHybridMetaConfig",
    "WAWebHybridMetaConfigEnabled",
    "WAWebODS",
    "WAWebWindowsHybridBridgeTrace",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$2 = !1),
          (this.$4 = function () {
            var e = o("WAWebHybridMetaConfig").getAllHybridMetaConfigs();
            (r("WAWebODS").incr(
              "web.hybrid.bridge.metaconfig.send.set_configs",
            ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                { bridge: "metaConfig", method: "setConfigs", type: "async" },
                function () {
                  return t.$1.setConfigs(JSON.stringify(e));
                },
              ));
          }),
          (this.$3 = function (e) {
            var n = e.toString();
            o("WAWebHybridMetaConfig").logHybridMetaConfigExposure(n) &&
              (r("WAWebODS").incr(
                "web.hybrid.bridge.metaconfig.send.acknowledge_exposure",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "metaConfig",
                  method: "acknowledgeExposure",
                  type: "async",
                },
                function () {
                  return t.$1.acknowledgeExposure(n);
                },
              ));
          }),
          (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.initialize = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            this.$2 ||
              ((this.$2 = !0),
              yield o("WAWebABPropsCache").waitForABPropConfigsReady(),
              o("WAWebHybridMetaConfigEnabled").isHybridMetaConfigEnabled() &&
                (this.$1.addEventListener("exposureLogged", this.$3),
                this.$1.subscribe(null),
                this.$4()));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    l.WindowsHybridBridgeMetaConfig_v2633 = e;
  },
  98,
);
