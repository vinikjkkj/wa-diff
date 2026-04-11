__d(
  "WAWebPsIdUpdateWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumPsIdAction"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PsIdUpdate: [
            2862,
            {
              isFromWamsys: [4, e.TYPES.BOOLEAN],
              psIdAction: [2, o("WAWebWamEnumPsIdAction").PS_ID_ACTION],
              psIdKey: [1, e.TYPES.INTEGER],
              psIdRotationFrequence: [3, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PsIdUpdate: [] },
      );
    l.PsIdUpdateWamEvent = s;
  },
  98,
);
