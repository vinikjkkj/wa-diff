__d(
  "HandleTranscodeToMp4Request",
  ["VideoTranscodeUtils", "WAResultOrError", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set(["video/webm", "video/x-matroska"]),
      s = new Set(["video/avi", "video/x-msvideo"]);
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r,
            a,
            i,
            l,
            u = t.input,
            c = t.mimeType,
            d = t.qplFlow,
            m = t.runMp4RepairMux,
            p = t.supportsHevc,
            _ = t.transcodeToMp4Module;
          d.addPoint("metadata_start");
          var f = yield _.getOptionalMetadata(u),
            g = f.metadataInfo,
            h = f.transcodeInput;
          (d.addPoint("metadata_end"),
            o("VideoTranscodeUtils").annotateVideoMetadata({
              metadata: g,
              eventFlow: d,
              isTranscodedFile: !1,
            }));
          var y =
              e.has(c) ||
              (((n = g.videoInfo) == null ? void 0 : n.codec) === "hevc" && !p),
            C = s.has(c);
          (d.addAnnotations({ bool: { forceTranscode: y, skipTranscode: C } }),
            d.addPoint("input_buffer_mp4RepairMux_start"));
          var b = y
            ? o("WAResultOrError").makeError("invalid-media")
            : yield m(u);
          if (b.success === !0)
            return (
              d.addPoint("input_buffer_mp4RepairMux_end"),
              o("WAResultOrError").makeResult({
                buffer: b.value,
                transcodeResponse: void 0,
              })
            );
          if ((d.addPoint("input_buffer_mp4RepairMux_fail"), C)) {
            var v, S, R, L;
            return o("WAResultOrError").makeError({
              error: {
                errorType: b.error,
                errorMessage:
                  "mp4RepairMux failed and transcode skipped: " +
                  ((v = (S = b.payload) == null ? void 0 : S.name) != null
                    ? v
                    : "undefined") +
                  ", stack " +
                  ((R = (L = b.payload) == null ? void 0 : L.stack) != null
                    ? R
                    : "undefined"),
              },
              transcodeResponse: void 0,
            });
          }
          d.addPoint("transcode_start");
          var E = yield _.transcode(h);
          if (E.success === !0) {
            d.addPoint("transcode_end");
            var k = yield _.getOptionalMetadata(E.value.resultBuffer),
              I = k.metadataInfo;
            (o("VideoTranscodeUtils").annotateVideoMetadata({
              metadata: I,
              eventFlow: d,
              isTranscodedFile: !0,
            }),
              d.addAnnotations({
                int: { transcoded_file_size: E.value.resultBuffer.byteLength },
              }),
              d.addPoint("transcode_buffer_mp4RepairMux_start"));
            var T = yield m(E.value.resultBuffer);
            if (T.success === !0)
              return (
                d.addPoint("transcode_buffer_mp4RepairMux_end"),
                o("WAResultOrError").makeResult({
                  buffer: T.value,
                  transcodeResponse: E,
                })
              );
            var D, x, $, P;
            return (
              d.addPoint("transcode_buffer_mp4RepairMux_fail"),
              o("WAResultOrError").makeError({
                error: {
                  errorType: T.error,
                  errorMessage:
                    "mp4RepairMux failed with: " +
                    ((D = (x = T.payload) == null ? void 0 : x.name) != null
                      ? D
                      : "undefined") +
                    ", stack " +
                    (($ = (P = T.payload) == null ? void 0 : P.stack) != null
                      ? $
                      : "undefined"),
                },
                transcodeResponse: E,
              })
            );
          }
          return (
            d.addPoint("transcode_fail"),
            o("WAResultOrError").makeError({
              error: {
                errorType: b.error,
                errorMessage:
                  "mp4RepairMux failed with: " +
                  ((r = (a = b.payload) == null ? void 0 : a.name) != null
                    ? r
                    : "undefined") +
                  ", stack " +
                  ((i = (l = b.payload) == null ? void 0 : l.stack) != null
                    ? i
                    : "undefined"),
              },
              transcodeResponse: E,
            })
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.handleTranscodeToMp4Request = u;
  },
  98,
);
