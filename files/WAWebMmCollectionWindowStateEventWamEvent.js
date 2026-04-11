__d(
  "WAWebMmCollectionWindowStateEventWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MmCollectionWindowStateEvent: [
            6744,
            {
              businessLidOrJid: [1, e.TYPES.STRING],
              entSourceSubplatform: [7, e.TYPES.STRING],
              isUserDisclosed: [8, e.TYPES.BOOLEAN],
              mmDisclosureFlags: [6, e.TYPES.INTEGER],
              mmHasDisclosedToken: [2, e.TYPES.BOOLEAN],
              mmHasDisclosedUrl: [3, e.TYPES.BOOLEAN],
              mmHasShowDisclosureFlag: [4, e.TYPES.BOOLEAN],
              mmHasUndisclosedToken: [9, e.TYPES.BOOLEAN],
              templateId: [5, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { MmCollectionWindowStateEvent: [] },
      );
    l.MmCollectionWindowStateEventWamEvent = s;
  },
  98,
);
