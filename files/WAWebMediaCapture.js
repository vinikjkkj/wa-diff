__d(
  "WAWebMediaCapture",
  [
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
    "cr:19603",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = c || (c = o("react")),
      m = Object.freeze(
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
    function p(e) {
      var t,
        n = e.featureSurface,
        a = e.mediaConstraints,
        i = e.targetWindow,
        l = e.timeoutCallback,
        c = e.timeoutLimit,
        d = e.type,
        p,
        g = !1,
        C = null,
        b = !1,
        v = null,
        S = c != null ? c : m[d];
      function R() {
        (C != null && self.clearTimeout(C),
          S < Number.POSITIVE_INFINITY &&
            (C = self.setTimeout(function () {
              l ? l() : (y(d, n, v), (b = !0));
            }, S)));
      }
      var L = a != null ? a : f(d),
        E = i == null || (t = i.navigator) == null ? void 0 : t.mediaDevices,
        k =
          d ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA ||
          d ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA_AND_MICROPHONE ||
          d ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .MICROPHONE
            ? i != null && E != null
              ? function (e) {
                  return E.getUserMedia(e);
                }
              : o("WAGetUserMedia").getUserMedia
            : d ===
                o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                  .DESKTOP
              ? i != null && E != null
                ? function (e) {
                    return E.getDisplayMedia(e);
                  }
                : o("WAGetDisplayMedia").getDisplayMedia
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      d,
                  );
                })(),
        I = (async function (e) {
          ((v = await h(d)), R());
          var t =
              (e = i == null ? void 0 : i.navigator) != null ? e : navigator,
            n = !1;
          if (
            d ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .MICROPHONE
          ) {
            var a = await o(
                "WAWebMediaPermissionsUtils",
              ).checkMediaPermissionState("microphone", t),
              l = a.denied;
            n = l;
          } else if (
            d ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
          ) {
            var c = await o(
                "WAWebMediaPermissionsUtils",
              ).checkMediaPermissionState("camera", t),
              m = c.denied;
            n = m;
          } else
            d ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA_AND_MICROPHONE &&
              (n = await o(
                "WAWebMediaPermissionsUtils",
              ).isAnyMediaPermissionDenied(["microphone", "camera"], t));
          if (n)
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
              n = e.retry;
            return new Promise(function (e, r) {
              if ((R(), !k))
                (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "MediaCapture:start() no ability to capture media",
                    ])),
                ),
                  r(
                    new (o("WAWebMiscErrors").GetUserMedia.GetUserMediaError)(),
                  ));
              else {
                var a = L[t];
                k(a)
                  .then(function (e) {
                    if (g) {
                      _(e);
                      return;
                    }
                    return ((p = e), e);
                  })
                  .then(e)
                  .catch(function (e) {
                    if (e.name === "NotReadableError" && L[t + 1]) {
                      n();
                      return;
                    }
                    r(e);
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
            (b && o("WAWebModalManager").ModalManager.close(),
              C && self.clearTimeout(C));
          });
      return {
        asyncStream: I,
        disposeStream: function () {
          ((g = !0), p && _(p));
        },
      };
    }
    function _(e) {
      if (typeof e.stop == "function") e.stop();
      else for (var t = e.getTracks(), n = 0; n < t.length; n++) t[n].stop();
    }
    function f(e) {
      var t = [];
      e: {
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
        ) {
          t.push.apply(t, g(!1));
          break e;
        }
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .CAMERA_AND_MICROPHONE
        ) {
          t.push.apply(t, g(!0));
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
          var r = g(!1);
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
    function g(e) {
      var t = o("WAWebABProps").getABPropConfigValue("web_image_max_edge"),
        n = 1280,
        r = 720;
      return [
        { video: { width: t, height: t }, audio: e },
        { video: { width: Math.min(n, t), height: Math.min(r, t) }, audio: e },
        { video: !0, audio: e },
      ];
    }
    async function h(e) {
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
    function y(e, t, n) {
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
          d.jsx(o("WAWebGuidePopup.react").GuidePopup, {
            messaging: a,
            type: o("WAWebGuidePopup.react").GuidePopupType.GUIDE_ALLOW,
            featureSurface: t,
          }),
        );
    }
    var C;
    function b() {
      return (
        C === void 0 && (C = "srcObject" in document.createElement("video")),
        C
      );
    }
    ((l.start = p), (l.stop = _), (l.isSrcObjectInVideoElement = b));
  },
  98,
);
