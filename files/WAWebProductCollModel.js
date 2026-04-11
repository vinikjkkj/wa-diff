__d(
  "WAWebProductCollModel",
  ["WAWebBaseModel", "WAWebProductCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.name = o("WAWebBaseModel").prop()),
          (t.isHidden = o("WAWebBaseModel").prop()),
          (t.reviewStatus = o("WAWebBaseModel").prop()),
          (t.commerceUrl = o("WAWebBaseModel").prop()),
          (t.rejectReason = o("WAWebBaseModel").prop()),
          (t.totalItemsCount = o("WAWebBaseModel").prop()),
          (t.afterCursor = o("WAWebBaseModel").prop()),
          (t.canAppeal = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initialize = function () {
          (e.prototype.initialize.call(this),
            (this.productCollection = new (o(
              "WAWebProductCollection",
            ).ProductCollection)()),
            (this.afterCursor = void 0));
        }),
        (n.addProducts = function (t) {
          this.productCollection.add(t, { merge: !0 });
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "productColl";
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
