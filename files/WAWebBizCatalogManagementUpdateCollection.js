__d(
  "WAWebBizCatalogManagementUpdateCollection",
  [
    "WALogger",
    "WAWebBizCatalogManagementUpdateCollectionMutation.graphql",
    "WAWebFetchAdAccountToken",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebProductTypes.flow",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = { type: "error" },
      m =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizCatalogManagementUpdateCollectionMutation.graphql",
            ));
    function p(e) {
      return _(e).then(function (e) {
        return e.type === "success"
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "updateCollection: success",
                ])),
            ),
            e)
          : (e.type,
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  'updateCollection: failed as "',
                  '"',
                ])),
              e.type,
            ),
            e);
      });
    }
    function _(e) {
      return o("WAWebFetchAdAccountToken")
        .fetchToken()
        .then(function (t) {
          return t.type === "success"
            ? f(t.token, e).then(function (e) {
                return (
                  e.type !== "success" && e.type === "auth-failure"
                    ? o("WAWebFetchAdAccountToken").markTokenAsInvalid()
                    : e.type,
                  e
                );
              })
            : (t.type, t);
        });
    }
    function f(e, t) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebRelayClient").commitMutation(
            m,
            { input: t },
            { environmentType: "facebook", accessToken: e },
          );
        })
        .then(function (e) {
          if (e == null) return d;
          var t = e.xfb_whatsapp_catalog_update_collection;
          if (t == null) return d;
          var n = t.collection;
          if (n == null) return d;
          var r = n.id,
            a = n.status_info;
          if (r == null || a == null) return d;
          var i = a.status;
          if (i == null) return d;
          var l = o("WAWebProductTypes.flow").asProductReviewType(i);
          return l == null
            ? d
            : { type: "success", collectionResult: { id: r, reviewStatus: l } };
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "updateCollectionWithToken: failed with error",
                ])),
            ),
            o("WAWebFetchAdAccountToken").hasGraphQLAuthError(e)
              ? { type: "auth-failure" }
              : e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                ? { type: "graphql-error", error: e }
                : d
          );
        });
    }
    l.updateCollection = p;
  },
  98,
);
