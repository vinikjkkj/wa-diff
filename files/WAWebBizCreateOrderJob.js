__d(
  "WAWebBizCreateOrderJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WAWap",
    "WAWapDeprecatedSmaxID",
    "WAWebBackendErrors",
    "WAWebBizCreateOrderJobMutation.graphql",
    "WAWebBizGatingUtils",
    "WAWebCommsWapMd",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (r("WADeprecatedWapParser"))("createOrderResponse", function (e) {
        (e.assertTag("iq"), e.assertFromServer());
        var t = e.child("order"),
          n = t.attrString("id"),
          r = t.attrString("token"),
          o = t.maybeChild("price"),
          a = {},
          i = o == null ? void 0 : o.maybeChild("subtotal");
        i && (a.subtotal = i.contentString());
        var l = o == null ? void 0 : o.maybeChild("total");
        l && (a.total = l.contentString());
        var s = o == null ? void 0 : o.maybeChild("currency");
        s && (a.currency = s.contentString());
        var u = o == null ? void 0 : o.maybeChild("price_status");
        return (
          u && (a.price_status = u.contentString()),
          { id: n, token: r, price: a }
        );
      });
    function u(e) {
      var t,
        n =
          e.priceAmount1000 != null
            ? o("WAWap").wap("price", null, e.priceAmount1000.toString())
            : void 0,
        r = e.currency ? o("WAWap").wap("currency", null, e.currency) : void 0,
        a = e.variantProperties
          ? o("WAWap").wap(
              "variant_info",
              null,
              o("WAWap").wap(
                "properties",
                null,
                (t = e.variantProperties) == null
                  ? void 0
                  : t.map(function (e) {
                      var t = e.name,
                        n = e.value;
                      return o("WAWap").wap("property", {
                        name: o("WAWap").MAYBE_CUSTOM_STRING(
                          t != null ? t : "",
                        ),
                        value: o("WAWap").MAYBE_CUSTOM_STRING(
                          n != null ? n : "",
                        ),
                      });
                    }),
              ),
            )
          : void 0;
      return o("WAWap").wap(
        "product",
        null,
        o("WAWap").wap("id", null, e.id),
        o("WAWap").wap("name", null, e.name),
        n,
        r,
        o("WAWap").wap("quantity", null, e.quantity.toString()),
        a,
      );
    }
    var c =
      e !== void 0 ? e : (e = n("WAWebBizCreateOrderJobMutation.graphql"));
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = null);
          var a = t.map(function (e) {
              var t = { id: e.id, name: e.name, quantity: e.quantity };
              return (
                e.currency != null && (t.currency = e.currency),
                e.priceAmount1000 != null &&
                  (t.price = String(e.priceAmount1000)),
                e.variantProperties != null &&
                  e.variantProperties.length > 0 &&
                  (t.variant_info = {
                    properties: {
                      properties: e.variantProperties.map(function (e) {
                        var t = e.name,
                          n = e.value;
                        return {
                          nameAttr: t != null ? t : "",
                          valueAttr: n != null ? n : "",
                        };
                      }),
                    },
                  }),
                t
              );
            }),
            i = { order: { jid: e.toJid(), products: a } };
          return (
            n != null && (i.order.direct_connection_encrypted_info = n),
            r("WAWebNetworkStatus")
              .waitIfOffline()
              .then(function () {
                return o("WAWebRelayClient").commitMutation(
                  c,
                  { input: i },
                  { environmentType: "whatsapp_catalog" },
                );
              })
              .then(function (e) {
                var t,
                  n,
                  r,
                  a,
                  i,
                  l,
                  s,
                  u =
                    e == null || (t = e.xwa_checkout_place_order) == null
                      ? void 0
                      : t.order;
                if (u == null || u.order_id == null)
                  throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                    500,
                  );
                var c = {};
                return (
                  ((n = u.price) == null ? void 0 : n.subtotal_amount) !=
                    null && (c.subtotal = String(u.price.subtotal_amount)),
                  ((r = u.price) == null ? void 0 : r.total_amount) != null &&
                    (c.total = String(u.price.total_amount)),
                  ((a = u.price) == null ? void 0 : a.currency) != null &&
                    (c.currency = u.price.currency),
                  ((i = u.price) == null ? void 0 : i.price_status) != null &&
                    (c.price_status = u.price.price_status),
                  {
                    id: (l = u.order_id) != null ? l : "",
                    token: (s = u.token) != null ? s : "",
                    price: c,
                  }
                );
              })
              .catch(function (e) {
                throw e instanceof
                  o("WAWebGraphQLServerError").GraphQLServerError
                  ? new (o("WAWebBackendErrors").ServerStatusCodeError)(500)
                  : e;
              })
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            (n === void 0 && (n = null),
            o("WAWebBizGatingUtils").graphQLForPlaceOrderEnabled())
          )
            return d(e, t, n);
          var a = o("WAWap").wap(
              "iq",
              {
                to: o("WAWap").S_WHATSAPP_NET,
                smax_id: o("WAWap").SMAX_ID(
                  r("WAWapDeprecatedSmaxID").CreateOrder,
                ),
                xmlns: "fb:thrift_iq",
                id: o("WAWap").generateId(),
                type: "set",
              },
              o("WAWap").wap(
                "order",
                {
                  op: o("WAWap").CUSTOM_STRING("create"),
                  biz_jid: o("WAWebCommsWapMd").USER_JID(e),
                },
                t
                  .map(function (e) {
                    return u(e);
                  })
                  .concat(
                    n != null
                      ? o("WAWap").wap(
                          "direct_connection_encrypted_info",
                          null,
                          n,
                        )
                      : [],
                  ),
              ),
            ),
            i = yield o("WADeprecatedSendIq").deprecatedSendIq(a, s);
          if (i.success) return i.result;
          throw i.errorCode === 451
            ? new (o("WAWebBackendErrors").E451)()
            : new (o("WAWebBackendErrors").ServerStatusCodeError)(i.errorCode);
        })),
        _.apply(this, arguments)
      );
    }
    ((l.createOrderResponse = s), (l.createOrderMD = p));
  },
  98,
);
