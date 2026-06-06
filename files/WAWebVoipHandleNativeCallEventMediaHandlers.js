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
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseVideoStateChangedData(e);
        o("WAWebBackendApi").frontendFireAndForget("handleVideoStateChange", {
          videoStateData: n,
        });
      }
    }
    async function s(e) {
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
    async function u() {
      var e = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (e.type === "web") {
        o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
          activity: "get_call_info",
          details: "mute_state",
        });
        var t = await e.getCallInfo();
        if (t === "") return;
        var n = e.parsers.parseCallInfo(t);
        o("WAWebBackendApi").frontendFireAndForget("handleMuteStateChange", {
          callInfo: n,
        });
      }
    }
    async function c(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseAudioDriverRestartData(e);
        n.isDueToSilenceDetected &&
          o("WAWebBackendApi").frontendFireAndForget(
            "showMicrophoneSilenceToast",
            {},
          );
      }
    }
    async function d(e) {
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
    async function m(e) {
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
    async function p(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
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
    }
    async function _(e) {
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
    async function f(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseEncodeTargetFpsChangedData(e);
        o("WAWebVoipEncodeTargetFpsState").updateEncodeTargetFps(n.targetFps);
      }
    }
    async function g(e) {
      var t = r("nullthrows")(
        await o("WAWebVoipStackInterface").getVoipStackInterface(),
      );
      if (t.type === "web") {
        var n = t.parsers.parseEncodeParamsChangedData(e);
        o("WAWebVoipWebCodecsEncoderState").updateWebCodecsEncodeParams(n);
      }
    }
    ((l.handleVideoStateChanged = e),
      (l.handlePeerVideoPermissionChanged = s),
      (l.handleMuteStateChanged = u),
      (l.handleAudioDriverRestart = c),
      (l.handleSpeakerStatusChanged = d),
      (l.handleReactionStateChanged = m),
      (l.handleScreenShareStateChanged = p),
      (l.handleRaiseHandStateChanged = _),
      (l.handleEncodeTargetFpsChanged = f),
      (l.handleEncodeParamsChanged = g),
      (l.resetWebCodecsEncoderState = o(
        "WAWebVoipWebCodecsEncoderState",
      ).resetWebCodecsEncoderState));
  },
  98,
);
