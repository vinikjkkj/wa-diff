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
    "err",
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
          var t, n, o, a, i, l, s, u, c;
          if (e == null) return p;
          var d =
            (t = e.xwa_checkout_refresh_cart) == null || (t = t.cart) == null
              ? void 0
              : t.products;
          if (d == null) return p;
          var m = d.map(function (e) {
              var t,
                n,
                o,
                a,
                i = {
                  id: "",
                  currency: null,
                  price: null,
                  name: null,
                  variantProperties: void 0,
                };
              if (e.id == null) throw r("err")("product id is null");
              if (
                ((i.id = (t = e.id) != null ? t : ""),
                (i.name = e.name),
                (i.price = e.price),
                (i.currency = e.currency),
                (i.max_available = (n = e.max_available) != null ? n : 0),
                (i.status = (o = e.product_availability) != null ? o : ""),
                e.sale_price != null)
              ) {
                var l, s;
                i.sale_price = {
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
                (i.media = { image: u }),
                ((a = e.variant_info) == null
                  ? void 0
                  : a.variant_properties) != null)
              ) {
                var c,
                  d = [];
                ((c = e.variant_info) == null ||
                  c.variant_properties.forEach(function (e) {
                    var t = e.name,
                      n = e.value;
                    t != null && n != null && d.push({ name: t, value: n });
                  }),
                  (i.variantProperties = d));
              }
              return i;
            }),
            _ = {
              price_details: {
                total:
                  (n = e.xwa_checkout_refresh_cart) == null ||
                  (n = n.cart) == null ||
                  (n = n.price_details) == null
                    ? void 0
                    : n.total_amount,
                subtotal:
                  (o = e.xwa_checkout_refresh_cart) == null ||
                  (o = o.cart) == null ||
                  (o = o.price_details) == null
                    ? void 0
                    : o.subtotal_amount,
                currency:
                  (a = e.xwa_checkout_refresh_cart) == null ||
                  (a = a.cart) == null ||
                  (a = a.price_details) == null
                    ? void 0
                    : a.currency,
                price_status:
                  (i = e.xwa_checkout_refresh_cart) == null ||
                  (i = i.cart) == null ||
                  (i = i.price_details) == null
                    ? void 0
                    : i.price_status,
              },
            },
            f = {};
          if (((l = _.price_details) == null ? void 0 : l.subtotal) != null) {
            var g;
            f.subtotal = String(
              (g = _.price_details) == null ? void 0 : g.subtotal,
            );
          }
          if (((s = _.price_details) == null ? void 0 : s.currency) != null) {
            var h;
            f.currency = String(
              (h = _.price_details) == null ? void 0 : h.currency,
            );
          }
          if (((u = _.price_details) == null ? void 0 : u.total) != null) {
            var y;
            f.total = String((y = _.price_details) == null ? void 0 : y.total);
          }
          if (
            ((c = _.price_details) == null ? void 0 : c.price_status) != null
          ) {
            var C;
            f.price_status = String(
              (C = _.price_details) == null ? void 0 : C.price_status,
            );
          }
          var b = {
            price: {
              currency: f.currency,
              price_status: f.price_status,
              subtotal: f.subtotal,
              total: f.total,
            },
            products: m,
          };
          return { type: "success", cartResult: b };
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
