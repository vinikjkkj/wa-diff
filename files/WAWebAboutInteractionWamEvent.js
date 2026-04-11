__d(
  "WAWebAboutInteractionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumAboutConsumptionSurfaceType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        AboutInteraction: [
          7084,
          {
            aboutConsumptionSurface: [
              1,
              o("WAWebWamEnumAboutConsumptionSurfaceType")
                .ABOUT_CONSUMPTION_SURFACE_TYPE,
            ],
            aboutLocale: [2, o("WAWebWamCodegenUtils").TYPES.STRING],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { AboutInteraction: [] },
    );
    l.AboutInteractionWamEvent = e;
  },
  98,
);
