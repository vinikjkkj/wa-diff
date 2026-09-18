__d(
  "WAWebWebcNavbarWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumWebcNavbarItemLabel"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebcNavbar: [
          5258,
          {
            dedupKey: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            webcNavbarItemLabel: [
              1,
              o("WAWebWamEnumWebcNavbarItemLabel").WEBC_NAVBAR_ITEM_LABEL,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebcNavbar: [] },
    );
    l.WebcNavbarWamEvent = e;
  },
  98,
);
