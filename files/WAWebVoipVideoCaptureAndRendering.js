__d(
  "WAWebVoipVideoCaptureAndRendering",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebVoipDualStreamScreenShareState",
    "WAWebVoipOperationQueue",
    "WAWebVoipPerfMeasurement",
    "WAWebVoipScreenShareStreamKey",
    "WAWebVoipVideoCameraCapture",
    "WAWebVoipVideoDesktopCapture",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVirtualVideoCaptureDriver",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "startVideoCapture",
      c = 2e3,
      d = "classify_timeout";
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!t.startsWith(u)) return !1;
          try {
            var n = yield o("WAPromiseDelays").withTimeout(
              o("WAWebBackendApi").frontendSendAndReceive(
                "getVoipCameraPermissionState",
                void 0,
              ),
              c,
              function () {
                return d;
              },
            );
            return n === "prompt";
          } catch (t) {
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [VideoCapture:Queue] camera permission classify failed: ",
                      "",
                    ])),
                  t,
                )
                .sendLogs("voip-camera-perm-classify-failed"),
              !1
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    var _ = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "VideoCapture",
        void 0,
        m,
      ),
      f = null;
    function g() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebVoipPerfMeasurement").startMeasurement(
            o("WAWebVoipPerfMeasurement").PerfMeasurement.FIRST_CAMERA_FRAME,
          ),
            _.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (g()) {
                  (o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [VirtualVideoCapture] creating driver",
                      ])),
                  ),
                    f != null && f.stop(),
                    (f = new (o(
                      "WAWebVoipVirtualVideoCaptureDriver",
                    ).WAWebVoipVirtualVideoCaptureDriver)()));
                  var t = f.start();
                  yield o(
                    "WAWebVoipVideoCameraCapture",
                  ).WAWebVoipVideoCameraCapture.startWithStream(
                    t,
                    1280,
                    720,
                    30,
                  );
                  return;
                }
                var n = e.camera_id,
                  r = e.height,
                  a = e.isAVUpgrade,
                  i = a === void 0 ? !1 : a,
                  l = e.max_fps,
                  u = e.width;
                yield o(
                  "WAWebVoipVideoCameraCapture",
                ).WAWebVoipVideoCameraCapture.startCameraCapture(n, u, r, l, i);
              }),
              "startVideoCapture",
            ));
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          _.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = f;
              (e != null && (e.stop(), (f = null)),
                yield o(
                  "WAWebVoipVideoCameraCapture",
                ).WAWebVoipVideoCameraCapture.stopCapture());
            }),
            "stopVideoCapture",
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return !t ||
        (e === o("WAWebVoipVideoRendererInterface").selfPreviewJid &&
          !o(
            "WAWebVoipDualStreamScreenShareState",
          ).isSelfDualStreamScreenShareActive())
        ? e
        : o("WAWebVoipScreenShareStreamKey").getScreenShareStreamKey(e);
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.format,
            n = e.frameBuffer,
            r = e.height,
            a = e.isKeyFrame,
            i = e.isScreenShare,
            l = i === void 0 ? !1 : i,
            s = e.orientation,
            u = e.timestamp,
            c = e.userJid,
            d = e.width,
            m = v(c, l);
          o(
            "WAWebVoipVideoRendererRegistry",
          ).videoRendererRegistry.onVideoFrameWasmToJs(m, n, d, r, s, t, u, a);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          _.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = e.height,
                n = e.maxFps,
                r = e.width;
              yield o(
                "WAWebVoipVideoDesktopCapture",
              ).WAWebVoipVideoDesktopCapture.startDesktopCapture({
                width: r,
                height: t,
                maxFps: n,
              });
            }),
            "startDesktopCapture",
          );
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
          _.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield o(
                "WAWebVoipVideoDesktopCapture",
              ).WAWebVoipVideoDesktopCapture.stopCapture();
            }),
            "stopDesktopCapture",
          );
        })),
        I.apply(this, arguments)
      );
    }
    ((l.startVideoCaptureJS = h),
      (l.stopVideoCaptureJS = C),
      (l.onVideoFrameWasmToJs = S),
      (l.startDesktopCaptureJS = L),
      (l.stopDesktopCaptureJS = k));
  },
  98,
);
