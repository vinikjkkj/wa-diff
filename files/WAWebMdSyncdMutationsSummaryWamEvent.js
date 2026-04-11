__d(
  "WAWebMdSyncdMutationsSummaryWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMutationBundleType",
    "WAWebWamEnumMutationDirectionType",
    "WAWebWamEnumSyncdCollectionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdSyncdMutationsSummary: [
            6302,
            {
              appSessionId: [1, e.TYPES.STRING],
              companionSessionIds: [2, e.TYPES.STRING],
              isInBootstrap: [3, e.TYPES.BOOLEAN],
              lidMutations: [4, e.TYPES.STRING],
              mutationBundle: [
                5,
                o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE,
              ],
              mutationDirection: [
                6,
                o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE,
              ],
              patchMac: [7, e.TYPES.STRING],
              removeMutations: [8, e.TYPES.STRING],
              seqNumber: [9, e.TYPES.INTEGER],
              setMutations: [10, e.TYPES.STRING],
              snapshotMac: [11, e.TYPES.STRING],
              syncdCollection: [
                12,
                o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE,
              ],
              syncdKeyidKeyhash: [13, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdSyncdMutationsSummary: [] },
      );
    l.MdSyncdMutationsSummaryWamEvent = s;
  },
  98,
);
