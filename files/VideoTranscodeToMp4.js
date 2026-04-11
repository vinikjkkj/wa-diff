__d(
  "VideoTranscodeToMp4",
  [
    "WACustomError",
    "WAPromiseTimeout",
    "WAResultOrError",
    "asyncToGeneratorRuntime",
    "justknobx",
    "mediabunny",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e instanceof Error ? e.message : "unknown error";
    }
    var s = r("justknobx")._("2379");
    function u(t) {
      var r = new (o("mediabunny").Output)({
        target: new (o("mediabunny").BufferTarget)(),
        format: new (o("mediabunny").Mp4OutputFormat)(),
      });
      return o("WAPromiseTimeout")
        .promiseTimeout(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = window.performance.now(),
              n = yield o("mediabunny").Conversion.init({
                input: t,
                output: r,
                video: {
                  bitrate: o("mediabunny").QUALITY_MEDIUM,
                  codec: "avc",
                },
              });
            if (!n.isValid) {
              var a = n.discardedTracks
                .map(function (e) {
                  return e.reason;
                })
                .join(", ");
              return o("WAResultOrError").makeError({
                errorType: "transcode-invalid",
                errorMessage: "discarded track reasons: " + a,
              });
            }
            yield n.execute();
            var i = r.target.buffer;
            return i == null
              ? o("WAResultOrError").makeError({
                  errorType: "null-output-buffer",
                })
              : o("WAResultOrError").makeResult({
                  resultBuffer: i,
                  transcodeLatency: window.performance.now() - e,
                });
          })(),
          s,
        )
        .catch(function (t) {
          return t instanceof o("WACustomError").TimeoutError
            ? o("WAResultOrError").makeError({ errorType: "timeout" })
            : o("WAResultOrError").makeError({
                errorType: "transcode-process",
                errorMessage: e(t),
              });
        });
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            r = new (t = o("mediabunny")).Input({
              source: new t.BufferSource(e),
              formats: [t.MP4, t.QTFF, t.MATROSKA, t.WEBM],
            }),
            a = yield o("WAPromiseTimeout")
              .promiseTimeout(
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  var e = window.performance.now(),
                    t = yield r
                      .getPrimaryVideoTrack()
                      .then(
                        (function () {
                          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                            function* (e) {
                              var t;
                              if (e != null)
                                return {
                                  codec: e.codec,
                                  calculatedFps: e.averagePacketRate,
                                  videoWidth: e == null ? void 0 : e.codedWidth,
                                  videoHeight:
                                    e == null ? void 0 : e.codedHeight,
                                  duration: yield r
                                    .computeDuration()
                                    .catch(function () {
                                      return null;
                                    }),
                                  averageBitrate:
                                    (t = yield e
                                      .computePacketStats()
                                      .catch(function () {
                                        return null;
                                      })) == null
                                      ? void 0
                                      : t.averageBitrate,
                                };
                            },
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      )
                      .catch(function () {}),
                    o = yield r
                      .getPrimaryAudioTrack()
                      .then(function (e) {
                        if (e != null)
                          return {
                            codec: e.codec,
                            samplingRate: e.sampleRate,
                            numberOfChannels: e.numberOfChannels,
                          };
                      })
                      .catch(function () {});
                  if (t != null || o != null) {
                    var a = window.performance.now() - e;
                    return { videoInfo: t, audioInfo: o, metadataLatency: a };
                  }
                  return {};
                })(),
                400,
              )
              .catch(function () {
                return {};
              });
          return {
            transcodeInput: r,
            metadataInfo: {
              videoInfo: a.videoInfo,
              audioInfo: a.audioInfo,
              metadataLatency: a.metadataLatency,
            },
          };
        })),
        d.apply(this, arguments)
      );
    }
    ((l.transcode = u), (l.getOptionalMetadata = c));
  },
  98,
);
