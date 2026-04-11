__d(
  "WAWebBizQueryOrderJob",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWapDeprecatedSmaxID",
    "WAWebBackendErrors",
    "WAWebBizGatingUtils",
    "WAWebBizQueryOrderJobQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = e !== void 0 ? e : (e = n("WAWebBizQueryOrderJobQuery.graphql")),
      d = new (r("WADeprecatedWapParser"))("queryOrderResponse", function (e) {
        (e.assertTag("iq"), e.assertFromServer());
        var t = e.child("order"),
          n = t.hasAttr("creation_ts") ? t.attrTime("creation_ts") : null,
          r = t.maybeChild("price"),
          o = r == null ? void 0 : r.maybeChild("subtotal"),
          a = o ? parseInt(o.contentString(), 10) : null,
          i = r == null ? void 0 : r.maybeChild("currency"),
          l = i ? i.contentString() : null,
          s = r == null ? void 0 : r.maybeChild("tax"),
          u = s ? parseInt(s.contentString(), 10) : null,
          c = r == null ? void 0 : r.maybeChild("total"),
          d = c ? parseInt(c.contentString(), 10) : null,
          m = [];
        return (
          t.forEachChildWithTag("product", function (e) {
            var t = e.child("id"),
              n = t.contentString(),
              r = e.child("name"),
              o = r.contentString(),
              a = e.maybeChild("price"),
              i = a ? parseInt(a.contentString(), 10) : null,
              l = e.maybeChild("quantity"),
              s = l ? parseInt(l.contentString(), 10) : null,
              u = e.maybeChild("variant_info"),
              c = u ? u.maybeChild("properties") : null,
              d = [];
            c == null ||
              c.forEachChildWithTag("property", function (e) {
                var t = e.attrString("name"),
                  n = e.attrString("value");
                t != null && n != null && d.push([t, n]);
              });
            var p = e.maybeChild("currency"),
              _ = p ? p.contentString() : null,
              f = null,
              g = null,
              h = e.maybeChild("image");
            if (h != null) {
              var y = h.maybeChild("url");
              g = y && y.hasContent() ? y.contentString() : null;
              var C = h.maybeChild("id");
              f = C && C.hasContent() ? C.contentString() : null;
            }
            m.push({
              id: n,
              price: i,
              thumbnailId: f,
              thumbnailUrl: g,
              currency: _,
              name: o,
              quantity: s,
              properties: d,
            });
          }),
          {
            currency: l,
            createdAt: n,
            products: m,
            subtotal: a,
            total: d,
            tax: u,
          }
        );
      });
    function m(e, t, n, r, o) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            return (
              i === void 0 && (i = null),
              o("WAWebBizGatingUtils").commerceFeaturesDisabledBySanctions()
                ? (u || (u = n("Promise"))).reject(
                    new (o("WAWebBackendErrors").E451)(),
                  )
                : o("WAWebBizGatingUtils").graphQLForGetOrderInfoEnabled()
                  ? _(e, t, r, a, i)
                  : g(e, t, r, a, i)
            );
          },
        )),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r, o) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            i === void 0 && (i = null);
            try {
              var l, u, d, m, p;
              yield r("WAWebNetworkStatus").waitIfOffline();
              var _ = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                f = yield o("WAWebRelayClient").fetchQuery(
                  c,
                  {
                    request: {
                      order: {
                        jid: _.toString(),
                        token: { sensitive_string_value: a },
                        id: e,
                        image_dimensions: { height: n, width: t },
                        direct_connection_encrypted_info: i,
                      },
                    },
                  },
                  { environmentType: "whatsapp_catalog" },
                );
              if (
                (f == null || (l = f.xwa_checkout_get_order_info) == null
                  ? void 0
                  : l.order) == null
              )
                throw new (o("WAWebBackendErrors").ServerStatusCodeError)(500);
              var g = f.xwa_checkout_get_order_info.order,
                h = ((u = g.products) != null ? u : []).map(function (e) {
                  var t,
                    n,
                    r,
                    o = [];
                  return (
                    (t = e.variant_info) == null ||
                      (t = t.variant_properties) == null ||
                      t.forEach(function (e) {
                        e.name != null &&
                          e.value != null &&
                          o.push([e.name, e.value]);
                      }),
                    {
                      id: e.id,
                      name: e.name,
                      price: e.price != null ? parseInt(e.price, 10) : null,
                      currency: e.currency,
                      quantity:
                        e.quantity != null ? parseInt(e.quantity, 10) : null,
                      thumbnailId:
                        (n = e.media) == null ||
                        (n = n.images) == null ||
                        (n = n.at(0)) == null
                          ? void 0
                          : n.id,
                      thumbnailUrl:
                        (r = e.media) == null ||
                        (r = r.images) == null ||
                        (r = r.at(0)) == null
                          ? void 0
                          : r.request_image_url,
                      properties: o,
                    }
                  );
                });
              return {
                createdAt:
                  g.creation_time_stamp != null
                    ? Number(g.creation_time_stamp)
                    : null,
                currency: (d = g.price_details) == null ? void 0 : d.currency,
                subtotal:
                  ((m = g.price_details) == null
                    ? void 0
                    : m.subtotal_amount) != null
                    ? parseInt(g.price_details.subtotal_amount, 10)
                    : null,
                tax: null,
                total:
                  ((p = g.price_details) == null ? void 0 : p.total_amount) !=
                  null
                    ? parseInt(g.price_details.total_amount, 10)
                    : null,
                products: h,
              };
            } catch (e) {
              if (
                (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "WAWebBizQueryOrderJob: GraphQL queryOrder failed",
                    ])),
                ),
                e instanceof o("WAWebGraphQLServerError").GraphQLServerError)
              ) {
                var y,
                  C = (y = e.source.errors[0]) == null ? void 0 : y.code;
                throw C === 451
                  ? new (o("WAWebBackendErrors").E451)()
                  : new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      C != null ? C : 500,
                    );
              }
              throw e;
            }
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n, r, o) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i) {
            i === void 0 && (i = null);
            var l = o("WAWap").wap(
                "iq",
                {
                  to: o("WAWap").S_WHATSAPP_NET,
                  smax_id: o("WAWap").SMAX_ID(
                    r("WAWapDeprecatedSmaxID").QueryOrder,
                  ),
                  xmlns: "fb:thrift_iq",
                  id: o("WAWap").generateId(),
                  type: "get",
                },
                o("WAWap").wap(
                  "order",
                  {
                    op: o("WAWap").CUSTOM_STRING("get"),
                    id: o("WAWap").CUSTOM_STRING(e),
                  },
                  o("WAWap").wap(
                    "image_dimensions",
                    null,
                    o("WAWap").wap("width", null, t.toString()),
                    o("WAWap").wap("height", null, n.toString()),
                  ),
                  o("WAWap").wap("token", null, a),
                  i != null
                    ? o("WAWap").wap(
                        "direct_connection_encrypted_info",
                        null,
                        i,
                      )
                    : null,
                ),
              ),
              s = yield o("WADeprecatedSendIq").deprecatedSendIq(l, d);
            if (s.success) return s.result;
            throw s.errorCode === 451
              ? new (o("WAWebBackendErrors").E451)()
              : new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  s.errorCode,
                );
          },
        )),
        h.apply(this, arguments)
      );
    }
    ((l.queryOrderResponse = d), (l.queryOrder = m));
  },
  98,
);
