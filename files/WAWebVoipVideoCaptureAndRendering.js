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
    "WAWebVoipVideoCameraCapture",
    "WAWebVoipVideoDesktopCapture",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoRendererRegistry",
    "WAWebVoipVirtualVideoCaptureDriver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "startVideoCapture",
      c = 2e3,
      d = "classify_timeout";
    async function m(t) {
      if (!t.startsWith(u)) return !1;
      try {
        var n = await o("WAPromiseDelays").withTimeout(
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
    }
    var p = new (o("WAWebVoipOperationQueue").WAWebVoipOperationQueue)(
        "VideoCapture",
        void 0,
        m,
      ),
      _ = null;
    function f() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "enable_web_voip_virtual_video_capture_driver",
        ) === !0
      );
    }
    async function g(e) {
      (o("WAWebVoipPerfMeasurement").startMeasurement(
        o("WAWebVoipPerfMeasurement").PerfMeasurement.FIRST_CAMERA_FRAME,
      ),
        p.enqueue(async function () {
          if (f()) {
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [VirtualVideoCapture] creating driver",
                ])),
            ),
              _ != null && _.stop(),
              (_ = new (o(
                "WAWebVoipVirtualVideoCaptureDriver",
              ).WAWebVoipVirtualVideoCaptureDriver)()));
            var t = _.start();
            await o(
              "WAWebVoipVideoCameraCapture",
            ).WAWebVoipVideoCameraCapture.startWithStream(t, 1280, 720, 30);
            return;
          }
          var n = e.camera_id,
            r = e.height,
            a = e.isAVUpgrade,
            i = a === void 0 ? !1 : a,
            l = e.max_fps,
            u = e.width;
          await o(
            "WAWebVoipVideoCameraCapture",
          ).WAWebVoipVideoCameraCapture.startCameraCapture({
            camera_id_requested: n,
            height: r,
            isAVUpgrade: i,
            isStackRequest: !0,
            max_fps: l,
            width: u,
          });
        }, "startVideoCapture"));
    }
    async function h() {
      p.enqueue(async function () {
        var e = _;
        (e != null && (e.stop(), (_ = null)),
          await o(
            "WAWebVoipVideoCameraCapture",
          ).WAWebVoipVideoCameraCapture.stopCapture());
      }, "stopVideoCapture");
    }
    function y(e, t) {
      var n =
        t &&
        (e !== o("WAWebVoipVideoRenderSource").selfPreviewJid ||
          o(
            "WAWebVoipDualStreamScreenShareState",
          ).isSelfDualStreamScreenShareActive());
      return o(
        "WAWebVoipVideoRenderSource",
      ).WAWebVoipVideoRenderSource.fromWire(e, n);
    }
    async function C(e) {
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
        m = y(c, l);
      m != null &&
        o(
          "WAWebVoipVideoRendererRegistry",
        ).videoRendererRegistry.onVideoFrameWasmToJs(m, n, d, r, s, t, u, a);
    }
    function b(e) {
      var t = e.frame,
        n = e.height,
        r = e.orientation,
        a = e.width;
      o(
        "WAWebVoipVideoRendererRegistry",
      ).videoRendererRegistry.onSelfPreviewVideoFrame(t, a, n, r);
    }
    async function v(e) {
      p.enqueue(async function () {
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
    async function S() {
      p.enqueue(async function () {
        await o(
          "WAWebVoipVideoDesktopCapture",
        ).WAWebVoipVideoDesktopCapture.stopCapture();
      }, "stopDesktopCapture");
    }
    function R() {
      (o(
        "WAWebVoipVideoDesktopCapture",
      ).WAWebVoipVideoDesktopCapture.releasePreflightDesktopStream(),
        o(
          "WAWebVoipVideoDesktopCapture",
        ).WAWebVoipVideoDesktopCapture.releaseDesktopStream());
    }
    ((l.startVideoCaptureJS = g),
      (l.stopVideoCaptureJS = h),
      (l.onVideoFrameWasmToJs = C),
      (l.onSelfPreviewVideoFrameWasmToJs = b),
      (l.startDesktopCaptureJS = v),
      (l.stopDesktopCaptureJS = S),
      (l.releaseDesktopStreamJS = R));
  },
  98,
);
