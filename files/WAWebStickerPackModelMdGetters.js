__d(
  "WAWebStickerPackModelMdGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createStickerModelMdCache,
      }),
      s = e.unsafeIdentityGetter,
      u = s;
    l.getStickerPackMdUnsafe = u;
  },
  98,
);
