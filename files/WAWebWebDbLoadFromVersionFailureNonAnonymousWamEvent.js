__d(
  "WAWebWebDbLoadFromVersionFailureNonAnonymousWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebDbLoaderType",
    "WAWebWamEnumWebDbNameType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebDbLoadFromVersionFailureNonAnonymous: [
          4814,
          {
            dedupKey: [3, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            webDbLoader: [
              1,
              o("WAWebWamEnumWebDbLoaderType").WEB_DB_LOADER_TYPE,
            ],
            webDbName: [2, o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebDbLoadFromVersionFailureNonAnonymous: [] },
    );
    l.WebDbLoadFromVersionFailureNonAnonymousWamEvent = e;
  },
  98,
);
