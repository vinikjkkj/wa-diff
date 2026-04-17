__d(
  "WAWebGroupCreateWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumGroupCreateEntryPoint"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GroupCreate: [
          594,
          {
            ephemeralityDuration: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            groupCreateEntryPoint: [
              1,
              o("WAWebWamEnumGroupCreateEntryPoint").GROUP_CREATE_ENTRY_POINT,
            ],
            hasGroupName: [3, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { GroupCreate: [] },
    );
    l.GroupCreateWamEvent = e;
  },
  98,
);
