__d(
  "WAWebVoipJoinDeviceRecovery",
  [
    "Promise",
    "WALogger",
    "WAWebCallCollection",
    "WAWebEnvironment",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipCallStateUtils",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipDevicePermissionRequest",
    "WAWebVoipMicrophoneInputState",
    "WAWebVoipMicrophoneRefusalState",
    "WAWebVoipStackInterface",
    "WAWebVoipWaCallEnums",
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
      _,
      f,
      g,
      h = 1e4,
      y = 3e4;
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t == null || !T(t.getState()) || r("WAWebEnvironment").isWindows)
            return null;
          var n = {
              camera: e.camera,
              microphone: e.microphone && !t.selfMicMuted,
            },
            a = yield R(n);
          return !a.isRecoveryNeeded ||
            !o(
              "WAWebVoipDeviceAccessRecoveryGating",
            ).isDeviceAccessRecoveryEnabled() ||
            (k(a), E(a))
            ? null
            : (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: joining without waiting for devices, microphone off=",
                    ", camera off=",
                    "",
                  ])),
                String(a.isMicrophoneOff),
                String(a.isCameraOff),
              ),
              {
                acceptMuted: a.isMicrophoneOff,
                acceptWithoutCamera: a.isCameraOff || a.neverAsked.microphone,
                afterAccept: D(a, n, t),
              });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          if (!o("WAWebUA").UA.isWebkit || t == null || !T(t.getState()))
            return null;
          var i = yield (g || (g = n("Promise"))).all([
              o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                "microphone",
              ),
              e.camera
                ? o(
                    "WAWebMediaPermissionsUtils",
                  ).queryMediaPermissionStateStrict("camera")
                : "unknown",
            ]),
            l = i[0],
            s = i[1];
          return I(l)
            ? (o("WAWebVoipCallAudioUnlock").holdUnlockedCallAudio(),
              a
                ? o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: microphone unavailable before joining (",
                        "), joining muted",
                      ])),
                    l,
                  )
                : o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: microphone prompt refused before joining (",
                        "), joining muted",
                      ])),
                    l,
                  ),
              !a &&
                e.microphone &&
                !t.selfMicMuted &&
                o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(
                  t.id,
                ),
              {
                acceptMuted: !0,
                acceptWithoutCamera: s !== "granted",
                afterAccept: r("WAWebNoop"),
              })
            : null;
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
          var t = yield (g || (g = n("Promise"))).all([
              o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                "microphone",
              ),
              e.camera
                ? o(
                    "WAWebMediaPermissionsUtils",
                  ).queryMediaPermissionStateStrict("camera")
                : "unknown",
            ]),
            r = t[0],
            a = t[1],
            i = {
              camera: a === "prompt",
              microphone: e.microphone && r === "prompt",
            },
            l = r === "denied" || r === "prompt";
          return {
            isCameraOff: a !== "granted",
            isMicrophoneNeverAsked: r === "prompt",
            isMicrophoneOff: l,
            isRecoveryNeeded: l || i.camera,
            neverAsked: i,
          };
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return o("WAWebUA").UA.isWebkit && e.isMicrophoneNeverAsked;
    }
    function k(e) {
      o("WAWebUA").UA.isWebkit &&
        e.isMicrophoneOff &&
        o("WAWebVoipCallAudioUnlock").unlockCallAudio();
    }
    function I(e) {
      return (
        (e === "denied" || e === "prompt") &&
        o("WAWebVoipCallAudioUnlock").canStartCallAudio() &&
        o("WAWebVoipDeviceAccessRecoveryGating").isDeviceAccessRecoveryEnabled()
      );
    }
    function T(e) {
      return (
        o("WAWebVoipCallStateUtils").isCallIncoming(e) ||
        e === o("WAWebVoipWaCallEnums").CallState.Rejoining
      );
    }
    function D(t, n, a) {
      var i = t.neverAsked;
      if (!i.camera && !i.microphone) return r("WAWebNoop");
      var l = t.isMicrophoneOff
        ? o("WAWebVoipDevicePermissionRequest").requestVoipDevicePermissions(i)
        : null;
      return (
        l != null &&
          o("WAWebVoipAudioCaptureAndPlayback").adoptGrantedMicrophoneStream(
            l.then(function (e) {
              var t = e.microphoneStream;
              return t;
            }),
            function () {
              return r("WAWebCallCollection").activeCall === a;
            },
          ),
        function () {
          var s,
            u = $(
              (s =
                l == null
                  ? void 0
                  : l.then(function (e) {
                      return (x(t, a, e), e.granted);
                    })) != null
                ? s
                : P(i, a),
            );
          u.then(function (e) {
            return e == null ? void 0 : M(t, n, a, e);
          }).catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: turning on devices allowed after joining failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t));
          });
        }
      );
    }
    function x(e, t, n) {
      var a = n.isRefused;
      e.neverAsked.microphone &&
        a &&
        r("WAWebCallCollection").activeCall === t &&
        o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(t.id);
    }
    function $(e) {
      var t = Date.now();
      return e.then(function (e) {
        var n = Date.now() - t;
        return e == null || n <= y
          ? e
          : (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: UI: devices allowed ",
                  "ms after joining, leaving them off",
                ])),
              n,
            ),
            null);
      });
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield U();
          if (!n || r("WAWebCallCollection").activeCall !== t) return null;
          var a = yield o(
              "WAWebVoipDevicePermissionRequest",
            ).requestVoipDevicePermissions(e),
            i = a.granted;
          return i;
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n, r) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield A(t, r),
              a =
                t.microphone &&
                e.isMicrophoneOff &&
                o.microphone &&
                (yield U());
            (o.camera && (yield O(n)), a && (yield W(n)));
          },
        )),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield (g || (g = n("Promise"))).all([
              o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                "microphone",
              ),
              e.camera
                ? o(
                    "WAWebMediaPermissionsUtils",
                  ).queryMediaPermissionStateStrict("camera")
                : "unknown",
            ]),
            a = r[0],
            i = r[1];
          return {
            camera: t.camera || i === "granted",
            microphone: t.microphone || a === "granted",
          };
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (
            !(
              (t == null ? void 0 : t.type) !== "web" ||
              r("WAWebCallCollection").activeCall !== e
            )
          ) {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: UI: camera allowed after joining, turning video on",
                ])),
            );
            var n = yield t.setCallVideoMute(!1);
            n !== 0 &&
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: turning video on after joining failed with status: ",
                    "",
                  ])),
                n,
              );
          }
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (
            !(
              (t == null ? void 0 : t.type) !== "web" ||
              r("WAWebCallCollection").activeCall !== e
            )
          ) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: UI: microphone allowed and live after joining, unmuting",
                ])),
            );
            var n = yield t.setCallMute(!1);
            n !== 0 &&
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: unmuting after joining failed with status: ",
                    "",
                  ])),
                n,
              );
          }
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      return new (g || (g = n("Promise")))(function (e) {
        if (
          o("WAWebVoipMicrophoneInputState").getMicrophoneInputStatus() ===
          "active"
        ) {
          e(!0);
          return;
        }
        var t = r("WAWebNoop"),
          n = window.setTimeout(function () {
            (t(), e(!1));
          }, h);
        t = o("WAWebVoipMicrophoneInputState").subscribeToMicrophoneInput(
          function () {
            o("WAWebVoipMicrophoneInputState").getMicrophoneInputStatus() ===
              "active" && (window.clearTimeout(n), t(), e(!0));
          },
        );
      });
    }
    ((l.getDeviceRecoveryJoin = C), (l.getRefusedPromptJoin = v));
  },
  98,
);
