__d(
  "WAWebVoipAcquireMediaStream",
  [
    "$InternalEnum",
    "Promise",
    "WAFilteredCatch",
    "WAGetMediaDevicesSupportedConstraints",
    "WALogger",
    "WAWebABProps",
    "WAWebCoreActionsODS",
    "WAWebEnvironment",
    "WAWebGuidePopup.react",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaPermissionsUtils",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebNoop",
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
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N,
      M = N || (N = o("react"));
    function w() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    function A() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    var F = n("$InternalEnum").Mirrored(["None", "Ideal", "Exact"]),
      O = null;
    function B() {
      return O;
    }
    var W = { microphone: null, camera: null },
      q = 1e3;
    function U(e) {
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
      })(babelHelpers.extends({ checkVideo: e }, W));
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!e) return o("WAWebGuidePopup.react").Messaging.MIC_FAIL;
          var t = yield V(!0),
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
        z.apply(this, arguments)
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (r("WAWebEnvironment").isWindows)
            return ((W.microphone = !0), (W.camera = !0), !0);
          var t = e && !w(),
            n = !A();
          if (!n && !t) return ((W.microphone = !0), e && (W.camera = !0), !0);
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
                timeoutLimit: U(t) ? Number.POSITIVE_INFINITY : void 0,
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
                n && (W.microphone = !0),
                t && (W.camera = !0),
                !0)
              : !1;
          } catch (e) {
            if (
              e instanceof o("WAWebMiscErrors").GetUserMedia.NotAllowedError
            ) {
              o("WAWebCoreActionsODS").logCallPermissionDenied();
              var u = yield G(t);
              o("WAWebModalManager").ModalManager.open(
                M.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
              o("WAWebCoreActionsODS").logCallPermissionDeviceError();
              var c = yield G(t);
              o("WAWebModalManager").ModalManager.open(
                M.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
                  M.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                  return Y({
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
                  return re({
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
                  return de({ params: l.params, targetWindow: l.targetWindow });
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })(t);
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e) {
      return J.apply(this, arguments);
    }
    function J() {
      return (
        (J = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.params,
            r = e.selectedDeviceId,
            a = e.suppressErrorPopup,
            i = e.targetWindow;
          if (A()) return null;
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
              timeoutLimit: U(!1) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: i,
              mediaConstraints: n
                ? [ee(r, "exact", n), ee(r, "ideal", n), ee(null, "none", n)]
                : void 0,
            }),
            u = s.asyncStream;
          return u
            .then(function (e) {
              if (e != null)
                try {
                  Z(e);
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
                  if (
                    (o("WAWebCoreActionsODS").logCallMediaMicError(), a !== !0)
                  ) {
                    var e;
                    l.open(
                      M.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
                  if (
                    (o("WAWebCoreActionsODS").logCallMediaMicError(), a !== !0)
                  ) {
                    var e;
                    l.open(
                      M.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
                  if (
                    (o("WAWebCoreActionsODS").logCallMediaMicError(), a !== !0)
                  ) {
                    var e;
                    l.open(
                      M.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
        J.apply(this, arguments)
      );
    }
    function Z(e) {
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
        ((O = { supported: n, applied: l }),
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
        ((O = {
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
    function ee(e, t, n) {
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
    function te(e) {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.params,
            a = e.selectedDeviceId,
            i = e.targetWindow;
          if (
            i != null &&
            (o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari)
          )
            return (o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera(), null);
          var l = yield o("WAWebVoipCameraPrewarm").consumePrewarmedStream();
          if (l == null) return null;
          var s = l.getVideoTracks()[0],
            u =
              s == null || (t = s.getSettings()) == null ? void 0 : t.deviceId,
            c =
              !r("isStringNullOrEmpty")(a) && u != null && u !== "" && u !== a;
          return c
            ? (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [CameraPrewarm] pre-warmed stream device mismatch: requested=",
                    ", actual=",
                    ". Discarding pre-warmed stream.",
                  ])),
                a,
                u != null ? u : "unknown",
              ),
              l.getTracks().forEach(function (e) {
                return e.stop();
              }),
              null)
            : (n != null &&
                o("WAWebVoipCameraPrewarm").scheduleResolutionSwitch(l, n),
              l);
        })),
        ne.apply(this, arguments)
      );
    }
    function re(e) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a = e.isAVUpgrade,
            i = e.params,
            l = e.selectedDeviceId,
            s = e.targetWindow;
          if (w()) return null;
          var u = yield V(!0),
            c = u.cameraPermission;
          if (c === "denied") {
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireCameraStream] camera permission denied, skipping camera acquisition",
                ])),
            );
            var d = yield o("WAWebVoipCameraPrewarm").consumePrewarmedStream();
            return (
              d != null &&
                d.getTracks().forEach(function (e) {
                  return e.stop();
                }),
              null
            );
          }
          var m = yield te({ selectedDeviceId: l, params: i, targetWindow: s });
          if (m != null) return m;
          var p =
              a === !0
                ? o("WAWebGuidePopup.react").FeatureSurface.VOIP_VIDEO_UPGRADE
                : o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            _ =
              s != null
                ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                : o("WAWebModalManager").ModalManager,
            f = Date.now();
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] requesting camera: deviceId=",
                ", targetWindow=",
                ", isAVUpgrade=",
                "",
              ])),
            (t = l == null ? void 0 : l.slice(0, 8)) != null ? t : "none",
            String(s != null),
            String(a != null ? a : !1),
          );
          var g = yield o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA,
              featureSurface: p,
              timeoutLimit: U(!0) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: s,
              mediaConstraints: i
                ? [
                    ae({
                      device: { deviceId: l, constraintType: F.Exact },
                      params: i,
                    }),
                    ae({
                      device: { deviceId: l, constraintType: F.Ideal },
                      params: i,
                    }),
                    ae({ params: i }),
                  ]
                : void 0,
            }),
            h = g.asyncStream,
            k = g.disposeStream,
            I = 1e4,
            T = null;
          h.catch(r("WAWebNoop"));
          var D = (P || (P = n("Promise")))
            .race([
              h,
              new P(function (e) {
                T = self.setTimeout(function () {
                  (o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] getUserMedia timed out after ",
                        "ms",
                      ])),
                    I,
                  ),
                    k(),
                    e(null));
                }, I);
              }),
            ])
            .finally(function () {
              T != null && self.clearTimeout(T);
            });
          return D.then(function (e) {
            var t = Date.now() - f;
            if (e != null) {
              var n,
                r,
                a,
                i,
                l = e.getVideoTracks()[0];
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] acquired in ",
                    "ms: readyState=",
                    ", muted=",
                    ", deviceId=",
                    "",
                  ])),
                t,
                (n = l == null ? void 0 : l.readyState) != null
                  ? n
                  : "no-track",
                String((r = l == null ? void 0 : l.muted) != null ? r : !1),
                (a =
                  l == null || (i = l.getSettings()) == null
                    ? void 0
                    : i.deviceId) != null
                  ? a
                  : "unknown",
              );
            } else
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] returned null stream after ",
                    "ms",
                  ])),
                t,
              );
            return e;
          })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebMiscErrors").GetUserMedia.NotAllowedError,
                function () {
                  o("WAWebCoreActionsODS").logCallMediaCameraError();
                  var e = Date.now() - f;
                  (o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotAllowedError after ",
                        "ms",
                      ])),
                    e,
                  ),
                    _.open(
                      M.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: o("WAWebGuidePopup.react").Messaging
                          .CAMERA_FAIL,
                        type: o("WAWebGuidePopup.react").GuidePopupType
                          .GUIDE_UNBLOCK,
                        featureSurface: p,
                        onConfirm: function () {
                          return _.close();
                        },
                      }),
                    ));
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                [
                  o("WAWebMiscErrors").GetUserMedia.NotReadableError,
                  o("WAWebMiscErrors").GetUserMedia.SourceUnavailableError,
                ],
                function (e) {
                  o("WAWebCoreActionsODS").logCallMediaCameraError();
                  var t = Date.now() - f;
                  (o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotReadableError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    _.open(
                      M.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: o("WAWebGuidePopup.react").Messaging
                          .CAMERA_FAIL,
                        type: o("WAWebGuidePopup.react").GuidePopupType
                          .GUIDE_UNBLOCK,
                        featureSurface: p,
                        onConfirm: function () {
                          return _.close();
                        },
                      }),
                    ));
                },
              ),
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebMiscErrors").GetUserMedia.GetUserMediaError,
                function (e) {
                  o("WAWebCoreActionsODS").logCallMediaCameraError();
                  var t = Date.now() - f;
                  (o("WALogger").LOG(
                    E ||
                      (E = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] GetUserMediaError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    _.open(
                      M.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: o("WAWebGuidePopup.react").Messaging
                          .CAMERA_MISSING,
                        type: o("WAWebGuidePopup.react").GuidePopupType
                          .GUIDE_NONE,
                        featureSurface: p,
                        onConfirm: function () {
                          return _.close();
                        },
                      }),
                    ));
                },
              ),
            );
        })),
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
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
            t.constraintType === F.None
              ? a.video
              : t.constraintType === F.Exact
                ? babelHelpers.extends({}, a.video, {
                    deviceId: { exact: t.deviceId },
                  })
                : t.constraintType === F.Ideal
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
    function ie(e) {
      return {
        video: {
          width: { ideal: e.width },
          height: { ideal: e.height },
          frameRate: { ideal: e.maxFps },
        },
        audio: !1,
      };
    }
    function le(e, t, n) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
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
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:getAvailableVideoDevices] mediaDevices API not supported",
                      ])),
                  ),
                  []
                );
              var s = n === !0 || (o("WAWebUA").UA.isSafari && t === !0),
                u = o("WAWebUA").UA.isFirefox && e != null;
              if (!(i || s)) {
                if (!w()) {
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
                      var m = Date.now(),
                        p = yield l.getUserMedia({ video: !0 }),
                        _ = Date.now() - m;
                      p.getTracks().forEach(function (e) {
                        (o("WALogger").LOG(
                          I ||
                            (I = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:getAvailableVideoDevices] permission track ",
                              ": readyState=",
                              ", stopping (took ",
                              "ms)",
                            ])),
                          e.kind,
                          e.readyState,
                          _,
                        ),
                          e.stop());
                      });
                    } catch (e) {
                      if (t !== !0) throw e;
                    }
                }
              }
              var f = yield l.enumerateDevices(),
                g = f
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
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] loaded ",
                      "\n      video devices",
                    ])),
                  g.length,
                ),
                g
              );
            } catch (e) {
              return (
                (!(e instanceof Error) || !e.name.includes("NotAllowed")) &&
                  o("WALogger").ERROR(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:getAvailableVideoDevices] error loading devices: ",
                        "",
                      ])),
                    e,
                  ),
                []
              );
            }
          },
        )),
        se.apply(this, arguments)
      );
    }
    function ue(e, t, n, r) {
      return ce.apply(this, arguments);
    }
    function ce() {
      return (
        (ce = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield le(t, n, r);
            return a.some(function (t) {
              return t.deviceId === e;
            })
              ? !0
              : (o("WALogger").ERROR(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getIsValidVideoDevice: device not found in available devices: ",
                      "",
                    ])),
                  e,
                ),
                !1);
          },
        )),
        ce.apply(this, arguments)
      );
    }
    function de(e) {
      return me.apply(this, arguments);
    }
    function me() {
      return (
        (me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.params,
            n = e.targetWindow,
            r = t ? ie(t) : { video: !0 },
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
                o("WAWebCoreActionsODS").logCallScreenShareDenied();
                var t = Date.now() - i;
                if (t < q) {
                  o("WALogger").LOG(
                    $ ||
                      ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                    M.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
              o("WAWebCoreActionsODS").logCallScreenShareDenied();
              var u = Date.now() - i;
              if (u < q) {
                var c =
                  n != null
                    ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                    : o("WAWebModalManager").ModalManager;
                c.open(
                  M.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
        me.apply(this, arguments)
      );
    }
    ((l.getBrowserAudioProcessingStatus = B),
      (l.queryPermissionStatus = V),
      (l.checkVoipDevicePermissions = j),
      (l.acquireVoipMediaStream = Q),
      (l.getAvailableVideoDevices = le),
      (l.getIsValidVideoDevice = ue));
  },
  98,
);
