__d(
  "WAWebMdExpansionAgentBrowserMdIdWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumMultideviceActionType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdExpansionAgentBrowserMdId: [
            3390,
            {
              agentId: [1, e.TYPES.STRING],
              browserId: [2, e.TYPES.STRING],
              companionMdId: [5, e.TYPES.INTEGER],
              isCustomAgentName: [6, e.TYPES.BOOLEAN],
              isNewAgent: [9, e.TYPES.BOOLEAN],
              loginTimestamp: [3, e.TYPES.INTEGER],
              logoutTimestamp: [4, e.TYPES.INTEGER],
              mdLinkedCount: [8, e.TYPES.INTEGER],
              multideviceAction: [
                7,
                o("WAWebWamEnumMultideviceActionType").MULTIDEVICE_ACTION_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdExpansionAgentBrowserMdId: [] },
      );
    l.MdExpansionAgentBrowserMdIdWamEvent = s;
  },
  98,
);
