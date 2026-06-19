__d(
  "WAWebStatusInteractionSentWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChannelUserType",
    "WAWebWamEnumStatusInteractionActors",
    "WAWebWamEnumStatusInteractionMessageType",
    "WAWebWamEnumStatusInteractionResultType",
    "WAWebWamEnumStatusInteractionType",
    "WAWebWamEnumStatusPosterContactType",
    "WAWebWamEnumStatusRowSection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StatusInteractionSent: [
            6812,
            {
              channelStatusId: [10, e.TYPES.INTEGER],
              channelUserType: [
                11,
                o("WAWebWamEnumChannelUserType").CHANNEL_USER_TYPE,
              ],
              cid: [12, e.TYPES.STRING],
              statusId: [1, e.TYPES.STRING],
              statusInteractionActors: [
                9,
                o("WAWebWamEnumStatusInteractionActors")
                  .STATUS_INTERACTION_ACTORS,
              ],
              statusInteractionMessageType: [
                6,
                o("WAWebWamEnumStatusInteractionMessageType")
                  .STATUS_INTERACTION_MESSAGE_TYPE,
              ],
              statusInteractionResultType: [
                7,
                o("WAWebWamEnumStatusInteractionResultType")
                  .STATUS_INTERACTION_RESULT_TYPE,
              ],
              statusInteractionType: [
                2,
                o("WAWebWamEnumStatusInteractionType").STATUS_INTERACTION_TYPE,
              ],
              statusPosterContactType: [
                8,
                o("WAWebWamEnumStatusPosterContactType")
                  .STATUS_POSTER_CONTACT_TYPE,
              ],
              statusRowSection: [
                3,
                o("WAWebWamEnumStatusRowSection").STATUS_ROW_SECTION,
              ],
              statusViewerSessionId: [4, e.TYPES.INTEGER],
              unifiedSessionId: [5, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StatusInteractionSent: [] },
      );
    l.StatusInteractionSentWamEvent = s;
  },
  98,
);
