__d(
  "WAWebMdAppStateSyncMutationStatsWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumMutationCountBucket"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebWamCodegenUtils").defineEvents(
        {
          MdAppStateSyncMutationStats: [
            3180,
            {
              applied: [
                1,
                (e = o("WAWebWamEnumMutationCountBucket"))
                  .MUTATION_COUNT_BUCKET,
              ],
              failed: [2, e.MUTATION_COUNT_BUCKET],
              invalid: [3, e.MUTATION_COUNT_BUCKET],
              orphan: [4, e.MUTATION_COUNT_BUCKET],
              syncdAction: [5, o("WAWebWamCodegenUtils").TYPES.STRING],
              unsupported: [6, e.MUTATION_COUNT_BUCKET],
            },
            [1, 1, 100],
            "private",
            0,
          ],
        },
        { MdAppStateSyncMutationStats: [] },
      );
    l.MdAppStateSyncMutationStatsWamEvent = s;
  },
  98,
);
