__d(
  "WAWebOrderModel",
  [
    "WAWebBaseModel",
    "WAWebOrderCollection",
    "WAWebOrderGetters",
    "WAWebOrderItemCollection",
    "WAWebOrderItemModel",
  ],
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
          (t.subtotal = o("WAWebBaseModel").prop()),
          (t.tax = o("WAWebBaseModel").prop()),
          (t.total = o("WAWebBaseModel").prop()),
          (t.currency = o("WAWebBaseModel").prop()),
          (t.createdAt = o("WAWebBaseModel").prop()),
          (t.sellerJid = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          (e.prototype.initialize.call(this),
            (this.orderItemCollection = new (o(
              "WAWebOrderItemCollection",
            ).OrderItemCollection)()),
            this.listenTo(
              this,
              "change:cartItemCollection",
              this.triggerItemCollectionUpdate,
            ),
            this.triggerItemCollectionUpdate());
        }),
        (n.triggerItemCollectionUpdate = function () {
          this.orderItemCollection.set(
            this.products.map(function (e) {
              return new (r("WAWebOrderItemModel"))(
                babelHelpers.extends({}, e),
              );
            }),
            { merge: !0 },
          );
        }),
        (n.getCollection = function () {
          return o("WAWebOrderCollection").OrderCollection;
        }),
        (n.delete = function () {
          (e.prototype.delete.call(this),
            o("WAWebOrderGetters").clearOrderGetterCacheFor(this));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "order";
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
