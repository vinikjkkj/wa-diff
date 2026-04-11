__d(
  "WAWebMexEventV2WamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MexEventV2: [
            4336,
            {
              mexEventV2DurationMs: [1, e.TYPES.TIMER],
              mexEventV2EndTime: [2, e.TYPES.INTEGER],
              mexEventV2ErrorCodes: [3, e.TYPES.STRING],
              mexEventV2Errors: [4, e.TYPES.STRING],
              mexEventV2ExperimentFlag: [12, e.TYPES.INTEGER],
              mexEventV2HasData: [5, e.TYPES.BOOLEAN],
              mexEventV2IsArgoPayload: [10, e.TYPES.BOOLEAN],
              mexEventV2IsMex: [6, e.TYPES.BOOLEAN],
              mexEventV2OperationName: [7, e.TYPES.STRING],
              mexEventV2QueryId: [8, e.TYPES.STRING],
              mexEventV2StartTime: [9, e.TYPES.INTEGER],
              mexFbUserType: [11, e.TYPES.STRING],
              traceIdInt: [13, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MexEventV2: [] },
      );
    l.MexEventV2WamEvent = s;
  },
  98,
);
