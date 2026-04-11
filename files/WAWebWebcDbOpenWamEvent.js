__d(
  "WAWebWebcDbOpenWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcDbOpen: [
            1940,
            {
              webcDbName: [1, e.TYPES.STRING],
              webcDbOpenNumAttempts: [3, e.TYPES.INTEGER],
              webcDbOpenWasSuccess: [2, e.TYPES.BOOLEAN],
            },
            [1, 1e3, 2e3],
            "regular",
          ],
        },
        { WebcDbOpen: [] },
      );
    l.WebcDbOpenWamEvent = s;
  },
  98,
);
