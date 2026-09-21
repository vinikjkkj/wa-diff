__d(
  "WAWebGraphQLConstants",
  ["WALogger", "WAWebUserPrefsGeneral", "gkx"],
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
      if (r("gkx")("8292")) {
        var e;
        return (e = f()) != null ? e : p;
      }
      return p;
    }
    function f() {
      var t = o(
        "WAWebUserPrefsGeneral",
      ).getDebugFacebookGraphQLEndpointOverride();
      if (t == null) return null;
      if (!/^[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*$/.test(t))
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Ignoring invalid Facebook GraphQL sandbox override",
              ])),
          ),
          null
        );
      var n = /^\d+$/.test(t) ? t + ".od" : t;
      return (
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "Using overridden Facebook GraphQL sandbox: graph.",
              ".facebook.com",
            ])),
          n,
        ),
        "https://graph." + n + ".facebook.com/graphql"
      );
    }
    var g = "WA|787118555984857|7bb1544a3599aa180ac9a3f7688ba243",
      h = "WA|368348580915920|f740dc6ab59f4466ba09052010768cc1",
      y = 1675002;
    ((l.whatsappGraphqlEndpointWWW = c),
      (l.whatsappGraphqlEndpointCatalog = d),
      (l.generateFacebookGraphqlEndpoint = _),
      (l.WHATSAPP_GRAPHQL_CATALOG_ACCESS_TOKEN = g),
      (l.WHATSAPP_GRAPHQL_WWW_ACCESS_TOKEN = h),
      (l.WHATSAPP_GRAPHQL_UNAUTHORIZED_ERROR_CODE = y));
  },
  98,
);
