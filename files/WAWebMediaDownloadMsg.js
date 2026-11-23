__d(
  "WAWebMediaDownloadMsg",
  [
    "WALogger",
    "WAWebExperienceIdWamFields",
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
        p = t.shouldThrowAbortError,
        _ = u.mediaObject;
      if (_) {
        var f = _.getPendingProcess("fromDisk");
        return f.then(async function () {
          (l && _.userDownloadAttemptCount++,
            await o("WAWebMediaMmsV4Download").downloadMedia({
              mimetype: u.mimetype,
              mediaObject: _,
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
              shouldThrow: p,
              experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(
                u,
              ),
            }),
            (_.userDownloadAttemptCount = 0));
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
