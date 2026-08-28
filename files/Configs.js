__d(
  "Configs",
  ["StructuredConfigBase"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$ExampleConfig1 = t.getBool(0)),
            (t.$ExampleConfig2 = t.getBool(2)),
            (t.$ExampleConfig3 = t.getBool(1724)),
            (t.$ExampleConfig4 = t.getBool(2044)),
            (t.$ExampleConfig5 = t.getInt(1)),
            (t.$ExampleConfig6 = t.getInt(3)),
            (t.$ExampleConfig7 = t.getInt(2011)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateParams = function () {
            ((this.$ExampleConfig1 = this.getBool(0)),
              (this.$ExampleConfig2 = this.getBool(2)),
              (this.$ExampleConfig3 = this.getBool(1724)),
              (this.$ExampleConfig4 = this.getBool(2044)),
              (this.$ExampleConfig5 = this.getInt(1)),
              (this.$ExampleConfig6 = this.getInt(3)),
              (this.$ExampleConfig7 = this.getInt(2011)));
          }),
          (n.isEnabled = function () {
            return this.$ExampleConfig1;
          }),
          (n.isSomeBoolean = function () {
            return this.$ExampleConfig2;
          }),
          (n.isSomeOtherIntegerHasValue = function () {
            return this.$ExampleConfig3;
          }),
          (n.isSomeOtherBoolean = function () {
            return this.$ExampleConfig4;
          }),
          (n.getSomeInteger = function () {
            return this.$ExampleConfig5;
          }),
          (n.getSomeOtherInteger = function () {
            return this.$ExampleConfig6;
          }),
          (n.getSomeDouble = function () {
            return this.$ExampleConfig7;
          }),
          t
        );
      })((e = n("StructuredConfigBase"))),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$PreferredCaptureConfig1 = t.getBool(173)),
            (t.$PreferredCaptureConfig2 = t.getBool(3919)),
            (t.$PreferredCaptureConfig3 = t.getBool(4478)),
            (t.$PreferredCaptureConfig4 = t.getInt(174)),
            (t.$PreferredCaptureConfig5 = t.getInt(175)),
            (t.$PreferredCaptureConfig6 = t.getInt(176)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateParams = function () {
            ((this.$PreferredCaptureConfig1 = this.getBool(173)),
              (this.$PreferredCaptureConfig2 = this.getBool(3919)),
              (this.$PreferredCaptureConfig3 = this.getBool(4478)),
              (this.$PreferredCaptureConfig4 = this.getInt(174)),
              (this.$PreferredCaptureConfig5 = this.getInt(175)),
              (this.$PreferredCaptureConfig6 = this.getInt(176)));
          }),
          (n.isEnabled = function () {
            return this.$PreferredCaptureConfig1;
          }),
          (n.isPreferStableFps = function () {
            return this.$PreferredCaptureConfig2;
          }),
          (n.isEnabledForZenon = function () {
            return this.$PreferredCaptureConfig3;
          }),
          (n.getWidthPx = function () {
            return this.$PreferredCaptureConfig4;
          }),
          (n.getHeightPx = function () {
            return this.$PreferredCaptureConfig5;
          }),
          (n.getFps = function () {
            return this.$PreferredCaptureConfig6;
          }),
          t
        );
      })(e),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$ZenonSdpTransformConfig1 = t.getBool(244)),
            (t.$ZenonSdpTransformConfig2 = t.getBool(420)),
            (t.$ZenonSdpTransformConfig3 = t.getBool(421)),
            (t.$ZenonSdpTransformConfig4 = t.getBool(245)),
            (t.$ZenonSdpTransformConfig5 = t.getBool(246)),
            (t.$ZenonSdpTransformConfig6 = t.getBool(248)),
            (t.$ZenonSdpTransformConfig7 = t.getBool(1448)),
            (t.$ZenonSdpTransformConfig8 = t.getBool(1444)),
            (t.$ZenonSdpTransformConfig9 = t.getBool(1445)),
            (t.$ZenonSdpTransformConfig10 = t.getInt(1446)),
            (t.$ZenonSdpTransformConfig11 = t.getInt(1447)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateParams = function () {
            ((this.$ZenonSdpTransformConfig1 = this.getBool(244)),
              (this.$ZenonSdpTransformConfig2 = this.getBool(420)),
              (this.$ZenonSdpTransformConfig3 = this.getBool(421)),
              (this.$ZenonSdpTransformConfig4 = this.getBool(245)),
              (this.$ZenonSdpTransformConfig5 = this.getBool(246)),
              (this.$ZenonSdpTransformConfig6 = this.getBool(248)),
              (this.$ZenonSdpTransformConfig7 = this.getBool(1448)),
              (this.$ZenonSdpTransformConfig8 = this.getBool(1444)),
              (this.$ZenonSdpTransformConfig9 = this.getBool(1445)),
              (this.$ZenonSdpTransformConfig10 = this.getInt(1446)),
              (this.$ZenonSdpTransformConfig11 = this.getInt(1447)));
          }),
          (n.isPreserveH264 = function () {
            return this.$ZenonSdpTransformConfig1;
          }),
          (n.isPreferH264ForMwCall = function () {
            return this.$ZenonSdpTransformConfig2;
          }),
          (n.isPreferSwH264 = function () {
            return this.$ZenonSdpTransformConfig3;
          }),
          (n.isAddAudioNack = function () {
            return this.$ZenonSdpTransformConfig4;
          }),
          (n.isDisableOpusStereo = function () {
            return this.$ZenonSdpTransformConfig5;
          }),
          (n.isPreferIsacForGroupAudio = function () {
            return this.$ZenonSdpTransformConfig6;
          }),
          (n.isEnableOpusFmtpMunging = function () {
            return this.$ZenonSdpTransformConfig7;
          }),
          (n.isSetOpusUsedtx = function () {
            return this.$ZenonSdpTransformConfig8;
          }),
          (n.isSetOpusUseinbandfec = function () {
            return this.$ZenonSdpTransformConfig9;
          }),
          (n.getSetOpusMaxplaybackrate = function () {
            return this.$ZenonSdpTransformConfig10;
          }),
          (n.getSetOpusMaxaveragebitrate = function () {
            return this.$ZenonSdpTransformConfig11;
          }),
          t
        );
      })(e),
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$ZenonPeerConnectionConfig1 = t.getBool(302)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateParams = function () {
            this.$ZenonPeerConnectionConfig1 = this.getBool(302);
          }),
          (n.isRtpDataChannels = function () {
            return this.$ZenonPeerConnectionConfig1;
          }),
          t
        );
      })(e),
      d = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$ZenonStartCallImmediatelyConfig1 = t.getBool(308)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateParams = function () {
            this.$ZenonStartCallImmediatelyConfig1 = this.getBool(308);
          }),
          (n.isEnabled = function () {
            return this.$ZenonStartCallImmediatelyConfig1;
          }),
          t
        );
      })(e),
      m = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$ZenonGeneralizedIdentityConfig1 = t.getInt(1891)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateParams = function () {
            this.$ZenonGeneralizedIdentityConfig1 = this.getInt(1891);
          }),
          (n.getDuplicatedParticipantsProcessingMode = function () {
            return this.$ZenonGeneralizedIdentityConfig1;
          }),
          t
        );
      })(e),
      p = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$ZenonMultiCallSupportConfig1 = t.getInt(309)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateParams = function () {
            this.$ZenonMultiCallSupportConfig1 = this.getInt(309);
          }),
          (n.getMaxConnectedCalls = function () {
            return this.$ZenonMultiCallSupportConfig1;
          }),
          t
        );
      })(e),
      _ = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$ZenonPlatformSupportConfig1 = t.getBool(316)),
            (t.$ZenonPlatformSupportConfig2 = t.getBool(318)),
            (t.$ZenonPlatformSupportConfig3 = t.getBool(2251)),
            (t.$ZenonPlatformSupportConfig4 = t.getBool(1900)),
            (t.$ZenonPlatformSupportConfig5 = t.getInt(317)),
            (t.$ZenonPlatformSupportConfig6 = t.getInt(319)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateParams = function () {
            ((this.$ZenonPlatformSupportConfig1 = this.getBool(316)),
              (this.$ZenonPlatformSupportConfig2 = this.getBool(318)),
              (this.$ZenonPlatformSupportConfig3 = this.getBool(2251)),
              (this.$ZenonPlatformSupportConfig4 = this.getBool(1900)),
              (this.$ZenonPlatformSupportConfig5 = this.getInt(317)),
              (this.$ZenonPlatformSupportConfig6 = this.getInt(319)));
          }),
          (n.isSupportsZenonPlatform = function () {
            return this.$ZenonPlatformSupportConfig1;
          }),
          (n.isStartImmediatelyEnabled = function () {
            return this.$ZenonPlatformSupportConfig2;
          }),
          (n.isUploadSummaryOnCallEnded = function () {
            return this.$ZenonPlatformSupportConfig3;
          }),
          (n.isMultiwayAvEscalationEnabled = function () {
            return this.$ZenonPlatformSupportConfig4;
          }),
          (n.getMaxConnectedCalls = function () {
            return this.$ZenonPlatformSupportConfig5;
          }),
          (n.getParentWindowConnectionTimeoutMs = function () {
            return this.$ZenonPlatformSupportConfig6;
          }),
          t
        );
      })(e),
      f = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$ZenonSimulcastConfig1 = t.getBool(453)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateParams = function () {
            this.$ZenonSimulcastConfig1 = this.getBool(453);
          }),
          (n.isSimulcastEnabled = function () {
            return this.$ZenonSimulcastConfig1;
          }),
          t
        );
      })(e),
      g = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$DynamicRuleConfig1 = t.getBool(1342)),
            (t.$DynamicRuleConfig2 = t.getBool(1597)),
            (t.$DynamicRuleConfig3 = t.getInt(1359)),
            (t.$DynamicRuleConfig4 = t.getInt(1510)),
            (t.$DynamicRuleConfig5 = t.getInt(1612)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateParams = function () {
            ((this.$DynamicRuleConfig1 = this.getBool(1342)),
              (this.$DynamicRuleConfig2 = this.getBool(1597)),
              (this.$DynamicRuleConfig3 = this.getInt(1359)),
              (this.$DynamicRuleConfig4 = this.getInt(1510)),
              (this.$DynamicRuleConfig5 = this.getInt(1612)));
          }),
          (n.isEnabled = function () {
            return this.$DynamicRuleConfig1;
          }),
          (n.isDebugLoggingEnabled = function () {
            return this.$DynamicRuleConfig2;
          }),
          (n.getProcessIntervalMs = function () {
            return this.$DynamicRuleConfig3;
          }),
          (n.getNetworkProcessIntervalMs = function () {
            return this.$DynamicRuleConfig4;
          }),
          (n.getDebugLoggingIntervalMs = function () {
            return this.$DynamicRuleConfig5;
          }),
          t
        );
      })(e),
      h = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$SignalingPingConfig1 = t.getInt(1470)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateParams = function () {
            this.$SignalingPingConfig1 = this.getInt(1470);
          }),
          (n.getPingIntervalMs = function () {
            return this.$SignalingPingConfig1;
          }),
          t
        );
      })(e),
      y = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$NetEqAiConfig1 = t.getBool(4550)),
            (t.$NetEqAiConfig2 = t.getBool(4551)),
            (t.$NetEqAiConfig3 = t.getInt(4552)),
            (t.$NetEqAiConfig4 = t.getInt(5477)),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.updateParams = function () {
            ((this.$NetEqAiConfig1 = this.getBool(4550)),
              (this.$NetEqAiConfig2 = this.getBool(4551)),
              (this.$NetEqAiConfig3 = this.getInt(4552)),
              (this.$NetEqAiConfig4 = this.getInt(5477)));
          }),
          (n.isEnabled = function () {
            return this.$NetEqAiConfig1;
          }),
          (n.isDisableTimeStretching = function () {
            return this.$NetEqAiConfig2;
          }),
          (n.getPacketWaitTimeMs = function () {
            return this.$NetEqAiConfig3;
          }),
          (n.getCngDelayMs = function () {
            return this.$NetEqAiConfig4;
          }),
          t
        );
      })(e);
    a.exports = {
      ExampleConfig: l,
      PreferredCaptureConfig: s,
      ZenonSdpTransformConfig: u,
      ZenonPeerConnectionConfig: c,
      ZenonStartCallImmediatelyConfig: d,
      ZenonGeneralizedIdentityConfig: m,
      ZenonMultiCallSupportConfig: p,
      ZenonPlatformSupportConfig: _,
      ZenonSimulcastConfig: f,
      DynamicRuleConfig: g,
      SignalingPingConfig: h,
      NetEqAiConfig: y,
    };
  },
  null,
);
