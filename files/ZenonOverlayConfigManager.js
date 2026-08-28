__d(
  "ZenonOverlayConfigManager",
  [
    "ChromeOverlayConfigLayer",
    "EdgeOverlayConfigLayer",
    "FirefoxOverlayConfigLayer",
    "JSResourceForInteraction",
    "OperaOverlayConfigLayer",
    "OverlayConfigManager",
    "Promise",
    "UserAgentData",
    "ZenonDGWUtils",
    "qex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResourceForInteraction")("RTWebSignalingListener").__setRef(
        "ZenonOverlayConfigManager",
      ),
      u = r("JSResourceForInteraction")("DGWSignalingListener").__setRef(
        "ZenonOverlayConfigManager",
      ),
      c = r("JSResourceForInteraction")(
        "SharedWorkerSignalingListener",
      ).__setRef("ZenonOverlayConfigManager"),
      d = (function () {
        function t(t) {
          ((this.$1 = t), (this.$2 = new (r("OverlayConfigManager"))()));
          var o = {
              Chrome: r("ChromeOverlayConfigLayer"),
              "Edge (Chromium Based)": r("EdgeOverlayConfigLayer"),
              "Edge PWA (Chromium Based)": r("EdgeOverlayConfigLayer"),
              Firefox: r("FirefoxOverlayConfigLayer"),
              Opera: r("OperaOverlayConfigLayer"),
            },
            a = o[r("UserAgentData").browserName];
          (a && this.$2.layerManager.addLayer(a),
            t.appConfig && this.$2.layerManager.addLayer(t.appConfig),
            t.signalingListener &&
              (this.$3 = (e || (e = n("Promise"))).resolve(
                t.signalingListener,
              )));
        }
        var a = t.prototype;
        return (
          (a.getRelayEnvironment = function () {
            return this.$1.relayEnvironment;
          }),
          (a.getSignalingListener = function () {
            return this.$3
              ? this.$3
              : (o("ZenonDGWUtils").shouldUseDGW()
                  ? r("qex")._("4380")
                    ? (this.$3 = c.load().then(function (e) {
                        return new e();
                      }))
                    : (this.$3 = u.load().then(function (e) {
                        return new e();
                      }))
                  : (this.$3 = s.load().then(function (e) {
                      return new e();
                    })),
                this.$3);
          }),
          (a.getEdgerayHostname = function () {
            return this.$1.edgerayHostname;
          }),
          (a.getConfigManager = function () {
            return this.$2;
          }),
          (a.shouldUseWASMSignaling = function () {
            return this.$1.useWASMSignaling === !0;
          }),
          (a.getWASMConfig = function () {
            return this.$1.wasmConfig;
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
