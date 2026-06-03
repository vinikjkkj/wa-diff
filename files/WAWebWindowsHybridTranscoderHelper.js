__d(
  "WAWebWindowsHybridTranscoderHelper",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2577",
    "asyncToGeneratorRuntime",
    "cr:17219",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = 0;
    function h() {
      return (
        r("WAWebEnvironment").isWindows &&
        o("WAWebABProps").getABPropConfigValue(
          "enable_hybrid_video_transcoding",
        )
      );
    }
    function y() {
      return (
        h() &&
        o("WAWebABProps").getABPropConfigValue(
          "enable_hybrid_video_transcoding_for_valid_mp4",
        )
      );
    }
    function C(e, t, n, r, o) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, r, a, i, l) {
            var h;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[transcodeVideo] start size=",
                  " type=",
                  "",
                ])),
              t.size,
              t.type,
            );
            var y =
              n("cr:17219") == null ||
              (h = n("cr:17219").getWindowsBridge()) == null
                ? void 0
                : h.mediaTranscodeBridge;
            if (y == null) return null;
            var C,
              b,
              v,
              S = !1;
            try {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[transcodeVideo] Requesting source buffer for file size ",
                    "",
                  ])),
                t.size,
              );
              var R = yield y.requestSharedBufferForTranscoding(g++, t.size),
                L = R[0],
                E = R[1];
              ((C = L),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[transcodeVideo] Received source buffer with id ",
                      "",
                    ])),
                  L,
                ),
                r &&
                  !(
                    y instanceof
                    o("WAWebWindowsHybridBridgeMediaTranscoder.v2577")
                      .WindowsHybridBridgeMediaTranscoder_v2577
                  ) &&
                  y.setProgressCallback(C, r));
              var k = yield t.arrayBuffer(),
                I = new Uint8Array(E),
                T = new Uint8Array(k);
              if (
                (I.set(T),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[transcodeVideo] File content copied to source buffer",
                    ])),
                ),
                l != null && l("video/mp4"),
                a != null &&
                  !(
                    y instanceof
                    o("WAWebWindowsHybridBridgeMediaTranscoder.v2577")
                      .WindowsHybridBridgeMediaTranscoder_v2577
                  ))
              )
                try {
                  var D = yield y.getVideoPreviewFrameFromSharedBuffer(C, g++),
                    x = D[0],
                    $ = D[1],
                    P = D[2],
                    N = D[3];
                  ((v = x), a($, P, N), (S = !0));
                } catch (e) {
                  o("WALogger")
                    .ERROR(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "[transcodeVideo] Error getting video preview frame",
                        ])),
                    )
                    .catching(e);
                }
              var M =
                o("WAWebABProps").getABPropConfigValue(
                  "default_video_limit_mb",
                ) *
                1024 *
                1024;
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[transcodeVideo] Starting transcoding from sourceBufferId=",
                    "",
                  ])),
                C,
              );
              var w = yield y.performVideoTranscodingFromSharedBuffer(
                  C,
                  g++,
                  M,
                ),
                A = w[0],
                F = w[1];
              ((b = A),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[transcodeVideo] done bufferId=",
                      " size=",
                      "",
                    ])),
                  A,
                  F.byteLength,
                ));
              var O = new Blob([F], { type: "video/mp4" });
              return (
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[transcodeVideo] Video transcoding completed successfully",
                    ])),
                ),
                [O, S]
              );
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[transcodeVideo] Error during video transcoding",
                      ])),
                  )
                  .catching(e),
                i != null && S && i(),
                e
              );
            } finally {
              (C != null && y.releaseSharedBuffer(C),
                b != null && y.releaseSharedBuffer(b),
                v != null && y.releaseSharedBuffer(v),
                r &&
                  C != null &&
                  !(
                    y instanceof
                    o("WAWebWindowsHybridBridgeMediaTranscoder.v2577")
                      .WindowsHybridBridgeMediaTranscoder_v2577
                  ) &&
                  y.clearProgressCallback(C));
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    ((l.isWindowsHybridTranscoderEnabled = h),
      (l.isWindowsHybridTranscoderEnabledForMp4 = y),
      (l.transcodeVideo = C));
  },
  98,
);
