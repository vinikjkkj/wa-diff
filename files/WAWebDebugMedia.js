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
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          (t === void 0 && (t = !0),
            r("vulture")("XfAJ8IOvx3NsL6dSq_PhwGdDsh4="));
          var a = o("WAWebChatCollection").ChatCollection.getActive();
          if (a == null)
            return "No active chat is open \u2014 open a chat containing a sticker first.";
          var i = a.msgs
            .getModelsArray()
            .map(function (e) {
              return { msg: e, mediaObject: e.mediaObject };
            })
            .filter(function (e) {
              var t = e.mediaObject,
                n = e.msg;
              return n.type === o("WAWebMsgType").MSG_TYPE.STICKER && t != null;
            });
          for (var l of i) {
            var s = l.mediaObject;
            s == null ||
              s.consolidate({
                downloadStage: o("WAWebMediaTypes").DownloadStage.NEED_POKE,
              });
          }
          if (t) {
            yield (e || (e = n("Promise"))).all(
              i.map(function (e) {
                var t = e.mediaObject;
                return t == null ? void 0 : t.resolveWhenConsolidated();
              }),
            );
            for (var u of i) {
              var c = u.msg;
              c.mediaData.set({
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
            i.length +
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
