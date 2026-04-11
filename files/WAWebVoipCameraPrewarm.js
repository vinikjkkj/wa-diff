__d(
  "WAWebVoipCameraPrewarm",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebLocalStorage",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebVoipConverterPrewarm",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipResolutionCap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = null,
      p = !1,
      _ = !1,
      f = null,
      g = 640,
      h = 480,
      y = 30,
      C = "voip_prewarm_resolution",
      b = null;
    function v() {
      try {
        if (r("WAWebLocalStorage") == null) return null;
        var e = r("WAWebLocalStorage").getItem(C);
        if (e == null) return null;
        var t = JSON.parse(e);
        return typeof t.width == "number" &&
          typeof t.height == "number" &&
          typeof t.maxFps == "number" &&
          t.width > 0 &&
          t.width <= 1920 &&
          t.height > 0 &&
          t.height <= 1080 &&
          t.maxFps > 0 &&
          t.maxFps <= 60
          ? { width: t.width, height: t.height, maxFps: t.maxFps }
          : null;
      } catch (e) {
        return null;
      }
    }
    function S(t) {
      try {
        if (r("WAWebLocalStorage") == null) return;
        r("WAWebLocalStorage").setItem(
          C,
          JSON.stringify({
            width: t.width,
            height: t.height,
            maxFps: t.maxFps,
          }),
        );
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [CameraPrewarm] Failed to save preferred resolution: ",
              "",
            ])),
          t,
        );
      }
    }
    function R() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
              o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                .CAMERA_PREWARM,
            ) &&
            !R() &&
            !(m != null || p)
          ) {
            ((p = !0), (_ = !1));
            var e = r("WAWebNoop");
            f = new (d || (d = n("Promise")))(function (t) {
              e = t;
            });
            try {
              var t, a, i;
              if (
                o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
                  o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                    .PERMISSIONS_API_OPTIMIZATION,
                )
              ) {
                var l = yield o(
                    "WAWebMediaPermissionsUtils",
                  ).checkMediaPermissionState("camera"),
                  s = l.denied;
                if (s) return;
              }
              if (_) return;
              var u = navigator.mediaDevices;
              if (u == null || u.getUserMedia == null) return;
              var C = v(),
                S = o("WAWebVoipResolutionCap").applyLowEndResolutionCap({
                  width: (t = C == null ? void 0 : C.width) != null ? t : g,
                  height: (a = C == null ? void 0 : C.height) != null ? a : h,
                  maxFps: (i = C == null ? void 0 : C.maxFps) != null ? i : y,
                }),
                L = S.height,
                E = S.maxFps,
                k = S.width;
              ((b = { width: k, height: L, maxFps: E }),
                o("WAWebVoipConverterPrewarm").prewarmConverter(k, L));
              var I = u
                .getUserMedia({
                  video: {
                    width: { ideal: k },
                    height: { ideal: L },
                    frameRate: { ideal: E },
                  },
                  audio: !1,
                })
                .then(function (e) {
                  return _
                    ? (e.getTracks().forEach(function (e) {
                        return e.stop();
                      }),
                      (m = null),
                      (b = null),
                      null)
                    : e;
                })
                .catch(function (e) {
                  return (
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "voip: [CameraPrewarm] Camera pre-warm failed: ",
                          "",
                        ])),
                      e,
                    ),
                    (m = null),
                    (b = null),
                    null
                  );
                });
              m = { streamPromise: I };
            } finally {
              ((p = !1), e());
            }
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if ((f != null && (yield f, (f = null)), m == null)) return null;
          var e = m,
            t = e.streamPromise;
          return ((m = null), t);
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      var n,
        r,
        a = e.getVideoTracks()[0];
      if (a == null) {
        (o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [CameraPrewarm] No video track found, aborting resolution switch",
            ])),
        ),
          (b = null));
        return;
      }
      var i = b;
      if (
        ((b = null),
        !(
          i != null &&
          t.width === i.width &&
          t.height === i.height &&
          t.maxFps === i.maxFps
        ))
      ) {
        var l = (n = i == null ? void 0 : i.width) != null ? n : g,
          c = (r = i == null ? void 0 : i.height) != null ? r : h;
        a.applyConstraints({
          width: { ideal: t.width },
          height: { ideal: t.height },
          frameRate: { ideal: t.maxFps },
        })
          .then(function () {
            S(t);
          })
          .catch(function (e) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [CameraPrewarm] resolution switch failed: ",
                  "",
                ])),
              e,
            );
          });
      }
    }
    function D() {
      return m != null;
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if ((p && (_ = !0), m == null)) {
            ((b = null), (f = null));
            return;
          }
          var e = m,
            t = e.streamPromise;
          ((m = null), (b = null));
          try {
            var n = yield t;
            n != null &&
              n.getTracks().forEach(function (e) {
                return e.stop();
              });
          } catch (e) {}
          yield o("WAWebVoipConverterPrewarm").cleanupPrewarmedConverter();
        })),
        $.apply(this, arguments)
      );
    }
    ((l.prewarmCamera = L),
      (l.consumePrewarmedStream = k),
      (l.scheduleResolutionSwitch = T),
      (l.hasPrewarmedStream = D),
      (l.cleanupPrewarmedCamera = x));
  },
  98,
);
