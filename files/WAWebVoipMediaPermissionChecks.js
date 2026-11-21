__d(
  "WAWebVoipMediaPermissionChecks",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebABProps",
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
    "WAWebVoipDeviceAccessRecoveryGating",
    "WAWebVoipGatingUtils",
    "WAWebVoipLocalVideoPolicy",
    "WAWebVoipPermissionCheckCaptureOwner",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
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
      x = D || (D = o("react")),
      $ = { microphone: null, camera: null },
      P = 1e4,
      N = 3e4,
      M = 1e4,
      w = new Set([
        "ConstraintNotSatisfiedError",
        "OverconstrainedError",
        "NotFoundError",
      ]);
    function A() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    function F(e) {
      return e instanceof Error && w.has(e.name);
    }
    function O(e) {
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
      })(babelHelpers.extends({ checkVideo: e }, $));
    }
    function B(e, t) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari
        ? P
        : t.isCallLinkPreview
          ? N
          : null;
    }
    function W(e) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari ? M : null;
    }
    function q(t, a, i, l, s) {
      var u = null,
        c = !1;
      return (
        t.catch(r("WAWebNoop")),
        (T || (T = n("Promise")))
          .race([
            t,
            new T(function (t) {
              u = self.setTimeout(function () {
                ((c = !0),
                  (u = null),
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:",
                        "] getUserMedia timed out after ",
                        "ms",
                      ])),
                    l,
                    i,
                  ),
                  s == null || s(),
                  a(),
                  t(null));
              }, i);
            }),
          ])
          .finally(function () {
            !c && u != null && self.clearTimeout(u);
          })
      );
    }
    function U() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (navigator === void 0 || !navigator.permissions) return null;
          try {
            var e = yield navigator.permissions.query({ name: "camera" });
            return e.state;
          } catch (e) {
            return null;
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        G.apply(this, arguments)
      );
    }
    function z(e) {
      if (
        r("WAWebEnvironment").isWindows &&
        !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
      )
        return !1;
      var t =
        e.camera &&
        o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed() &&
        !A();
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
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e === "denied") return "camera_denied";
          var t = yield U();
          return t === "denied" || (e === "timed_out" && t === "prompt")
            ? "camera_denied"
            : "camera_unavailable";
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      return X.apply(this, arguments);
    }
    function X() {
      return (
        (X = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.abortSignal,
            r = e.checkVideo,
            a = e.options,
            i = e.originatingCall,
            l = yield re(!1, i, n, {
              suppressPromptGuide: a == null ? void 0 : a.suppressPromptGuide,
            });
          if (
            (a == null ||
              a.onMicrophoneChecked == null ||
              a.onMicrophoneChecked(),
            !l || !r || A())
          )
            return { canJoin: l, reason: null, videoMuted: !1 };
          var s = yield U();
          if (Y(i, n)) return { canJoin: !1, reason: null, videoMuted: !1 };
          if (s === "denied")
            return { canJoin: !0, reason: "camera_denied", videoMuted: !0 };
          var u =
              (t = a == null ? void 0 : a.cameraTimeoutMs) != null
                ? t
                : s === "prompt" && !o("WAWebUA").UA.isSafari
                  ? N
                  : P,
            c = yield ae({
              captureTypeOverride: o("WAWebMediaCaptureStreamType")
                .WAWebMediaCaptureStreamType.CAMERA,
              checkVideo: !0,
              showFailureModal: !1,
              timeoutLimitOverride: u,
              originatingCall: i,
              abortSignal: n,
            });
          return Y(i, n)
            ? { canJoin: !1, reason: null, videoMuted: !1 }
            : c === "granted"
              ? { canJoin: !0, reason: null, videoMuted: !1 }
              : { canJoin: !0, reason: yield j(c), videoMuted: !0 };
        })),
        X.apply(this, arguments)
      );
    }
    function Y(e, t) {
      return (t == null ? void 0 : t.aborted) === !0
        ? (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipCallJoinPermissions] join cancelled during the camera probe",
              ])),
          ),
          !0)
        : o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(e)
          ? (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:checkVoipCallJoinPermissions] originating call ended during the camera probe",
                ])),
            ),
            !0)
          : !1;
    }
    function J(e, t) {
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
    var Z = { not_acquired: "unavailable", timed_out: "timed_out" };
    function ee(e) {
      return e instanceof o("WAWebGetUserMediaErrors").NotAllowedError
        ? "denied"
        : "unavailable";
    }
    function te(e, t) {
      (e || ($.microphone = !0), t && ($.camera = !0));
    }
    function ne(e, t, n) {
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
    function re(e, t, n, r) {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield ae({
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
        oe.apply(this, arguments)
      );
    }
    function ae(e) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            return (($.microphone = !0), ($.camera = !0), "granted");
          var m = a && !A(),
            p = o(
              "WAWebVoipPermissionCheckCaptureOwner",
            ).getPermissionCheckOwner(l),
            _ = yield H(a);
          if (ce(l, t)) return "unavailable";
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
            ne(g, h, !0);
            var y = yield Re(f, m, p, t, u, d, c);
            return (
              fe(y, f, _),
              ue(y, {
                abortSignal: t,
                isCameraOnly: g,
                originatingCall: l,
                shouldCheckVideo: m,
              })
            );
          } catch (e) {
            if (de(l, e, t)) return "unavailable";
            _e(e, f, _);
            var C = ee(e);
            return (he(e, f, m, _, u && (yield le(s, C)), i), C);
          } finally {
            ne(g, h, !1);
          }
        })),
        ie.apply(this, arguments)
      );
    }
    function le(e, t) {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e == null) return !0;
          try {
            return yield e(t);
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:checkVoipDevicePermissions] could not decide on the failure guide",
                    ])),
                )
                .catching(r("getErrorSafe")(e)),
              !0
            );
          }
        })),
        se.apply(this, arguments)
      );
    }
    function ue(e, t) {
      var n = t.abortSignal,
        r = t.isCameraOnly,
        a = t.originatingCall,
        i = t.shouldCheckVideo,
        l = Z[e];
      return l != null
        ? l
        : (te(r, i),
          e === "released_after_acquire"
            ? "unavailable"
            : (n == null ? void 0 : n.aborted) === !0
              ? (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:checkVoipDevicePermissions] permission capture was cancelled after acquisition",
                    ])),
                ),
                "unavailable")
              : o(
                    "WAWebVoipPermissionCheckCaptureOwner",
                  ).didPermissionCheckCallEnd(a)
                ? (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:checkVoipDevicePermissions] aborting permission check because the originating call ended during capture",
                      ])),
                  ),
                  "unavailable")
                : "granted");
    }
    function ce(e, t) {
      return (t == null ? void 0 : t.aborted) === !0
        ? (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] permission check was cancelled before capture",
              ])),
          ),
          !0)
        : o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(e)
          ? (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:checkVoipDevicePermissions] aborting permission check because the originating call ended",
                ])),
            ),
            !0)
          : !1;
    }
    function de(e, t, n) {
      return (n == null ? void 0 : n.aborted) === !0
        ? (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error because the permission check was cancelled: ",
                "",
              ])),
            String(t),
          ),
          !0)
        : o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(e)
          ? (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error because the originating call ended: ",
                  "",
                ])),
              String(t),
            ),
            !0)
          : !1;
    }
    var me = 0.01;
    function pe(e, t) {
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
    function _e(e, t, n) {
      var a = r("getErrorSafe")(e);
      (o("WAWebGetUserMediaErrors").isDeniedBySystem(e) &&
        r("WAWebODS").incr("web.call.permission.denied_by_system"),
        pe(t, n) &&
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
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] ",
                " capture failed: ",
                ": ",
                " (pre-prompt ",
                ")",
              ])),
            t,
            a.name,
            a.message,
            ge(t, n),
          )
          .catching(a)
          .sendLogs("voip-permission-check-failed", {
            sampling: me,
            employeeSampling: 1,
          }));
    }
    function fe(e, t, n) {
      e === "timed_out" &&
        (r("WAWebODS").incr("web.call.permission.timed_out"),
        pe(t, n) &&
          o("WAWebCoreActionsODS").logCallPermissionFailedWhileGranted(
            "timed_out",
          ),
        o("WALogger")
          .WARN(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] ",
                " capture timed out (pre-prompt ",
                ")",
              ])),
            t,
            ge(t, n),
          )
          .sendLogs("voip-permission-check-failed", {
            sampling: me,
            employeeSampling: 1,
          }));
    }
    function ge(e, t) {
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? "mic=" + t.micPermission
        : "mic=" + t.micPermission + ", camera=" + t.cameraPermission;
    }
    function he(e, t, n, a, i, l) {
      if (
        (i === void 0 && (i = !0),
        e instanceof o("WAWebGetUserMediaErrors").NotAllowedError)
      ) {
        (r("WAWebODS").incr("web.call.permission.denied"),
          i &&
            ye(
              be({
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
            ye(Ce(t), o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE, l));
        return;
      }
      e instanceof o("WAWebGetUserMediaErrors").GetUserMediaError &&
        i &&
        ye(
          n
            ? o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_MISSING
            : o("WAWebGuidePopup.react").Messaging.MIC_MISSING,
          o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
          l,
        );
    }
    function ye(e, t, n) {
      o("WAWebModalManager").ModalManager.open(
        x.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
    function Ce(e) {
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? o("WAWebGuidePopup.react").Messaging.MIC_UNAVAILABLE
        : e ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
          ? o("WAWebGuidePopup.react").Messaging.CAMERA_UNAVAILABLE
          : o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_UNAVAILABLE;
    }
    function be(e) {
      var t = e.captureType,
        n = e.error,
        r = e.prePromptPermissions,
        o = e.shouldCheckVideo;
      return ve(n) ? Se(t) : J(o, r);
    }
    function ve(e) {
      return (
        !r("WAWebEnvironment").isWindows &&
        o("WAWebGetUserMediaErrors").isDeniedBySystem(e)
      );
    }
    function Se(e) {
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? o("WAWebGuidePopup.react").Messaging.MIC_BLOCKED_BY_SYSTEM
        : e ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
          ? o("WAWebGuidePopup.react").Messaging.CAMERA_BLOCKED_BY_SYSTEM
          : o("WAWebGuidePopup.react").Messaging
              .CAMERA_AND_MIC_BLOCKED_BY_SYSTEM;
    }
    function Re(e, t, n, r, o, a, i) {
      return Le.apply(this, arguments);
    }
    function Le() {
      return (
        (Le = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s) {
            var u = o(
                "WAWebVoipPermissionCheckCaptureOwner",
              ).registerPermissionCheckCaptureForKeys(
                n.registryKeys,
                r("WAWebNoop"),
              ),
              c = i != null ? i : !0,
              d = s === !0 || !c,
              m = l != null ? l : O(t) ? Number.POSITIVE_INFINITY : void 0,
              p = l == null ? null : Date.now() + l,
              _ = Ie(
                t,
                e !==
                  o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                    .CAMERA,
              );
            try {
              try {
                return yield Ee(e, m, n.registryKeys, _, a, d, l);
              } catch (t) {
                if (_ == null || !F(t)) throw t;
                if ((a == null ? void 0 : a.aborted) === !0)
                  return (
                    o("WALogger").LOG(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the permission check was cancelled",
                        ])),
                    ),
                    "not_acquired"
                  );
                if (u.wasReleased())
                  return (
                    o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
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
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] skipping default-camera retry because the originating call ended",
                        ])),
                    ),
                    "not_acquired"
                  );
                o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:checkVoipDevicePermissions] selected camera unavailable, retrying permission check with default camera: ",
                      "",
                    ])),
                  String(t),
                );
                var f = p == null ? void 0 : Math.max(0, p - Date.now());
                return f === 0
                  ? "timed_out"
                  : yield Ee(
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
        Le.apply(this, arguments)
      );
    }
    function Ee(e, t, n, r, o, a, i) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                (g = q(m, p, s, "checkVoipDevicePermissions", function () {
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
                      R ||
                        (R = babelHelpers.taggedTemplateLiteralLoose([
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
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [AV:checkVoipDevicePermissions] permission capture was cancelled",
                        ])),
                    ),
                    "not_acquired")
                  : !f || _.wasReleased()
                    ? (o("WALogger").LOG(
                        E ||
                          (E = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] permission capture was disposed before completing",
                          ])),
                      ),
                      "not_acquired")
                    : (o("WALogger").LOG(
                        k ||
                          (k = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: [AV:checkVoipDevicePermissions] permission capture timed out",
                          ])),
                      ),
                      "timed_out")
                : _.wasReleased()
                  ? (o("WALogger").LOG(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose([
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
        ke.apply(this, arguments)
      );
    }
    function Ie(e, t) {
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
    ((l.isVirtualVideoCaptureEnabled = A),
      (l.isSelectedVideoDeviceUnavailableError = F),
      (l.hasPermissionAlreadyBeenChecked = O),
      (l.getActiveCallCameraTimeoutMs = B),
      (l.getActiveCallMicTimeoutMs = W),
      (l.raceStreamWithActiveCallTimeout = q),
      (l.queryCameraPermissionStrict = U),
      (l.queryPermissionStatus = H),
      (l.mayPromptForMediaPermission = z),
      (l.checkVoipCallJoinPermissions = Q),
      (l.checkVoipDevicePermissions = re),
      (l.shouldShowSystemSettingsGuide = ve));
  },
  98,
);
