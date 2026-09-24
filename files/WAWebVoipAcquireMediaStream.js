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
    "getErrorSafe",
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
      ue,
      ce,
      de,
      me,
      pe,
      _e = pe || (pe = o("react"));
    function fe() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    var ge = 200,
      he = new WeakMap();
    function ye(e) {
      var t = he.get(e);
      if (t != null) return t;
      var r = n("asyncToGeneratorRuntime")
        .asyncToGenerator(function* () {
          var t = Date.now(),
            n = yield Xt(e),
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
            he.get(e) === r && he.delete(e);
          }, ge);
        });
      return (he.set(e, r), r);
    }
    var Ce = n("$InternalEnum").Mirrored(["None", "Ideal", "Exact"]),
      be = new Set([
        "ConstraintNotSatisfiedError",
        "OverconstrainedError",
        "NotFoundError",
      ]),
      ve = null;
    function Se() {
      return ve;
    }
    var Re = { microphone: null, camera: null };
    function Le() {
      ((Re.microphone = null), (Re.camera = null));
    }
    var Ee = 1e3,
      ke = 1e4,
      Ie = 3e4,
      Te = 1e4,
      De = 1e3,
      xe = 3e4,
      $e = null;
    function Pe(e) {
      return $e !== e;
    }
    function Ne(e) {
      $e === e && ($e = null);
    }
    function Me(e) {
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
    function we(e, t) {
      var n = Me(e);
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
          Ne(e),
          !0);
    }
    function Ae(e) {
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
      })(babelHelpers.extends({ checkVideo: e }, Re));
    }
    function Fe() {
      var e,
        t = r("WAWebCallCollection").activeCall;
      return {
        isCallLinkPreview:
          (t == null ? void 0 : t.isInCallLinkPreview()) === !0,
        scheduledCallId: (e = t == null ? void 0 : t.id) != null ? e : null,
      };
    }
    function Oe(e, t) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari
        ? ke
        : t.isCallLinkPreview
          ? Ie
          : null;
    }
    function Be(e) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari ? Te : null;
    }
    function We(e) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!we(e, "unmute start")) {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (
              !we(e, "after stack load") &&
              (t == null ? void 0 : t.type) === "web"
            ) {
              var n = yield t.setCallVideoMute(!1);
              o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] camera permission retry setCallVideoMute(false) status: ",
                    "",
                  ])),
                n,
              );
            }
          }
        })),
        qe.apply(this, arguments)
      );
    }
    function Ue(e) {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!Pe(e) && !we(e, "before permission query")) {
            var t = yield Qe(!0),
              n = t.cameraPermission;
            if (!Pe(e) && !we(e, "after permission query")) {
              if (n === "granted") {
                o("WALogger").LOG(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:acquireCameraStream] camera permission granted after timeout; retrying video capture",
                    ])),
                );
                try {
                  yield We(e);
                } finally {
                  Ne(e);
                }
                return;
              }
              var r = Date.now() - e.retryStartedAt;
              if (n === "denied" || (!e.isCallLinkPreviewRetry && r >= xe)) {
                (Ne(e),
                  o("WALogger").LOG(
                    O ||
                      (O = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] camera permission retry stopped: permission=",
                        ", elapsed=",
                        "ms",
                      ])),
                    n,
                    r,
                  ));
                return;
              }
              He(e);
            }
          }
        })),
        Ve.apply(this, arguments)
      );
    }
    function He(e) {
      self.setTimeout(function () {
        Pe(e) ||
          Ue(e).catch(function (e) {
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
      }, De);
    }
    function Ge(e) {
      var t;
      if (!(!o("WAWebUA").UA.isSafari && !e.isCallLinkPreview)) {
        var n = {
            isCallLinkPreviewRetry: e.isCallLinkPreview,
            retryStartedAt: Date.now(),
            scheduledCallId: e.scheduledCallId,
          },
          r = Me(n);
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
        (($e = n),
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
          He(n));
      }
    }
    function ze(e, t, a, i, l) {
      var s = null,
        u = !1;
      return (
        e.catch(r("WAWebNoop")),
        (me || (me = n("Promise")))
          .race([
            e,
            new me(function (e) {
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
    function je() {
      return Ke.apply(this, arguments);
    }
    function Ke() {
      return (
        (Ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (navigator === void 0 || !navigator.permissions) return null;
          try {
            var e = yield navigator.permissions.query({ name: "camera" });
            return e.state;
          } catch (e) {
            return null;
          }
        })),
        Ke.apply(this, arguments)
      );
    }
    function Qe(e) {
      return Xe.apply(this, arguments);
    }
    function Xe() {
      return (
        (Xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Xe.apply(this, arguments)
      );
    }
    function Ye(e) {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e === "denied") return "camera_denied";
          var t = yield je();
          return t === "denied" || (e === "timed_out" && t === "prompt")
            ? "camera_denied"
            : "camera_unavailable";
        })),
        Je.apply(this, arguments)
      );
    }
    function Ze(e, t, n, r) {
      return et.apply(this, arguments);
    }
    function et() {
      return (
        (et = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i = yield lt(!1, n, r);
            if (!i || !e || fe())
              return { canJoin: i, reason: null, videoMuted: !1 };
            var l = yield je();
            if (tt(n, r)) return { canJoin: !1, reason: null, videoMuted: !1 };
            if (l === "denied")
              return { canJoin: !0, reason: "camera_denied", videoMuted: !0 };
            var s =
                (a = t == null ? void 0 : t.cameraTimeoutMs) != null
                  ? a
                  : l === "prompt" && !o("WAWebUA").UA.isSafari
                    ? Ie
                    : ke,
              u = yield ut({
                captureTypeOverride: o("WAWebMediaCaptureStreamType")
                  .WAWebMediaCaptureStreamType.CAMERA,
                checkVideo: !0,
                showFailureModal: !1,
                timeoutLimitOverride: s,
                originatingCall: n,
                abortSignal: r,
              });
            return tt(n, r)
              ? { canJoin: !1, reason: null, videoMuted: !1 }
              : u === "granted"
                ? { canJoin: !0, reason: null, videoMuted: !1 }
                : { canJoin: !0, reason: yield Ye(u), videoMuted: !0 };
          },
        )),
        et.apply(this, arguments)
      );
    }
    function tt(e, t) {
      return (t == null ? void 0 : t.aborted) === !0
        ? (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipCallJoinPermissions] join cancelled during the camera probe",
              ])),
          ),
          !0)
        : o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(e)
          ? (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:checkVoipCallJoinPermissions] originating call ended during the camera probe",
                ])),
            ),
            !0)
          : !1;
    }
    function nt(e, t) {
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
    var rt = { not_acquired: "unavailable", timed_out: "timed_out" };
    function ot(e) {
      return e instanceof o("WAWebGetUserMediaErrors").NotAllowedError
        ? "denied"
        : "unavailable";
    }
    function at(e, t) {
      (e || (Re.microphone = !0), t && (Re.camera = !0));
    }
    function it(e, t, n) {
      if (e) {
        o("WAWebVoipActivityTracker").trackUiActivity(
          n
            ? o("WAWebVoipActivityTracker").VoipUiActivity
                .PERMISSION_REQUEST_CAMERA_START
            : o("WAWebVoipActivityTracker").VoipUiActivity
                .PERMISSION_REQUEST_CAMERA_END,
        );
        return;
      }
      if (t) {
        o("WAWebVoipActivityTracker").trackUiActivity(
          n
            ? o("WAWebVoipActivityTracker").VoipUiActivity
                .PERMISSION_REQUEST_CAMERA_AND_MIC_START
            : o("WAWebVoipActivityTracker").VoipUiActivity
                .PERMISSION_REQUEST_CAMERA_AND_MIC_END,
        );
        return;
      }
      o("WAWebVoipActivityTracker").trackUiActivity(
        n
          ? o("WAWebVoipActivityTracker").VoipUiActivity
              .PERMISSION_REQUEST_MIC_START
          : o("WAWebVoipActivityTracker").VoipUiActivity
              .PERMISSION_REQUEST_MIC_END,
      );
    }
    function lt(e, t, n) {
      return st.apply(this, arguments);
    }
    function st() {
      return (
        (st = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = yield ut({
              checkVideo: e,
              showFailureModal: !0,
              originatingCall: t,
              abortSignal: n,
            });
            return r === "granted";
          },
        )),
        st.apply(this, arguments)
      );
    }
    function ut(e) {
      return ct.apply(this, arguments);
    }
    function ct() {
      return (
        (ct = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.abortSignal,
            n = e.captureTypeOverride,
            a = e.checkVideo,
            i = e.originatingCall,
            l = e.showFailureModal,
            s = e.timeoutLimitOverride;
          if (
            r("WAWebEnvironment").isWindows &&
            !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
          )
            return ((Re.microphone = !0), (Re.camera = !0), "granted");
          var u = a && !fe(),
            c = o(
              "WAWebVoipPermissionCheckCaptureOwner",
            ).getPermissionCheckOwner(i),
            d = yield Qe(a);
          if (mt(i, t)) return "unavailable";
          var m =
              n != null
                ? n
                : u
                  ? o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                      .CAMERA_AND_MICROPHONE
                  : o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                      .MICROPHONE,
            p =
              m ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA,
            _ =
              m ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA_AND_MICROPHONE;
          try {
            it(p, _, !0);
            var f = yield Et(m, u, c, t, l, s);
            return (
              ht(f, m, d),
              dt(f, {
                abortSignal: t,
                isCameraOnly: p,
                originatingCall: i,
                shouldCheckVideo: u,
              })
            );
          } catch (e) {
            return pt(i, e, t)
              ? "unavailable"
              : (gt(e, m, d), Ct(e, m, u, d, l), ot(e));
          } finally {
            it(p, _, !1);
          }
        })),
        ct.apply(this, arguments)
      );
    }
    function dt(e, t) {
      var n = t.abortSignal,
        r = t.isCameraOnly,
        a = t.originatingCall,
        i = t.shouldCheckVideo,
        l = rt[e];
      return l != null
        ? l
        : (at(r, i),
          e === "released_after_acquire"
            ? "unavailable"
            : (n == null ? void 0 : n.aborted) === !0
              ? (o("WALogger").LOG(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:checkVoipDevicePermissions] permission capture was cancelled after acquisition",
                    ])),
                ),
                "unavailable")
              : o(
                    "WAWebVoipPermissionCheckCaptureOwner",
                  ).didPermissionCheckCallEnd(a)
                ? (o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:checkVoipDevicePermissions] aborting permission check because the originating call ended during capture",
                      ])),
                  ),
                  "unavailable")
                : "granted");
    }
    function mt(e, t) {
      return (t == null ? void 0 : t.aborted) === !0
        ? (o("WALogger").LOG(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] permission check was cancelled before capture",
              ])),
          ),
          !0)
        : o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(e)
          ? (o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:checkVoipDevicePermissions] aborting permission check because the originating call ended",
                ])),
            ),
            !0)
          : !1;
    }
    function pt(e, t, n) {
      return (n == null ? void 0 : n.aborted) === !0
        ? (o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error because the permission check was cancelled: ",
                "",
              ])),
            String(t),
          ),
          !0)
        : o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(e)
          ? (o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error because the originating call ended: ",
                  "",
                ])),
              String(t),
            ),
            !0)
          : !1;
    }
    var _t = 0.01;
    function ft(e, t) {
      var n = t.micPermission === "granted",
        r = t.cameraPermission === "granted";
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? n
        : (e ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA ||
            n) &&
            r;
    }
    function gt(e, t, n) {
      var a = r("getErrorSafe")(e);
      (o("WAWebGetUserMediaErrors").isDeniedBySystem(e) &&
        o("WAWebCoreActionsODS").logCallPermissionDeniedBySystem(),
        ft(t, n) &&
          (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError
            ? o("WAWebCoreActionsODS").logCallPermissionFailedWhileGranted(
                "denied",
              )
            : (e instanceof o("WAWebGetUserMediaErrors").NotReadableError ||
                e instanceof
                  o("WAWebGetUserMediaErrors").SourceUnavailableError) &&
              o("WAWebCoreActionsODS").logCallPermissionFailedWhileGranted(
                "device_error",
              )),
        o("WALogger")
          .WARN(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] ",
                " capture failed: ",
                ": ",
                " (pre-prompt ",
                ")",
              ])),
            t,
            a.name,
            a.message,
            yt(t, n),
          )
          .catching(a)
          .sendLogs("voip-permission-check-failed", {
            sampling: _t,
            employeeSampling: 1,
          }));
    }
    function ht(e, t, n) {
      e === "timed_out" &&
        (o("WAWebCoreActionsODS").logCallPermissionTimedOut(),
        ft(t, n) &&
          o("WAWebCoreActionsODS").logCallPermissionFailedWhileGranted(
            "timed_out",
          ),
        o("WALogger")
          .WARN(
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] ",
                " capture timed out (pre-prompt ",
                ")",
              ])),
            t,
            yt(t, n),
          )
          .sendLogs("voip-permission-check-failed", {
            sampling: _t,
            employeeSampling: 1,
          }));
    }
    function yt(e, t) {
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? "mic=" + t.micPermission
        : "mic=" + t.micPermission + ", camera=" + t.cameraPermission;
    }
    function Ct(e, t, n, r, a) {
      if (
        (a === void 0 && (a = !0),
        e instanceof o("WAWebGetUserMediaErrors").NotAllowedError)
      ) {
        (o("WAWebCoreActionsODS").logCallPermissionDenied(),
          a &&
            bt(
              St(e, t, n, r),
              o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
            ));
        return;
      }
      if (
        e instanceof o("WAWebGetUserMediaErrors").NotReadableError ||
        e instanceof o("WAWebGetUserMediaErrors").SourceUnavailableError
      ) {
        (o("WAWebCoreActionsODS").logCallPermissionDeviceError(),
          a && bt(vt(t), o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE));
        return;
      }
      e instanceof o("WAWebGetUserMediaErrors").GetUserMediaError &&
        a &&
        bt(
          n
            ? o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_MISSING
            : o("WAWebGuidePopup.react").Messaging.MIC_MISSING,
          o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
        );
    }
    function bt(e, t) {
      o("WAWebModalManager").ModalManager.open(
        _e.jsx(o("WAWebGuidePopup.react").GuidePopup, {
          messaging: e,
          type: t,
          featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
        }),
      );
    }
    function vt(e) {
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? o("WAWebGuidePopup.react").Messaging.MIC_UNAVAILABLE
        : e ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
          ? o("WAWebGuidePopup.react").Messaging.CAMERA_UNAVAILABLE
          : o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_UNAVAILABLE;
    }
    function St(e, t, n, r) {
      return Rt(e) ? Lt(t) : nt(n, r);
    }
    function Rt(e) {
      return (
        !r("WAWebEnvironment").isWindows &&
        o("WAWebGetUserMediaErrors").isDeniedBySystem(e)
      );
    }
    function Lt(e) {
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? o("WAWebGuidePopup.react").Messaging.MIC_BLOCKED_BY_SYSTEM
        : e ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
          ? o("WAWebGuidePopup.react").Messaging.CAMERA_BLOCKED_BY_SYSTEM
          : o("WAWebGuidePopup.react").Messaging
              .CAMERA_AND_MIC_BLOCKED_BY_SYSTEM;
    }
    function Et(e, t, n, r, o, a) {
      return kt.apply(this, arguments);
    }
    function kt() {
      return (
        (kt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            var s = o(
                "WAWebVoipPermissionCheckCaptureOwner",
              ).registerPermissionCheckCaptureForKeys(
                n.registryKeys,
                r("WAWebNoop"),
              ),
              u = i != null ? i : !0,
              c = l != null ? l : Ae(t) ? Number.POSITIVE_INFINITY : void 0,
              d = l == null ? null : Date.now() + l,
              m = Dt(
                t,
                e !==
                  o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                    .CAMERA,
              );
            try {
              try {
                return yield It(e, c, n.registryKeys, m, a, !u, l);
              } catch (t) {
                if (m == null || !xt(t)) throw t;
                if ((a == null ? void 0 : a.aborted) === !0)
                  return (
                    o("WALogger").LOG(
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the permission check was cancelled",
                        ])),
                    ),
                    "not_acquired"
                  );
                if (s.wasReleased())
                  return (
                    o("WALogger").LOG(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the permission capture owner was released",
                        ])),
                    ),
                    "not_acquired"
                  );
                if (
                  o(
                    "WAWebVoipPermissionCheckCaptureOwner",
                  ).didPermissionCheckCallEnd(n.call)
                )
                  return (
                    o("WALogger").LOG(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the originating call ended",
                        ])),
                    ),
                    "not_acquired"
                  );
                o("WALogger").LOG(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:checkVoipDevicePermissions] selected camera unavailable, retrying permission check with default camera: ",
                      "",
                    ])),
                  String(t),
                );
                var p = d == null ? void 0 : Math.max(0, d - Date.now());
                return p === 0
                  ? "timed_out"
                  : yield It(
                      e,
                      p != null ? p : c,
                      n.registryKeys,
                      void 0,
                      a,
                      !u,
                      p,
                    );
              }
            } finally {
              s.release();
            }
          },
        )),
        kt.apply(this, arguments)
      );
    }
    function It(e, t, n, r, o, a, i) {
      return Tt.apply(this, arguments);
    }
    function Tt() {
      return (
        (Tt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s) {
            l === void 0 && (l = !1);
            var u = {
                type: e,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
              },
              c = s != null ? s : t;
            (c != null && (u.timeoutLimit = c),
              l && (u.timeoutCallback = r("WAWebNoop")),
              a != null && (u.mediaConstraints = a));
            var d = o("WAWebMediaCapture").start(u),
              m = d.asyncStream,
              p = d.disposeStream,
              _ = o(
                "WAWebVoipPermissionCheckCaptureOwner",
              ).registerPermissionCheckCaptureForKeys(n, p);
            try {
              m.catch(r("WAWebNoop"));
              var f = !1,
                g = m;
              s != null &&
                (g = ze(m, p, s, "checkVoipDevicePermissions", function () {
                  f = !0;
                }));
              var h;
              try {
                h =
                  i == null
                    ? yield g
                    : yield r("WAPromiseRaceAbort")(g, i).catch(
                        o("WAAbortError").catchAbort(
                          o("WAWebNullFunc").returnNull,
                        ),
                      );
              } catch (e) {
                if ((i == null ? void 0 : i.aborted) === !0 || _.wasReleased())
                  return (
                    o("WALogger").LOG(
                      V ||
                        (V = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error after cancellation or owner release: ",
                          "",
                        ])),
                      String(e),
                    ),
                    "not_acquired"
                  );
                throw e;
              }
              return h == null
                ? (i == null ? void 0 : i.aborted) === !0
                  ? (o("WALogger").LOG(
                      H ||
                        (H = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] permission capture was cancelled",
                        ])),
                    ),
                    "not_acquired")
                  : !f || _.wasReleased()
                    ? (o("WALogger").LOG(
                        G ||
                          (G = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] permission capture was disposed before completing",
                          ])),
                      ),
                      "not_acquired")
                    : (o("WALogger").LOG(
                        z ||
                          (z = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] permission capture timed out",
                          ])),
                      ),
                      "timed_out")
                : _.wasReleased()
                  ? (o("WALogger").LOG(
                      j ||
                        (j = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] permission capture was released before completion",
                        ])),
                    ),
                    "released_after_acquire")
                  : "acquired";
            } finally {
              _.release();
            }
          },
        )),
        Tt.apply(this, arguments)
      );
    }
    function Dt(e, t) {
      if ((t === void 0 && (t = !0), !e)) return null;
      var n = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
      return r("isStringNullOrEmpty")(n)
        ? null
        : [
            babelHelpers.extends(
              { video: { deviceId: { exact: n } } },
              t ? { audio: !0 } : {},
            ),
          ];
    }
    function xt(e) {
      return e instanceof Error && be.has(e.name);
    }
    function $t(e) {
      return Pt.apply(this, arguments);
    }
    function Pt() {
      return (
        (Pt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia
            ? (o("WALogger").ERROR(
                K ||
                  (K = babelHelpers.taggedTemplateLiteralLoose([
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
                  return Ft(r);
                }
                if (
                  ((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                  t.type === "camera"
                ) {
                  var o = t.type,
                    a = babelHelpers.objectWithoutPropertiesLoose(t, s);
                  return Vt({
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
                  return ln({ params: l.params, targetWindow: l.targetWindow });
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })(t);
        })),
        Pt.apply(this, arguments)
      );
    }
    var Nt = null;
    function Mt() {
      var e;
      if (Nt == null) {
        var t = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
        o("WALogger").LOG(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [EarlyMicAcquire] Acquiring microphone in gesture (device=",
              ")",
            ])),
          (e = t == null ? void 0 : t.slice(0, 8)) != null ? e : "default",
        );
        var n = (Nt = $t({
          type: "microphone",
          selectedDeviceId: t != null ? t : void 0,
          suppressErrorPopup: !0,
        })
          .then(function (e) {
            return (
              e != null &&
                o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Microphone acquired successfully",
                    ])),
                ),
              e
            );
          })
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Microphone acquire failed: ",
                    "",
                  ])),
                e,
              ),
              Nt === n && (Nt = null),
              null
            );
          }));
      }
    }
    function wt() {
      if (Nt != null) {
        var e = Nt;
        ((Nt = null),
          e
            .then(function (e) {
              e != null &&
                (o("WAWebMediaCapture").stop(e),
                o("WALogger").LOG(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Cleaned up unused early-acquired microphone stream",
                    ])),
                ));
            })
            .catch(function (e) {
              o("WALogger").WARN(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Cleanup failed: ",
                    "",
                  ])),
                e,
              );
            }));
      }
    }
    var At = ["exact", "ideal", "none"];
    function Ft(e) {
      return Ot.apply(this, arguments);
    }
    function Ot() {
      return (
        (Ot = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            Q ||
              (Q = babelHelpers.taggedTemplateLiteralLoose([
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
            p = Ae(!1),
            _ = yield o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
              timeoutLimit: p ? 1 / 0 : void 0,
              timeoutCallback: a ? r("WAWebNoop") : void 0,
              targetWindow: d,
              mediaConstraints: s
                ? At.slice(0, a ? 1 : 3).map(function (e) {
                    return Wt(e === "none" ? null : u, e, s);
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
          var v = Be(h),
            S = v != null ? ze(f, g, v, "acquireMicrophoneStream") : f;
          return S.then(function (e) {
            if (e != null && !a)
              try {
                Bt(e, (s == null ? void 0 : s.autoGainControl) !== !1);
              } catch (e) {
                o("WALogger").LOG(
                  X ||
                    (X = babelHelpers.taggedTemplateLiteralLoose([
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
                  (l(e),
                    c !== !0 &&
                      m.open(
                        _e.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                          messaging: Rt(e)
                            ? o("WAWebGuidePopup.react").Messaging
                                .MIC_BLOCKED_BY_SYSTEM
                            : o("WAWebGuidePopup.react").Messaging.MIC_FAIL,
                          type: o("WAWebGuidePopup.react").GuidePopupType
                            .GUIDE_UNBLOCK,
                          featureSurface: o("WAWebGuidePopup.react")
                            .FeatureSurface.VOIP,
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
                  if ((l(e), c !== !0)) {
                    var t;
                    m.open(
                      _e.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
                        messaging: t.Messaging.MIC_UNAVAILABLE,
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
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebGetUserMediaErrors").GetUserMediaError,
                function (e) {
                  if ((l(e), c !== !0)) {
                    var t;
                    m.open(
                      _e.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
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
        Ot.apply(this, arguments)
      );
    }
    function Bt(e, t) {
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
        ((ve = { supported: r, applied: s }),
          o("WAWebVoipBrowserAudioStatus").setBrowserAudioProcessingApplied(
            s,
            t,
          ),
          o("WALogger").LOG(
            $ ||
              ($ = babelHelpers.taggedTemplateLiteralLoose([
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
        ((ve = {
          supported: r,
          applied: {
            echoCancellation: !1,
            noiseSuppression: !1,
            autoGainControl: !1,
          },
        }),
          o("WALogger").LOG(
            P ||
              (P = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:detectBrowserAudioProcessing] no audio track found in stream",
              ])),
          ));
    }
    function Wt(e, t, n) {
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
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
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
    function qt(e) {
      return Ut.apply(this, arguments);
    }
    function Ut() {
      return (
        (Ut = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                Y ||
                  (Y = babelHelpers.taggedTemplateLiteralLoose([
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
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
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
        Ut.apply(this, arguments)
      );
    }
    function Vt(e) {
      return Ht.apply(this, arguments);
    }
    function Ht() {
      return (
        (Ht = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.facingMode,
            r = e.isAVUpgrade,
            a = e.params,
            i = e.selectedDeviceId,
            l = e.targetWindow;
          if (fe()) return null;
          var s = yield je();
          if (s === "denied") {
            o("WALogger").LOG(
              Z ||
                (Z = babelHelpers.taggedTemplateLiteralLoose([
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
          var c = yield qt({
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
            p = Fe(),
            _ = Date.now();
          o("WALogger").LOG(
            ee ||
              (ee = babelHelpers.taggedTemplateLiteralLoose([
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
              timeoutLimit: Ae(!0) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: l,
              mediaConstraints: Gt({
                facingMode: n,
                params: a,
                selectedDeviceId: i,
              }),
            }),
            g = f.asyncStream,
            h = f.disposeStream,
            y = Oe(s, p),
            C =
              y != null
                ? ze(g, h, y, "acquireCameraStream", function () {
                    s === "prompt" && Ge(p);
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
                te ||
                  (te = babelHelpers.taggedTemplateLiteralLoose([
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
                ne ||
                  (ne = babelHelpers.taggedTemplateLiteralLoose([
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
                    re ||
                      (re = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotAllowedError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e.message,
                  ),
                    m.open(
                      _e.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: Rt(e)
                          ? o("WAWebGuidePopup.react").Messaging
                              .CAMERA_BLOCKED_BY_SYSTEM
                          : o("WAWebGuidePopup.react").Messaging.CAMERA_FAIL,
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
                    oe ||
                      (oe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotReadableError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    m.open(
                      _e.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: o("WAWebGuidePopup.react").Messaging
                          .CAMERA_UNAVAILABLE,
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
            )
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebGetUserMediaErrors").GetUserMediaError,
                function (e) {
                  o("WAWebCoreActionsODS").logCallMediaCameraError();
                  var t = Date.now() - _;
                  (o("WALogger").LOG(
                    ae ||
                      (ae = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] GetUserMediaError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    m.open(
                      _e.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
        Ht.apply(this, arguments)
      );
    }
    function Gt(e) {
      var t = e.facingMode,
        n = e.params,
        r = e.selectedDeviceId;
      if (n != null)
        return t != null
          ? [
              zt({ facing: { mode: t, constraintType: Ce.Ideal }, params: n }),
              zt({ params: n }),
            ]
          : [
              zt({
                device: { deviceId: r, constraintType: Ce.Exact },
                params: n,
              }),
              zt({
                device: { deviceId: r, constraintType: Ce.Ideal },
                params: n,
              }),
              zt({ params: n }),
            ];
    }
    function zt(e) {
      var t,
        n = e.device,
        a = e.facing,
        i = e.params,
        l = r("WAWebVoipCameraTrackConstraints")(i);
      if (
        (o("WALogger").LOG(
          M ||
            (M = babelHelpers.taggedTemplateLiteralLoose([
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
          if (n.constraintType === Ce.None) break e;
          if (n.constraintType === Ce.Exact) {
            l.deviceId = { exact: s };
            break e;
          }
          if (n.constraintType === Ce.Ideal) {
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
          if (a.constraintType === Ce.None) break e;
          if (a.constraintType === Ce.Exact) {
            l.facingMode = { exact: a.mode };
            break e;
          }
          if (a.constraintType === Ce.Ideal) {
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
    function jt(e) {
      return {
        video: {
          width: { ideal: e.width },
          height: { ideal: e.height },
          frameRate: { ideal: e.maxFps },
        },
        audio: !1,
      };
    }
    function Kt(e) {
      return Qt.apply(this, arguments);
    }
    function Qt() {
      return (
        (Qt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  ie ||
                    (ie = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] mediaDevices API not supported",
                    ])),
                ),
                []
              );
            var m = r === !0 || (o("WAWebUA").UA.isSafari && n === !0),
              p = o("WAWebUA").UA.isFirefox && a != null;
            if (!(c || m)) {
              if (!fe()) {
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
                    yield ye(d);
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
                le ||
                  (le = babelHelpers.taggedTemplateLiteralLoose([
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
                  se ||
                    (se = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] error loading devices: ",
                      "",
                    ])),
                  e,
                ),
              []
            );
          }
        })),
        Qt.apply(this, arguments)
      );
    }
    function Xt(e) {
      return Yt.apply(this, arguments);
    }
    function Yt() {
      return (
        (Yt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
          if (r("isStringNullOrEmpty")(t)) return e.getUserMedia({ video: !0 });
          try {
            return yield e.getUserMedia({ video: { deviceId: { exact: t } } });
          } catch (t) {
            if (!xt(t)) throw t;
            return (
              o("WALogger").LOG(
                ue ||
                  (ue = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] selected camera unavailable, falling back to default camera: ",
                    "",
                  ])),
                t,
              ),
              e.getUserMedia({ video: !0 })
            );
          }
        })),
        Yt.apply(this, arguments)
      );
    }
    function Jt(e) {
      return Zt.apply(this, arguments);
    }
    function Zt() {
      return (
        (Zt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceId,
            n = e.isInActiveCall,
            r = e.skipPermissionRequest,
            a = e.targetWindow,
            i = yield Kt({
              isInActiveCall: n,
              skipPermissionRequest: r,
              targetWindow: a,
            });
          return i.some(function (e) {
            return e.deviceId === t;
          })
            ? !0
            : (o("WALogger").ERROR(
                ce ||
                  (ce = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getIsValidVideoDevice: device not found in available devices: ",
                    "",
                  ])),
                t,
              ),
              !1);
        })),
        Zt.apply(this, arguments)
      );
    }
    var en = 25e3,
      tn = 250,
      nn = 500;
    function rn(e) {
      var t = e;
      return t.closed === !0;
    }
    function on(e, t) {
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
                rn(e) && t("popout closed");
              } catch (e) {
                t("popout inaccessible");
              }
            }, tn)));
        }, nn)),
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
    function an(e, t, n) {
      var a = new AbortController(),
        i = !1,
        l = function (n) {
          i ||
            ((i = !0),
            o("WALogger").LOG(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireDesktopStream] aborted: ",
                  "",
                ])),
              n,
            ),
            t(),
            a.abort());
        },
        s = self.setTimeout(function () {
          return l("getDisplayMedia timed out after " + en + "ms");
        }, en),
        u = n != null ? on(n, l) : null;
      return (
        e.catch(r("WAWebNoop")),
        r("WAPromiseRaceAbort")(e, a.signal)
          .catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull))
          .finally(function () {
            (self.clearTimeout(s), u != null && u());
          })
      );
    }
    function ln(e) {
      return sn.apply(this, arguments);
    }
    function sn() {
      return (
        (sn = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.params,
            r = e.targetWindow,
            a = n ? jt(n) : { video: !0 },
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
              p = yield an(d, m, r).catch(function (e) {
                if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
                  o("WAWebCoreActionsODS").logCallScreenShareDenied();
                  var t = Date.now() - s;
                  if (t < Ee) {
                    o("WALogger").LOG(
                      de ||
                        (de = babelHelpers.taggedTemplateLiteralLoose([
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
                      _e.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
              if (_ < Ee) {
                var f =
                  r != null
                    ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                    : o("WAWebModalManager").ModalManager;
                f.open(
                  _e.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
        sn.apply(this, arguments)
      );
    }
    ((l.getBrowserAudioProcessingStatus = Se),
      (l.resetPermissionsCheckedForTest = Le),
      (l.queryCameraPermissionStrict = je),
      (l.queryPermissionStatus = Qe),
      (l.checkVoipCallJoinPermissions = Ze),
      (l.checkVoipDevicePermissions = lt),
      (l.acquireVoipMediaStream = $t),
      (l.earlyAcquireMic = Mt),
      (l.cleanupEarlyAcquiredMic = wt),
      (l.getAvailableVideoDevices = Kt),
      (l.getIsValidVideoDevice = Jt));
  },
  98,
);
