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
    "WAWebODS",
    "WAWebUA",
    "WAWebUserPrefsVoip",
    "WAWebVoipActivityTracker",
    "WAWebVoipBrowserAudioStatus",
    "WAWebVoipCameraPrewarm",
    "WAWebVoipCameraTrackConstraints",
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipGatingUtils",
    "WAWebVoipLocalVideoPolicy",
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
      _e,
      fe,
      ge,
      he,
      ye = he || (he = o("react"));
    function Ce() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    var be = 200,
      ve = new WeakMap();
    function Se(e) {
      var t = ve.get(e);
      if (t != null) return t;
      var r = n("asyncToGeneratorRuntime")
        .asyncToGenerator(function* () {
          var t = Date.now(),
            n = yield dn(e),
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
            ve.get(e) === r && ve.delete(e);
          }, be);
        });
      return (ve.set(e, r), r);
    }
    var Re = n("$InternalEnum").Mirrored(["None", "Ideal", "Exact"]),
      Le = new Set([
        "ConstraintNotSatisfiedError",
        "OverconstrainedError",
        "NotFoundError",
      ]),
      Ee = null;
    function ke() {
      return Ee;
    }
    var Ie = { microphone: null, camera: null },
      Te = 1e3,
      De = 1e4,
      xe = 3e4,
      $e = 1e4,
      Pe = 1e3,
      Ne = 3e4,
      Me = null;
    function we(e) {
      return Me !== e;
    }
    function Ae(e) {
      Me === e && (Me = null);
    }
    function Fe(e) {
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
    function Oe(e, t) {
      var n = Fe(e);
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
          Ae(e),
          !0);
    }
    function Be(e) {
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
      })(babelHelpers.extends({ checkVideo: e }, Ie));
    }
    function We() {
      var e,
        t = r("WAWebCallCollection").activeCall;
      return {
        isCallLinkPreview:
          (t == null ? void 0 : t.isInCallLinkPreview()) === !0,
        scheduledCallId: (e = t == null ? void 0 : t.id) != null ? e : null,
      };
    }
    function qe(e, t) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari
        ? De
        : t.isCallLinkPreview
          ? xe
          : null;
    }
    function Ue(e) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari ? $e : null;
    }
    function Ve(e) {
      return He.apply(this, arguments);
    }
    function He() {
      return (
        (He = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!Oe(e, "unmute start")) {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (
              !Oe(e, "after stack load") &&
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
        He.apply(this, arguments)
      );
    }
    function Ge(e) {
      return ze.apply(this, arguments);
    }
    function ze() {
      return (
        (ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!we(e) && !Oe(e, "before permission query")) {
            var t = yield Je(!0),
              n = t.cameraPermission;
            if (!we(e) && !Oe(e, "after permission query")) {
              if (n === "granted") {
                o("WALogger").LOG(
                  F ||
                    (F = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:acquireCameraStream] camera permission granted after timeout; retrying video capture",
                    ])),
                );
                try {
                  yield Ve(e);
                } finally {
                  Ae(e);
                }
                return;
              }
              var r = Date.now() - e.retryStartedAt;
              if (n === "denied" || (!e.isCallLinkPreviewRetry && r >= Ne)) {
                (Ae(e),
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
              je(e);
            }
          }
        })),
        ze.apply(this, arguments)
      );
    }
    function je(e) {
      self.setTimeout(function () {
        we(e) ||
          Ge(e).catch(function (e) {
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
      }, Pe);
    }
    function Ke(e) {
      var t;
      if (!(!o("WAWebUA").UA.isSafari && !e.isCallLinkPreview)) {
        var n = {
            isCallLinkPreviewRetry: e.isCallLinkPreview,
            retryStartedAt: Date.now(),
            scheduledCallId: e.scheduledCallId,
          },
          r = Fe(n);
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
        ((Me = n),
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
          je(n));
      }
    }
    function Qe(e, t, a, i, l) {
      var s = null,
        u = !1;
      return (
        e.catch(r("WAWebNoop")),
        (ge || (ge = n("Promise")))
          .race([
            e,
            new ge(function (e) {
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
    function Xe() {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (navigator === void 0 || !navigator.permissions) return null;
          try {
            var e = yield navigator.permissions.query({ name: "camera" });
            return e.state;
          } catch (e) {
            return null;
          }
        })),
        Ye.apply(this, arguments)
      );
    }
    function Je(e) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (
        (Ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        Ze.apply(this, arguments)
      );
    }
    function et(e) {
      if (
        r("WAWebEnvironment").isWindows &&
        !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
      )
        return !1;
      var t =
        e.camera &&
        o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed() &&
        !Ce();
      return (
        (e.microphone &&
          o("WAWebMediaPermissionsUtils").getKnownMediaPermissionState(
            "microphone",
          ) !== "granted") ||
        (t &&
          o("WAWebMediaPermissionsUtils").getKnownMediaPermissionState(
            "camera",
          ) !== "granted")
      );
    }
    function tt(e) {
      return nt.apply(this, arguments);
    }
    function nt() {
      return (
        (nt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e === "denied") return "camera_denied";
          var t = yield Xe();
          return t === "denied" || (e === "timed_out" && t === "prompt")
            ? "camera_denied"
            : "camera_unavailable";
        })),
        nt.apply(this, arguments)
      );
    }
    function rt(e) {
      return ot.apply(this, arguments);
    }
    function ot() {
      return (
        (ot = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.abortSignal,
            r = e.checkVideo,
            a = e.options,
            i = e.originatingCall,
            l = yield dt(!1, i, n, {
              suppressPromptGuide: a == null ? void 0 : a.suppressPromptGuide,
            });
          if (!l || !r || Ce())
            return { canJoin: l, reason: null, videoMuted: !1 };
          var s = yield Xe();
          if (at(i, n)) return { canJoin: !1, reason: null, videoMuted: !1 };
          if (s === "denied")
            return { canJoin: !0, reason: "camera_denied", videoMuted: !0 };
          var u =
              (t = a == null ? void 0 : a.cameraTimeoutMs) != null
                ? t
                : s === "prompt" && !o("WAWebUA").UA.isSafari
                  ? xe
                  : De,
            c = yield pt({
              captureTypeOverride: o("WAWebMediaCaptureStreamType")
                .WAWebMediaCaptureStreamType.CAMERA,
              checkVideo: !0,
              showFailureModal: !1,
              timeoutLimitOverride: u,
              originatingCall: i,
              abortSignal: n,
            });
          return at(i, n)
            ? { canJoin: !1, reason: null, videoMuted: !1 }
            : c === "granted"
              ? { canJoin: !0, reason: null, videoMuted: !1 }
              : { canJoin: !0, reason: yield tt(c), videoMuted: !0 };
        })),
        ot.apply(this, arguments)
      );
    }
    function at(e, t) {
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
    function it(e, t) {
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
    var lt = { not_acquired: "unavailable", timed_out: "timed_out" };
    function st(e) {
      return e instanceof o("WAWebGetUserMediaErrors").NotAllowedError
        ? "denied"
        : "unavailable";
    }
    function ut(e, t) {
      (e || (Ie.microphone = !0), t && (Ie.camera = !0));
    }
    function ct(e, t, n) {
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
    function dt(e, t, n, r) {
      return mt.apply(this, arguments);
    }
    function mt() {
      return (
        (mt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield pt({
              checkVideo: e,
              onFailureGuideConfirm:
                r == null ? void 0 : r.onFailureGuideConfirm,
              showFailureModal: !0,
              shouldOpenFailureGuide:
                r == null ? void 0 : r.shouldOpenFailureGuide,
              suppressPromptGuide: r == null ? void 0 : r.suppressPromptGuide,
              originatingCall: t,
              abortSignal: n,
            });
            return o === "granted";
          },
        )),
        mt.apply(this, arguments)
      );
    }
    function pt(e) {
      return _t.apply(this, arguments);
    }
    function _t() {
      return (
        (_t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.abortSignal,
            n = e.captureTypeOverride,
            a = e.checkVideo,
            i = e.onFailureGuideConfirm,
            l = e.originatingCall,
            s = e.shouldOpenFailureGuide,
            u = e.showFailureModal,
            c = e.suppressPromptGuide,
            d = e.timeoutLimitOverride;
          if (
            r("WAWebEnvironment").isWindows &&
            !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
          )
            return ((Ie.microphone = !0), (Ie.camera = !0), "granted");
          var m = a && !Ce(),
            p = o(
              "WAWebVoipPermissionCheckCaptureOwner",
            ).getPermissionCheckOwner(l),
            _ = yield Je(a);
          if (yt(l, t)) return "unavailable";
          var f =
              n != null
                ? n
                : m
                  ? o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                      .CAMERA_AND_MICROPHONE
                  : o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                      .MICROPHONE,
            g =
              f ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA,
            h =
              f ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA_AND_MICROPHONE;
          try {
            ct(g, h, !0);
            var y = yield $t(f, m, p, t, u, d, c);
            return (
              Rt(y, f, _),
              ht(y, {
                abortSignal: t,
                isCameraOnly: g,
                originatingCall: l,
                shouldCheckVideo: m,
              })
            );
          } catch (e) {
            if (Ct(l, e, t)) return "unavailable";
            St(e, f, _);
            var C = st(e);
            return (Et(e, f, m, _, u && (yield ft(s, C)), i), C);
          } finally {
            ct(g, h, !1);
          }
        })),
        _t.apply(this, arguments)
      );
    }
    function ft(e, t) {
      return gt.apply(this, arguments);
    }
    function gt() {
      return (
        (gt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e == null) return !0;
          try {
            return yield e(t);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  B ||
                    (B = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:checkVoipDevicePermissions] could not decide on the failure guide",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              !0
            );
          }
        })),
        gt.apply(this, arguments)
      );
    }
    function ht(e, t) {
      var n = t.abortSignal,
        r = t.isCameraOnly,
        a = t.originatingCall,
        i = t.shouldCheckVideo,
        l = lt[e];
      return l != null
        ? l
        : (ut(r, i),
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
    function yt(e, t) {
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
    function Ct(e, t, n) {
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
    var bt = 0.01;
    function vt(e, t) {
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
    function St(e, t, n) {
      var a = r("getErrorSafe")(e);
      (o("WAWebGetUserMediaErrors").isDeniedBySystem(e) &&
        r("WAWebODS").incr("web.call.permission.denied_by_system"),
        vt(t, n) &&
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
            Lt(t, n),
          )
          .catching(a)
          .sendLogs("voip-permission-check-failed", {
            sampling: bt,
            employeeSampling: 1,
          }));
    }
    function Rt(e, t, n) {
      e === "timed_out" &&
        (r("WAWebODS").incr("web.call.permission.timed_out"),
        vt(t, n) &&
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
            Lt(t, n),
          )
          .sendLogs("voip-permission-check-failed", {
            sampling: bt,
            employeeSampling: 1,
          }));
    }
    function Lt(e, t) {
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? "mic=" + t.micPermission
        : "mic=" + t.micPermission + ", camera=" + t.cameraPermission;
    }
    function Et(e, t, n, a, i, l) {
      if (
        (i === void 0 && (i = !0),
        e instanceof o("WAWebGetUserMediaErrors").NotAllowedError)
      ) {
        (r("WAWebODS").incr("web.call.permission.denied"),
          i &&
            kt(
              Tt({
                captureType: t,
                error: e,
                prePromptPermissions: a,
                shouldCheckVideo: n,
              }),
              o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
              l,
            ));
        return;
      }
      if (
        e instanceof o("WAWebGetUserMediaErrors").NotReadableError ||
        e instanceof o("WAWebGetUserMediaErrors").SourceUnavailableError
      ) {
        (r("WAWebODS").incr("web.call.permission.device_error"),
          i &&
            kt(It(t), o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE, l));
        return;
      }
      e instanceof o("WAWebGetUserMediaErrors").GetUserMediaError &&
        i &&
        kt(
          n
            ? o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_MISSING
            : o("WAWebGuidePopup.react").Messaging.MIC_MISSING,
          o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
          l,
        );
    }
    function kt(e, t, n) {
      o("WAWebModalManager").ModalManager.open(
        ye.jsx(o("WAWebGuidePopup.react").GuidePopup, {
          messaging: e,
          type: t,
          onConfirm:
            n == null
              ? void 0
              : function () {
                  (n(), o("WAWebModalManager").closeModalManager());
                },
          featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
          hideReloadHint:
            t === o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK &&
            o(
              "WAWebVoipDeviceAccessRecoveryGating",
            ).canAllowBlockedDeviceDuringCall(),
        }),
      );
    }
    function It(e) {
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? o("WAWebGuidePopup.react").Messaging.MIC_UNAVAILABLE
        : e ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
          ? o("WAWebGuidePopup.react").Messaging.CAMERA_UNAVAILABLE
          : o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_UNAVAILABLE;
    }
    function Tt(e) {
      var t = e.captureType,
        n = e.error,
        r = e.prePromptPermissions,
        o = e.shouldCheckVideo;
      return Dt(n) ? xt(t) : it(o, r);
    }
    function Dt(e) {
      return (
        !r("WAWebEnvironment").isWindows &&
        o("WAWebGetUserMediaErrors").isDeniedBySystem(e)
      );
    }
    function xt(e) {
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? o("WAWebGuidePopup.react").Messaging.MIC_BLOCKED_BY_SYSTEM
        : e ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
          ? o("WAWebGuidePopup.react").Messaging.CAMERA_BLOCKED_BY_SYSTEM
          : o("WAWebGuidePopup.react").Messaging
              .CAMERA_AND_MIC_BLOCKED_BY_SYSTEM;
    }
    function $t(e, t, n, r, o, a, i) {
      return Pt.apply(this, arguments);
    }
    function Pt() {
      return (
        (Pt = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s) {
            var u = o(
                "WAWebVoipPermissionCheckCaptureOwner",
              ).registerPermissionCheckCaptureForKeys(
                n.registryKeys,
                r("WAWebNoop"),
              ),
              c = i != null ? i : !0,
              d = s === !0 || !c,
              m = l != null ? l : Be(t) ? Number.POSITIVE_INFINITY : void 0,
              p = l == null ? null : Date.now() + l,
              _ = wt(
                t,
                e !==
                  o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                    .CAMERA,
              );
            try {
              try {
                return yield Nt(e, m, n.registryKeys, _, a, d, l);
              } catch (t) {
                if (_ == null || !At(t)) throw t;
                if ((a == null ? void 0 : a.aborted) === !0)
                  return (
                    o("WALogger").LOG(
                      W ||
                        (W = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the permission check was cancelled",
                        ])),
                    ),
                    "not_acquired"
                  );
                if (u.wasReleased())
                  return (
                    o("WALogger").LOG(
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
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
                      U ||
                        (U = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the originating call ended",
                        ])),
                    ),
                    "not_acquired"
                  );
                o("WALogger").LOG(
                  V ||
                    (V = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:checkVoipDevicePermissions] selected camera unavailable, retrying permission check with default camera: ",
                      "",
                    ])),
                  String(t),
                );
                var f = p == null ? void 0 : Math.max(0, p - Date.now());
                return f === 0
                  ? "timed_out"
                  : yield Nt(
                      e,
                      f != null ? f : m,
                      n.registryKeys,
                      void 0,
                      a,
                      d,
                      f,
                    );
              }
            } finally {
              u.release();
            }
          },
        )),
        Pt.apply(this, arguments)
      );
    }
    function Nt(e, t, n, r, o, a, i) {
      return Mt.apply(this, arguments);
    }
    function Mt() {
      return (
        (Mt = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                (g = Qe(m, p, s, "checkVoipDevicePermissions", function () {
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
                      H ||
                        (H = babelHelpers.taggedTemplateLiteralLoose([
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
                      G ||
                        (G = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] permission capture was cancelled",
                        ])),
                    ),
                    "not_acquired")
                  : !f || _.wasReleased()
                    ? (o("WALogger").LOG(
                        z ||
                          (z = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] permission capture was disposed before completing",
                          ])),
                      ),
                      "not_acquired")
                    : (o("WALogger").LOG(
                        j ||
                          (j = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] permission capture timed out",
                          ])),
                      ),
                      "timed_out")
                : _.wasReleased()
                  ? (o("WALogger").LOG(
                      K ||
                        (K = babelHelpers.taggedTemplateLiteralLoose([
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
        Mt.apply(this, arguments)
      );
    }
    function wt(e, t) {
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
    function At(e) {
      return e instanceof Error && Le.has(e.name);
    }
    function Ft(e) {
      return Ot.apply(this, arguments);
    }
    function Ot() {
      return (
        (Ot = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia
            ? (o("WALogger").ERROR(
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
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
                  return Vt(r);
                }
                if (
                  ((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                  t.type === "camera"
                ) {
                  var o = t.type,
                    a = babelHelpers.objectWithoutPropertiesLoose(t, s);
                  return Yt({
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
                  return vn({ params: l.params, targetWindow: l.targetWindow });
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })(t);
        })),
        Ot.apply(this, arguments)
      );
    }
    var Bt = null;
    function Wt() {
      var e;
      if (Bt == null) {
        var t = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
        o("WALogger").LOG(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [EarlyMicAcquire] Acquiring microphone in gesture (device=",
              ")",
            ])),
          (e = t == null ? void 0 : t.slice(0, 8)) != null ? e : "default",
        );
        var n = (Bt = Ft({
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
              Bt === n && (Bt = null),
              null
            );
          }));
      }
    }
    function qt() {
      if (Bt != null) {
        var e = Bt;
        ((Bt = null),
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
    var Ut = ["exact", "ideal", "none"];
    function Vt(e) {
      return Ht.apply(this, arguments);
    }
    function Ht() {
      return (
        (Ht = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            X ||
              (X = babelHelpers.taggedTemplateLiteralLoose([
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
            f = Gt(_, l),
            g = Be(!1),
            h = yield o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
              timeoutLimit: g ? 1 / 0 : void 0,
              timeoutCallback: a ? r("WAWebNoop") : void 0,
              targetWindow: p,
              mediaConstraints: c
                ? Ut.slice(0, a ? 1 : 3).map(function (e) {
                    return Kt(e === "none" ? null : d, e, c);
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
                R = yield (v = navigator.permissions) == null
                  ? void 0
                  : v.query({ name: "microphone" });
              b = (S = R == null ? void 0 : R.state) != null ? S : null;
            } catch (e) {}
          var L = Ue(b),
            E = L != null ? Qe(y, C, L, "acquireMicrophoneStream") : y;
          return E.then(function (e) {
            if (e != null && !a)
              try {
                jt(e, (c == null ? void 0 : c.autoGainControl) !== !1);
              } catch (e) {
                o("WALogger").LOG(
                  Y ||
                    (Y = babelHelpers.taggedTemplateLiteralLoose([
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
                        ye.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                          messaging: Dt(e)
                            ? o("WAWebGuidePopup.react").Messaging
                                .MIC_BLOCKED_BY_SYSTEM
                            : o("WAWebGuidePopup.react").Messaging.MIC_FAIL,
                          type: o("WAWebGuidePopup.react").GuidePopupType
                            .GUIDE_UNBLOCK,
                          featureSurface: o("WAWebGuidePopup.react")
                            .FeatureSurface.VOIP,
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
                      ye.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
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
                      ye.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
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
        })),
        Ht.apply(this, arguments)
      );
    }
    function Gt(e, t) {
      return t
        ? function (t) {
            !zt(e) &&
              !zt(o("WAWebVoipPopoutModalManager").VoipPopoutModalManager) &&
              e.open(t);
          }
        : function (t) {
            return e.open(t);
          };
    }
    function zt(e) {
      var t = !1;
      return (
        e.exists(function (e) {
          t = t || e;
        }),
        t
      );
    }
    function jt(e, t) {
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
        ((Ee = { supported: r, applied: s }),
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
        ((Ee = {
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
    function Kt(e, t, n) {
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
    function Qt(e) {
      return Xt.apply(this, arguments);
    }
    function Xt() {
      return (
        (Xt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
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
                Z ||
                  (Z = babelHelpers.taggedTemplateLiteralLoose([
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
        Xt.apply(this, arguments)
      );
    }
    function Yt(e) {
      return Jt.apply(this, arguments);
    }
    function Jt() {
      return (
        (Jt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.facingMode,
            r = e.isAVUpgrade,
            a = e.params,
            i = e.selectedDeviceId,
            l = e.targetWindow;
          if (Ce()) return null;
          var s = yield Xe();
          if (s === "denied") {
            o("WALogger").LOG(
              ee ||
                (ee = babelHelpers.taggedTemplateLiteralLoose([
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
          var c = yield Qt({
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
            p = We(),
            _ = Date.now();
          o("WALogger").LOG(
            te ||
              (te = babelHelpers.taggedTemplateLiteralLoose([
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
              timeoutLimit: Be(!0) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: l,
              mediaConstraints: an({
                facingMode: n,
                params: a,
                selectedDeviceId: i,
              }),
            }),
            g = f.asyncStream,
            h = f.disposeStream,
            y = qe(s, p),
            C =
              y != null
                ? Qe(g, h, y, "acquireCameraStream", function () {
                    s === "prompt" && Ke(p);
                  })
                : g;
          return Zt(C, {
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
                  ne ||
                    (ne = babelHelpers.taggedTemplateLiteralLoose([
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
                  re ||
                    (re = babelHelpers.taggedTemplateLiteralLoose([
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
                    oe ||
                      (oe = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotAllowedError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e.message,
                  ),
                    m.open(
                      ye.jsx(o("WAWebGuidePopup.react").GuidePopup, {
                        messaging: Dt(e)
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
                    ae ||
                      (ae = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotReadableError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    m.open(
                      ye.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
                    ie ||
                      (ie = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] GetUserMediaError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    m.open(
                      ye.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
        Jt.apply(this, arguments)
      );
    }
    function Zt(e, t) {
      var n = t.timeoutMs,
        r = n != null ? Date.now() + n : null;
      return e.catch(function (e) {
        return en(
          e,
          babelHelpers.extends({}, t, {
            timeoutMs: r != null ? Math.max(0, r - Date.now()) : null,
          }),
        );
      });
    }
    function en(e, t) {
      return tn.apply(this, arguments);
    }
    function tn() {
      return (
        (tn = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            !At(e)
          )
            throw e;
          var m = yield rn(u, c);
          if (
            yn(c) ||
            ((n = r("WAWebCallCollection").activeCall) == null
              ? void 0
              : n.id) !== s
          )
            throw e;
          var p = m == null ? "default camera" : "same-name camera";
          o("WALogger").LOG(
            le ||
              (le = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:acquireCameraStream] call window has no camera ",
                ", retrying with its ",
                "",
              ])),
            u.slice(0, 8),
            p,
          );
          var _ = yield nn({
            deviceId: m,
            featureSurface: i,
            params: l,
            targetWindow: c,
            timeoutMs: d,
          });
          return (
            o("WALogger").LOG(
              se ||
                (se = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireCameraStream] call window camera retry with its ",
                  " done, hasStream=",
                  "",
                ])),
              p,
              String(_ != null),
            ),
            _
          );
        })),
        tn.apply(this, arguments)
      );
    }
    function nn(e) {
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
            ln({
              device: { deviceId: t, constraintType: Re.Exact },
              params: r,
            }),
          ],
        }),
        s = l.asyncStream,
        u = l.disposeStream;
      return i != null ? Qe(s, u, i, "acquireCameraStream") : s;
    }
    function rn(e, t) {
      return on.apply(this, arguments);
    }
    function on() {
      return (
        (on = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a,
            i = (a = t.navigator) == null ? void 0 : a.mediaDevices;
          if (i == null) return null;
          try {
            var l,
              s,
              u = yield (ge || (ge = n("Promise"))).all([
                o("WAWebAudioDeviceManager").coalescedEnumerateDevices(
                  navigator.mediaDevices,
                ),
                o("WAWebAudioDeviceManager").coalescedEnumerateDevices(i),
              ]),
              c = u[0],
              d = u[1],
              m =
                (l = c.find(function (t) {
                  return t.kind === "videoinput" && t.deviceId === e;
                })) == null
                  ? void 0
                  : l.label;
            if (r("isStringNullOrEmpty")(m)) return null;
            var p =
              (s = d.find(function (e) {
                return e.kind === "videoinput" && e.label === m;
              })) == null
                ? void 0
                : s.deviceId;
            return r("isStringNullOrEmpty")(p) ? null : p;
          } catch (e) {
            return (
              o("WALogger").WARN(
                ue ||
                  (ue = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] call window camera lookup failed: ",
                    "",
                  ])),
                String(e),
              ),
              null
            );
          }
        })),
        on.apply(this, arguments)
      );
    }
    function an(e) {
      var t = e.facingMode,
        n = e.params,
        r = e.selectedDeviceId;
      if (n != null)
        return t != null
          ? [
              ln({ facing: { mode: t, constraintType: Re.Ideal }, params: n }),
              ln({ params: n }),
            ]
          : [
              ln({
                device: { deviceId: r, constraintType: Re.Exact },
                params: n,
              }),
              ln({
                device: { deviceId: r, constraintType: Re.Ideal },
                params: n,
              }),
              ln({ params: n }),
            ];
    }
    function ln(e) {
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
          if (n.constraintType === Re.None) break e;
          if (n.constraintType === Re.Exact) {
            l.deviceId = { exact: s };
            break e;
          }
          if (n.constraintType === Re.Ideal) {
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
          if (a.constraintType === Re.None) break e;
          if (a.constraintType === Re.Exact) {
            l.facingMode = { exact: a.mode };
            break e;
          }
          if (a.constraintType === Re.Ideal) {
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
    function sn(e) {
      return {
        video: {
          width: { ideal: e.width },
          height: { ideal: e.height },
          frameRate: { ideal: e.maxFps },
        },
        audio: !1,
      };
    }
    function un(e) {
      return cn.apply(this, arguments);
    }
    function cn() {
      return (
        (cn = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  ce ||
                    (ce = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] mediaDevices API not supported",
                    ])),
                ),
                []
              );
            var m = r === !0 || (o("WAWebUA").UA.isSafari && n === !0),
              p = o("WAWebUA").UA.isFirefox && a != null;
            if (!(c || m)) {
              if (!Ce()) {
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
                    yield Se(d);
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
                de ||
                  (de = babelHelpers.taggedTemplateLiteralLoose([
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
                  me ||
                    (me = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] error loading devices: ",
                      "",
                    ])),
                  e,
                ),
              []
            );
          }
        })),
        cn.apply(this, arguments)
      );
    }
    function dn(e) {
      return mn.apply(this, arguments);
    }
    function mn() {
      return (
        (mn = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
          if (r("isStringNullOrEmpty")(t)) return e.getUserMedia({ video: !0 });
          try {
            return yield e.getUserMedia({ video: { deviceId: { exact: t } } });
          } catch (t) {
            if (!At(t)) throw t;
            return (
              o("WALogger").LOG(
                pe ||
                  (pe = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] selected camera unavailable, falling back to default camera: ",
                    "",
                  ])),
                t,
              ),
              e.getUserMedia({ video: !0 })
            );
          }
        })),
        mn.apply(this, arguments)
      );
    }
    function pn(e) {
      return _n.apply(this, arguments);
    }
    function _n() {
      return (
        (_n = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceId,
            n = e.isInActiveCall,
            r = e.skipPermissionRequest,
            a = e.targetWindow,
            i = yield un({
              isInActiveCall: n,
              skipPermissionRequest: r,
              targetWindow: a,
            });
          return i.some(function (e) {
            return e.deviceId === t;
          })
            ? !0
            : (o("WALogger").ERROR(
                _e ||
                  (_e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getIsValidVideoDevice: device not found in available devices: ",
                    "",
                  ])),
                t,
              ),
              !1);
        })),
        _n.apply(this, arguments)
      );
    }
    var fn = 25e3,
      gn = 250,
      hn = 500;
    function yn(e) {
      var t = e;
      return t.closed === !0;
    }
    function Cn(e, t) {
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
                yn(e) && t("popout closed");
              } catch (e) {
                t("popout inaccessible");
              }
            }, gn)));
        }, hn)),
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
    function bn(e, t, n) {
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
          return l("getDisplayMedia timed out after " + fn + "ms");
        }, fn),
        u = n != null ? Cn(n, l) : null;
      return (
        e.catch(r("WAWebNoop")),
        r("WAPromiseRaceAbort")(e, a.signal)
          .catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull))
          .finally(function () {
            (self.clearTimeout(s), u != null && u());
          })
      );
    }
    function vn(e) {
      return Sn.apply(this, arguments);
    }
    function Sn() {
      return (
        (Sn = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.params,
            r = e.targetWindow,
            a = n ? sn(n) : { video: !0 },
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
            var c = yield o("WAWebMediaCapture").start({
                type: o("WAWebMediaCaptureStreamType")
                  .WAWebMediaCaptureStreamType.DESKTOP,
                featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
                mediaConstraints: [l],
                targetWindow: r,
              }),
              d = c.asyncStream,
              m = c.disposeStream,
              p = yield bn(d, m, r).catch(function (e) {
                if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
                  o("WAWebCoreActionsODS").logCallScreenShareDenied();
                  var t = Date.now() - s;
                  if (t < Te) {
                    o("WALogger").LOG(
                      fe ||
                        (fe = babelHelpers.taggedTemplateLiteralLoose([
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
                      ye.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
              if (_ < Te) {
                var f =
                  r != null
                    ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                    : o("WAWebModalManager").ModalManager;
                f.open(
                  ye.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
        Sn.apply(this, arguments)
      );
    }
    ((l.getBrowserAudioProcessingStatus = ke),
      (l.queryCameraPermissionStrict = Xe),
      (l.queryPermissionStatus = Je),
      (l.mayPromptForMediaPermission = et),
      (l.checkVoipCallJoinPermissions = rt),
      (l.checkVoipDevicePermissions = dt),
      (l.acquireVoipMediaStream = Ft),
      (l.earlyAcquireMic = Wt),
      (l.cleanupEarlyAcquiredMic = qt),
      (l.getAvailableVideoDevices = un),
      (l.getIsValidVideoDevice = pn));
  },
  98,
);
