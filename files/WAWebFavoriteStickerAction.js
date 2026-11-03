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
    "WAWebShowExternalStickerFavoriteErrorToast.react",
    "WAWebSoundStickerUtils",
    "WAWebStickerAddToFavoriteWamEvent",
    "WAWebStickerModel",
    "WAWebStickerPremiumStatus",
    "WAWebUploadExternalStickerAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(t) {
      var n = t
        .filter(function (e) {
          return (
            e.type === o("WAWebMsgType").MSG_TYPE.STICKER &&
            o("WAWebSoundStickerUtils").canFavoriteStickerMsg(e)
          );
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
            stickerAudio: e.stickerAudio,
          });
        });
        for (var i of n) C(i);
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Favorite Stickers: add favorite sticker by starring msgs.",
            ])),
        ),
          o("WAWebFavoriteStickerJob")
            .sendFavoriteStickerMutation(a, !0, o("WATimeUtils").unixTimeMs())
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Favorite Stickers: failed to add favorite sticker by starring msgs: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("favorite-sticker-add-from-msgs-failed");
            }));
      }
    }
    function g(e) {
      if (e.externalUrl != null) {
        o("WAWebUploadExternalStickerAction")
          .withExternalStickerSelection(
            e,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  yield o(
                    "WAWebUploadExternalStickerAction",
                  ).uploadExternalSticker(e);
                  var t = new (o("WAWebStickerModel").StickerModel)(
                    e.toDbData(),
                  );
                  ((t.mediaData.accessibilityLabel =
                    e.mediaData.accessibilityLabel),
                    g(t));
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          )
          .catch(function (e) {
            (o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "External sticker favorite failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("external-sticker-favorite-failed"),
              o(
                "WAWebShowExternalStickerFavoriteErrorToast.react",
              ).showExternalStickerFavoriteErrorToast());
          });
        return;
      }
      r("WAWebAuraGating").canUsePremiumSticker(
        e.mediaData.stickerPremiumStatus,
      ) &&
        (y(e),
        o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()
          ? o("WAWebFavoriteStickerJob")
              .sendFavoriteStickerMutation(
                [e],
                !0,
                o("WATimeUtils").unixTimeMs(),
              )
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Favorite Stickers: failed to add favorite sticker: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("favorite-sticker-add-failed");
              })
          : o("WAWebFavoriteStickerCollection")
              .FavoriteStickerCollection.addOrUpdateStickers(
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
                    stickerAudio: e.stickerAudio,
                  }),
                ],
                o("WATimeUtils").unixTimeMs(),
              )
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Favorite Stickers: failed to add favorite sticker locally: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("favorite-sticker-local-add-failed");
              }));
    }
    function h(e) {
      o("WAWebMiscGatingUtils").isFavoriteStickersEnabled()
        ? o("WAWebFavoriteStickerJob")
            .sendFavoriteStickerMutation([e], !1, o("WATimeUtils").unixTimeMs())
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "Favorite Stickers: failed to remove favorite sticker: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("favorite-sticker-remove-failed");
            })
        : o(
            "WAWebFavoriteStickerCollection",
          ).FavoriteStickerCollection.removeAndSave(e.filehash);
    }
    function y(e) {
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
    function C(e) {
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
    function b(e) {
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
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "Favorite Stickers: remove favorite sticker with msg.",
          ])),
      ),
        o("WAWebFavoriteStickerJob")
          .sendFavoriteStickerMutation([t], !1, o("WATimeUtils").unixTimeMs())
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "Favorite Stickers: failed to remove favorite sticker from msg: ",
                    "",
                  ])),
                e,
              )
              .sendLogs("favorite-sticker-remove-from-msg-failed");
          }));
    }
    function v(e) {
      return (
        o("WAWebFavoriteStickerCollection").FavoriteStickerCollection.get(e) !=
        null
      );
    }
    ((l.addStickerMsgsToFavorites = f),
      (l.addStickerToFavorites = g),
      (l.removeStickerFromFavorites = h),
      (l.removeStickerMsgFromFavorites = b),
      (l.isStickerFilehashFavorited = v));
  },
  98,
);
