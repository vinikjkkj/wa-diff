__d(
  "WAWebSyncdKeyCountWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SyncdKeyCount: [
            3978,
            {
              keysUsedInSnapshotCount: [1, e.TYPES.INTEGER],
              p80MuationsPerKey: [2, e.TYPES.INTEGER],
              p95MuationsPerKey: [3, e.TYPES.INTEGER],
              syncdSessionLengthDays: [4, e.TYPES.INTEGER],
              totalKeyCount: [5, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SyncdKeyCount: [] },
      );
    l.SyncdKeyCountWamEvent = s;
  },
  98,
);
