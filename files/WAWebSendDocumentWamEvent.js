__d(
  "WAWebSendDocumentWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumDocumentType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SendDocument: [
            2172,
            {
              documentExt: [3, e.TYPES.STRING],
              documentPageSize: [4, e.TYPES.INTEGER],
              documentSize: [1, e.TYPES.NUMBER],
              documentType: [2, o("WAWebWamEnumDocumentType").DOCUMENT_TYPE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SendDocument: [] },
      );
    l.SendDocumentWamEvent = s;
  },
  98,
);
