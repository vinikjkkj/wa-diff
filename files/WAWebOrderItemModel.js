__d(
  "WAWebOrderItemModel",
  ["WAWebBaseModel", "WAWebOrderCollection", "WAWebOrderItemGetters"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.price = o("WAWebBaseModel").prop()),
          (t.currency = o("WAWebBaseModel").prop()),
          (t.name = o("WAWebBaseModel").prop()),
          (t.quantity = o("WAWebBaseModel").prop()),
          (t.thumbnailId = o("WAWebBaseModel").prop()),
          (t.thumbnailUrl = o("WAWebBaseModel").prop()),
          (t.isCustomItem = o("WAWebBaseModel").prop()),
          (t.isQuantitySet = o("WAWebBaseModel").prop()),
          (t.properties = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return o("WAWebOrderCollection").OrderCollection;
        }),
        (n.delete = function () {
          (e.prototype.delete.call(this),
            o("WAWebOrderItemGetters").clearOrderItemGetterCacheFor(this));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "order-item";
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
