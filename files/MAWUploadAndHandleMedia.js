__d(
  "MAWUploadAndHandleMedia",
  ["MWFBLogger", "MpsMediaManagerV2", "WAResultOrError", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("MWFBLogger").MWMediaLogger();
    async function c(t) {
      var n = t.chatJid,
        a = t.dbCallbacks,
        i = t.filename,
        l = t.hash,
        c = t.plaintext,
        d = t.protocolMsgId,
        m = t.serverMediaType,
        p = t.size,
        _ = t.uploadMediaMetric,
        f = await o("MpsMediaManagerV2")
          .mpsMediaManager()
          .enqueueUploadFullSize({
            chatJid: n,
            mediaUploadFlow: _,
            plaintext: c,
            plaintextHash: l,
            serverMediaType: m,
          });
      if (f.success !== !0)
        return (
          u.WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to enqueue upload full size: ",
                "",
              ])),
            f.error,
          ),
          _.endFail(f.error),
          f
        );
      _.addPoint("get_downloadable_thumbnail_start");
      var g = await a.getDownloadableThumbnailForMedia(l).catch(function (e) {
        return (
          u
            .catching(r("getErrorSafe")(e))
            .MUSTFIX(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getDownloadableThumbnailForMedia unexpected runtime-erorr: ",
                  "",
                ])),
              String(e),
            ),
          null
        );
      });
      _.addPoint("get_downloadable_thumbnail_end");
      var h = babelHelpers.extends({}, f.value, {
        downloadableThumbnail: g,
        filename: i,
        size: p,
      });
      return (_.endSuccess(), o("WAResultOrError").makeResult(h));
    }
    l.uploadAndHandleMedia = c;
  },
  98,
);
