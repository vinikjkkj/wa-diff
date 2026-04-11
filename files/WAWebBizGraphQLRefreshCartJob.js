__d(
  "WAWebBizGraphQLRefreshCartJob",
  [
    "Promise",
    "WALogger",
    "WAWebBizGatingUtils",
    "WAWebBizGraphQLRefreshCartJobQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = { type: "error" },
      _ =
        e !== void 0
          ? e
          : (e = n("WAWebBizGraphQLRefreshCartJobQuery.graphql"));
    function f(e) {
      return o("WAWebBizGatingUtils").graphQLForRefreshCartEnabled()
        ? g(e).then(function (e) {
            return e.type === "success"
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "RefreshCart: success",
                    ])),
                ),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      'RefreshCart results: "',
                      '"',
                    ])),
                  JSON.stringify(e.cartResult),
                ),
                e)
              : (e.type,
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      'WAWebBizRefreshCart: failed as "',
                      '"',
                    ])),
                  e.type,
                ),
                e);
          })
        : (m || (m = n("Promise"))).resolve({ type: "not-enabled" });
    }
    function g(e) {
      return r("WAWebNetworkStatus")
        .waitIfOffline()
        .then(function () {
          return o("WAWebRelayClient").fetchQuery(
            _,
            { request: e },
            { environmentType: "whatsapp_catalog" },
          );
        })
        .then(function (e) {
          var t, n, r, o, a, i, l, s, u;
          if (e == null) return p;
          var c =
            (t = e.xwa_checkout_refresh_cart) == null || (t = t.cart) == null
              ? void 0
              : t.products;
          if (c == null) return p;
          var d = c.map(function (e) {
              var t,
                n,
                r,
                o,
                a = {
                  id: "",
                  currency: null,
                  price: null,
                  name: null,
                  variantProperties: void 0,
                };
              if (e.id == null) {
                var i = new Error("product id is null");
                throw (i.stack, i);
              }
              if (
                ((a.id = (t = e.id) != null ? t : ""),
                (a.name = e.name),
                (a.price = e.price),
                (a.currency = e.currency),
                (a.max_available = (n = e.max_available) != null ? n : 0),
                (a.status = (r = e.product_availability) != null ? r : ""),
                e.sale_price != null)
              ) {
                var l, s;
                a.sale_price = {
                  price: e.sale_price.price,
                  start_date: (l = e.sale_price.start_date) != null ? l : "",
                  end_date: (s = e.sale_price.end_date) != null ? s : "",
                };
              }
              var u = {};
              if (
                (e.media != null &&
                  e.media.images != null &&
                  (e.media.images[0].id != null &&
                    (u.id = e.media.images[0].id),
                  e.media.images[0].request_image_url != null &&
                    (u.request_image_url =
                      e.media.images[0].request_image_url)),
                (a.media = { image: u }),
                ((o = e.variant_info) == null
                  ? void 0
                  : o.variant_properties) != null)
              ) {
                var c,
                  d = [];
                ((c = e.variant_info) == null ||
                  c.variant_properties.forEach(function (e) {
                    var t = e.name,
                      n = e.value;
                    t != null && n != null && d.push({ name: t, value: n });
                  }),
                  (a.variantProperties = d));
              }
              return a;
            }),
            m = {
              price_details: {
                total:
                  (n = e.xwa_checkout_refresh_cart) == null ||
                  (n = n.cart) == null ||
                  (n = n.price_details) == null
                    ? void 0
                    : n.total_amount,
                subtotal:
                  (r = e.xwa_checkout_refresh_cart) == null ||
                  (r = r.cart) == null ||
                  (r = r.price_details) == null
                    ? void 0
                    : r.subtotal_amount,
                currency:
                  (o = e.xwa_checkout_refresh_cart) == null ||
                  (o = o.cart) == null ||
                  (o = o.price_details) == null
                    ? void 0
                    : o.currency,
                price_status:
                  (a = e.xwa_checkout_refresh_cart) == null ||
                  (a = a.cart) == null ||
                  (a = a.price_details) == null
                    ? void 0
                    : a.price_status,
              },
            },
            _ = {};
          if (((i = m.price_details) == null ? void 0 : i.subtotal) != null) {
            var f;
            _.subtotal = String(
              (f = m.price_details) == null ? void 0 : f.subtotal,
            );
          }
          if (((l = m.price_details) == null ? void 0 : l.currency) != null) {
            var g;
            _.currency = String(
              (g = m.price_details) == null ? void 0 : g.currency,
            );
          }
          if (((s = m.price_details) == null ? void 0 : s.total) != null) {
            var h;
            _.total = String((h = m.price_details) == null ? void 0 : h.total);
          }
          if (
            ((u = m.price_details) == null ? void 0 : u.price_status) != null
          ) {
            var y;
            _.price_status = String(
              (y = m.price_details) == null ? void 0 : y.price_status,
            );
          }
          var C = {
            price: {
              currency: _.currency,
              price_status: _.price_status,
              subtotal: _.subtotal,
              total: _.total,
            },
            products: d,
          };
          return { type: "success", cartResult: C };
        })
        .catch(function (e) {
          return (
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "WAWebBizRefreshCart: RefreshCartImpl failed",
                ])),
            ),
            e instanceof o("WAWebGraphQLServerError").GraphQLServerError
              ? { type: "graphql-error", error: e }
              : p
          );
        });
    }
    l.RefreshCart = f;
  },
  98,
);
