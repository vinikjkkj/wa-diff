__d(
  "WAWebVoipOngoingCallJoinDevices",
  [
    "Promise",
    "WALogger",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipCallAudioUnlock",
    "WAWebVoipDeviceAccessRecoveryGating",
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
      p = { afterJoin: r("WAWebNoop") },
      _ = { afterJoin: E };
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          o("WAWebVoipJoinWithoutCamera").clearJoinWithoutCamera(e);
          var a = yield (m || (m = n("Promise"))).all([
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
          v(i, r);
          var s = i === "denied";
          return (!s && l !== "denied") ||
            !o(
              "WAWebVoipDeviceAccessRecoveryGating",
            ).isDeviceAccessRecoveryEnabled()
            ? h({
                callId: e,
                checkVideo: t,
                isCameraOff: t && l !== "granted",
                joinAndAccept: r,
              })
            : (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: blocked devices won't stop the ongoing call join, microphone=",
                    ", camera=",
                    "",
                  ])),
                i,
                l,
              ),
              s
                ? _
                : h({
                    callId: e,
                    checkVideo: !1,
                    isCameraOff: !1,
                    joinAndAccept: r,
                  }));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = null,
            r = yield o(
              "WAWebVoipAcquireMediaStream",
            ).checkVoipDevicePermissions(e.checkVideo, null, void 0, {
              shouldOpenFailureGuide: (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    t = C(e, n);
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
              !e.checkVideo && e.isCameraOff ? S(e.callId) : p
            );
          var a = yield t;
          return (a == null ? void 0 : a.type) === "check_microphone_alone"
            ? h(
                babelHelpers.extends({}, e, {
                  checkVideo: !1,
                  isCameraOff: !0,
                }),
              )
            : (a == null ? void 0 : a.type) !== "join"
              ? (o("WAWebVoipCallAudioUnlock").releaseCallAudioUnlock(), null)
              : a.join;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WAWebMediaPermissionsUtils",
          ).queryMediaPermissionStateStrict("microphone");
          if (
            e.checkVideo &&
            (n === "granted" || (t === "unavailable" && n === "prompt")) &&
            o(
              "WAWebVoipDeviceAccessRecoveryGating",
            ).isDeviceAccessRecoveryEnabled()
          )
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: video check ",
                    " before joining an ongoing call, checking the microphone alone, microphone=",
                    "",
                  ])),
                t,
                n,
              ),
              { type: "check_microphone_alone" }
            );
          var r = R(e, t, n);
          return r == null
            ? null
            : { type: "join", join: r, keepsGuide: t === "unavailable" };
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      o("WAWebUA").UA.isWebkit &&
        t &&
        (e === "prompt" || e === "denied") &&
        o(
          "WAWebVoipDeviceAccessRecoveryGating",
        ).isDeviceAccessRecoveryEnabled() &&
        o("WAWebVoipCallAudioUnlock").unlockCallAudio();
    }
    function S(e) {
      return {
        afterJoin: function () {
          return o("WAWebVoipJoinWithoutCamera").markJoinWithoutCamera(e);
        },
      };
    }
    function R(t, n, r) {
      var a = t.callId,
        i = t.isCameraOff,
        l = t.joinAndAccept;
      return L(r, l)
        ? (o("WAWebVoipCallAudioUnlock").holdUnlockedCallAudio(),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: microphone ",
                " before joining an ongoing call (",
                "), joining, camera off=",
                "",
              ])),
            n,
            r,
            String(i),
          ),
          {
            afterJoin: function () {
              (i && o("WAWebVoipJoinWithoutCamera").markJoinWithoutCamera(a),
                l &&
                  (E(),
                  n === "denied" &&
                    o(
                      "WAWebVoipMicrophoneRefusalState",
                    ).reportMicrophoneRefused(a)));
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
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: muting an ongoing call joined without a microphone failed",
              ])),
          )
          .catching(r("getErrorSafe")(e));
      });
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((e == null ? void 0 : e.type) === "web") {
            var t = yield e.setCallMute(!0);
            t !== 0 &&
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: muting an ongoing call joined without a microphone failed with status: ",
                    "",
                  ])),
                t,
              );
          }
        })),
        I.apply(this, arguments)
      );
    }
    l.checkOngoingCallJoinDevices = f;
  },
  98,
);
