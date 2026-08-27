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
      se = le || (le = o("react"));
    function ue() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    var ce = 200,
      de = new WeakMap();
    function me(e) {
      var t = de.get(e);
      if (t != null) return t;
      var r = n("asyncToGeneratorRuntime")
        .asyncToGenerator(function* () {
          var t = Date.now(),
            n = yield vt(e),
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
            de.get(e) === r && de.delete(e);
          }, ce);
        });
      return (de.set(e, r), r);
    }
    var pe = n("$InternalEnum").Mirrored(["None", "Ideal", "Exact"]),
      _e = new Set([
        "ConstraintNotSatisfiedError",
        "OverconstrainedError",
        "NotFoundError",
      ]),
      fe = null;
    function ge() {
      return fe;
    }
    var he = { microphone: null, camera: null };
    function ye() {
      ((he.microphone = null), (he.camera = null));
    }
    var Ce = 1e3,
      be = 1e4,
      ve = 3e4,
      Se = 1e4,
      Re = 1e3,
      Le = 3e4,
      Ee = null;
    function ke(e) {
      return Ee !== e;
    }
    function Ie(e) {
      Ee === e && (Ee = null);
    }
    function Te(e) {
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
    function De(e, t) {
      var n = Te(e);
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
          Ie(e),
          !0);
    }
    function xe(e) {
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
      })(babelHelpers.extends({ checkVideo: e }, he));
    }
    function $e() {
      var e,
        t = r("WAWebCallCollection").activeCall;
      return {
        isCallLinkPreview:
          (t == null ? void 0 : t.isInCallLinkPreview()) === !0,
        scheduledCallId: (e = t == null ? void 0 : t.id) != null ? e : null,
      };
    }
    function Pe(e, t) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari
        ? be
        : t.isCallLinkPreview
          ? ve
          : null;
    }
    function Ne(e) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari ? Se : null;
    }
    function Me(e) {
      return we.apply(this, arguments);
    }
    function we() {
      return (
        (we = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!De(e, "unmute start")) {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (
              !De(e, "after stack load") &&
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
        we.apply(this, arguments)
      );
    }
    function Ae(e) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!ke(e) && !De(e, "before permission query")) {
            var t = yield Ve(!0),
              n = t.cameraPermission;
            if (!ke(e) && !De(e, "after permission query")) {
              if (n === "granted") {
                o("WALogger").LOG(
                  N ||
                    (N = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:acquireCameraStream] camera permission granted after timeout; retrying video capture",
                    ])),
                );
                try {
                  yield Me(e);
                } finally {
                  Ie(e);
                }
                return;
              }
              var r = Date.now() - e.retryStartedAt;
              if (n === "denied" || (!e.isCallLinkPreviewRetry && r >= Le)) {
                (Ie(e),
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
              Oe(e);
            }
          }
        })),
        Fe.apply(this, arguments)
      );
    }
    function Oe(e) {
      self.setTimeout(function () {
        ke(e) ||
          Ae(e).catch(function (e) {
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
      }, Re);
    }
    function Be(e) {
      var t;
      if (!(!o("WAWebUA").UA.isSafari && !e.isCallLinkPreview)) {
        var n = {
            isCallLinkPreviewRetry: e.isCallLinkPreview,
            retryStartedAt: Date.now(),
            scheduledCallId: e.scheduledCallId,
          },
          r = Te(n);
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
        ((Ee = n),
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
          Oe(n));
      }
    }
    function We(e, t, a, i, l) {
      var s = null,
        u = !1;
      return (
        e.catch(r("WAWebNoop")),
        (ie || (ie = n("Promise")))
          .race([
            e,
            new ie(function (e) {
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
    function qe() {
      return Ue.apply(this, arguments);
    }
    function Ue() {
      return (
        (Ue = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (navigator === void 0 || !navigator.permissions) return null;
          try {
            var e = yield navigator.permissions.query({ name: "camera" });
            return e.state;
          } catch (e) {
            return null;
          }
        })),
        Ue.apply(this, arguments)
      );
    }
    function Ve(e) {
      return He.apply(this, arguments);
    }
    function He() {
      return (
        (He = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        He.apply(this, arguments)
      );
    }
    function Ge(e, t) {
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
    function ze(e, t, n) {
      return je.apply(this, arguments);
    }
    function je() {
      return (
        (je = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (
              r("WAWebEnvironment").isWindows &&
              !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
            )
              return ((he.microphone = !0), (he.camera = !0), !0);
            var a = e && !ue(),
              i = o(
                "WAWebVoipPermissionCheckCaptureOwner",
              ).getPermissionCheckOwner(t),
              l = yield Ve(e);
            if (Ke(t, n)) return !1;
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
                u = yield Je(s, a, i, n);
              return Xe(u, a, t, n);
            } catch (e) {
              return (Qe(t, e, n) || Ye(e, a, l), !1);
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
        je.apply(this, arguments)
      );
    }
    function Ke(e, t) {
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
    function Qe(e, t, n) {
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
    function Xe(e, t, n, r) {
      return e === "not_acquired" ||
        ((he.microphone = !0),
        t && (he.camera = !0),
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
    function Ye(e, t, n) {
      if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
        (o("WAWebCoreActionsODS").logCallPermissionDenied(),
          o("WAWebModalManager").ModalManager.open(
            se.jsx(o("WAWebGuidePopup.react").GuidePopup, {
              messaging: Ge(t, n),
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
            se.jsx(o("WAWebGuidePopup.react").GuidePopup, {
              messaging: Ge(t, n),
              type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            }),
          ));
        return;
      }
      e instanceof o("WAWebGetUserMediaErrors").GetUserMediaError &&
        o("WAWebModalManager").ModalManager.open(
          se.jsx(o("WAWebGuidePopup.react").GuidePopup, {
            messaging: t
              ? o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_MISSING
              : o("WAWebGuidePopup.react").Messaging.MIC_MISSING,
            type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
            featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
          }),
        );
    }
    function Je(e, t, n, r) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (
        (Ze = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = o(
                "WAWebVoipPermissionCheckCaptureOwner",
              ).registerPermissionCheckCaptureForKeys(
                n.registryKeys,
                r("WAWebNoop"),
              ),
              l = xe(t) ? Number.POSITIVE_INFINITY : void 0,
              s = nt(t);
            try {
              try {
                return yield et(e, l, n.registryKeys, s, a);
              } catch (t) {
                if (s == null || !rt(t)) throw t;
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
                        yield et(e, l, n.registryKeys, void 0, a));
              }
            } finally {
              i.release();
            }
          },
        )),
        Ze.apply(this, arguments)
      );
    }
    function et(e, t, n, r, o) {
      return tt.apply(this, arguments);
    }
    function tt() {
      return (
        (tt = n("asyncToGeneratorRuntime").asyncToGenerator(
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
        tt.apply(this, arguments)
      );
    }
    function nt(e) {
      if (!e) return null;
      var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
      return r("isStringNullOrEmpty")(t)
        ? null
        : [{ video: { deviceId: { exact: t } }, audio: !0 }];
    }
    function rt(e) {
      return e instanceof Error && _e.has(e.name);
    }
    function ot(e) {
      return at.apply(this, arguments);
    }
    function at() {
      return (
        (at = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                  return ut({
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
                  return ft({
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
                  return $t({ params: l.params, targetWindow: l.targetWindow });
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })(t);
        })),
        at.apply(this, arguments)
      );
    }
    var it = null;
    function lt() {
      var e;
      if (it == null) {
        var t = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [EarlyMicAcquire] Acquiring microphone in gesture (device=",
              ")",
            ])),
          (e = t == null ? void 0 : t.slice(0, 8)) != null ? e : "default",
        );
        var n = (it = ot({
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
              it === n && (it = null),
              null
            );
          }));
      }
    }
    function st() {
      if (it != null) {
        var e = it;
        ((it = null),
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
    function ut(e) {
      return ct.apply(this, arguments);
    }
    function ct() {
      return (
        (ct = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.params,
            r = e.selectedDeviceId,
            a = e.suppressErrorPopup,
            i = e.targetWindow;
          o("WALogger").LOG(
            H ||
              (H = babelHelpers.taggedTemplateLiteralLoose([
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
            s = xe(!1),
            u = yield o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
              timeoutLimit: s ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: i,
              mediaConstraints: n
                ? [mt(r, "exact", n), mt(r, "ideal", n), mt(null, "none", n)]
                : void 0,
            }),
            c = u.asyncStream,
            d = u.disposeStream,
            m = null;
          if (!s)
            try {
              var p,
                _,
                f = yield (p = navigator.permissions) == null
                  ? void 0
                  : p.query({ name: "microphone" });
              m = (_ = f == null ? void 0 : f.state) != null ? _ : null;
            } catch (e) {}
          var g = s ? Se : Ne(m),
            h = g != null ? We(c, d, g, "acquireMicrophoneStream") : c;
          return h
            .then(function (e) {
              if (e != null)
                try {
                  dt(e, (n == null ? void 0 : n.autoGainControl) !== !1);
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
                function () {
                  if (
                    (o("WAWebCoreActionsODS").logCallMediaMicError(), a !== !0)
                  ) {
                    var e;
                    l.open(
                      se.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
                  o("WAWebGetUserMediaErrors").NotReadableError,
                  o("WAWebGetUserMediaErrors").SourceUnavailableError,
                ],
                function () {
                  if (
                    (o("WAWebCoreActionsODS").logCallMediaMicError(), a !== !0)
                  ) {
                    var e;
                    l.open(
                      se.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
                o("WAWebGetUserMediaErrors").GetUserMediaError,
                function () {
                  if (
                    (o("WAWebCoreActionsODS").logCallMediaMicError(), a !== !0)
                  ) {
                    var e;
                    l.open(
                      se.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
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
        ct.apply(this, arguments)
      );
    }
    function dt(e, t) {
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
        ((fe = { supported: r, applied: s }),
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
        ((fe = {
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
    function mt(e, t, n) {
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
    function pt(e) {
      return _t.apply(this, arguments);
    }
    function _t() {
      return (
        (_t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
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
        _t.apply(this, arguments)
      );
    }
    function ft(e) {
      return gt.apply(this, arguments);
    }
    function gt() {
      return (
        (gt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.isAVUpgrade,
            r = e.params,
            a = e.selectedDeviceId,
            i = e.targetWindow;
          if (ue()) return null;
          var l = yield qe();
          if (l === "denied") {
            o("WALogger").LOG(
              j ||
                (j = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireCameraStream] camera permission denied, skipping camera acquisition",
                ])),
            );
            var s = yield o("WAWebVoipCameraPrewarm").consumePrewarmedStream();
            return (
              s != null &&
                s.getTracks().forEach(function (e) {
                  return e.stop();
                }),
              null
            );
          }
          var u = yield pt({ selectedDeviceId: a, params: r, targetWindow: i });
          if (u != null) return u;
          var c =
              n === !0
                ? o("WAWebGuidePopup.react").FeatureSurface.VOIP_VIDEO_UPGRADE
                : o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            d =
              i != null
                ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                : o("WAWebModalManager").ModalManager,
            m = $e(),
            p = Date.now();
          o("WALogger").LOG(
            K ||
              (K = babelHelpers.taggedTemplateLiteralLoose([
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
              featureSurface: c,
              timeoutLimit: xe(!0) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: i,
              mediaConstraints: r
                ? [
                    ht({
                      device: { deviceId: a, constraintType: pe.Exact },
                      params: r,
                    }),
                    ht({
                      device: { deviceId: a, constraintType: pe.Ideal },
                      params: r,
                    }),
                    ht({ params: r }),
                  ]
                : void 0,
            }),
            f = _.asyncStream,
            g = _.disposeStream,
            h = Pe(l, m),
            y =
              h != null
                ? We(f, g, h, "acquireCameraStream", function () {
                    l === "prompt" && Be(m);
                  })
                : f;
          return y
            .then(function (e) {
              var t = Date.now() - p;
              if (e != null) {
                var n,
                  r,
                  a,
                  i,
                  l = e.getVideoTracks()[0];
                o("WALogger").LOG(
                  Q ||
                    (Q = babelHelpers.taggedTemplateLiteralLoose([
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
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
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
                  var e = Date.now() - p;
                  (o("WALogger").LOG(
                    Y ||
                      (Y = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotAllowedError after ",
                        "ms",
                      ])),
                    e,
                  ),
                    d.open(
                      se.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: o("WAWebGuidePopup.react").Messaging
                          .CAMERA_FAIL,
                        type: o("WAWebGuidePopup.react").GuidePopupType
                          .GUIDE_UNBLOCK,
                        featureSurface: c,
                        onConfirm: function () {
                          return d.close();
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
                  var t = Date.now() - p;
                  (o("WALogger").LOG(
                    J ||
                      (J = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotReadableError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    d.open(
                      se.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: o("WAWebGuidePopup.react").Messaging
                          .CAMERA_FAIL,
                        type: o("WAWebGuidePopup.react").GuidePopupType
                          .GUIDE_UNBLOCK,
                        featureSurface: c,
                        onConfirm: function () {
                          return d.close();
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
                  var t = Date.now() - p;
                  (o("WALogger").LOG(
                    Z ||
                      (Z = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] GetUserMediaError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    d.open(
                      se.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: o("WAWebGuidePopup.react").Messaging
                          .CAMERA_MISSING,
                        type: o("WAWebGuidePopup.react").GuidePopupType
                          .GUIDE_NONE,
                        featureSurface: c,
                        onConfirm: function () {
                          return d.close();
                        },
                      }),
                    ));
                },
              ),
            );
        })),
        gt.apply(this, arguments)
      );
    }
    function ht(e) {
      var t = e.device,
        n = e.params,
        a = { video: r("WAWebVoipCameraTrackConstraints")(n), audio: !1 };
      return (
        o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
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
            t.constraintType === pe.None
              ? a.video
              : t.constraintType === pe.Exact
                ? babelHelpers.extends({}, a.video, {
                    deviceId: { exact: t.deviceId },
                  })
                : t.constraintType === pe.Ideal
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
    function yt(e) {
      return {
        video: {
          width: { ideal: e.width },
          height: { ideal: e.height },
          frameRate: { ideal: e.maxFps },
        },
        audio: !1,
      };
    }
    function Ct(e) {
      return bt.apply(this, arguments);
    }
    function bt() {
      return (
        (bt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  ee ||
                    (ee = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] mediaDevices API not supported",
                    ])),
                ),
                []
              );
            var m = r === !0 || (o("WAWebUA").UA.isSafari && n === !0),
              p = o("WAWebUA").UA.isFirefox && a != null;
            if (!(c || m)) {
              if (!ue()) {
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
                    yield me(d);
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
                te ||
                  (te = babelHelpers.taggedTemplateLiteralLoose([
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
                  ne ||
                    (ne = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] error loading devices: ",
                      "",
                    ])),
                  e,
                ),
              []
            );
          }
        })),
        bt.apply(this, arguments)
      );
    }
    function vt(e) {
      return St.apply(this, arguments);
    }
    function St() {
      return (
        (St = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
          if (r("isStringNullOrEmpty")(t)) return e.getUserMedia({ video: !0 });
          try {
            return yield e.getUserMedia({ video: { deviceId: { exact: t } } });
          } catch (t) {
            if (!rt(t)) throw t;
            return (
              o("WALogger").LOG(
                re ||
                  (re = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] selected camera unavailable, falling back to default camera: ",
                    "",
                  ])),
                t,
              ),
              e.getUserMedia({ video: !0 })
            );
          }
        })),
        St.apply(this, arguments)
      );
    }
    function Rt(e) {
      return Lt.apply(this, arguments);
    }
    function Lt() {
      return (
        (Lt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceId,
            n = e.isInActiveCall,
            r = e.skipPermissionRequest,
            a = e.targetWindow,
            i = yield Ct({
              isInActiveCall: n,
              skipPermissionRequest: r,
              targetWindow: a,
            });
          return i.some(function (e) {
            return e.deviceId === t;
          })
            ? !0
            : (o("WALogger").ERROR(
                oe ||
                  (oe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getIsValidVideoDevice: device not found in available devices: ",
                    "",
                  ])),
                t,
              ),
              !1);
        })),
        Lt.apply(this, arguments)
      );
    }
    var Et = 25e3,
      kt = 250,
      It = 500;
    function Tt(e) {
      var t = e;
      return t.closed === !0;
    }
    function Dt(e, t) {
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
                Tt(e) && t("popout closed");
              } catch (e) {
                t("popout inaccessible");
              }
            }, kt)));
        }, It)),
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
    function xt(e, t, n) {
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
          return l("getDisplayMedia timed out after " + Et + "ms");
        }, Et),
        u = n != null ? Dt(n, l) : null;
      return (
        e.catch(r("WAWebNoop")),
        r("WAPromiseRaceAbort")(e, a.signal)
          .catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull))
          .finally(function () {
            (self.clearTimeout(s), u != null && u());
          })
      );
    }
    function $t(e) {
      return Pt.apply(this, arguments);
    }
    function Pt() {
      return (
        (Pt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.params,
            r = e.targetWindow,
            a = n ? yt(n) : { video: !0 },
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
              p = yield xt(d, m, r).catch(function (e) {
                if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
                  o("WAWebCoreActionsODS").logCallScreenShareDenied();
                  var t = Date.now() - s;
                  if (t < Ce) {
                    o("WALogger").LOG(
                      ae ||
                        (ae = babelHelpers.taggedTemplateLiteralLoose([
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
                      se.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
              if (_ < Ce) {
                var f =
                  r != null
                    ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                    : o("WAWebModalManager").ModalManager;
                f.open(
                  se.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
        Pt.apply(this, arguments)
      );
    }
    ((l.getBrowserAudioProcessingStatus = ge),
      (l.resetPermissionsCheckedForTest = ye),
      (l.queryCameraPermissionStrict = qe),
      (l.queryPermissionStatus = Ve),
      (l.checkVoipDevicePermissions = ze),
      (l.acquireVoipMediaStream = ot),
      (l.earlyAcquireMic = lt),
      (l.cleanupEarlyAcquiredMic = st),
      (l.getAvailableVideoDevices = Ct),
      (l.getIsValidVideoDevice = Rt));
  },
  98,
);
