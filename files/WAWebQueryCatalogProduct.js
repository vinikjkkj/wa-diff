__d(
  "WAWebQueryCatalogProduct",
  [
    "errorCode",
    "WALogger",
    "WANullthrows",
    "WAWebBackendErrors",
    "WAWebBizCatalogManagementFetchProduct",
    "WAWebBizGatingUtils",
    "WAWebBizParseProductGraphql",
    "WAWebCatalogEventLogger",
    "WAWebGraphQLServerError",
    "WAWebMaybeThrowCatalogErrors",
    "WAWebQueryCatalogProductQuery.graphql",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
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
              b = yield o("WAWebRelayClient").fetchQuery(
                e !== void 0
                  ? e
                  : (e = n("WAWebQueryCatalogProductQuery.graphql")),
                {
                  request: {
                    product: {
                      jid: l.toString(),
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
              v = r("WANullthrows")(
                b == null ||
                  (C = b.xwa_product_catalog_get_product) == null ||
                  (C = C.product_catalog) == null
                  ? void 0
                  : C.product,
              );
            return {
              data: o("WAWebBizParseProductGraphql").parseProductGraphQL(v),
              catalog_id: null,
              catalog_type: null,
            };
          } catch (e) {
            if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError) {
              var S,
                R = ((S = e.source) == null ? void 0 : S.errors) || [],
                L = R[0];
              if ((L == null ? void 0 : L.code) === 2498052)
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
          if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
            throw new (o("WAWebBackendErrors").E451)();
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          var r = t[0],
            a = t[1],
            i = t[2],
            l = t[3],
            s = t[4],
            u = s === void 0 ? !1 : s,
            d = t[5],
            m = d === void 0 ? null : d,
            p = t[6],
            _ = t[7],
            f = t[8],
            g = yield o("WAWebBizCatalogManagementFetchProduct").fetchProduct({
              product: {
                jid: r.toJid(),
                product_id: a,
                width: String(i),
                height: String(l),
                direct_connection_encrypted_info: m,
                fetch_compliance_info: String(u),
                variant_info_fields: p,
                variant_thumbnail_height: _ != null ? String(_) : null,
                variant_thumbnail_width: f != null ? String(f) : null,
              },
            });
          if (g.type === "success") return g.productResult;
          if (g.type === "graphql-error") {
            var h,
              y = (h = g.error.source) == null ? void 0 : h.errors,
              C = y[0];
            if ((C == null ? void 0 : C.code) === 2498052)
              return { error: "NOT_FOUND" };
            o(
              "WAWebMaybeThrowCatalogErrors",
            ).maybeThrowLocalErrorForCatalogQuery(g.error);
          } else if (g.type === "recovery-required") {
            if (o("WAWebBizGatingUtils").catalogTokenRecoveryEnabled())
              throw new (o(
                "WAWebBackendErrors",
              ).AdAccountRecoveryRequiredError)(g.emailMask);
          } else if (g.type === "incorrect-nonce") {
            if (o("WAWebBizGatingUtils").catalogTokenRecoveryEnabled())
              throw new (o("WAWebBackendErrors").CatalogIncorrectNonceError)();
          } else g.type;
          throw (
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "queryCatalogProductGraphQLByOwner: unhandled err ",
                  "",
                ])),
              JSON.stringify(g),
            ),
            new (o("WAWebBackendErrors").CatalogUnknownError)()
          );
        });
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      p = function () {
        for (
          var e = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
            t = arguments.length,
            n = new Array(t),
            r = 0;
          r < t;
          r++
        )
          n[r] = arguments[r];
        var a = n[0];
        return e != null && e.equals(a)
          ? m.apply(void 0, n)
          : d.apply(void 0, n);
      },
      _ = p;
    l.default = _;
  },
  98,
);
