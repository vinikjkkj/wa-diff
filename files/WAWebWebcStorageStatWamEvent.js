__d(
  "WAWebWebcStorageStatWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcStorageStat: [
            1504,
            {
              webcAgeOfStorage: [3, e.TYPES.INTEGER],
              webcPackingEnabled: [4, e.TYPES.BOOLEAN],
              webcStorageQuota: [2, e.TYPES.INTEGER],
              webcStorageUsage: [1, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcStorageStat: [] },
      );
    l.WebcStorageStatWamEvent = s;
  },
  98,
);
