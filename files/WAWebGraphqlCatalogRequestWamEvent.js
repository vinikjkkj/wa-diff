__d(
  "WAWebGraphqlCatalogRequestWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBusinessType",
    "WAWebWamEnumGraphqlCatalogEndpoint",
    "WAWebWamEnumGraphqlRequestResult",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GraphqlCatalogRequest: [
          3206,
          {
            businessJid: [4, o("WAWebWamCodegenUtils").TYPES.STRING],
            businessType: [5, o("WAWebWamEnumBusinessType").BUSINESS_TYPE],
            graphqlCatalogEndpoint: [
              1,
              o("WAWebWamEnumGraphqlCatalogEndpoint").GRAPHQL_CATALOG_ENDPOINT,
            ],
            graphqlErrorCode: [3, o("WAWebWamCodegenUtils").TYPES.INTEGER],
            graphqlRequestResult: [
              2,
              o("WAWebWamEnumGraphqlRequestResult").GRAPHQL_REQUEST_RESULT,
            ],
          },
          [1, 1, 1],
          "private",
          0,
        ],
      },
      { GraphqlCatalogRequest: [] },
    );
    l.GraphqlCatalogRequestWamEvent = e;
  },
  98,
);
