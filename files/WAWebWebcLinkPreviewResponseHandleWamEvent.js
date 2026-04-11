__d(
  "WAWebWebcLinkPreviewResponseHandleWamEvent",
  ["WAWebWamCodegenUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcLinkPreviewResponseHandle: [
            3860,
            {
              didRespondHqPreview: [5, e.TYPES.BOOLEAN],
              isPreviewSuccess: [2, e.TYPES.BOOLEAN],
              previewDurationMs: [4, e.TYPES.INTEGER],
              previewSessionId: [3, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcLinkPreviewResponseHandle: [] },
      );
    l.WebcLinkPreviewResponseHandleWamEvent = s;
  },
  98,
);
