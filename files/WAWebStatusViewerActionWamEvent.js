__d(
  "WAWebStatusViewerActionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumInlineVideoType",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusViewActionType",
    "WAWebWamEnumTopBarAttributionType",
    "WAWebWamEnumUrlStatusClicked",
    "WAWebWamEnumUrlStatusType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StatusViewerAction: [
            6692,
            {
              attributionType: [
                1,
                o("WAWebWamEnumTopBarAttributionType").TOP_BAR_ATTRIBUTION_TYPE,
              ],
              attributionTypes: [3, e.TYPES.STRING],
              externalSourceDomainType: [
                5,
                o("WAWebWamEnumInlineVideoType").INLINE_VIDEO_TYPE,
              ],
              psaCampaignId: [11, e.TYPES.STRING],
              statusCategory: [
                4,
                o("WAWebWamEnumStatusCategory").STATUS_CATEGORY,
              ],
              statusId: [12, e.TYPES.STRING],
              statusViewerSessionId: [13, e.TYPES.INTEGER],
              urlStatusClicked: [
                6,
                o("WAWebWamEnumUrlStatusClicked").URL_STATUS_CLICKED,
              ],
              urlStatusType: [
                7,
                o("WAWebWamEnumUrlStatusType").URL_STATUS_TYPE,
              ],
              viewerActionType: [
                2,
                o("WAWebWamEnumStatusViewActionType").STATUS_VIEW_ACTION_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StatusViewerAction: [] },
      );
    l.StatusViewerActionWamEvent = s;
  },
  98,
);
