__d(
  "WAWebVoipAcquireMediaStream",
  [
    "$InternalEnum",
    "Promise",
    "WAAbortError",
    "WAFilteredCatch",
    "WAGetMediaDevicesSupportedConstraints",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebCoreActionsODS",
    "WAWebEnvironment",
    "WAWebGuidePopup.react",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaPermissionsUtils",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipActivityTracker",
    "WAWebVoipBrowserAudioStatus",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipCameraTrackConstraints",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipStackInterface",
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
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q,
      X = Q || (Q = o("react"));
    function Y() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    function J() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    var Z = n("$InternalEnum").Mirrored(["None", "Ideal", "Exact"]),
      ee = new Set([
        "ConstraintNotSatisfiedError",
        "OverconstrainedError",
        "NotFoundError",
      ]),
      te = null;
    function ne() {
      return te;
    }
    var re = { microphone: null, camera: null },
      oe = 1e3,
      ae = 1e4,
      ie = 1e3,
      le = 3e4,
      se = null;
    function ue(e) {
      return se !== e;
    }
    function ce(e) {
      se === e && (se = null);
    }
    function de(e) {
      var t = e.scheduledCallId,
        n = r("WAWebCallCollection").activeCall,
        o = n == null ? void 0 : n.id;
      return t == null || t !== o
        ? "call changed (scheduled=" +
            (t != null ? t : "none") +
            ", current=" +
            (o != null ? o : "none") +
            ")"
        : e.isCallLinkPreviewRetry &&
            (n == null ? void 0 : n.isInCallLinkPreview()) !== !0
          ? "call link preview no longer active (callId=" + t + ")"
          : null;
    }
    function me(e, t) {
      var n = de(e);
      return n == null
        ? !1
        : (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] Safari camera permission retry stopped at ",
                ": ",
                "",
              ])),
            t,
            n,
          ),
          ce(e),
          !0);
    }
    function pe(e) {
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
      })(babelHelpers.extends({ checkVideo: e }, re));
    }
    function _e(e) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari;
    }
    function fe(e) {
      return ge.apply(this, arguments);
    }
    function ge() {
      return (
        (ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!me(e, "unmute start")) {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (
              !me(e, "after stack load") &&
              (t == null ? void 0 : t.type) === "web"
            ) {
              var n = yield t.setCallVideoMute(!1);
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] Safari camera permission retry setCallVideoMute(false) status: ",
                    "",
                  ])),
                n,
              );
            }
          }
        })),
        ge.apply(this, arguments)
      );
    }
    function he(e) {
      return ye.apply(this, arguments);
    }
    function ye() {
      return (
        (ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!ue(e) && !me(e, "before permission query")) {
            var t = yield Se(!0),
              n = t.cameraPermission;
            if (!ue(e) && !me(e, "after permission query")) {
              if (n === "granted") {
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:acquireCameraStream] Safari camera permission granted after timeout; retrying video capture",
                    ])),
                );
                try {
                  yield fe(e);
                } finally {
                  ce(e);
                }
                return;
              }
              var r = Date.now() - e.retryStartedAt;
              if (n === "denied" || (!e.isCallLinkPreviewRetry && r >= le)) {
                (ce(e),
                  o("WALogger").LOG(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] Safari camera permission retry stopped: permission=",
                        ", elapsed=",
                        "ms",
                      ])),
                    n,
                    r,
                  ));
                return;
              }
              Ce(e);
            }
          }
        })),
        ye.apply(this, arguments)
      );
    }
    function Ce(e) {
      self.setTimeout(function () {
        ue(e) ||
          he(e).catch(function (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] Safari camera permission retry poll failed: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip-safari-camera-retry-poll-fail");
          });
      }, ie);
    }
    function be() {
      var e, t;
      if (o("WAWebUA").UA.isSafari) {
        var n = r("WAWebCallCollection").activeCall,
          a = {
            isCallLinkPreviewRetry:
              (n == null ? void 0 : n.isInCallLinkPreview()) === !0,
            retryStartedAt: Date.now(),
            scheduledCallId: (e = n == null ? void 0 : n.id) != null ? e : null,
          };
        ((se = a),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] Safari camera permission prompt timed out; waiting for grant to retry (callId=",
                ", callLinkPreview=",
                ")",
              ])),
            (t = a.scheduledCallId) != null ? t : "none",
            a.isCallLinkPreviewRetry,
          ),
          Ce(a));
      }
    }
    function ve(e, t, a) {
      var i = null,
        l = !1;
      return (
        e.catch(r("WAWebNoop")),
        (K || (K = n("Promise")))
          .race([
            e,
            new K(function (e) {
              i = self.setTimeout(function () {
                ((l = !0),
                  (i = null),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] getUserMedia timed out after ",
                        "ms",
                      ])),
                    ae,
                  ),
                  a == null || a(),
                  t(),
                  e(null));
              }, ae);
            }),
          ])
          .finally(function () {
            !l && i != null && self.clearTimeout(i);
          })
      );
    }
    function Se(e) {
      return Re.apply(this, arguments);
    }
    function Re() {
      return (
        (Re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Re.apply(this, arguments)
      );
    }
    function Le(e, t) {
      return e
        ? (function (e) {
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
              t.micPermission === "granted",
              t.cameraPermission === "granted",
            ),
          )
        : o("WAWebGuidePopup.react").Messaging.MIC_FAIL;
    }
    function Ee(e) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (r("WAWebEnvironment").isWindows)
            return ((re.microphone = !0), (re.camera = !0), !0);
          var t = e && !Y(),
            n = !J();
          if (!n && !t)
            return ((re.microphone = !0), e && (re.camera = !0), !0);
          var a = yield Se(e);
          try {
            o("WAWebVoipActivityTracker").trackUiActivity(
              t
                ? o("WAWebVoipActivityTracker").VoipUiActivity
                    .PERMISSION_REQUEST_CAMERA_AND_MIC_START
                : o("WAWebVoipActivityTracker").VoipUiActivity
                    .PERMISSION_REQUEST_MIC_START,
            );
            var i;
            t && n
              ? (i = o("WAWebMediaCaptureStreamType")
                  .WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE)
              : t
                ? (i = o("WAWebMediaCaptureStreamType")
                    .WAWebMediaCaptureStreamType.CAMERA)
                : (i = o("WAWebMediaCaptureStreamType")
                    .WAWebMediaCaptureStreamType.MICROPHONE);
            var l = yield Ie(i, t, n);
            return l
              ? (yield o("WAWebMediaCapture").stop(l),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  t
                    ? o("WAWebVoipActivityTracker").VoipUiActivity
                        .PERMISSION_REQUEST_CAMERA_AND_MIC_END
                    : o("WAWebVoipActivityTracker").VoipUiActivity
                        .PERMISSION_REQUEST_MIC_END,
                ),
                n && (re.microphone = !0),
                t && (re.camera = !0),
                !0)
              : !1;
          } catch (e) {
            if (
              e instanceof o("WAWebMiscErrors").GetUserMedia.NotAllowedError
            ) {
              o("WAWebCoreActionsODS").logCallPermissionDenied();
              var s = Le(t, a);
              o("WAWebModalManager").ModalManager.open(
                X.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                  messaging: s,
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
              var u = Le(t, a);
              o("WAWebModalManager").ModalManager.open(
                X.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                  messaging: u,
                  type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
                  featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                    .VOIP,
                }),
              );
            } else
              e instanceof
                o("WAWebMiscErrors").GetUserMedia.GetUserMediaError &&
                o("WAWebModalManager").ModalManager.open(
                  X.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
        ke.apply(this, arguments)
      );
    }
    function Ie(e, t, n) {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = pe(t) ? Number.POSITIVE_INFINITY : void 0,
              a = $e(t, n);
            try {
              return yield De(e, r, a);
            } catch (t) {
              if (a == null || !Pe(t)) throw t;
              return (
                o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:checkVoipDevicePermissions] selected camera unavailable, retrying permission check with default camera: ",
                      "",
                    ])),
                  t,
                ),
                De(e, r)
              );
            }
          },
        )),
        Te.apply(this, arguments)
      );
    }
    function De(e, t, n) {
      return xe.apply(this, arguments);
    }
    function xe() {
      return (
        (xe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = {
              type: e,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            };
            (t != null && (r.timeoutLimit = t),
              n != null && (r.mediaConstraints = n));
            var a = yield o("WAWebMediaCapture").start(r),
              i = a.asyncStream;
            return i;
          },
        )),
        xe.apply(this, arguments)
      );
    }
    function $e(e, t) {
      if (!e) return null;
      var n = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
      return r("isStringNullOrEmpty")(n)
        ? null
        : [{ video: { deviceId: { exact: n } }, audio: t }];
    }
    function Pe(e) {
      return e instanceof Error && ee.has(e.name);
    }
    function Ne(e) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia
            ? (o("WALogger").ERROR(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
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
                  return qe({
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
                  return je({
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
                  return ut({ params: l.params, targetWindow: l.targetWindow });
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })(t);
        })),
        Me.apply(this, arguments)
      );
    }
    var we = null,
      Ae = null;
    function Fe() {
      var e;
      if (we == null) {
        var t = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
        ((Ae = t),
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [EarlyMicAcquire] Acquiring microphone in gesture (device=",
                ")",
              ])),
            (e = t == null ? void 0 : t.slice(0, 8)) != null ? e : "default",
          ));
        var n = (we = Ne({
          type: "microphone",
          selectedDeviceId: t != null ? t : void 0,
          suppressErrorPopup: !0,
        })
          .then(function (e) {
            return (
              e != null &&
                o("WALogger").LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Microphone acquired successfully",
                    ])),
                ),
              e
            );
          })
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Microphone acquire failed: ",
                    "",
                  ])),
                e,
              ),
              we === n && ((we = null), (Ae = null)),
              null
            );
          }));
      }
    }
    function Oe(e) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (we == null) return null;
          var t = we,
            n = Ae;
          ((we = null), (Ae = null));
          var r = yield t;
          if (r == null) return null;
          if (e != null && e !== "" && n !== e) {
            var a,
              i,
              l =
                (a =
                  (i = r.getAudioTracks()[0]) == null
                    ? void 0
                    : i.getSettings().deviceId) != null
                  ? a
                  : null;
            if (l !== e) {
              var s;
              return (
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Device mismatch (requested=",
                      ", acquired=",
                      "). Discarding early-acquired stream.",
                    ])),
                  e == null ? void 0 : e.slice(0, 8),
                  (s = n == null ? void 0 : n.slice(0, 8)) != null
                    ? s
                    : "default",
                ),
                o("WAWebMediaCapture").stop(r),
                null
              );
            }
          }
          return (
            o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [EarlyMicAcquire] Consuming early-acquired microphone stream",
                ])),
            ),
            r
          );
        })),
        Be.apply(this, arguments)
      );
    }
    function We() {
      if (we != null) {
        var e = we;
        ((we = null),
          (Ae = null),
          e
            .then(function (e) {
              e != null &&
                (o("WAWebMediaCapture").stop(e),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Cleaned up unused early-acquired microphone stream",
                    ])),
                ));
            })
            .catch(function (e) {
              o("WALogger").WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Cleanup failed: ",
                    "",
                  ])),
                e,
              );
            }));
      }
    }
    function qe(e) {
      return Ue.apply(this, arguments);
    }
    function Ue() {
      return (
        (Ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.params,
            r = e.selectedDeviceId,
            a = e.suppressErrorPopup,
            i = e.targetWindow;
          if (J()) return null;
          o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
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
              timeoutLimit: pe(!1) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: i,
              mediaConstraints: n
                ? [He(r, "exact", n), He(r, "ideal", n), He(null, "none", n)]
                : void 0,
            }),
            u = s.asyncStream;
          return u
            .then(function (e) {
              if (e != null)
                try {
                  Ve(e);
                } catch (e) {
                  o("WALogger").LOG(
                    P ||
                      (P = babelHelpers.taggedTemplateLiteralLoose([
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
                      X.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
                      X.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
                      X.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
        Ue.apply(this, arguments)
      );
    }
    function Ve(e) {
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
        ((te = { supported: n, applied: l }),
          o("WAWebVoipBrowserAudioStatus").setBrowserAudioProcessingApplied(l),
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
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
        ((te = {
          supported: n,
          applied: {
            echoCancellation: !1,
            noiseSuppression: !1,
            autoGainControl: !1,
          },
        }),
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:detectBrowserAudioProcessing] no audio track found in stream",
              ])),
          ));
    }
    function He(e, t, n) {
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
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
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
    function Ge(e) {
      return ze.apply(this, arguments);
    }
    function ze() {
      return (
        (ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
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
        ze.apply(this, arguments)
      );
    }
    function je(e) {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.isAVUpgrade,
            r = e.params,
            a = e.selectedDeviceId,
            i = e.targetWindow;
          if (Y()) return null;
          var l = yield Se(!0),
            s = l.cameraPermission;
          if (s === "denied") {
            o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
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
          var c = yield Ge({ selectedDeviceId: a, params: r, targetWindow: i });
          if (c != null) return c;
          var d =
              n === !0
                ? o("WAWebGuidePopup.react").FeatureSurface.VOIP_VIDEO_UPGRADE
                : o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            m =
              i != null
                ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                : o("WAWebModalManager").ModalManager,
            p = Date.now();
          o("WALogger").LOG(
            w ||
              (w = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] requesting camera: deviceId=",
                ", targetWindow=",
                ", isAVUpgrade=",
                "",
              ])),
            (t = a == null ? void 0 : a.slice(0, 8)) != null ? t : "none",
            String(i != null),
            String(n != null ? n : !1),
          );
          var _ = yield o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA,
              featureSurface: d,
              timeoutLimit: pe(!0) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: i,
              mediaConstraints: r
                ? [
                    Qe({
                      device: { deviceId: a, constraintType: Z.Exact },
                      params: r,
                    }),
                    Qe({
                      device: { deviceId: a, constraintType: Z.Ideal },
                      params: r,
                    }),
                    Qe({ params: r }),
                  ]
                : void 0,
            }),
            f = _.asyncStream,
            g = _.disposeStream,
            h = _e(s)
              ? ve(f, g, function () {
                  s === "prompt" && be();
                })
              : f;
          return h
            .then(function (e) {
              var t = Date.now() - p;
              if (e != null) {
                var n,
                  r,
                  a,
                  i,
                  l = e.getVideoTracks()[0];
                o("WALogger").LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
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
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
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
                  var e = Date.now() - p;
                  (o("WALogger").LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotAllowedError after ",
                        "ms",
                      ])),
                    e,
                  ),
                    m.open(
                      X.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: o("WAWebGuidePopup.react").Messaging
                          .CAMERA_FAIL,
                        type: o("WAWebGuidePopup.react").GuidePopupType
                          .GUIDE_UNBLOCK,
                        featureSurface: d,
                        onConfirm: function () {
                          return m.close();
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
                  var t = Date.now() - p;
                  (o("WALogger").LOG(
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotReadableError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    m.open(
                      X.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: o("WAWebGuidePopup.react").Messaging
                          .CAMERA_FAIL,
                        type: o("WAWebGuidePopup.react").GuidePopupType
                          .GUIDE_UNBLOCK,
                        featureSurface: d,
                        onConfirm: function () {
                          return m.close();
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
                  var t = Date.now() - p;
                  (o("WALogger").LOG(
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] GetUserMediaError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    m.open(
                      X.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: o("WAWebGuidePopup.react").Messaging
                          .CAMERA_MISSING,
                        type: o("WAWebGuidePopup.react").GuidePopupType
                          .GUIDE_NONE,
                        featureSurface: d,
                        onConfirm: function () {
                          return m.close();
                        },
                      }),
                    ));
                },
              ),
            );
        })),
        Ke.apply(this, arguments)
      );
    }
    function Qe(e) {
      var t = e.device,
        n = e.params,
        a = { video: r("WAWebVoipCameraTrackConstraints")(n), audio: !1 };
      return (
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
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
            t.constraintType === Z.None
              ? a.video
              : t.constraintType === Z.Exact
                ? babelHelpers.extends({}, a.video, {
                    deviceId: { exact: t.deviceId },
                  })
                : t.constraintType === Z.Ideal
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
    function Xe(e) {
      return {
        video: {
          width: { ideal: e.width },
          height: { ideal: e.height },
          frameRate: { ideal: e.maxFps },
        },
        audio: !1,
      };
    }
    function Ye(e, t, n) {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:getAvailableVideoDevices] mediaDevices API not supported",
                      ])),
                  ),
                  []
                );
              var s = n === !0 || (o("WAWebUA").UA.isSafari && t === !0),
                u = o("WAWebUA").UA.isFirefox && e != null;
              if (!(i || s)) {
                if (!Y()) {
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
                        p = yield Ze(l),
                        _ = Date.now() - m;
                      p.getTracks().forEach(function (e) {
                        (o("WALogger").LOG(
                          U ||
                            (U = babelHelpers.taggedTemplateLiteralLoose([
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
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
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
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
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
        Je.apply(this, arguments)
      );
    }
    function Ze(e) {
      return et.apply(this, arguments);
    }
    function et() {
      return (
        (et = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
          if (r("isStringNullOrEmpty")(t)) return e.getUserMedia({ video: !0 });
          try {
            return yield e.getUserMedia({ video: { deviceId: { exact: t } } });
          } catch (t) {
            if (!Pe(t)) throw t;
            return (
              o("WALogger").LOG(
                G ||
                  (G = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] selected camera unavailable, falling back to default camera: ",
                    "",
                  ])),
                t,
              ),
              e.getUserMedia({ video: !0 })
            );
          }
        })),
        et.apply(this, arguments)
      );
    }
    function tt(e, t, n, r) {
      return nt.apply(this, arguments);
    }
    function nt() {
      return (
        (nt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield Ye(t, n, r);
            return a.some(function (t) {
              return t.deviceId === e;
            })
              ? !0
              : (o("WALogger").ERROR(
                  z ||
                    (z = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getIsValidVideoDevice: device not found in available devices: ",
                      "",
                    ])),
                  e,
                ),
                !1);
          },
        )),
        nt.apply(this, arguments)
      );
    }
    var rt = 25e3,
      ot = 250,
      at = 500;
    function it(e) {
      var t = e;
      return t.closed === !0;
    }
    function lt(e, t) {
      var n = null,
        r = null,
        o = null;
      try {
        ((n = function () {
          return t("popout pagehide");
        }),
          e.addEventListener("pagehide", n));
      } catch (e) {
        n = null;
      }
      return (
        (r = self.setTimeout(function () {
          ((r = null),
            (o = self.setInterval(function () {
              try {
                it(e) && t("popout closed");
              } catch (e) {
                t("popout inaccessible");
              }
            }, ot)));
        }, at)),
        function () {
          if (
            (r != null && self.clearTimeout(r),
            o != null && self.clearInterval(o),
            n != null)
          )
            try {
              e.removeEventListener("pagehide", n);
            } catch (e) {}
        }
      );
    }
    function st(e, t, n) {
      var a = new AbortController(),
        i = !1,
        l = function (n) {
          i ||
            ((i = !0),
            o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireDesktopStream] aborted: ",
                  "",
                ])),
              n,
            ),
            t(),
            a.abort());
        },
        s = self.setTimeout(function () {
          return l("getDisplayMedia timed out after " + rt + "ms");
        }, rt),
        u = n != null ? lt(n, l) : null;
      return (
        e.catch(r("WAWebNoop")),
        r("WAPromiseRaceAbort")(e, a.signal)
          .catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull))
          .finally(function () {
            (self.clearTimeout(s), u != null && u());
          })
      );
    }
    function ut(e) {
      return ct.apply(this, arguments);
    }
    function ct() {
      return (
        (ct = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.params,
            n = e.targetWindow,
            r = t ? Xe(t) : { video: !0 },
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
              s = l.asyncStream,
              u = l.disposeStream;
            return st(s, u, n).catch(function (e) {
              if (
                e instanceof o("WAWebMiscErrors").GetUserMedia.NotAllowedError
              ) {
                o("WAWebCoreActionsODS").logCallScreenShareDenied();
                var t = Date.now() - i;
                if (t < oe) {
                  o("WALogger").LOG(
                    j ||
                      (j = babelHelpers.taggedTemplateLiteralLoose([
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
                    X.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
              var c = Date.now() - i;
              if (c < oe) {
                var d =
                  n != null
                    ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                    : o("WAWebModalManager").ModalManager;
                d.open(
                  X.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                    messaging: o("WAWebGuidePopup.react").Messaging
                      .SCREEN_SHARE_FAIL,
                    type: o("WAWebGuidePopup.react").GuidePopupType
                      .GUIDE_UNBLOCK,
                    featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                      .VOIP,
                    onConfirm: function () {
                      return d.close();
                    },
                  }),
                );
              }
              return null;
            }
            return null;
          }
        })),
        ct.apply(this, arguments)
      );
    }
    ((l.getBrowserAudioProcessingStatus = ne),
      (l.queryPermissionStatus = Se),
      (l.checkVoipDevicePermissions = Ee),
      (l.acquireVoipMediaStream = Ne),
      (l.earlyAcquireMic = Fe),
      (l.consumeEarlyAcquiredMicStream = Oe),
      (l.cleanupEarlyAcquiredMic = We),
      (l.getAvailableVideoDevices = Ye),
      (l.getIsValidVideoDevice = tt));
  },
  98,
);
