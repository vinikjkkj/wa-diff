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
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a = t.file,
            i = t.onProgress,
            l = t.resetMediaPreview,
            h = t.setMediaPreview,
            y = t.setMimeType;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[transcodeVideo] start size=",
                " type=",
                "",
              ])),
            a.size,
            a.type,
          );
          var C =
            n("cr:17219") == null ||
            (r = n("cr:17219").getWindowsBridge()) == null
              ? void 0
              : r.mediaTranscodeBridge;
          if (C == null) return null;
          var b,
            v,
            S,
            R = !1;
          try {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[transcodeVideo] Requesting source buffer for file size ",
                  "",
                ])),
              a.size,
            );
            var L = yield C.requestSharedBufferForTranscoding(g++, a.size),
              E = L[0],
              k = L[1];
            ((b = E),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[transcodeVideo] Received source buffer with id ",
                    "",
                  ])),
                E,
              ),
              i &&
                !(
                  C instanceof
                  o("WAWebWindowsHybridBridgeMediaTranscoder.v2577")
                    .WindowsHybridBridgeMediaTranscoder_v2577
                ) &&
                C.setProgressCallback(b, i));
            var I = yield a.arrayBuffer(),
              T = new Uint8Array(k),
              D = new Uint8Array(I);
            if (
              (T.set(D),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[transcodeVideo] File content copied to source buffer",
                  ])),
              ),
              y != null && y("video/mp4"),
              h != null &&
                !(
                  C instanceof
                  o("WAWebWindowsHybridBridgeMediaTranscoder.v2577")
                    .WindowsHybridBridgeMediaTranscoder_v2577
                ))
            )
              try {
                var x = yield C.getVideoPreviewFrameFromSharedBuffer(b, g++),
                  $ = x[0],
                  P = x[1],
                  N = x[2],
                  M = x[3];
                ((S = $), h(P, N, M), (R = !0));
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
            var w =
              o("WAWebABProps").getABPropConfigValue("default_video_limit_mb") *
              1024 *
              1024;
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[transcodeVideo] Starting transcoding from sourceBufferId=",
                  "",
                ])),
              b,
            );
            var A = yield C.performVideoTranscodingFromSharedBuffer(b, g++, w),
              F = A[0],
              O = A[1];
            ((v = F),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[transcodeVideo] done bufferId=",
                    " size=",
                    "",
                  ])),
                F,
                O.byteLength,
              ));
            var B = new Blob([O], { type: "video/mp4" });
            return (
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[transcodeVideo] Video transcoding completed successfully",
                  ])),
              ),
              [B, R]
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
              l != null && R && l(),
              e
            );
          } finally {
            (b != null && C.releaseSharedBuffer(b),
              v != null && C.releaseSharedBuffer(v),
              S != null && C.releaseSharedBuffer(S),
              i &&
                b != null &&
                !(
                  C instanceof
                  o("WAWebWindowsHybridBridgeMediaTranscoder.v2577")
                    .WindowsHybridBridgeMediaTranscoder_v2577
                ) &&
                C.clearProgressCallback(b));
          }
        })),
        C.apply(this, arguments)
      );
    }
    ((l.isWindowsHybridTranscoderEnabled = h), (l.transcodeVideo = y));
  },
  98,
);
