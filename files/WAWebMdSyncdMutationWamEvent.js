__d(
  "WAWebMdSyncdMutationWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMutationBundleType",
    "WAWebWamEnumMutationDirectionType",
    "WAWebWamEnumMutationOperationType",
    "WAWebWamEnumSyncdCollectionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdSyncdMutation: [
            5970,
            {
              appSessionId: [1, e.TYPES.STRING],
              companionSessionIds: [2, e.TYPES.STRING],
              contentLength: [3, e.TYPES.INTEGER],
              isInBootstrap: [4, e.TYPES.BOOLEAN],
              isUsingLid: [5, e.TYPES.BOOLEAN],
              mutationBundle: [
                6,
                o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE,
              ],
              mutationDirection: [
                7,
                o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE,
              ],
              mutationMac: [8, e.TYPES.STRING],
              mutationName: [9, e.TYPES.STRING],
              mutationOperation: [
                10,
                o("WAWebWamEnumMutationOperationType").MUTATION_OPERATION_TYPE,
              ],
              patchMac: [15, e.TYPES.STRING],
              seqNumber: [11, e.TYPES.INTEGER],
              syncdCollection: [
                12,
                o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE,
              ],
              syncdKeyhash: [13, e.TYPES.STRING],
              syncdKeyid: [14, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdSyncdMutation: [] },
      );
    l.MdSyncdMutationWamEvent = s;
  },
  98,
);
