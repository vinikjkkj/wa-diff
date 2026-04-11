__d(
  "WAWebWebcMediaAnalyzedWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcMediaAnalyzed: [
            912,
            {
              webcMediaAnalyzeT: [3, e.TYPES.TIMER],
              webcMediaExtensions: [2, e.TYPES.STRING],
              webcMediaSupported: [1, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcMediaAnalyzed: [] },
      );
    l.WebcMediaAnalyzedWamEvent = s;
  },
  98,
);
