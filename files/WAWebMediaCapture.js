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
        a = e.cameraFacingMode,
        i = e.featureSurface,
        l = e.mediaConstraints,
        c = e.targetWindow,
        m = e.timeoutCallback,
        p = e.timeoutLimit,
        g = e.type,
        C,
        v = !1,
        R = null,
        L = null,
        E = null,
        k = p != null ? p : f[g];
      function I() {
        R != null && (self.clearTimeout(R), (R = null));
      }
      function T() {
        (I(),
          !v &&
            k < Number.POSITIVE_INFINITY &&
            (R = self.setTimeout(function () {
              if (((R = null), !v))
                if (m) m();
                else {
                  var e = S(g, i, E);
                  e != null &&
                    (D(),
                    (L = e),
                    o("WAWebModalManager").ModalManager.on("open_modal", $),
                    o("WAWebModalManager").ModalManager.on("close_modal", x),
                    o("WAWebModalManager").ModalManager.open(e));
                }
            }, k)));
      }
      function D() {
        (o("WAWebModalManager").ModalManager.off("open_modal", $),
          o("WAWebModalManager").ModalManager.off("close_modal", x));
      }
      function x() {
        ((L = null), D());
      }
      function $(e) {
        e !== L && x();
      }
      function P() {
        (I(), L != null && (x(), o("WAWebModalManager").ModalManager.close()));
      }
      var N = l != null ? l : y(g, a),
        M = c == null || (t = c.navigator) == null ? void 0 : t.mediaDevices,
        w =
          g ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA ||
          g ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .CAMERA_AND_MICROPHONE ||
          g ===
            o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
              .MICROPHONE
            ? c != null && M != null
              ? function (e) {
                  return M.getUserMedia(e);
                }
              : o("WAGetUserMedia").getUserMedia
            : g ===
                o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                  .DESKTOP
              ? c != null && M != null
                ? function (e) {
                    return M.getDisplayMedia(e);
                  }
                : o("WAGetDisplayMedia").getDisplayMedia
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      g,
                  );
                })(),
        A = n("asyncToGeneratorRuntime")
          .asyncToGenerator(function* () {
            var e;
            ((E = yield b(g)), T());
            var t =
                (e = c == null ? void 0 : c.navigator) != null ? e : navigator,
              a = !1;
            if (
              g ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .MICROPHONE
            ) {
              var i = yield o(
                  "WAWebMediaPermissionsUtils",
                ).checkMediaPermissionState("microphone", t),
                l = i.denied;
              a = l;
            } else if (
              g ===
              o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA
            ) {
              var m = yield o(
                  "WAWebMediaPermissionsUtils",
                ).checkMediaPermissionState("camera", t),
                p = m.denied;
              a = p;
            } else
              g ===
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
                new (o("WAWebGetUserMediaErrors").NotAllowedError)(
                  "Permissions API reports denied",
                )
              );
            return r("WARetryPromise")(function (e) {
              var t = e.failCount,
                r = e.retry;
              return new (d || (d = n("Promise")))(function (e, n) {
                if ((T(), v)) {
                  e(void 0);
                  return;
                }
                if (!w)
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "MediaCapture:start() no ability to capture media",
                      ])),
                  ),
                    n(new (o("WAWebGetUserMediaErrors").GetUserMediaError)()));
                else {
                  var a = N[t];
                  w(a)
                    .then(function (e) {
                      if (v) {
                        h(e);
                        return;
                      }
                      return ((C = e), e);
                    })
                    .then(e)
                    .catch(function (e) {
                      if (e.name === "NotReadableError" && N[t + 1]) {
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
            var t = e instanceof Error ? e.name : e,
              n = _[t] || o("WAWebGetUserMediaErrors").GetUserMediaError;
            throw new n(e instanceof Error ? e.message : void 0);
          })
          .finally(P);
      return {
        asyncStream: A,
        disposeStream: function () {
          ((v = !0), P(), C && h(C));
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
      var r = [];
      e: {
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType.CAMERA
        ) {
          r.push.apply(r, C(!1, t));
          break e;
        }
        if (
          e ===
          o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
            .CAMERA_AND_MICROPHONE
        ) {
          r.push.apply(r, C(!0, t));
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
          var a = C(!1);
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
    function C(e, t) {
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
