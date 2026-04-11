__d(
  "WAWebCartItemModel",
  ["WAWebBaseModel", "WAWebCartCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.priceAmount1000 = o("WAWebBaseModel").prop()),
          (t.currency = o("WAWebBaseModel").prop()),
          (t.name = o("WAWebBaseModel").prop()),
          (t.quantity = o("WAWebBaseModel").prop()),
          (t.imageHash = o("WAWebBaseModel").prop()),
          (t.imageCdnUrl = o("WAWebBaseModel").prop()),
          (t.maxAvailable = o("WAWebBaseModel").prop()),
          (t.variantProperties = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getCollection = function () {
          return o("WAWebCartCollection").CartCollection;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "cart-item";
    var s = o("WAWebBaseModel").defineModel(e);
    l.CartItem = s;
  },
  98,
);
