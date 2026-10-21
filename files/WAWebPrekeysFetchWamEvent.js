__d(
  "WAWebPrekeysFetchWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumEncryptionTypeCode",
    "WAWebWamEnumPrekeysFetchContext",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PrekeysFetch: [
            2540,
            {
              dedupKey: [7, e.TYPES.INTEGER],
              encryptionType: [
                4,
                o("WAWebWamEnumEncryptionTypeCode").ENCRYPTION_TYPE_CODE,
              ],
              onIdentityChange: [1, e.TYPES.BOOLEAN],
              pqPrekeyFetchCounts: [5, e.TYPES.INTEGER],
              prekeysFetchContext: [
                3,
                o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT,
              ],
              prekeysFetchCount: [2, e.TYPES.INTEGER],
              prekeysFetchHostedDeviceCount: [6, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PrekeysFetch: [] },
      );
    l.PrekeysFetchWamEvent = s;
  },
  98,
);
