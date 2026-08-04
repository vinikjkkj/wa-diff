__d(
  "WAWebPathfinderFrameworkHealthWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumPathfinderHealthEventType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        PathfinderFrameworkHealth: [
          7688,
          {
            pathfinderHealthEventData: [
              1,
              o("WAWebWamCodegenUtils").TYPES.STRING,
            ],
            pathfinderHealthEventType: [
              2,
              o("WAWebWamEnumPathfinderHealthEventType")
                .PATHFINDER_HEALTH_EVENT_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { PathfinderFrameworkHealth: [] },
    );
    l.PathfinderFrameworkHealthWamEvent = e;
  },
  98,
);
