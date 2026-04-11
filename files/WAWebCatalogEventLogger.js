__d(
  "WAWebCatalogEventLogger",
  [
    "WAWebGraphqlCatalogRequestWamEvent",
    "WAWebWamEnumGraphqlCatalogEndpoint",
    "WAWebWamEnumGraphqlRequestResult",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function (t) {
      var e = new (o(
        "WAWebGraphqlCatalogRequestWamEvent",
      ).GraphqlCatalogRequestWamEvent)({ graphqlCatalogEndpoint: t });
      return {
        success: function () {
          (e.set({
            graphqlErrorCode: -1,
            graphqlRequestResult: o("WAWebWamEnumGraphqlRequestResult")
              .GRAPHQL_REQUEST_RESULT.SUCCESS,
          }),
            e.commit());
        },
        failure: function (n) {
          var t = n[0];
          (e.set({
            graphqlErrorCode: t.code,
            graphqlRequestResult: o("WAWebWamEnumGraphqlRequestResult")
              .GRAPHQL_REQUEST_RESULT.FAILURE,
          }),
            e.commit());
        },
      };
    };
    ((l.GRAPHQL_CATALOG_ENDPOINT = o(
      "WAWebWamEnumGraphqlCatalogEndpoint",
    ).GRAPHQL_CATALOG_ENDPOINT),
      (l.createCatalogEventLogger = e));
  },
  98,
);
