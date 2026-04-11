__d(
  "WAWebUsernameExposedWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        UsernameExposed: [
          7614,
          {
            usernameExposureContext: [
              1,
              o("WAWebWamCodegenUtils").TYPES.STRING,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { UsernameExposed: [] },
    );
    l.UsernameExposedWamEvent = e;
  },
  98,
);
