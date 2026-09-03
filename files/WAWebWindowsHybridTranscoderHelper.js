__d(
  "WAWebWindowsHybridTranscoderHelper",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebEnvironment",
    "WAWebWindowsHybridBridgeInitiator",
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
          var a,
            i = t.file,
            l = t.onProgress,
            h = t.resetMediaPreview,
            y = t.setMediaPreview,
            C = t.setMimeType;
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[transcodeVideo] start size=",
                " type=",
                "",
              ])),
            i.size,
            i.type,
          );
          var b =
            n("cr:17219") == null ||
            (a = n("cr:17219").getWindowsBridge(
              r("WAWebWindowsHybridBridgeInitiator")
                .WAWebWindowsHybridTranscoderHelper,
            )) == null
              ? void 0
              : a.mediaTranscodeBridge;
          if (b == null) return null;
          var v,
            S,
            R,
            L = !1;
          try {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[transcodeVideo] Requesting source buffer for file size ",
                  "",
                ])),
              i.size,
            );
            var E = yield b.requestSharedBufferForTranscoding(g++, i.size),
              k = E[0],
              I = E[1];
            ((v = k),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[transcodeVideo] Received source buffer with id ",
                    "",
                  ])),
                k,
              ),
              l && b.setProgressCallback(v, l));
            var T = yield i.arrayBuffer(),
              D = new Uint8Array(I),
              x = new Uint8Array(T);
            if (
              (D.set(x),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[transcodeVideo] File content copied to source buffer",
                  ])),
              ),
              C != null && C("video/mp4"),
              y != null)
            )
              try {
                var $ = yield b.getVideoPreviewFrameFromSharedBuffer(v, g++),
                  P = $[0],
                  N = $[1],
                  M = $[2],
                  w = $[3];
                ((R = P), y(N, M, w), (L = !0));
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
            var A =
              o("WAWebABProps").getABPropConfigValue("default_video_limit_mb") *
              1024 *
              1024;
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[transcodeVideo] Starting transcoding from sourceBufferId=",
                  "",
                ])),
              v,
            );
            var F = yield b.performVideoTranscodingFromSharedBuffer(v, g++, A),
              O = F[0],
              B = F[1];
            ((S = O),
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[transcodeVideo] done bufferId=",
                    " size=",
                    "",
                  ])),
                O,
                B.byteLength,
              ));
            var W = new Blob([B], { type: "video/mp4" });
            return (
              o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[transcodeVideo] Video transcoding completed successfully",
                  ])),
              ),
              [W, L]
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
              h != null && L && h(),
              e
            );
          } finally {
            (v != null && b.releaseSharedBuffer(v),
              S != null && b.releaseSharedBuffer(S),
              R != null && b.releaseSharedBuffer(R),
              l && v != null && b.clearProgressCallback(v));
          }
        })),
        C.apply(this, arguments)
      );
    }
    ((l.isWindowsHybridTranscoderEnabled = h), (l.transcodeVideo = y));
  },
  98,
);
