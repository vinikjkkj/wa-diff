__d(
  "WAWebVoipOngoingCallJoinDevices",
  [
    "Promise",
    "WALogger",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipBlockedMicrophoneJoinState",
    "WAWebVoipBrowserPermissionButtonGating",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipDevicePermissionDialogLoader.react",
    "WAWebVoipJoinWithoutCamera",
    "WAWebVoipMicrophoneRefusalState",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = { afterJoin: r("WAWebNoop") },
      f = { afterJoin: D };
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          (o("WAWebVoipJoinWithoutCamera").clearJoinWithoutCamera(e),
            o(
              "WAWebVoipBlockedMicrophoneJoinState",
            ).forgetBlockedMicrophoneMuteAndJoin(e));
          var a = yield (p || (p = n("Promise"))).all([
              o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                "microphone",
              ),
              t
                ? o(
                    "WAWebMediaPermissionsUtils",
                  ).queryMediaPermissionStateStrict("camera")
                : "unknown",
            ]),
            i = a[0],
            l = a[1];
          (R(i, r), L(i, r));
          var s = i === "denied";
          return (!s && l !== "denied") ||
            !o(
              "WAWebVoipDeviceAccessRecoveryGating",
            ).isDeviceAccessRecoveryEnabled()
            ? y({
                callId: e,
                checkVideo: t,
                isCameraOff: t && l !== "granted",
                joinAndAccept: r,
                wasMicrophoneBlocked: s,
              })
            : (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: blocked devices won't stop the ongoing call join, microphone=",
                    ", camera=",
                    "",
                  ])),
                i,
                l,
              ),
              s
                ? (o(
                    "WAWebVoipBlockedMicrophoneJoinState",
                  ).recordBlockedMicrophoneMute(e),
                  k({
                    callId: e,
                    isCameraNeverAsked: l === "prompt",
                    joinAndAccept: r,
                  }))
                : y({
                    callId: e,
                    checkVideo: !1,
                    isCameraOff: !1,
                    joinAndAccept: r,
                    wasMicrophoneBlocked: !1,
                  }));
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
          var t = null,
            r = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(e.checkVideo, null, void 0, {
              shouldOpenFailureGuide: (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    t = b(e, n);
                    var r = yield t;
                    return r == null || (r.type === "join" && r.keepsGuide);
                  },
                );
                function o(e) {
                  return r.apply(this, arguments);
                }
                return o;
              })(),
            });
          if (r)
            return (
              o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock(),
              !e.checkVideo && e.isCameraOff ? E(e.callId) : _
            );
          var a = yield t;
          return (a == null ? void 0 : a.type) === "check_microphone_alone"
            ? y(
                babelHelpers.extends({}, e, {
                  checkVideo: !1,
                  isCameraOff: !0,
                }),
              )
            : (a == null ? void 0 : a.type) !== "join"
              ? (o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock(), null)
              : a.join;
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield o(
              "WAWebMediaPermissionsUtils",
            ).queryMediaPermissionStateStrict("microphone");
          if (
            e.checkVideo &&
            (r === "granted" || (t === "unavailable" && r === "prompt")) &&
            o(
              "WAWebVoipDeviceAccessRecoveryGating",
            ).isDeviceAccessRecoveryEnabled()
          )
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: video check ",
                    " before joining an ongoing call, checking the microphone alone, microphone=",
                    "",
                  ])),
                t,
                r,
              ),
              { type: "check_microphone_alone" }
            );
          var a = (n = I(e, t, r)) != null ? n : S(e, t, r);
          return a == null
            ? null
            : { type: "join", join: a, keepsGuide: t === "unavailable" };
        })),
        v.apply(this, arguments)
      );
    }
    function S(t, n, r) {
      var a = t.callId,
        i = t.wasMicrophoneBlocked;
      return i ||
        n !== "denied" ||
        r !== "denied" ||
        !o(
          "WAWebVoipBrowserPermissionButtonGating",
        ).isBrowserPermissionButtonEnabled("microphone") ||
        !o(
          "WAWebVoipDeviceAccessRecoveryGating",
        ).isDeviceAccessRecoveryEnabled()
        ? null
        : (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: microphone blocked at the prompt before joining an ongoing call, joining muted",
              ])),
          ),
          o("WAWebVoipBlockedMicrophoneJoinState").recordBlockedMicrophoneMute(
            a,
          ),
          f);
    }
    function R(e, t) {
      !t &&
        (e === "prompt" || e === "denied") &&
        o("WAWebVoipBrowserPermissionButtonGating").hasBrowserPermissionButton(
          "microphone",
        ) &&
        o(
          "WAWebVoipDevicePermissionDialogLoader.react",
        ).preloadDevicePermissionDialog();
    }
    function L(e, t) {
      o("WAWebUA").UA.isWebkit &&
        t &&
        (e === "prompt" || e === "denied") &&
        o(
          "WAWebVoipDeviceAccessRecoveryGating",
        ).isDeviceAccessRecoveryEnabled() &&
        o("WAWebVoipCallAudioUnlock").unlockCallAudio();
    }
    function E(e) {
      return {
        afterJoin: function () {
          return o("WAWebVoipJoinWithoutCamera").markJoinWithoutCamera(e);
        },
      };
    }
    function k(e) {
      var t = e.callId,
        n = e.isCameraNeverAsked,
        r = e.joinAndAccept;
      return !n ||
        r ||
        !o(
          "WAWebVoipBrowserPermissionButtonGating",
        ).isBrowserPermissionButtonEnabled("microphone")
        ? f
        : {
            afterJoin: function () {
              (o("WAWebVoipJoinWithoutCamera").markJoinWithoutCamera(t), D());
            },
          };
    }
    function I(e, t, n) {
      var r = e.callId,
        a = e.isCameraOff,
        i = e.joinAndAccept;
      return T(n, i)
        ? (o("WAWebVoipCallAudioUnlock").holdUnlockedCallAudio(),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: microphone ",
                " before joining an ongoing call (",
                "), joining, camera off=",
                "",
              ])),
            t,
            n,
            String(a),
          ),
          {
            afterJoin: function () {
              (a && o("WAWebVoipJoinWithoutCamera").markJoinWithoutCamera(r),
                i &&
                  (D(),
                  t === "denied" &&
                    o(
                      "WAWebVoipMicrophoneRefusalState",
                    ).reportMicrophoneRefused(r)));
            },
          })
        : null;
    }
    function T(e, t) {
      return (
        o("WAWebUA").UA.isWebkit &&
        (e === "denied" || e === "prompt") &&
        (!t || o("WAWebVoipCallAudioUnlock").canStartCallAudio()) &&
        o("WAWebVoipDeviceAccessRecoveryGating").isDeviceAccessRecoveryEnabled()
      );
    }
    function D() {
      x().catch(function (e) {
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: muting an ongoing call joined without a microphone failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      });
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((e == null ? void 0 : e.type) === "web") {
            var t = yield e.setCallMute(!0);
            t !== 0 &&
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: muting an ongoing call joined without a microphone failed with status: ",
                    "",
                  ])),
                t,
              );
          }
        })),
        $.apply(this, arguments)
      );
    }
    l.checkOngoingCallJoinDevices = g;
  },
  98,
);
