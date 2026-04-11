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
