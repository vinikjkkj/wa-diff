__d(
  "WAWebMediaCapture",
  [
    "Promise",
    "WAGetDisplayMedia",
    "WAGetUserMedia",
    "WALogger",
    "WARetryPromise",
    "WAWebABProps",
    "WAWebGuidePopup.react",
    "WAWebMediaCaptureStreamType",
    "WAWebMediaPermissionsUtils",
    "WAWebMiscErrors",
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
      p = Object.freeze(
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
    function _(e) {
      var t,
        a = e.featureSurface,
        i = e.mediaConstraints,
        l = e.targetWindow,
        d = e.timeoutCallback,
        m = e.timeoutLimit,
        _ = e.type,
        h,
        C = !1,
        v = null,
        S = !1,
        R = null,
        L = m != null ? m : p[_];
      function E() {
        (v != null && self.clearTimeout(v),
          L < Number.POSITIVE_INFINITY &&
            (v = self.setTimeout(function () {
              d ? d() : (b(_, a, R), (S = !0));
            }, L)));
      }
      var k = i != null ? i : g(_),
        I = l == null || (t = l.navigator) == null ? void 0 : t.mediaDevices,
        T =
          _ ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA ||
          _ ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA_AND_MICROPHONE ||
          _ ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .MICROPHONE
            ? l != null && I != null
              ? function (e) {
                  return I.getUserMedia(e);
                }
              : o("WAGetUserMedia").getUserMedia
            : _ ===
                o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                  .DESKTOP
              ? l != null && I != null
                ? function (e) {
                    return I.getDisplayMedia(e);
                  }
                : o("WAGetDisplayMedia").getDisplayMedia
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      _,
                  );
                })(),
        D = n("asyncToGeneratorRuntime")
          .asyncToGenerator(function* () {
            var e;
            ((R = yield y(_)), E());
            var t =
                (e = l == null ? void 0 : l.navigator) != null ? e : navigator,
              a = !1;
            if (
              _ ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE
            ) {
              var i = yield o(
                  "WAWebMediaPermissionsUtils",
                ).checkMediaPermissionState("microphone", t),
                d = i.denied;
              a = d;
            } else if (
              _ ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA
            ) {
              var m = yield o(
                  "WAWebMediaPermissionsUtils",
                ).checkMediaPermissionState("camera", t),
                p = m.denied;
              a = p;
            } else
              _ ===
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
                new (o("WAWebMiscErrors").GetUserMedia.NotAllowedError)()
              );
            return r("WARetryPromise")(function (e) {
              var t = e.failCount,
                r = e.retry;
              return new (c || (c = n("Promise")))(function (e, n) {
                if ((E(), !T))
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaCapture:start() no ability to capture media",
                      ])),
                  ),
                    n(
                      new (o(
                        "WAWebMiscErrors",
                      ).GetUserMedia.GetUserMediaError)(),
                    ));
                else {
                  var a = k[t];
                  T(a)
                    .then(function (e) {
                      if (C) {
                        f(e);
                        return;
                      }
                      return ((h = e), e);
                    })
                    .then(e)
                    .catch(function (e) {
                      if (e.name === "NotReadableError" && k[t + 1]) {
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
              n =
                o("WAWebMiscErrors").GetUserMedia[t] ||
                o("WAWebMiscErrors").GetUserMedia.GetUserMediaError;
            throw new n();
          })
          .finally(function () {
            (S && o("WAWebModalManager").ModalManager.close(),
              v && self.clearTimeout(v));
          });
      return {
        asyncStream: D,
        disposeStream: function () {
          ((C = !0), h && f(h));
        },
      };
    }
    function f(e) {
      if (typeof e.stop == "function") e.stop();
      else for (var t = e.getTracks(), n = 0; n < t.length; n++) t[n].stop();
    }
    function g(e) {
      var t = [];
      e: {
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
        ) {
          t.push.apply(t, h(!1));
          break e;
        }
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .CAMERA_AND_MICROPHONE
        ) {
          t.push.apply(t, h(!0));
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
          var r = h(!1);
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
    function h(e) {
      var t = o("WAWebABProps").getABPropConfigValue("web_image_max_edge"),
        n = 1280,
        r = 720;
      return [
        { video: { width: t, height: t }, audio: e },
        { video: { width: Math.min(n, t), height: Math.min(r, t) }, audio: e },
        { video: !0, audio: e },
      ];
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
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
    var v;
    function S() {
      return (
        v === void 0 && (v = "srcObject" in document.createElement("video")),
        v
      );
    }
    ((l.start = _), (l.stop = f), (l.isSrcObjectInVideoElement = S));
  },
  98,
);
