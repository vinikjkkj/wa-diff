__d(
  "WAWebMediaCapture",
  [
    "Promise",
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
        a = e.featureSurface,
        i = e.mediaConstraints,
        l = e.targetWindow,
        c = e.timeoutCallback,
        m = e.timeoutLimit,
        p = e.type,
        g,
        C = !1,
        v = null,
        R = null,
        L = null,
        E = m != null ? m : f[p];
      function k() {
        v != null && (self.clearTimeout(v), (v = null));
      }
      function I() {
        (k(),
          !C &&
            E < Number.POSITIVE_INFINITY &&
            (v = self.setTimeout(function () {
              if (((v = null), !C))
                if (c) c();
                else {
                  var e = S(p, a, L);
                  e != null &&
                    (T(),
                    (R = e),
                    o("WAWebModalManager").ModalManager.on("open_modal", x),
                    o("WAWebModalManager").ModalManager.on("close_modal", D),
                    o("WAWebModalManager").ModalManager.open(e));
                }
            }, E)));
      }
      function T() {
        (o("WAWebModalManager").ModalManager.off("open_modal", x),
          o("WAWebModalManager").ModalManager.off("close_modal", D));
      }
      function D() {
        ((R = null), T());
      }
      function x(e) {
        e !== R && D();
      }
      function $() {
        (k(), R != null && (D(), o("WAWebModalManager").ModalManager.close()));
      }
      var P = i != null ? i : y(p),
        N = l == null || (t = l.navigator) == null ? void 0 : t.mediaDevices,
        M =
          p ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA ||
          p ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA_AND_MICROPHONE ||
          p ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .MICROPHONE
            ? l != null && N != null
              ? function (e) {
                  return N.getUserMedia(e);
                }
              : o("WAGetUserMedia").getUserMedia
            : p ===
                o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                  .DESKTOP
              ? l != null && N != null
                ? function (e) {
                    return N.getDisplayMedia(e);
                  }
                : o("WAGetDisplayMedia").getDisplayMedia
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      p,
                  );
                })(),
        w = n("asyncToGeneratorRuntime")
          .asyncToGenerator(function* () {
            var e;
            ((L = yield b(p)), I());
            var t =
                (e = l == null ? void 0 : l.navigator) != null ? e : navigator,
              a = !1;
            if (
              p ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE
            ) {
              var i = yield o(
                  "WAWebMediaPermissionsUtils",
                ).checkMediaPermissionState("microphone", t),
                c = i.denied;
              a = c;
            } else if (
              p ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA
            ) {
              var m = yield o(
                  "WAWebMediaPermissionsUtils",
                ).checkMediaPermissionState("camera", t),
                _ = m.denied;
              a = _;
            } else
              p ===
                o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                  .CAMERA_AND_MICROPHONE &&
                (a = yield o(
                  "WAWebMediaPermissionsUtils",
                ).isAnyMediaPermissionDenied(["microphone", "camera"], t));
            if (a)
              throw (
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "MediaCapture: permission already denied, fast-failing",
                    ])),
                ),
                new (o("WAWebGetUserMediaErrors").NotAllowedError)()
              );
            return r("WARetryPromise")(function (e) {
              var t = e.failCount,
                r = e.retry;
              return new (d || (d = n("Promise")))(function (e, n) {
                if ((I(), C)) {
                  e(void 0);
                  return;
                }
                if (!M)
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaCapture:start() no ability to capture media",
                      ])),
                  ),
                    n(new (o("WAWebGetUserMediaErrors").GetUserMediaError)()));
                else {
                  var a = P[t];
                  M(a)
                    .then(function (e) {
                      if (C) {
                        h(e);
                        return;
                      }
                      return ((g = e), e);
                    })
                    .then(e)
                    .catch(function (e) {
                      if (e.name === "NotReadableError" && P[t + 1]) {
                        r();
                        return;
                      }
                      n(e);
                    });
                }
              });
            });
          })()
          .catch(function (e) {
            var t = e instanceof Error ? (e == null ? void 0 : e.name) : e,
              n = _[t] || o("WAWebGetUserMediaErrors").GetUserMediaError;
            throw new n();
          })
          .finally($);
      return {
        asyncStream: w,
        disposeStream: function () {
          ((C = !0), $(), g && h(g));
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
    function y(e) {
      var t = [];
      e: {
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
        ) {
          t.push.apply(t, C(!1));
          break e;
        }
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .CAMERA_AND_MICROPHONE
        ) {
          t.push.apply(t, C(!0));
          break e;
        }
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .MICROPHONE
        ) {
          t.push({ audio: !0 });
          break e;
        }
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.DESKTOP
        ) {
          var r = C(!1);
          t.push.apply(
            t,
            r.map(function (e) {
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
        ? n("cr:19603").addSelectedDeviceConstraints(e, t)
        : t;
    }
    function C(e) {
      var t = o("WAWebABProps").getABPropConfigValue("web_image_max_edge"),
        n = 1280,
        r = 720;
      return [
        { video: { width: t, height: t }, audio: e },
        { video: { width: Math.min(n, t), height: Math.min(r, t) }, audio: e },
        { video: !0, audio: e },
      ];
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
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
    S.displayName = S.name + " [from " + i.id + "]";
    var R;
    function L() {
      return (
        R === void 0 && (R = "srcObject" in document.createElement("video")),
        R
      );
    }
    ((l.start = g), (l.stop = h), (l.isSrcObjectInVideoElement = L));
  },
  98,
);
