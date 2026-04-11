__d(
  "WAWebBizRefreshCartJob",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWapDeprecatedSmaxID",
    "WAWebBackendErrors",
    "WAWebBizCartConstants",
    "WAWebBizGatingUtils",
    "WAWebBizGraphQLRefreshCartJob",
    "WAWebCommsWapMd",
    "WAWebLidMigrationUtils",
    "asyncToGeneratorRuntime",
    "err",
    "filterNulls",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (r("WADeprecatedWapParser"))("refreshCartResponse", function (e) {
        (e.assertTag("iq"), e.assertFromServer());
        var t = e.child("cart"),
          n = t.maybeChild("price"),
          r = {},
          a = n == null ? void 0 : n.maybeChild("subtotal");
        a && (r.subtotal = a.contentString());
        var i = n == null ? void 0 : n.maybeChild("total");
        i && (r.total = i.contentString());
        var l = n == null ? void 0 : n.maybeChild("currency");
        l && (r.currency = l.contentString());
        var s = n == null ? void 0 : n.maybeChild("price_status");
        s && (r.price_status = s.contentString());
        var u = [];
        return (
          t.forEachChildWithTag("product", function (e) {
            var t,
              n = e.child("id"),
              r = n.contentString(),
              a = e.maybeChild("name"),
              i = a ? a.contentString() : null,
              l = e.maybeChild("max_available"),
              s =
                (t = l == null ? void 0 : l.contentString()) != null
                  ? t
                  : o("WAWebBizCartConstants").CART_ITEM_MAX_QUANTITY,
              c = e.maybeChild("price"),
              d = c ? c.contentString() : null,
              m = e.maybeChild("currency"),
              p = m ? m.contentString() : null,
              _,
              f = e.maybeChild("media"),
              g = f ? f.maybeChild("image") : null;
            if (g != null) {
              _ = { image: {} };
              var h = g.maybeChild("id");
              h && h.hasContent() && (_.image.id = h.contentString());
              var y = g.maybeChild("request_image_url");
              y &&
                y.hasContent() &&
                (_.image.request_image_url = y.contentString());
            }
            var C = {
                id: r,
                name: i,
                price: d,
                currency: p,
                media: _,
                max_available: Number(s),
              },
              b = e.maybeChild("sale_price");
            if (b) {
              var v, S;
              C.sale_price = {
                price: b.child("price").contentString(),
                start_date:
                  (v = b.maybeChild("start_date")) == null
                    ? void 0
                    : v.contentString(),
                end_date:
                  (S = b.maybeChild("end_date")) == null
                    ? void 0
                    : S.contentString(),
              };
            }
            var R = e.maybeChild("status");
            (R && (C.status = R.contentString()), u.push(C));
          }),
          { price: r, products: u }
        );
      }),
      c = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            if (o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions())
              return (s || (s = n("Promise"))).reject(
                new (o("WAWebBackendErrors").E451)(),
              );
            var c = o("WAWap").wap(
                "iq",
                {
                  to: o("WAWap").S_WHATSAPP_NET,
                  smax_id: o("WAWap").SMAX_ID(
                    r("WAWapDeprecatedSmaxID").RefreshCart,
                  ),
                  xmlns: "fb:thrift_iq",
                  id: o("WAWap").generateId(),
                  type: "get",
                },
                o("WAWap").wap(
                  "cart",
                  {
                    op: o("WAWap").CUSTOM_STRING("refresh"),
                    biz_jid: o("WAWebCommsWapMd").USER_JID(e),
                  },
                  t
                    .map(function (e) {
                      return o("WAWap").wap(
                        "product",
                        null,
                        o("WAWap").wap("id", null, e),
                      );
                    })
                    .concat(
                      r("filterNulls")([
                        o("WAWap").wap(
                          "image_dimensions",
                          null,
                          o("WAWap").wap("width", null, a.toString()),
                          o("WAWap").wap("height", null, i.toString()),
                        ),
                        l != null
                          ? o("WAWap").wap(
                              "direct_connection_encrypted_info",
                              null,
                              l,
                            )
                          : null,
                      ]),
                    ),
                ),
              ),
              d = yield o("WADeprecatedSendIq").deprecatedSendIq(c, u);
            if (d.success) return d.result;
            throw d.errorCode === 451
              ? new (o("WAWebBackendErrors").E451)()
              : new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  d.errorCode,
                );
          },
        );
        return function (n, r, o, a, i) {
          return e.apply(this, arguments);
        };
      })(),
      d = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l) {
            var s = yield o("WAWebBizGraphQLRefreshCartJob").RefreshCart({
              cart: {
                jid: t.toString(),
                products: n.map(function (e) {
                  return { id: e };
                }),
                image_dimensions: { width: a, height: i },
                direct_connection_encrypted_info: l,
                variant_info_fields: "variant_properties",
              },
            });
            if (s.type === "success") return s.cartResult;
            throw (
              s.type,
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebBizRefreshCart: error handling flow, Error Type ",
                    "",
                  ])),
                JSON.stringify(s.type),
              ),
              r("err")(
                "refreshCartGraphQL: error handling flow, Error Type " +
                  JSON.stringify(s.type),
              )
            );
          },
        );
        return function (n, r, o, a, i) {
          return t.apply(this, arguments);
        };
      })(),
      m = function (t, n, r, a, i) {
        var e,
          l = (e = o("WAWebLidMigrationUtils").toPn(t)) != null ? e : t;
        return o("WAWebBizGatingUtils").graphQLForRefreshCartEnabled()
          ? d(l, n, r, a, i)
          : c(l, n, r, a, i);
      };
    ((l.refreshCartResponse = u), (l.refreshCart = m));
  },
  98,
);
