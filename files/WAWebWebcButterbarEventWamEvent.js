__d(
  "WAWebWebcButterbarEventWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebcButterbarActionType",
    "WAWebWamEnumWebcButterbarBbType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebcButterbarEvent: [
          3932,
          {
            webcButterbarAction: [
              1,
              o("WAWebWamEnumWebcButterbarActionType")
                .WEBC_BUTTERBAR_ACTION_TYPE,
            ],
            webcButterbarType: [
              2,
              o("WAWebWamEnumWebcButterbarBbType").WEBC_BUTTERBAR_BB_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebcButterbarEvent: [] },
    );
    l.WebcButterbarEventWamEvent = e;
  },
  98,
);
