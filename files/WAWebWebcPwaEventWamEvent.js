__d(
  "WAWebWebcPwaEventWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumWebcPwaActionType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebcPwaEvent: [
          4116,
          {
            webcPwaAction: [
              2,
              o("WAWebWamEnumWebcPwaActionType").WEBC_PWA_ACTION_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebcPwaEvent: [] },
    );
    l.WebcPwaEventWamEvent = e;
  },
  98,
);
