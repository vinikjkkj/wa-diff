__d(
  "WAWebMediaDownloadMsg",
  [
    "Promise",
    "WALogger",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaMmsV4Download",
    "WAWebMmsMediaTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var a = t.chatWid,
        i = t.downloadEvenIfExpensive,
        l = t.isAutoDownload,
        u = t.isUserClick,
        c = t.mode,
        d = t.msg,
        m = t.rmrData,
        p = t.rmrReason,
        _ = t.shouldSequenceDownload,
        f = t.shouldThrowAbortError,
        g = d.mediaObject;
      if (g) {
        var h = g.getPendingProcess("fromDisk");
        return h.then(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (u && g.userDownloadAttemptCount++,
              yield o("WAWebMediaMmsV4Download").downloadMedia({
                mimetype: d.mimetype,
                mediaObject: g,
                downloadEvenIfExpensive: i,
                mediaType: o("WAWebMmsMediaTypes").getMsgMediaType(d),
                rmrReason: p,
                rmrData: m,
                downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(d),
                isVcardOverMmsDocument: d.isVcardOverMmsDocument,
                mode: c,
                isAutoDownload: l,
                isViewOnce: !!d.isViewOnce,
                chatWid: a,
                shouldSequenceDownload: _,
                shouldThrow: f,
              }),
              (g.userDownloadAttemptCount = 0));
          }),
        );
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
            d.id.toString(),
            d.type,
          )
          .sendLogs("media-fault: downloadMsg msg without mediaObject"),
        (s || (s = n("Promise"))).resolve()
      );
    }
    l.downloadMsg = u;
  },
  98,
);
