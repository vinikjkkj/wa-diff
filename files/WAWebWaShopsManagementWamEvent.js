__d(
  "WAWebWaShopsManagementWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumShopsManagementAction"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WaShopsManagement: [
            2908,
            {
              dedupKey: [4, e.TYPES.INTEGER],
              isShopsProductPreviewVisible: [2, e.TYPES.BOOLEAN],
              shopsManagementAction: [
                1,
                o("WAWebWamEnumShopsManagementAction").SHOPS_MANAGEMENT_ACTION,
              ],
              shopsSellerJid: [3, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WaShopsManagement: [] },
      );
    l.WaShopsManagementWamEvent = s;
  },
  98,
);
