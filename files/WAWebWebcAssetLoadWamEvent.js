__d(
  "WAWebWebcAssetLoadWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumWebcAssetCacheTypeCode"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcAssetLoad: [
            1358,
            {
              webcAssetCacheType: [
                4,
                o("WAWebWamEnumWebcAssetCacheTypeCode")
                  .WEBC_ASSET_CACHE_TYPE_CODE,
              ],
              webcAssetFromCache: [2, e.TYPES.BOOLEAN],
              webcAssetLoadT: [3, e.TYPES.TIMER],
              webcAssetName: [1, e.TYPES.STRING],
              webcAssetSize: [5, e.TYPES.NUMBER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcAssetLoad: [] },
      );
    l.WebcAssetLoadWamEvent = s;
  },
  98,
);
