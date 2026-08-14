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
          (g(
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
      if (Object.hasOwn(u, t)) {
        var n = u[t],
          r = n.msgs.some(function (e) {
            var t;
            return (t = e[0]) == null ? void 0 : t.from.isBot();
          });
        if (!r) return n;
        var a = n.msgs.length,
          i = n.mediaBlob != null,
          l = n.downloadStage;
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[media-fwd] getOrCreateMediaObject bot hash=",
              " cnt=",
              " blob=",
              " dl=",
              "",
            ])),
          t,
          a,
          i,
          l,
        );
      }
      return (u[t] = new (o("WAWebMediaObject").MediaObject)());
    }
    function _(e, t) {
      e.addSticker(t);
    }
    function f(e, t) {
      ((t.mediaObject = null),
        e.removeSticker(t),
        !e.hasAssociatedMsgsOrStickers() && (g(e.filehash), e.delete()));
    }
    var g = function (t, n) {
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
      (l.associateMediaWithSticker = _),
      (l.disassociateMediaFromSticker = f));
  },
  98,
);
