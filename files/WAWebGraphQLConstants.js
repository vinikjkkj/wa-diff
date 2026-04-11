__d(
  "WAWebGraphQLConstants",
  ["WALogger", "WAWebUserPrefsGeneral"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "https://graph.whatsapp.com/graphql/";
    function u() {
      return d("");
    }
    function c() {
      return d("catalog");
    }
    function d(e) {
      return "" + s + e;
    }
    var m = "https://graph.facebook.com/graphql";
    function p() {
      return m;
    }
    var _ = "WA|787118555984857|7bb1544a3599aa180ac9a3f7688ba243",
      f = "WA|368348580915920|f740dc6ab59f4466ba09052010768cc1";
    ((l.whatsappGraphqlEndpointWWW = u),
      (l.whatsappGraphqlEndpointCatalog = c),
      (l.generateFacebookGraphqlEndpoint = p),
      (l.WHATSAPP_GRAPHQL_CATALOG_ACCESS_TOKEN = _),
      (l.WHATSAPP_GRAPHQL_WWW_ACCESS_TOKEN = f));
  },
  98,
);
