__d(
  "WAWebVoipCameraPrewarm",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebLocalStorage",
    "WAWebMediaPermissionsUtils",
    "WAWebNoop",
    "WAWebUserPrefsVoip",
    "WAWebVoipCameraTrackConstraints",
    "WAWebVoipConverterPrewarm",
    "WAWebVoipPerfOptimizations",
    "WAWebVoipResolutionCap",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = null,
      m = !1,
      p = !1,
      _ = null,
      f = 640,
      g = 480,
      h = 30,
      y = "voip_prewarm_resolution",
      C = null;
    function b() {
      try {
        if (r("WAWebLocalStorage") == null) return null;
        var e = r("WAWebLocalStorage").getItem(y);
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
    function v(t) {
      try {
        if (r("WAWebLocalStorage") == null) return;
        r("WAWebLocalStorage").setItem(
          y,
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
    function S() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    async function R() {
      if (
        o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
          o("WAWebVoipPerfOptimizations").PerfOptimizationFlag.CAMERA_PREWARM,
        ) &&
        !S() &&
        !(d != null || m)
      ) {
        ((m = !0), (p = !1));
        var e = r("WAWebNoop");
        _ = new Promise(function (t) {
          e = t;
        });
        try {
          var t, n, a;
          if (
            o("WAWebVoipPerfOptimizations").isPerfOptimizationEnabled(
              o("WAWebVoipPerfOptimizations").PerfOptimizationFlag
                .PERMISSIONS_API_OPTIMIZATION,
            )
          ) {
            var i = await o(
                "WAWebMediaPermissionsUtils",
              ).checkMediaPermissionState("camera"),
              l = i.denied;
            if (l) return;
          }
          if (p) return;
          var u = navigator.mediaDevices;
          if (u == null || u.getUserMedia == null) return;
          var c = b(),
            y = o("WAWebVoipResolutionCap").applyLowEndResolutionCap({
              width: (t = c == null ? void 0 : c.width) != null ? t : f,
              height: (n = c == null ? void 0 : c.height) != null ? n : g,
              maxFps: (a = c == null ? void 0 : c.maxFps) != null ? a : h,
            }),
            v = y.height,
            R = y.maxFps,
            L = y.width;
          ((C = { width: L, height: v, maxFps: R }),
            o("WAWebVoipConverterPrewarm").prewarmConverter(L, v));
          var E = o("WAWebUserPrefsVoip").getSelectedVideoInputDevice(),
            k = r("WAWebVoipCameraTrackConstraints")({
              width: L,
              height: v,
              maxFps: R,
            });
          r("isStringNullOrEmpty")(E) || (k.deviceId = { exact: E });
          var I = u
            .getUserMedia({ video: k, audio: !1 })
            .then(function (e) {
              return p
                ? (e.getTracks().forEach(function (e) {
                    return e.stop();
                  }),
                  (d = null),
                  (C = null),
                  null)
                : e;
            })
            .catch(function (e) {
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [CameraPrewarm] Camera pre-warm failed: ",
                      "",
                    ])),
                  e,
                ),
                (d = null),
                (C = null),
                null
              );
            });
          d = { streamPromise: I };
        } finally {
          ((m = !1), e());
        }
      }
    }
    async function L() {
      if ((_ != null && (await _, (_ = null)), d == null)) return null;
      var e = d,
        t = e.streamPromise;
      return ((d = null), t);
    }
    function E(e, t) {
      var n,
        a,
        i = e.getVideoTracks()[0];
      if (i == null) {
        (o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [CameraPrewarm] No video track found, aborting resolution switch",
            ])),
        ),
          (C = null));
        return;
      }
      var l = C;
      if (
        ((C = null),
        !(
          l != null &&
          t.width === l.width &&
          t.height === l.height &&
          t.maxFps === l.maxFps
        ))
      ) {
        var s = (n = l == null ? void 0 : l.width) != null ? n : f,
          d = (a = l == null ? void 0 : l.height) != null ? a : g;
        i.applyConstraints(r("WAWebVoipCameraTrackConstraints")(t))
          .then(function () {
            v(t);
          })
          .catch(function (e) {
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [CameraPrewarm] resolution switch failed: ",
                  "",
                ])),
              e,
            );
          });
      }
    }
    function k() {
      return d != null;
    }
    async function I() {
      if ((m && (p = !0), d == null)) {
        ((C = null), (_ = null));
        return;
      }
      var e = d,
        t = e.streamPromise;
      ((d = null), (C = null));
      try {
        var n = await t;
        n != null &&
          n.getTracks().forEach(function (e) {
            return e.stop();
          });
      } catch (e) {}
      await o("WAWebVoipConverterPrewarm").cleanupPrewarmedConverter();
    }
    ((l.prewarmCamera = R),
      (l.consumePrewarmedStream = L),
      (l.scheduleResolutionSwitch = E),
      (l.hasPrewarmedStream = k),
      (l.cleanupPrewarmedCamera = I));
  },
  98,
);
