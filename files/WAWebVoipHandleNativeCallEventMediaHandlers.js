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
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 50;
    async function d(t) {
      var n = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (n.type === "web") {
        var a = n.parsers.parseVideoStateChangedData(t);
        (o("WAWebBackendApi").frontendFireAndForget("handleVideoStateChange", {
          videoStateData: a,
        }),
          a.isSelf === !0 &&
            m().catch(function (t) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: handleUpdateVoipSettings: dispatch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t));
            }));
      }
    }
    async function m() {
      var e = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (e.type === "web") {
        var t = await e.getCallInfo();
        if (t !== "") {
          var n = e.parsers.parseCallInfo(t);
          (o("WAWebCallUserJourneyLogger").CallUserJourneyLogger.setVideoCall(
            n.videoEnabled === !0,
          ),
            o("WAWebVoipCameraFingerprintLogging").maybeLogCameraFingerprint(
              n.videoEnabled === !0,
              !0,
            ),
            o("WAWebBackendApi").frontendFireAndForget(
              "handleVoipSettingsUpdate",
              {
                callId: n.callId,
                isDualStreamSsEnabled: n.isDualStreamSsEnabled,
              },
            ));
        }
      }
    }
    async function p(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parsePeerVideoPermissionChangedData(e);
        o("WAWebBackendApi").frontendFireAndForget(
          "handlePeerVideoPermissionChange",
          { peerVideoPermissionData: n },
        );
      }
    }
    var _ = o("WAThrottle").throttle(
        function () {
          h().catch(function (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: handleMuteStateChanged: dispatch failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-mute-state-dispatch-failed");
          });
        },
        c,
        { leading: !0, trailing: !0 },
      ),
      f = 0;
    function g() {
      _();
    }
    async function h() {
      var e = ++f,
        t = r("nullthrows")(
          await o("WAWebVoipStackInterface").getVoipStackInterface(),
        );
      if (t.type === "web") {
        o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
          activity: "get_call_info",
          details: "mute_state",
        });
        var n = await t.getCallInfo();
        if (n !== "" && e === f) {
          var a = t.parsers.parseCallInfo(n);
          o("WAWebBackendApi").frontendFireAndForget("handleMuteStateChange", {
            callInfo: a,
          });
        }
      }
    }
    async function y(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
    }
    async function C(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
    }
    async function b(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseReactionStateChangedData(e);
        o("WAWebBackendApi").frontendFireAndForget(
          "handleReactionStateChange",
          { reactionData: n },
        );
      }
    }
    async function v(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseScreenShareStateChangedData(e);
        (o("WAWebUserUtils").isMeAccount(n.sharer_jid) &&
          o(
            "WAWebVoipDualStreamScreenShareState",
          ).setSelfDualStreamScreenShareActive(
            n.state === o("WAWebVoipWaCallEnums").ScreenShareState.Started &&
              Number(n.sharer_version) >=
                Number(o("WAWebVoipWaCallEnums").ScreenShareVersion.Version3),
          ),
          (n.state === o("WAWebVoipWaCallEnums").ScreenShareState.Stopped ||
            n.state === o("WAWebVoipWaCallEnums").ScreenShareState.Failed) &&
            o("WAWebUserUtils").isMeAccount(n.sharer_jid) &&
            (o("WAWebVoipVideoCaptureAndRendering").stopDesktopCaptureJS(),
            o("WAWebVoipVideoCaptureAndRendering").releaseDesktopStreamJS()),
          o("WAWebBackendApi").frontendFireAndForget(
            "handleScreenShareStateChange",
            n,
          ));
      }
    }
    async function S(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseSelfCameraAutoOffData(e);
        o("WAWebBackendApi").frontendFireAndForget("handleSelfCameraAutoOff", {
          cameraAutoOffData: n,
        });
      }
    }
    async function R(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseRaiseHandStateChangedData(e);
        o("WAWebBackendApi").frontendFireAndForget(
          "handleRaiseHandStateChange",
          { raiseHandData: n },
        );
      }
    }
    async function L(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseEncodeTargetFpsChangedData(e);
        o("WAWebVoipEncodeTargetFpsState").updateEncodeTargetFps(n.targetFps);
      }
    }
    async function E(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseEncodeParamsChangedData(e);
        o("WAWebVoipWebCodecsEncoderState").updateWebCodecsEncodeParams(n);
      }
    }
    ((l.handleVideoStateChanged = d),
      (l.handleUpdateVoipSettings = m),
      (l.handlePeerVideoPermissionChanged = p),
      (l.handleMuteStateChanged = g),
      (l.handleAudioDriverRestart = y),
      (l.handleSpeakerStatusChanged = C),
      (l.handleReactionStateChanged = b),
      (l.handleScreenShareStateChanged = v),
      (l.handleSelfCameraAutoOff = S),
      (l.handleRaiseHandStateChanged = R),
      (l.handleEncodeTargetFpsChanged = L),
      (l.handleEncodeParamsChanged = E),
      (l.resetWebCodecsEncoderState = o(
        "WAWebVoipWebCodecsEncoderState",
      ).resetWebCodecsEncoderState));
  },
  98,
);
