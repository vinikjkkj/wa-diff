__d(
  "WAWebMediaCancelDownloadMsg",
  ["WALogger", "WAWebMediaMmsV4Download"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      o("WAWebMediaMmsV4Download").cancelDownloadMedia(e);
    }
    function u(t) {
      t.mediaObject
        ? s(t.mediaObject)
        : t.mediaObject ||
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "id: ",
                  " type: ",
                  "",
                ])),
              t.id.toString(),
              t.type,
            )
            .sendLogs("media-fault: cancelDownloadMsg msg without mediaObject");
    }
    ((l.cancelDownloadMedia = s), (l.cancelDownloadMsg = u));
  },
  98,
);
