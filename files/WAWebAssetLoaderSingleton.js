__d(
  "WAWebAssetLoaderSingleton",
  ["WAWebAssetLoader", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = new (o("WAWebAssetLoader").AssetLoaderImpl)();
    (window.addEventListener("dpichange", function () {
      e.loadAssetsForCurrentDpi();
    }),
      r("gkx")("26258") || (window.AssetLoader = e),
      (l.AssetLoader = e));
  },
  98,
);
