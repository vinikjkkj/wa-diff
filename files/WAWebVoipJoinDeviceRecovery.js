__d(
  "WAWebVoipJoinDeviceRecovery",
  [
    "Promise",
    "WALogger",
    "WAWebCallCollection",
    "WAWebCoreActionsODS",
    "WAWebEnvironment",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipAudioCaptureAndPlayback",
    "WAWebVoipBlockedMicrophoneJoinState",
    "WAWebVoipBrowserPermissionButtonGating",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipCallStateUtils",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipDevicePermissionDialogLoader.react",
    "WAWebVoipDevicePermissionRequest",
    "WAWebVoipMicrophoneInputState",
    "WAWebVoipMicrophoneRefusalState",
    "WAWebVoipRecoveryJoinLog",
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
      h,
      y,
      C,
      b = 1e4,
      v = 3e4,
      S = { join: null, offersPermissionButton: !1 };
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t == null || !A(t.getState()) || r("WAWebEnvironment").isWindows)
            return S;
          o("WAWebVoipBlockedMicrophoneJoinState").discardBlockedMicrophoneJoin(
            t.id,
          );
          var n = {
              camera: e.camera,
              microphone: e.microphone && !t.selfMicMuted,
            },
            a = yield I(n);
          if (
            (D(a),
            !a.isRecoveryNeeded ||
              !o(
                "WAWebVoipDeviceAccessRecoveryGating",
              ).isDeviceAccessRecoveryEnabled())
          )
            return S;
          var i = M(
              (n.microphone ||
                o(
                  "WAWebVoipBlockedMicrophoneJoinState",
                ).isMutedForBlockedMicrophone(t.id)) &&
                a.isMicrophoneBlocked,
            ),
            l = { join: null, offersPermissionButton: i };
          if ((P(a), x(a) || !$(a))) return l;
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI: joining without waiting for devices, microphone off=",
                ", camera off=",
                "",
              ])),
            String(a.isMicrophoneOff),
            String(a.isCameraOff),
          );
          var s = w(
            t,
            {
              acceptMuted: a.isMicrophoneOff,
              acceptWithoutCamera: a.isCameraOff || a.neverAsked.microphone,
              afterAccept: i ? r("WAWebNoop") : F(a, n, t),
            },
            { isAfterGuide: !1, offersPermissionButton: i },
          );
          return babelHelpers.extends({}, l, { join: s });
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n, r) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            if (t == null || !A(t.getState())) return null;
            var l = yield (C || (C = n("Promise"))).all([
                o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                  "microphone",
                ),
                e.camera
                  ? o(
                      "WAWebMediaPermissionsUtils",
                    ).queryMediaPermissionStateStrict("camera")
                  : "unknown",
              ]),
              s = l[0],
              u = l[1],
              m = i && s === "denied",
              p = N(s);
            if (p == null) return null;
            (o("WAWebVoipCallAudioUnlock").holdUnlockedCallAudio(),
              a
                ? o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: microphone unavailable before joining (",
                        "), joining muted, waits for the guide=",
                        "",
                      ])),
                    s,
                    String(p),
                  )
                : o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: UI: microphone refused before joining (",
                        "), joining muted, waits for the guide=",
                        "",
                      ])),
                    s,
                    String(p),
                  ),
              !a &&
                e.microphone &&
                !t.selfMicMuted &&
                o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(
                  t.id,
                ));
            var _ = {
              acceptMuted: !0,
              acceptWithoutCamera: u !== "granted",
              afterAccept: r("WAWebNoop"),
            };
            return babelHelpers.extends(
              {},
              w(t, _, { isAfterGuide: p, offersPermissionButton: m }),
              { waitsForGuideClick: p },
            );
          },
        )),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (C || (C = n("Promise"))).all([
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
            isMicrophoneBlocked: r === "denied",
            isMicrophoneNeverAsked: r === "prompt",
            isMicrophoneOff: l,
            isRecoveryNeeded: l || i.camera,
            neverAsked: i,
          };
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      e.isMicrophoneOff &&
        o("WAWebVoipBrowserPermissionButtonGating").hasBrowserPermissionButton(
          "microphone",
        ) &&
        o(
          "WAWebVoipDevicePermissionDialogLoader.react",
        ).preloadDevicePermissionDialog();
    }
    function x(e) {
      return o("WAWebUA").UA.isWebkit && e.isMicrophoneNeverAsked;
    }
    function $(e) {
      return (
        !e.isMicrophoneOff || o("WAWebVoipCallAudioUnlock").canStartCallAudio()
      );
    }
    function P(e) {
      o("WAWebUA").UA.isWebkit &&
        e.isMicrophoneOff &&
        o("WAWebVoipCallAudioUnlock").unlockCallAudio();
    }
    function N(e) {
      return (e !== "denied" && e !== "prompt") ||
        !o(
          "WAWebVoipDeviceAccessRecoveryGating",
        ).isDeviceAccessRecoveryEnabled()
        ? null
        : !o("WAWebVoipCallAudioUnlock").canStartCallAudio();
    }
    function M(e) {
      return (
        e &&
        o(
          "WAWebVoipBrowserPermissionButtonGating",
        ).isBrowserPermissionButtonEnabled("microphone")
      );
    }
    function w(e, t, n) {
      var r = n.isAfterGuide,
        a = n.offersPermissionButton;
      return babelHelpers.extends({}, t, {
        afterAccept: function () {
          (o("WAWebVoipRecoveryJoinLog").recordRecoveryJoin(e, {
            isAfterGuide: r,
            isCameraOff: t.acceptWithoutCamera,
            isMicrophoneOff: t.acceptMuted,
          }),
            a &&
              (o(
                "WAWebVoipBlockedMicrophoneJoinState",
              ).recordBlockedMicrophoneJoin(e.id),
              o("WAWebCoreActionsODS").logCallBlockedMicJoin("recorded")),
            t.afterAccept());
        },
      });
    }
    function A(e) {
      return (
        o("WAWebVoipCallStateUtils").isCallIncoming(e) ||
        e === o("WAWebVoipWaCallEnums").CallState.Rejoining
      );
    }
    function F(t, n, a) {
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
            u = z(
              (s =
                l == null
                  ? void 0
                  : l.then(function (e) {
                      return (O(t, a, e), B(t, a, e), e.granted);
                    })) != null
                ? s
                : j(i, a),
            );
          u.then(function (e) {
            return e == null ? void 0 : Q(t, n, a, e);
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
    function O(e, t, n) {
      var a = n.isRefused;
      e.neverAsked.microphone &&
        a &&
        r("WAWebCallCollection").activeCall === t &&
        o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(t.id);
    }
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = n.isRefused;
          if (!(!e.neverAsked.microphone || !a)) {
            var i = yield o(
              "WAWebMediaPermissionsUtils",
            ).queryMediaPermissionStateStrict("microphone");
            i !== "denied" ||
              r("WAWebCallCollection").activeCall !== t ||
              !o(
                "WAWebVoipBrowserPermissionButtonGating",
              ).isBrowserPermissionButtonEnabled("microphone") ||
              (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: microphone blocked at the prompt after joining, offering the permission button",
                  ])),
              ),
              o(
                "WAWebVoipBlockedMicrophoneJoinState",
              ).recordBlockedMicrophoneJoin(t.id),
              o("WAWebCoreActionsODS").logCallBlockedMicJoin(
                "blocked_at_prompt",
              ));
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !(
              o(
                "WAWebVoipBlockedMicrophoneJoinState",
              ).getBlockedMicrophoneJoinCallId() === e.id || !G(e)
            )
          ) {
            var t = yield o(
              "WAWebMediaPermissionsUtils",
            ).queryMediaPermissionStateStrict("microphone");
            t !== "denied" ||
              r("WAWebCallCollection").activeCall !== e ||
              !o(
                "WAWebVoipBrowserPermissionButtonGating",
              ).isBrowserPermissionButtonEnabled("microphone") ||
              (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: microphone blocked at the unmute prompt, offering the permission button",
                  ])),
              ),
              o(
                "WAWebVoipBlockedMicrophoneJoinState",
              ).recordBlockedMicrophoneJoin(e.id),
              o("WAWebCoreActionsODS").logCallBlockedMicJoin(
                "blocked_at_unmute",
              ));
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            !o(
              "WAWebVoipBrowserPermissionButtonGating",
            ).hasBrowserPermissionButton("microphone")
          )
            return null;
          var t = yield o(
            "WAWebMediaPermissionsUtils",
          ).queryMediaPermissionStateStrict("microphone");
          return t !== "granted" ||
            !o(
              "WAWebVoipBrowserPermissionButtonGating",
            ).isBrowserPermissionButtonEnabled("microphone") ||
            !o(
              "WAWebVoipDeviceAccessRecoveryGating",
            ).canAllowBlockedDeviceDuringCall()
            ? null
            : function () {
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: UI: microphone allowed while the call rang, unmuting after joining",
                    ])),
                ),
                  o(
                    "WAWebVoipBlockedMicrophoneJoinState",
                  ).recordBlockedMicrophoneJoin(e.id),
                  o("WAWebCoreActionsODS").logCallBlockedMicJoin(
                    "allowed_while_ringing",
                  ));
              };
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
      var t;
      return (
        o("WAWebVoipBlockedMicrophoneJoinState").isMutedForBlockedMicrophone(
          e.id,
        ) ||
        ((t = o("WAWebVoipRecoveryJoinLog").getRecoveryJoin(e)) == null
          ? void 0
          : t.isMicrophoneOff) === !0
      );
    }
    function z(e) {
      var t = Date.now();
      return e.then(function (e) {
        var n = Date.now() - t;
        return e == null || n <= v
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
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield re();
          if (!n || r("WAWebCallCollection").activeCall !== t) return null;
          var a = yield o(
              "WAWebVoipDevicePermissionRequest",
            ).requestVoipDevicePermissions(e),
            i = a.granted;
          return i;
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e, t, n, r) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield Y(t, r),
              a =
                t.microphone &&
                e.isMicrophoneOff &&
                o.microphone &&
                (yield re());
            (o.camera && (yield Z(n)), a && (yield te(n)));
          },
        )),
        X.apply(this, arguments)
      );
    }
    function Y(e, t) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield (C || (C = n("Promise"))).all([
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
        J.apply(this, arguments)
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (
            !(
              (t == null ? void 0 : t.type) !== "web" ||
              r("WAWebCallCollection").activeCall !== e
            )
          ) {
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: UI: camera allowed after joining, turning video on",
                ])),
            );
            var n = yield t.setCallVideoMute(!1);
            n !== 0 &&
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: turning video on after joining failed with status: ",
                    "",
                  ])),
                n,
              );
          }
        })),
        ee.apply(this, arguments)
      );
    }
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (
            !(
              (t == null ? void 0 : t.type) !== "web" ||
              r("WAWebCallCollection").activeCall !== e
            )
          ) {
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: UI: microphone allowed and live after joining, unmuting",
                ])),
            );
            var n = yield t.setCallMute(!1);
            n !== 0 &&
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: unmuting after joining failed with status: ",
                    "",
                  ])),
                n,
              );
          }
        })),
        ne.apply(this, arguments)
      );
    }
    function re() {
      return new (C || (C = n("Promise")))(function (e) {
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
          }, b);
        t = o("WAWebVoipMicrophoneInputState").subscribeToMicrophoneInput(
          function () {
            o("WAWebVoipMicrophoneInputState").getMicrophoneInputStatus() ===
              "active" && (window.clearTimeout(n), t(), e(!0));
          },
        );
      });
    }
    ((l.getDeviceRecoveryJoin = R),
      (l.getRefusedPromptJoin = E),
      (l.offerPermissionButtonAfterUnmuteBlock = q),
      (l.getAllowedWhileRingingRecorder = V));
  },
  98,
);
