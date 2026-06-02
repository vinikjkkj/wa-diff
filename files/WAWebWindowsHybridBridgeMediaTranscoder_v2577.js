__d(
  "WAWebWindowsHybridBridgeMediaTranscoder.v2577",
  ["WALogger", "err"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = (function () {
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
        var n = t.prototype;
        return (
          (n.requestSharedBufferForTranscoding = function (t, n) {
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
                n,
              ),
              new Promise(function (r) {
                (e.$3.set(t, r), e.$1.requestSharedBufferForTranscoding(t, n));
              })
            );
          }),
          (n.performVideoTranscodingFromSharedBuffer = function (t, n, a) {
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
                n,
                a,
              ),
              new Promise(async function (i, l) {
                e.$3.set(n, i);
                try {
                  var s = await e.$1.performVideoTranscodingFromSharedBuffer(
                    t,
                    n,
                    a,
                  );
                  s
                    ? o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[performVideoTranscodingFromSharedBuffer] Video transcoding initiated successfully, waiting for result buffer",
                          ])),
                      )
                    : (e.$3.delete(n),
                      o("WALogger").ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
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
              })
            );
          }),
          (n.releaseSharedBuffer = function (t) {
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
          (n.$4 = function (t) {
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
    l.WindowsHybridBridgeMediaTranscoder_v2577 = f;
  },
  98,
);
