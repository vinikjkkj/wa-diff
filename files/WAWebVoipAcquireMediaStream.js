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
    "WAWebGetUserMediaErrors",
    "WAWebGuidePopup.react",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebODS",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipBrowserAudioStatus",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipCameraTrackConstraints",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipMediaPermissionChecks",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipScreenSharePickerState",
    "WAWebVoipStackInterface",
    "WAWebVoipVideoDeviceEnumerationService",
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
      G = H || (H = o("react")),
      z = n("$InternalEnum").Mirrored(["None", "Ideal", "Exact"]),
      j = null;
    function K() {
      return j;
    }
    var Q = 1e3,
      X = 3e4,
      Y = null;
    function J(e) {
      return Y !== e;
    }
    function Z(e) {
      Y === e && (Y = null);
    }
    function ee(e) {
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
    function te(e, t) {
      var n = ee(e);
      return n == null
        ? !1
        : (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] camera permission retry stopped at ",
                ": ",
                "",
              ])),
            t,
            n,
          ),
          Z(e),
          !0);
    }
    function ne() {
      var e,
        t = r("WAWebCallCollection").activeCall;
      return {
        isCallLinkPreview:
          (t == null ? void 0 : t.isInCallLinkPreview()) === !0,
        scheduledCallId: (e = t == null ? void 0 : t.id) != null ? e : null,
      };
    }
    async function re(e) {
      if (!te(e, "unmute start")) {
        var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
        if (
          !te(e, "after stack load") &&
          (t == null ? void 0 : t.type) === "web"
        ) {
          var n = await t.setCallVideoMute(!1);
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] camera permission retry setCallVideoMute(false) status: ",
                "",
              ])),
            n,
          );
        }
      }
    }
    async function oe(e) {
      if (!J(e) && !te(e, "before permission query")) {
        var t = await o("WAWebVoipMediaPermissionChecks").queryPermissionStatus(
            !0,
          ),
          n = t.cameraPermission;
        if (!J(e) && !te(e, "after permission query")) {
          if (n === "granted") {
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireCameraStream] camera permission granted after timeout; retrying video capture",
                ])),
            );
            try {
              await re(e);
            } finally {
              Z(e);
            }
            return;
          }
          var r = Date.now() - e.retryStartedAt;
          if (n === "denied" || (!e.isCallLinkPreviewRetry && r >= X)) {
            (Z(e),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] camera permission retry stopped: permission=",
                    ", elapsed=",
                    "ms",
                  ])),
                n,
                r,
              ));
            return;
          }
          ae(e);
        }
      }
    }
    function ae(e) {
      self.setTimeout(function () {
        J(e) ||
          oe(e).catch(function (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] camera permission retry poll failed: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip-camera-retry-poll-fail");
          });
      }, Q);
    }
    function ie(e) {
      var t;
      if (!(!o("WAWebUA").UA.isSafari && !e.isCallLinkPreview)) {
        var n = {
            isCallLinkPreviewRetry: e.isCallLinkPreview,
            retryStartedAt: Date.now(),
            scheduledCallId: e.scheduledCallId,
          },
          r = ee(n);
        if (r != null) {
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] camera permission retry not scheduled: ",
                "",
              ])),
            r,
          );
          return;
        }
        ((Y = n),
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] camera permission prompt timed out; waiting for grant to retry (callId=",
                ", callLinkPreview=",
                ", safari=",
                ")",
              ])),
            (t = n.scheduledCallId) != null ? t : "none",
            n.isCallLinkPreviewRetry,
            String(o("WAWebUA").UA.isSafari),
          ),
          ae(n));
      }
    }
    async function le(t) {
      return !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia
        ? (o("WALogger").ERROR(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
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
              return me(r);
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "camera"
            ) {
              var o = t.type,
                a = babelHelpers.objectWithoutPropertiesLoose(t, s);
              return ye({
                selectedDeviceId: a.selectedDeviceId,
                params: a.params,
                targetWindow: a.targetWindow,
                isAVUpgrade: a.isAVUpgrade,
                facingMode: a.facingMode,
              });
            }
            if (
              ((typeof t == "object" && t !== null) ||
                typeof t == "function") &&
              t.type === "desktop"
            ) {
              var i = t.type,
                l = babelHelpers.objectWithoutPropertiesLoose(t, u);
              return we({ params: l.params, targetWindow: l.targetWindow });
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                t,
            );
          })(t);
    }
    var se = null;
    function ue() {
      var e;
      if (se == null) {
        var t = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [EarlyMicAcquire] Acquiring microphone in gesture (device=",
              ")",
            ])),
          (e = t == null ? void 0 : t.slice(0, 8)) != null ? e : "default",
        );
        var n = (se = le({
          type: "microphone",
          selectedDeviceId: t != null ? t : void 0,
          suppressErrorPopup: !0,
        })
          .then(function (e) {
            return (
              e != null &&
                o("WALogger").LOG(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Microphone acquired successfully",
                    ])),
                ),
              e
            );
          })
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Microphone acquire failed: ",
                    "",
                  ])),
                e,
              ),
              se === n && (se = null),
              null
            );
          }));
      }
    }
    function ce() {
      if (se != null) {
        var e = se;
        ((se = null),
          e
            .then(function (e) {
              e != null &&
                (o("WAWebMediaCapture").stop(e),
                o("WALogger").LOG(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Cleaned up unused early-acquired microphone stream",
                    ])),
                ));
            })
            .catch(function (e) {
              o("WALogger").WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Cleanup failed: ",
                    "",
                  ])),
                e,
              );
            }));
      }
    }
    var de = ["exact", "ideal", "none"];
    async function me(e) {
      var t,
        n = e.exactDeviceOnly,
        a = n === void 0 ? !1 : n,
        i = e.keepExistingModal,
        l = i === void 0 ? !1 : i,
        s = e.onError,
        u =
          s === void 0
            ? function () {
                return r("WAWebODS").incr("web.call.media.mic_error");
              }
            : s,
        c = e.params,
        d = e.selectedDeviceId,
        m = e.suppressErrorPopup,
        p = e.targetWindow;
      o("WALogger").LOG(
        R ||
          (R = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV:acquireMicrophoneStream] deviceId=",
            ", hasParams=",
            "",
          ])),
        (t = d == null ? void 0 : d.slice(0, 8)) != null ? t : "null",
        String(c != null),
      );
      var _ =
          p != null
            ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
            : o("WAWebModalManager").ModalManager,
        f = pe(_, l),
        g = o("WAWebVoipMediaPermissionChecks").hasPermissionAlreadyBeenChecked(
          !1,
        ),
        h = await o("WAWebMediaCapture").start({
          type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .MICROPHONE,
          featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
          timeoutLimit: g ? 1 / 0 : void 0,
          timeoutCallback: a ? r("WAWebNoop") : void 0,
          targetWindow: p,
          mediaConstraints: c
            ? de.slice(0, a ? 1 : 3).map(function (e) {
                return ge(e === "none" ? null : d, e, c);
              })
            : void 0,
        }),
        y = h.asyncStream,
        C = h.disposeStream,
        b = null;
      if (!g && !a)
        try {
          var v,
            S,
            E = await ((v = navigator.permissions) == null
              ? void 0
              : v.query({ name: "microphone" }));
          b = (S = E == null ? void 0 : E.state) != null ? S : null;
        } catch (e) {}
      var k = o("WAWebVoipMediaPermissionChecks").getActiveCallMicTimeoutMs(b),
        I =
          k != null
            ? o(
                "WAWebVoipMediaPermissionChecks",
              ).raceStreamWithActiveCallTimeout(
                y,
                C,
                k,
                "acquireMicrophoneStream",
              )
            : y;
      return I.then(function (e) {
        if (e != null && !a)
          try {
            fe(e, (c == null ? void 0 : c.autoGainControl) !== !1);
          } catch (e) {
            o("WALogger").LOG(
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
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
            o("WAWebGetUserMediaErrors").NotAllowedError,
            function (e) {
              (u(e),
                m !== !0 &&
                  f(
                    G.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                      messaging: o(
                        "WAWebVoipMediaPermissionChecks",
                      ).shouldShowSystemSettingsGuide(e)
                        ? o("WAWebGuidePopup.react").Messaging
                            .MIC_BLOCKED_BY_SYSTEM
                        : o("WAWebGuidePopup.react").Messaging.MIC_FAIL,
                      type: o("WAWebGuidePopup.react").GuidePopupType
                        .GUIDE_UNBLOCK,
                      featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                        .VOIP,
                      hideReloadHint: o(
                        "WAWebVoipDeviceAccessRecoveryGating",
                      ).canAllowBlockedDeviceDuringCall(),
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
              o("WAWebGetUserMediaErrors").NotReadableError,
              o("WAWebGetUserMediaErrors").SourceUnavailableError,
            ],
            function (e) {
              if ((u(e), m !== !0)) {
                var t;
                f(
                  G.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
                    messaging: t.Messaging.MIC_UNAVAILABLE,
                    type: t.GuidePopupType.GUIDE_NONE,
                    featureSurface: t.FeatureSurface.VOIP,
                    onConfirm: function () {
                      return _.close();
                    },
                  }),
                );
              }
            },
          ),
        )
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebGetUserMediaErrors").GetUserMediaError,
            function (e) {
              if ((u(e), m !== !0)) {
                var t;
                f(
                  G.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
                    messaging: t.Messaging.MIC_MISSING,
                    type: t.GuidePopupType.GUIDE_NONE,
                    featureSurface: t.FeatureSurface.VOIP,
                    onConfirm: function () {
                      return _.close();
                    },
                  }),
                );
              }
            },
          ),
        );
    }
    function pe(e, t) {
      return t
        ? function (t) {
            !_e(e) &&
              !_e(o("WAWebVoipPopoutModalManager").VoipPopoutModalManager) &&
              e.open(t);
          }
        : function (t) {
            return e.open(t);
          };
    }
    function _e(e) {
      var t = !1;
      return (
        e.exists(function (e) {
          t = t || e;
        }),
        t
      );
    }
    function fe(e, t) {
      var n = o(
          "WAGetMediaDevicesSupportedConstraints",
        ).getMediaDevicesSupportedConstraints(),
        r = {
          echoCancellation: (n == null ? void 0 : n.echoCancellation) === !0,
          noiseSuppression: (n == null ? void 0 : n.noiseSuppression) === !0,
          autoGainControl: (n == null ? void 0 : n.autoGainControl) === !0,
        },
        a = e.getAudioTracks()[0];
      if (a != null) {
        var i = a.getSettings(),
          l = new Map(Object.entries(i)),
          s = {
            echoCancellation: i.echoCancellation === !0,
            noiseSuppression: l.get("noiseSuppression") === !0,
            autoGainControl: l.get("autoGainControl") === !0,
          };
        ((j = { supported: r, applied: s }),
          o("WAWebVoipBrowserAudioStatus").setBrowserAudioProcessingApplied(
            s,
            t,
          ),
          o("WALogger").LOG(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:detectBrowserAudioProcessing] supported: EC=",
                ", NS=",
                ", AGC=",
                " | applied: EC=",
                ", NS=",
                ", AGC=",
                "",
              ])),
            String(r.echoCancellation),
            String(r.noiseSuppression),
            String(r.autoGainControl),
            String(s.echoCancellation),
            String(s.noiseSuppression),
            String(s.autoGainControl),
          ));
      } else
        ((j = {
          supported: r,
          applied: {
            echoCancellation: !1,
            noiseSuppression: !1,
            autoGainControl: !1,
          },
        }),
          o("WALogger").LOG(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:detectBrowserAudioProcessing] no audio track found in stream",
              ])),
          ));
    }
    function ge(e, t, n) {
      var r;
      t === void 0 && (t = "exact");
      var a = {
        video: !1,
        audio: {
          sampleRate: n.sampleRate,
          channelCount: n.channels,
          echoCancellation: !0,
          noiseSuppression: !0,
          autoGainControl: n.autoGainControl !== !1,
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
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [MicDeviceSelector] getVoipMicrophoneMediaConstraints: deviceId=",
              ", constraintType=",
              ", sampleRate=",
              ", channels=",
              ", autoGainControl=",
              "",
            ])),
          (r = e == null ? void 0 : e.slice(0, 8)) != null ? r : "null",
          t,
          n.sampleRate,
          n.channels,
          String(n.autoGainControl !== !1),
        ),
        a
      );
    }
    async function he(e) {
      var t = e.facingMode,
        n = e.params,
        a = e.selectedDeviceId,
        i = e.targetWindow;
      if (i != null && (o("WAWebUA").UA.isFirefox || o("WAWebUA").UA.isSafari))
        return (o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera(), null);
      var l = await o("WAWebVoipCameraPrewarm").consumePrewarmedStream();
      if (l == null) return null;
      var s = l.getVideoTracks()[0],
        u = s == null ? void 0 : s.getSettings(),
        c = u == null ? void 0 : u.deviceId;
      if (
        t != null &&
        !r("isStringNullOrEmpty")(u == null ? void 0 : u.facingMode) &&
        (u == null ? void 0 : u.facingMode) !== t
      ) {
        var d;
        return (
          o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [CameraPrewarm] pre-warmed stream facing mismatch: requested=",
                ", actual=",
                ". Discarding pre-warmed stream.",
              ])),
            t,
            (d = u == null ? void 0 : u.facingMode) != null ? d : "unknown",
          ),
          l.getTracks().forEach(function (e) {
            return e.stop();
          }),
          null
        );
      }
      var m = !r("isStringNullOrEmpty")(a) && c != null && c !== "" && c !== a;
      return m
        ? (o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [CameraPrewarm] pre-warmed stream device mismatch: requested=",
                ", actual=",
                ". Discarding pre-warmed stream.",
              ])),
            a,
            c != null ? c : "unknown",
          ),
          l.getTracks().forEach(function (e) {
            return e.stop();
          }),
          null)
        : (n != null &&
            o("WAWebVoipCameraPrewarm").scheduleResolutionSwitch(l, n),
          l);
    }
    async function ye(e) {
      var t,
        n = e.facingMode,
        r = e.isAVUpgrade,
        a = e.params,
        i = e.selectedDeviceId,
        l = e.targetWindow;
      if (o("WAWebVoipMediaPermissionChecks").isVirtualVideoCaptureEnabled())
        return null;
      var s = await o(
        "WAWebVoipMediaPermissionChecks",
      ).queryCameraPermissionStrict();
      if (s === "denied") {
        o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
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
      var c = await he({
        selectedDeviceId: i,
        params: a,
        targetWindow: l,
        facingMode: n,
      });
      if (c != null) return c;
      var d =
          r === !0
            ? o("WAWebGuidePopup.react").FeatureSurface.VOIP_VIDEO_UPGRADE
            : o("WAWebGuidePopup.react").FeatureSurface.VOIP,
        m =
          l != null
            ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
            : o("WAWebModalManager").ModalManager,
        p = ne(),
        _ = Date.now();
      o("WALogger").LOG(
        $ ||
          ($ = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV:acquireCameraStream] requesting camera: deviceId=",
            ", targetWindow=",
            ", isAVUpgrade=",
            "",
          ])),
        (t = i == null ? void 0 : i.slice(0, 8)) != null ? t : "none",
        String(l != null),
        String(r != null ? r : !1),
      );
      var f = await o("WAWebMediaCapture").start({
          type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .CAMERA,
          featureSurface: d,
          timeoutLimit: o(
            "WAWebVoipMediaPermissionChecks",
          ).hasPermissionAlreadyBeenChecked(!0)
            ? Number.POSITIVE_INFINITY
            : void 0,
          targetWindow: l,
          mediaConstraints: Re({
            facingMode: n,
            params: a,
            selectedDeviceId: i,
          }),
        }),
        g = f.asyncStream,
        h = f.disposeStream,
        y = o("WAWebVoipMediaPermissionChecks").getActiveCallCameraTimeoutMs(
          s,
          p,
        ),
        C =
          y != null
            ? o(
                "WAWebVoipMediaPermissionChecks",
              ).raceStreamWithActiveCallTimeout(
                g,
                h,
                y,
                "acquireCameraStream",
                function () {
                  s === "prompt" && ie(p);
                },
              )
            : g;
      return Ce(C, {
        facingMode: n,
        featureSurface: d,
        params: a,
        scheduledCallId: p.scheduledCallId,
        selectedDeviceId: i,
        targetWindow: l,
        timeoutMs: y,
      })
        .then(function (e) {
          var t = Date.now() - _;
          if (e != null) {
            var n,
              r,
              a,
              i,
              l = e.getVideoTracks()[0];
            o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
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
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireCameraStream] returned null stream after ",
                  "ms",
                ])),
              t,
            );
          return e;
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebGetUserMediaErrors").NotAllowedError,
            function (e) {
              o("WAWebCoreActionsODS").logCallMediaCameraError();
              var t = Date.now() - _;
              (o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] NotAllowedError after ",
                    "ms: ",
                    "",
                  ])),
                t,
                e.message,
              ),
                m.open(
                  G.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                    messaging: o(
                      "WAWebVoipMediaPermissionChecks",
                    ).shouldShowSystemSettingsGuide(e)
                      ? o("WAWebGuidePopup.react").Messaging
                          .CAMERA_BLOCKED_BY_SYSTEM
                      : o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL,
                    type: o("WAWebGuidePopup.react").GuidePopupType
                      .GUIDE_UNBLOCK,
                    featureSurface: d,
                    hideReloadHint: o(
                      "WAWebVoipDeviceAccessRecoveryGating",
                    ).canAllowBlockedDeviceDuringCall(),
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
              o("WAWebGetUserMediaErrors").NotReadableError,
              o("WAWebGetUserMediaErrors").SourceUnavailableError,
            ],
            function (e) {
              o("WAWebCoreActionsODS").logCallMediaCameraError();
              var t = Date.now() - _;
              (o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] NotReadableError after ",
                    "ms: ",
                    "",
                  ])),
                t,
                e,
              ),
                m.open(
                  G.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                    messaging: o("WAWebGuidePopup.react").Messaging
                      .CAMERA_UNAVAILABLE,
                    type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
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
            o("WAWebGetUserMediaErrors").GetUserMediaError,
            function (e) {
              o("WAWebCoreActionsODS").logCallMediaCameraError();
              var t = Date.now() - _;
              (o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] GetUserMediaError after ",
                    "ms: ",
                    "",
                  ])),
                t,
                e,
              ),
                m.open(
                  G.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
    function Ce(e, t) {
      var n = t.timeoutMs,
        r = n != null ? Date.now() + n : null;
      return e.catch(function (e) {
        return be(
          e,
          babelHelpers.extends({}, t, {
            timeoutMs: r != null ? Math.max(0, r - Date.now()) : null,
          }),
        );
      });
    }
    async function be(e, t) {
      var n,
        a = t.facingMode,
        i = t.featureSurface,
        l = t.params,
        s = t.scheduledCallId,
        u = t.selectedDeviceId,
        c = t.targetWindow,
        d = t.timeoutMs;
      if (
        c == null ||
        l == null ||
        a != null ||
        r("isStringNullOrEmpty")(u) ||
        !o(
          "WAWebVoipMediaPermissionChecks",
        ).isSelectedVideoDeviceUnavailableError(e)
      )
        throw e;
      var m = await Se(u, c);
      if (
        Pe(c) ||
        ((n = r("WAWebCallCollection").activeCall) == null ? void 0 : n.id) !==
          s
      )
        throw e;
      var p = m == null ? "default camera" : "same-name camera";
      o("WALogger").LOG(
        F ||
          (F = babelHelpers.taggedTemplateLiteralLoose([
            "voip: [AV:acquireCameraStream] call window has no camera ",
            ", retrying with its ",
            "",
          ])),
        u.slice(0, 8),
        p,
      );
      var _ = await ve({
        deviceId: m,
        featureSurface: i,
        params: l,
        targetWindow: c,
        timeoutMs: d,
      });
      return (
        o("WALogger").LOG(
          O ||
            (O = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [AV:acquireCameraStream] call window camera retry with its ",
              " done, hasStream=",
              "",
            ])),
          p,
          String(_ != null),
        ),
        _
      );
    }
    function ve(e) {
      var t = e.deviceId,
        n = e.featureSurface,
        r = e.params,
        a = e.targetWindow,
        i = e.timeoutMs,
        l = o("WAWebMediaCapture").start({
          type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .CAMERA,
          featureSurface: n,
          timeoutLimit: Number.POSITIVE_INFINITY,
          targetWindow: a,
          mediaConstraints: [
            Le({ device: { deviceId: t, constraintType: z.Exact }, params: r }),
          ],
        }),
        s = l.asyncStream,
        u = l.disposeStream;
      return i != null
        ? o("WAWebVoipMediaPermissionChecks").raceStreamWithActiveCallTimeout(
            s,
            u,
            i,
            "acquireCameraStream",
          )
        : s;
    }
    async function Se(e, t) {
      var n,
        a = (n = t.navigator) == null ? void 0 : n.mediaDevices;
      if (a == null) return null;
      try {
        var i,
          l,
          s = await Promise.all([
            o("WAWebAudioDeviceManager").coalescedEnumerateDevices(
              navigator.mediaDevices,
            ),
            o("WAWebAudioDeviceManager").coalescedEnumerateDevices(a),
          ]),
          u = s[0],
          c = s[1],
          d =
            (i = u.find(function (t) {
              return t.kind === "videoinput" && t.deviceId === e;
            })) == null
              ? void 0
              : i.label;
        if (r("isStringNullOrEmpty")(d)) return null;
        var m =
          (l = c.find(function (e) {
            return e.kind === "videoinput" && e.label === d;
          })) == null
            ? void 0
            : l.deviceId;
        return r("isStringNullOrEmpty")(m) ? null : m;
      } catch (e) {
        return (
          o("WALogger").WARN(
            B ||
              (B = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] call window camera lookup failed: ",
                "",
              ])),
            String(e),
          ),
          null
        );
      }
    }
    function Re(e) {
      var t = e.facingMode,
        n = e.params,
        r = e.selectedDeviceId;
      if (n != null)
        return t != null
          ? [
              Le({ facing: { mode: t, constraintType: z.Ideal }, params: n }),
              Le({ params: n }),
            ]
          : [
              Le({
                device: { deviceId: r, constraintType: z.Exact },
                params: n,
              }),
              Le({
                device: { deviceId: r, constraintType: z.Ideal },
                params: n,
              }),
              Le({ params: n }),
            ];
    }
    function Le(e) {
      var t,
        n = e.device,
        a = e.facing,
        i = e.params,
        l = r("WAWebVoipCameraTrackConstraints")(i);
      if (
        (o("WALogger").LOG(
          W ||
            (W = babelHelpers.taggedTemplateLiteralLoose([
              `voip: [CameraDeviceSelector] getVoipCameraMediaConstraints:
    deviceId=`,
              ", facing=",
              ", constraintType=",
              ", params=",
              "",
            ])),
          n == null ? void 0 : n.deviceId,
          a == null ? void 0 : a.mode,
          (t = n == null ? void 0 : n.constraintType) != null
            ? t
            : a == null
              ? void 0
              : a.constraintType,
          i,
        ),
        n != null && !r("isStringNullOrEmpty")(n.deviceId))
      ) {
        var s = n.deviceId;
        e: {
          if (n.constraintType === z.None) break e;
          if (n.constraintType === z.Exact) {
            l.deviceId = { exact: s };
            break e;
          }
          if (n.constraintType === z.Ideal) {
            l.deviceId = { ideal: s };
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              n.constraintType,
          );
        }
      } else if (a != null)
        e: {
          if (a.constraintType === z.None) break e;
          if (a.constraintType === z.Exact) {
            l.facingMode = { exact: a.mode };
            break e;
          }
          if (a.constraintType === z.Ideal) {
            l.facingMode = { ideal: a.mode };
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              a.constraintType,
          );
        }
      return { video: l, audio: !1 };
    }
    function Ee(e) {
      return {
        video: {
          width: { ideal: e.width },
          height: { ideal: e.height },
          frameRate: { ideal: e.maxFps },
        },
        audio: !1,
      };
    }
    async function ke(e) {
      var t = e === void 0 ? {} : e,
        n = t.isInActiveCall,
        r = t.skipPermissionRequest,
        a = t.targetWindow;
      return o("WAWebVoipVideoDeviceEnumerationService").enumerateVideoDevices({
        isInActiveCall: n,
        skipPermissionRequest: r,
        targetWindow: a,
      });
    }
    async function Ie(e) {
      var t = e.deviceId,
        n = e.isInActiveCall,
        r = e.skipPermissionRequest,
        a = e.targetWindow,
        i = await ke({
          isInActiveCall: n,
          skipPermissionRequest: r,
          targetWindow: a,
        });
      return i.some(function (e) {
        return e.deviceId === t;
      })
        ? !0
        : (o("WALogger").ERROR(
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
                "voip: getIsValidVideoDevice: device not found in available devices: ",
                "",
              ])),
            t,
          ),
          !1);
    }
    var Te = 1e3,
      De = 25e3,
      xe = 250,
      $e = 500;
    function Pe(e) {
      var t = e;
      return t.closed === !0;
    }
    function Ne(e, t) {
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
                Pe(e) && t("popout closed");
              } catch (e) {
                t("popout inaccessible");
              }
            }, xe)));
        }, $e)),
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
    function Me(e, t, n) {
      var a = new AbortController(),
        i = !1,
        l = function (n) {
          i ||
            ((i = !0),
            o("WALogger").LOG(
              U ||
                (U = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireDesktopStream] aborted: ",
                  "",
                ])),
              n,
            ),
            t(),
            a.abort());
        },
        s = self.setTimeout(function () {
          return l("getDisplayMedia timed out after " + De + "ms");
        }, De),
        u = n != null ? Ne(n, l) : null;
      return (
        e.catch(r("WAWebNoop")),
        r("WAPromiseRaceAbort")(e, a.signal)
          .catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull))
          .finally(function () {
            (self.clearTimeout(s), u != null && u());
          })
      );
    }
    async function we(e) {
      var t,
        n = e.params,
        r = e.targetWindow,
        a = n ? Ee(n) : { video: !0 },
        i =
          ((t = o("WAWebABProps").getABPropConfigValue(
            "calling_audio_share_version",
          )) != null
            ? t
            : 1) > 0,
        l = {
          video: a.video,
          audio: i,
          preferCurrentTab: !1,
          selfBrowserSurface: "exclude",
          systemAudio: i ? "include" : "exclude",
          surfaceSwitching: "include",
          monitorTypeSurfaces: "include",
        },
        s = Date.now(),
        u = o("WAWebVoipScreenSharePickerState").beginScreenSharePicker();
      try {
        var c = await o("WAWebMediaCapture").start({
            type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .DESKTOP,
            featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            mediaConstraints: [l],
            targetWindow: r,
          }),
          d = c.asyncStream,
          m = c.disposeStream,
          p = await Me(d, m, r).catch(function (e) {
            if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
              o("WAWebCoreActionsODS").logCallScreenShareDenied();
              var t = Date.now() - s;
              if (t < Te) {
                o("WALogger").LOG(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
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
                  G.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                    messaging: o("WAWebGuidePopup.react").Messaging
                      .SCREEN_SHARE_FAIL,
                    type: o("WAWebGuidePopup.react").GuidePopupType
                      .GUIDE_UNBLOCK,
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
        return p;
      } catch (e) {
        if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
          o("WAWebCoreActionsODS").logCallScreenShareDenied();
          var _ = Date.now() - s;
          if (_ < Te) {
            var f =
              r != null
                ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                : o("WAWebModalManager").ModalManager;
            f.open(
              G.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                messaging: o("WAWebGuidePopup.react").Messaging
                  .SCREEN_SHARE_FAIL,
                type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
                onConfirm: function () {
                  return f.close();
                },
              }),
            );
          }
          return null;
        }
        return null;
      } finally {
        u();
      }
    }
    ((l.checkVoipCallJoinPermissions = o(
      "WAWebVoipMediaPermissionChecks",
    ).checkVoipCallJoinPermissions),
      (l.checkVoipDevicePermissions = o(
        "WAWebVoipMediaPermissionChecks",
      ).checkVoipDevicePermissions),
      (l.mayPromptForMediaPermission = o(
        "WAWebVoipMediaPermissionChecks",
      ).mayPromptForMediaPermission),
      (l.queryCameraPermissionStrict = o(
        "WAWebVoipMediaPermissionChecks",
      ).queryCameraPermissionStrict),
      (l.queryPermissionStatus = o(
        "WAWebVoipMediaPermissionChecks",
      ).queryPermissionStatus),
      (l.getBrowserAudioProcessingStatus = K),
      (l.acquireVoipMediaStream = le),
      (l.earlyAcquireMic = ue),
      (l.cleanupEarlyAcquiredMic = ce),
      (l.getAvailableVideoDevices = ke),
      (l.getIsValidVideoDevice = Ie));
  },
  98,
);
