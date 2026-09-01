__d(
  "WAWebVoipRecoverMicrophone",
  [
    "WALogger",
    "WAWebAudioDeviceManager",
    "WAWebCoreActionsODS",
    "WAWebMediaPermissionsUtils",
    "WAWebVoipAudioCaptureAndPlayback",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p;
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isCallCurrent,
            n = e.onPermissionPrompt,
            r = e.targetWindow;
          if (!t()) return T("stale_call", "stale_call");
          var o = yield k(
            t,
            r == null ? void 0 : r.navigator,
            "permission query",
          );
          if (o == null) return T("stale_call", "stale_call");
          var a = g(o);
          if (a != null) return a;
          var i = yield h({
            initialPermissionState: o,
            isCallCurrent: t,
            onPermissionPrompt: n,
            targetWindow: r,
          });
          return i != null ? i : S(t, r);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return e === "denied"
        ? T("permission_denied", "permission_denied")
        : e !== "prompt" &&
            o("WAWebVoipAudioCaptureAndPlayback").isCurrentAudioInputTrackLive()
          ? T("ready", "already_ready")
          : null;
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.initialPermissionState,
            r = t.isCallCurrent,
            a = t.onPermissionPrompt,
            i = t.targetWindow;
          if (n !== "granted") {
            a == null || a();
            var l = yield C(i);
            if (!r())
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [MicRecovery] active call changed during permission preflight",
                    ])),
                ),
                T("stale_call", "stale_call")
              );
            if (l !== "granted") {
              var d = yield L(
                r,
                i == null ? void 0 : i.navigator,
                l === "permission_denied",
              );
              return D(d, "preflight_failed");
            }
          }
          var m = yield o("WAWebAudioDeviceManager").selectAudioDevice(i, !0);
          if (!r())
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicRecovery] active call changed during device selection",
                  ])),
              ),
              T("stale_call", "stale_call")
            );
          if (m == null) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [MicRecovery] no microphone available after permission preflight",
                ])),
            );
            var p = yield L(r, i == null ? void 0 : i.navigator);
            return D(p, "preflight_failed");
          }
          var _ = yield k(
            r,
            i == null ? void 0 : i.navigator,
            "post-preflight permission query",
          );
          return _ == null
            ? T("stale_call", "stale_call")
            : _ === "denied"
              ? T("permission_denied", "permission_denied")
              : _ === "prompt"
                ? (o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [MicRecovery] microphone permission remains prompt after preflight",
                      ])),
                  ),
                  T("recovery_failed", "preflight_failed"))
                : null;
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
          var t,
            n,
            r =
              (t =
                e == null || (n = e.navigator) == null
                  ? void 0
                  : n.mediaDevices) != null
                ? t
                : navigator.mediaDevices;
          if ((r == null ? void 0 : r.getUserMedia) == null) return "failed";
          try {
            var o = yield r.getUserMedia({ audio: !0 });
            return (
              o.getTracks().forEach(function (e) {
                return e.stop();
              }),
              "granted"
            );
          } catch (e) {
            return v(e) ? "permission_denied" : "failed";
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      if (e == null || typeof e != "object" || !("name" in e)) return !1;
      var t = e.name;
      return t === "NotAllowedError" || t === "PermissionDeniedError";
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebVoipAudioCaptureAndPlayback",
          ).reacquireCurrentAudioInputDevice({
            isRecoveryCurrent: e,
            targetWindow: t,
          });
          if (!e())
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicRecovery] active call changed during microphone reacquisition",
                  ])),
              ),
              T("stale_call", "stale_call")
            );
          if (!n) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [MicRecovery] microphone reacquisition failed",
                ])),
            );
            var r = yield L(e, t == null ? void 0 : t.navigator);
            return D(r, "reacquire_failed");
          }
          return T("ready", "reacquired");
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = !1);
          var r = yield k(e, t, "failure classification");
          return r == null
            ? "stale_call"
            : r === "denied" || (n && r === "unknown")
              ? "permission_denied"
              : "recovery_failed";
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o(
            "WAWebMediaPermissionsUtils",
          ).queryMediaPermissionStateStrict("microphone", t);
          return e()
            ? r
            : (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [MicRecovery] active call changed during ",
                    "",
                  ])),
                n,
              ),
              null);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return (
        o("WAWebCoreActionsODS").logCallMicUnmutePreparationOutcome(t),
        e
      );
    }
    function D(e, t) {
      return e === "permission_denied"
        ? T(e, "permission_denied")
        : e === "stale_call"
          ? T(e, "stale_call")
          : e === "recovery_failed"
            ? T(e, t)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    l.prepareMicrophoneForUnmute = _;
  },
  98,
);
