__d(
  "WAWebVoipOngoingCallJoinDevices",
  [
    "WALogger",
    "WAWebBrowserPermissionSupport",
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
      p = { afterJoin: r("WAWebNoop") },
      _ = { afterJoin: E };
    async function f(t, n, r) {
      (o("WAWebVoipJoinWithoutCamera").clearJoinWithoutCamera(t),
        o(
          "WAWebVoipBlockedMicrophoneJoinState",
        ).forgetBlockedMicrophoneMuteAndJoin(t));
      var a = await Promise.all([
          o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
            "microphone",
          ),
          n
            ? o("WAWebMediaPermissionsUtils").queryMediaPermissionStateStrict(
                "camera",
              )
            : "unknown",
        ]),
        i = a[0],
        l = a[1];
      (C(i, r), b(i, r));
      var s = i === "denied";
      return (!s && l !== "denied") ||
        !o(
          "WAWebVoipDeviceAccessRecoveryGating",
        ).isDeviceAccessRecoveryEnabled()
        ? g({
            callId: t,
            checkVideo: n,
            isCameraOff: n && l !== "granted",
            joinAndAccept: r,
            wasMicrophoneBlocked: s,
          })
        : (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
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
              ).recordBlockedMicrophoneMute(t),
              S({
                callId: t,
                isCameraNeverAsked: l === "prompt",
                joinAndAccept: r,
              }))
            : g({
                callId: t,
                checkVideo: !1,
                isCameraOff: !1,
                joinAndAccept: r,
                wasMicrophoneBlocked: !1,
              }));
    }
    async function g(e) {
      var t = null,
        n = await o("WAWebVoipAcquireMediaStream").checkVoipDevicePermissions(
          e.checkVideo,
          null,
          void 0,
          {
            shouldOpenFailureGuide: async function (r) {
              t = h(e, r);
              var n = await t;
              return n == null || (n.type === "join" && n.keepsGuide);
            },
          },
        );
      if (n)
        return (
          o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock(),
          !e.checkVideo && e.isCameraOff ? v(e.callId) : p
        );
      var r = await t;
      return (r == null ? void 0 : r.type) === "check_microphone_alone"
        ? g(babelHelpers.extends({}, e, { checkVideo: !1, isCameraOff: !0 }))
        : (r == null ? void 0 : r.type) !== "join"
          ? (o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock(), null)
          : r.join;
    }
    async function h(e, t) {
      var n,
        r = await o(
          "WAWebMediaPermissionsUtils",
        ).queryMediaPermissionStateStrict("microphone");
      if (
        e.checkVideo &&
        (r === "granted" || (t === "unavailable" && r === "prompt")) &&
        o("WAWebVoipDeviceAccessRecoveryGating").isDeviceAccessRecoveryEnabled()
      )
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: video check ",
                " before joining an ongoing call, checking the microphone alone, microphone=",
                "",
              ])),
            t,
            r,
          ),
          { type: "check_microphone_alone" }
        );
      var a = (n = R(e, t, r)) != null ? n : y(e, t, r);
      return a == null
        ? null
        : { type: "join", join: a, keepsGuide: t === "unavailable" };
    }
    function y(e, t, n) {
      var r = e.callId,
        a = e.wasMicrophoneBlocked;
      return a ||
        t !== "denied" ||
        n !== "denied" ||
        !o(
          "WAWebVoipBrowserPermissionButtonGating",
        ).isBrowserPermissionButtonEnabled("microphone") ||
        !o(
          "WAWebVoipDeviceAccessRecoveryGating",
        ).isDeviceAccessRecoveryEnabled()
        ? null
        : (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: microphone blocked at the prompt before joining an ongoing call, joining muted",
              ])),
          ),
          o("WAWebVoipBlockedMicrophoneJoinState").recordBlockedMicrophoneMute(
            r,
          ),
          _);
    }
    function C(e, t) {
      !t &&
        (e === "prompt" || e === "denied") &&
        o("WAWebBrowserPermissionSupport").hasBrowserPermissionButton(
          "microphone",
        ) &&
        o(
          "WAWebVoipDevicePermissionDialogLoader.react",
        ).preloadDevicePermissionDialog();
    }
    function b(e, t) {
      o("WAWebUA").UA.isWebkit &&
        t &&
        (e === "prompt" || e === "denied") &&
        o(
          "WAWebVoipDeviceAccessRecoveryGating",
        ).isDeviceAccessRecoveryEnabled() &&
        o("WAWebVoipCallAudioUnlock").unlockCallAudio();
    }
    function v(e) {
      return {
        afterJoin: function () {
          return o("WAWebVoipJoinWithoutCamera").markJoinWithoutCamera(e);
        },
      };
    }
    function S(e) {
      var t = e.callId,
        n = e.isCameraNeverAsked,
        r = e.joinAndAccept;
      return !n ||
        r ||
        !o(
          "WAWebVoipBrowserPermissionButtonGating",
        ).isBrowserPermissionButtonEnabled("microphone")
        ? _
        : {
            afterJoin: function () {
              (o("WAWebVoipJoinWithoutCamera").markJoinWithoutCamera(t), E());
            },
          };
    }
    function R(e, t, n) {
      var r = e.callId,
        a = e.isCameraOff,
        i = e.joinAndAccept;
      return L(n, i)
        ? (o("WAWebVoipCallAudioUnlock").holdUnlockedCallAudio(),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
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
                  (E(),
                  t === "denied" &&
                    o(
                      "WAWebVoipMicrophoneRefusalState",
                    ).reportMicrophoneRefused(r)));
            },
          })
        : null;
    }
    function L(e, t) {
      return (
        o("WAWebUA").UA.isWebkit &&
        (e === "denied" || e === "prompt") &&
        (!t || o("WAWebVoipCallAudioUnlock").canStartCallAudio()) &&
        o("WAWebVoipDeviceAccessRecoveryGating").isDeviceAccessRecoveryEnabled()
      );
    }
    function E() {
      k().catch(function (e) {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: muting an ongoing call joined without a microphone failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      });
    }
    async function k() {
      var e = await o("WAWebVoipStackInterface").getVoipStackInterface();
      if ((e == null ? void 0 : e.type) === "web") {
        var t = await e.setCallMute(!0);
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
    }
    l.checkOngoingCallJoinDevices = f;
  },
  98,
);
