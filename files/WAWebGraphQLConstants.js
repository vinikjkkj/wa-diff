__d(
  "WAWebGraphQLConstants",
  ["WALogger", "WAWebUserPrefsGeneral"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "https://graph.whatsapp.com/graphql/";
    function c() {
      return m("");
    }
    function d() {
      return m("catalog");
    }
    function m(e) {
      return "" + u + e;
    }
    var p = "https://graph.facebook.com/graphql";
    function _() {
      return p;
    }
    var f = "WA|787118555984857|7bb1544a3599aa180ac9a3f7688ba243",
      g = "WA|368348580915920|f740dc6ab59f4466ba09052010768cc1",
      h = 1675002;
    ((l.whatsappGraphqlEndpointWWW = c),
      (l.whatsappGraphqlEndpointCatalog = d),
      (l.generateFacebookGraphqlEndpoint = _),
      (l.WHATSAPP_GRAPHQL_CATALOG_ACCESS_TOKEN = f),
      (l.WHATSAPP_GRAPHQL_WWW_ACCESS_TOKEN = g),
      (l.WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE = h));
  },
  98,
);
