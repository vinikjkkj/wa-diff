__d(
  "WAWebStartMediaUploadQpl",
  ["WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891428410, "3040"),
      s = 600 * 1e3;
    function u(t) {
      var n = t.byteLength,
        r = t.entryPoint,
        a = t.isEncrypted,
        i = t.isStreamingUpload,
        l = t.mediaType,
        u = { entryPoint: r };
      l != null && (u.media_type = l);
      var c = {};
      n != null && (c.byte_length = n);
      var d = {};
      return (
        a != null && (d.is_encrypted = a),
        i != null && (d.is_streaming_upload = i),
        o("WAWebQplFlow").startQplFlow(e, {
          annotations: { string: u, int: c, bool: d },
          timeoutInMs: s,
        })
      );
    }
    l.startMediaUploadQpl = u;
  },
  98,
);
