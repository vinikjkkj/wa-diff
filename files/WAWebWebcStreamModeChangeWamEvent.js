__d(
  "WAWebWebcStreamModeChangeWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumWebcStreamModeCode"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebcStreamModeChange: [
          770,
          {
            webcStreamMode: [
              1,
              o("WAWebWamEnumWebcStreamModeCode").WEBC_STREAM_MODE_CODE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebcStreamModeChange: [] },
    );
    l.WebcStreamModeChangeWamEvent = e;
  },
  98,
);
