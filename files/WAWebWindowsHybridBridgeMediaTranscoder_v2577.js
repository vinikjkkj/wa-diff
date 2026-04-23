__d(
  "WAWebWindowsHybridBridgeMediaTranscoder.v2577",
  ["Promise", "WALogger", "asyncToGeneratorRuntime", "err"],
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
      g = (function () {
        function t(t, n) {
          var r = this;
          ((this.$3 = new Map()),
            (this.$5 = function (t) {
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
            }),
            (this.$1 = n),
            (this.$2 = t),
            this.$2.addEventListener("sharedbufferreceived", function (e) {
              var t = e;
              r.$4(t);
            }),
            this.$1.addEventListener("onProgressChangedEvent", this.$5),
            this.$1.subscribe(null));
        }
        var a = t.prototype;
        return (
          (a.requestSharedBufferForTranscoding = function (t, r) {
            var e = this;
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[requestSharedBufferForTranscoding] Starting shared buffer request for requestId=",
                    ", bufferSize=",
                    "",
                  ])),
                t,
                r,
              ),
              new (f || (f = n("Promise")))(function (n) {
                (e.$3.set(t, n), e.$1.requestSharedBufferForTranscoding(t, r));
              })
            );
          }),
          (a.performVideoTranscodingFromSharedBuffer = function (t, a, i) {
            var e = this;
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[performVideoTranscodingFromSharedBuffer] Starting video transcoding from sourceBufferId=",
                    " to resultBufferId=",
                    " with maxResultSize=",
                    "",
                  ])),
                t,
                a,
                i,
              ),
              new (f || (f = n("Promise")))(
                (function () {
                  var l = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n, l) {
                      e.$3.set(a, n);
                      try {
                        var s =
                          yield e.$1.performVideoTranscodingFromSharedBuffer(
                            t,
                            a,
                            i,
                          );
                        s
                          ? o("WALogger").LOG(
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
                                  "[performVideoTranscodingFromSharedBuffer] Video transcoding initiated successfully, waiting for result buffer",
                                ])),
                            )
                          : (e.$3.delete(a),
                            o("WALogger").ERROR(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "[performVideoTranscodingFromSharedBuffer] Video transcoding failed for sourceBufferId=",
                                  ", resultBufferId=",
                                  " with maxResultSize=",
                                  "",
                                ])),
                              t,
                              a,
                              i,
                            ),
                            l(r("err")("Video transcoding failed")));
                      } catch (t) {
                        (e.$3.delete(a),
                          o("WALogger").ERROR(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[performVideoTranscodingFromSharedBuffer] Error during video transcoding: ",
                                "",
                              ])),
                            String(t),
                          ),
                          l(t));
                      }
                    },
                  );
                  return function (e, t) {
                    return l.apply(this, arguments);
                  };
                })(),
              )
            );
          }),
          (a.releaseSharedBuffer = function (t) {
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[releaseSharedBuffer] Releasing shared buffer with bufferId=",
                  "",
                ])),
              t,
            ),
              this.$1.releaseSharedBuffer(t));
          }),
          (a.$4 = function (t) {
            if (
              t.additionalData &&
              t.additionalData.Source === "MediaTranscodingService"
            ) {
              var e,
                n = t.getBuffer(),
                r = (e = t.additionalData) == null ? void 0 : e.BufferId;
              if (
                (o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[onSharedBufferReceived] Received shared buffer of size ",
                      " for bufferId=",
                      "",
                    ])),
                  n.byteLength,
                  r,
                ),
                r != null)
              ) {
                var a = this.$3.get(r);
                a && (this.$3.delete(r), a([r, n]));
              }
            }
          }),
          t
        );
      })();
    l.WindowsHybridBridgeMediaTranscoder_v2577 = g;
  },
  98,
);
