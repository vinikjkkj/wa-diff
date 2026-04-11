__d(
  "WAWebMmsClientFormatUploadUrl",
  ["WABase64UrlSafe", "WAWebABProps", "WAWebMmsClientFormatHashUrl"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a = e.auth,
        i = e.byteRange,
        l = e.encFilehash,
        s = e.hostname,
        u = e.mediaId,
        c = e.query,
        d = e.token,
        m = e.type,
        p = c == null ? void 0 : c.final_hash;
      return r("WAWebMmsClientFormatHashUrl")({
        encFilehash: l,
        hostname: s,
        type: m,
        query: {
          auth: a,
          token: o("WABase64UrlSafe").urlSafeBase64(d),
          resume: c == null || (t = c.resume) == null ? void 0 : t.toString(10),
          stream: c == null || (n = c.stream) == null ? void 0 : n.toString(10),
          final_hash:
            p != null ? o("WABase64UrlSafe").urlSafeBase64(p) : void 0,
          bytestart: i == null ? void 0 : i.start.toString(10),
          byteend: i == null ? void 0 : i.end.toString(10),
          media_id: u.toString(10),
          server_thumb_gen:
            (c == null ? void 0 : c.server_thumb_gen) != null ? "1" : void 0,
          server_transcode:
            m === "newsletter-video" &&
            o("WAWebABProps").getABPropConfigValue(
              "web_channel_video_server_transcode_upload",
            )
              ? "1"
              : void 0,
        },
      });
    }
    l.default = e;
  },
  98,
);
