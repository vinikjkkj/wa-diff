__d(
  "WAWebVoipVideoCaptureAndRendering",
  [
    "WALogger",
    "WAWebABProps",
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
      s = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "VideoCapture",
      ),
      u = null;
    function c() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (o("WAWebVoipPerfMeasurement").startMeasurement(
            o("WAWebVoipPerfMeasurement").PerfMeasurement.FIRST_CAMERA_FRAME,
          ),
            s.enqueue(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                if (c()) {
                  (o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: [VirtualVideoCapture] creating driver",
                      ])),
                  ),
                    u != null && u.stop(),
                    (u = new (o(
                      "WAWebVoipVirtualVideoCaptureDriver",
                    ).WAWebVoipVirtualVideoCaptureDriver)()));
                  var n = u.start();
                  yield o(
                    "WAWebVoipVideoCameraCapture",
                  ).WAWebVoipVideoCameraCapture.startWithStream(
                    n,
                    1280,
                    720,
                    30,
                  );
                  return;
                }
                var r = t.camera_id,
                  a = t.height,
                  i = t.isAVUpgrade,
                  l = i === void 0 ? !1 : i,
                  s = t.max_fps,
                  d = t.width;
                yield o(
                  "WAWebVoipVideoCameraCapture",
                ).WAWebVoipVideoCameraCapture.startCameraCapture(r, d, a, s, l);
              }),
              "startVideoCapture",
            ));
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          s.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = u;
              (e != null && (e.stop(), (u = null)),
                yield o(
                  "WAWebVoipVideoCameraCapture",
                ).WAWebVoipVideoCameraCapture.stopCapture());
            }),
            "stopVideoCapture",
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return !t ||
        (e === o("WAWebVoipVideoRendererInterface").selfPreviewJid &&
          !o(
            "WAWebVoipDualStreamScreenShareState",
          ).isSelfDualStreamScreenShareActive())
        ? e
        : o("WAWebVoipScreenShareStreamKey").getScreenShareStreamKey(e);
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            m = f(c, l);
          o(
            "WAWebVoipVideoRendererRegistry",
          ).videoRendererRegistry.onVideoFrameWasmToJs(m, n, d, r, s, t, u, a);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          s.enqueue(
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
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          s.enqueue(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield o(
                "WAWebVoipVideoDesktopCapture",
              ).WAWebVoipVideoDesktopCapture.stopCapture();
            }),
            "stopDesktopCapture",
          );
        })),
        v.apply(this, arguments)
      );
    }
    ((l.startVideoCaptureJS = d),
      (l.stopVideoCaptureJS = p),
      (l.onVideoFrameWasmToJs = g),
      (l.startDesktopCaptureJS = y),
      (l.stopDesktopCaptureJS = b));
  },
  98,
);
