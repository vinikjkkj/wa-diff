__d(
  "WAWebWebcMediaLoadWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumWebcMediaLoadResultCode"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebcMediaLoad: [
          1202,
          {
            webcMediaLoadResult: [
              2,
              o("WAWebWamEnumWebcMediaLoadResultCode")
                .WEBC_MEDIA_LOAD_RESULT_CODE,
            ],
            webcMediaLoadT: [1, o("WAWebWamCodegenUtils").TYPES.TIMER],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebcMediaLoad: [] },
    );
    l.WebcMediaLoadWamEvent = e;
  },
  98,
);
