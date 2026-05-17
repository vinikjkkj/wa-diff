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
    "WAWebAudioDeviceManager",
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
    var J = 200,
      Z = new WeakMap();
    function ee(e) {
      var t = Z.get(e);
      if (t != null) return t;
      var r = n("asyncToGeneratorRuntime")
        .asyncToGenerator(function* () {
          var t = Date.now(),
            n = yield nt(e),
            r = Date.now() - t;
          n.getTracks().forEach(function (e) {
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:getAvailableVideoDevices] permission track ",
                  ": readyState=",
                  ", stopping (took ",
                  "ms)",
                ])),
              e.kind,
              e.readyState,
              r,
            ),
              e.stop());
          });
        })()
        .finally(function () {
          window.setTimeout(function () {
            Z.get(e) === r && Z.delete(e);
          }, J);
        });
      return (Z.set(e, r), r);
    }
    function te() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    var ne = n("$InternalEnum").Mirrored(["None", "Ideal", "Exact"]),
      re = new Set([
        "ConstraintNotSatisfiedError",
        "OverconstrainedError",
        "NotFoundError",
      ]),
      oe = null;
    function ae() {
      return oe;
    }
    var ie = { microphone: null, camera: null },
      le = 1e3,
      se = 1e4,
      ue = 1e3,
      ce = 3e4,
      de = null;
    function me(e) {
      return de !== e;
    }
    function pe(e) {
      de === e && (de = null);
    }
    function _e(e) {
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
    function fe(e, t) {
      var n = _e(e);
      return n == null
        ? !1
        : (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] Safari camera permission retry stopped at ",
                ": ",
                "",
              ])),
            t,
            n,
          ),
          pe(e),
          !0);
    }
    function ge(e) {
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
      })(babelHelpers.extends({ checkVideo: e }, ie));
    }
    function he(e) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari;
    }
    function ye(e) {
      return Ce.apply(this, arguments);
    }
    function Ce() {
      return (
        (Ce = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!fe(e, "unmute start")) {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (
              !fe(e, "after stack load") &&
              (t == null ? void 0 : t.type) === "web"
            ) {
              var n = yield t.setCallVideoMute(!1);
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] Safari camera permission retry setCallVideoMute(false) status: ",
                    "",
                  ])),
                n,
              );
            }
          }
        })),
        Ce.apply(this, arguments)
      );
    }
    function be(e) {
      return ve.apply(this, arguments);
    }
    function ve() {
      return (
        (ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!me(e) && !fe(e, "before permission query")) {
            var t = yield Ee(!0),
              n = t.cameraPermission;
            if (!me(e) && !fe(e, "after permission query")) {
              if (n === "granted") {
                o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:acquireCameraStream] Safari camera permission granted after timeout; retrying video capture",
                    ])),
                );
                try {
                  yield ye(e);
                } finally {
                  pe(e);
                }
                return;
              }
              var r = Date.now() - e.retryStartedAt;
              if (n === "denied" || (!e.isCallLinkPreviewRetry && r >= ce)) {
                (pe(e),
                  o("WALogger").LOG(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] Safari camera permission retry stopped: permission=",
                        ", elapsed=",
                        "ms",
                      ])),
                    n,
                    r,
                  ));
                return;
              }
              Se(e);
            }
          }
        })),
        ve.apply(this, arguments)
      );
    }
    function Se(e) {
      self.setTimeout(function () {
        me(e) ||
          be(e).catch(function (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] Safari camera permission retry poll failed: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip-safari-camera-retry-poll-fail");
          });
      }, ue);
    }
    function Re() {
      var e, t;
      if (o("WAWebUA").UA.isSafari) {
        var n = r("WAWebCallCollection").activeCall,
          a = {
            isCallLinkPreviewRetry:
              (n == null ? void 0 : n.isInCallLinkPreview()) === !0,
            retryStartedAt: Date.now(),
            scheduledCallId: (e = n == null ? void 0 : n.id) != null ? e : null,
          };
        ((de = a),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] Safari camera permission prompt timed out; waiting for grant to retry (callId=",
                ", callLinkPreview=",
                ")",
              ])),
            (t = a.scheduledCallId) != null ? t : "none",
            a.isCallLinkPreviewRetry,
          ),
          Se(a));
      }
    }
    function Le(e, t, a) {
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
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] getUserMedia timed out after ",
                        "ms",
                      ])),
                    se,
                  ),
                  a == null || a(),
                  t(),
                  e(null));
              }, se);
            }),
          ])
          .finally(function () {
            !l && i != null && self.clearTimeout(i);
          })
      );
    }
    function Ee(e) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        ke.apply(this, arguments)
      );
    }
    function Ie(e, t) {
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
    function Te(e) {
      return De.apply(this, arguments);
    }
    function De() {
      return (
        (De = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (r("WAWebEnvironment").isWindows)
            return ((ie.microphone = !0), (ie.camera = !0), !0);
          var t = e && !Y(),
            n = !te();
          if (!n && !t)
            return ((ie.microphone = !0), e && (ie.camera = !0), !0);
          var a = yield Ee(e);
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
            var l = yield xe(i, t, n);
            return l
              ? (yield o("WAWebMediaCapture").stop(l),
                o("WAWebVoipActivityTracker").trackUiActivity(
                  t
                    ? o("WAWebVoipActivityTracker").VoipUiActivity
                        .PERMISSION_REQUEST_CAMERA_AND_MIC_END
                    : o("WAWebVoipActivityTracker").VoipUiActivity
                        .PERMISSION_REQUEST_MIC_END,
                ),
                n && (ie.microphone = !0),
                t && (ie.camera = !0),
                !0)
              : !1;
          } catch (e) {
            if (
              e instanceof o("WAWebMiscErrors").GetUserMedia.NotAllowedError
            ) {
              o("WAWebCoreActionsODS").logCallPermissionDenied();
              var s = Ie(t, a);
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
              var u = Ie(t, a);
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
        De.apply(this, arguments)
      );
    }
    function xe(e, t, n) {
      return $e.apply(this, arguments);
    }
    function $e() {
      return (
        ($e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = ge(t) ? Number.POSITIVE_INFINITY : void 0,
              a = Me(t, n);
            try {
              return yield Pe(e, r, a);
            } catch (t) {
              if (a == null || !we(t)) throw t;
              return (
                o("WALogger").LOG(
                  T ||
                    (T = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:checkVoipDevicePermissions] selected camera unavailable, retrying permission check with default camera: ",
                      "",
                    ])),
                  t,
                ),
                Pe(e, r)
              );
            }
          },
        )),
        $e.apply(this, arguments)
      );
    }
    function Pe(e, t, n) {
      return Ne.apply(this, arguments);
    }
    function Ne() {
      return (
        (Ne = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        Ne.apply(this, arguments)
      );
    }
    function Me(e, t) {
      if (!e) return null;
      var n = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
      return r("isStringNullOrEmpty")(n)
        ? null
        : [{ video: { deviceId: { exact: n } }, audio: t }];
    }
    function we(e) {
      return e instanceof Error && re.has(e.name);
    }
    function Ae(e) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia
            ? (o("WALogger").ERROR(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
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
                  return He({
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
                  return Xe({
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
                  return mt({ params: l.params, targetWindow: l.targetWindow });
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })(t);
        })),
        Fe.apply(this, arguments)
      );
    }
    var Oe = null,
      Be = null;
    function We() {
      var e;
      if (Oe == null) {
        var t = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
        ((Be = t),
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [EarlyMicAcquire] Acquiring microphone in gesture (device=",
                ")",
              ])),
            (e = t == null ? void 0 : t.slice(0, 8)) != null ? e : "default",
          ));
        var n = (Oe = Ae({
          type: "microphone",
          selectedDeviceId: t != null ? t : void 0,
          suppressErrorPopup: !0,
        })
          .then(function (e) {
            return (
              e != null &&
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Microphone acquired successfully",
                    ])),
                ),
              e
            );
          })
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Microphone acquire failed: ",
                    "",
                  ])),
                e,
              ),
              Oe === n && ((Oe = null), (Be = null)),
              null
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
          if (Oe == null) return null;
          var t = Oe,
            n = Be;
          ((Oe = null), (Be = null));
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
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
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
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [EarlyMicAcquire] Consuming early-acquired microphone stream",
                ])),
            ),
            r
          );
        })),
        Ue.apply(this, arguments)
      );
    }
    function Ve() {
      if (Oe != null) {
        var e = Oe;
        ((Oe = null),
          (Be = null),
          e
            .then(function (e) {
              e != null &&
                (o("WAWebMediaCapture").stop(e),
                o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Cleaned up unused early-acquired microphone stream",
                    ])),
                ));
            })
            .catch(function (e) {
              o("WALogger").WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Cleanup failed: ",
                    "",
                  ])),
                e,
              );
            }));
      }
    }
    function He(e) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.params,
            r = e.selectedDeviceId,
            a = e.suppressErrorPopup,
            i = e.targetWindow;
          if (te()) return null;
          o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
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
              timeoutLimit: ge(!1) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: i,
              mediaConstraints: n
                ? [je(r, "exact", n), je(r, "ideal", n), je(null, "none", n)]
                : void 0,
            }),
            u = s.asyncStream;
          return u
            .then(function (e) {
              if (e != null)
                try {
                  ze(e);
                } catch (e) {
                  o("WALogger").LOG(
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
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
        Ge.apply(this, arguments)
      );
    }
    function ze(e) {
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
        ((oe = { supported: n, applied: l }),
          o("WAWebVoipBrowserAudioStatus").setBrowserAudioProcessingApplied(l),
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
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
        ((oe = {
          supported: n,
          applied: {
            echoCancellation: !1,
            noiseSuppression: !1,
            autoGainControl: !1,
          },
        }),
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:detectBrowserAudioProcessing] no audio track found in stream",
              ])),
          ));
    }
    function je(e, t, n) {
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
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
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
    function Ke(e) {
      return Qe.apply(this, arguments);
    }
    function Qe() {
      return (
        (Qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
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
        Qe.apply(this, arguments)
      );
    }
    function Xe(e) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.isAVUpgrade,
            r = e.params,
            a = e.selectedDeviceId,
            i = e.targetWindow;
          if (Y()) return null;
          var l = yield Ee(!0),
            s = l.cameraPermission;
          if (s === "denied") {
            o("WALogger").LOG(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
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
          var c = yield Ke({ selectedDeviceId: a, params: r, targetWindow: i });
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
            A ||
              (A = babelHelpers.taggedTemplateLiteralLoose([
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
              timeoutLimit: ge(!0) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: i,
              mediaConstraints: r
                ? [
                    Je({
                      device: { deviceId: a, constraintType: ne.Exact },
                      params: r,
                    }),
                    Je({
                      device: { deviceId: a, constraintType: ne.Ideal },
                      params: r,
                    }),
                    Je({ params: r }),
                  ]
                : void 0,
            }),
            f = _.asyncStream,
            g = _.disposeStream,
            h = he(s)
              ? Le(f, g, function () {
                  s === "prompt" && Re();
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
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
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
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
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
                    B ||
                      (B = babelHelpers.taggedTemplateLiteralLoose([
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
                    W ||
                      (W = babelHelpers.taggedTemplateLiteralLoose([
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
                    q ||
                      (q = babelHelpers.taggedTemplateLiteralLoose([
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
        Ye.apply(this, arguments)
      );
    }
    function Je(e) {
      var t = e.device,
        n = e.params,
        a = { video: r("WAWebVoipCameraTrackConstraints")(n), audio: !1 };
      return (
        o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
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
            t.constraintType === ne.None
              ? a.video
              : t.constraintType === ne.Exact
                ? babelHelpers.extends({}, a.video, {
                    deviceId: { exact: t.deviceId },
                  })
                : t.constraintType === ne.Ideal
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
    function Ze(e) {
      return {
        video: {
          width: { ideal: e.width },
          height: { ideal: e.height },
          frameRate: { ideal: e.maxFps },
        },
        audio: !1,
      };
    }
    function et(e, t, n) {
      return tt.apply(this, arguments);
    }
    function tt() {
      return (
        (tt = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                    U ||
                      (U = babelHelpers.taggedTemplateLiteralLoose([
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
                      yield ee(l);
                    } catch (e) {
                      if (t !== !0) throw e;
                    }
                }
              }
              var m = yield o(
                  "WAWebAudioDeviceManager",
                ).coalescedEnumerateDevices(l),
                p = m
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
                  p.length,
                ),
                p
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
        tt.apply(this, arguments)
      );
    }
    function nt(e) {
      return rt.apply(this, arguments);
    }
    function rt() {
      return (
        (rt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
          if (r("isStringNullOrEmpty")(t)) return e.getUserMedia({ video: !0 });
          try {
            return yield e.getUserMedia({ video: { deviceId: { exact: t } } });
          } catch (t) {
            if (!we(t)) throw t;
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
        rt.apply(this, arguments)
      );
    }
    function ot(e, t, n, r) {
      return at.apply(this, arguments);
    }
    function at() {
      return (
        (at = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield et(t, n, r);
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
        at.apply(this, arguments)
      );
    }
    var it = 25e3,
      lt = 250,
      st = 500;
    function ut(e) {
      var t = e;
      return t.closed === !0;
    }
    function ct(e, t) {
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
                ut(e) && t("popout closed");
              } catch (e) {
                t("popout inaccessible");
              }
            }, lt)));
        }, st)),
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
    function dt(e, t, n) {
      var a = new AbortController(),
        i = !1,
        l = function (n) {
          i ||
            ((i = !0),
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireDesktopStream] aborted: ",
                  "",
                ])),
              n,
            ),
            t(),
            a.abort());
        },
        s = self.setTimeout(function () {
          return l("getDisplayMedia timed out after " + it + "ms");
        }, it),
        u = n != null ? ct(n, l) : null;
      return (
        e.catch(r("WAWebNoop")),
        r("WAPromiseRaceAbort")(e, a.signal)
          .catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull))
          .finally(function () {
            (self.clearTimeout(s), u != null && u());
          })
      );
    }
    function mt(e) {
      return pt.apply(this, arguments);
    }
    function pt() {
      return (
        (pt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.params,
            n = e.targetWindow,
            r = t ? Ze(t) : { video: !0 },
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
            return dt(s, u, n).catch(function (e) {
              if (
                e instanceof o("WAWebMiscErrors").GetUserMedia.NotAllowedError
              ) {
                o("WAWebCoreActionsODS").logCallScreenShareDenied();
                var t = Date.now() - i;
                if (t < le) {
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
              if (c < le) {
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
        pt.apply(this, arguments)
      );
    }
    ((l.getBrowserAudioProcessingStatus = ae),
      (l.queryPermissionStatus = Ee),
      (l.checkVoipDevicePermissions = Te),
      (l.acquireVoipMediaStream = Ae),
      (l.earlyAcquireMic = We),
      (l.consumeEarlyAcquiredMicStream = qe),
      (l.cleanupEarlyAcquiredMic = Ve),
      (l.getAvailableVideoDevices = et),
      (l.getIsValidVideoDevice = ot));
  },
  98,
);
