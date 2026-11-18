__d(
  "WAWebMediaCapture",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      m,
      p = m || (m = o("react")),
      _ = {
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
      f = Object.freeze(
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
    function g(e) {
      var t,
        a = e.cameraFacingMode,
        i = e.featureSurface,
        l = e.isStopped,
        c = e.mediaConstraints,
        m = e.signal,
        p = e.targetWindow,
        _ = e.timeoutCallback,
        g = e.timeoutLimit,
        R = e.type,
        E,
        I = !1,
        T = null,
        D = null,
        x = null,
        $ = g != null ? g : f[R];
      function P() {
        return (
          (I =
            I ||
            (l == null ? void 0 : l()) === !0 ||
            (m == null ? void 0 : m.aborted) === !0),
          I
        );
      }
      function N() {
        T != null && (self.clearTimeout(T), (T = null));
      }
      function M() {
        (N(),
          !P() &&
            $ < Number.POSITIVE_INFINITY &&
            (T = self.setTimeout(function () {
              if (((T = null), !P()))
                if (_) _();
                else {
                  var e = k(R, i, x);
                  e != null &&
                    (w(),
                    (D = e),
                    o("WAWebModalManager").ModalManager.on("open_modal", F),
                    o("WAWebModalManager").ModalManager.on("close_modal", A),
                    o("WAWebModalManager").ModalManager.open(e));
                }
            }, $)));
      }
      function w() {
        (o("WAWebModalManager").ModalManager.off("open_modal", F),
          o("WAWebModalManager").ModalManager.off("close_modal", A));
      }
      function A() {
        ((D = null), w());
      }
      function F(e) {
        e !== D && A();
      }
      function O() {
        (N(), D != null && (A(), o("WAWebModalManager").ModalManager.close()));
      }
      var B = c != null ? c : S(R, a),
        W = p == null || (t = p.navigator) == null ? void 0 : t.mediaDevices,
        q =
          R ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA ||
          R ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA_AND_MICROPHONE ||
          R ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .MICROPHONE
            ? p != null && W != null
              ? function (e) {
                  return W.getUserMedia(e);
                }
              : o("WAGetUserMedia").getUserMedia
            : R ===
                o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                  .DESKTOP
              ? p != null && W != null
                ? function (e) {
                    return W.getDisplayMedia(e);
                  }
                : o("WAGetDisplayMedia").getDisplayMedia
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      R,
                  );
                })(),
        U = y(m, function () {
          ((I = !0), O());
        }),
        V = n("asyncToGeneratorRuntime")
          .asyncToGenerator(function* () {
            var e;
            ((x = yield L(R)), C(P), M());
            var t =
                (e = p == null ? void 0 : p.navigator) != null ? e : navigator,
              a = !1;
            if (
              R ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE
            ) {
              var i = yield o(
                  "WAWebMediaPermissionsUtils",
                ).checkMediaPermissionState("microphone", t),
                l = i.denied;
              a = l;
            } else if (
              R ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA
            ) {
              var c = yield o(
                  "WAWebMediaPermissionsUtils",
                ).checkMediaPermissionState("camera", t),
                m = c.denied;
              a = m;
            } else
              R ===
                o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                  .CAMERA_AND_MICROPHONE &&
                (a = yield o(
                  "WAWebMediaPermissionsUtils",
                ).isAnyMediaPermissionDenied(["microphone", "camera"], t));
            if ((C(P), a))
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
                r = e.retry;
              return new (d || (d = n("Promise")))(function (e, n) {
                if ((M(), P())) {
                  e(void 0);
                  return;
                }
                if (!q)
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaCapture:start() no ability to capture media",
                      ])),
                  ),
                    n(new (o("WAWebGetUserMediaErrors").GetUserMediaError)()));
                else {
                  var a = B[t];
                  q(a)
                    .then(function (e) {
                      if (P()) {
                        h(e);
                        return;
                      }
                      return ((E = e), e);
                    })
                    .then(e)
                    .catch(function (o) {
                      b(
                        P,
                        function () {
                          return e(void 0);
                        },
                        function () {
                          if (o.name === "NotReadableError" && B[t + 1]) {
                            r();
                            return;
                          }
                          n(o);
                        },
                      );
                    });
                }
              });
            });
          })()
          .catch(function (e) {
            return v(e, P);
          })
          .finally(function () {
            (U(), O());
          });
      return {
        asyncStream: V,
        disposeStream: function () {
          ((I = !0), U(), O(), E && h(E));
        },
      };
    }
    function h(e) {
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
    function y(e, t) {
      return (
        (e == null ? void 0 : e.aborted) === !0
          ? t()
          : e == null || e.addEventListener("abort", t, { once: !0 }),
        function () {
          return e == null ? void 0 : e.removeEventListener("abort", t);
        }
      );
    }
    function C(e) {
      if (e())
        throw new (o("WAAbortError").AbortError)(
          "Capture stopped while reading permission state",
        );
    }
    function b(e, t, n) {
      if (e()) {
        t();
        return;
      }
      n();
    }
    function v(e, t) {
      var n = e instanceof Error ? e.name : e;
      if (!(n === o("WAAbortError").ABORT_ERROR && t())) {
        var r = _[n] || o("WAWebGetUserMediaErrors").GetUserMediaError;
        throw new r(e instanceof Error ? e.message : void 0);
      }
    }
    function S(e, t) {
      var r = [];
      e: {
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
        ) {
          r.push.apply(r, R(!1, t));
          break e;
        }
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .CAMERA_AND_MICROPHONE
        ) {
          r.push.apply(r, R(!0, t));
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
          var a = R(!1);
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
    function R(e, t) {
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
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e !==
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA_AND_MICROPHONE
          )
            return null;
          var t = yield (d || (d = n("Promise"))).all([
              o("WAWebMediaPermissionsUtils").checkMediaPermissionState(
                "microphone",
              ),
              o("WAWebMediaPermissionsUtils").checkMediaPermissionState(
                "camera",
              ),
            ]),
            r = t[0].granted,
            a = t[1].granted;
          return { micGranted: r, camGranted: a };
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
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
        : p.jsx(o("WAWebGuidePopup.react").GuidePopup, {
            messaging: a,
            type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_ALLOW,
            featureSurface: t,
          });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    var I;
    function T() {
      return (
        I === void 0 && (I = "srcObject" in document.createElement("video")),
        I
      );
    }
    ((l.start = g), (l.stop = h), (l.isSrcObjectInVideoElement = T));
  },
  98,
);
