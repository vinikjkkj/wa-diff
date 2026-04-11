__d(
  "WAWebThreadInteractionDataVoipWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ThreadInteractionDataVoip: [
            6362,
            {
              callOffersReceived: [1, e.TYPES.INTEGER],
              callOffersSent: [2, e.TYPES.INTEGER],
              callsResultBusy: [3, e.TYPES.INTEGER],
              callsResultCancelled: [4, e.TYPES.INTEGER],
              callsResultConnected: [5, e.TYPES.INTEGER],
              callsResultError: [6, e.TYPES.INTEGER],
              callsResultMissed: [7, e.TYPES.INTEGER],
              callsResultRejected: [8, e.TYPES.INTEGER],
              threadCreationDate: [16, e.TYPES.STRING],
              threadDs: [9, e.TYPES.STRING],
              threadId: [14, e.TYPES.STRING],
              threadIdByLid: [15, e.TYPES.STRING],
              totalCallDuration: [11, e.TYPES.INTEGER],
              videoCallsOffered: [12, e.TYPES.INTEGER],
              voiceCallsOffered: [13, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ThreadInteractionDataVoip: [] },
      );
    l.ThreadInteractionDataVoipWamEvent = s;
  },
  98,
);
