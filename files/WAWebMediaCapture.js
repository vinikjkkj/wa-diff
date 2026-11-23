__d(
  "WAWebMediaCapture",
  [
    "WAAbortError",
    "WAGetDisplayMedia",
    "WAGetUserMedia",
    "WALogger",
    "WARetryPromise",
    "WAWebABProps",
    "WAWebGetUserMediaErrors",
    "WAWebGuidePopup.react",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaPermissionsUtils",
    "WAWebModalManager",
    "cr:19603",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = {
        GetUserMediaError: o("WAWebGetUserMediaErrors").GetUserMediaError,
        NotSupportedError: o("WAWebGetUserMediaErrors").NotSupportedError,
        NotAllowedError: o("WAWebGetUserMediaErrors").NotAllowedError,
        ConstraintNotSatisfiedError: o("WAWebGetUserMediaErrors")
          .ConstraintNotSatisfiedError,
        OverconstrainedError: o("WAWebGetUserMediaErrors").OverconstrainedError,
        NotFoundError: o("WAWebGetUserMediaErrors").NotFoundError,
        NotReadableError: o("WAWebGetUserMediaErrors").NotReadableError,
        SourceUnavailableError: o("WAWebGetUserMediaErrors")
          .SourceUnavailableError,
      },
      _ = Object.freeze(
        ((e = {}),
        (e[
          o(
            "WAWebMediaCaptureStreamType",
          ).WAWebMediaCaptureStreamType.MICROPHONE
        ] = 1e3),
        (e[
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
        ] = 3e3),
        (e[
          o(
            "WAWebMediaCaptureStreamType",
          ).WAWebMediaCaptureStreamType.CAMERA_AND_MICROPHONE
        ] = 3e3),
        e),
      );
    function f(e) {
      var t,
        n = e.cameraFacingMode,
        a = e.featureSurface,
        i = e.isStopped,
        l = e.mediaConstraints,
        c = e.signal,
        d = e.targetWindow,
        m = e.timeoutCallback,
        p = e.timeoutLimit,
        f = e.type,
        S,
        E = !1,
        k = null,
        I = null,
        T = null,
        D = p != null ? p : _[f];
      function x() {
        return (
          (E =
            E ||
            (i == null ? void 0 : i()) === !0 ||
            (c == null ? void 0 : c.aborted) === !0),
          E
        );
      }
      function $() {
        k != null && (self.clearTimeout(k), (k = null));
      }
      function P() {
        ($(),
          !x() &&
            D < Number.POSITIVE_INFINITY &&
            (k = self.setTimeout(function () {
              if (((k = null), !x()))
                if (m) m();
                else {
                  var e = L(f, a, T);
                  e != null &&
                    (N(),
                    (I = e),
                    o("WAWebModalManager").ModalManager.on("open_modal", w),
                    o("WAWebModalManager").ModalManager.on("close_modal", M),
                    o("WAWebModalManager").ModalManager.open(e));
                }
            }, D)));
      }
      function N() {
        (o("WAWebModalManager").ModalManager.off("open_modal", w),
          o("WAWebModalManager").ModalManager.off("close_modal", M));
      }
      function M() {
        ((I = null), N());
      }
      function w(e) {
        e !== I && M();
      }
      function A() {
        ($(), I != null && (M(), o("WAWebModalManager").ModalManager.close()));
      }
      var F = l != null ? l : v(f, n),
        O = d == null || (t = d.navigator) == null ? void 0 : t.mediaDevices,
        B =
          f ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA ||
          f ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA_AND_MICROPHONE ||
          f ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .MICROPHONE
            ? d != null && O != null
              ? function (e) {
                  return O.getUserMedia(e);
                }
              : o("WAGetUserMedia").getUserMedia
            : f ===
                o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                  .DESKTOP
              ? d != null && O != null
                ? function (e) {
                    return O.getDisplayMedia(e);
                  }
                : o("WAGetDisplayMedia").getDisplayMedia
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      f,
                  );
                })(),
        W = h(c, function () {
          ((E = !0), A());
        }),
        q = (async function (e) {
          ((T = await R(f)), y(x), P());
          var t =
              (e = d == null ? void 0 : d.navigator) != null ? e : navigator,
            n = !1;
          if (
            f ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .MICROPHONE
          ) {
            var a = await o(
                "WAWebMediaPermissionsUtils",
              ).checkMediaPermissionState("microphone", t),
              i = a.denied;
            n = i;
          } else if (
            f ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
          ) {
            var l = await o(
                "WAWebMediaPermissionsUtils",
              ).checkMediaPermissionState("camera", t),
              c = l.denied;
            n = c;
          } else
            f ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA_AND_MICROPHONE &&
              (n = await o(
                "WAWebMediaPermissionsUtils",
              ).isAnyMediaPermissionDenied(["microphone", "camera"], t));
          if ((y(x), n))
            throw (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "MediaCapture: permission already denied, fast-failing",
                  ])),
              ),
              new (o("WAWebGetUserMediaErrors").NotAllowedError)(
                "Permissions API reports denied",
              )
            );
          return r("WARetryPromise")(function (e) {
            var t = e.failCount,
              n = e.retry;
            return new Promise(function (e, r) {
              if ((P(), x())) {
                e(void 0);
                return;
              }
              if (!B)
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "MediaCapture:start() no ability to capture media",
                    ])),
                ),
                  r(new (o("WAWebGetUserMediaErrors").GetUserMediaError)()));
              else {
                var a = F[t];
                B(a)
                  .then(function (e) {
                    if (x()) {
                      g(e);
                      return;
                    }
                    return ((S = e), e);
                  })
                  .then(e)
                  .catch(function (o) {
                    C(
                      x,
                      function () {
                        return e(void 0);
                      },
                      function () {
                        if (o.name === "NotReadableError" && F[t + 1]) {
                          n();
                          return;
                        }
                        r(o);
                      },
                    );
                  });
              }
            });
          });
        })()
          .catch(function (e) {
            return b(e, x);
          })
          .finally(function () {
            (W(), A());
          });
      return {
        asyncStream: q,
        disposeStream: function () {
          ((E = !0), W(), A(), S && g(S));
        },
      };
    }
    function g(e) {
      for (var t = e.getTracks(), n = 0; n < t.length; n++)
        try {
          t[n].stop();
        } catch (e) {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "MediaCapture: failed to stop ",
                  " track",
                ])),
              t[n].kind,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("media-capture-track-stop-failed");
        }
    }
    function h(e, t) {
      return (
        (e == null ? void 0 : e.aborted) === !0
          ? t()
          : e == null || e.addEventListener("abort", t, { once: !0 }),
        function () {
          return e == null ? void 0 : e.removeEventListener("abort", t);
        }
      );
    }
    function y(e) {
      if (e())
        throw new (o("WAAbortError").AbortError)(
          "Capture stopped while reading permission state",
        );
    }
    function C(e, t, n) {
      if (e()) {
        t();
        return;
      }
      n();
    }
    function b(e, t) {
      var n = e instanceof Error ? e.name : e;
      if (!(n === o("WAAbortError").ABORT_ERROR && t())) {
        var r = p[n] || o("WAWebGetUserMediaErrors").GetUserMediaError;
        throw new r(e instanceof Error ? e.message : void 0);
      }
    }
    function v(e, t) {
      var r = [];
      e: {
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
        ) {
          r.push.apply(r, S(!1, t));
          break e;
        }
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .CAMERA_AND_MICROPHONE
        ) {
          r.push.apply(r, S(!0, t));
          break e;
        }
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .MICROPHONE
        ) {
          r.push({ audio: !0 });
          break e;
        }
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.DESKTOP
        ) {
          var a = S(!1);
          r.push.apply(
            r,
            a.map(function (e) {
              return babelHelpers.extends({}, e, {
                preferCurrentTab: !1,
                selfBrowserSurface: "exclude",
                systemAudio: "exclude",
                surfaceSwitching: "include",
                monitorTypeSurfaces: "include",
              });
            }),
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
      return n("cr:19603") != null
        ? n("cr:19603").addSelectedDeviceConstraints(e, r)
        : r;
    }
    function S(e, t) {
      var n = o("WAWebABProps").getABPropConfigValue("web_image_max_edge"),
        r = 1280,
        a = 720,
        i = t != null ? { facingMode: { ideal: t } } : void 0;
      return [
        {
          video: babelHelpers.extends({}, i, { width: n, height: n }),
          audio: e,
        },
        {
          video: babelHelpers.extends({}, i, {
            width: Math.min(r, n),
            height: Math.min(a, n),
          }),
          audio: e,
        },
        { video: i != null ? i : !0, audio: e },
      ];
    }
    async function R(e) {
      if (
        e !==
        o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
          .CAMERA_AND_MICROPHONE
      )
        return null;
      var t = await Promise.all([
          o("WAWebMediaPermissionsUtils").checkMediaPermissionState(
            "microphone",
          ),
          o("WAWebMediaPermissionsUtils").checkMediaPermissionState("camera"),
        ]),
        n = t[0].granted,
        r = t[1].granted;
      return { micGranted: n, camGranted: r };
    }
    function L(e, t, n) {
      var r =
          n != null
            ? (function (e) {
                if (e === "camera")
                  return o("WAWebGuidePopup.react").Messaging.CAMERA;
                if (e === "mic")
                  return o("WAWebGuidePopup.react").Messaging.MIC;
                if (e === "camera_and_mic")
                  return o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC;
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })(
                o(
                  "WAWebMediaPermissionsUtils",
                ).getDeviceSpecificPermissionMessaging(
                  n.micGranted,
                  n.camGranted,
                ),
              )
            : o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC,
        a =
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
            ? o("WAWebGuidePopup.react").Messaging.CAMERA
            : e ===
                o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                  .MICROPHONE
              ? o("WAWebGuidePopup.react").Messaging.MIC
              : e ===
                  o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                    .CAMERA_AND_MICROPHONE
                ? r
                : e ===
                    o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                      .DESKTOP
                  ? null
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
      return a == null
        ? null
        : m.jsx(o("WAWebGuidePopup.react").GuidePopup, {
            messaging: a,
            type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_ALLOW,
            featureSurface: t,
          });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    var E;
    function k() {
      return (
        E === void 0 && (E = "srcObject" in document.createElement("video")),
        E
      );
    }
    ((l.start = f), (l.stop = g), (l.isSrcObjectInVideoElement = k));
  },
  98,
);
