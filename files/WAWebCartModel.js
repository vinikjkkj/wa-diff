__d(
  "WAWebCartModel",
  ["WAWebBaseModel", "WAWebCartCollection", "WAWebCartItemCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.products = o("WAWebBaseModel").prop()),
          (t.itemCount = o("WAWebBaseModel").prop()),
          (t.total = o("WAWebBaseModel").prop()),
          (t.currency = o("WAWebBaseModel").prop()),
          (t.message = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.countTotals = function () {
          var e = this.cartItemCollection.reduce(
              function (e, t) {
                var n;
                return (
                  e.currency.add(t.currency),
                  {
                    itemCount: e.itemCount + t.quantity,
                    total:
                      e.total +
                      t.quantity * ((n = t.priceAmount1000) != null ? n : 0),
                    currency: e.currency,
                  }
                );
              },
              { itemCount: 0, total: 0, currency: new Set() },
            ),
            t = e.currency.size === 1,
            n = {
              itemCount: e.itemCount,
              total: t ? e.total : null,
              currency: t ? e.currency.values().next().value : null,
            };
          this.set(n);
        }),
        (n.initialize = function () {
          (e.prototype.initialize.call(this),
            (this.cartItemCollection = new (o(
              "WAWebCartItemCollection",
            ).CartItemCollection)()),
            this.listenTo(this, "change:cartItemCollection", this.countTotals));
        }),
        (n.getCollection = function () {
          return o("WAWebCartCollection").CartCollection;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "cart";
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
