__d(
  "OverlayConfigLayerBuilder",
  ["FBLogger", "OverlayConfigConstants", "OverlayConfigLayer"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = new Array(
          n("OverlayConfigConstants").OverlayConfigNumParameters,
        ).fill(n("OverlayConfigConstants").OverlayConfigNotPresentFlagValue)),
          (this.$2 = e));
      }
      var t = e.prototype;
      return (
        (t.build = function () {
          return new (n("OverlayConfigLayer"))(this.$2, this.$1);
        }),
        (t.$3 = function (t, r) {
          if (t >= n("OverlayConfigConstants").OverlayConfigNumParameters)
            throw n("FBLogger")("rtc_www").mustfixThrow(
              "Parameter ID passed in exceeds max parameter id",
            );
          this.$1[t] = r;
        }),
        (t.$4 = function (t, n) {
          this.$3(t, n ? 1 : 0);
        }),
        (t.setExampleConfigEnabled = function (t) {
          this.$4(0, t);
        }),
        (t.setExampleConfigSomeBoolean = function (t) {
          this.$4(2, t);
        }),
        (t.setExampleConfigSomeOtherIntegerHasValue = function (t) {
          this.$4(1724, t);
        }),
        (t.setExampleConfigSomeOtherBoolean = function (t) {
          this.$4(2044, t);
        }),
        (t.setExampleConfigSomeInteger = function (t) {
          this.$3(1, t);
        }),
        (t.setExampleConfigSomeOtherInteger = function (t) {
          this.$3(3, t);
        }),
        (t.setExampleConfigSomeDouble = function (t) {
          this.$3(2011, t);
        }),
        (t.setPreferredCaptureConfigEnabled = function (t) {
          this.$4(173, t);
        }),
        (t.setPreferredCaptureConfigPreferStableFps = function (t) {
          this.$4(3919, t);
        }),
        (t.setPreferredCaptureConfigEnabledForZenon = function (t) {
          this.$4(4478, t);
        }),
        (t.setPreferredCaptureConfigWidthPx = function (t) {
          this.$3(174, t);
        }),
        (t.setPreferredCaptureConfigHeightPx = function (t) {
          this.$3(175, t);
        }),
        (t.setPreferredCaptureConfigFps = function (t) {
          this.$3(176, t);
        }),
        (t.setZenonSdpTransformConfigPreserveH264 = function (t) {
          this.$4(244, t);
        }),
        (t.setZenonSdpTransformConfigPreferH264ForMwCall = function (t) {
          this.$4(420, t);
        }),
        (t.setZenonSdpTransformConfigPreferSwH264 = function (t) {
          this.$4(421, t);
        }),
        (t.setZenonSdpTransformConfigAddAudioNack = function (t) {
          this.$4(245, t);
        }),
        (t.setZenonSdpTransformConfigDisableOpusStereo = function (t) {
          this.$4(246, t);
        }),
        (t.setZenonSdpTransformConfigPreferIsacForGroupAudio = function (t) {
          this.$4(248, t);
        }),
        (t.setZenonSdpTransformConfigEnableOpusFmtpMunging = function (t) {
          this.$4(1448, t);
        }),
        (t.setZenonSdpTransformConfigSetOpusUsedtx = function (t) {
          this.$4(1444, t);
        }),
        (t.setZenonSdpTransformConfigSetOpusUseinbandfec = function (t) {
          this.$4(1445, t);
        }),
        (t.setZenonSdpTransformConfigSetOpusMaxplaybackrate = function (t) {
          this.$3(1446, t);
        }),
        (t.setZenonSdpTransformConfigSetOpusMaxaveragebitrate = function (t) {
          this.$3(1447, t);
        }),
        (t.setZenonPeerConnectionConfigRtpDataChannels = function (t) {
          this.$4(302, t);
        }),
        (t.setZenonStartCallImmediatelyConfigEnabled = function (t) {
          this.$4(308, t);
        }),
        (t.setZenonGeneralizedIdentityConfigDuplicatedParticipantsProcessingMode =
          function (t) {
            this.$3(1891, t);
          }),
        (t.setZenonMultiCallSupportConfigMaxConnectedCalls = function (t) {
          this.$3(309, t);
        }),
        (t.setZenonPlatformSupportConfigSupportsZenonPlatform = function (t) {
          this.$4(316, t);
        }),
        (t.setZenonPlatformSupportConfigStartImmediatelyEnabled = function (t) {
          this.$4(318, t);
        }),
        (t.setZenonPlatformSupportConfigUploadSummaryOnCallEnded = function (
          t,
        ) {
          this.$4(2251, t);
        }),
        (t.setZenonPlatformSupportConfigMultiwayAvEscalationEnabled = function (
          t,
        ) {
          this.$4(1900, t);
        }),
        (t.setZenonPlatformSupportConfigMaxConnectedCalls = function (t) {
          this.$3(317, t);
        }),
        (t.setZenonPlatformSupportConfigParentWindowConnectionTimeoutMs =
          function (t) {
            this.$3(319, t);
          }),
        (t.setZenonSimulcastConfigSimulcastEnabled = function (t) {
          this.$4(453, t);
        }),
        (t.setDynamicRuleConfigEnabled = function (t) {
          this.$4(1342, t);
        }),
        (t.setDynamicRuleConfigDebugLoggingEnabled = function (t) {
          this.$4(1597, t);
        }),
        (t.setDynamicRuleConfigProcessIntervalMs = function (t) {
          this.$3(1359, t);
        }),
        (t.setDynamicRuleConfigNetworkProcessIntervalMs = function (t) {
          this.$3(1510, t);
        }),
        (t.setDynamicRuleConfigDebugLoggingIntervalMs = function (t) {
          this.$3(1612, t);
        }),
        (t.setSignalingPingConfigPingIntervalMs = function (t) {
          this.$3(1470, t);
        }),
        (t.setNetEqAiConfigEnabled = function (t) {
          this.$4(4550, t);
        }),
        (t.setNetEqAiConfigDisableTimeStretching = function (t) {
          this.$4(4551, t);
        }),
        (t.setNetEqAiConfigPacketWaitTimeMs = function (t) {
          this.$3(4552, t);
        }),
        (t.setNetEqAiConfigCngDelayMs = function (t) {
          this.$3(5477, t);
        }),
        e
      );
    })();
    a.exports = e;
  },
  null,
);
