__d(
  "WAWebCatalogCollection",
  [
    "Promise",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizGatingUtils",
    "WAWebBizProductCatalogAction",
    "WAWebBizProductCatalogBridge",
    "WAWebCatalogModel",
    "WAWebCatalogVariantHelper",
    "WAWebMsgGetters",
    "WAWebProductCatalogLogQplEvents",
    "WAWebQplFlowWrapper",
    "WAWebStaleBaseCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.selfCatalogErrorEmailMask = null),
            (e.findQueryImpl = function (t, n) {
              return e._findImplCommon(t, n).then(function (e) {
                return [e];
              });
            }),
            (e.findImpl = function (t) {
              var n = e.convertCatalogIdForLidMigration(t);
              return e._findImplCommon(n);
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.addMsgAsProduct = function (n) {
            var e = o("WAWebMsgGetters").getBusinessOwnerJid(n.unsafe()),
              r = e != null ? o("WAWebWidFactory").createWid(e) : null;
            if (r != null) {
              var a = this.get(r),
                i =
                  n.productId != null
                    ? a == null
                      ? void 0
                      : a.msgProductCollection.get(n.productId)
                    : null,
                l =
                  n.productId != null
                    ? a == null
                      ? void 0
                      : a.productCollection.get(n.productId)
                    : null;
              if (
                !(l != null && l.t && l.t >= n.t) &&
                !(i != null && i.fetchedFromServer)
              ) {
                var s = o("WAWebBizProductCatalogBridge").mapMsgToProductModel(
                  n,
                );
                return t.prototype.add.call(
                  this,
                  {
                    id: r,
                    afterCursor: void 0,
                    _msgs: [s],
                    stale: !0,
                    fetchedFromServer: !!l,
                  },
                  { merge: !0 },
                );
              }
            }
          }),
          (i._queryProduct = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var a = e.canLogQpl,
                  i = e.catalogWid,
                  l = e.height,
                  s = e.productId,
                  c = e.productMsgMediaData,
                  d = e.shouldFetchComplianceFields,
                  m = e.width,
                  p = yield o("WAWebBizProductCatalogAction").queryProduct(
                    i,
                    s,
                    m,
                    l,
                    d,
                    a,
                  );
                if (p.error === "NOT_FOUND") {
                  var _ = this.get(i);
                  return (
                    _ == null || _.productCollection.remove(s),
                    (u || (u = n("Promise"))).reject(
                      new (o("WAWebBackendErrors").E404)(
                        "CatalogCollection:findProduct:_queryProduct NOT_FOUND",
                      ),
                    )
                  );
                }
                if (!p.data)
                  return t.prototype.add.call(this, {
                    id: i,
                    afterCursor: void 0,
                  });
                var f = p.data;
                if (!f.image_cdn_urls)
                  return (u || (u = n("Promise"))).reject(
                    r("err")(
                      "CatalogCollection:findProduct:_queryProduct: could not find image_cdn_urls for product",
                    ),
                  );
                var g = o(
                  "WAWebBizProductCatalogBridge",
                ).mapProductResponseToModel(f, i);
                if (((g.productMsgMediaData = c), g.variantInfo != null)) {
                  var h;
                  ((h = this.get(i)) == null
                    ? void 0
                    : h.productCollection.get(f.id)) == null &&
                    (g.displayPriority = 1);
                }
                var y = [g];
                return t.prototype.add.call(
                  this,
                  { id: i, afterCursor: void 0, _products: y, _msgs: y },
                  { merge: !0 },
                );
              },
            );
            function a(t) {
              return e.apply(this, arguments);
            }
            return a;
          })()),
          (i.findProduct = function (t) {
            var e = t.canLogQpl,
              o = t.catalogWid,
              a = t.productId,
              i = t.productMsgMediaData,
              l = t.shouldFetchComplianceFields,
              s = this.convertCatalogIdForLidMigration(o);
            return r("isStringNullOrEmpty")(a)
              ? (u || (u = n("Promise"))).reject(
                  r("err")(
                    "CatalogCollection:findProduct Received productId type " +
                      (a === void 0 ? "undefined" : "null"),
                  ),
                )
              : this._queryProduct({
                  catalogWid: s,
                  productId: a,
                  productMsgMediaData: i,
                  shouldFetchComplianceFields: l,
                  canLogQpl: e,
                });
          }),
          (i._queryCatalog = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a, i, l, s, c) {
                var d = t ? t.index : 0;
                c &&
                  o("WAWebQplFlowWrapper").QPL.markerPoint(
                    c,
                    "datasource_catalog_start",
                  );
                var m, p, _;
                try {
                  o("WAWebBizGatingUtils").isCatalogVariantsViewingEnabled() &&
                    ((m = o(
                      "WAWebCatalogVariantHelper",
                    ).FULL_VARIANT_INFO_FIELDS),
                    (p = o(
                      "WAWebCatalogVariantHelper",
                    ).VARIANT_THUMBNAIL_IMAGE_SIZE),
                    (_ = o(
                      "WAWebCatalogVariantHelper",
                    ).VARIANT_THUMBNAIL_IMAGE_SIZE));
                  var f = yield o("WAWebBizProductCatalogAction").queryCatalog(
                    a,
                    i,
                    10,
                    void 0,
                    void 0,
                    l,
                    s,
                    m,
                    p,
                    _,
                  );
                  if (
                    (c &&
                      o("WAWebQplFlowWrapper").QPL.markerPoint(
                        c,
                        "datasource_catalog_end",
                      ),
                    this.hasSelfCatalogErrorEmailMask() &&
                      this.shouldUseCatalogErrorEmailMask(a) &&
                      this.resetSelfCatalogErrorEmailMask(),
                    !f.data.length)
                  )
                    return { id: a, afterCursor: "" };
                  var g = [];
                  f.data.forEach(function (e) {
                    e.image_cdn_urls &&
                      g.push(
                        o(
                          "WAWebBizProductCatalogBridge",
                        ).mapProductResponseToModel(e, a),
                      );
                  });
                  var h = { type: "success", catalog: f };
                  this.trigger("catalog-loaded", h);
                  var y = this.get(a);
                  return (
                    y &&
                      y.catalogId != null &&
                      f.catalog_id != null &&
                      y.catalogId !== f.catalog_id &&
                      o(
                        "WAWebBizGatingUtils",
                      ).isCatalogVariantsViewingEnabled() &&
                      this.remove(a),
                    {
                      id: a,
                      afterCursor: f.paging.cursors.after,
                      _products: g,
                      catalogId: f.catalog_id,
                      catalogType: f.catalog_type,
                      catalogName: f.catalog_name,
                      fetchedFromServer: !0,
                      index: d + g.length,
                    }
                  );
                } catch (t) {
                  if (
                    t instanceof
                      o("WAWebBackendErrors").AdAccountRecoveryRequiredError &&
                    this.shouldUseCatalogErrorEmailMask(a)
                  ) {
                    if (r("isStringNullOrEmpty")(t.emailMask))
                      return (
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Catalog:AdAccountRecoveryRequiredError empty email mask",
                              ])),
                          )
                          .sendLogs("catalog email mask empty"),
                        (u || (u = n("Promise"))).reject(
                          new (o(
                            "WAWebBackendErrors",
                          ).AdAccountRecoveryRequiredEmailMaskEmptyError)(),
                        )
                      );
                    this.updateSelfCatalogErrorEmailMask(t.emailMask);
                  } else if (
                    t instanceof
                      o("WAWebBackendErrors").CatalogIncorrectNonceError &&
                    this.shouldUseCatalogErrorEmailMask(a)
                  ) {
                    var C = { type: "incorrect-nonce" };
                    return (
                      this.trigger("catalog-loaded", C),
                      (u || (u = n("Promise"))).reject(t)
                    );
                  } else if (
                    (this.hasSelfCatalogErrorEmailMask() &&
                      this.shouldUseCatalogErrorEmailMask(a) &&
                      this.resetSelfCatalogErrorEmailMask(),
                    t instanceof
                      o("WAWebBackendErrors").ServerStatusCodeError &&
                      t.statusCode === 404)
                  ) {
                    var b = this.get(a);
                    b != null &&
                      o(
                        "WAWebBizGatingUtils",
                      ).isCatalogVariantsViewingEnabled() &&
                      this.remove(a);
                  }
                  var v = { type: "error" };
                  return (
                    this.trigger("catalog-loaded", v),
                    (u || (u = n("Promise"))).reject(t)
                  );
                }
              },
            );
            function a(e, n, r, o, a, i) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i._findImplCommon = function (t, n) {
            var e = this.get(t),
              a = e && !e.stale ? e.afterCursor : void 0,
              i =
                t instanceof r("WAWebWid")
                  ? t
                  : o("WAWebWidFactory").createWid(t.toString());
            return this._queryCatalog(
              e,
              i,
              a,
              void 0,
              void 0,
              n == null ? void 0 : n.markerId,
            );
          }),
          (i.findCarouselCatalog = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var n = this.convertCatalogIdForLidMigration(e),
                  r = this.get(n);
                r && r.set({ index: 0 });
                var o = yield this._queryCatalog(r, n, void 0, void 0, !1);
                return (
                  r && r.markProductCollectionOld(),
                  t.prototype.add.call(this, o, { merge: !0 })
                );
              },
            );
            function r(t) {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (i.findNextProductPage = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = this.convertCatalogIdForLidMigration(e);
                t === !0 &&
                  o("WAWebProductCatalogLogQplEvents").qplPointCatalogView(
                    "datasource_start",
                  );
                var r = yield this.update(n);
                t === !0 &&
                  o("WAWebProductCatalogLogQplEvents").qplPointCatalogView(
                    "datasource_end",
                  );
                var a = Array.isArray(r) ? r[0] : r;
                return a.productCollection.getProductModels();
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.findCollectionMembership = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n) {
                var r = this.convertCatalogIdForLidMigration(e),
                  o = this.get(r),
                  a = o && !o.stale ? o.afterCursor : void 0,
                  i = yield this._queryCatalog(o, r, a, n);
                (t.prototype.add.call(this, i, { merge: !0 }),
                  (o = this.get(r)),
                  o && (o.stale = !1));
              },
            );
            function r(t, n) {
              return e.apply(this, arguments);
            }
            return r;
          })()),
          (i.removeCatalog = function (t) {
            var e = this.convertCatalogIdForLidMigration(t),
              n = this.get(e);
            n
              ? this.remove(e)
              : o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Catalog data cleanup called on a non-existent catalogId",
                    ])),
                );
          }),
          (i.get = function (n) {
            return t.prototype.get.call(
              this,
              this.convertCatalogIdForLidMigration(n),
            );
          }),
          (i.assertGet = function (n) {
            return t.prototype.assertGet.call(
              this,
              this.convertCatalogIdForLidMigration(n),
            );
          }),
          (i.convertCatalogIdForLidMigration = function (t) {
            var e =
              t instanceof r("WAWebWid")
                ? t
                : o("WAWebWidFactory").createWid(t.toString());
            return e;
          }),
          (i.updateSelfCatalogErrorEmailMask = function (t) {
            ((this.selfCatalogErrorEmailMask = t),
              this.trigger("change:selfCatalogErrorEmailMask"));
          }),
          (i.resetSelfCatalogErrorEmailMask = function () {
            this.updateSelfCatalogErrorEmailMask(null);
          }),
          (i.hasSelfCatalogErrorEmailMask = function () {
            return this.selfCatalogErrorEmailMask != null;
          }),
          (i.shouldUseCatalogErrorEmailMask = function (t) {
            return !(
              t == null ||
              !o("WAWebUserPrefsMeUser").isMeAccount(t) ||
              !o("WAWebBizGatingUtils").catalogTokenRecoveryEnabled()
            );
          }),
          a
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    c.model = r("WAWebCatalogModel");
    var d = new c();
    l.CatalogCollection = d;
  },
  98,
);
