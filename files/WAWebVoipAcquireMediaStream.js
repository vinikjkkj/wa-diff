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
      ue,
      ce,
      de,
      me = de || (de = o("react"));
    function pe() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    var _e = 200,
      fe = new WeakMap();
    function ge(e) {
      var t = fe.get(e);
      if (t != null) return t;
      var r = n("asyncToGeneratorRuntime")
        .asyncToGenerator(function* () {
          var t = Date.now(),
            n = yield Bt(e),
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
            fe.get(e) === r && fe.delete(e);
          }, _e);
        });
      return (fe.set(e, r), r);
    }
    var he = n("$InternalEnum").Mirrored(["None", "Ideal", "Exact"]),
      ye = new Set([
        "ConstraintNotSatisfiedError",
        "OverconstrainedError",
        "NotFoundError",
      ]),
      Ce = null;
    function be() {
      return Ce;
    }
    var ve = { microphone: null, camera: null };
    function Se() {
      ((ve.microphone = null), (ve.camera = null));
    }
    var Re = 1e3,
      Le = 1e4,
      Ee = 3e4,
      ke = 1e4,
      Ie = 1e3,
      Te = 3e4,
      De = null;
    function xe(e) {
      return De !== e;
    }
    function $e(e) {
      De === e && (De = null);
    }
    function Pe(e) {
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
    function Ne(e, t) {
      var n = Pe(e);
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
          $e(e),
          !0);
    }
    function Me(e) {
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
      })(babelHelpers.extends({ checkVideo: e }, ve));
    }
    function we() {
      var e,
        t = r("WAWebCallCollection").activeCall;
      return {
        isCallLinkPreview:
          (t == null ? void 0 : t.isInCallLinkPreview()) === !0,
        scheduledCallId: (e = t == null ? void 0 : t.id) != null ? e : null,
      };
    }
    function Ae(e, t) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari
        ? Le
        : t.isCallLinkPreview
          ? Ee
          : null;
    }
    function Fe(e) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari ? ke : null;
    }
    function Oe(e) {
      return Be.apply(this, arguments);
    }
    function Be() {
      return (
        (Be = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!Ne(e, "unmute start")) {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (
              !Ne(e, "after stack load") &&
              (t == null ? void 0 : t.type) === "web"
            ) {
              var n = yield t.setCallVideoMute(!1);
              o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:acquireCameraStream] camera permission retry setCallVideoMute(false) status: ",
                    "",
                  ])),
                n,
              );
            }
          }
        })),
        Be.apply(this, arguments)
      );
    }
    function We(e) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!xe(e) && !Ne(e, "before permission query")) {
            var t = yield je(!0),
              n = t.cameraPermission;
            if (!xe(e) && !Ne(e, "after permission query")) {
              if (n === "granted") {
                o("WALogger").LOG(
                  w ||
                    (w = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:acquireCameraStream] camera permission granted after timeout; retrying video capture",
                    ])),
                );
                try {
                  yield Oe(e);
                } finally {
                  $e(e);
                }
                return;
              }
              var r = Date.now() - e.retryStartedAt;
              if (n === "denied" || (!e.isCallLinkPreviewRetry && r >= Te)) {
                ($e(e),
                  o("WALogger").LOG(
                    A ||
                      (A = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] camera permission retry stopped: permission=",
                        ", elapsed=",
                        "ms",
                      ])),
                    n,
                    r,
                  ));
                return;
              }
              Ue(e);
            }
          }
        })),
        qe.apply(this, arguments)
      );
    }
    function Ue(e) {
      self.setTimeout(function () {
        xe(e) ||
          We(e).catch(function (e) {
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
      }, Ie);
    }
    function Ve(e) {
      var t;
      if (!(!o("WAWebUA").UA.isSafari && !e.isCallLinkPreview)) {
        var n = {
            isCallLinkPreviewRetry: e.isCallLinkPreview,
            retryStartedAt: Date.now(),
            scheduledCallId: e.scheduledCallId,
          },
          r = Pe(n);
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
        ((De = n),
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
          Ue(n));
      }
    }
    function He(e, t, a, i, l) {
      var s = null,
        u = !1;
      return (
        e.catch(r("WAWebNoop")),
        (ce || (ce = n("Promise")))
          .race([
            e,
            new ce(function (e) {
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
    function Ge() {
      return ze.apply(this, arguments);
    }
    function ze() {
      return (
        (ze = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (navigator === void 0 || !navigator.permissions) return null;
          try {
            var e = yield navigator.permissions.query({ name: "camera" });
            return e.state;
          } catch (e) {
            return null;
          }
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
        Ke.apply(this, arguments)
      );
    }
    function Qe(e) {
      return Xe.apply(this, arguments);
    }
    function Xe() {
      return (
        (Xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e === "denied") return "camera_denied";
          var t = yield Ge();
          return t === "denied" || (e === "timed_out" && t === "prompt")
            ? "camera_denied"
            : "camera_unavailable";
        })),
        Xe.apply(this, arguments)
      );
    }
    function Ye(e, t, n, r) {
      return Je.apply(this, arguments);
    }
    function Je() {
      return (
        (Je = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i = yield at(!1, n, r);
            if (!i || !e || pe())
              return { canJoin: i, reason: null, videoMuted: !1 };
            var l = yield Ge();
            if (Ze(n, r)) return { canJoin: !1, reason: null, videoMuted: !1 };
            if (l === "denied")
              return { canJoin: !0, reason: "camera_denied", videoMuted: !0 };
            var s =
                (a = t == null ? void 0 : t.cameraTimeoutMs) != null
                  ? a
                  : l === "prompt" && !o("WAWebUA").UA.isSafari
                    ? Ee
                    : Le,
              u = yield lt({
                captureTypeOverride: o("WAWebMediaCaptureStreamType")
                  .WAWebMediaCaptureStreamType.CAMERA,
                checkVideo: !0,
                showFailureModal: !1,
                timeoutLimitOverride: s,
                originatingCall: n,
                abortSignal: r,
              });
            return Ze(n, r)
              ? { canJoin: !1, reason: null, videoMuted: !1 }
              : u === "granted"
                ? { canJoin: !0, reason: null, videoMuted: !1 }
                : { canJoin: !0, reason: yield Qe(u), videoMuted: !0 };
          },
        )),
        Je.apply(this, arguments)
      );
    }
    function Ze(e, t) {
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
    function et(e, t) {
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
    var tt = { not_acquired: "unavailable", timed_out: "timed_out" };
    function nt(e) {
      return e instanceof o("WAWebGetUserMediaErrors").NotAllowedError
        ? "denied"
        : "unavailable";
    }
    function rt(e, t) {
      (e || (ve.microphone = !0), t && (ve.camera = !0));
    }
    function ot(e, t, n) {
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
    function at(e, t, n) {
      return it.apply(this, arguments);
    }
    function it() {
      return (
        (it = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var r = yield lt({
              checkVideo: e,
              showFailureModal: !0,
              originatingCall: t,
              abortSignal: n,
            });
            return r === "granted";
          },
        )),
        it.apply(this, arguments)
      );
    }
    function lt(e) {
      return st.apply(this, arguments);
    }
    function st() {
      return (
        (st = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            return ((ve.microphone = !0), (ve.camera = !0), "granted");
          var u = a && !pe(),
            c = o(
              "WAWebVoipPermissionCheckCaptureOwner",
            ).getPermissionCheckOwner(i),
            d = yield je(a);
          if (ct(i, t)) return "unavailable";
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
            ot(p, _, !0);
            var f = yield _t(m, u, c, t, l, s);
            return ut(f, {
              abortSignal: t,
              isCameraOnly: p,
              originatingCall: i,
              shouldCheckVideo: u,
            });
          } catch (e) {
            return dt(i, e, t) ? "unavailable" : (mt(e, u, d, l), nt(e));
          } finally {
            ot(p, _, !1);
          }
        })),
        st.apply(this, arguments)
      );
    }
    function ut(e, t) {
      var n = t.abortSignal,
        r = t.isCameraOnly,
        a = t.originatingCall,
        i = t.shouldCheckVideo,
        l = tt[e];
      return l != null
        ? l
        : (rt(r, i),
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
    function ct(e, t) {
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
    function dt(e, t, n) {
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
    function mt(e, t, n, r) {
      if (
        (r === void 0 && (r = !0),
        e instanceof o("WAWebGetUserMediaErrors").NotAllowedError)
      ) {
        (o("WAWebCoreActionsODS").logCallPermissionDenied(),
          r &&
            pt(
              et(t, n),
              o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
            ));
        return;
      }
      if (
        e instanceof o("WAWebGetUserMediaErrors").NotReadableError ||
        e instanceof o("WAWebGetUserMediaErrors").SourceUnavailableError
      ) {
        (o("WAWebCoreActionsODS").logCallPermissionDeviceError(),
          r &&
            pt(
              et(t, n),
              o("WAWebGuidePopup.react").GuidePopupType.GUIDE_UNBLOCK,
            ));
        return;
      }
      e instanceof o("WAWebGetUserMediaErrors").GetUserMediaError &&
        r &&
        pt(
          t
            ? o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_MISSING
            : o("WAWebGuidePopup.react").Messaging.MIC_MISSING,
          o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
        );
    }
    function pt(e, t) {
      o("WAWebModalManager").ModalManager.open(
        me.jsx(o("WAWebGuidePopup.react").GuidePopup, {
          messaging: e,
          type: t,
          featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
        }),
      );
    }
    function _t(e, t, n, r, o, a) {
      return ft.apply(this, arguments);
    }
    function ft() {
      return (
        (ft = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l) {
            var s = o(
                "WAWebVoipPermissionCheckCaptureOwner",
              ).registerPermissionCheckCaptureForKeys(
                n.registryKeys,
                r("WAWebNoop"),
              ),
              u = i != null ? i : !0,
              c = l != null ? l : Me(t) ? Number.POSITIVE_INFINITY : void 0,
              d = l == null ? null : Date.now() + l,
              m = yt(
                t,
                e !==
                  o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                    .CAMERA,
              );
            try {
              try {
                return yield gt(e, c, n.registryKeys, m, a, !u, l);
              } catch (t) {
                if (m == null || !Ct(t)) throw t;
                if ((a == null ? void 0 : a.aborted) === !0)
                  return (
                    o("WALogger").LOG(
                      F ||
                        (F = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the permission check was cancelled",
                        ])),
                    ),
                    "not_acquired"
                  );
                if (s.wasReleased())
                  return (
                    o("WALogger").LOG(
                      O ||
                        (O = babelHelpers.taggedTemplateLiteralLoose([
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
                      B ||
                        (B = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the originating call ended",
                        ])),
                    ),
                    "not_acquired"
                  );
                o("WALogger").LOG(
                  W ||
                    (W = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:checkVoipDevicePermissions] selected camera unavailable, retrying permission check with default camera: ",
                      "",
                    ])),
                  String(t),
                );
                var p = d == null ? void 0 : Math.max(0, d - Date.now());
                return p === 0
                  ? "timed_out"
                  : yield gt(
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
        ft.apply(this, arguments)
      );
    }
    function gt(e, t, n, r, o, a, i) {
      return ht.apply(this, arguments);
    }
    function ht() {
      return (
        (ht = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                (g = He(m, p, s, "checkVoipDevicePermissions", function () {
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
                      q ||
                        (q = babelHelpers.taggedTemplateLiteralLoose([
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
                      U ||
                        (U = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] permission capture was cancelled",
                        ])),
                    ),
                    "not_acquired")
                  : !f || _.wasReleased()
                    ? (o("WALogger").LOG(
                        V ||
                          (V = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] permission capture was disposed before completing",
                          ])),
                      ),
                      "not_acquired")
                    : (o("WALogger").LOG(
                        H ||
                          (H = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] permission capture timed out",
                          ])),
                      ),
                      "timed_out")
                : _.wasReleased()
                  ? (o("WALogger").LOG(
                      G ||
                        (G = babelHelpers.taggedTemplateLiteralLoose([
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
        ht.apply(this, arguments)
      );
    }
    function yt(e, t) {
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
    function Ct(e) {
      return e instanceof Error && ye.has(e.name);
    }
    function bt(e) {
      return vt.apply(this, arguments);
    }
    function vt() {
      return (
        (vt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          return !navigator.mediaDevices || !navigator.mediaDevices.getUserMedia
            ? (o("WALogger").ERROR(
                z ||
                  (z = babelHelpers.taggedTemplateLiteralLoose([
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
                  return kt(r);
                }
                if (
                  ((typeof t == "object" && t !== null) ||
                    typeof t == "function") &&
                  t.type === "camera"
                ) {
                  var o = t.type,
                    a = babelHelpers.objectWithoutPropertiesLoose(t, s);
                  return Pt({
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
                  return Qt({ params: l.params, targetWindow: l.targetWindow });
                }
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })(t);
        })),
        vt.apply(this, arguments)
      );
    }
    var St = null;
    function Rt() {
      var e;
      if (St == null) {
        var t = o("WAWebUserPrefsVoip").getSelectedAudioInputDevice();
        o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [EarlyMicAcquire] Acquiring microphone in gesture (device=",
              ")",
            ])),
          (e = t == null ? void 0 : t.slice(0, 8)) != null ? e : "default",
        );
        var n = (St = bt({
          type: "microphone",
          selectedDeviceId: t != null ? t : void 0,
          suppressErrorPopup: !0,
        })
          .then(function (e) {
            return (
              e != null &&
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Microphone acquired successfully",
                    ])),
                ),
              e
            );
          })
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Microphone acquire failed: ",
                    "",
                  ])),
                e,
              ),
              St === n && (St = null),
              null
            );
          }));
      }
    }
    function Lt() {
      if (St != null) {
        var e = St;
        ((St = null),
          e
            .then(function (e) {
              e != null &&
                (o("WAWebMediaCapture").stop(e),
                o("WALogger").LOG(
                  I ||
                    (I = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [EarlyMicAcquire] Cleaned up unused early-acquired microphone stream",
                    ])),
                ));
            })
            .catch(function (e) {
              o("WALogger").WARN(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [EarlyMicAcquire] Cleanup failed: ",
                    "",
                  ])),
                e,
              );
            }));
      }
    }
    var Et = ["exact", "ideal", "none"];
    function kt(e) {
      return It.apply(this, arguments);
    }
    function It() {
      return (
        (It = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            j ||
              (j = babelHelpers.taggedTemplateLiteralLoose([
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
            p = Me(!1),
            _ = yield o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
              timeoutLimit: p ? 1 / 0 : void 0,
              timeoutCallback: a ? r("WAWebNoop") : void 0,
              targetWindow: d,
              mediaConstraints: s
                ? Et.slice(0, a ? 1 : 3).map(function (e) {
                    return Dt(e === "none" ? null : u, e, s);
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
          var v = Fe(h),
            S = v != null ? He(f, g, v, "acquireMicrophoneStream") : f;
          return S.then(function (e) {
            if (e != null && !a)
              try {
                Tt(e, (s == null ? void 0 : s.autoGainControl) !== !1);
              } catch (e) {
                o("WALogger").LOG(
                  K ||
                    (K = babelHelpers.taggedTemplateLiteralLoose([
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
                      me.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
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
                      me.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
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
                      me.jsx((t = o("WAWebGuidePopup.react")).GuidePopup, {
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
        It.apply(this, arguments)
      );
    }
    function Tt(e, t) {
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
        ((Ce = { supported: r, applied: s }),
          o("WAWebVoipBrowserAudioStatus").setBrowserAudioProcessingApplied(
            s,
            t,
          ),
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
            String(r.echoCancellation),
            String(r.noiseSuppression),
            String(r.autoGainControl),
            String(s.echoCancellation),
            String(s.noiseSuppression),
            String(s.autoGainControl),
          ));
      } else
        ((Ce = {
          supported: r,
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
    function Dt(e, t, n) {
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
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
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
    function xt(e) {
      return $t.apply(this, arguments);
    }
    function $t() {
      return (
        ($t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                Q ||
                  (Q = babelHelpers.taggedTemplateLiteralLoose([
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
                X ||
                  (X = babelHelpers.taggedTemplateLiteralLoose([
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
        $t.apply(this, arguments)
      );
    }
    function Pt(e) {
      return Nt.apply(this, arguments);
    }
    function Nt() {
      return (
        (Nt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.facingMode,
            r = e.isAVUpgrade,
            a = e.params,
            i = e.selectedDeviceId,
            l = e.targetWindow;
          if (pe()) return null;
          var s = yield Ge();
          if (s === "denied") {
            o("WALogger").LOG(
              Y ||
                (Y = babelHelpers.taggedTemplateLiteralLoose([
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
          var c = yield xt({
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
            p = we(),
            _ = Date.now();
          o("WALogger").LOG(
            J ||
              (J = babelHelpers.taggedTemplateLiteralLoose([
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
              timeoutLimit: Me(!0) ? Number.POSITIVE_INFINITY : void 0,
              targetWindow: l,
              mediaConstraints: Mt({
                facingMode: n,
                params: a,
                selectedDeviceId: i,
              }),
            }),
            g = f.asyncStream,
            h = f.disposeStream,
            y = Ae(s, p),
            C =
              y != null
                ? He(g, h, y, "acquireCameraStream", function () {
                    s === "prompt" && Ve(p);
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
                Z ||
                  (Z = babelHelpers.taggedTemplateLiteralLoose([
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
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
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
                    te ||
                      (te = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotAllowedError after ",
                        "ms",
                      ])),
                    e,
                  ),
                    m.open(
                      me.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
                    ne ||
                      (ne = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] NotReadableError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    m.open(
                      me.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
                    re ||
                      (re = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:acquireCameraStream] GetUserMediaError after ",
                        "ms: ",
                        "",
                      ])),
                    t,
                    e,
                  ),
                    m.open(
                      me.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
        Nt.apply(this, arguments)
      );
    }
    function Mt(e) {
      var t = e.facingMode,
        n = e.params,
        r = e.selectedDeviceId;
      if (n != null)
        return t != null
          ? [
              wt({ facing: { mode: t, constraintType: he.Ideal }, params: n }),
              wt({ params: n }),
            ]
          : [
              wt({
                device: { deviceId: r, constraintType: he.Exact },
                params: n,
              }),
              wt({
                device: { deviceId: r, constraintType: he.Ideal },
                params: n,
              }),
              wt({ params: n }),
            ];
    }
    function wt(e) {
      var t,
        n = e.device,
        a = e.facing,
        i = e.params,
        l = r("WAWebVoipCameraTrackConstraints")(i);
      if (
        (o("WALogger").LOG(
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
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
          if (n.constraintType === he.None) break e;
          if (n.constraintType === he.Exact) {
            l.deviceId = { exact: s };
            break e;
          }
          if (n.constraintType === he.Ideal) {
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
          if (a.constraintType === he.None) break e;
          if (a.constraintType === he.Exact) {
            l.facingMode = { exact: a.mode };
            break e;
          }
          if (a.constraintType === he.Ideal) {
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
    function At(e) {
      return {
        video: {
          width: { ideal: e.width },
          height: { ideal: e.height },
          frameRate: { ideal: e.maxFps },
        },
        audio: !1,
      };
    }
    function Ft(e) {
      return Ot.apply(this, arguments);
    }
    function Ot() {
      return (
        (Ot = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  oe ||
                    (oe = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] mediaDevices API not supported",
                    ])),
                ),
                []
              );
            var m = r === !0 || (o("WAWebUA").UA.isSafari && n === !0),
              p = o("WAWebUA").UA.isFirefox && a != null;
            if (!(c || m)) {
              if (!pe()) {
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
                    yield ge(d);
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
                ae ||
                  (ae = babelHelpers.taggedTemplateLiteralLoose([
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
                  ie ||
                    (ie = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:getAvailableVideoDevices] error loading devices: ",
                      "",
                    ])),
                  e,
                ),
              []
            );
          }
        })),
        Ot.apply(this, arguments)
      );
    }
    function Bt(e) {
      return Wt.apply(this, arguments);
    }
    function Wt() {
      return (
        (Wt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice();
          if (r("isStringNullOrEmpty")(t)) return e.getUserMedia({ video: !0 });
          try {
            return yield e.getUserMedia({ video: { deviceId: { exact: t } } });
          } catch (t) {
            if (!Ct(t)) throw t;
            return (
              o("WALogger").LOG(
                le ||
                  (le = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [AV:getAvailableVideoDevices] selected camera unavailable, falling back to default camera: ",
                    "",
                  ])),
                t,
              ),
              e.getUserMedia({ video: !0 })
            );
          }
        })),
        Wt.apply(this, arguments)
      );
    }
    function qt(e) {
      return Ut.apply(this, arguments);
    }
    function Ut() {
      return (
        (Ut = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.deviceId,
            n = e.isInActiveCall,
            r = e.skipPermissionRequest,
            a = e.targetWindow,
            i = yield Ft({
              isInActiveCall: n,
              skipPermissionRequest: r,
              targetWindow: a,
            });
          return i.some(function (e) {
            return e.deviceId === t;
          })
            ? !0
            : (o("WALogger").ERROR(
                se ||
                  (se = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: getIsValidVideoDevice: device not found in available devices: ",
                    "",
                  ])),
                t,
              ),
              !1);
        })),
        Ut.apply(this, arguments)
      );
    }
    var Vt = 25e3,
      Ht = 250,
      Gt = 500;
    function zt(e) {
      var t = e;
      return t.closed === !0;
    }
    function jt(e, t) {
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
                zt(e) && t("popout closed");
              } catch (e) {
                t("popout inaccessible");
              }
            }, Ht)));
        }, Gt)),
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
    function Kt(e, t, n) {
      var a = new AbortController(),
        i = !1,
        l = function (n) {
          i ||
            ((i = !0),
            o("WALogger").LOG(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:acquireDesktopStream] aborted: ",
                  "",
                ])),
              n,
            ),
            t(),
            a.abort());
        },
        s = self.setTimeout(function () {
          return l("getDisplayMedia timed out after " + Vt + "ms");
        }, Vt),
        u = n != null ? jt(n, l) : null;
      return (
        e.catch(r("WAWebNoop")),
        r("WAPromiseRaceAbort")(e, a.signal)
          .catch(o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull))
          .finally(function () {
            (self.clearTimeout(s), u != null && u());
          })
      );
    }
    function Qt(e) {
      return Xt.apply(this, arguments);
    }
    function Xt() {
      return (
        (Xt = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.params,
            r = e.targetWindow,
            a = n ? At(n) : { video: !0 },
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
              p = yield Kt(d, m, r).catch(function (e) {
                if (e instanceof o("WAWebGetUserMediaErrors").NotAllowedError) {
                  o("WAWebCoreActionsODS").logCallScreenShareDenied();
                  var t = Date.now() - s;
                  if (t < Re) {
                    o("WALogger").LOG(
                      ue ||
                        (ue = babelHelpers.taggedTemplateLiteralLoose([
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
                      me.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
              if (_ < Re) {
                var f =
                  r != null
                    ? o("WAWebVoipPopoutModalManager").VoipPopoutModalManager
                    : o("WAWebModalManager").ModalManager;
                f.open(
                  me.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
        Xt.apply(this, arguments)
      );
    }
    ((l.getBrowserAudioProcessingStatus = be),
      (l.resetPermissionsCheckedForTest = Se),
      (l.queryCameraPermissionStrict = Ge),
      (l.queryPermissionStatus = je),
      (l.checkVoipCallJoinPermissions = Ye),
      (l.checkVoipDevicePermissions = at),
      (l.acquireVoipMediaStream = bt),
      (l.earlyAcquireMic = Rt),
      (l.cleanupEarlyAcquiredMic = Lt),
      (l.getAvailableVideoDevices = Ft),
      (l.getIsValidVideoDevice = qt));
  },
  98,
);
