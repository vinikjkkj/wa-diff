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
        b = null,
        v = !1,
        S = m != null ? m : p[_];
      function R() {
        (b != null && self.clearTimeout(b),
          S < Number.POSITIVE_INFINITY &&
            (b = self.setTimeout(function () {
              d ? d() : (y(_, a), (v = !0));
            }, S)));
      }
      var L = i != null ? i : g(_),
        E = l == null || (t = l.navigator) == null ? void 0 : t.mediaDevices,
        k =
          _ ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA ||
          _ ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA_AND_MICROPHONE ||
          _ ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .MICROPHONE
            ? l != null && E != null
              ? function (e) {
                  return E.getUserMedia(e);
                }
              : o("WAGetUserMedia").getUserMedia
            : _ ===
                o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                  .DESKTOP
              ? l != null && E != null
                ? function (e) {
                    return E.getDisplayMedia(e);
                  }
                : o("WAGetDisplayMedia").getDisplayMedia
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      _,
                  );
                })(),
        I = n("asyncToGeneratorRuntime")
          .asyncToGenerator(function* () {
            var e;
            R();
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
                if ((R(), !k))
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
                  var a = L[t];
                  k(a)
                    .then(function (e) {
                      if (C) {
                        f(e);
                        return;
                      }
                      return ((h = e), e);
                    })
                    .then(e)
                    .catch(function (e) {
                      if (e.name === "NotReadableError" && L[t + 1]) {
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
            (v && o("WAWebModalManager").ModalManager.close(),
              b && self.clearTimeout(b));
          });
      return {
        asyncStream: I,
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
    function y(e, t) {
      var n =
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
              ? o("WAWebGuidePopup.react").Messaging.CAMERA_AND_MIC
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
      n != null &&
        o("WAWebModalManager").ModalManager.open(
          m.jsx(o("WAWebGuidePopup.react").GuidePopup, {
            messaging: n,
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
    ((l.start = _), (l.stop = f), (l.isSrcObjectInVideoElement = b));
  },
  98,
);
