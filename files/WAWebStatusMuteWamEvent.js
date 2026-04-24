__d(
  "WAWebStatusMuteWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMuteAction",
    "WAWebWamEnumMuteOrigin",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusPosterContactType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StatusMute: [
            2978,
            {
              cid: [15, e.TYPES.STRING],
              isPosterBiz: [9, e.TYPES.BOOLEAN],
              isPosterInAddressBook: [10, e.TYPES.BOOLEAN],
              muteAction: [8, o("WAWebWamEnumMuteAction").MUTE_ACTION],
              muteOrigin: [6, o("WAWebWamEnumMuteOrigin").MUTE_ORIGIN],
              psaCampaignId: [7, e.TYPES.STRING],
              psaCampaignIds: [4, e.TYPES.STRING],
              psaCampaignItemIndex: [5, e.TYPES.INTEGER],
              statusCategory: [
                13,
                o("WAWebWamEnumStatusCategory").STATUS_CATEGORY,
              ],
              statusItemIndex: [3, e.TYPES.INTEGER],
              statusPosterContactType: [
                14,
                o("WAWebWamEnumStatusPosterContactType")
                  .STATUS_POSTER_CONTACT_TYPE,
              ],
              statusSessionId: [1, e.TYPES.INTEGER],
              statusViewerSessionId: [2, e.TYPES.INTEGER],
              unifiedSessionId: [11, e.TYPES.STRING],
              updatesTabSessionId: [12, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StatusMute: [] },
      );
    l.StatusMuteWamEvent = s;
  },
  98,
);
