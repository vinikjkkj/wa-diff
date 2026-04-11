__d(
  "WAWebMdGroupParticipantMissAckWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumClientGroupSizeBucket",
    "WAWebWamEnumTypeOfGroupEnum",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdGroupParticipantMissAck: [
            4146,
            {
              groupSizeBucket: [
                1,
                o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET,
              ],
              isLid: [2, e.TYPES.BOOLEAN],
              messageIsRevoke: [3, e.TYPES.BOOLEAN],
              participantAddCount: [4, e.TYPES.INTEGER],
              participantRemoveCount: [5, e.TYPES.INTEGER],
              typeOfGroup: [
                6,
                o("WAWebWamEnumTypeOfGroupEnum").TYPE_OF_GROUP_ENUM,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdGroupParticipantMissAck: [] },
      );
    l.MdGroupParticipantMissAckWamEvent = s;
  },
  98,
);
