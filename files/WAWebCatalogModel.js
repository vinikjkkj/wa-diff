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
    "asyncToGeneratorRuntime",
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
      var a = t.prototype;
      return (
        (a.initialize = function () {
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
        (a.triggerProductUpdate = function () {
          (this._products &&
            this.productCollection.add(this._products, { merge: !0 }),
            (this._products = void 0));
        }),
        (a.triggerMsgUpdate = function () {
          (this._msgs &&
            this.msgProductCollection.add(this._msgs, { merge: !0 }),
            (this._msgs = void 0));
        }),
        (a.markProductCollectionOld = function () {
          this.productCollection.forEach(function (e) {
            return e.markOld();
          });
        }),
        (a.addProduct = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t,
              n = this.id;
            this.maybeUpdateLastUsedCountryCode(
              (t = e.complianceInfo) == null ? void 0 : t.countryCodeOrigin,
            );
            var a = yield o("WAWebBizProductCatalogAction").addProduct(e);
            a.catalogWid = n;
            var i = this.productCollection.add(a, { merge: !0, at: 0 })[0];
            return r("WANullthrows")(i);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.editProduct = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t,
              n = yield o("WAWebBizProductCatalogAction").editProduct(e);
            this.maybeUpdateLastUsedCountryCode(
              (t = e.complianceInfo) == null ? void 0 : t.countryCodeOrigin,
            );
            var a = this.productCollection.add(n, { merge: !0 })[0];
            return (
              this.collections &&
                this.collections.forEach(function (t) {
                  t.productCollection.get(e.id) &&
                    t.productCollection.add(n, { merge: !0 });
                }),
              r("WANullthrows")(a)
            );
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.refreshProduct = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = this.productCollection.get(e);
            t && (t.stale = !0);
            var n = yield o("WAWebBizProductCatalogAction").queryProduct(
              this.id,
              e,
            );
            if (n.data != null) {
              var r = o(
                "WAWebBizProductCatalogBridge",
              ).mapProductResponseToModel(n.data, this.id);
              (t && this.productCollection.add(r, { merge: !0 }),
                this.collections &&
                  this.collections.forEach(function (t) {
                    t.productCollection.get(e) &&
                      t.productCollection.add(r, { merge: !0 });
                  }));
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.maybeUpdateLastUsedCountryCode = function (t) {
          t != null && (this.lastUsedCountryCode = t);
        }),
        (a.pullProduct = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = yield o("WAWebBizProductCatalogAction").queryProduct(
                this.id,
                e,
                void 0,
                void 0,
                void 0,
                t,
              );
              if (
                (n.error === "NOT_FOUND" && this.productCollection.remove(e),
                n.data != null)
              ) {
                var r = new (o("WAWebProductModel").Product)(
                  o("WAWebBizProductCatalogBridge").mapProductResponseToModel(
                    n.data,
                    this.id,
                  ),
                );
                (r.variantInfo != null &&
                  this.productCollection.get(r.id) == null &&
                  (r.displayPriority = 1),
                  this.updateProduct(r));
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.updateProduct = function (t) {
          if (
            (this.productCollection.add(t, { merge: !1 }),
            t.variantInfo != null)
          ) {
            var e = this.productCollection.get(t.id);
            e && e.set("variantInfo", t.variantInfo);
          }
        }),
        (a.getCollection = function () {
          return o("WAWebCatalogCollection").CatalogCollection;
        }),
        (a.getMostRecentlyApprovedProduct = function () {
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
