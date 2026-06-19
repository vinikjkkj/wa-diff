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
            f = _ === void 0 ? null : _,
            g = a[6],
            h = a[7],
            y = a[8];
          try {
            var C,
              b,
              v = yield o("WAWebRelayClient").fetchQuery(
                e !== void 0
                  ? e
                  : (e = n("WAWebQueryCatalogProductQuery.graphql")),
                {
                  request: {
                    product: {
                      jid:
                        (C = o(
                          "WAWebGetFormattedCatalogJid",
                        ).getFormattedCatalogJid(l)) != null
                          ? C
                          : l.toString(),
                      product_id: s,
                      width: String(c),
                      height: String(d),
                      fetch_compliance_info: String(p),
                      direct_connection_encrypted_info: f,
                      variant_info_fields: g,
                      variant_thumbnail_height: h != null ? String(h) : null,
                      variant_thumbnail_width: y != null ? String(y) : null,
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
              S = r("nullthrows")(
                v == null ||
                  (b = v.xwa_product_catalog_get_product) == null ||
                  (b = b.product_catalog) == null
                  ? void 0
                  : b.product,
              );
            return {
              data: o("WAWebBizParseProductGraphql").parseProductGraphQL(S),
              catalog_id: null,
              catalog_type: null,
            };
          } catch (e) {
            if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
              var R,
                L = ((R = e.source) == null ? void 0 : R.errors) || [],
                E = L[0];
              if ((E == null ? void 0 : E.code) === 2498052)
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
            p = m === void 0 ? null : m,
            _ = n[6],
            f = n[7],
            g = n[8],
            h = yield o("WAWebBizCatalogManagementFetchProduct").fetchProduct({
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
                direct_connection_encrypted_info: p,
                fetch_compliance_info: String(d),
                variant_info_fields: _,
                variant_thumbnail_height: f != null ? String(f) : null,
                variant_thumbnail_width: g != null ? String(g) : null,
              },
            });
          if (h.type === "success") return h.productResult;
          if (h.type === "graphql-error") {
            var y,
              C = (y = h.error.source) == null ? void 0 : y.errors,
              b = C[0];
            if ((b == null ? void 0 : b.code) === 2498052)
              return { error: "NOT_FOUND" };
            o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(h.error);
          } else {
            if (h.type === "recovery-required")
              throw new (o(
                "WAWebBackendErrors",
              ).AdAccountRecoveryRequiredError)(h.emailMask);
            if (h.type === "incorrect-nonce")
              throw new (o("WAWebBackendErrors").CatalogIncorrectNonceError)();
            h.type;
          }
          throw (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "queryCatalogProductGraphQLByOwner: unhandled err ",
                  "",
                ])),
              JSON.stringify(h),
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
