__d(
  "WAWebVoipCallScreeningCaller",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCallScreeningJourneyLogger",
    "WAWebVoipCallStateUtils",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 70002,
      f = 70020,
      g = 90,
      h = 30;
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.type !== "web") return g;
          try {
            var n = parseInt(
              yield t.getVoipParam("options.screening_duration_ms"),
              10,
            );
            if (!isNaN(n) && n > 0) return Math.ceil(n / 1e3) + h;
          } catch (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: reading screening_duration_ms failed, using default: ",
                  "",
                ])),
              String(t),
            );
          }
          return g;
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
          var t = e.callId,
            n = e.callState,
            r = e.isCaller,
            a = e.previousCallState,
            i = e.voipStackInterface;
          if (
            !(
              i.type !== "web" ||
              n !== o("WAWebVoipWaCallEnums").CallState.Screening ||
              a === o("WAWebVoipWaCallEnums").CallState.Screening ||
              !r
            )
          ) {
            (o(
              "WAWebCallScreeningJourneyLogger",
            ).CallScreeningJourneyLogger.onCallerScreeningStarted(t),
              yield S());
            var l = yield i.screeningPromptFinished();
            l === 0 || l === _
              ? o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: caller screening recording started, status: ",
                      "",
                    ])),
                  l,
                )
              : l === f
                ? o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: caller screening recording not needed, the call moved on",
                      ])),
                  )
                : o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: screeningPromptFinished did not start recording, status: ",
                        "",
                      ])),
                    l,
                  );
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "screening_audio_hint_enabled",
            )
          ) {
            var e = yield o("WAWebBackendApi")
              .frontendSendAndReceive("playScreeningPrompt", {})
              .catch(function (e) {
                return (
                  o("WALogger")
                    .WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: screening prompt failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("voip-screening-prompt-failed"),
                  !1
                );
              });
            e ||
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: screening prompt did not play in full, recording without it",
                  ])),
              );
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = e.callState,
        n = e.previousCallState;
      n === o("WAWebVoipWaCallEnums").CallState.Screening &&
        t !== o("WAWebVoipWaCallEnums").CallState.Screening &&
        (o("WAWebBackendApi").frontendFireAndForget("stopScreeningPrompt", {}),
        o(
          "WAWebCallScreeningJourneyLogger",
        ).CallScreeningJourneyLogger.onScreeningLeft(
          o("WAWebVoipCallStateUtils").isCallTerminal(t),
        ));
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: screening duration expired, ending call",
              ])),
          ),
            o(
              "WAWebCallScreeningJourneyLogger",
            ).CallScreeningJourneyLogger.onSelfTimeout(),
            yield e.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
              !0,
            ));
        })),
        k.apply(this, arguments)
      );
    }
    ((l.getScreeningTimeoutSec = y),
      (l.maybeStartCallerScreeningRecording = b),
      (l.maybeStopScreeningPrompt = L),
      (l.handleScreeningTimeout = E));
  },
  98,
);
