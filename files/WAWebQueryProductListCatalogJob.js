__d(
  "WAWebQueryProductListCatalogJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
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
    "filterNulls",
    "nullthrows",
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
            i,
            l = a.catalogWid,
            u = a.directConnectionEncryptedInfo,
            c = a.height,
            m = a.productIds,
            p = a.width,
            _ = await o("WAWebRelayClient").fetchQuery(
              e !== void 0
                ? e
                : (e = n("WAWebQueryProductListCatalogJobQuery.graphql")),
              {
                request: {
                  product_list: {
                    jid:
                      (t = o(
                        "WAWebGetFormattedCatalogJid",
                      ).getFormattedCatalogJid(
                        o("WAWebWidFactory").createWid(l),
                      )) != null
                        ? t
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
          return r("nullthrows")(
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
            d(a)
          );
        }
      },
      p = async function (t) {
        var e,
          n = t.catalogWid,
          r = t.directConnectionEncryptedInfo,
          a = t.height,
          i = t.productIds,
          l = t.width,
          s = await o(
            "WAWebBizCatalogManagementFetchProductList",
          ).fetchProductList({
            product_list: {
              jid:
                (e = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                  o("WAWebWidFactory").createWid(n),
                )) != null
                  ? e
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
            d(t));
      },
      _ = function (t) {
        return o("WAWebUserPrefsMeUser").isMeAccount(
          o("WAWebWidFactory").createWid(t.catalogWid),
        )
          ? o("WAWebBizCatalogGatingUtils").graphQLForGetProductListEnabled()
            ? p(t)
            : d(t)
          : m(t);
      },
      f = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .finalStep("sendStanza", _)
        .end();
    ((l.queryProductListCatalog = _), (l.QueryProductListCatalog = f));
  },
  98,
);
