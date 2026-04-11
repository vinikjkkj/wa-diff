__d(
  "WAWebWebcMenuWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebcMenuItemLabel",
    "WAWebWamEnumWebcMenuType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebcMenu: [
          2504,
          {
            webcMenuAction: [2, o("WAWebWamEnumWebcMenuType").WEBC_MENU_TYPE],
            webcMenuItemLabel: [
              3,
              o("WAWebWamEnumWebcMenuItemLabel").WEBC_MENU_ITEM_LABEL,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebcMenu: [] },
    );
    l.WebcMenuWamEvent = e;
  },
  98,
);
