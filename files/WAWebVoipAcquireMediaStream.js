__d(
  "WAWebVoipAcquireMediaStream",
  [
    "$InternalEnum",
    "WAFilteredCatch",
    "WAGetMediaDevicesSupportedConstraints",
    "WALogger",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebGuidePopup.react",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaPermissionsUtils",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebUA",
    "WAWebVoipActivityTracker",
    "WAWebVoipBrowserAudioStatus",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipCameraTrackConstraints",
    "WAWebVoipPopoutModalManager",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["type"],
      s = ["type"],
      u = ["type"],
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
      b,
      v,
      S,
      R,
      L,
      E = L || (L = o("react"));
    function k() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    function I() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    var T = n("$InternalEnum").Mirrored(["None", "Ideal", "Exact"]),
      D = null;
    function x() {
      return D;
    }
    var $ = { microphone: null, camera: null },
      P = 1e3;
    function N(e) {
      return (function (e) {
        return (
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.checkVideo === !0 &&
            e.microphone === !0 &&
            e.camera === !0) ||
          (((typeof e == "object" && e !== null) || typeof e == "function") &&
            e.checkVideo === !1 &&
            e.microphone === !0)
        );
      })(babelHelpers.extends({ checkVideo: e }, $));
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = { micPermission: "prompt", cameraPermission: "prompt" };
          if (navigator === void 0 || !navigator.permissions) return t;
          try {
            var n = yield navigator.permissions.query({ name: "microphone" });
            if (((t.micPermission = n.state), e)) {
              var r = yield navigator.permissions.query({ name: "camera" });
              t.cameraPermission = r.state;
            }
          } catch (e) {}
          return t;
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e) return o("WAWebGuidePopup.react").Messaging.MIC_FAIL;
          var t = yield M(!0),
            n = t.cameraPermission,
            r = t.micPermission;
          return (function (e) {
            if (e === "camera")
              return o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL;
            if (e === "mic")
              return o("WAWebGuidePopup.react").Messaging.MIC_FAIL;
            if (e === "camera_and_mic")
              return o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_FAIL;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(
            o(
              "WAWebMediaPermissionsUtils",
            ).getDeviceSpecificPermissionMessaging(
              r === "granted",
              n === "granted",
            ),
          );
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
          if (r("WAWebEnvironment").isWindows)
            return (($.microphone = !0), ($.camera = !0), !0);
          var t = e && !k(),
            n = !I();
          if (!n && !t) return (($.microphone = !0), e && ($.camera = !0), !0);
          try {
            o("WAWebVoipActivityTracker").trackUiActivity(
              t
                ? o("WAWebVoipActivityTracker").VoipUiActivity
                    .PERMISSION_REQUEST_CAMERA_AND_MIC_START
                : o("WAWebVoipActivityTracker").VoipUiActivity
                    .PERMISSION_REQUEST_MIC_START,
            );
            var a;
            t && n
              ? (a = o("WAWebMediaCaptureStreamType")
                  .WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE)
              : t
                ? (a = o("WAWebMediaCaptureStreamType")
                    .WAWebMediaCaptureStreamType.CAMERA)
                : (a = o("WAWebMediaCaptureStreamType")
                    .WAWebMediaCaptureStreamType.MICROPHONE);
            var i = yield o("WAWebMediaCapture").start({
                type: a,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
                timeoutLimit: N(t) ? Number.POSITIVE_INFINITY : void 0,
              }),
              l = i.asyncStream,
              s = yield l;
            return s
              ? (yield o("WAWebMediaCapture").stop(s),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  t
                    ? o("WAWebVoipActivityTracker").VoipUiActivity
                        .PERMISSION_REQUEST_CAMERA_AND_MIC_END
                    : o("WAWebVoipActivityTracker").VoipUiActivity
                        .PERMISSION_REQUEST_MIC_END,
                ),
                n && ($.microphone = !0),
                t && ($.camera = !0),
                !0)
              : !1;
          } catch (e) {
            if (
              e instanceof o("WAWebMiscErrors").GetUserMedia.NotAllowedError
            ) {
              var u = yield A(t);
              o("WAWebModalManager").ModalManager.open(
                E.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                  messaging: u,
                  type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
                  featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                    .VOIP,
                }),
              );
            } else if (
              e instanceof o("WAWebMiscErrors").GetUserMedia.NotReadableError ||
              e instanceof
                o("WAWebMiscErrors").GetUserMedia.SourceUnavailableError
            ) {
              var c = yield A(t);
              o("WAWebModalManager").ModalManager.open(
                E.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                  messaging: c,
                  type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
                  featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                    .VOIP,
                }),
              );
            } else
              e instanceof
                o("WAWebMiscErrors").GetUserMedia.GetUserMediaError &&
                o("WAWebModalManager").ModalManager.open(
                  E.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                    messaging: t
                      ? o("WAWebGuidePopup.react").Messaging
                          .CAMERA_AND_MIC_MISSING
                      : o("WAWebGuidePopup.react").Messaging.MIC_MISSING,
                    type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
                    featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                      .VOIP,
                  }),
                );
            return !1;
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
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia
            ? (o("WALogger").ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] getUserMedia not supported",
                  ])),
              ),
              null)
            : (function (t) {
                if (
                  ((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                  t.type === "microphone"
                ) {
                  var n = t.type,
                    r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                  return U({
                    selectedDeviceId: r.selectedDeviceId,
                    params: r.params,
                    targetWindow: r.targetWindow,
                    suppressErrorPopup: r.suppressErrorPopup,
                  });
                }
                if (
                  ((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                  t.type === "camera"
                ) {
                  var o = t.type,
                    a = babelHelpers.objectWithoutPropertiesLoose(t, s);
                  return z({
                    selectedDeviceId: a.selectedDeviceId,
                    params: a.params,
                    targetWindow: a.targetWindow,
                    isAVUpgrade: a.isAVUpgrade,
                  });
                }
                if (
                  ((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                  t.type === "desktop"
                ) {
                  var i = t.type,
                    l = babelHelpers.objectWithoutPropertiesLoose(t, u);
                  return ee({ params: l.params, targetWindow: l.targetWindow });
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })(t);
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.params,
            r = e.selectedDeviceId,
            a = e.suppressErrorPopup,
            i = e.targetWindow;
          if (I()) return null;
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [MicDeviceSelector] acquireMicrophoneStream: selectedDeviceId=",
                ", hasParams=",
                "",
              ])),
            (t = r == null ? void 0 : r.slice(0, 8)) != null ? t : "null",
            String(n != null),
          );
          var l =
              i != null
                ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                : o("WAWebModalManager").ModalManager,
            s = yield o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
              timeoutLimit: N(!1) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: i,
              mediaConstraints: n
                ? [G(r, "exact", n), G(r, "ideal", n), G(null, "none", n)]
                : void 0,
            }),
            u = s.asyncStream;
          return u
            .then(function (e) {
              if (e != null)
                try {
                  H(e);
                } catch (e) {
                  o("WALogger").LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:detectBrowserAudioProcessing] failed: ",
                        "",
                      ])),
                    String(e),
                  );
                }
              return e;
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebMiscErrors").GetUserMedia.NotAllowedError,
                function () {
                  if (a !== !0) {
                    var e;
                    l.open(
                      E.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                        messaging: e.Messaging.MIC_FAIL,
                        type: e.GuidePopupType.GUIDE_UNBLOCK,
                        featureSurface: e.FeatureSurface.VOIP,
                        onConfirm: function () {
                          return l.close();
                        },
                      }),
                    );
                  }
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                [
                  o("WAWebMiscErrors").GetUserMedia.NotReadableError,
                  o("WAWebMiscErrors").GetUserMedia.SourceUnavailableError,
                ],
                function () {
                  if (a !== !0) {
                    var e;
                    l.open(
                      E.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                        messaging: e.Messaging.MIC_FAIL,
                        type: e.GuidePopupType.GUIDE_UNBLOCK,
                        featureSurface: e.FeatureSurface.VOIP,
                        onConfirm: function () {
                          return l.close();
                        },
                      }),
                    );
                  }
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebMiscErrors").GetUserMedia.GetUserMediaError,
                function () {
                  if (a !== !0) {
                    var e;
                    l.open(
                      E.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                        messaging: e.Messaging.MIC_MISSING,
                        type: e.GuidePopupType.GUIDE_NONE,
                        featureSurface: e.FeatureSurface.VOIP,
                        onConfirm: function () {
                          return l.close();
                        },
                      }),
                    );
                  }
                },
              ),
            );
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      var t = o(
          "WAGetMediaDevicesSupportedConstraints",
        ).getMediaDevicesSupportedConstraints(),
        n = {
          echoCancellation: (t == null ? void 0 : t.echoCancellation) === !0,
          noiseSuppression: (t == null ? void 0 : t.noiseSuppression) === !0,
          autoGainControl: (t == null ? void 0 : t.autoGainControl) === !0,
        },
        r = e.getAudioTracks()[0];
      if (r != null) {
        var a = r.getSettings(),
          i = new Map(Object.entries(a)),
          l = {
            echoCancellation: a.echoCancellation === !0,
            noiseSuppression: i.get("noiseSuppression") === !0,
            autoGainControl: i.get("autoGainControl") === !0,
          };
        ((D = { supported: n, applied: l }),
          o("WAWebVoipBrowserAudioStatus").setBrowserAudioProcessingApplied(l),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:detectBrowserAudioProcessing] supported: EC=",
                ", NS=",
                ", AGC=",
                " | applied: EC=",
                ", NS=",
                ", AGC=",
                "",
              ])),
            String(n.echoCancellation),
            String(n.noiseSuppression),
            String(n.autoGainControl),
            String(l.echoCancellation),
            String(l.noiseSuppression),
            String(l.autoGainControl),
          ));
      } else
        ((D = {
          supported: n,
          applied: {
            echoCancellation: !1,
            noiseSuppression: !1,
            autoGainControl: !1,
          },
        }),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:detectBrowserAudioProcessing] no audio track found in stream",
              ])),
          ));
    }
    function G(e, t, n) {
      var r;
      t === void 0 && (t = "exact");
      var a = {
        video: !1,
        audio: {
          sampleRate: n.sampleRate,
          channelCount: n.channels,
          echoCancellation: !0,
          noiseSuppression: !0,
          autoGainControl: !0,
          sampleSize: n.bitsPerSample,
        },
      };
      return (
        e != null && t === "exact"
          ? (a.audio = babelHelpers.extends({}, a.audio, {
              deviceId: { exact: e },
            }))
          : e != null &&
            t === "ideal" &&
            (a.audio = babelHelpers.extends({}, a.audio, {
              deviceId: { ideal: e },
            })),
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [MicDeviceSelector] getVoipMicrophoneMediaConstraints: deviceId=",
              ", constraintType=",
              ", sampleRate=",
              ", channels=",
              "",
            ])),
          (r = e == null ? void 0 : e.slice(0, 8)) != null ? r : "null",
          t,
          n.sampleRate,
          n.channels,
        ),
        a
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isAVUpgrade,
            n = e.params,
            a = e.selectedDeviceId,
            i = e.targetWindow;
          if (k()) return null;
          var l = yield M(!0),
            s = l.cameraPermission;
          if (s === "denied") {
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireCameraStream] camera permission denied, skipping camera acquisition",
                ])),
            );
            var u = yield o("WAWebVoipCameraPrewarm").consumePrewarmedStream();
            return (
              u != null &&
                u.getTracks().forEach(function (e) {
                  return e.stop();
                }),
              null
            );
          }
          var c = yield o("WAWebVoipCameraPrewarm").consumePrewarmedStream();
          if (c != null) {
            var d,
              m = c.getVideoTracks()[0],
              p =
                m == null || (d = m.getSettings()) == null
                  ? void 0
                  : d.deviceId,
              _ = !1;
            if (
              (r("isStringNullOrEmpty")(a) ||
                (_ = p != null && p !== "" && p !== a),
              _)
            )
              (o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraPrewarm] pre-warmed stream device mismatch: requested=",
                    ", actual=",
                    ". Discarding pre-warmed stream.",
                  ])),
                a,
                p != null ? p : "unknown",
              ),
                c.getTracks().forEach(function (e) {
                  return e.stop();
                }));
            else
              return (
                n != null &&
                  o("WAWebVoipCameraPrewarm").scheduleResolutionSwitch(c, n),
                c
              );
          }
          var f =
              t === !0
                ? o("WAWebGuidePopup.react").FeatureSurface.VOIP_VIDEO_UPGRADE
                : o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            g =
              i != null
                ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                : o("WAWebModalManager").ModalManager,
            C = yield o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA,
              featureSurface: f,
              timeoutLimit: N(!0) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: i,
              mediaConstraints: n
                ? [
                    K({
                      device: { deviceId: a, constraintType: T.Exact },
                      params: n,
                    }),
                    K({
                      device: { deviceId: a, constraintType: T.Ideal },
                      params: n,
                    }),
                    K({ params: n }),
                  ]
                : void 0,
            }),
            b = C.asyncStream;
          return b
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebMiscErrors").GetUserMedia.NotAllowedError,
                function () {
                  g.open(
                    E.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                      messaging: o("WAWebGuidePopup.react").Messaging
                        .CAMERA_FAIL,
                      type: o("WAWebGuidePopup.react").GuidePopupType
                        .GUIDE_UNBLOCK,
                      featureSurface: f,
                      onConfirm: function () {
                        return g.close();
                      },
                    }),
                  );
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                [
                  o("WAWebMiscErrors").GetUserMedia.NotReadableError,
                  o("WAWebMiscErrors").GetUserMedia.SourceUnavailableError,
                ],
                function () {
                  g.open(
                    E.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                      messaging: o("WAWebGuidePopup.react").Messaging
                        .CAMERA_FAIL,
                      type: o("WAWebGuidePopup.react").GuidePopupType
                        .GUIDE_UNBLOCK,
                      featureSurface: f,
                      onConfirm: function () {
                        return g.close();
                      },
                    }),
                  );
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebMiscErrors").GetUserMedia.GetUserMediaError,
                function () {
                  g.open(
                    E.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                      messaging: o("WAWebGuidePopup.react").Messaging
                        .CAMERA_MISSING,
                      type: o("WAWebGuidePopup.react").GuidePopupType
                        .GUIDE_NONE,
                      featureSurface: f,
                      onConfirm: function () {
                        return g.close();
                      },
                    }),
                  );
                },
              ),
            );
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      var t = e.device,
        n = e.params,
        a = { video: r("WAWebVoipCameraTrackConstraints")(n), audio: !1 };
      return (
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [CameraDeviceSelector] getVoipCameraMediaConstraints:\n    deviceId=",
              ", constraintType=",
              ", params=",
              "",
            ])),
          t == null ? void 0 : t.deviceId,
          t == null ? void 0 : t.constraintType,
          n,
        ),
        t &&
          !r("isStringNullOrEmpty")(t.deviceId) &&
          (a.video =
            t.constraintType === T.None
              ? a.video
              : t.constraintType === T.Exact
                ? babelHelpers.extends({}, a.video, {
                    deviceId: { exact: t.deviceId },
                  })
                : t.constraintType === T.Ideal
                  ? babelHelpers.extends({}, a.video, {
                      deviceId: { ideal: t.deviceId },
                    })
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          t.constraintType,
                      );
                    })()),
        a
      );
    }
    function Q(e) {
      return {
        video: {
          width: { ideal: e.width },
          height: { ideal: e.height },
          frameRate: { ideal: e.maxFps },
        },
        audio: !1,
      };
    }
    function X(e, t, n) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var r,
              a,
              i =
                t === !0 &&
                !o("WAWebUA").UA.isFirefox &&
                !o("WAWebUA").UA.isSafari,
              l = i
                ? navigator.mediaDevices
                : (r =
                      e == null || (a = e.navigator) == null
                        ? void 0
                        : a.mediaDevices) != null
                  ? r
                  : navigator.mediaDevices;
            if (!(l != null && l.enumerateDevices))
              return (
                o("WALogger").ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] mediaDevices API not supported",
                    ])),
                ),
                []
              );
            var s = n === !0 || (o("WAWebUA").UA.isSafari && t === !0),
              u = o("WAWebUA").UA.isFirefox && e != null;
            if (!(i || s)) {
              if (!k()) {
                var c = u
                    ? { granted: !1 }
                    : yield o(
                        "WAWebMediaPermissionsUtils",
                      ).checkMediaPermissionState(
                        "camera",
                        e == null ? void 0 : e.navigator,
                      ),
                  d = c.granted;
                if (!d)
                  try {
                    var m = yield l.getUserMedia({ video: !0 });
                    m.getTracks().forEach(function (e) {
                      return e.stop();
                    });
                  } catch (e) {
                    if (t !== !0) throw e;
                  }
              }
            }
            var p = yield l.enumerateDevices(),
              _ = p
                .filter(function (e) {
                  return e.kind === "videoinput";
                })
                .map(function (e) {
                  return {
                    deviceId: e.deviceId,
                    label: e.label || "Camera " + e.deviceId.slice(0, 8),
                  };
                });
            return (
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] loaded ",
                    "\n      video devices",
                  ])),
                _.length,
              ),
              _
            );
          } catch (e) {
            return (
              (!(e instanceof Error) || !e.name.includes("NotAllowed")) &&
                o("WALogger").ERROR(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] error loading devices: ",
                      "",
                    ])),
                  e,
                ),
              []
            );
          }
        })),
        Y.apply(this, arguments)
      );
    }
    function J(e, t, n, r) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield X(t, n, r);
            return a.some(function (t) {
              return t.deviceId === e;
            })
              ? !0
              : (o("WALogger").ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getIsValidVideoDevice: device not found in available devices: ",
                      "",
                    ])),
                  e,
                ),
                !1);
          },
        )),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.params,
            n = e.targetWindow,
            r = t ? Q(t) : { video: !0 },
            a = babelHelpers.extends({}, r, {
              preferCurrentTab: !1,
              selfBrowserSurface: "exclude",
              systemAudio: "exclude",
              surfaceSwitching: "include",
              monitorTypeSurfaces: "include",
            }),
            i = Date.now();
          try {
            var l = yield o("WAWebMediaCapture").start({
                type: o("WAWebMediaCaptureStreamType")
                  .WAWebMediaCaptureStreamType.DESKTOP,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
                mediaConstraints: [a],
                targetWindow: n,
              }),
              s = l.asyncStream;
            return s.catch(function (e) {
              if (
                e instanceof o("WAWebMiscErrors").GetUserMedia.NotAllowedError
              ) {
                var t = Date.now() - i;
                if (t < P) {
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV] acquireDesktopStream: auto-denied in ",
                        "ms, showing guide popup",
                      ])),
                    t,
                  );
                  var r =
                    n != null
                      ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                      : o("WAWebModalManager").ModalManager;
                  r.open(
                    E.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                      messaging: o("WAWebGuidePopup.react").Messaging
                        .SCREEN_SHARE_FAIL,
                      type: o("WAWebGuidePopup.react").GuidePopupType
                        .GUIDE_UNBLOCK,
                      featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                        .VOIP,
                      onConfirm: function () {
                        return r.close();
                      },
                    }),
                  );
                }
                return null;
              }
              return null;
            });
          } catch (e) {
            if (
              e instanceof o("WAWebMiscErrors").GetUserMedia.NotAllowedError
            ) {
              var u = Date.now() - i;
              if (u < P) {
                var c =
                  n != null
                    ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                    : o("WAWebModalManager").ModalManager;
                c.open(
                  E.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                    messaging: o("WAWebGuidePopup.react").Messaging
                      .SCREEN_SHARE_FAIL,
                    type: o("WAWebGuidePopup.react").GuidePopupType
                      .GUIDE_UNBLOCK,
                    featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                      .VOIP,
                    onConfirm: function () {
                      return c.close();
                    },
                  }),
                );
              }
              return null;
            }
            return null;
          }
        })),
        te.apply(this, arguments)
      );
    }
    ((l.getBrowserAudioProcessingStatus = x),
      (l.queryPermissionStatus = M),
      (l.checkVoipDevicePermissions = O),
      (l.acquireVoipMediaStream = W),
      (l.getAvailableVideoDevices = X),
      (l.getIsValidVideoDevice = J));
  },
  98,
);
