__d(
  "WAWebMediaCancelUploadMsg",
  ["WALogger", "WAWebMediaMmsV4Upload"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      o("WAWebMediaMmsV4Upload").cancelUploadMedia(e);
    }
    function u(t) {
      t.mediaObject
        ? s(t.mediaObject)
        : o("WALogger")
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
            .sendLogs("media-fault: cancelUploadMsg msg without mediaObject");
    }
    ((l.cancelUploadMedia = s), (l.cancelUploadMsg = u));
  },
  98,
);
