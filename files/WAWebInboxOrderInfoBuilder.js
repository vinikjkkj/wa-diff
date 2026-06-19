__d(
  "WAWebInboxOrderInfoBuilder",
  ["sumBy"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        o = e.order,
        a = e.reference_id,
        i = ((t = o.items) != null ? t : []).map(function (e, t) {
          return {
            id: String(t),
            name: e.name,
            amount: s(e.amount),
            quantity: e.quantity,
            isCustomItem: !1,
            isQuantitySet: !0,
            properties: null,
          };
        });
      return i.length === 0
        ? null
        : {
            title: i[0].name,
            referenceId: a,
            currency: (n = o.currency) != null ? n : "",
            totalAmount: r("sumBy")(i, function (e) {
              var t;
              return ((t = e.amount) != null ? t : 0) * e.quantity;
            }),
            quantity: r("sumBy")(i, function (e) {
              return e.quantity;
            }),
            items: i,
            shipping: void 0,
            tax: void 0,
            discount: void 0,
            subtotal: void 0,
          };
    }
    function s(e) {
      var t,
        n = e == null ? void 0 : e.value;
      if (n != null) {
        var r = (t = e == null ? void 0 : e.offset) != null ? t : 1;
        return r === 0 ? n : n / r;
      }
    }
    l.orderStatusButtonToOrderInfo = e;
  },
  98,
);
