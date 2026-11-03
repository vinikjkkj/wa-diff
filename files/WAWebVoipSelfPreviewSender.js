__d(
  "WAWebVoipSelfPreviewSender",
  [
    "WAWebVoipMediaEnums",
    "WAWebVoipVideoCaptureOffThread",
    "WAWebVoipVideoFrameCtor",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipWebCodecsEncoderCrop",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = null;
    function d(t) {
      c == null &&
        ((c = t),
        o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [self-preview] VideoFrame path off, using bytes: ",
              "",
            ])),
          t,
        ));
    }
    function m(e) {
      var t = o("WAWebVoipMediaEnums").formatEnumFromVideoFrameFormat(e);
      return (
        e !== "BGRA" &&
        (t === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12 ||
          t === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.I420 ||
          t === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA)
      );
    }
    var p = (function () {
      function e(e, t, n) {
        var r = n.videoFrame,
          o = n.visibleRectCropWorks;
        ((this.$1 = new Uint8Array(Math.floor(e * t * 1.5))),
          (this.$2 = r),
          (this.$3 = o));
      }
      var t = e.prototype;
      return (
        (t.trySendVideoFrame = function (t, n) {
          if (!this.$2 || c != null || !m(t.format)) return !1;
          var e = null;
          try {
            if (((e = this.$4(t)), e == null)) return !1;
            self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onSelfPreviewVideoFrameWasmToJs(
              {
                frame: e,
                width: o("WAWebVoipWebCodecsEncoderCrop").toEven(
                  t.displayWidth,
                ),
                height: o("WAWebVoipWebCodecsEncoderCrop").toEven(
                  t.displayHeight,
                ),
                orientation:
                  n.frame === t
                    ? n.orientation
                    : o("WAWebVoipMediaEnums").Orientation.Normal,
              },
            );
          } catch (t) {
            var r;
            return ((r = e) == null || r.close(), d(String(t)), !1);
          }
          return !0;
        }),
        (t.$4 = function (t) {
          var e = o("WAWebVoipWebCodecsEncoderCrop").getFrameVisibleRectOrigin(
              t,
            ),
            n = e.x,
            a = e.y,
            i = t.displayWidth,
            l = t.displayHeight;
          if (t.codedWidth === i && t.codedHeight === l && n === 0 && a === 0)
            return t.clone();
          var s = r("WAWebVoipVideoFrameCtor")();
          return !this.$3 || s == null
            ? null
            : new s(t, {
                visibleRect: { x: n, y: a, width: i, height: l },
                displayWidth: i,
                displayHeight: l,
              });
        }),
        (t.sendBytes = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.frame,
              n = e.isScreenShare,
              r = e.logDiagnostics,
              a = e.logPrefix,
              i = e.orientation,
              l = o("WAWebVoipMediaEnums").formatEnumFromVideoFrameFormat(
                t.format,
              ),
              c = t.format === "BGRA";
            try {
              if (
                l === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.NV12 ||
                l === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.I420 ||
                l === o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA ||
                c
              ) {
                var d = o("WAWebVoipWebCodecsEncoderCrop").toEven(
                    t.displayWidth,
                  ),
                  m = o("WAWebVoipWebCodecsEncoderCrop").toEven(
                    t.displayHeight,
                  ),
                  p = o(
                    "WAWebVoipWebCodecsEncoderCrop",
                  ).getFrameVisibleRectOrigin(t),
                  _ = p.x,
                  f = p.y,
                  g = t.allocationSize();
                (this.$1.buffer.byteLength === 0 || this.$1.byteLength < g) &&
                  (this.$1 = new Uint8Array(g));
                var h = this.$1;
                if (
                  (t.codedWidth !== d ||
                  t.codedHeight !== m ||
                  _ !== 0 ||
                  f !== 0
                    ? yield t.copyTo(h, {
                        rect: { x: _, y: f, width: d, height: m },
                      })
                    : yield t.copyTo(h),
                  c)
                )
                  for (var y = 0; y < h.length; y += 4) {
                    var C = h[y];
                    ((h[y] = h[y + 2]), (h[y + 2] = C));
                  }
                self.WhatsAppVoipWasmWorkerCompatibleCallbacks.onVideoFrameWasmToJs(
                  {
                    userJid: o("WAWebVoipVideoRendererInterface")
                      .selfPreviewJid,
                    frameBuffer: h.buffer,
                    width: d,
                    height: m,
                    format: c
                      ? o("WAWebVoipMediaEnums").WAWebVoipVideoFormat.RGBA
                      : l,
                    orientation: i,
                    timestamp: 0,
                    isKeyFrame: !1,
                    isScreenShare: n,
                  },
                );
              } else if (r) {
                var b;
                o("WAWebVoipVideoCaptureOffThread").WORKER_LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " skipping self-preview: unrecognized frame format=",
                      "",
                    ])),
                  a,
                  (b = t.format) != null ? b : "null",
                );
              }
            } catch (e) {
              r &&
                o("WAWebVoipVideoCaptureOffThread").WORKER_ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " self-preview error: ",
                      "",
                    ])),
                  a,
                  e,
                );
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    ((l.disableSelfPreviewVideoFrame = d), (l.WAWebVoipSelfPreviewSender = p));
  },
  98,
);
