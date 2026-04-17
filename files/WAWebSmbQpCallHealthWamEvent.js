__d(
  "WAWebSmbQpCallHealthWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumFetchMechanismEnum",
    "WAWebWamEnumFetchResultEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        SmbQpCallHealth: [
          6746,
          {
            fetchExceptionMessage: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
            fetchMechanism: [
              2,
              o("WAWebWamEnumFetchMechanismEnum").FETCH_MECHANISM_ENUM,
            ],
            fetchResult: [
              3,
              o("WAWebWamEnumFetchResultEnum").FETCH_RESULT_ENUM,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { SmbQpCallHealth: [] },
    );
    l.SmbQpCallHealthWamEvent = e;
  },
  98,
);
