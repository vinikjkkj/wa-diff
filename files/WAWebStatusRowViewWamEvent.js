__d(
  "WAWebStatusRowViewWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumStatusRowEntryMethod",
    "WAWebWamEnumStatusRowSection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StatusRowView: [
            1656,
            {
              psaCampaigns: [8, e.TYPES.STRING],
              statusRowEntryMethod: [
                5,
                o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD,
              ],
              statusRowIndex: [4, e.TYPES.INTEGER],
              statusRowSection: [
                3,
                o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION,
              ],
              statusRowUnreadItemCount: [7, e.TYPES.INTEGER],
              statusRowViewCount: [6, e.TYPES.INTEGER],
              statusSessionId: [1, e.TYPES.INTEGER],
              statusViewerSessionId: [2, e.TYPES.INTEGER],
              unifiedSessionId: [9, e.TYPES.STRING],
              updatesTabSessionId: [10, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StatusRowView: [] },
      );
    l.StatusRowViewWamEvent = s;
  },
  98,
);
