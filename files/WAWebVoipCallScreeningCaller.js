__d(
  "WAWebVoipCallScreeningCaller",
  [
    "WALogger",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 70002,
      p = 70020,
      _ = 90,
      f = 30;
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.type !== "web") return _;
          try {
            var n = parseInt(
              yield t.getVoipParam("options.screening_duration_ms"),
              10,
            );
            if (!isNaN(n) && n > 0) return Math.ceil(n / 1e3) + f;
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
          return _;
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
          var t = e.callState,
            n = e.isCaller,
            r = e.previousCallState,
            a = e.voipStackInterface;
          if (
            !(
              a.type !== "web" ||
              t !== o("WAWebVoipWaCallEnums").CallState.Screening ||
              r === o("WAWebVoipWaCallEnums").CallState.Screening ||
              !n
            )
          ) {
            var i = yield a.screeningPromptFinished();
            i === 0 || i === m
              ? o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: caller screening recording started, status: ",
                      "",
                    ])),
                  i,
                )
              : i === p
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
                    i,
                  );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r("nullthrows")(
            yield o("WAWebVoipStackInterface").getVoipStackInterface(),
          );
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: screening duration expired, ending call",
              ])),
          ),
            yield e.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Timeout,
              !0,
            ));
        })),
        v.apply(this, arguments)
      );
    }
    ((l.getScreeningTimeoutSec = g),
      (l.maybeStartCallerScreeningRecording = y),
      (l.handleScreeningTimeout = b));
  },
  98,
);
