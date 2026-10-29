__d(
  "WAWebWindowsHybridBridgeMediaTranscoder",
  [
    "Promise",
    "WALogger",
    "WAWebODS",
    "WAWebWindowsHybridBridgeJsonEvents",
    "WAWebWindowsHybridBridgeTrace",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E = (function () {
        function t(e, t) {
          var n = this;
          ((this.$3 = new Map()),
            (this.$4 = new Map()),
            (this.$6 = function (e) {
              n.$8(
                o("WAWebWindowsHybridBridgeTrace").traceBridgeRead(
                  {
                    bridge: "mediaTranscoder",
                    method: "onProgressChangedEvent",
                  },
                  function () {
                    return {
                      percentage: e.percentage,
                      sourceBufferId: e.sourceBufferId,
                    };
                  },
                ),
              );
            }),
            (this.$7 = function (e) {
              var t = o(
                "WAWebWindowsHybridBridgeJsonEvents",
              ).parseHybridBridgeJsonEvent("progressChangedJsonEvent", e, k);
              t != null && n.$8(t);
            }),
            (this.$1 = t),
            (this.$2 = e),
            this.$2.addEventListener("sharedbufferreceived", function (e) {
              n.$5(e);
            }),
            this.$1.addEventListener("onProgressChangedEvent", this.$6),
            this.$1.addEventListener("progressChangedJsonEvent", this.$7),
            this.$1.subscribe(null));
        }
        var a = t.prototype;
        return (
          (a.requestSharedBufferForTranscoding = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a) {
                var i = this;
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[requestSharedBufferForTranscoding] Starting shared buffer request for requestId=",
                      ", bufferSize=",
                      "",
                    ])),
                  t,
                  a,
                );
                var l = 2 * 1024 * 1024 * 1024;
                if (a >= l) {
                  var p =
                    "Buffer size " +
                    a +
                    " exceeds maximum allowed size of " +
                    l +
                    " bytes (2GB)";
                  throw (
                    o("WALogger").ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[requestSharedBufferForTranscoding] ",
                          "",
                        ])),
                      p,
                    ),
                    r("err")(p)
                  );
                }
                try {
                  var _ = new (L || (L = n("Promise")))(
                      (function () {
                        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (e, n) {
                            i.$3.set(t, e);
                            try {
                              r("WAWebODS").incr(
                                "web.hybrid.bridge.media_transcoder.send.try_request_shared_buffer_for_transcoding_async",
                              );
                              var l = yield o(
                                "WAWebWindowsHybridBridgeTrace",
                              ).traceBridgeCall(
                                {
                                  bridge: "mediaTranscodeBridge",
                                  method:
                                    "tryRequestSharedBufferForTranscodingAsync",
                                  type: "async",
                                },
                                function () {
                                  return i.$1.tryRequestSharedBufferForTranscodingAsync(
                                    t,
                                    a,
                                  );
                                },
                              );
                              l
                                ? o("WALogger").LOG(
                                    c ||
                                      (c =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[requestSharedBufferForTranscoding] Shared buffer creation initiated successfully, waiting for buffer",
                                          ],
                                        )),
                                  )
                                : (i.$3.delete(t),
                                  o("WALogger").ERROR(
                                    u ||
                                      (u =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[requestSharedBufferForTranscoding] Failed to create shared buffer for requestId=",
                                            ", bufferSize=",
                                            "",
                                          ],
                                        )),
                                    t,
                                    a,
                                  ),
                                  n(
                                    r("err")(
                                      "Failed to create shared buffer for transcoding",
                                    ),
                                  ));
                            } catch (e) {
                              (i.$3.delete(t),
                                o("WALogger")
                                  .ERROR(
                                    d ||
                                      (d =
                                        babelHelpers.taggedTemplateLiteralLoose(
                                          [
                                            "[requestSharedBufferForTranscoding] Error during shared buffer request",
                                          ],
                                        )),
                                  )
                                  .catching(r("getErrorSafe")(e)),
                                n(e));
                            }
                          },
                        );
                        return function (t, n) {
                          return e.apply(this, arguments);
                        };
                      })(),
                    ),
                    f = yield _;
                  return [f.additionalData.BufferId, f.buffer];
                } catch (e) {
                  throw (
                    o("WALogger")
                      .ERROR(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[requestSharedBufferForTranscoding] Error awaiting shared buffer response",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e)),
                    e
                  );
                }
              },
            );
            function a(e, n) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.performVideoTranscodingFromSharedBuffer = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, a) {
                var i = this;
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[performVideoTranscodingFromSharedBuffer] Starting video transcoding from sourceBufferId=",
                      " to resultBufferId=",
                      " with maxResultSize=",
                      "",
                    ])),
                  e,
                  t,
                  a,
                );
                var l = yield new (L || (L = n("Promise")))(
                  (function () {
                    var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (n, l) {
                        i.$3.set(t, n);
                        try {
                          r("WAWebODS").incr(
                            "web.hybrid.bridge.media_transcoder.send.perform_video_transcoding_from_shared_buffer",
                          );
                          var s = yield o(
                            "WAWebWindowsHybridBridgeTrace",
                          ).traceBridgeCall(
                            {
                              bridge: "mediaTranscodeBridge",
                              method: "performVideoTranscodingFromSharedBuffer",
                              type: "async",
                            },
                            function () {
                              return i.$1.performVideoTranscodingFromSharedBuffer(
                                e,
                                t,
                                a,
                              );
                            },
                          );
                          s
                            ? o("WALogger").LOG(
                                f ||
                                  (f = babelHelpers.taggedTemplateLiteralLoose([
                                    "[performVideoTranscodingFromSharedBuffer] Video transcoding initiated successfully, waiting for result buffer",
                                  ])),
                              )
                            : (i.$3.delete(t),
                              o("WALogger").ERROR(
                                _ ||
                                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                                    "[performVideoTranscodingFromSharedBuffer] Video transcoding failed for sourceBufferId=",
                                    ", resultBufferId=",
                                    " with maxResultSize=",
                                    "",
                                  ])),
                                e,
                                t,
                                a,
                              ),
                              l(r("err")("Video transcoding failed")));
                        } catch (e) {
                          (i.$3.delete(t),
                            o("WALogger")
                              .ERROR(
                                g ||
                                  (g = babelHelpers.taggedTemplateLiteralLoose([
                                    "[performVideoTranscodingFromSharedBuffer] Error during video transcoding",
                                  ])),
                              )
                              .catching(r("getErrorSafe")(e)),
                            l(e));
                        }
                      },
                    );
                    return function (e, t) {
                      return l.apply(this, arguments);
                    };
                  })(),
                );
                return [l.additionalData.BufferId, l.buffer];
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getVideoPreviewFrameFromSharedBuffer = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var a = this,
                  i,
                  l,
                  s,
                  u;
                o("WALogger").LOG(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[getVideoPreviewFrameFromSharedBuffer] Starting video preview frame extraction from sourceBufferId=",
                      " to resultBufferId=",
                      "",
                    ])),
                  e,
                  t,
                );
                var c = yield new (L || (L = n("Promise")))(
                    (function () {
                      var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (n, i) {
                          a.$3.set(t, n);
                          try {
                            r("WAWebODS").incr(
                              "web.hybrid.bridge.media_transcoder.send.get_video_preview_frame_from_shared_buffer",
                            );
                            var l = yield o(
                              "WAWebWindowsHybridBridgeTrace",
                            ).traceBridgeCall(
                              {
                                bridge: "mediaTranscodeBridge",
                                method: "getVideoPreviewFrameFromSharedBuffer",
                                type: "async",
                              },
                              function () {
                                return a.$1.getVideoPreviewFrameFromSharedBuffer(
                                  e,
                                  t,
                                );
                              },
                            );
                            l
                              ? o("WALogger").LOG(
                                  C ||
                                    (C =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[getVideoPreviewFrameFromSharedBuffer] Video preview frame extraction initiated successfully, waiting for result buffer",
                                      ])),
                                )
                              : (a.$3.delete(t),
                                o("WALogger").ERROR(
                                  y ||
                                    (y =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[getVideoPreviewFrameFromSharedBuffer] Video preview frame extraction failed for sourceBufferId=",
                                        ", resultBufferId=",
                                        "",
                                      ])),
                                  e,
                                  t,
                                ),
                                i(
                                  r("err")(
                                    "Video preview frame extraction failed",
                                  ),
                                ));
                          } catch (e) {
                            (a.$3.delete(t),
                              o("WALogger")
                                .ERROR(
                                  b ||
                                    (b =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[getVideoPreviewFrameFromSharedBuffer] Error during video preview frame extraction",
                                      ])),
                                )
                                .catching(r("getErrorSafe")(e)),
                              i(e));
                          }
                        },
                      );
                      return function (e, t) {
                        return i.apply(this, arguments);
                      };
                    })(),
                  ),
                  d =
                    (i = (l = c.additionalData) == null ? void 0 : l.Width) !=
                    null
                      ? i
                      : 0,
                  m =
                    (s = (u = c.additionalData) == null ? void 0 : u.Height) !=
                    null
                      ? s
                      : 0;
                return [c.additionalData.BufferId, c.buffer, d, m];
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.releaseSharedBuffer = function (t) {
            var e = this;
            (o("WALogger").LOG(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[releaseSharedBuffer] Releasing shared buffer with bufferId=",
                  "",
                ])),
              t,
            ),
              r("WAWebODS").incr(
                "web.hybrid.bridge.media_transcoder.send.release_shared_buffer",
              ),
              o("WAWebWindowsHybridBridgeTrace").traceBridgeCall(
                {
                  bridge: "mediaTranscodeBridge",
                  method: "releaseSharedBuffer",
                  type: "async",
                },
                function () {
                  return e.$1.releaseSharedBuffer(t);
                },
              ));
          }),
          (a.setProgressCallback = function (t, n) {
            this.$4.set(t, n);
          }),
          (a.clearProgressCallback = function (t) {
            this.$4.delete(t);
          }),
          (a.$8 = function (t) {
            var e = t.percentage,
              n = t.sourceBufferId;
            o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
                  "[onProgressChanged] sourceBufferId=",
                  ", percentage=",
                  "",
                ])),
              n,
              e,
            );
            var r = this.$4.get(n);
            r && r(e);
          }),
          (a.$5 = function (t) {
            if (
              t.additionalData &&
              t.additionalData.Source === "MediaTranscodingService"
            ) {
              var e,
                n = (e = t.additionalData) == null ? void 0 : e.BufferId;
              if (
                (o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "[onSharedBufferReceived] Received shared buffer for bufferId=",
                      "",
                    ])),
                  n,
                ),
                n != null)
              ) {
                var r = this.$3.get(n);
                r &&
                  (this.$3.delete(n),
                  r({
                    buffer: t.getBuffer(),
                    additionalData: t.additionalData,
                  }));
              }
            }
          }),
          t
        );
      })();
    function k(e) {
      var t = e.percentage,
        n = e.sourceBufferId;
      return typeof t == "number" && typeof n == "number"
        ? { percentage: t, sourceBufferId: n }
        : null;
    }
    l.WindowsHybridBridgeMediaTranscoder = E;
  },
  98,
);
