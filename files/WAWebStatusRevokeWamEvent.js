__d(
  "WAWebStatusRevokeWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumMediaType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StatusRevoke: [
            1250,
            {
              mediaType: [2, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              statusId: [4, e.TYPES.STRING],
              statusLifeT: [3, e.TYPES.INTEGER],
              statusSessionId: [1, e.TYPES.INTEGER],
              unifiedSessionId: [5, e.TYPES.STRING],
              updatesTabSessionId: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { StatusRevoke: [] },
      );
    l.StatusRevokeWamEvent = s;
  },
  98,
);
