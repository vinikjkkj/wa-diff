__d(
  "WAWebWebcMediaErrorUnknownDetailsWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumWebcMediaOperationCode"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebcMediaErrorUnknownDetails: [
            2352,
            {
              mediaId: [1, e.TYPES.INTEGER],
              webcMediaErrorMessage: [4, e.TYPES.STRING],
              webcMediaErrorName: [3, e.TYPES.STRING],
              webcMediaOperation: [
                2,
                o("WAWebWamEnumWebcMediaOperationCode")
                  .WEBC_MEDIA_OPERATION_CODE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebcMediaErrorUnknownDetails: [] },
      );
    l.WebcMediaErrorUnknownDetailsWamEvent = s;
  },
  98,
);
