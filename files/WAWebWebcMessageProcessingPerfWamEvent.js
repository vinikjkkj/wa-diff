__d(
  "WAWebWebcMessageProcessingPerfWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcMessageProcessingPerf: [
            5790,
            {
              dbStoringT: [7, e.TYPES.INTEGER],
              decryptionT: [1, e.TYPES.INTEGER],
              isOffline: [2, e.TYPES.BOOLEAN],
              lidProcessingT: [8, e.TYPES.INTEGER],
              parsingT: [3, e.TYPES.INTEGER],
              postProcessingT: [4, e.TYPES.INTEGER],
              preProcessingT: [5, e.TYPES.INTEGER],
              processingT: [6, e.TYPES.INTEGER],
              reportTokenValidationT: [9, e.TYPES.INTEGER],
            },
            [1, 1, 100],
            "regular",
          ],
        },
        { WebcMessageProcessingPerf: [] },
      );
    l.WebcMessageProcessingPerfWamEvent = s;
  },
  98,
);
