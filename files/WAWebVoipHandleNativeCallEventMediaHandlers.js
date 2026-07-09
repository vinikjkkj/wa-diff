__d(
  "WAWebVoipHandleNativeCallEventMediaHandlers",
  [
    "WALogger",
    "WAThrottle",
    "WAWebBackendApi",
    "WAWebUserPrefsMeUser",
    "WAWebVoipDualStreamScreenShareState",
    "WAWebVoipEncodeTargetFpsState",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoCaptureAndRendering",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWebCodecsEncoderState",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 50;
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
            var n = t.parsers.parseVideoStateChangedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleVideoStateChange",
              { videoStateData: n },
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        m.apply(this, arguments)
      );
    }
    var p = o("WAThrottle").throttle(
        function () {
          g().catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleMuteStateChanged: dispatch failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("voip-mute-state-dispatch-failed");
          });
        },
        s,
        { leading: !0, trailing: !0 },
      ),
      _ = 0;
    function f() {
      p();
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = ++_,
            t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
          if (t.type === "web") {
            o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
              activity: "get_call_info",
              details: "mute_state",
            });
            var n = yield t.getCallInfo();
            if (n !== "" && e === _) {
              var a = t.parsers.parseCallInfo(n);
              o("WAWebBackendApi").frontendFireAndForget(
                "handleMuteStateChange",
                { callInfo: a },
              );
            }
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseScreenShareStateChangedData(e);
            (o("WAWebUserPrefsMeUser").isMeAccount(n.sharer_jid) &&
              o(
                "WAWebVoipDualStreamScreenShareState",
              ).setSelfDualStreamScreenShareActive(
                n.state ===
                  o("WAWebVoipWaCallEnums").ScreenShareState.Started &&
                  Number(n.sharer_version) >=
                    Number(
                      o("WAWebVoipWaCallEnums").ScreenShareVersion.Version3,
                    ),
              ),
              n.state === o("WAWebVoipWaCallEnums").ScreenShareState.Stopped &&
                o("WAWebUserPrefsMeUser").isMeAccount(n.sharer_jid) &&
                o("WAWebVoipVideoCaptureAndRendering").stopDesktopCaptureJS(),
              o("WAWebBackendApi").frontendFireAndForget(
                "handleScreenShareStateChange",
                n,
              ));
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseEncodeParamsChangedData(e);
            o("WAWebVoipWebCodecsEncoderState").updateWebCodecsEncodeParams(n);
          }
        })),
        $.apply(this, arguments)
      );
    }
    ((l.handleVideoStateChanged = u),
      (l.handlePeerVideoPermissionChanged = d),
      (l.handleMuteStateChanged = f),
      (l.handleAudioDriverRestart = y),
      (l.handleSpeakerStatusChanged = b),
      (l.handleReactionStateChanged = S),
      (l.handleScreenShareStateChanged = L),
      (l.handleRaiseHandStateChanged = k),
      (l.handleEncodeTargetFpsChanged = T),
      (l.handleEncodeParamsChanged = x),
      (l.resetWebCodecsEncoderState = o(
        "WAWebVoipWebCodecsEncoderState",
      ).resetWebCodecsEncoderState));
  },
  98,
);
