__d(
  "WAWebVoipRecoverMicrophone",
  [
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebCallCollection",
    "WAWebCoreActionsODS",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipDevicePermissionRequest",
    "WAWebVoipMicrophoneRefusalState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f;
    function g(e) {
      if (
        !o("WAWebUA").UA.isWebkit ||
        !o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputSilent()
      )
        return null;
      var t = v(e);
      return t == null ? null : S(t);
    }
    async function h(e) {
      var t = e.isCallCurrent,
        n = e.microphoneRequest,
        r = e.onPermissionPrompt,
        a = e.targetWindow;
      if (!t()) return P("stale_call", "stale_call");
      var i = o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputSilent(),
        l = await $(t, a == null ? void 0 : a.navigator, "permission query");
      if (l == null) return P("stale_call", "stale_call");
      var s = y(l);
      if (s != null) return s;
      var u = await C({
        initialPermissionState: l,
        isCallCurrent: t,
        microphoneRequest: n,
        onPermissionPrompt: r,
        targetWindow: a,
      });
      return u != null
        ? u
        : i &&
            o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputTrackLive()
          ? P("ready", "reacquired")
          : T(t, a);
    }
    function y(e) {
      return e === "denied"
        ? P("permission_denied", "permission_denied")
        : e !== "prompt" &&
            o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputTrackLive()
          ? P("ready", "already_ready")
          : null;
    }
    async function C(t) {
      var n = t.initialPermissionState,
        r = t.isCallCurrent,
        a = t.microphoneRequest,
        i = t.onPermissionPrompt,
        l = t.targetWindow;
      if (n !== "granted" || a != null) {
        n !== "granted" && (i == null || i());
        var d = await b(l, r, a);
        if (!r())
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [MicRecovery] active call changed during permission preflight",
                ])),
            ),
            P("stale_call", "stale_call")
          );
        if (d !== "granted") {
          var m = await D(
            r,
            l == null ? void 0 : l.navigator,
            d === "permission_denied",
            a != null,
          );
          return N(m, "preflight_failed");
        }
      }
      var p = await o("WAWebAudioDeviceManager").selectAudioDevice(l, !0);
      if (!r())
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MicRecovery] active call changed during device selection",
              ])),
          ),
          P("stale_call", "stale_call")
        );
      if (p == null) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [MicRecovery] no microphone available after permission preflight",
            ])),
        );
        var _ = await D(r, l == null ? void 0 : l.navigator);
        return N(_, "preflight_failed");
      }
      var f = await $(
        r,
        l == null ? void 0 : l.navigator,
        "post-preflight permission query",
      );
      return f == null
        ? P("stale_call", "stale_call")
        : f === "denied"
          ? P("permission_denied", "permission_denied")
          : f === "prompt"
            ? (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicRecovery] microphone permission remains prompt after preflight",
                  ])),
              ),
              P("recovery_failed", "preflight_failed"))
            : null;
    }
    async function b(e, t, n) {
      var r,
        a = (r = n == null ? void 0 : n.take()) != null ? r : v(e);
      if (a == null) return "failed";
      var i = self.performance.now();
      try {
        var l = await a;
        return (await E(l, t), L(t, !1), "granted");
      } catch (e) {
        var s;
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MicRecovery] microphone request failed after ",
                "ms: ",
                "",
              ])),
            Math.round(self.performance.now() - i),
            (s = I(e)) != null ? s : "unknown error",
          ),
          k(e) ? "permission_denied" : "failed"
        );
      }
    }
    function v(e) {
      var t,
        n,
        r =
          (t =
            e == null || (n = e.navigator) == null ? void 0 : n.mediaDevices) !=
          null
            ? t
            : navigator.mediaDevices;
      return (r == null ? void 0 : r.getUserMedia) == null
        ? null
        : r.getUserMedia({
            audio: o(
              "WAWebVoipDevicePermissionRequest",
            ).getMicrophoneConstraints(),
          });
    }
    function S(e) {
      e.catch(r("WAWebNoop"));
      var t = !1;
      return {
        release: function () {
          t || e.then(R, r("WAWebNoop"));
        },
        take: function () {
          return ((t = !0), e);
        },
      };
    }
    function R(e) {
      e.getTracks().forEach(function (e) {
        return e.stop();
      });
    }
    function L(e, t) {
      var n,
        a = (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.id;
      a == null ||
        !e() ||
        (t
          ? o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(a)
          : o("WAWebVoipMicrophoneRefusalState").clearMicrophoneRefused(a));
    }
    async function E(e, t) {
      if (o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputSilent()) {
        await o(
          "WAWebVoipAudioCaptureAndPlayback",
        ).adoptGrantedMicrophoneStream(Promise.resolve(e), t);
        return;
      }
      R(e);
    }
    function k(e) {
      var t = I(e);
      return t === "NotAllowedError" || t === "PermissionDeniedError";
    }
    function I(e) {
      return e == null || typeof e != "object" || !("name" in e)
        ? null
        : String(e.name);
    }
    async function T(e, t) {
      var n = await o(
        "WAWebVoipAudioCaptureAndPlayback",
      ).reacquireCurrentAudioInputDevice({
        isRecoveryCurrent: e,
        targetWindow: t,
      });
      if (!e())
        return (
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MicRecovery] active call changed during microphone reacquisition",
              ])),
          ),
          P("stale_call", "stale_call")
        );
      if (!n) {
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [MicRecovery] microphone reacquisition failed",
            ])),
        );
        var r = await D(e, t == null ? void 0 : t.navigator);
        return N(r, "reacquire_failed");
      }
      return P("ready", "reacquired");
    }
    async function D(e, t, n, r) {
      (n === void 0 && (n = !1), r === void 0 && (r = !1));
      var a = await $(e, t, "failure classification");
      if (a == null) return "stale_call";
      n && a === "prompt" && L(e, !0);
      var i = x(a, n, r);
      return (
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [MicRecovery] microphone recovery failed: ",
              " (permission ",
              ", refused ",
              ", in tap ",
              ")",
            ])),
          i,
          a,
          String(n),
          String(r),
        ),
        i
      );
    }
    function x(e, t, n) {
      return e === "denied" ||
        (t &&
          (e === "unknown" ||
            (!n &&
              o(
                "WAWebVoipDeviceAccessRecoveryGating",
              ).isRefusalKeptUntilReload())))
        ? "permission_denied"
        : "recovery_failed";
    }
    async function $(e, t, n) {
      var r = await o(
        "WAWebMediaPermissionsUtils",
      ).queryMediaPermissionStateStrict("microphone", t);
      return e()
        ? r
        : (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MicRecovery] active call changed during ",
                "",
              ])),
            n,
          ),
          null);
    }
    function P(e, t) {
      return (
        o("WAWebCoreActionsODS").logCallMicUnmutePreparationOutcome(t),
        e
      );
    }
    function N(e, t) {
      return e === "permission_denied"
        ? P(e, "permission_denied")
        : e === "stale_call"
          ? P(e, "stale_call")
          : e === "recovery_failed"
            ? P(e, t)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    ((l.startMicrophoneRequestInGesture = g),
      (l.prepareMicrophoneForUnmute = h));
  },
  98,
);
