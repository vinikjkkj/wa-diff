__d(
  "WAWebMediaDownloadMsg",
  [
    "WALogger",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaMmsV4Download",
    "WAWebMmsMediaTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = t.chatWid,
        a = t.downloadEvenIfExpensive,
        i = t.isAutoDownload,
        l = t.isUserClick,
        s = t.mode,
        u = t.msg,
        c = t.rmrData,
        d = t.rmrReason,
        m = t.shouldSequenceDownload,
        p = u.mediaObject;
      if (p) {
        var _ = p.getPendingProcess("fromDisk");
        return _.then(async function () {
          (l && p.userDownloadAttemptCount++,
            await o("WAWebMediaMmsV4Download").downloadMedia({
              mimetype: u.mimetype,
              mediaObject: p,
              downloadEvenIfExpensive: a,
              mediaType: o("WAWebMmsMediaTypes").getMsgMediaType(u),
              rmrReason: d,
              rmrData: c,
              downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(u),
              isVcardOverMmsDocument: u.isVcardOverMmsDocument,
              mode: s,
              isAutoDownload: i,
              isViewOnce: !!u.isViewOnce,
              chatWid: n,
              shouldSequenceDownload: m,
            }),
            (p.userDownloadAttemptCount = 0));
        });
      }
      return (
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "id: ",
                " type: ",
                "",
              ])),
            u.id.toString(),
            u.type,
          )
          .sendLogs("media-fault: downloadMsg msg without mediaObject"),
        Promise.resolve()
      );
    }
    l.downloadMsg = s;
  },
  98,
);
