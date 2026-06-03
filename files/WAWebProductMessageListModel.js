__d(
  "WAWebProductMessageListModel",
  [
    "WAWebBaseModel",
    "WAWebBizProductCatalogBridge",
    "WAWebBizProductMessageListAction",
    "WAWebBusinessDirectUtils",
    "WAWebCatalogCollection",
    "WAWebChatCollection",
    "WAWebMsgKey",
    "WAWebProductCollection",
    "WAWebProductMessageListConstant",
    "WAWebProductTypes.flow",
    "asyncToGeneratorRuntime",
    "compactMap",
    "countWhere",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ERROR", "SUCCESS"],
      s = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.catalogId = o("WAWebBaseModel").prop()),
            (e.title = o("WAWebBaseModel").prop()),
            (e.requiresDirectConnection = o("WAWebBaseModel").prop()),
            (e._productsLoadingStatus = o("WAWebBaseModel").session()),
            (e._productList = o("WAWebBaseModel").session()),
            (e._products = o("WAWebBaseModel").session()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.initialize = function () {
            var e = this;
            (t.prototype.initialize.call(this),
              (this.productCollection = o(
                "WAWebCatalogCollection",
              ).CatalogCollection.gadd({
                id: this.catalogId,
              }).productCollection),
              (this._productsLoadingStatus = new Map()),
              this.listenTo(this, "change:_products", function () {
                return e.triggerProductUpdate();
              }),
              this.triggerProductUpdate(),
              this.listenTo(this.productCollection, "remove", function (t) {
                return e.triggerProductRemoved(t);
              }),
              this.listenTo(
                o("WAWebChatCollection").ChatCollection,
                "add",
                function (t) {
                  return e.triggerChatAdded(t);
                },
              ));
          }),
          (i.triggerProductRemoved = function (t) {
            o(
              "WAWebBizProductMessageListAction",
            ).updateProductListHeaderImageRejected(t, this.id);
          }),
          (i.triggerProductUpdate = function () {
            var e = this;
            this._products != null &&
              (this._products.forEach(function (t) {
                var n = e._getFetchStatus(t);
                if (
                  (e.setProductLoadingStatus(t.id, n),
                  t.status === "DELETED" && e.triggerProductRemoved(t),
                  t.status !== "DELETED" && n !== "ERROR")
                ) {
                  var r = o(
                    "WAWebBizProductCatalogBridge",
                  ).mapProductResponseToModel(t, e.catalogId);
                  (r.reviewStatus ===
                    o("WAWebProductCollection").PRODUCT_REVIEW_STATUS
                      .REJECTED && e.triggerProductRemoved(r),
                    e.productCollection.add(r, { merge: !0 }));
                }
              }),
              (this._products = void 0));
          }),
          (i.triggerChatAdded = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                e.id.equals(this.catalogId) &&
                  (yield o("WAWebBusinessDirectUtils").isCypherNeeded(
                    this.catalogId,
                  )) &&
                  (this.productCollection.reset(),
                  (this._productsLoadingStatus = new Map()));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getNextProductBatchToLoad = function () {
            var e = this,
              t = this.getPageSize(),
              n = this._productList.productSections
                .reduce(function (t, n) {
                  var o = n.products;
                  return [].concat(
                    t,
                    r("compactMap")(o, function (e) {
                      var t = e.productId;
                      return t;
                    }).filter(function (t) {
                      return e.getProductLoadingStatus(t) === "NONE";
                    }),
                  );
                }, [])
                .slice(0, t);
            return (
              n.forEach(function (t) {
                return e.setProductLoadingStatus(t, "PENDING");
              }),
              n
            );
          }),
          (i.getPageSize = function () {
            var e = o("WAWebProductTypes.flow").PRODUCT_PAGE_SIZE,
              t = this.getProductSize();
            return t < 3 * e ? t : e * 2;
          }),
          (i.getProductSize = function () {
            return r("sumBy")(this._productList.productSections, function (e) {
              var t = e.products;
              return t.length;
            });
          }),
          (i.setProductLoadingStatus = function (t, n) {
            this._productsLoadingStatus.set(t, n);
          }),
          (i.getProductLoadingStatus = function (t) {
            return this._productsLoadingStatus.get(t) || "NONE";
          }),
          (i.getTotalProductsFetchedOrFailed = function () {
            return r("countWhere")(
              Array.from(this._productsLoadingStatus),
              function (t) {
                var n = t[0],
                  r = t[1];
                return e.includes(r);
              },
            );
          }),
          (i.getProductList = function () {
            return this._productList;
          }),
          (i.getSections = function () {
            return this._productList.productSections;
          }),
          (i.getSectionsCount = function () {
            return this._productList.productSections.reduce(function (e, t) {
              var n = t.title;
              return n != null && n !== "" ? e + 1 : e;
            }, 0);
          }),
          (i.isFetching = function () {
            var e = !1;
            return (
              this._productsLoadingStatus.forEach(function (t) {
                t === "PENDING" && (e = !0);
              }),
              e
            );
          }),
          (i._getFetchStatus = function (t) {
            return t.status ===
              o("WAWebProductMessageListConstant").INVALID_PRODUCT_TOKEN ||
              !t.image_cdn_urls
              ? "ERROR"
              : "SUCCESS";
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel);
    ((s.Proxy = "product_list"), (s.idClass = r("WAWebMsgKey")));
    var u = o("WAWebBaseModel").defineModel(s);
    l.ProductMessageList = u;
  },
  98,
);
