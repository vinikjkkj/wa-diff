__d(
  "WAWebMediaStorage",
  [
    "WALogger",
    "WAWebMediaDataUtils",
    "WAWebMediaObject",
    "WAWebMediaStore",
    "WAWebMmsMediaTypes",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {};
    function c(e, t) {
      e.addMsg(t);
    }
    function d(e, t) {
      ((t.mediaObject = null),
        e.removeMsg(t),
        !e.hasAssociatedMsgsOrStickers() &&
          (C(
            e.filehash,
            o("WAWebMediaDataUtils").shouldUseLruMediaStore(
              o("WAWebMmsMediaTypes").getMsgMediaType(t),
            ),
          ),
          e.delete()));
    }
    function m() {
      var e = u;
      u = {};
      for (var t in e) e[t].delete();
    }
    function p(t) {
      if (Object.prototype.hasOwnProperty.call(u, t)) {
        var n = u[t],
          r = n.msgs.some(function (e) {
            var t;
            return (t = e[0]) == null ? void 0 : t.from.isBot();
          });
        if (!r) return n;
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[media-fwd] getOrCreateMediaObject: replacing bot MediaObject. filehash=",
              " oldMsgCount=",
              " oldHasBlob=",
              " oldDownloadStage=",
              "",
            ])),
          t,
          n.msgs.length,
          n.mediaBlob != null,
          n.downloadStage,
        );
      }
      return (u[t] = new (o("WAWebMediaObject").MediaObject)());
    }
    function _(e) {}
    function f(e, t) {
      e.addStickerPack(t);
    }
    function g(e, t) {
      ((t.mediaObject = null),
        e.removeStickerPack(t),
        !e.hasAssociatedMsgsOrStickers() && (C(e.filehash), e.delete()));
    }
    function h(e, t) {
      e.addSticker(t);
    }
    function y(e, t) {
      ((t.mediaObject = null),
        e.removeSticker(t),
        !e.hasAssociatedMsgsOrStickers() && (C(e.filehash), e.delete()));
    }
    var C = function (t, n) {
      (n === void 0 && (n = !0),
        !r("isStringNullOrEmpty")(t) &&
          (delete u[t],
          n &&
            o("WAWebMediaStore")
              .LruMediaStore.del(t)
              .catch(function (e) {
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[Media Storage] del ArrayBuffer failed",
                    ])),
                );
              })));
    };
    ((l.associateMediaWithMsg = c),
      (l.disassociateMediaFromMsg = d),
      (l.delistAndDeleteAllMedia = m),
      (l.getOrCreateMediaObject = p),
      (l.clearMediaForChat = _),
      (l.associateMediaWithStickerPack = f),
      (l.disassociateMediaFromStickerPack = g),
      (l.associateMediaWithSticker = h),
      (l.disassociateMediaFromSticker = y));
  },
  98,
);
