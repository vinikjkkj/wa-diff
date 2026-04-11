__d(
  "WAWebMexEventWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MexEvent: [
            3782,
            {
              isMex: [1, e.TYPES.BOOLEAN],
              mexEventData: [2, e.TYPES.STRING],
              mexEventDurationT: [12, e.TYPES.TIMER],
              mexEventEndTime: [3, e.TYPES.INTEGER],
              mexEventEnvelopeResponseStatus: [13, e.TYPES.INTEGER],
              mexEventOperation: [7, e.TYPES.STRING],
              mexEventPayloadResponseStatus: [14, e.TYPES.INTEGER],
              mexEventRequestSize: [8, e.TYPES.INTEGER],
              mexEventResponseSize: [9, e.TYPES.INTEGER],
              mexEventRetries: [10, e.TYPES.INTEGER],
              mexEventStartTime: [11, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MexEvent: [] },
      );
    l.MexEventWamEvent = s;
  },
  98,
);
