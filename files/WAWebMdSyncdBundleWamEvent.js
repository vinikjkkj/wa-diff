__d(
  "WAWebMdSyncdBundleWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumKmpSyncdFlowEnum",
    "WAWebWamEnumMutationBundleType",
    "WAWebWamEnumMutationDirectionType",
    "WAWebWamEnumSyncdCollectionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdSyncdBundle: [
            5966,
            {
              appSessionId: [1, e.TYPES.STRING],
              bundleVersion: [2, e.TYPES.INTEGER],
              companionSessionIds: [3, e.TYPES.STRING],
              computedLthash: [4, e.TYPES.STRING],
              expectedMac: [5, e.TYPES.STRING],
              kmpSyncdFlow: [
                17,
                o("WAWebWamEnumKmpSyncdFlowEnum").KMP_SYNCD_FLOW_ENUM,
              ],
              mutationBundle: [
                6,
                o("WAWebWamEnumMutationBundleType").MUTATION_BUNDLE_TYPE,
              ],
              mutationDirection: [
                7,
                o("WAWebWamEnumMutationDirectionType").MUTATION_DIRECTION_TYPE,
              ],
              patchMac: [8, e.TYPES.STRING],
              patchSize: [9, e.TYPES.INTEGER],
              processingErrorMessage: [10, e.TYPES.STRING],
              seqNumber: [11, e.TYPES.INTEGER],
              snapshotMac: [12, e.TYPES.STRING],
              snapshotSize: [13, e.TYPES.INTEGER],
              syncdCollection: [
                14,
                o("WAWebWamEnumSyncdCollectionType").SYNCD_COLLECTION_TYPE,
              ],
              syncdKeyhash: [15, e.TYPES.STRING],
              syncdKeyid: [16, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdSyncdBundle: [] },
      );
    l.MdSyncdBundleWamEvent = s;
  },
  98,
);
