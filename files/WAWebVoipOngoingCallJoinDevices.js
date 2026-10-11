__d(
  "WAWebVoipOngoingCallJoinDevices",
  [
    "Promise",
    "WALogger",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUA",
    "WAWebVoipAcquireMediaStream",
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
      _ = { afterJoin: R };
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
            l = a[1],
            s = i === "denied";
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
          if (r) return !e.checkVideo && e.isCameraOff ? v(e.callId) : p;
          var a = yield t;
          return (a == null ? void 0 : a.type) === "check_microphone_alone"
            ? h(
                babelHelpers.extends({}, e, {
                  checkVideo: !1,
                  isCameraOff: !0,
                }),
              )
            : (a == null ? void 0 : a.type) === "join"
              ? a.join
              : null;
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
          var r = S(e, t, n);
          return r == null
            ? null
            : { type: "join", join: r, keepsGuide: t === "unavailable" };
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return {
        afterJoin: function () {
          return o("WAWebVoipJoinWithoutCamera").markJoinWithoutCamera(e);
        },
      };
    }
    function S(t, n, r) {
      var a = t.callId,
        i = t.isCameraOff,
        l = t.joinAndAccept;
      return !o("WAWebUA").UA.isWebkit ||
        (r !== "denied" && r !== "prompt") ||
        !o(
          "WAWebVoipDeviceAccessRecoveryGating",
        ).isDeviceAccessRecoveryEnabled()
        ? null
        : (o("WALogger").LOG(
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
                  (R(),
                  n === "denied" &&
                    o(
                      "WAWebVoipMicrophoneRefusalState",
                    ).reportMicrophoneRefused(a)));
            },
          });
    }
    function R() {
      L().catch(function (e) {
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
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        E.apply(this, arguments)
      );
    }
    l.checkOngoingCallJoinDevices = f;
  },
  98,
);
