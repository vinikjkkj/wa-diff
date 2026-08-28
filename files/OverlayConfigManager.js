__d(
  "OverlayConfigManager",
  ["Configs", "OverlayConfigLayerManager"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("Configs")).ExampleConfig,
      s = e.PreferredCaptureConfig,
      u = e.ZenonSdpTransformConfig,
      c = e.ZenonPeerConnectionConfig,
      d = e.ZenonStartCallImmediatelyConfig,
      m = e.ZenonGeneralizedIdentityConfig,
      p = e.ZenonMultiCallSupportConfig,
      _ = e.ZenonPlatformSupportConfig,
      f = e.ZenonSimulcastConfig,
      g = e.DynamicRuleConfig,
      h = e.SignalingPingConfig,
      y = e.NetEqAiConfig,
      C = (function () {
        function e() {
          this.layerManager = new (n("OverlayConfigLayerManager"))();
        }
        var t = e.prototype;
        return (
          (t.getExampleConfig = function () {
            return new l(this.layerManager);
          }),
          (t.getPreferredCaptureConfig = function () {
            return new s(this.layerManager);
          }),
          (t.getZenonSdpTransformConfig = function () {
            return new u(this.layerManager);
          }),
          (t.getZenonPeerConnectionConfig = function () {
            return new c(this.layerManager);
          }),
          (t.getZenonStartCallImmediatelyConfig = function () {
            return new d(this.layerManager);
          }),
          (t.getZenonGeneralizedIdentityConfig = function () {
            return new m(this.layerManager);
          }),
          (t.getZenonMultiCallSupportConfig = function () {
            return new p(this.layerManager);
          }),
          (t.getZenonPlatformSupportConfig = function () {
            return new _(this.layerManager);
          }),
          (t.getZenonSimulcastConfig = function () {
            return new f(this.layerManager);
          }),
          (t.getDynamicRuleConfig = function () {
            return new g(this.layerManager);
          }),
          (t.getSignalingPingConfig = function () {
            return new h(this.layerManager);
          }),
          (t.getNetEqAiConfig = function () {
            return new y(this.layerManager);
          }),
          e
        );
      })();
    a.exports = C;
  },
  null,
);
