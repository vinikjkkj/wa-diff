__d(
  "WAWebVoipMediaPermissionChecks",
  [
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
      D = T || (T = o("react")),
      x = { microphone: null, camera: null },
      $ = 1e4,
      P = 3e4,
      N = 1e4,
      M = new Set([
        "ConstraintNotSatisfiedError",
        "OverconstrainedError",
        "NotFoundError",
      ]);
    function w() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    function A(e) {
      return e instanceof Error && M.has(e.name);
    }
    function F(e) {
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
      })(babelHelpers.extends({ checkVideo: e }, x));
    }
    function O(e, t) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari
        ? $
        : t.isCallLinkPreview
          ? P
          : null;
    }
    function B(e) {
      return e !== "prompt" || o("WAWebUA").UA.isSafari ? N : null;
    }
    function W(t, n, a, i, l) {
      var s = null,
        u = !1;
      return (
        t.catch(r("WAWebNoop")),
        Promise.race([
          t,
          new Promise(function (t) {
            s = self.setTimeout(function () {
              ((u = !0),
                (s = null),
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:",
                      "] getUserMedia timed out after ",
                      "ms",
                    ])),
                  i,
                  a,
                ),
                l == null || l(),
                n(),
                t(null));
            }, a);
          }),
        ]).finally(function () {
          !u && s != null && self.clearTimeout(s);
        })
      );
    }
    async function q() {
      if (navigator === void 0 || !navigator.permissions) return null;
      try {
        var e = await navigator.permissions.query({ name: "camera" });
        return e.state;
      } catch (e) {
        return null;
      }
    }
    async function U(e) {
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
    function V(e) {
      if (
        r("WAWebEnvironment").isWindows &&
        !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled()
      )
        return !1;
      var t =
        e.camera &&
        o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed() &&
        !w();
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
    async function H(e) {
      if (e === "denied") return "camera_denied";
      var t = await q();
      return t === "denied" || (e === "timed_out" && t === "prompt")
        ? "camera_denied"
        : "camera_unavailable";
    }
    async function G(e) {
      var t,
        n = e.abortSignal,
        r = e.checkVideo,
        a = e.options,
        i = e.originatingCall,
        l = await J(!1, i, n, {
          suppressPromptGuide: a == null ? void 0 : a.suppressPromptGuide,
        });
      if (
        (a == null || a.onMicrophoneChecked == null || a.onMicrophoneChecked(),
        !l || !r || w())
      )
        return { canJoin: l, reason: null, videoMuted: !1 };
      var s = await q();
      if (z(i, n)) return { canJoin: !1, reason: null, videoMuted: !1 };
      if (s === "denied")
        return { canJoin: !0, reason: "camera_denied", videoMuted: !0 };
      var u =
          (t = a == null ? void 0 : a.cameraTimeoutMs) != null
            ? t
            : s === "prompt" && !o("WAWebUA").UA.isSafari
              ? P
              : $,
        c = await Z({
          captureTypeOverride: o("WAWebMediaCaptureStreamType")
            .WAWebMediaCaptureStreamType.CAMERA,
          checkVideo: !0,
          showFailureModal: !1,
          timeoutLimitOverride: u,
          originatingCall: i,
          abortSignal: n,
        });
      return z(i, n)
        ? { canJoin: !1, reason: null, videoMuted: !1 }
        : c === "granted"
          ? { canJoin: !0, reason: null, videoMuted: !1 }
          : { canJoin: !0, reason: await H(c), videoMuted: !0 };
    }
    function z(e, t) {
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
    function j(e, t) {
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
    var K = { not_acquired: "unavailable", timed_out: "timed_out" };
    function Q(e) {
      return e instanceof o("WAWebGetUserMediaErrors").NotAllowedError
        ? "denied"
        : "unavailable";
    }
    function X(e, t) {
      (e || (x.microphone = !0), t && (x.camera = !0));
    }
    function Y(e, t, n) {
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
    async function J(e, t, n, r) {
      var o = await Z({
        checkVideo: e,
        onFailureGuideConfirm: r == null ? void 0 : r.onFailureGuideConfirm,
        showFailureModal: !0,
        shouldOpenFailureGuide: r == null ? void 0 : r.shouldOpenFailureGuide,
        suppressPromptGuide: r == null ? void 0 : r.suppressPromptGuide,
        originatingCall: t,
        abortSignal: n,
      });
      return o === "granted";
    }
    async function Z(e) {
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
        return ((x.microphone = !0), (x.camera = !0), "granted");
      var m = a && !w(),
        p = o("WAWebVoipPermissionCheckCaptureOwner").getPermissionCheckOwner(
          l,
        ),
        _ = await U(a);
      if (ne(l, t)) return "unavailable";
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
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA,
        h =
          f ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .CAMERA_AND_MICROPHONE;
      try {
        Y(g, h, !0);
        var y = await fe(f, m, p, t, u, d, c);
        return (
          le(y, f, _),
          te(y, {
            abortSignal: t,
            isCameraOnly: g,
            originatingCall: l,
            shouldCheckVideo: m,
          })
        );
      } catch (e) {
        if (re(l, e, t)) return "unavailable";
        ie(e, f, _);
        var C = Q(e);
        return (ue(e, f, m, _, u && (await ee(s, C)), i), C);
      } finally {
        Y(g, h, !1);
      }
    }
    async function ee(e, t) {
      if (e == null) return !0;
      try {
        return await e(t);
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:checkVoipDevicePermissions] could not decide on the failure guide",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          !0
        );
      }
    }
    function te(e, t) {
      var n = t.abortSignal,
        r = t.isCameraOnly,
        a = t.originatingCall,
        i = t.shouldCheckVideo,
        l = K[e];
      return l != null
        ? l
        : (X(r, i),
          e === "released_after_acquire"
            ? "unavailable"
            : (n == null ? void 0 : n.aborted) === !0
              ? (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [AV:checkVoipDevicePermissions] permission capture was cancelled after acquisition",
                    ])),
                ),
                "unavailable")
              : o(
                    "WAWebVoipPermissionCheckCaptureOwner",
                  ).didPermissionCheckCallEnd(a)
                ? (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [AV:checkVoipDevicePermissions] aborting permission check because the originating call ended during capture",
                      ])),
                  ),
                  "unavailable")
                : "granted");
    }
    function ne(e, t) {
      return (t == null ? void 0 : t.aborted) === !0
        ? (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] permission check was cancelled before capture",
              ])),
          ),
          !0)
        : o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(e)
          ? (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:checkVoipDevicePermissions] aborting permission check because the originating call ended",
                ])),
            ),
            !0)
          : !1;
    }
    function re(e, t, n) {
      return (n == null ? void 0 : n.aborted) === !0
        ? (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error because the permission check was cancelled: ",
                "",
              ])),
            String(t),
          ),
          !0)
        : o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(e)
          ? (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [AV:checkVoipDevicePermissions] suppressing permission capture error because the originating call ended: ",
                  "",
                ])),
              String(t),
            ),
            !0)
          : !1;
    }
    var oe = 0.01;
    function ae(e, t) {
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
    function ie(e, t, n) {
      var a = r("getErrorSafe")(e);
      (o("WAWebGetUserMediaErrors").isDeniedBySystem(e) &&
        r("WAWebODS").incr("web.call.permission.denied_by_system"),
        ae(t, n) &&
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
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] ",
                " capture failed: ",
                ": ",
                " (pre-prompt ",
                ")",
              ])),
            t,
            a.name,
            a.message,
            se(t, n),
          )
          .catching(a)
          .sendLogs("voip-permission-check-failed", {
            sampling: oe,
            employeeSampling: 1,
          }));
    }
    function le(e, t, n) {
      e === "timed_out" &&
        (r("WAWebODS").incr("web.call.permission.timed_out"),
        ae(t, n) &&
          o("WAWebCoreActionsODS").logCallPermissionFailedWhileGranted(
            "timed_out",
          ),
        o("WALogger")
          .WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [AV:checkVoipDevicePermissions] ",
                " capture timed out (pre-prompt ",
                ")",
              ])),
            t,
            se(t, n),
          )
          .sendLogs("voip-permission-check-failed", {
            sampling: oe,
            employeeSampling: 1,
          }));
    }
    function se(e, t) {
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? "mic=" + t.micPermission
        : "mic=" + t.micPermission + ", camera=" + t.cameraPermission;
    }
    function ue(e, t, n, a, i, l) {
      if (
        (i === void 0 && (i = !0),
        e instanceof o("WAWebGetUserMediaErrors").NotAllowedError)
      ) {
        (r("WAWebODS").incr("web.call.permission.denied"),
          i &&
            ce(
              me({
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
            ce(de(t), o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE, l));
        return;
      }
      e instanceof o("WAWebGetUserMediaErrors").GetUserMediaError &&
        i &&
        ce(
          n
            ? o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_MISSING
            : o("WAWebGuidePopup.react").Messaging.MIC_MISSING,
          o("WAWebGuidePopup.react").GuidePopupType.GUIDE_NONE,
          l,
        );
    }
    function ce(e, t, n) {
      o("WAWebModalManager").ModalManager.open(
        D.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
    function de(e) {
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? o("WAWebGuidePopup.react").Messaging.MIC_UNAVAILABLE
        : e ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
          ? o("WAWebGuidePopup.react").Messaging.CAMERA_UNAVAILABLE
          : o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC_UNAVAILABLE;
    }
    function me(e) {
      var t = e.captureType,
        n = e.error,
        r = e.prePromptPermissions,
        o = e.shouldCheckVideo;
      return pe(n) ? _e(t) : j(o, r);
    }
    function pe(e) {
      return (
        !r("WAWebEnvironment").isWindows &&
        o("WAWebGetUserMediaErrors").isDeniedBySystem(e)
      );
    }
    function _e(e) {
      return e ===
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.MICROPHONE
        ? o("WAWebGuidePopup.react").Messaging.MIC_BLOCKED_BY_SYSTEM
        : e ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
          ? o("WAWebGuidePopup.react").Messaging.CAMERA_BLOCKED_BY_SYSTEM
          : o("WAWebGuidePopup.react").Messaging
              .CAMERA_AND_MIC_BLOCKED_BY_SYSTEM;
    }
    async function fe(e, t, n, a, i, l, s) {
      var u = o(
          "WAWebVoipPermissionCheckCaptureOwner",
        ).registerPermissionCheckCaptureForKeys(n.registryKeys, r("WAWebNoop")),
        c = i != null ? i : !0,
        d = s === !0 || !c,
        m = l != null ? l : F(t) ? Number.POSITIVE_INFINITY : void 0,
        p = l == null ? null : Date.now() + l,
        _ = he(
          t,
          e !==
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA,
        );
      try {
        try {
          return await ge(e, m, n.registryKeys, _, a, d, l);
        } catch (t) {
          if (_ == null || !A(t)) throw t;
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
            o("WAWebVoipPermissionCheckCaptureOwner").didPermissionCheckCallEnd(
              n.call,
            )
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
            : await ge(e, f != null ? f : m, n.registryKeys, void 0, a, d, f);
        }
      } finally {
        u.release();
      }
    }
    async function ge(e, t, n, a, i, l, s) {
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
          (g = W(m, p, s, "checkVoipDevicePermissions", function () {
            f = !0;
          }));
        var h;
        try {
          h =
            i == null
              ? await g
              : await r("WAPromiseRaceAbort")(g, i).catch(
                  o("WAAbortError").catchAbort(o("WAWebNullFunc").returnNull),
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
    }
    function he(e, t) {
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
    ((l.isVirtualVideoCaptureEnabled = w),
      (l.isSelectedVideoDeviceUnavailableError = A),
      (l.hasPermissionAlreadyBeenChecked = F),
      (l.getActiveCallCameraTimeoutMs = O),
      (l.getActiveCallMicTimeoutMs = B),
      (l.raceStreamWithActiveCallTimeout = W),
      (l.queryCameraPermissionStrict = q),
      (l.queryPermissionStatus = U),
      (l.mayPromptForMediaPermission = V),
      (l.checkVoipCallJoinPermissions = G),
      (l.checkVoipDevicePermissions = J),
      (l.shouldShowSystemSettingsGuide = pe));
  },
  98,
);
