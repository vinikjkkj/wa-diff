__d(
  "WAWebCatalogModel",
  [
    "WANullthrows",
    "WAWebBaseModel",
    "WAWebBizProductCatalogAction",
    "WAWebBizProductCatalogBridge",
    "WAWebCatalogCollection",
    "WAWebProductCollCollection",
    "WAWebProductCollection",
    "WAWebProductModel",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.catalogId = o("WAWebBaseModel").prop()),
          (t.catalogType = o("WAWebBaseModel").prop()),
          (t.catalogName = o("WAWebBaseModel").prop()),
          (t.afterCursor = o("WAWebBaseModel").prop()),
          (t.index = o("WAWebBaseModel").prop()),
          (t.hasCatalogCategories = o("WAWebBaseModel").prop()),
          (t.fetchedFromServer = o("WAWebBaseModel").session()),
          (t._products = o("WAWebBaseModel").session()),
          (t._msgs = o("WAWebBaseModel").session()),
          (t.lastUsedCountryCode = o("WAWebBaseModel").session()),
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
            (this.msgProductCollection = new (o(
              "WAWebProductCollection",
            ).ProductCollection)()),
            (this.collections = new (o(
              "WAWebProductCollCollection",
            ).ProductCollCollection)()),
            this.listenTo(this, "change:_products", this.triggerProductUpdate),
            this.listenTo(this, "change:_msgs", this.triggerMsgUpdate),
            this.triggerProductUpdate(),
            this.triggerMsgUpdate());
        }),
        (n.triggerProductUpdate = function () {
          (this._products &&
            this.productCollection.add(this._products, { merge: !0 }),
            (this._products = void 0));
        }),
        (n.triggerMsgUpdate = function () {
          (this._msgs &&
            this.msgProductCollection.add(this._msgs, { merge: !0 }),
            (this._msgs = void 0));
        }),
        (n.markProductCollectionOld = function () {
          this.productCollection.forEach(function (e) {
            return e.markOld();
          });
        }),
        (n.addProduct = async function (t) {
          var e,
            n = this.id;
          this.maybeUpdateLastUsedCountryCode(
            (e = t.complianceInfo) == null ? void 0 : e.countryCodeOrigin,
          );
          var a = await o("WAWebBizProductCatalogAction").addProduct(t);
          a.catalogWid = n;
          var i = this.productCollection.add(a, { merge: !0, at: 0 })[0];
          return r("WANullthrows")(i);
        }),
        (n.editProduct = async function (t) {
          var e,
            n = await o("WAWebBizProductCatalogAction").editProduct(t);
          this.maybeUpdateLastUsedCountryCode(
            (e = t.complianceInfo) == null ? void 0 : e.countryCodeOrigin,
          );
          var a = this.productCollection.add(n, { merge: !0 })[0];
          return (
            this.collections &&
              this.collections.forEach(function (e) {
                e.productCollection.get(t.id) &&
                  e.productCollection.add(n, { merge: !0 });
              }),
            r("WANullthrows")(a)
          );
        }),
        (n.refreshProduct = async function (t) {
          var e = this.productCollection.get(t);
          e && (e.stale = !0);
          var n = await o("WAWebBizProductCatalogAction").queryProduct(
            this.id,
            t,
          );
          if (n.data != null) {
            var r = o("WAWebBizProductCatalogBridge").mapProductResponseToModel(
              n.data,
              this.id,
            );
            (e && this.productCollection.add(r, { merge: !0 }),
              this.collections &&
                this.collections.forEach(function (e) {
                  e.productCollection.get(t) &&
                    e.productCollection.add(r, { merge: !0 });
                }));
          }
        }),
        (n.maybeUpdateLastUsedCountryCode = function (t) {
          t != null && (this.lastUsedCountryCode = t);
        }),
        (n.pullProduct = async function (t, n) {
          var e = await o("WAWebBizProductCatalogAction").queryProduct(
            this.id,
            t,
            void 0,
            void 0,
            void 0,
            n,
          );
          if (
            (e.error === "NOT_FOUND" && this.productCollection.remove(t),
            e.data != null)
          ) {
            var r = new (o("WAWebProductModel").Product)(
              o("WAWebBizProductCatalogBridge").mapProductResponseToModel(
                e.data,
                this.id,
              ),
            );
            (r.variantInfo != null &&
              this.productCollection.get(r.id) == null &&
              (r.displayPriority = 1),
              this.updateProduct(r));
          }
        }),
        (n.updateProduct = function (t) {
          if (
            (this.productCollection.add(t, { merge: !1 }),
            t.variantInfo != null)
          ) {
            var e = this.productCollection.get(t.id);
            e && e.set("variantInfo", t.variantInfo);
          }
        }),
        (n.getCollection = function () {
          return o("WAWebCatalogCollection").CatalogCollection;
        }),
        (n.getMostRecentlyApprovedProduct = function () {
          return this.productCollection.findFirst(function (e) {
            return (
              !e.isHidden &&
              e.isSanctioned !== !0 &&
              e.reviewStatus === "APPROVED"
            );
          });
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "catalog"), (e.idClass = r("WAWebWid")));
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
