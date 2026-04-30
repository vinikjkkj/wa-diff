__d(
  "WAWebCatalogEventLogger",
  [
    "WAWebGraphqlCatalogRequestWamEvent",
    "WAWebWamEnumGraphqlCatalogEndpoint",
    "WAWebWamEnumGraphqlRequestResult",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = new (o(
        "WAWebGraphqlCatalogRequestWamEvent",
      ).GraphqlCatalogRequestWamEvent)({ graphqlCatalogEndpoint: e });
      return {
        success: function () {
          (t.set({
            graphqlErrorCode: -1,
            graphqlRequestResult: o("WAWebWamEnumGraphqlRequestResult")
              .GRAPHQL_REQUEST_RESULT.SUCCESS,
          }),
            t.commit());
        },
        failure: function (n) {
          var e = n[0];
          (t.set({
            graphqlErrorCode: e.code,
            graphqlRequestResult: o("WAWebWamEnumGraphqlRequestResult")
              .GRAPHQL_REQUEST_RESULT.FAILURE,
          }),
            t.commit());
        },
      };
    }
    ((l.GRAPHQL_CATALOG_ENDPOINT = o(
      "WAWebWamEnumGraphqlCatalogEndpoint",
    ).GRAPHQL_CATALOG_ENDPOINT),
      (l.createCatalogEventLogger = e));
  },
  98,
);
