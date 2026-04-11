__d(
  "WAWebBusinessToolsClickWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBusinessToolsEntryPointType",
    "WAWebWamEnumBusinessToolsItemType",
    "WAWebWamEnumBusinessToolsLinkedAccountType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BusinessToolsClick: [
            2218,
            {
              businessToolsEntryPoint: [
                5,
                o("WAWebWamEnumBusinessToolsEntryPointType")
                  .BUSINESS_TOOLS_ENTRY_POINT_TYPE,
              ],
              businessToolsEntryPointPlacement: [6, e.TYPES.INTEGER],
              businessToolsItem: [
                3,
                o("WAWebWamEnumBusinessToolsItemType").BUSINESS_TOOLS_ITEM_TYPE,
              ],
              businessToolsSequenceNumber: [2, e.TYPES.INTEGER],
              businessToolsSessionId: [1, e.TYPES.STRING],
              linkingTarget: [
                4,
                o("WAWebWamEnumBusinessToolsLinkedAccountType")
                  .BUSINESS_TOOLS_LINKED_ACCOUNT_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { BusinessToolsClick: [] },
      );
    l.BusinessToolsClickWamEvent = s;
  },
  98,
);
