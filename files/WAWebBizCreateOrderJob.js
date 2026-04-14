__d(
  "WAWebBizCreateOrderJob",
  [
    "WAWebBackendErrors",
    "WAWebBizCreateOrderJobMutation.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e !== void 0 ? e : (e = n("WAWebBizCreateOrderJobMutation.graphql"));
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                  s,
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
        c.apply(this, arguments)
      );
    }
    l.createOrderMD = u;
  },
  98,
);
