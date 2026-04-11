__d(
  "WAWebLabelEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumLabelOperations",
    "WAWebWamEnumLabelTargets",
    "WAWebWamEnumLastMessageDirection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          LabelEvent: [
            1422,
            {
              customLabelTitle: [9, e.TYPES.STRING],
              entryPointConversionSource: [10, e.TYPES.STRING],
              itemsLabeledCount: [5, e.TYPES.INTEGER],
              labelCount: [4, e.TYPES.INTEGER],
              labelOperation: [
                2,
                o("WAWebWamEnumLabelOperations").LABEL_OPERATIONS,
              ],
              labelOperationEntryPoint: [6, e.TYPES.STRING],
              labelTarget: [1, o("WAWebWamEnumLabelTargets").LABEL_TARGETS],
              lastMessageDirection: [
                14,
                o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION,
              ],
              messageDepth: [15, e.TYPES.INTEGER],
              predefinedLabelNumber: [3, e.TYPES.INTEGER],
              threadCreationDate: [11, e.TYPES.STRING],
              threadId: [12, e.TYPES.STRING],
              threadIdHmac: [13, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { LabelEvent: [] },
      );
    l.LabelEventWamEvent = s;
  },
  98,
);
