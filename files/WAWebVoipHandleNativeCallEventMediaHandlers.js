__d(
  "WAWebVoipHandleNativeCallEventMediaHandlers",
  [
    "WALogger",
    "WAThrottle",
    "WAWebBackendApi",
    "WAWebCallUserJourneyLogger",
    "WAWebUserUtils",
    "WAWebVoipCameraFingerprintLogging",
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
      s,
      u,
      c = 50;
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
            var n = t.parsers.parseVideoStateChangedData(e);
            (o("WAWebBackendApi").frontendFireAndForget(
              "handleVideoStateChange",
              { videoStateData: n },
            ),
              n.isSelf === !0 &&
                p().catch(function (e) {
                  o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: handleUpdateVoipSettings: dispatch failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e));
                }));
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (e.type === "web") {
            var t = yield e.getCallInfo();
            if (t !== "") {
              var n = e.parsers.parseCallInfo(t);
              (o(
                "WAWebCallUserJourneyLogger",
              ).CallUserJourneyLogger.setVideoCall(n.videoEnabled === !0),
                o(
                  "WAWebVoipCameraFingerprintLogging",
                ).maybeLogCameraFingerprint(n.videoEnabled === !0, !0),
                o("WAWebBackendApi").frontendFireAndForget(
                  "handleVoipSettingsUpdate",
                  {
                    callId: n.callId,
                    isDualStreamSsEnabled: n.isDualStreamSsEnabled,
                  },
                ));
            }
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
            var n = t.parsers.parsePeerVideoPermissionChangedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handlePeerVideoPermissionChange",
              { peerVideoPermissionData: n },
            );
          }
        })),
        g.apply(this, arguments)
      );
    }
    var h = o("WAThrottle").throttle(
        function () {
          b().catch(function (t) {
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
        c,
        { leading: !0, trailing: !0 },
      ),
      y = 0;
    function C() {
      h();
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = ++y,
            t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
          if (t.type === "web") {
            o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
              activity: "get_call_info",
              details: "mute_state",
            });
            var n = yield t.getCallInfo();
            if (n !== "" && e === y) {
              var a = t.parsers.parseCallInfo(n);
              o("WAWebBackendApi").frontendFireAndForget(
                "handleMuteStateChange",
                { callInfo: a },
              );
            }
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
            var n = t.parsers.parseAudioDriverRestartData(e);
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: handleAudioDriverRestart: reason=",
                  ", count=",
                  ", isDueToSilenceDetected=",
                  "",
                ])),
              n.reason,
              n.audioRestartCount,
              n.isDueToSilenceDetected,
            ),
              n.isDueToSilenceDetected &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "showMicrophoneSilenceToast",
                  {},
                ));
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
            var n = t.parsers.parseSpeakerStatusChangedData(e);
            for (var a of n.Participants)
              a.AudioLevel > 0 &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "handleAudioLevelChange",
                  { participantJid: a.Jid },
                );
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
            var n = t.parsers.parseReactionStateChangedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleReactionStateChange",
              { reactionData: n },
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
            var n = t.parsers.parseScreenShareStateChangedData(e);
            (o("WAWebUserUtils").isMeAccount(n.sharer_jid) &&
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
              (n.state === o("WAWebVoipWaCallEnums").ScreenShareState.Stopped ||
                n.state ===
                  o("WAWebVoipWaCallEnums").ScreenShareState.Failed) &&
                o("WAWebUserUtils").isMeAccount(n.sharer_jid) &&
                (o("WAWebVoipVideoCaptureAndRendering").stopDesktopCaptureJS(),
                o(
                  "WAWebVoipVideoCaptureAndRendering",
                ).releaseDesktopStreamJS()),
              o("WAWebBackendApi").frontendFireAndForget(
                "handleScreenShareStateChange",
                n,
              ));
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
            var n = t.parsers.parseSelfCameraAutoOffData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleSelfCameraAutoOff",
              { cameraAutoOffData: n },
            );
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseEncodeParamsChangedData(e);
            o("WAWebVoipWebCodecsEncoderState").updateWebCodecsEncodeParams(n);
          }
        })),
        F.apply(this, arguments)
      );
    }
    ((l.handleVideoStateChanged = d),
      (l.handleUpdateVoipSettings = p),
      (l.handlePeerVideoPermissionChanged = f),
      (l.handleMuteStateChanged = C),
      (l.handleAudioDriverRestart = S),
      (l.handleSpeakerStatusChanged = L),
      (l.handleReactionStateChanged = k),
      (l.handleScreenShareStateChanged = T),
      (l.handleSelfCameraAutoOff = x),
      (l.handleRaiseHandStateChanged = P),
      (l.handleEncodeTargetFpsChanged = M),
      (l.handleEncodeParamsChanged = A),
      (l.resetWebCodecsEncoderState = o(
        "WAWebVoipWebCodecsEncoderState",
      ).resetWebCodecsEncoderState));
  },
  98,
);
