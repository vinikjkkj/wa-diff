__d(
  "WAWebAboutConsumptionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumAboutConsumptionSurfaceType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        AboutConsumption: [
          6814,
          {
            aboutConsumptionSurface: [
              1,
              o("WAWebWamEnumAboutConsumptionSurfaceType")
                .ABOUT_CONSUMPTION_SURFACE_TYPE,
            ],
            dedupKey: [3, o("WAWebWamCodegenUtils").TYPES.INTEGER],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { AboutConsumption: [] },
    );
    l.AboutConsumptionWamEvent = e;
  },
  98,
);
