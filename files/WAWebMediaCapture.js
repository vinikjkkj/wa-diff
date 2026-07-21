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
        a = e.featureSurface,
        i = e.mediaConstraints,
        l = e.targetWindow,
        d = e.timeoutCallback,
        m = e.timeoutLimit,
        f = e.type,
        y,
        b = !1,
        S = null,
        R = !1,
        L = null,
        E = m != null ? m : _[f];
      function k() {
        (S != null && self.clearTimeout(S),
          E < Number.POSITIVE_INFINITY &&
            (S = self.setTimeout(function () {
              d ? d() : (v(f, a, L), (R = !0));
            }, E)));
      }
      var I = i != null ? i : h(f),
        T = l == null || (t = l.navigator) == null ? void 0 : t.mediaDevices,
        D =
          f ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA ||
          f ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA_AND_MICROPHONE ||
          f ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .MICROPHONE
            ? l != null && T != null
              ? function (e) {
                  return T.getUserMedia(e);
                }
              : o("WAGetUserMedia").getUserMedia
            : f ===
                o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                  .DESKTOP
              ? l != null && T != null
                ? function (e) {
                    return T.getDisplayMedia(e);
                  }
                : o("WAGetDisplayMedia").getDisplayMedia
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      f,
                  );
                })(),
        x = n("asyncToGeneratorRuntime")
          .asyncToGenerator(function* () {
            var e;
            ((L = yield C(f)), k());
            var t =
                (e = l == null ? void 0 : l.navigator) != null ? e : navigator,
              a = !1;
            if (
              f ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE
            ) {
              var i = yield o(
                  "WAWebMediaPermissionsUtils",
                ).checkMediaPermissionState("microphone", t),
                d = i.denied;
              a = d;
            } else if (
              f ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA
            ) {
              var m = yield o(
                  "WAWebMediaPermissionsUtils",
                ).checkMediaPermissionState("camera", t),
                p = m.denied;
              a = p;
            } else
              f ===
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
              return new (c || (c = n("Promise")))(function (e, n) {
                if ((k(), !D))
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaCapture:start() no ability to capture media",
                      ])),
                  ),
                    n(new (o("WAWebGetUserMediaErrors").GetUserMediaError)()));
                else {
                  var a = I[t];
                  D(a)
                    .then(function (e) {
                      if (b) {
                        g(e);
                        return;
                      }
                      return ((y = e), e);
                    })
                    .then(e)
                    .catch(function (e) {
                      if (e.name === "NotReadableError" && I[t + 1]) {
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
              n = p[t] || o("WAWebGetUserMediaErrors").GetUserMediaError;
            throw new n();
          })
          .finally(function () {
            (R && o("WAWebModalManager").ModalManager.close(),
              S && self.clearTimeout(S));
          });
      return {
        asyncStream: x,
        disposeStream: function () {
          ((b = !0), y && g(y));
        },
      };
    }
    function g(e) {
      if (typeof e.stop == "function") e.stop();
      else for (var t = e.getTracks(), n = 0; n < t.length; n++) t[n].stop();
    }
    function h(e) {
      var t = [];
      e: {
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
        ) {
          t.push.apply(t, y(!1));
          break e;
        }
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .CAMERA_AND_MICROPHONE
        ) {
          t.push.apply(t, y(!0));
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
          var r = y(!1);
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
    function y(e) {
      var t = o("WAWebABProps").getABPropConfigValue("web_image_max_edge"),
        n = 1280,
        r = 720;
      return [
        { video: { width: t, height: t }, audio: e },
        { video: { width: Math.min(n, t), height: Math.min(r, t) }, audio: e },
        { video: !0, audio: e },
      ];
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            e !==
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA_AND_MICROPHONE
          )
            return null;
          var t = yield (c || (c = n("Promise"))).all([
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
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
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
      a != null &&
        o("WAWebModalManager").ModalManager.open(
          m.jsx(o("WAWebGuidePopup.react").GuidePopup, {
            messaging: a,
            type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_ALLOW,
            featureSurface: t,
          }),
        );
    }
    var S;
    function R() {
      return (
        S === void 0 && (S = "srcObject" in document.createElement("video")),
        S
      );
    }
    ((l.start = f), (l.stop = g), (l.isSrcObjectInVideoElement = R));
  },
  98,
);
