__d(
  "WAWebMdAppStateDirtyBitsWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        MdAppStateDirtyBits: [
          2520,
          {
            dirtyBitsFalsePositive: [
              2,
              o("WAWebWamCodegenUtils").TYPES.BOOLEAN,
            ],
          },
          [1, 20, 1e3],
          "regular",
        ],
      },
      { MdAppStateDirtyBits: [] },
    );
    l.MdAppStateDirtyBitsWamEvent = e;
  },
  98,
);
