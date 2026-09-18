__d(
  "WAWebAdvMetadataCreationFailureWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        AdvMetadataCreationFailure: [
          3048,
          {
            advMetadataIsMe: [1, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
            dedupKey: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { AdvMetadataCreationFailure: [] },
    );
    l.AdvMetadataCreationFailureWamEvent = e;
  },
  98,
);
