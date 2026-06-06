__d(
  "WAWebVoipHandleNativeCallEventMediaHandlers",
  [
    "WAWebBackendApi",
    "WAWebUserPrefsMeUser",
    "WAWebVoipEncodeTargetFpsState",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoCaptureAndRendering",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWebCodecsEncoderState",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseVideoStateChangedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleVideoStateChange",
              { videoStateData: n },
            );
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parsePeerVideoPermissionChangedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handlePeerVideoPermissionChange",
              { peerVideoPermissionData: n },
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (e.type === "web") {
            o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
              activity: "get_call_info",
              details: "mute_state",
            });
            var t = yield e.getCallInfo();
            if (t === "") return;
            var n = e.parsers.parseCallInfo(t);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleMuteStateChange",
              { callInfo: n },
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseAudioDriverRestartData(e);
            n.isDueToSilenceDetected &&
              o("WAWebBackendApi").frontendFireAndForget(
                "showMicrophoneSilenceToast",
                {},
              );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseSpeakerStatusChangedData(e);
            for (var a of n.Participants)
              a.AudioLevel > 0 &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "handleAudioLevelChange",
                  { participantJid: a.Jid },
                );
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseReactionStateChangedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleReactionStateChange",
              { reactionData: n },
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseScreenShareStateChangedData(e);
            (n.state === o("WAWebVoipWaCallEnums").ScreenShareState.Stopped &&
              o("WAWebUserPrefsMeUser").isMeAccount(n.sharer_jid) &&
              o("WAWebVoipVideoCaptureAndRendering").stopDesktopCaptureJS(),
              o("WAWebBackendApi").frontendFireAndForget(
                "handleScreenShareStateChange",
                n,
              ));
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseRaiseHandStateChangedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleRaiseHandStateChange",
              { raiseHandData: n },
            );
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseEncodeTargetFpsChangedData(e);
            o("WAWebVoipEncodeTargetFpsState").updateEncodeTargetFps(
              n.targetFps,
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseEncodeParamsChangedData(e);
            o("WAWebVoipWebCodecsEncoderState").updateWebCodecsEncodeParams(n);
          }
        })),
        k.apply(this, arguments)
      );
    }
    ((l.handleVideoStateChanged = e),
      (l.handlePeerVideoPermissionChanged = u),
      (l.handleMuteStateChanged = d),
      (l.handleAudioDriverRestart = p),
      (l.handleSpeakerStatusChanged = f),
      (l.handleReactionStateChanged = h),
      (l.handleScreenShareStateChanged = C),
      (l.handleRaiseHandStateChanged = v),
      (l.handleEncodeTargetFpsChanged = R),
      (l.handleEncodeParamsChanged = E),
      (l.resetWebCodecsEncoderState = o(
        "WAWebVoipWebCodecsEncoderState",
      ).resetWebCodecsEncoderState));
  },
  98,
);
