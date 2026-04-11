__d(
  "WAWebClearAppStatesAsync",
  [
    "WACommonTaskScheduler",
    "WALogger",
    "WAMemoizeCache",
    "WAPromiseDelays",
    "WAWebABProps",
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
    "asyncToGeneratorRuntime",
    "cr:17219",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          n === void 0 && (n = 100);
          var a = [].concat(t.getModelsArray());
          t.reset();
          var i = o("WAWebABProps").getABPropConfigValue(
            "wmi_worker_scheduler_web",
          );
          if (i)
            for (var l of a) {
              try {
                l.delete == null || l.delete();
              } catch (t) {
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "clearCollection: could not delete a model",
                    ])),
                );
              }
              yield r("WACommonTaskScheduler").yield();
            }
          else
            for (var u = 0; u < a.length; u += n) {
              var c = a.slice(u, u + n);
              (c.forEach(function (e) {
                try {
                  e.delete == null || e.delete();
                } catch (e) {
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "clearCollection: could not delete a model",
                      ])),
                  );
                }
              }),
                u + n < a.length &&
                  (yield o("WAPromiseDelays").releaseToEventLoop()));
            }
          t.delete();
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a;
          if ((e === void 0 && (e = 100), t === void 0 && (t = !1), !t)) {
            (o("WAMemoizeCache").clearAllMemoizeCache(),
              o("WAWebOpenChatFlow.react").clearChatIdCorrectionCache(),
              o("WAWebUserPrefsMeUser").clearGetMaybeMePnUserCache(),
              o("WAWebConnModel").Conn.delete(),
              r("WAWebNoticeModel").delete(),
              r("WAWebSettingsModel").delete(),
              o("WAWebPrimaryFeaturesModel").PrimaryFeatures.delete(),
              o("WAWebStreamModel").Stream.delete(),
              r("WAWebWidStore").delete(),
              yield u(o("WAWebChatCollection").ChatCollection, e),
              yield u(o("WAWebStatusCollection").StatusCollection, e));
            for (var i of o(
              "WAWebStickerPackCollectionMd",
            ).StickerPackCollectionMd.getModelsArray())
              i.stickers && (yield u(i.stickers, e));
            yield u(
              o("WAWebStickerPackCollectionMd").StickerPackCollectionMd,
              e,
            );
            var l = ["Chat", "Status", "StickerPack", "Sticker"];
            for (var s of Object.keys(r("WAWebCollections")))
              l.includes(s) || (yield u(r("WAWebCollections")[s], e));
          }
          (o("WAWebMediaStorage").delistAndDeleteAllMedia(),
            o("WAWebUserPrefsClearLocalState").clearAllTemporaryStorageData(),
            t ||
              (o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.clear(),
              o(
                "WAWebInMemoryLottieStickerCache",
              ).InMemoryLottieStickerCache.clear(),
              o(
                "WAWebGalaxyFlowsSessionsCache",
              ).GalaxyFlowSessionsCache.clear(),
              o("WAWebApiContact").clearLidPnMappingCache()),
            n("cr:17219") == null ||
              (a = n("cr:17219").getWindowsBridge()) == null ||
              (a = a.getPreferences()) == null ||
              a.clean(),
            (o("WAWebConnModel").Conn.blockStoreAdds = !0));
        })),
        m.apply(this, arguments)
      );
    }
    l.default = d;
  },
  98,
);
