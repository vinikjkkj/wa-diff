__d(
  "WAWebWebDbVersionNonAnonymousWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumWebDbNameType"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebDbVersionNonAnonymous: [
          4816,
          {
            webDbName: [1, o("WAWebWamEnumWebDbNameType").WEB_DB_NAME_TYPE],
            webDbVersionNumber: [2, o("WAWebWamCodegenUtils").TYPES.INTEGER],
          },
          [1, 1, 20],
          "regular",
        ],
      },
      { WebDbVersionNonAnonymous: [] },
    );
    l.WebDbVersionNonAnonymousWamEvent = e;
  },
  98,
);
