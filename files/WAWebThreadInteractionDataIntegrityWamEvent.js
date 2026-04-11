__d(
  "WAWebThreadInteractionDataIntegrityWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumBlockReason"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ThreadInteractionDataIntegrity: [
            6468,
            {
              blockReason: [1, o("WAWebWamEnumBlockReason").BLOCK_REASON],
              isBlocked: [2, e.TYPES.BOOLEAN],
              isReported: [3, e.TYPES.BOOLEAN],
              smbMarketingMessagesSpamReports: [4, e.TYPES.INTEGER],
              spamReports: [5, e.TYPES.INTEGER],
              threadCreationDate: [9, e.TYPES.STRING],
              threadDs: [6, e.TYPES.STRING],
              threadId: [7, e.TYPES.STRING],
              threadIdByLid: [8, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ThreadInteractionDataIntegrity: [] },
      );
    l.ThreadInteractionDataIntegrityWamEvent = s;
  },
  98,
);
