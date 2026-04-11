__d(
  "WAWebFrontendStickerPackModelMdGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebStickerPackModelMdGetters"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebStickerPackModelMdGetters").getStickerPackMdUnsafe,
        createCache: o("WAWebGettersCaches").createStickerModelMdCache,
      }),
      s = e.field,
      u = s("stickers");
    l.getStickers = u;
  },
  98,
);
