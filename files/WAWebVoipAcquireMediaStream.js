__d(
  "WAWebVoipAcquireMediaStream",
  [
    "$InternalEnum",
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
      Q = K || (K = o("react"));
    function X() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    var Y = 200,
      J = new WeakMap();
    function Z(e) {
      var t = J.get(e);
      if (t != null) return t;
      var n = (async function () {
        var t = Date.now(),
          n = await Ve(e),
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
      })().finally(function () {
        window.setTimeout(function () {
          J.get(e) === n && J.delete(e);
        }, Y);
      });
      return (J.set(e, n), n);
    }
    function ee() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_audio_capture_driver",
        ) === !0
      );
    }
    var te = n("$InternalEnum").Mirrored(["None", "Ideal", "Exact"]),
      ne = new Set([
        "ConstraintNotSatisfiedError",
        "OverconstrainedError",
        "NotFoundError",
      ]),
      re = null;
    function oe() {
      return re;
    }
    var ae = { microphone: null, camera: null },
      ie = 1e3,
      le = 1e4,
      se = 1e3,
      ue = 3e4,
      ce = null;
    function de(e) {
      return ce !== e;
    }
    function me(e) {
      ce === e && (ce = null);
    }
    function pe(e) {
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
    function _e(e, t) {
      var n = pe(e);
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
          me(e),
          !0);
    }
    function fe(e) {
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
      })(babelHelpers.extends({ checkVideo: e }, ae));
    }
    function ge(e) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari;
    }
    async function he(e) {
      if (!_e(e, "unmute start")) {
        var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
        if (
          !_e(e, "after stack load") &&
          (t == null ? void 0 : t.type) === "web"
        ) {
          var n = await t.setCallVideoMute(!1);
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] Safari camera permission retry setCallVideoMute(false) status: ",
                "",
              ])),
            n,
          );
        }
      }
    }
    async function ye(e) {
      if (!de(e) && !_e(e, "before permission query")) {
        var t = await Se(!0),
          n = t.cameraPermission;
        if (!de(e) && !_e(e, "after permission query")) {
          if (n === "granted") {
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireCameraStream] Safari camera permission granted after timeout; retrying video capture",
                ])),
            );
            try {
              await he(e);
            } finally {
              me(e);
            }
            return;
          }
          var r = Date.now() - e.retryStartedAt;
          if (n === "denied" || (!e.isCallLinkPreviewRetry && r >= ue)) {
            (me(e),
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    function Ce(e) {
      self.setTimeout(function () {
        de(e) ||
          ye(e).catch(function (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] Safari camera permission retry poll failed: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip-safari-camera-retry-poll-fail");
          });
      }, se);
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
        ((ce = a),
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
    function ve(e, t, n) {
      var a = null,
        i = !1;
      return (
        e.catch(r("WAWebNoop")),
        Promise.race([
          e,
          new Promise(function (e) {
            a = self.setTimeout(function () {
              ((i = !0),
                (a = null),
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:acquireCameraStream] getUserMedia timed out after ",
                      "ms",
                    ])),
                  le,
                ),
                n == null || n(),
                t(),
                e(null));
            }, le);
          }),
        ]).finally(function () {
          !i && a != null && self.clearTimeout(a);
        })
      );
    }
    async function Se(e) {
      var t = { micPermission: "prompt", cameraPermission: "prompt" };
      if (navigator === void 0 || !navigator.permissions) return t;
      try {
        var n = await navigator.permissions.query({ name: "microphone" });
        if (((t.micPermission = n.state), e)) {
          var r = await navigator.permissions.query({ name: "camera" });
          t.cameraPermission = r.state;
        }
      } catch (e) {}
      return t;
    }
    function Re(e, t) {
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
    async function Le(e) {
      if (r("WAWebEnvironment").isWindows)
        return ((ae.microphone = !0), (ae.camera = !0), !0);
      var t = e && !X(),
        n = !ee();
      if (!n && !t) return ((ae.microphone = !0), e && (ae.camera = !0), !0);
      var a = await Se(e);
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
          ? (i = o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA_AND_MICROPHONE)
          : t
            ? (i = o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA)
            : (i = o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE);
        var l = await Ee(i, t, n);
        return l
          ? (await o("WAWebMediaCapture").stop(l),
            o("WAWebVoipActivityTracker").trackUiActivity(
              t
                ? o("WAWebVoipActivityTracker").VoipUiActivity
                    .PERMISSION_REQUEST_CAMERA_AND_MIC_END
                : o("WAWebVoipActivityTracker").VoipUiActivity
                    .PERMISSION_REQUEST_MIC_END,
            ),
            n && (ae.microphone = !0),
            t && (ae.camera = !0),
            !0)
          : !1;
      } catch (e) {
        if (e instanceof o("WAWebMiscErrors").GetUserMedia.NotAllowedError) {
          o("WAWebCoreActionsODS").logCallPermissionDenied();
          var s = Re(t, a);
          o("WAWebModalManager").ModalManager.open(
            Q.jsx(o("WAWebGuidePopup.react").GuidePopup, {
              messaging: s,
              type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            }),
          );
        } else if (
          e instanceof o("WAWebMiscErrors").GetUserMedia.NotReadableError ||
          e instanceof o("WAWebMiscErrors").GetUserMedia.SourceUnavailableError
        ) {
          o("WAWebCoreActionsODS").logCallPermissionDeviceError();
          var u = Re(t, a);
          o("WAWebModalManager").ModalManager.open(
            Q.jsx(o("WAWebGuidePopup.react").GuidePopup, {
              messaging: u,
              type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            }),
          );
        } else
          e instanceof o("WAWebMiscErrors").GetUserMedia.GetUserMediaError &&
            o("WAWebModalManager").ModalManager.open(
              Q.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                messaging: t
                  ? o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_MISSING
                  : o("WAWebGuidePopup.react").Messaging.MIC_MISSING,
                type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
              }),
            );
        return !1;
      }
    }
    async function Ee(e, t, n) {
      var r = fe(t) ? Number.POSITIVE_INFINITY : void 0,
        a = Ie(t, n);
      try {
        return await ke(e, r, a);
      } catch (t) {
        if (a == null || !Te(t)) throw t;
        return (
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] selected camera unavailable, retrying permission check with default camera: ",
                "",
              ])),
            t,
          ),
          ke(e, r)
        );
      }
    }
    async function ke(e, t, n) {
      var r = {
        type: e,
        featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
      };
      (t != null && (r.timeoutLimit = t),
        n != null && (r.mediaConstraints = n));
      var a = await o("WAWebMediaCapture").start(r),
        i = a.asyncStream;
      return i;
    }
    function Ie(e, t) {
      if (!e) return null;
      var n = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
      return r("isStringNullOrEmpty")(n)
        ? null
        : [{ video: { deviceId: { exact: n } }, audio: t }];
    }
    function Te(e) {
      return e instanceof Error && ne.has(e.name);
    }
    async function De(t) {
      return !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia
        ? (o("WALogger").ERROR(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
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
              return we({
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
              return Be({
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
              return Ye({ params: l.params, targetWindow: l.targetWindow });
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                t,
            );
          })(t);
    }
    var xe = null,
      $e = null;
    function Pe() {
      var e;
      if (xe == null) {
        var t = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
        (($e = t),
          o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [EarlyMicAcquire] Acquiring microphone in gesture (device=",
                ")",
              ])),
            (e = t == null ? void 0 : t.slice(0, 8)) != null ? e : "default",
          ));
        var n = (xe = De({
          type: "microphone",
          selectedDeviceId: t != null ? t : void 0,
          suppressErrorPopup: !0,
        })
          .then(function (e) {
            return (
              e != null &&
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Microphone acquired successfully",
                    ])),
                ),
              e
            );
          })
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Microphone acquire failed: ",
                    "",
                  ])),
                e,
              ),
              xe === n && ((xe = null), ($e = null)),
              null
            );
          }));
      }
    }
    async function Ne(e) {
      if (xe == null) return null;
      var t = xe,
        n = $e;
      ((xe = null), ($e = null));
      var r = await t;
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
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [EarlyMicAcquire] Device mismatch (requested=",
                  ", acquired=",
                  "). Discarding early-acquired stream.",
                ])),
              e == null ? void 0 : e.slice(0, 8),
              (s = n == null ? void 0 : n.slice(0, 8)) != null ? s : "default",
            ),
            o("WAWebMediaCapture").stop(r),
            null
          );
        }
      }
      return (
        o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [EarlyMicAcquire] Consuming early-acquired microphone stream",
            ])),
        ),
        r
      );
    }
    function Me() {
      if (xe != null) {
        var e = xe;
        ((xe = null),
          ($e = null),
          e
            .then(function (e) {
              e != null &&
                (o("WAWebMediaCapture").stop(e),
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Cleaned up unused early-acquired microphone stream",
                    ])),
                ));
            })
            .catch(function (e) {
              o("WALogger").WARN(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Cleanup failed: ",
                    "",
                  ])),
                e,
              );
            }));
      }
    }
    async function we(e) {
      var t,
        n = e.params,
        r = e.selectedDeviceId,
        a = e.suppressErrorPopup,
        i = e.targetWindow;
      if (ee()) return null;
      o("WALogger").LOG(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
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
        s = await o("WAWebMediaCapture").start({
          type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .MICROPHONE,
          featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
          timeoutLimit: fe(!1) ? Number.POSITIVE_INFINITY : void 0,
          targetWindow: i,
          mediaConstraints: n
            ? [Fe(r, "exact", n), Fe(r, "ideal", n), Fe(null, "none", n)]
            : void 0,
        }),
        u = s.asyncStream;
      return u
        .then(function (e) {
          if (e != null)
            try {
              Ae(e);
            } catch (e) {
              o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
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
              if ((o("WAWebCoreActionsODS").logCallMediaMicError(), a !== !0)) {
                var e;
                l.open(
                  Q.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
              if ((o("WAWebCoreActionsODS").logCallMediaMicError(), a !== !0)) {
                var e;
                l.open(
                  Q.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
              if ((o("WAWebCoreActionsODS").logCallMediaMicError(), a !== !0)) {
                var e;
                l.open(
                  Q.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
    }
    function Ae(e) {
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
        ((re = { supported: n, applied: l }),
          o("WAWebVoipBrowserAudioStatus").setBrowserAudioProcessingApplied(l),
          o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
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
        ((re = {
          supported: n,
          applied: {
            echoCancellation: !1,
            noiseSuppression: !1,
            autoGainControl: !1,
          },
        }),
          o("WALogger").LOG(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:detectBrowserAudioProcessing] no audio track found in stream",
              ])),
          ));
    }
    function Fe(e, t, n) {
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
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
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
    async function Oe(e) {
      var t,
        n = e.params,
        a = e.selectedDeviceId,
        i = e.targetWindow;
      if (i != null && (o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari))
        return (o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera(), null);
      var l = await o("WAWebVoipCameraPrewarm").consumePrewarmedStream();
      if (l == null) return null;
      var s = l.getVideoTracks()[0],
        u = s == null || (t = s.getSettings()) == null ? void 0 : t.deviceId,
        c = !r("isStringNullOrEmpty")(a) && u != null && u !== "" && u !== a;
      return c
        ? (o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    async function Be(e) {
      var t,
        n = e.isAVUpgrade,
        r = e.params,
        a = e.selectedDeviceId,
        i = e.targetWindow;
      if (X()) return null;
      var l = await Se(!0),
        s = l.cameraPermission;
      if (s === "denied") {
        o("WALogger").LOG(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:acquireCameraStream] camera permission denied, skipping camera acquisition",
            ])),
        );
        var u = await o("WAWebVoipCameraPrewarm").consumePrewarmedStream();
        return (
          u != null &&
            u.getTracks().forEach(function (e) {
              return e.stop();
            }),
          null
        );
      }
      var c = await Oe({ selectedDeviceId: a, params: r, targetWindow: i });
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
        M ||
          (M = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV:acquireCameraStream] requesting camera: deviceId=",
            ", targetWindow=",
            ", isAVUpgrade=",
            "",
          ])),
        (t = a == null ? void 0 : a.slice(0, 8)) != null ? t : "none",
        String(i != null),
        String(n != null ? n : !1),
      );
      var _ = await o("WAWebMediaCapture").start({
          type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .CAMERA,
          featureSurface: d,
          timeoutLimit: fe(!0) ? Number.POSITIVE_INFINITY : void 0,
          targetWindow: i,
          mediaConstraints: r
            ? [
                We({
                  device: { deviceId: a, constraintType: te.Exact },
                  params: r,
                }),
                We({
                  device: { deviceId: a, constraintType: te.Ideal },
                  params: r,
                }),
                We({ params: r }),
              ]
            : void 0,
        }),
        f = _.asyncStream,
        g = _.disposeStream,
        h = ge(s)
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
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireCameraStream] acquired in ",
                  "ms: readyState=",
                  ", muted=",
                  ", deviceId=",
                  "",
                ])),
              t,
              (n = l == null ? void 0 : l.readyState) != null ? n : "no-track",
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
              A ||
                (A = babelHelpers.taggedTemplateLiteralLoose([
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
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] NotAllowedError after ",
                    "ms",
                  ])),
                e,
              ),
                m.open(
                  Q.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                    messaging: o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL,
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
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] NotReadableError after ",
                    "ms: ",
                    "",
                  ])),
                t,
                e,
              ),
                m.open(
                  Q.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                    messaging: o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL,
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
                B ||
                  (B = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] GetUserMediaError after ",
                    "ms: ",
                    "",
                  ])),
                t,
                e,
              ),
                m.open(
                  Q.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                    messaging: o("WAWebGuidePopup.react").Messaging
                      .CAMERA_MISSING,
                    type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
                    featureSurface: d,
                    onConfirm: function () {
                      return m.close();
                    },
                  }),
                ));
            },
          ),
        );
    }
    function We(e) {
      var t = e.device,
        n = e.params,
        a = { video: r("WAWebVoipCameraTrackConstraints")(n), audio: !1 };
      return (
        o("WALogger").LOG(
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
              `voip: [CameraDeviceSelector] getVoipCameraMediaConstraints:
    deviceId=`,
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
            t.constraintType === te.None
              ? a.video
              : t.constraintType === te.Exact
                ? babelHelpers.extends({}, a.video, {
                    deviceId: { exact: t.deviceId },
                  })
                : t.constraintType === te.Ideal
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
    function qe(e) {
      return {
        video: {
          width: { ideal: e.width },
          height: { ideal: e.height },
          frameRate: { ideal: e.maxFps },
        },
        audio: !1,
      };
    }
    async function Ue(e, t, n) {
      try {
        var r,
          a,
          i =
            t === !0 && !o("WAWebUA").UA.isFirefox && !o("WAWebUA").UA.isSafari,
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
          if (!X()) {
            var c = u
                ? { granted: !1 }
                : await o(
                    "WAWebMediaPermissionsUtils",
                  ).checkMediaPermissionState(
                    "camera",
                    e == null ? void 0 : e.navigator,
                  ),
              d = c.granted;
            if (!d)
              try {
                await Z(l);
              } catch (e) {
                if (t !== !0) throw e;
              }
          }
        }
        var m = await o("WAWebAudioDeviceManager").coalescedEnumerateDevices(l),
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
            U ||
              (U = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:getAvailableVideoDevices] loaded ",
                `
      video devices`,
              ])),
            p.length,
          ),
          p
        );
      } catch (e) {
        return (
          (!(e instanceof Error) || !e.name.includes("NotAllowed")) &&
            o("WALogger").ERROR(
              V ||
                (V = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:getAvailableVideoDevices] error loading devices: ",
                  "",
                ])),
              e,
            ),
          []
        );
      }
    }
    async function Ve(e) {
      var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
      if (r("isStringNullOrEmpty")(t)) return e.getUserMedia({ video: !0 });
      try {
        return await e.getUserMedia({ video: { deviceId: { exact: t } } });
      } catch (t) {
        if (!Te(t)) throw t;
        return (
          o("WALogger").LOG(
            H ||
              (H = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:getAvailableVideoDevices] selected camera unavailable, falling back to default camera: ",
                "",
              ])),
            t,
          ),
          e.getUserMedia({ video: !0 })
        );
      }
    }
    async function He(e, t, n, r) {
      var a = await Ue(t, n, r);
      return a.some(function (t) {
        return t.deviceId === e;
      })
        ? !0
        : (o("WALogger").ERROR(
            G ||
              (G = babelHelpers.taggedTemplateLiteralLoose([
                "voip: getIsValidVideoDevice: device not found in available devices: ",
                "",
              ])),
            e,
          ),
          !1);
    }
    var Ge = 25e3,
      ze = 250,
      je = 500;
    function Ke(e) {
      var t = e;
      return t.closed === !0;
    }
    function Qe(e, t) {
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
                Ke(e) && t("popout closed");
              } catch (e) {
                t("popout inaccessible");
              }
            }, ze)));
        }, je)),
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
    function Xe(e, t, n) {
      var a = new AbortController(),
        i = !1,
        l = function (n) {
          i ||
            ((i = !0),
            o("WALogger").LOG(
              z ||
                (z = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireDesktopStream] aborted: ",
                  "",
                ])),
              n,
            ),
            t(),
            a.abort());
        },
        s = self.setTimeout(function () {
          return l("getDisplayMedia timed out after " + Ge + "ms");
        }, Ge),
        u = n != null ? Qe(n, l) : null;
      return (
        e.catch(r("WAWebNoop")),
        r("WAPromiseRaceAbort")(e, a.signal)
          .catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull))
          .finally(function () {
            (self.clearTimeout(s), u != null && u());
          })
      );
    }
    async function Ye(e) {
      var t,
        n = e.params,
        r = e.targetWindow,
        a = n ? qe(n) : { video: !0 },
        i =
          ((t = o("WAWebABProps").getABPropConfigValue(
            "calling_audio_share_version",
          )) != null
            ? t
            : 1) > 0,
        l = babelHelpers.extends({}, a, {
          audio: i,
          preferCurrentTab: !1,
          selfBrowserSurface: "exclude",
          systemAudio: i ? "include" : "exclude",
          surfaceSwitching: "include",
          monitorTypeSurfaces: "include",
        }),
        s = Date.now();
      try {
        var u = await o("WAWebMediaCapture").start({
            type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .DESKTOP,
            featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            mediaConstraints: [l],
            targetWindow: r,
          }),
          c = u.asyncStream,
          d = u.disposeStream;
        return Xe(c, d, r).catch(function (e) {
          if (e instanceof o("WAWebMiscErrors").GetUserMedia.NotAllowedError) {
            o("WAWebCoreActionsODS").logCallScreenShareDenied();
            var t = Date.now() - s;
            if (t < ie) {
              o("WALogger").LOG(
                j ||
                  (j = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV] acquireDesktopStream: auto-denied in ",
                    "ms, showing guide popup",
                  ])),
                t,
              );
              var n =
                r != null
                  ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                  : o("WAWebModalManager").ModalManager;
              n.open(
                Q.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                  messaging: o("WAWebGuidePopup.react").Messaging
                    .SCREEN_SHARE_FAIL,
                  type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
                  featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                    .VOIP,
                  onConfirm: function () {
                    return n.close();
                  },
                }),
              );
            }
            return null;
          }
          return null;
        });
      } catch (e) {
        if (e instanceof o("WAWebMiscErrors").GetUserMedia.NotAllowedError) {
          o("WAWebCoreActionsODS").logCallScreenShareDenied();
          var m = Date.now() - s;
          if (m < ie) {
            var p =
              r != null
                ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                : o("WAWebModalManager").ModalManager;
            p.open(
              Q.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                messaging: o("WAWebGuidePopup.react").Messaging
                  .SCREEN_SHARE_FAIL,
                type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
                onConfirm: function () {
                  return p.close();
                },
              }),
            );
          }
          return null;
        }
        return null;
      }
    }
    ((l.getBrowserAudioProcessingStatus = oe),
      (l.queryPermissionStatus = Se),
      (l.checkVoipDevicePermissions = Le),
      (l.acquireVoipMediaStream = De),
      (l.earlyAcquireMic = Pe),
      (l.consumeEarlyAcquiredMicStream = Ne),
      (l.cleanupEarlyAcquiredMic = Me),
      (l.getAvailableVideoDevices = Ue),
      (l.getIsValidVideoDevice = He));
  },
  98,
);
