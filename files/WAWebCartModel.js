__d(
  "WAWebCartModel",
  [
    "WAWebBaseCollection",
    "WAWebBaseModel",
    "WAWebCartCollection",
    "WAWebCartItemModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebCartItemModel").CartItem;
    var s = (function (t) {
      function n() {
        for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e.id = o("WAWebBaseModel").prop()),
          (e.products = o("WAWebBaseModel").prop()),
          (e.itemCount = o("WAWebBaseModel").prop()),
          (e.total = o("WAWebBaseModel").prop()),
          (e.currency = o("WAWebBaseModel").prop()),
          (e.message = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var r = n.prototype;
      return (
        (r.countTotals = function () {
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
        (r.initialize = function () {
          (t.prototype.initialize.call(this),
            (this.cartItemCollection = new e()),
            this.listenTo(this, "change:cartItemCollection", this.countTotals));
        }),
        (r.getCollection = function () {
          return o("WAWebCartCollection").CartCollection;
        }),
        n
      );
    })(o("WAWebBaseModel").BaseModel);
    s.Proxy = "cart";
    var u = o("WAWebBaseModel").defineModel(s);
    l.default = u;
  },
  98,
);
