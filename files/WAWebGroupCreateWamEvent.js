__d(
  "WAWebGroupCreateWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumGroupCreateEntryPoint"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          GroupCreate: [
            594,
            {
              dedupKey: [4, e.TYPES.INTEGER],
              ephemeralityDuration: [2, e.TYPES.INTEGER],
              groupCreateEntryPoint: [
                1,
                o("WAWebWamEnumGroupCreateEntryPoint").GROUP_CREATE_ENTRY_POINT,
              ],
              hasGroupName: [3, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { GroupCreate: [] },
      );
    l.GroupCreateWamEvent = s;
  },
  98,
);
