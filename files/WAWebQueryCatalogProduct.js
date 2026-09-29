__d(
  "WAWebQueryCatalogProduct",
  [
    "errorCode",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
    "WAWebBizCatalogManagementFetchProduct",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebGetFormattedCatalogJid",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebQueryCatalogProductQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          for (var t = arguments.length, a = new Array(t), i = 0; i < t; i++)
            a[i] = arguments[i];
          var l = a[0],
            s = a[1],
            c = a[2],
            d = a[3],
            m = a[4],
            p = m === void 0 ? !1 : m,
            _ = a[5],
            f = a[6],
            g = a[7];
          try {
            var h,
              y,
              C = yield o("WAWebRelayClient").fetchQuery(
                e !== void 0
                  ? e
                  : (e = n("WAWebQueryCatalogProductQuery.graphql")),
                {
                  request: {
                    product: {
                      jid:
                        (h = o(
                          "WAWebGetFormattedCatalogJid",
                        ).getFormattedCatalogJid(l)) != null
                          ? h
                          : l.toString(),
                      product_id: s,
                      width: String(c),
                      height: String(d),
                      fetch_compliance_info: String(p),
                      variant_info_fields: _,
                      variant_thumbnail_height: f != null ? String(f) : null,
                      variant_thumbnail_width: g != null ? String(g) : null,
                    },
                  },
                },
                {
                  eventLogger: o(
                    "WAWebCatalogEventLogger",
                  ).createCatalogEventLogger(
                    o("WAWebCatalogEventLogger").GRAPHQL_CATALOG_ENDPOINT
                      .GET_PRODUCT,
                  ),
                },
              ),
              b = r("nullthrows")(
                C == null ||
                  (y = C.xwa_product_catalog_get_product) == null ||
                  (y = y.product_catalog) == null
                  ? void 0
                  : y.product,
              );
            return {
              data: o("WAWebBizParseProductGraphql").parseProductGraphQL(b),
              catalog_id: null,
              catalog_type: null,
            };
          } catch (e) {
            if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
              var v,
                S = ((v = e.source) == null ? void 0 : v.errors) || [],
                R = S[0];
              if ((R == null ? void 0 : R.code) === 2498052)
                return { error: "NOT_FOUND" };
              o(
                "WAWebMaybeThrowCatalogErrors",
              ).maybeThrowLocalErrorForCatalogQuery(e);
            }
            throw (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "GraphQL: xwa_product_catalog_get_product fetch failed",
                  ])),
              ),
              new (o("WAWebBackendErrors").CatalogUnknownError)()
            );
          }
        });
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      m = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          if (
            o(
              "WAWebBizCatalogGatingUtils",
            ).commerceFeaturesDisabledBySanctions()
          )
            throw new (o("WAWebBackendErrors").E451)();
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          var a = n[0],
            i = n[1],
            l = n[2],
            s = n[3],
            u = n[4],
            d = u === void 0 ? !1 : u,
            m = n[5],
            p = n[6],
            _ = n[7],
            f = yield o("WAWebBizCatalogManagementFetchProduct").fetchProduct({
              product: {
                jid:
                  (e = o("WAWebGetFormattedCatalogJid").getFormattedCatalogJid(
                    a,
                  )) != null
                    ? e
                    : a.toJid(),
                product_id: i,
                width: String(l),
                height: String(s),
                fetch_compliance_info: String(d),
                variant_info_fields: m,
                variant_thumbnail_height: p != null ? String(p) : null,
                variant_thumbnail_width: _ != null ? String(_) : null,
              },
            });
          if (f.type === "success") return f.productResult;
          if (f.type === "graphql-error") {
            var g,
              h = (g = f.error.source) == null ? void 0 : g.errors,
              y = h[0];
            if ((y == null ? void 0 : y.code) === 2498052)
              return { error: "NOT_FOUND" };
            o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(f.error);
          } else {
            if (f.type === "recovery-required")
              throw new (o(
                "WAWebBackendErrors",
              ).AdAccountRecoveryRequiredError)(f.emailMask);
            if (f.type === "incorrect-nonce")
              throw new (o("WAWebBackendErrors").CatalogIncorrectNonceError)();
            f.type;
          }
          throw (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "queryCatalogProductGraphQLByOwner: unhandled err ",
                  "",
                ])),
              JSON.stringify(f),
            ),
            new (o("WAWebBackendErrors").CatalogUnknownError)()
          );
        });
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      p = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var r = t[0];
        return o("WAWebUserPrefsMeUser").isMeAccount(r)
          ? m.apply(void 0, t)
          : d.apply(void 0, t);
      },
      _ = p;
    l.default = _;
  },
  98,
);
