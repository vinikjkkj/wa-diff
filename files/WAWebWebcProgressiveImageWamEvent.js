__d(
  "WAWebWebcProgressiveImageWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcProgressiveImage: [
            2226,
            {
              webcFirstRenderScans: [1, e.TYPES.INTEGER],
              webcFirstRenderT: [2, e.TYPES.TIMER],
              webcFullQualityT: [4, e.TYPES.TIMER],
              webcMidQualityT: [3, e.TYPES.TIMER],
            },
            [1, 1, 10],
            "regular",
          ],
        },
        { WebcProgressiveImage: [] },
      );
    l.WebcProgressiveImageWamEvent = s;
  },
  98,
);
