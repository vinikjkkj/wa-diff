__d(
  "WAWebCadminDemoteWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCadminDemoteOriginType",
    "WAWebWamEnumCadminDemoteResultType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        CadminDemote: [
          3426,
          {
            cadminDemoteOrigin: [
              1,
              o("WAWebWamEnumCadminDemoteOriginType").CADMIN_DEMOTE_ORIGIN_TYPE,
            ],
            cadminDemoteResult: [
              2,
              o("WAWebWamEnumCadminDemoteResultType").CADMIN_DEMOTE_RESULT_TYPE,
            ],
            isLastCadminOrCreator: [4, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { CadminDemote: [] },
    );
    l.CadminDemoteWamEvent = e;
  },
  98,
);
