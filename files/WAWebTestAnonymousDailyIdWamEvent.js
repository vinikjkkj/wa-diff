__d(
  "WAWebTestAnonymousDailyIdWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumPsTestEnumField"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        TestAnonymousDailyId: [
          2958,
          {
            psTestEnumField: [
              1,
              o("WAWebWamEnumPsTestEnumField").PS_TEST_ENUM_FIELD,
            ],
            psTestFloatField: [2, o("WAWebWamCodegenUtils").TYPES.NUMBER],
          },
          [1, 1, 1],
          "private",
          248614979,
        ],
      },
      { TestAnonymousDailyId: [] },
    );
    l.TestAnonymousDailyIdWamEvent = e;
  },
  98,
);
