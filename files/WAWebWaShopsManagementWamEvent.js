__d(
  "WAWebWaShopsManagementWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumShopsManagementAction"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WaShopsManagement: [
          2908,
          {
            isShopsProductPreviewVisible: [
              2,
              o("WAWebWamCodegenUtils").TYPES.BOOLEAN,
            ],
            shopsManagementAction: [
              1,
              o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION,
            ],
            shopsSellerJid: [3, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WaShopsManagement: [] },
    );
    l.WaShopsManagementWamEvent = e;
  },
  98,
);
