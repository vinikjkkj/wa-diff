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
    "WAWebGetUserMediaErrors",
    "WAWebGuidePopup.react",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaPermissionsUtils",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebNullFunc",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipActivityTracker",
    "WAWebVoipBrowserAudioStatus",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipCameraTrackConstraints",
    "WAWebVoipGatingUtils",
    "WAWebVoipPermissionCheckCaptureOwner",
    "WAWebVoipPopoutModalManager",
    "WAWebVoipScreenSharePickerState",
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
      X,
      Y,
      J,
      Z,
      ee,
      te,
      ne,
      re,
      oe,
      ae,
      ie,
      le,
      se,
      ue = se || (se = o("react"));
    function ce() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    var de = 200,
      me = new WeakMap();
    function pe(e) {
      var t = me.get(e);
      if (t != null) return t;
      var r = n("asyncToGeneratorRuntime")
        .asyncToGenerator(function* () {
          var t = Date.now(),
            n = yield Lt(e),
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
            me.get(e) === r && me.delete(e);
          }, de);
        });
      return (me.set(e, r), r);
    }
    var _e = n("$InternalEnum").Mirrored(["None", "Ideal", "Exact"]),
      fe = new Set([
        "ConstraintNotSatisfiedError",
        "OverconstrainedError",
        "NotFoundError",
      ]),
      ge = null;
    function he() {
      return ge;
    }
    var ye = { microphone: null, camera: null };
    function Ce() {
      ((ye.microphone = null), (ye.camera = null));
    }
    var be = 1e3,
      ve = 1e4,
      Se = 3e4,
      Re = 1e4,
      Le = 1e3,
      Ee = 3e4,
      ke = null;
    function Ie(e) {
      return ke !== e;
    }
    function Te(e) {
      ke === e && (ke = null);
    }
    function De(e) {
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
    function xe(e, t) {
      var n = De(e);
      return n == null
        ? !1
        : (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] camera permission retry stopped at ",
                ": ",
                "",
              ])),
            t,
            n,
          ),
          Te(e),
          !0);
    }
    function $e(e) {
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
      })(babelHelpers.extends({ checkVideo: e }, ye));
    }
    function Pe() {
      var e,
        t = r("WAWebCallCollection").activeCall;
      return {
        isCallLinkPreview:
          (t == null ? void 0 : t.isInCallLinkPreview()) === !0,
        scheduledCallId: (e = t == null ? void 0 : t.id) != null ? e : null,
      };
    }
    function Ne(e, t) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari
        ? ve
        : t.isCallLinkPreview
          ? Se
          : null;
    }
    function Me(e) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari ? Re : null;
    }
    function we(e) {
      return Ae.apply(this, arguments);
    }
    function Ae() {
      return (
        (Ae = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!xe(e, "unmute start")) {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (
              !xe(e, "after stack load") &&
              (t == null ? void 0 : t.type) === "web"
            ) {
              var n = yield t.setCallVideoMute(!1);
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] camera permission retry setCallVideoMute(false) status: ",
                    "",
                  ])),
                n,
              );
            }
          }
        })),
        Ae.apply(this, arguments)
      );
    }
    function Fe(e) {
      return Oe.apply(this, arguments);
    }
    function Oe() {
      return (
        (Oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!Ie(e) && !xe(e, "before permission query")) {
            var t = yield He(!0),
              n = t.cameraPermission;
            if (!Ie(e) && !xe(e, "after permission query")) {
              if (n === "granted") {
                o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:acquireCameraStream] camera permission granted after timeout; retrying video capture",
                    ])),
                );
                try {
                  yield we(e);
                } finally {
                  Te(e);
                }
                return;
              }
              var r = Date.now() - e.retryStartedAt;
              if (n === "denied" || (!e.isCallLinkPreviewRetry && r >= Ee)) {
                (Te(e),
                  o("WALogger").LOG(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] camera permission retry stopped: permission=",
                        ", elapsed=",
                        "ms",
                      ])),
                    n,
                    r,
                  ));
                return;
              }
              Be(e);
            }
          }
        })),
        Oe.apply(this, arguments)
      );
    }
    function Be(e) {
      self.setTimeout(function () {
        Ie(e) ||
          Fe(e).catch(function (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] camera permission retry poll failed: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("voip-camera-retry-poll-fail");
          });
      }, Le);
    }
    function We(e) {
      var t;
      if (!(!o("WAWebUA").UA.isSafari && !e.isCallLinkPreview)) {
        var n = {
            isCallLinkPreviewRetry: e.isCallLinkPreview,
            retryStartedAt: Date.now(),
            scheduledCallId: e.scheduledCallId,
          },
          r = De(n);
        if (r != null) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] camera permission retry not scheduled: ",
                "",
              ])),
            r,
          );
          return;
        }
        ((ke = n),
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] camera permission prompt timed out; waiting for grant to retry (callId=",
                ", callLinkPreview=",
                ", safari=",
                ")",
              ])),
            (t = n.scheduledCallId) != null ? t : "none",
            n.isCallLinkPreviewRetry,
            String(o("WAWebUA").UA.isSafari),
          ),
          Be(n));
      }
    }
    function qe(e, t, a, i, l) {
      var s = null,
        u = !1;
      return (
        e.catch(r("WAWebNoop")),
        (le || (le = n("Promise")))
          .race([
            e,
            new le(function (e) {
              s = self.setTimeout(function () {
                ((u = !0),
                  (s = null),
                  o("WALogger").LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:",
                        "] getUserMedia timed out after ",
                        "ms",
                      ])),
                    i,
                    a,
                  ),
                  l == null || l(),
                  t(),
                  e(null));
              }, a);
            }),
          ])
          .finally(function () {
            !u && s != null && self.clearTimeout(s);
          })
      );
    }
    function Ue() {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (navigator === void 0 || !navigator.permissions) return null;
          try {
            var e = yield navigator.permissions.query({ name: "camera" });
            return e.state;
          } catch (e) {
            return null;
          }
        })),
        Ve.apply(this, arguments)
      );
    }
    function He(e) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Ge.apply(this, arguments)
      );
    }
    function ze(e, t) {
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
    function je(e, t, n) {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (
              r("WAWebEnvironment").isWindows &&
              !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
            )
              return ((ye.microphone = !0), (ye.camera = !0), !0);
            var a = e && !ce(),
              i = o(
                "WAWebVoipPermissionCheckCaptureOwner",
              ).getPermissionCheckOwner(t),
              l = yield He(e);
            if (Qe(t, n)) return !1;
            try {
              o("WAWebVoipActivityTracker").trackUiActivity(
                a
                  ? o("WAWebVoipActivityTracker").VoipUiActivity
                      .PERMISSION_REQUEST_CAMERA_AND_MIC_START
                  : o("WAWebVoipActivityTracker").VoipUiActivity
                      .PERMISSION_REQUEST_MIC_START,
              );
              var s = a
                  ? o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                      .CAMERA_AND_MICROPHONE
                  : o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                      .MICROPHONE,
                u = yield Ze(s, a, i, n);
              return Ye(u, a, t, n);
            } catch (e) {
              return (Xe(t, e, n) || Je(e, a, l), !1);
            } finally {
              o("WAWebVoipActivityTracker").trackUiActivity(
                a
                  ? o("WAWebVoipActivityTracker").VoipUiActivity
                      .PERMISSION_REQUEST_CAMERA_AND_MIC_END
                  : o("WAWebVoipActivityTracker").VoipUiActivity
                      .PERMISSION_REQUEST_MIC_END,
              );
            }
          },
        )),
        Ke.apply(this, arguments)
      );
    }
    function Qe(e, t) {
      return (t == null ? void 0 : t.aborted) === !0
        ? (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] permission check was cancelled before capture",
              ])),
          ),
          !0)
        : o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(e)
          ? (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:checkVoipDevicePermissions] aborting permission check because the originating call ended",
                ])),
            ),
            !0)
          : !1;
    }
    function Xe(e, t, n) {
      return (n == null ? void 0 : n.aborted) === !0
        ? (o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error because the permission check was cancelled: ",
                "",
              ])),
            t,
          ),
          !0)
        : o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(e)
          ? (o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error because the originating call ended: ",
                  "",
                ])),
              t,
            ),
            !0)
          : !1;
    }
    function Ye(e, t, n, r) {
      return e === "not_acquired" ||
        ((ye.microphone = !0),
        t && (ye.camera = !0),
        e === "released_after_acquire")
        ? !1
        : (r == null ? void 0 : r.aborted) === !0
          ? (o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:checkVoipDevicePermissions] permission capture was cancelled after acquisition",
                ])),
            ),
            !1)
          : o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(
                n,
              )
            ? (o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:checkVoipDevicePermissions] aborting permission check because the originating call ended during capture",
                  ])),
              ),
              !1)
            : !0;
    }
    function Je(e, t, n) {
      if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
        (o("WAWebCoreActionsODS").logCallPermissionDenied(),
          o("WAWebModalManager").ModalManager.open(
            ue.jsx(o("WAWebGuidePopup.react").GuidePopup, {
              messaging: ze(t, n),
              type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            }),
          ));
        return;
      }
      if (
        e instanceof o("WAWebGetUserMediaErrors").NotReadableError ||
        e instanceof o("WAWebGetUserMediaErrors").SourceUnavailableError
      ) {
        (o("WAWebCoreActionsODS").logCallPermissionDeviceError(),
          o("WAWebModalManager").ModalManager.open(
            ue.jsx(o("WAWebGuidePopup.react").GuidePopup, {
              messaging: ze(t, n),
              type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            }),
          ));
        return;
      }
      e instanceof o("WAWebGetUserMediaErrors").GetUserMediaError &&
        o("WAWebModalManager").ModalManager.open(
          ue.jsx(o("WAWebGuidePopup.react").GuidePopup, {
            messaging: t
              ? o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_MISSING
              : o("WAWebGuidePopup.react").Messaging.MIC_MISSING,
            type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
            featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
          }),
        );
    }
    function Ze(e, t, n, r) {
      return et.apply(this, arguments);
    }
    function et() {
      return (
        (et = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = o(
                "WAWebVoipPermissionCheckCaptureOwner",
              ).registerPermissionCheckCaptureForKeys(
                n.registryKeys,
                r("WAWebNoop"),
              ),
              l = $e(t) ? Number.POSITIVE_INFINITY : void 0,
              s = rt(t);
            try {
              try {
                return yield tt(e, l, n.registryKeys, s, a);
              } catch (t) {
                if (s == null || !ot(t)) throw t;
                return (a == null ? void 0 : a.aborted) === !0
                  ? (o("WALogger").LOG(
                      w ||
                        (w = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the permission check was cancelled",
                        ])),
                    ),
                    "not_acquired")
                  : i.wasReleased()
                    ? (o("WALogger").LOG(
                        A ||
                          (A = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the permission capture owner was released",
                          ])),
                      ),
                      "not_acquired")
                    : o(
                          "WAWebVoipPermissionCheckCaptureOwner",
                        ).didPermissionCheckCallEnd(n.call)
                      ? (o("WALogger").LOG(
                          F ||
                            (F = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the originating call ended",
                            ])),
                        ),
                        "not_acquired")
                      : (o("WALogger").LOG(
                          O ||
                            (O = babelHelpers.taggedTemplateLiteralLoose([
                              "voip: [AV:checkVoipDevicePermissions] selected camera unavailable, retrying permission check with default camera: ",
                              "",
                            ])),
                          t,
                        ),
                        yield tt(e, l, n.registryKeys, void 0, a));
              }
            } finally {
              i.release();
            }
          },
        )),
        et.apply(this, arguments)
      );
    }
    function tt(e, t, n, r, o) {
      return nt.apply(this, arguments);
    }
    function nt() {
      return (
        (nt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            var l = {
              type: e,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            };
            (t != null && (l.timeoutLimit = t),
              a != null && (l.mediaConstraints = a));
            var s = o("WAWebMediaCapture").start(l),
              u = s.asyncStream,
              c = s.disposeStream,
              d = o(
                "WAWebVoipPermissionCheckCaptureOwner",
              ).registerPermissionCheckCaptureForKeys(n, c);
            try {
              u.catch(r("WAWebNoop"));
              var m;
              try {
                m =
                  i == null
                    ? yield u
                    : yield r("WAPromiseRaceAbort")(u, i).catch(
                        o("WAAbortError").catchAbort(
                          o("WAWebNullFunc").returnNull,
                        ),
                      );
              } catch (e) {
                if ((i == null ? void 0 : i.aborted) === !0 || d.wasReleased())
                  return (
                    o("WALogger").LOG(
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error after cancellation or owner release: ",
                          "",
                        ])),
                      e,
                    ),
                    "not_acquired"
                  );
                throw e;
              }
              return m == null
                ? (i == null ? void 0 : i.aborted) === !0
                  ? (o("WALogger").LOG(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] permission capture was cancelled",
                        ])),
                    ),
                    "not_acquired")
                  : (o("WALogger").LOG(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] permission capture completed without a stream",
                        ])),
                    ),
                    "not_acquired")
                : d.wasReleased()
                  ? (o("WALogger").LOG(
                      U ||
                        (U = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] permission capture was released before completion",
                        ])),
                    ),
                    "released_after_acquire")
                  : "acquired";
            } finally {
              d.release();
            }
          },
        )),
        nt.apply(this, arguments)
      );
    }
    function rt(e) {
      if (!e) return null;
      var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
      return r("isStringNullOrEmpty")(t)
        ? null
        : [{ video: { deviceId: { exact: t } }, audio: !0 }];
    }
    function ot(e) {
      return e instanceof Error && fe.has(e.name);
    }
    function at(e) {
      return it.apply(this, arguments);
    }
    function it() {
      return (
        (it = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia
            ? (o("WALogger").ERROR(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
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
                  return dt(r);
                }
                if (
                  ((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                  t.type === "camera"
                ) {
                  var o = t.type,
                    a = babelHelpers.objectWithoutPropertiesLoose(t, s);
                  return ht({
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
                  return Mt({ params: l.params, targetWindow: l.targetWindow });
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })(t);
        })),
        it.apply(this, arguments)
      );
    }
    var lt = null;
    function st() {
      var e;
      if (lt == null) {
        var t = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [EarlyMicAcquire] Acquiring microphone in gesture (device=",
              ")",
            ])),
          (e = t == null ? void 0 : t.slice(0, 8)) != null ? e : "default",
        );
        var n = (lt = at({
          type: "microphone",
          selectedDeviceId: t != null ? t : void 0,
          suppressErrorPopup: !0,
        })
          .then(function (e) {
            return (
              e != null &&
                o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Microphone acquired successfully",
                    ])),
                ),
              e
            );
          })
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Microphone acquire failed: ",
                    "",
                  ])),
                e,
              ),
              lt === n && (lt = null),
              null
            );
          }));
      }
    }
    function ut() {
      if (lt != null) {
        var e = lt;
        ((lt = null),
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
    var ct = ["exact", "ideal", "none"];
    function dt(e) {
      return mt.apply(this, arguments);
    }
    function mt() {
      return (
        (mt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.exactDeviceOnly,
            a = n === void 0 ? !1 : n,
            i = e.onError,
            l =
              i === void 0 ? o("WAWebCoreActionsODS").logCallMediaMicError : i,
            s = e.params,
            u = e.selectedDeviceId,
            c = e.suppressErrorPopup,
            d = e.targetWindow;
          o("WALogger").LOG(
            H ||
              (H = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireMicrophoneStream] deviceId=",
                ", hasParams=",
                "",
              ])),
            (t = u == null ? void 0 : u.slice(0, 8)) != null ? t : "null",
            String(s != null),
          );
          var m =
              d != null
                ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                : o("WAWebModalManager").ModalManager,
            p = $e(!1),
            _ = yield o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
              timeoutLimit: p ? 1 / 0 : void 0,
              timeoutCallback: a ? r("WAWebNoop") : void 0,
              targetWindow: d,
              mediaConstraints: s
                ? ct.slice(0, a ? 1 : 3).map(function (e) {
                    return _t(e === "none" ? null : u, e, s);
                  })
                : void 0,
            }),
            f = _.asyncStream,
            g = _.disposeStream,
            h = null;
          if (!p && !a)
            try {
              var y,
                C,
                b = yield (y = navigator.permissions) == null
                  ? void 0
                  : y.query({ name: "microphone" });
              h = (C = b == null ? void 0 : b.state) != null ? C : null;
            } catch (e) {}
          var v = Me(h),
            S = v != null ? qe(f, g, v, "acquireMicrophoneStream") : f;
          return S.then(function (e) {
            if (e != null && !a)
              try {
                pt(e, (s == null ? void 0 : s.autoGainControl) !== !1);
              } catch (e) {
                o("WALogger").LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
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
                  if ((l(e), c !== !0)) {
                    var t;
                    m.open(
                      ue.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
                        messaging: t.Messaging.MIC_FAIL,
                        type: t.GuidePopupType.GUIDE_UNBLOCK,
                        featureSurface: t.FeatureSurface.VOIP,
                        onConfirm: function () {
                          return m.close();
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
                  o("WAWebGetUserMediaErrors").NotReadableError,
                  o("WAWebGetUserMediaErrors").SourceUnavailableError,
                ],
                function (e) {
                  if ((l(e), c !== !0)) {
                    var t;
                    m.open(
                      ue.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
                        messaging: t.Messaging.MIC_FAIL,
                        type: t.GuidePopupType.GUIDE_UNBLOCK,
                        featureSurface: t.FeatureSurface.VOIP,
                        onConfirm: function () {
                          return m.close();
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
                  if ((l(e), c !== !0)) {
                    var t;
                    m.open(
                      ue.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
                        messaging: t.Messaging.MIC_MISSING,
                        type: t.GuidePopupType.GUIDE_NONE,
                        featureSurface: t.FeatureSurface.VOIP,
                        onConfirm: function () {
                          return m.close();
                        },
                      }),
                    );
                  }
                },
              ),
            );
        })),
        mt.apply(this, arguments)
      );
    }
    function pt(e, t) {
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
        ((ge = { supported: r, applied: s }),
          o("WAWebVoipBrowserAudioStatus").setBrowserAudioProcessingApplied(
            s,
            t,
          ),
          o("WALogger").LOG(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
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
        ((ge = {
          supported: r,
          applied: {
            echoCancellation: !1,
            noiseSuppression: !1,
            autoGainControl: !1,
          },
        }),
          o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:detectBrowserAudioProcessing] no audio track found in stream",
              ])),
          ));
    }
    function _t(e, t, n) {
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
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
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
    function ft(e) {
      return gt.apply(this, arguments);
    }
    function gt() {
      return (
        (gt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.facingMode,
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
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
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
          var m =
            !r("isStringNullOrEmpty")(a) && c != null && c !== "" && c !== a;
          return m
            ? (o("WALogger").LOG(
                j ||
                  (j = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        gt.apply(this, arguments)
      );
    }
    function ht(e) {
      return yt.apply(this, arguments);
    }
    function yt() {
      return (
        (yt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.facingMode,
            r = e.isAVUpgrade,
            a = e.params,
            i = e.selectedDeviceId,
            l = e.targetWindow;
          if (ce()) return null;
          var s = yield Ue();
          if (s === "denied") {
            o("WALogger").LOG(
              K ||
                (K = babelHelpers.taggedTemplateLiteralLoose([
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
          var c = yield ft({
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
            p = Pe(),
            _ = Date.now();
          o("WALogger").LOG(
            Q ||
              (Q = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] requesting camera: deviceId=",
                ", targetWindow=",
                ", isAVUpgrade=",
                "",
              ])),
            (t = i == null ? void 0 : i.slice(0, 8)) != null ? t : "none",
            String(l != null),
            String(r != null ? r : !1),
          );
          var f = yield o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA,
              featureSurface: d,
              timeoutLimit: $e(!0) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: l,
              mediaConstraints: Ct({
                facingMode: n,
                params: a,
                selectedDeviceId: i,
              }),
            }),
            g = f.asyncStream,
            h = f.disposeStream,
            y = Ne(s, p),
            C =
              y != null
                ? qe(g, h, y, "acquireCameraStream", function () {
                    s === "prompt" && We(p);
                  })
                : g;
          return C.then(function (e) {
            var t = Date.now() - _;
            if (e != null) {
              var n,
                r,
                a,
                i,
                l = e.getVideoTracks()[0];
              o("WALogger").LOG(
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
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
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
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
                function () {
                  o("WAWebCoreActionsODS").logCallMediaCameraError();
                  var e = Date.now() - _;
                  (o("WALogger").LOG(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotAllowedError after ",
                        "ms",
                      ])),
                    e,
                  ),
                    m.open(
                      ue.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
                  o("WAWebGetUserMediaErrors").NotReadableError,
                  o("WAWebGetUserMediaErrors").SourceUnavailableError,
                ],
                function (e) {
                  o("WAWebCoreActionsODS").logCallMediaCameraError();
                  var t = Date.now() - _;
                  (o("WALogger").LOG(
                    Z ||
                      (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotReadableError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    m.open(
                      ue.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
                o("WAWebGetUserMediaErrors").GetUserMediaError,
                function (e) {
                  o("WAWebCoreActionsODS").logCallMediaCameraError();
                  var t = Date.now() - _;
                  (o("WALogger").LOG(
                    ee ||
                      (ee = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] GetUserMediaError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    m.open(
                      ue.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
        yt.apply(this, arguments)
      );
    }
    function Ct(e) {
      var t = e.facingMode,
        n = e.params,
        r = e.selectedDeviceId;
      if (n != null)
        return t != null
          ? [
              bt({ facing: { mode: t, constraintType: _e.Ideal }, params: n }),
              bt({ params: n }),
            ]
          : [
              bt({
                device: { deviceId: r, constraintType: _e.Exact },
                params: n,
              }),
              bt({
                device: { deviceId: r, constraintType: _e.Ideal },
                params: n,
              }),
              bt({ params: n }),
            ];
    }
    function bt(e) {
      var t,
        n = e.device,
        a = e.facing,
        i = e.params,
        l = r("WAWebVoipCameraTrackConstraints")(i);
      if (
        (o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [CameraDeviceSelector] getVoipCameraMediaConstraints:\n    deviceId=",
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
          if (n.constraintType === _e.None) break e;
          if (n.constraintType === _e.Exact) {
            l.deviceId = { exact: s };
            break e;
          }
          if (n.constraintType === _e.Ideal) {
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
          if (a.constraintType === _e.None) break e;
          if (a.constraintType === _e.Exact) {
            l.facingMode = { exact: a.mode };
            break e;
          }
          if (a.constraintType === _e.Ideal) {
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
    function vt(e) {
      return {
        video: {
          width: { ideal: e.width },
          height: { ideal: e.height },
          frameRate: { ideal: e.maxFps },
        },
        audio: !1,
      };
    }
    function St(e) {
      return Rt.apply(this, arguments);
    }
    function Rt() {
      return (
        (Rt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e === void 0 ? {} : e,
            n = t.isInActiveCall,
            r = t.skipPermissionRequest,
            a = t.targetWindow;
          try {
            var i,
              l,
              s = o("WAWebVoipGatingUtils").isPopoutReuseCaptureEnabled(),
              u =
                n === !0 &&
                !o("WAWebUA").UA.isFirefox &&
                !o("WAWebUA").UA.isSafari,
              c = u || (n === !0 && s),
              d = c
                ? navigator.mediaDevices
                : (i =
                      a == null || (l = a.navigator) == null
                        ? void 0
                        : l.mediaDevices) != null
                  ? i
                  : navigator.mediaDevices;
            if (!(d != null && d.enumerateDevices))
              return (
                o("WALogger").ERROR(
                  te ||
                    (te = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] mediaDevices API not supported",
                    ])),
                ),
                []
              );
            var m = r === !0 || (o("WAWebUA").UA.isSafari && n === !0),
              p = o("WAWebUA").UA.isFirefox && a != null;
            if (!(c || m)) {
              if (!ce()) {
                var _ = p
                    ? { granted: !1 }
                    : yield o(
                        "WAWebMediaPermissionsUtils",
                      ).checkMediaPermissionState(
                        "camera",
                        a == null ? void 0 : a.navigator,
                      ),
                  f = _.granted;
                if (!f)
                  try {
                    yield pe(d);
                  } catch (e) {
                    if (n !== !0) throw e;
                  }
              }
            }
            var g = yield o(
                "WAWebAudioDeviceManager",
              ).coalescedEnumerateDevices(d),
              h = g
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
                ne ||
                  (ne = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] loaded ",
                    "\n      video devices",
                  ])),
                h.length,
              ),
              h
            );
          } catch (e) {
            return (
              (!(e instanceof Error) || !e.name.includes("NotAllowed")) &&
                o("WALogger").ERROR(
                  re ||
                    (re = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] error loading devices: ",
                      "",
                    ])),
                  e,
                ),
              []
            );
          }
        })),
        Rt.apply(this, arguments)
      );
    }
    function Lt(e) {
      return Et.apply(this, arguments);
    }
    function Et() {
      return (
        (Et = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
          if (r("isStringNullOrEmpty")(t)) return e.getUserMedia({ video: !0 });
          try {
            return yield e.getUserMedia({ video: { deviceId: { exact: t } } });
          } catch (t) {
            if (!ot(t)) throw t;
            return (
              o("WALogger").LOG(
                oe ||
                  (oe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] selected camera unavailable, falling back to default camera: ",
                    "",
                  ])),
                t,
              ),
              e.getUserMedia({ video: !0 })
            );
          }
        })),
        Et.apply(this, arguments)
      );
    }
    function kt(e) {
      return It.apply(this, arguments);
    }
    function It() {
      return (
        (It = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceId,
            n = e.isInActiveCall,
            r = e.skipPermissionRequest,
            a = e.targetWindow,
            i = yield St({
              isInActiveCall: n,
              skipPermissionRequest: r,
              targetWindow: a,
            });
          return i.some(function (e) {
            return e.deviceId === t;
          })
            ? !0
            : (o("WALogger").ERROR(
                ae ||
                  (ae = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getIsValidVideoDevice: device not found in available devices: ",
                    "",
                  ])),
                t,
              ),
              !1);
        })),
        It.apply(this, arguments)
      );
    }
    var Tt = 25e3,
      Dt = 250,
      xt = 500;
    function $t(e) {
      var t = e;
      return t.closed === !0;
    }
    function Pt(e, t) {
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
                $t(e) && t("popout closed");
              } catch (e) {
                t("popout inaccessible");
              }
            }, Dt)));
        }, xt)),
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
    function Nt(e, t, n) {
      var a = new AbortController(),
        i = !1,
        l = function (n) {
          i ||
            ((i = !0),
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireDesktopStream] aborted: ",
                  "",
                ])),
              n,
            ),
            t(),
            a.abort());
        },
        s = self.setTimeout(function () {
          return l("getDisplayMedia timed out after " + Tt + "ms");
        }, Tt),
        u = n != null ? Pt(n, l) : null;
      return (
        e.catch(r("WAWebNoop")),
        r("WAPromiseRaceAbort")(e, a.signal)
          .catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull))
          .finally(function () {
            (self.clearTimeout(s), u != null && u());
          })
      );
    }
    function Mt(e) {
      return wt.apply(this, arguments);
    }
    function wt() {
      return (
        (wt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.params,
            r = e.targetWindow,
            a = n ? vt(n) : { video: !0 },
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
            s = Date.now(),
            u = o("WAWebVoipScreenSharePickerState").beginScreenSharePicker();
          try {
            var c = yield o("WAWebMediaCapture").start({
                type: o("WAWebMediaCaptureStreamType")
                  .WAWebMediaCaptureStreamType.DESKTOP,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
                mediaConstraints: [l],
                targetWindow: r,
              }),
              d = c.asyncStream,
              m = c.disposeStream,
              p = yield Nt(d, m, r).catch(function (e) {
                if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
                  o("WAWebCoreActionsODS").logCallScreenShareDenied();
                  var t = Date.now() - s;
                  if (t < be) {
                    o("WALogger").LOG(
                      ie ||
                        (ie = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV] acquireDesktopStream: auto-denied in ",
                          "ms, showing guide popup",
                        ])),
                      t,
                    );
                    var n =
                      r != null
                        ? o("WAWebVoipPopoutModalManager")
                            .VoipPopoutModalManager
                        : o("WAWebModalManager").ModalManager;
                    n.open(
                      ue.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: o("WAWebGuidePopup.react").Messaging
                          .SCREEN_SHARE_FAIL,
                        type: o("WAWebGuidePopup.react").GuidePopupType
                          .GUIDE_UNBLOCK,
                        featureSurface: o("WAWebGuidePopup.react")
                          .FeatureSurface.VOIP,
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
              if (_ < be) {
                var f =
                  r != null
                    ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                    : o("WAWebModalManager").ModalManager;
                f.open(
                  ue.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                    messaging: o("WAWebGuidePopup.react").Messaging
                      .SCREEN_SHARE_FAIL,
                    type: o("WAWebGuidePopup.react").GuidePopupType
                      .GUIDE_UNBLOCK,
                    featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                      .VOIP,
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
        })),
        wt.apply(this, arguments)
      );
    }
    ((l.getBrowserAudioProcessingStatus = he),
      (l.resetPermissionsCheckedForTest = Ce),
      (l.queryCameraPermissionStrict = Ue),
      (l.queryPermissionStatus = He),
      (l.checkVoipDevicePermissions = je),
      (l.acquireVoipMediaStream = at),
      (l.earlyAcquireMic = st),
      (l.cleanupEarlyAcquiredMic = ut),
      (l.getAvailableVideoDevices = St),
      (l.getIsValidVideoDevice = kt));
  },
  98,
);
