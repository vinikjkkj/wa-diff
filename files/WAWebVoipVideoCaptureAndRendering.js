__d(
  "WAWebVoipVideoCaptureAndRendering",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebVoipOperationQueue",
    "WAWebVoipPerfMeasurement",
    "WAWebVoipVideoCameraCapture",
    "WAWebVoipVideoDesktopCapture",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVirtualVideoCaptureDriver",
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
    async function d(t) {
      (o("WAWebVoipPerfMeasurement").startMeasurement(
        o("WAWebVoipPerfMeasurement").PerfMeasurement.FIRST_CAMERA_FRAME,
      ),
        s.enqueue(async function () {
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
            await o(
              "WAWebVoipVideoCameraCapture",
            ).WAWebVoipVideoCameraCapture.startWithStream(n, 1280, 720, 30);
            return;
          }
          var r = t.camera_id,
            a = t.height,
            i = t.isAVUpgrade,
            l = i === void 0 ? !1 : i,
            s = t.max_fps,
            d = t.width;
          await o(
            "WAWebVoipVideoCameraCapture",
          ).WAWebVoipVideoCameraCapture.startCameraCapture(r, d, a, s, l);
        }, "startVideoCapture"));
    }
    async function m() {
      s.enqueue(async function () {
        var e = u;
        (e != null && (e.stop(), (u = null)),
          await o(
            "WAWebVoipVideoCameraCapture",
          ).WAWebVoipVideoCameraCapture.stopCapture());
      }, "stopVideoCapture");
    }
    async function p(e) {
      var t = e.format,
        n = e.frameBuffer,
        r = e.height,
        a = e.isKeyFrame,
        i = e.orientation,
        l = e.timestamp,
        s = e.userJid,
        u = e.width;
      o(
        "WAWebVoipVideoRendererRegistry",
      ).videoRendererRegistry.onVideoFrameWasmToJs(s, n, u, r, i, t, l, a);
    }
    async function _(e) {
      s.enqueue(async function () {
        var t = e.height,
          n = e.maxFps,
          r = e.width;
        await o(
          "WAWebVoipVideoDesktopCapture",
        ).WAWebVoipVideoDesktopCapture.startDesktopCapture({
          width: r,
          height: t,
          maxFps: n,
        });
      }, "startDesktopCapture");
    }
    async function f() {
      s.enqueue(async function () {
        await o(
          "WAWebVoipVideoDesktopCapture",
        ).WAWebVoipVideoDesktopCapture.stopCapture();
      }, "stopDesktopCapture");
    }
    ((l.startVideoCaptureJS = d),
      (l.stopVideoCaptureJS = m),
      (l.onVideoFrameWasmToJs = p),
      (l.startDesktopCaptureJS = _),
      (l.stopDesktopCaptureJS = f));
  },
  98,
);
