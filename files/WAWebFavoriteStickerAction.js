__d(
  "WAWebFavoriteStickerAction",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAuraGating",
    "WAWebFavoriteStickerCollection",
    "WAWebFavoriteStickerJob",
    "WAWebMiscGatingUtils",
    "WAWebMsgType",
    "WAWebStickerAddToFavoriteWamEvent",
    "WAWebStickerModel",
    "WAWebStickerPremiumStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
      var n = t
        .filter(function (e) {
          return e.type === o("WAWebMsgType").MSG_TYPE.STICKER;
        })
        .filter(function (e) {
          var t;
          return (
            r("WAWebAuraGating").canUsePremiumSticker(e.stickerPremiumStatus) &&
            r("WAWebAuraGating").canUsePremiumSticker(
              (t = e.mediaData) == null ? void 0 : t.stickerPremiumStatus,
            )
          );
        });
      if (n.length !== 0) {
        var a = n.map(function (e) {
          return new (o("WAWebStickerModel").StickerModel)({
            id: e.filehash,
            mimetype: e.mimetype,
            width: e.width,
            height: e.height,
            filehash: e.filehash,
            encFilehash: e.encFilehash,
            directPath: e.directPath,
            mediaKey: e.mediaKey,
            mediaKeyTimestamp: e.mediaKeyTimestamp,
          });
        });
        for (var i of n) p(i);
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Favorite Stickers: add favorite sticker by starring msgs.",
            ])),
        ),
          o("WAWebFavoriteStickerJob").sendFavoriteStickerMutation(
            a,
            !0,
            o("WATimeUtils").unixTimeMs(),
          ));
      }
    }
    function c(e) {
      r("WAWebAuraGating").canUsePremiumSticker(
        e.mediaData.stickerPremiumStatus,
      ) &&
        (m(e),
        o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()
          ? o("WAWebFavoriteStickerJob").sendFavoriteStickerMutation(
              [e],
              !0,
              o("WATimeUtils").unixTimeMs(),
            )
          : o(
              "WAWebFavoriteStickerCollection",
            ).FavoriteStickerCollection.addOrUpdateStickers(
              [
                new (o("WAWebStickerModel").StickerModel)({
                  id: e.id,
                  mimetype: e.mimetype,
                  width: e.width,
                  height: e.height,
                  filehash: e.filehash,
                  encFilehash: e.encFilehash,
                  directPath: e.directPath,
                  mediaKey: e.mediaKey,
                  mediaKeyTimestamp: e.mediaKeyTimestamp,
                }),
              ],
              o("WATimeUtils").unixTimeMs(),
            ));
    }
    function d(e) {
      o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()
        ? o("WAWebFavoriteStickerJob").sendFavoriteStickerMutation(
            [e],
            !1,
            o("WATimeUtils").unixTimeMs(),
          )
        : o(
            "WAWebFavoriteStickerCollection",
          ).FavoriteStickerCollection.removeAndSave(e.filehash);
    }
    function m(e) {
      var t, n, r, a;
      new (o("WAWebStickerAddToFavoriteWamEvent").StickerAddToFavoriteWamEvent)(
        {
          stickerIsAnimated: !!((t = e.mediaData) != null && t.isAnimated),
          stickerIsFirstParty: !!((n = e.mediaData) != null && n.isFirstParty),
          stickerIsFromStickerMaker: !!(
            (r = e.mediaData) != null && r.isFromStickerMaker
          ),
          stickerIsPremium:
            ((a = e.mediaData) == null ? void 0 : a.stickerPremiumStatus) ===
            o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM,
        },
      ).commit();
    }
    function p(e) {
      var t, n, r, a;
      new (o("WAWebStickerAddToFavoriteWamEvent").StickerAddToFavoriteWamEvent)(
        {
          stickerIsAnimated: !!((t = e.mediaData) != null && t.isAnimated),
          stickerIsFirstParty: !!((n = e.mediaData) != null && n.isFirstParty),
          stickerIsFromStickerMaker: !!(
            (r = e.mediaData) != null && r.isFromStickerMaker
          ),
          stickerIsPremium:
            e.stickerPremiumStatus ===
              o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM ||
            ((a = e.mediaData) == null ? void 0 : a.stickerPremiumStatus) ===
              o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM,
        },
      ).commit();
    }
    function _(e) {
      var t = new (o("WAWebStickerModel").StickerModel)({
        id: e.filehash,
        mimetype: e.mimetype,
        width: e.width,
        height: e.height,
        filehash: e.filehash,
        encFilehash: e.encFilehash,
        directPath: e.directPath,
        mediaKey: e.mediaKey,
        mediaKeyTimestamp: e.mediaKeyTimestamp,
      });
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "Favorite Stickers: remove favorite sticker with msg.",
          ])),
      ),
        o("WAWebFavoriteStickerJob").sendFavoriteStickerMutation(
          [t],
          !1,
          o("WATimeUtils").unixTimeMs(),
        ));
    }
    function f(e) {
      return (
        o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(e) !=
        null
      );
    }
    ((l.addStickerMsgsToFavorites = u),
      (l.addStickerToFavorites = c),
      (l.removeStickerFromFavorites = d),
      (l.removeStickerMsgFromFavorites = _),
      (l.isStickerFilehashFavorited = f));
  },
  98,
);
