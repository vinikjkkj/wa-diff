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
      s = {};
    function u(e, t) {
      e.addMsg(t);
    }
    function c(e, t) {
      ((t.mediaObject = null),
        e.removeMsg(t),
        !e.hasAssociatedMsgsOrStickers() &&
          (y(
            e.filehash,
            o("WAWebMediaDataUtils").shouldUseLruMediaStore(
              o("WAWebMmsMediaTypes").getMsgMediaType(t),
            ),
          ),
          e.delete()));
    }
    function d() {
      var e = s;
      s = {};
      for (var t in e) e[t].delete();
    }
    function m(e) {
      if (Object.prototype.hasOwnProperty.call(s, e)) {
        var t = s[e],
          n = t.msgs.some(function (e) {
            var t;
            return (t = e[0]) == null ? void 0 : t.from.isBot();
          });
        if (!n) return t;
      }
      return (s[e] = new (o("WAWebMediaObject").MediaObject)());
    }
    function p(e) {}
    function _(e, t) {
      e.addStickerPack(t);
    }
    function f(e, t) {
      ((t.mediaObject = null),
        e.removeStickerPack(t),
        !e.hasAssociatedMsgsOrStickers() && (y(e.filehash), e.delete()));
    }
    function g(e, t) {
      e.addSticker(t);
    }
    function h(e, t) {
      ((t.mediaObject = null),
        e.removeSticker(t),
        !e.hasAssociatedMsgsOrStickers() && (y(e.filehash), e.delete()));
    }
    var y = function (n, a) {
      (a === void 0 && (a = !0),
        !r("isStringNullOrEmpty")(n) &&
          (delete s[n],
          a &&
            o("WAWebMediaStore")
              .LruMediaStore.del(n)
              .catch(function (t) {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[Media Storage] del ArrayBuffer failed",
                    ])),
                );
              })));
    };
    ((l.associateMediaWithMsg = u),
      (l.disassociateMediaFromMsg = c),
      (l.delistAndDeleteAllMedia = d),
      (l.getOrCreateMediaObject = m),
      (l.clearMediaForChat = p),
      (l.associateMediaWithStickerPack = _),
      (l.disassociateMediaFromStickerPack = f),
      (l.associateMediaWithSticker = g),
      (l.disassociateMediaFromSticker = h));
  },
  98,
);
