__d(
  "WAWebBizCatalogManagementFetchSingleCollection",
  [
    "WALogger",
    "WAWebBizCatalogManagementFetchSingleCollectionQuery.graphql",
    "WAWebBizCatalogManagementParseProductGraphql",
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
              "WAWebBizCatalogManagementFetchSingleCollectionQuery.graphql",
            ));
    function p(e) {
      return _(e).then(function (e) {
        return e.type === "success"
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchSingleCollection: success",
                ])),
            ),
            e)
          : (e.type,
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  'fetchSingleCollection: failed as "',
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
      var n;
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebRelayClient").fetchQuery(
            m,
            { request: t },
            {
              environmentType: "facebook",
              accessToken: e,
              getInlineDataReader: function (t) {
                n = t;
              },
            },
          );
        })
        .then(function (e) {
          var t, r, a, i;
          if (e == null) return d;
          var l =
            (t = e.xfb_whatsapp_catalog_collection) == null
              ? void 0
              : t.collection;
          if (l == null) return d;
          var s =
              (r = e.xfb_whatsapp_catalog_collection) == null
                ? void 0
                : r.paging,
            u = (a = s == null ? void 0 : s.after) != null ? a : "",
            c = l.id,
            m = l.name,
            p = l.products,
            _ = l.status_info,
            f = _ == null ? void 0 : _.status,
            g =
              (i =
                f != null
                  ? o("WAWebProductTypes.flow").asProductReviewType(f)
                  : void 0) != null
                ? i
                : "APPROVED",
            h = p
              .map(function (e) {
                return n(
                  o("WAWebBizCatalogManagementParseProductGraphql")
                    .PARSE_PRODUCT_FRAGMENT,
                  e,
                );
              })
              .map(
                o("WAWebBizCatalogManagementParseProductGraphql")
                  .parseProductGraphQL,
              ),
            y = {
              id: c != null ? c : "",
              name: m != null ? m : "",
              rejectReason: _ == null ? void 0 : _.reject_reason,
              commerceUrl: _ == null ? void 0 : _.commerce_url,
              canAppeal: (_ == null ? void 0 : _.can_appeal) === "true",
              reviewStatus: g,
              totalItemsCount: 0,
              products: h,
              isHidden: !1,
            };
          return {
            type: "success",
            collectionsResult: {
              collections: [y],
              afterCursor: u,
              catalog_type: null,
            },
          };
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "fetchSingleCollectionWithToken: failed with error",
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
    l.fetchSingleCollection = p;
  },
  98,
);
