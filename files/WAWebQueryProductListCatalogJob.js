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
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebProductMessageListConstant",
    "WAWebQueryProductListCatalogJobQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
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
      d = async function (t) {
        var e,
          n = t.catalogWid,
          a = t.directConnectionEncryptedInfo,
          i = t.height,
          l = t.productIds,
          s = t.width,
          u = (e = o("WAWap")).wap(
            "iq",
            {
              to: e.S_WHATSAPP_NET,
              type: "get",
              smax_id: e.SMAX_ID(
                r("WAWapDeprecatedSmaxID").CatalogGetProductList,
              ),
              xmlns: "w:biz:catalog",
              id: e.generateId(),
            },
            e.wap(
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
                    e.wap("width", null, s.toString()),
                    e.wap("height", null, i.toString()),
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
          d = await o("WADeprecatedSendIq").deprecatedSendIq(u, c);
        if (d.success) return d.result;
        throw new (o("WAWebBackendErrors").ServerStatusCodeError)(d.errorCode);
      },
      m = async function (a) {
        try {
          var t,
            i = a.catalogWid,
            l = a.directConnectionEncryptedInfo,
            u = a.height,
            c = a.productIds,
            m = a.width,
            p = await o("WAWebRelayClient").fetchQuery(
              e !== void 0
                ? e
                : (e = n("WAWebQueryProductListCatalogJobQuery.graphql")),
              {
                request: {
                  product_list: {
                    jid: i.toString(),
                    products: c.map(function (e) {
                      return { id: e };
                    }),
                    width: String(m),
                    height: String(u),
                    direct_connection_encrypted_info: l,
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
            p == null ||
              (t = p.xwa_product_catalog_get_product_list) == null ||
              (t = t.product_list) == null
              ? void 0
              : t.products.map(
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
            d(a)
          );
        }
      },
      p = async function (t) {
        var e = t.catalogWid,
          n = t.directConnectionEncryptedInfo,
          r = t.height,
          a = t.productIds,
          i = t.width,
          l = await o(
            "WAWebBizCatalogManagementFetchProductList",
          ).fetchProductList({
            product_list: {
              jid: e.toString(),
              products: a.map(function (e) {
                return { id: e };
              }),
              width: String(i),
              height: String(r),
              direct_connection_encrypted_info: n,
            },
          });
        return l.type === "success"
          ? l.productsResult
          : (l.type === "graphql-error"
              ? o(
                  "WAWebMaybeThrowCatalogErrors",
                ).maybeThrowLocalErrorForCatalogQuery(l.error)
              : l.type,
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "queryProductListGraphQLByOwner: unhandled error ",
                  "",
                ])),
              JSON.stringify(l),
            ),
            d(t));
      },
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
