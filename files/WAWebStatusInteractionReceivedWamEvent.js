__d(
  "WAWebStatusInteractionReceivedWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumStatusInteractionActors",
    "WAWebWamEnumStatusInteractionMessageType",
    "WAWebWamEnumStatusInteractionResultType",
    "WAWebWamEnumStatusInteractionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StatusInteractionReceived: [
            6810,
            {
              channelStatusId: [7, e.TYPES.INTEGER],
              cid: [8, e.TYPES.STRING],
              statusId: [1, e.TYPES.STRING],
              statusInteractionActors: [
                6,
                o("WAWebWamEnumStatusInteractionActors")
                  .STATUS_INTERACTION_ACTORS,
              ],
              statusInteractionMessageType: [
                4,
                o("WAWebWamEnumStatusInteractionMessageType")
                  .STATUS_INTERACTION_MESSAGE_TYPE,
              ],
              statusInteractionResultType: [
                5,
                o("WAWebWamEnumStatusInteractionResultType")
                  .STATUS_INTERACTION_RESULT_TYPE,
              ],
              statusInteractionType: [
                2,
                o("WAWebWamEnumStatusInteractionType").STATUS_INTERACTION_TYPE,
              ],
              statusInteractorHashId: [9, e.TYPES.STRING],
              unifiedSessionId: [3, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StatusInteractionReceived: [] },
      );
    l.StatusInteractionReceivedWamEvent = s;
  },
  98,
);
