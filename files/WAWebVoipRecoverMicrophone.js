__d(
  "WAWebVoipRecoverMicrophone",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      if (
        !o("WAWebUA").UA.isWebkit ||
        !o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputSilent()
      )
        return null;
      var t = E(e);
      return t == null ? null : k(t);
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isCallCurrent,
            n = e.microphoneRequest,
            r = e.onPermissionPrompt,
            a = e.targetWindow;
          if (!t()) return W("stale_call", "stale_call");
          var i = o(
              "WAWebVoipAudioCaptureAndPlayback",
            ).isCurrentAudioInputSilent(),
            l = yield O(
              t,
              a == null ? void 0 : a.navigator,
              "permission query",
            );
          if (l == null) return W("stale_call", "stale_call");
          var s = b(l);
          if (s != null) return s;
          var u = yield v({
            initialPermissionState: l,
            isCallCurrent: t,
            microphoneRequest: n,
            onPermissionPrompt: r,
            targetWindow: a,
          });
          return u != null
            ? u
            : i &&
                o(
                  "WAWebVoipAudioCaptureAndPlayback",
                ).isCurrentAudioInputTrackLive()
              ? W("ready", "reacquired")
              : N(t, a);
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return e === "denied"
        ? W("permission_denied", "permission_denied")
        : e !== "prompt" &&
            o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputTrackLive()
          ? W("ready", "already_ready")
          : null;
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.initialPermissionState,
            r = t.isCallCurrent,
            a = t.microphoneRequest,
            i = t.onPermissionPrompt,
            l = t.targetWindow;
          if (n !== "granted" || a != null) {
            n !== "granted" && (i == null || i());
            var d = yield R(l, r, a);
            if (!r())
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MicRecovery] active call changed during permission preflight",
                    ])),
                ),
                W("stale_call", "stale_call")
              );
            if (d !== "granted") {
              var m = yield w(
                r,
                l == null ? void 0 : l.navigator,
                d === "permission_denied",
                a != null,
              );
              return q(m, "preflight_failed");
            }
          }
          var p = yield o("WAWebAudioDeviceManager").selectAudioDevice(l, !0);
          if (!r())
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicRecovery] active call changed during device selection",
                  ])),
              ),
              W("stale_call", "stale_call")
            );
          if (p == null) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [MicRecovery] no microphone available after permission preflight",
                ])),
            );
            var _ = yield w(r, l == null ? void 0 : l.navigator);
            return q(_, "preflight_failed");
          }
          var f = yield O(
            r,
            l == null ? void 0 : l.navigator,
            "post-preflight permission query",
          );
          return f == null
            ? W("stale_call", "stale_call")
            : f === "denied"
              ? W("permission_denied", "permission_denied")
              : f === "prompt"
                ? (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicRecovery] microphone permission remains prompt after preflight",
                      ])),
                  ),
                  W("recovery_failed", "preflight_failed"))
                : null;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = (r = n == null ? void 0 : n.take()) != null ? r : E(e);
          if (a == null) return "failed";
          var i = self.performance.now();
          try {
            var l = yield a;
            return (yield D(l, t), T(t, !1), "granted");
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
                (s = P(e)) != null ? s : "unknown error",
              ),
              $(e) ? "permission_denied" : "failed"
            );
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
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
    function k(e) {
      e.catch(r("WAWebNoop"));
      var t = !1;
      return {
        release: function () {
          t || e.then(I, r("WAWebNoop"));
        },
        take: function () {
          return ((t = !0), e);
        },
      };
    }
    function I(e) {
      e.getTracks().forEach(function (e) {
        return e.stop();
      });
    }
    function T(e, t) {
      var n,
        a = (n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.id;
      a == null ||
        !e() ||
        (t
          ? o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(a)
          : o("WAWebVoipMicrophoneRefusalState").clearMicrophoneRefused(a));
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputSilent()
          ) {
            yield o(
              "WAWebVoipAudioCaptureAndPlayback",
            ).adoptGrantedMicrophoneStream(
              (g || (g = n("Promise"))).resolve(e),
              t,
            );
            return;
          }
          I(e);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t = P(e);
      return t === "NotAllowedError" || t === "PermissionDeniedError";
    }
    function P(e) {
      return e == null || typeof e != "object" || !("name" in e)
        ? null
        : String(e.name);
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
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
              W("stale_call", "stale_call")
            );
          if (!n) {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [MicRecovery] microphone reacquisition failed",
                ])),
            );
            var r = yield w(e, t == null ? void 0 : t.navigator);
            return q(r, "reacquire_failed");
          }
          return W("ready", "reacquired");
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            (n === void 0 && (n = !1), r === void 0 && (r = !1));
            var a = yield O(e, t, "failure classification");
            if (a == null) return "stale_call";
            n && a === "prompt" && T(e, !0);
            var i = F(a, n, r);
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
          },
        )),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n) {
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
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o(
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
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
      return (
        o("WAWebCoreActionsODS").logCallMicUnmutePreparationOutcome(t),
        e
      );
    }
    function q(e, t) {
      return e === "permission_denied"
        ? W(e, "permission_denied")
        : e === "stale_call"
          ? W(e, "stale_call")
          : e === "recovery_failed"
            ? W(e, t)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    ((l.startMicrophoneRequestInGesture = h),
      (l.prepareMicrophoneForUnmute = y));
  },
  98,
);
