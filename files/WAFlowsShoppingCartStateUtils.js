__d(
  "WAFlowsShoppingCartStateUtils",
  ["WAFlowsShoppingStateUtils", "WAFlowsWELJActionCreators"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r,
        o,
        a = (n = e.internal) == null ? void 0 : n.shopping,
        i =
          (r =
            (o = e.internal) == null || (o = o.shopping) == null
              ? void 0
              : o.shoppingCart) != null
            ? r
            : { items: [] },
        l = new Map(
          i.items.map(function (e) {
            return [e.catalogItemId, e];
          }),
        );
      return (
        t.forEach(function (e) {
          var t = e.catalogItemId,
            n = e.price,
            r = e.quantity,
            o = e.salePrice,
            a = l.get(t);
          if (a && r <= 0) l.delete(t);
          else if (a)
            ((a.quantity = r),
              n !== void 0 && (a.price = n),
              o !== void 0 && (a.salePrice = o),
              l.set(t, a));
          else if (r > 0) {
            var i = {};
            (n !== void 0 && (i.price = n),
              o !== void 0 && (i.salePrice = o),
              l.set(
                t,
                babelHelpers.extends({ catalogItemId: t, quantity: r }, i),
              ));
          }
        }),
        babelHelpers.extends({}, a, {
          shoppingCart: babelHelpers.extends({}, i, {
            items: Array.from(l.values()),
          }),
        })
      );
    }
    function s(e, t) {
      var n,
        r,
        o,
        a = (n = e.internal) == null ? void 0 : n.shopping,
        i =
          (r =
            (o = e.internal) == null || (o = o.shopping) == null
              ? void 0
              : o.shoppingCart) != null
            ? r
            : { items: [] };
      return t === null
        ? babelHelpers.extends({}, a, {
            shoppingCart: babelHelpers.extends({}, i, { coupon: null }),
          })
        : babelHelpers.extends({}, a, {
            shoppingCart: babelHelpers.extends({}, i, { coupon: t }),
          });
    }
    function u(e, t) {
      var n,
        r,
        o,
        a = (n = e.internal) == null ? void 0 : n.shopping,
        i =
          (r =
            (o = e.internal) == null || (o = o.shopping) == null
              ? void 0
              : o.shoppingCart) != null
            ? r
            : { items: [] };
      if (t !== null)
        return babelHelpers.extends({}, a, {
          shoppingCart: babelHelpers.extends({}, i, { amount: t }),
        });
    }
    function c(e) {
      var t,
        n,
        r =
          (t = e == null ? void 0 : e.shoppingCart) != null ? t : { items: [] };
      return (n = r.items) == null
        ? void 0
        : n.reduce(function (e, t) {
            var n;
            return e + ((n = t.quantity) != null ? n : 0);
          }, 0);
    }
    function d(e, t) {
      var n,
        r,
        o,
        a =
          (n = e == null ? void 0 : e.shoppingCart) != null ? n : { items: [] };
      return (r =
        (o = a.items) == null ||
        (o = o.find(function (e) {
          return e.catalogItemId === t;
        })) == null
          ? void 0
          : o.quantity) != null
        ? r
        : 0;
    }
    function m(e, t, n, r, a, i) {
      if (e == null || t == null) return e;
      if (!i.isJestTesting) {
        var l = o("WAFlowsWELJActionCreators").createExternalDataExchangeAction(
            a.getShoppingCartScreenId(),
            a.getScreenExternalData(a.getShoppingCartScreenId()),
          ),
          s = t.items.map(function (e) {
            return e.catalogItemId;
          });
        n(r.catalogCartItemsUpdateActionHandler(l, { product_ids: s }));
      }
      return babelHelpers.extends({}, e, {
        internal: babelHelpers.extends({}, e.internal, {
          shopping: o("WAFlowsShoppingStateUtils").getUpdatedShoppingState(e, {
            shoppingCart: t,
          }),
        }),
      });
    }
    function p(e, t) {
      var n,
        r,
        o,
        a =
          (n = e.internal) == null || (n = n.shopping) == null
            ? void 0
            : n.shoppingCart;
      if (a != null && (r = a.items) != null && r.length) {
        var i = t.getShoppingCartScreenId(),
          l = e.external[i];
        if (l) {
          var s =
            (o = l.external_data) == null || (o = o.meta_catalog) == null
              ? void 0
              : o.products;
          if (s != null && s.length) {
            var u = a.items.reduce(function (e, t) {
                return e.set(t.catalogItemId, t.quantity);
              }, new Map()),
              c = { items: [] };
            return (
              s.forEach(function (e) {
                var t = u.get(e.id);
                if (t != null) {
                  var n;
                  c.items.push({
                    id: e.id,
                    quantity: t,
                    price: (n = e.sale_price) != null ? n : e.price,
                    currency: e.currency,
                  });
                }
              }),
              c
            );
          }
        }
      }
    }
    ((l.getUpdatedShoppingCartItems = e),
      (l.getUpdatedShoppingCartCoupon = s),
      (l.getUpdatedShoppingCartAmount = u),
      (l.getCartItemsNumber = c),
      (l.getCartItemQuantity = d),
      (l.getUpdatedStateWithShoppingCart = m),
      (l.getFlowResponseShoppingCart = p));
  },
  98,
);
