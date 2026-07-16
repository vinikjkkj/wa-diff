__d(
  "WAWebDebugMedia",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebMedia",
    "WAWebMediaDownloadMmsThumbnail",
    "WAWebMediaTypes",
    "WAWebMmsClient",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          t === void 0 && (t = !0);
          var r = o("WAWebChatCollection").ChatCollection.getActive();
          if (r == null)
            return "No active chat is open \u2014 open a chat containing a sticker first.";
          var a = r.msgs
            .getModelsArray()
            .map(function (e) {
              return { msg: e, mediaObject: e.mediaObject };
            })
            .filter(function (e) {
              var t = e.mediaObject,
                n = e.msg;
              return n.type === o("WAWebMsgType").MSG_TYPE.STICKER && t != null;
            });
          for (var i of a) {
            var l = i.mediaObject;
            l == null ||
              l.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
              });
          }
          if (t) {
            yield (e || (e = n("Promise"))).all(
              a.map(function (e) {
                var t = e.mediaObject;
                return t == null ? void 0 : t.resolveWhenConsolidated();
              }),
            );
            for (var s of a) {
              var u = s.msg;
              u.mediaData.set({
                preview: null,
                renderableUrl: "",
                rgbaBuffer: null,
                extractedLottieSticker: null,
                mediaBlob: null,
              });
            }
          }
          return (
            "Reset " +
            a.length +
            " sticker(s) to NEED_POKE in the active chat" +
            (t ? " and blanked their images" : "") +
            ". Scroll them into view to see the download button."
          );
        })),
        u.apply(this, arguments)
      );
    }
    s.doc =
      "Mark every sticker in the currently open chat as not-downloaded (NEED_POKE) so the download button/label reappears. Pass false to keep the sticker image visible. Repro tool for the sticker media-control UI.";
    var c = {
      checkMediaExistence: o("WAWebMedia").checkMediaExistence,
      forceStickerNeedPoke: s,
      WAWebMmsClient: r("WAWebMmsClient"),
      WAWebMediaDownloadMmsThumbnail: r("WAWebMediaDownloadMmsThumbnail"),
      downloadProgressiveJpegThumbnail:
        o("WAWebMedia").downloadProgressiveJpegThumbnail,
      downloadStatusThumbnail: o("WAWebMedia").downloadStatusThumbnail,
    };
    l.default = c;
  },
  98,
);
