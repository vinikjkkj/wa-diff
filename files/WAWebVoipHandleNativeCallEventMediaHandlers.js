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
      s,
      u = 50;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                m().catch(function (e) {
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
        d.apply(this, arguments)
      );
    }
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (e.type === "web") {
            var t = yield e.getCallInfo();
            if (t !== "") {
              var n = e.parsers.parseCallInfo(t);
              o("WAWebBackendApi").frontendFireAndForget(
                "handleVoipSettingsUpdate",
                {
                  callId: n.callId,
                  isDualStreamSsEnabled: n.isDualStreamSsEnabled,
                },
              );
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        f.apply(this, arguments)
      );
    }
    var g = o("WAThrottle").throttle(
        function () {
          C().catch(function (t) {
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
        u,
        { leading: !0, trailing: !0 },
      ),
      h = 0;
    function y() {
      g();
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = ++h,
            t = r("nullthrows")(
              yield o("WAWebVoipStackInterface").getVoipStackInterface(),
            );
          if (t.type === "web") {
            o("WAWebBackendApi").frontendFireAndForget("trackVoipActivity", {
              activity: "get_call_info",
              details: "mute_state",
            });
            var n = yield t.getCallInfo();
            if (n !== "" && e === h) {
              var a = t.parsers.parseCallInfo(n);
              o("WAWebBackendApi").frontendFireAndForget(
                "handleMuteStateChange",
                { callInfo: a },
              );
            }
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
            var n = t.parsers.parseAudioDriverRestartData(e);
            n.isDueToSilenceDetected &&
              o("WAWebBackendApi").frontendFireAndForget(
                "showMicrophoneSilenceToast",
                {},
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
            var n = t.parsers.parseSpeakerStatusChangedData(e);
            for (var a of n.Participants)
              a.AudioLevel > 0 &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "handleAudioLevelChange",
                  { participantJid: a.Jid },
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
            var n = t.parsers.parseReactionStateChangedData(e);
            o("WAWebBackendApi").frontendFireAndForget(
              "handleReactionStateChange",
              { reactionData: n },
            );
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          if (t.type === "web") {
            var n = t.parsers.parseEncodeParamsChangedData(e);
            o("WAWebVoipWebCodecsEncoderState").updateWebCodecsEncodeParams(n);
          }
        })),
        M.apply(this, arguments)
      );
    }
    ((l.handleVideoStateChanged = c),
      (l.handleUpdateVoipSettings = m),
      (l.handlePeerVideoPermissionChanged = _),
      (l.handleMuteStateChanged = y),
      (l.handleAudioDriverRestart = v),
      (l.handleSpeakerStatusChanged = R),
      (l.handleReactionStateChanged = E),
      (l.handleScreenShareStateChanged = I),
      (l.handleRaiseHandStateChanged = D),
      (l.handleEncodeTargetFpsChanged = $),
      (l.handleEncodeParamsChanged = N),
      (l.resetWebCodecsEncoderState = o(
        "WAWebVoipWebCodecsEncoderState",
      ).resetWebCodecsEncoderState));
  },
  98,
);
