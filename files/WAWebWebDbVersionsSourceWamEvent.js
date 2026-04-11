__d(
  "WAWebWebDbVersionsSourceWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebDbVersionSourceType",
    "WAWebWamEnumWebSchemaInitiatorType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebDbVersionsSource: [
          4784,
          {
            webDbVersionSource: [
              1,
              o("WAWebWamEnumWebDbVersionSourceType")
                .WEB_DB_VERSION_SOURCE_TYPE,
            ],
            webSchemaInitiator: [
              2,
              o("WAWebWamEnumWebSchemaInitiatorType").WEB_SCHEMA_INITIATOR_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebDbVersionsSource: [] },
    );
    l.WebDbVersionsSourceWamEvent = e;
  },
  98,
);
