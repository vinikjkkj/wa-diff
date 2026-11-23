__d(
  "WAWebVoipJoinDeviceRecovery",
  [
    "WALogger",
    "WAWebBrowserPermissionSupport",
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
      C = 1e4,
      b = 3e4,
      v = { join: null, offersPermissionButton: !1 };
    async function S(t, n) {
      if (n == null || !P(n) || r("WAWebEnvironment").isWindows) return v;
      o("WAWebVoipBlockedMicrophoneJoinState").discardBlockedMicrophoneJoin(
        n.id,
      );
      var a = { camera: t.camera, microphone: t.microphone && !n.selfMicMuted },
        i = await L(a);
      if (
        (E(i),
        !i.isRecoveryNeeded ||
          !o(
            "WAWebVoipDeviceAccessRecoveryGating",
          ).isDeviceAccessRecoveryEnabled())
      )
        return v;
      var l = x(
          (a.microphone ||
            o(
              "WAWebVoipBlockedMicrophoneJoinState",
            ).isMutedForBlockedMicrophone(n.id)) &&
            i.isMicrophoneBlocked,
        ),
        s = { join: null, offersPermissionButton: l };
      if ((T(i), k(i) || !I(i))) return s;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "voip: UI: joining without waiting for devices, microphone off=",
            ", camera off=",
            "",
          ])),
        String(i.isMicrophoneOff),
        String(i.isCameraOff),
      );
      var u = $(
        n,
        {
          acceptMuted: i.isMicrophoneOff,
          acceptWithoutCamera: i.isCameraOff || i.neverAsked.microphone,
          afterAccept: l ? r("WAWebNoop") : N(i, a, n),
        },
        { isAfterGuide: !1, offersPermissionButton: l },
      );
      return babelHelpers.extends({}, s, { join: u });
    }
    async function R(e, t, n, a) {
      if (t == null || !P(t)) return null;
      var i = await Promise.all([
          o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
            "microphone",
          ),
          e.camera
            ? o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                "camera",
              )
            : "unknown",
        ]),
        l = i[0],
        c = i[1],
        d = a && l === "denied",
        m = D(l);
      if (m == null) return null;
      (o("WAWebVoipCallAudioUnlock").holdUnlockedCallAudio(),
        n
          ? o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: UI: microphone unavailable before joining (",
                  "), joining muted, waits for the guide=",
                  "",
                ])),
              l,
              String(m),
            )
          : o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: UI: microphone refused before joining (",
                  "), joining muted, waits for the guide=",
                  "",
                ])),
              l,
              String(m),
            ),
        !n &&
          e.microphone &&
          !t.selfMicMuted &&
          o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(t.id));
      var p = {
        acceptMuted: !0,
        acceptWithoutCamera: c !== "granted",
        afterAccept: r("WAWebNoop"),
      };
      return babelHelpers.extends(
        {},
        $(t, p, { isAfterGuide: m, offersPermissionButton: d }),
        { waitsForGuideClick: m },
      );
    }
    async function L(e) {
      var t = await Promise.all([
          o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
            "microphone",
          ),
          e.camera
            ? o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                "camera",
              )
            : "unknown",
        ]),
        n = t[0],
        r = t[1],
        a = {
          camera: r === "prompt",
          microphone: e.microphone && n === "prompt",
        },
        i = n === "denied" || n === "prompt";
      return {
        isCameraOff: r !== "granted",
        isMicrophoneBlocked: n === "denied",
        isMicrophoneNeverAsked: n === "prompt",
        isMicrophoneOff: i,
        isRecoveryNeeded: i || a.camera,
        neverAsked: a,
      };
    }
    function E(e) {
      e.isMicrophoneOff &&
        o("WAWebBrowserPermissionSupport").hasBrowserPermissionButton(
          "microphone",
        ) &&
        o(
          "WAWebVoipDevicePermissionDialogLoader.react",
        ).preloadDevicePermissionDialog();
    }
    function k(e) {
      return o("WAWebUA").UA.isWebkit && e.isMicrophoneNeverAsked;
    }
    function I(e) {
      return (
        !e.isMicrophoneOff || o("WAWebVoipCallAudioUnlock").canStartCallAudio()
      );
    }
    function T(e) {
      o("WAWebUA").UA.isWebkit &&
        e.isMicrophoneOff &&
        o("WAWebVoipCallAudioUnlock").unlockCallAudio();
    }
    function D(e) {
      return (e !== "denied" && e !== "prompt") ||
        !o(
          "WAWebVoipDeviceAccessRecoveryGating",
        ).isDeviceAccessRecoveryEnabled()
        ? null
        : !o("WAWebVoipCallAudioUnlock").canStartCallAudio();
    }
    function x(e) {
      return (
        e &&
        o(
          "WAWebVoipBrowserPermissionButtonGating",
        ).isBrowserPermissionButtonEnabled("microphone")
      );
    }
    function $(e, t, n) {
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
    function P(e) {
      var t = e.getState();
      return (
        o("WAWebVoipCallStateUtils").isCallIncomingForRole(t, e.outgoing) ||
        t === o("WAWebVoipWaCallEnums").CallState.Rejoining
      );
    }
    function N(e, t, n) {
      var a = e.neverAsked;
      if (!a.camera && !a.microphone) return r("WAWebNoop");
      var i = e.isMicrophoneOff
        ? o("WAWebVoipDevicePermissionRequest").requestVoipDevicePermissions(a)
        : null;
      return (
        i != null &&
          o("WAWebVoipAudioCaptureAndPlayback").adoptGrantedMicrophoneStream(
            i.then(function (e) {
              var t = e.microphoneStream;
              return t;
            }),
            function () {
              return r("WAWebCallCollection").activeCall === n;
            },
          ),
        function () {
          var l,
            s = B(
              (l =
                i == null
                  ? void 0
                  : i.then(function (t) {
                      return (M(e, n, t), w(e, n, t), t.granted);
                    })) != null
                ? l
                : W(a, n),
            );
          s.then(function (r) {
            return r == null ? void 0 : q(e, t, n, r);
          }).catch(function (e) {
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: UI: turning on devices allowed after joining failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          });
        }
      );
    }
    function M(e, t, n) {
      var a = n.isRefused;
      e.neverAsked.microphone &&
        a &&
        r("WAWebCallCollection").activeCall === t &&
        o("WAWebVoipMicrophoneRefusalState").reportMicrophoneRefused(t.id);
    }
    async function w(e, t, n) {
      var a = n.isRefused;
      if (!(!e.neverAsked.microphone || !a)) {
        var i = await o(
          "WAWebMediaPermissionsUtils",
        ).queryMediaPermissionStateStrict("microphone");
        i !== "denied" ||
          r("WAWebCallCollection").activeCall !== t ||
          !o(
            "WAWebVoipBrowserPermissionButtonGating",
          ).isBrowserPermissionButtonEnabled("microphone") ||
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI: microphone blocked at the prompt after joining, offering the permission button",
              ])),
          ),
          o("WAWebVoipBlockedMicrophoneJoinState").recordBlockedMicrophoneJoin(
            t.id,
          ),
          o("WAWebCoreActionsODS").logCallBlockedMicJoin("blocked_at_prompt"));
      }
    }
    async function A(e) {
      if (
        !(
          o(
            "WAWebVoipBlockedMicrophoneJoinState",
          ).getBlockedMicrophoneJoinCallId() === e.id || !O(e)
        )
      ) {
        var t = await o(
          "WAWebMediaPermissionsUtils",
        ).queryMediaPermissionStateStrict("microphone");
        t !== "denied" ||
          r("WAWebCallCollection").activeCall !== e ||
          !o(
            "WAWebVoipBrowserPermissionButtonGating",
          ).isBrowserPermissionButtonEnabled("microphone") ||
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI: microphone blocked at the unmute prompt, offering the permission button",
              ])),
          ),
          o("WAWebVoipBlockedMicrophoneJoinState").recordBlockedMicrophoneJoin(
            e.id,
          ),
          o("WAWebCoreActionsODS").logCallBlockedMicJoin("blocked_at_unmute"));
      }
    }
    async function F(e) {
      if (
        !o("WAWebBrowserPermissionSupport").hasBrowserPermissionButton(
          "microphone",
        )
      )
        return null;
      var t = await o(
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
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    function O(e) {
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
    function B(e) {
      var t = Date.now();
      return e.then(function (e) {
        var n = Date.now() - t;
        return e == null || n <= b
          ? e
          : (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: UI: devices allowed ",
                  "ms after joining, leaving them off",
                ])),
              n,
            ),
            null);
      });
    }
    async function W(e, t) {
      var n = await G();
      if (!n || r("WAWebCallCollection").activeCall !== t) return null;
      var a = await o(
          "WAWebVoipDevicePermissionRequest",
        ).requestVoipDevicePermissions(e),
        i = a.granted;
      return i;
    }
    async function q(e, t, n, r) {
      var o = await U(t, r),
        a = t.microphone && e.isMicrophoneOff && o.microphone && (await G());
      (o.camera && (await V(n)), a && (await H(n)));
    }
    async function U(e, t) {
      var n = await Promise.all([
          o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
            "microphone",
          ),
          e.camera
            ? o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                "camera",
              )
            : "unknown",
        ]),
        r = n[0],
        a = n[1];
      return {
        camera: t.camera || a === "granted",
        microphone: t.microphone || r === "granted",
      };
    }
    async function V(e) {
      var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
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
        var n = await t.setCallVideoMute(!1);
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
    }
    async function H(e) {
      var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
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
        var n = await t.setCallMute(!1);
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
    }
    function G() {
      return new Promise(function (e) {
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
          }, C);
        t = o("WAWebVoipMicrophoneInputState").subscribeToMicrophoneInput(
          function () {
            o("WAWebVoipMicrophoneInputState").getMicrophoneInputStatus() ===
              "active" && (window.clearTimeout(n), t(), e(!0));
          },
        );
      });
    }
    ((l.getDeviceRecoveryJoin = S),
      (l.getRefusedPromptJoin = R),
      (l.offerPermissionButtonAfterUnmuteBlock = A),
      (l.getAllowedWhileRingingRecorder = F));
  },
  98,
);
