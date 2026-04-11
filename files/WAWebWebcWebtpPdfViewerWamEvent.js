__d(
  "WAWebWebcWebtpPdfViewerWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebtpEventType",
    "WAWebWamEnumWebtpSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcWebtpPdfViewer: [
            7506,
            {
              webtpErrorCode: [1, e.TYPES.STRING],
              webtpErrorMessage: [2, e.TYPES.STRING],
              webtpErrorStack: [3, e.TYPES.STRING],
              webtpErrorType: [4, e.TYPES.STRING],
              webtpEvent: [5, o("WAWebWamEnumWebtpEventType").WEBTP_EVENT_TYPE],
              webtpFileSize: [6, e.TYPES.NUMBER],
              webtpSdkVersion: [7, e.TYPES.STRING],
              webtpSessionId: [8, e.TYPES.STRING],
              webtpSource: [
                9,
                o("WAWebWamEnumWebtpSourceType").WEBTP_SOURCE_TYPE,
              ],
              webtpTelemetryData: [10, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcWebtpPdfViewer: [] },
      );
    l.WebcWebtpPdfViewerWamEvent = s;
  },
  98,
);
