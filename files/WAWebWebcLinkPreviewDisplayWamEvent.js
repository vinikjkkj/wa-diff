__d(
  "WAWebWebcLinkPreviewDisplayWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumWebcDisplayStatusType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcLinkPreviewDisplay: [
            3864,
            {
              didFallbackNonHq: [2, e.TYPES.BOOLEAN],
              didRequestHq: [3, e.TYPES.BOOLEAN],
              didRespondHqPreview: [4, e.TYPES.BOOLEAN],
              webcDisplayStatus: [
                1,
                o("WAWebWamEnumWebcDisplayStatusType").WEBC_DISPLAY_STATUS_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcLinkPreviewDisplay: [] },
      );
    l.WebcLinkPreviewDisplayWamEvent = s;
  },
  98,
);
