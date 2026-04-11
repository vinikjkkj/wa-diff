__d(
  "WAWebClearAppStates",
  [
    "WALogger",
    "WAMemoizeCache",
    "WAWebApiContact",
    "WAWebChatCollection",
    "WAWebCollections",
    "WAWebConnModel",
    "WAWebGalaxyFlowsSessionsCache",
    "WAWebInMemoryLottieStickerCache",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaStorage",
    "WAWebNoticeModel",
    "WAWebOpenChatFlow.react",
    "WAWebPrimaryFeaturesModel",
    "WAWebSettingsModel",
    "WAWebStatusCollection",
    "WAWebStickerPackCollectionMd",
    "WAWebStreamModel",
    "WAWebUserPrefsClearLocalState",
    "WAWebUserPrefsMeUser",
    "WAWebWidStore",
    "cr:17219",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = [].concat(t.getModelsArray());
      (t.reset(),
        n.forEach(function (t) {
          try {
            t.delete == null || t.delete();
          } catch (t) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "clearCollection: could not delete a model",
                ])),
            );
          }
        }),
        t.delete());
    }
    function u(e) {
      var t;
      if ((e === void 0 && (e = !1), !e)) {
        (o("WAMemoizeCache").clearAllMemoizeCache(),
          o("WAWebOpenChatFlow.react").clearChatIdCorrectionCache(),
          o("WAWebUserPrefsMeUser").clearGetMaybeMePnUserCache(),
          o("WAWebConnModel").Conn.delete(),
          r("WAWebNoticeModel").delete(),
          r("WAWebSettingsModel").delete(),
          o("WAWebPrimaryFeaturesModel").PrimaryFeatures.delete(),
          o("WAWebStreamModel").Stream.delete(),
          r("WAWebWidStore").delete(),
          s(o("WAWebChatCollection").ChatCollection),
          s(o("WAWebStatusCollection").StatusCollection),
          o("WAWebStickerPackCollectionMd").StickerPackCollectionMd.forEach(
            function (e) {
              e.stickers && s(e.stickers);
            },
          ),
          s(o("WAWebStickerPackCollectionMd").StickerPackCollectionMd));
        var a = ["Chat", "Status", "StickerPack", "Sticker"];
        Object.keys(r("WAWebCollections")).forEach(function (e) {
          a.includes(e) || s(r("WAWebCollections")[e]);
        });
      }
      (o("WAWebMediaStorage").delistAndDeleteAllMedia(),
        o("WAWebUserPrefsClearLocalState").clearAllTemporaryStorageData(),
        e ||
          (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.clear(),
          o(
            "WAWebInMemoryLottieStickerCache",
          ).InMemoryLottieStickerCache.clear(),
          o("WAWebGalaxyFlowsSessionsCache").GalaxyFlowSessionsCache.clear(),
          o("WAWebApiContact").clearLidPnMappingCache()),
        n("cr:17219") == null ||
          (t = n("cr:17219").getWindowsBridge()) == null ||
          (t = t.getPreferences()) == null ||
          t.clean(),
        (o("WAWebConnModel").Conn.blockStoreAdds = !0));
    }
    l.default = u;
  },
  98,
);
