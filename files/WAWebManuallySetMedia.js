__d(
  "WAWebManuallySetMedia",
  [
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaMmsV4Download",
    "WAWebMediaOpaqueData",
    "WAWebMmsMediaTypes",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.chatWid,
        n = e.media,
        a = e.msg,
        i = e.rmrReason,
        l = a.mediaObject;
      l &&
        r("WAWebMediaOpaqueData")
          .createFromData(n, a.mimetype)
          .then(function (e) {
            o("WAWebMediaMmsV4Download").manuallySetMedia({
              mimetype: a.mimetype,
              mediaObject: l,
              mediaBlob: e,
              mediaType: o("WAWebMmsMediaTypes").getMsgMediaType(a),
              rmrReason: i,
              downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(a),
              chatWid: t,
            });
          });
    }
    l.manuallySetMedia = e;
  },
  98,
);
