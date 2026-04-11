__d(
  "VideoTranscodeUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return "" + l(e).toFixed(2);
    }
    function l(e) {
      return e / 1024 / 1024;
    }
    function s(e) {
      var t,
        n = e.eventFlow,
        r = e.maybeTranscodeResponse,
        o =
          r != null
            ? r
            : {
                success: !1,
                error: {
                  errorMessage: "No transcode response",
                  errorType: "did-not-run",
                },
              };
      n.addAnnotations({
        bool: { did_transcode: o.success },
        int: {
          transcode_latency_ms: o.success
            ? (t = o.value) == null
              ? void 0
              : t.transcodeLatency
            : void 0,
        },
        string: {
          transcode_error_message:
            o.success === !1 ? o.error.errorMessage : void 0,
          transcode_error_type: o.success === !1 ? o.error.errorType : void 0,
        },
      });
    }
    function u(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m = e.eventFlow,
        p = e.isTranscodedFile,
        _ = e.metadata,
        f = p ? "transcoded_" : "";
      m.addAnnotations({
        int:
          ((s = {}),
          (s[f + "audio_number_of_channels"] =
            (t = _.audioInfo) == null ? void 0 : t.numberOfChannels),
          (s[f + "audio_sample_rate"] =
            (n = _.audioInfo) == null ? void 0 : n.samplingRate),
          (s[f + "duration_s"] =
            (r = _.videoInfo) == null ? void 0 : r.duration),
          (s[f + "metadata_latency_ms"] = _.metadataLatency),
          (s[f + "video_avg_bitrate"] =
            (o = _.videoInfo) == null ? void 0 : o.averageBitrate),
          (s[f + "video_fps"] =
            (a = _.videoInfo) == null ? void 0 : a.calculatedFps),
          (s[f + "video_height"] =
            (i = _.videoInfo) == null ? void 0 : i.videoHeight),
          (s[f + "video_width"] =
            (l = _.videoInfo) == null ? void 0 : l.videoWidth),
          s),
        string:
          ((d = {}),
          (d[f + "audio_codec"] = (u = _.audioInfo) == null ? void 0 : u.codec),
          (d[f + "video_codec"] = (c = _.videoInfo) == null ? void 0 : c.codec),
          d),
      });
    }
    ((i.bytesToMegaBytesString = e),
      (i.annotateTranscodeReponse = s),
      (i.annotateVideoMetadata = u));
  },
  66,
);
