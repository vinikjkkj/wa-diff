__d(
  "WAWebQueryProductListCatalogJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WANullthrows",
    "WAWap",
    "WAWapDeprecatedSmaxID",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementFetchProductList",
    "WAWebBizCatalogParseProduct",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebCommsWapMd",
    "WAWebDefinePersistedJob",
    "WAWebGetFormattedCatalogJid",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebProductMessageListConstant",
    "WAWebQueryProductListCatalogJobQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new (r("WADeprecatedWapParser"))("productListResponse", function (e) {
        (e.assertTag("iq"), e.assertFromServer());
        var t = e.child("product_list"),
          n = [];
        return (
          t.forEachChildWithTag("product", function (e) {
            var t = e.maybeChild("id");
            if (t) {
              var r = e.maybeChild("status");
              (r == null ? void 0 : r.contentString()) ===
              o("WAWebProductMessageListConstant").INVALID_PRODUCT_TOKEN
                ? n.push({
                    id: t.contentString(),
                    status: o("WAWebProductMessageListConstant")
                      .INVALID_PRODUCT_TOKEN,
                  })
                : n.push(o("WAWebBizCatalogParseProduct").parseProductNode(e));
            }
          }),
          n
        );
      }),
      d = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.catalogWid,
            a = e.directConnectionEncryptedInfo,
            i = e.height,
            l = e.productIds,
            s = e.width,
            u = (t = o("WAWap")).wap(
              "iq",
              {
                to: t.S_WHATSAPP_NET,
                type: "get",
                smax_id: t.SMAX_ID(
                  r("WAWapDeprecatedSmaxID").CatalogGetProductList,
                ),
                xmlns: "w:biz:catalog",
                id: t.generateId(),
              },
              t.wap(
                "product_list",
                {
                  jid: o("WAWebCommsWapMd").USER_JID(
                    o("WAWebWidFactory").createWid(n),
                  ),
                },
                l
                  .map(function (e) {
                    return o("WAWap").wap(
                      "product",
                      null,
                      o("WAWap").wap("id", null, e),
                    );
                  })
                  .concat(
                    r("filterNulls")([
                      t.wap("width", null, s.toString()),
                      t.wap("height", null, i.toString()),
                      a != null
                        ? o("WAWap").wap(
                            "direct_connection_encrypted_info",
                            null,
                            a,
                          )
                        : null,
                    ]),
                  ),
              ),
            ),
            d = yield o("WADeprecatedSendIq").deprecatedSendIq(u, c);
          if (d.success) return d.result;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            d.errorCode,
          );
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      m = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var a,
              i,
              l = t.catalogWid,
              u = t.directConnectionEncryptedInfo,
              c = t.height,
              m = t.productIds,
              p = t.width,
              _ = yield o("WAWebRelayClient").fetchQuery(
                e !== void 0
                  ? e
                  : (e = n("WAWebQueryProductListCatalogJobQuery.graphql")),
                {
                  request: {
                    product_list: {
                      jid:
                        (a = o(
                          "WAWebGetFormattedCatalogJid",
                        ).getFormattedCatalogJid(
                          o("WAWebWidFactory").createWid(l),
                        )) != null
                          ? a
                          : l.toString(),
                      products: m.map(function (e) {
                        return { id: e };
                      }),
                      width: String(p),
                      height: String(c),
                      direct_connection_encrypted_info: u,
                    },
                  },
                },
                {
                  eventLogger: o(
                    "WAWebCatalogEventLogger",
                  ).createCatalogEventLogger(
                    o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT
                      .GET_PRODUCT_LIST,
                  ),
                },
              );
            return r("WANullthrows")(
              _ == null ||
                (i = _.xwa_product_catalog_get_product_list) == null ||
                (i = i.product_list) == null
                ? void 0
                : i.products.map(
                    o("WAWebBizParseProductGraphql").parseProductGraphQL,
                  ),
            );
          } catch (e) {
            return (
              e instanceof o("WAWebGraphQLServerError").GraphQLServerError &&
                o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(e),
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "xwa_product_catalog_get_product_list failed, IQ fallback",
                  ])),
              ),
              d(t)
            );
          }
        });
        return function (n) {
          return t.apply(this, arguments);
        };
      })(),
      p = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.catalogWid,
            r = e.directConnectionEncryptedInfo,
            a = e.height,
            i = e.productIds,
            l = e.width,
            s = yield o(
              "WAWebBizCatalogManagementFetchProductList",
            ).fetchProductList({
              product_list: {
                jid:
                  (t = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                    o("WAWebWidFactory").createWid(n),
                  )) != null
                    ? t
                    : n.toString(),
                products: i.map(function (e) {
                  return { id: e };
                }),
                width: String(l),
                height: String(a),
                direct_connection_encrypted_info: r,
              },
            });
          return s.type === "success"
            ? s.productsResult
            : (s.type === "graphql-error"
                ? o(
                    "WAWebMaybeThrowCatalogErrors",
                  ).maybeThrowLocalErrorForCatalogQuery(s.error)
                : s.type,
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "queryProductListGraphQLByOwner: unhandled error ",
                    "",
                  ])),
                JSON.stringify(s),
              ),
              d(e));
        });
        return function (n) {
          return e.apply(this, arguments);
        };
      })(),
      _ = function (t) {
        var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser();
        return e != null &&
          e.equals(o("WAWebWidFactory").createWid(t.catalogWid))
          ? o("WAWebBizCatalogGatingUtils").graphQLForGetProductListEnabled()
            ? p(t)
            : d(t)
          : m(t);
      },
      f = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep("sendStanza", _)
        .end();
    l.QueryProductListCatalog = f;
  },
  98,
);
