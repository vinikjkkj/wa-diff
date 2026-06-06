__d(
  "WAWebWindowsHybridBridgeMediaTranscoder.v2622",
  [
    "WALogger",
    "WAWebODS",
    "WAWebWindowsHybridBridgeTrace",
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
      L = (function () {
        function t(t, n) {
          var r = this;
          ((this.$3 = new Map()),
            (this.$4 = new Map()),
            (this.$6 = function (t) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[onProgressChanged] sourceBufferId=",
                    ", percentage=",
                    "",
                  ])),
                t.sourceBufferId,
                t.percentage,
              );
              var n = r.$4.get(t.sourceBufferId);
              n && n(t.percentage);
            }),
            (this.$1 = n),
            (this.$2 = t),
            this.$2.addEventListener("sharedbufferreceived", function (e) {
              var t = e;
              r.$5(t);
            }),
            this.$1.addEventListener("onProgressChangedEvent", this.$6),
            this.$1.subscribe(null));
        }
        var n = t.prototype;
        return (
          (n.requestSharedBufferForTranscoding = async function (t, n) {
            var e = this;
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[requestSharedBufferForTranscoding] Starting shared buffer request for requestId=",
                  ", bufferSize=",
                  "",
                ])),
              t,
              n,
            );
            var a = 2 * 1024 * 1024 * 1024;
            if (n >= a) {
              var i =
                "Buffer size " +
                n +
                " exceeds maximum allowed size of " +
                a +
                " bytes (2GB)";
              throw (
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[requestSharedBufferForTranscoding] ",
                      "",
                    ])),
                  i,
                ),
                r("err")(i)
              );
            }
            try {
              var l = new Promise(async function (a, i) {
                  e.$3.set(t, a);
                  try {
                    r("WAWebODS").incr(
                      "web.hybrid.bridge.media_transcoder.send.try_request_shared_buffer_for_transcoding_async",
                    );
                    var l = await o(
                      "WAWebWindowsHybridBridgeTrace",
                    ).traceBridgeCall(
                      {
                        bridge: "mediaTranscodeBridge",
                        method: "tryRequestSharedBufferForTranscodingAsync",
                        type: "async",
                      },
                      function () {
                        return e.$1.tryRequestSharedBufferForTranscodingAsync(
                          t,
                          n,
                        );
                      },
                    );
                    l
                      ? o("WALogger").LOG(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[requestSharedBufferForTranscoding] Shared buffer creation initiated successfully, waiting for buffer",
                            ])),
                        )
                      : (e.$3.delete(t),
                        o("WALogger").ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[requestSharedBufferForTranscoding] Failed to create shared buffer for requestId=",
                              ", bufferSize=",
                              "",
                            ])),
                          t,
                          n,
                        ),
                        i(
                          r("err")(
                            "Failed to create shared buffer for transcoding",
                          ),
                        ));
                  } catch (n) {
                    (e.$3.delete(t),
                      o("WALogger")
                        .ERROR(
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
                              "[requestSharedBufferForTranscoding] Error during shared buffer request",
                            ])),
                        )
                        .catching(r("getErrorSafe")(n)),
                      i(n));
                  }
                }),
                _ = await l;
              return [_.additionalData.BufferId, _.buffer];
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[requestSharedBufferForTranscoding] Error awaiting shared buffer response",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e)),
                e
              );
            }
          }),
          (n.performVideoTranscodingFromSharedBuffer = async function (
            t,
            n,
            a,
          ) {
            var e = this;
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[performVideoTranscodingFromSharedBuffer] Starting video transcoding from sourceBufferId=",
                  " to resultBufferId=",
                  " with maxResultSize=",
                  "",
                ])),
              t,
              n,
              a,
            );
            var i = await new Promise(async function (i, l) {
              e.$3.set(n, i);
              try {
                r("WAWebODS").incr(
                  "web.hybrid.bridge.media_transcoder.send.perform_video_transcoding_from_shared_buffer",
                );
                var s = await o(
                  "WAWebWindowsHybridBridgeTrace",
                ).traceBridgeCall(
                  {
                    bridge: "mediaTranscodeBridge",
                    method: "performVideoTranscodingFromSharedBuffer",
                    type: "sync",
                  },
                  function () {
                    return e.$1.performVideoTranscodingFromSharedBuffer(
                      t,
                      n,
                      a,
                    );
                  },
                );
                s
                  ? o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
                          "[performVideoTranscodingFromSharedBuffer] Video transcoding initiated successfully, waiting for result buffer",
                        ])),
                    )
                  : (e.$3.delete(n),
                    o("WALogger").ERROR(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[performVideoTranscodingFromSharedBuffer] Video transcoding failed for sourceBufferId=",
                          ", resultBufferId=",
                          " with maxResultSize=",
                          "",
                        ])),
                      t,
                      n,
                      a,
                    ),
                    l(r("err")("Video transcoding failed")));
              } catch (t) {
                (e.$3.delete(n),
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[performVideoTranscodingFromSharedBuffer] Error during video transcoding",
                        ])),
                    )
                    .catching(r("getErrorSafe")(t)),
                  l(t));
              }
            });
            return [i.additionalData.BufferId, i.buffer];
          }),
          (n.getVideoPreviewFrameFromSharedBuffer = async function (t, n) {
            var e = this,
              a,
              i,
              l,
              s;
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[getVideoPreviewFrameFromSharedBuffer] Starting video preview frame extraction from sourceBufferId=",
                  " to resultBufferId=",
                  "",
                ])),
              t,
              n,
            );
            var u = await new Promise(async function (a, i) {
                e.$3.set(n, a);
                try {
                  r("WAWebODS").incr(
                    "web.hybrid.bridge.media_transcoder.send.get_video_preview_frame_from_shared_buffer",
                  );
                  var l = await o(
                    "WAWebWindowsHybridBridgeTrace",
                  ).traceBridgeCall(
                    {
                      bridge: "mediaTranscodeBridge",
                      method: "getVideoPreviewFrameFromSharedBuffer",
                      type: "sync",
                    },
                    function () {
                      return e.$1.getVideoPreviewFrameFromSharedBuffer(t, n);
                    },
                  );
                  l
                    ? o("WALogger").LOG(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "[getVideoPreviewFrameFromSharedBuffer] Video preview frame extraction initiated successfully, waiting for result buffer",
                          ])),
                      )
                    : (e.$3.delete(n),
                      o("WALogger").ERROR(
                        C ||
                          (C = babelHelpers.taggedTemplateLiteralLoose([
                            "[getVideoPreviewFrameFromSharedBuffer] Video preview frame extraction failed for sourceBufferId=",
                            ", resultBufferId=",
                            "",
                          ])),
                        t,
                        n,
                      ),
                      i(r("err")("Video preview frame extraction failed")));
                } catch (t) {
                  (e.$3.delete(n),
                    o("WALogger")
                      .ERROR(
                        v ||
                          (v = babelHelpers.taggedTemplateLiteralLoose([
                            "[getVideoPreviewFrameFromSharedBuffer] Error during video preview frame extraction",
                          ])),
                      )
                      .catching(r("getErrorSafe")(t)),
                    i(t));
                }
              }),
              c =
                (a = (i = u.additionalData) == null ? void 0 : i.Width) != null
                  ? a
                  : 0,
              d =
                (l = (s = u.additionalData) == null ? void 0 : s.Height) != null
                  ? l
                  : 0;
            return [u.additionalData.BufferId, u.buffer, c, d];
          }),
          (n.releaseSharedBuffer = function (t) {
            var e = this;
            (o("WALogger").LOG(
              S ||
                (S = babelHelpers.taggedTemplateLiteralLoose([
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
                  type: "sync",
                },
                function () {
                  return e.$1.releaseSharedBuffer(t);
                },
              ));
          }),
          (n.setProgressCallback = function (t, n) {
            this.$4.set(t, n);
          }),
          (n.clearProgressCallback = function (t) {
            this.$4.delete(t);
          }),
          (n.$5 = function (t) {
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
    l.WindowsHybridBridgeMediaTranscoder_v2622 = L;
  },
  98,
);
