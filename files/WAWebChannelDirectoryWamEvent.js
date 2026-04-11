__d(
  "WAWebChannelDirectoryWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChannelDirectoryAction",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "WAWebWamEnumChannelDirectoryImpReason",
    "WAWebWamEnumChannelDirectoryPillSelected",
    "WAWebWamEnumChannelDirectorySurface",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChannelDirectory: [
            4544,
            {
              channelCategoryIndex: [11, e.TYPES.INTEGER],
              channelCategoryName: [12, e.TYPES.STRING],
              channelDirectoryAction: [
                1,
                o("WAWebWamEnumChannelDirectoryAction")
                  .CHANNEL_DIRECTORY_ACTION,
              ],
              channelDirectoryActionSequenceNumber: [5, e.TYPES.INTEGER],
              channelDirectoryEntryPoint: [
                2,
                o("WAWebWamEnumChannelDirectoryEntryPoint")
                  .CHANNEL_DIRECTORY_ENTRY_POINT,
              ],
              channelDirectorySearchSessionId: [14, e.TYPES.STRING],
              channelDirectorySessionId: [3, e.TYPES.INTEGER],
              channelDirectorySurface: [
                13,
                o("WAWebWamEnumChannelDirectorySurface")
                  .CHANNEL_DIRECTORY_SURFACE,
              ],
              channelIndex: [6, e.TYPES.INTEGER],
              cid: [4, e.TYPES.STRING],
              countrySelector: [8, e.TYPES.STRING],
              impReason: [
                9,
                o("WAWebWamEnumChannelDirectoryImpReason")
                  .CHANNEL_DIRECTORY_IMP_REASON,
              ],
              pillSelected: [
                10,
                o("WAWebWamEnumChannelDirectoryPillSelected")
                  .CHANNEL_DIRECTORY_PILL_SELECTED,
              ],
              searchMode: [7, e.TYPES.BOOLEAN],
              unifiedSessionId: [15, e.TYPES.STRING],
              updatesTabSessionId: [16, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChannelDirectory: [] },
      );
    l.ChannelDirectoryWamEvent = s;
  },
  98,
);
