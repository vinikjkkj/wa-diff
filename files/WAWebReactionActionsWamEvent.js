__d(
  "WAWebReactionActionsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWamEnumReactionActionType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ReactionActions: [
          3184,
          {
            mediaType: [3, o("WAWebWamEnumMediaType").MEDIA_TYPE],
            messageType: [1, o("WAWebWamEnumMessageType").MESSAGE_TYPE],
            reactionAction: [
              2,
              o("WAWebWamEnumReactionActionType").REACTION_ACTION_TYPE,
            ],
          },
          [1, 10, 20],
          "regular",
        ],
      },
      { ReactionActions: [] },
    );
    l.ReactionActionsWamEvent = e;
  },
  98,
);
