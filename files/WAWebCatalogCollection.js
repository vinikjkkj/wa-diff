__d(
  "WAWebCatalogCollection",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizProductCatalogAction",
    "WAWebBizProductCatalogBridge",
    "WAWebCatalogGetters",
    "WAWebCatalogModel",
    "WAWebCatalogVariantHelper",
    "WAWebMsgGetters",
    "WAWebProductCatalogLogQplEvents",
    "WAWebQplFlowWrapper",
    "WAWebStaleBaseCollection",
    "WAWebUserUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.remove = function (n, r) {
            var e = t.prototype.remove.call(this, n, r);
            return (
              e.forEach(function (e) {
                e != null &&
                  o("WAWebCatalogGetters").clearCatalogGetterCacheFor(e);
              }),
              e
            );
          }),
          (a.reset = function () {
            (this.forEach(o("WAWebCatalogGetters").clearCatalogGetterCacheFor),
              t.prototype.reset.call(this));
          }),
          (a.addMsgAsProduct = function (n) {
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
          (a._queryProduct = async function (n) {
            var e = n.canLogQpl,
              a = n.catalogWid,
              i = n.height,
              l = n.productId,
              s = n.productMsgMediaData,
              u = n.shouldFetchComplianceFields,
              c = n.width,
              d = await o("WAWebBizProductCatalogAction").queryProduct(
                a,
                l,
                c,
                i,
                u,
                e,
              );
            if (d.error === "NOT_FOUND") {
              var m = this.get(a);
              return (
                m == null || m.productCollection.remove(l),
                Promise.reject(
                  new (o("WAWebBackendErrors").E404)(
                    "CatalogCollection:findProduct:_queryProduct NOT_FOUND",
                  ),
                )
              );
            }
            if (!d.data)
              return t.prototype.add.call(this, { id: a, afterCursor: void 0 });
            var p = d.data;
            if (!p.image_cdn_urls)
              return Promise.reject(
                r("err")(
                  "CatalogCollection:findProduct:_queryProduct: could not find image_cdn_urls for product",
                ),
              );
            var _ = o("WAWebBizProductCatalogBridge").mapProductResponseToModel(
              p,
              a,
            );
            if (((_.productMsgMediaData = s), _.variantInfo != null)) {
              var f;
              ((f = this.get(a)) == null
                ? void 0
                : f.productCollection.get(p.id)) == null &&
                (_.displayPriority = 1);
            }
            var g = [_];
            return t.prototype.add.call(
              this,
              { id: a, afterCursor: void 0, _products: g, _msgs: g },
              { merge: !0 },
            );
          }),
          (a.findProduct = function (t) {
            var e = t.canLogQpl,
              n = t.catalogWid,
              o = t.productId,
              a = t.productMsgMediaData,
              i = t.shouldFetchComplianceFields,
              l = this.convertCatalogIdForLidMigration(n);
            return r("isStringNullOrEmpty")(o)
              ? Promise.reject(
                  r("err")(
                    "CatalogCollection:findProduct Received productId type " +
                      (o === void 0 ? "undefined" : "null"),
                  ),
                )
              : this._queryProduct({
                  catalogWid: l,
                  productId: o,
                  productMsgMediaData: a,
                  shouldFetchComplianceFields: i,
                  canLogQpl: e,
                });
          }),
          (a._queryCatalog = async function (n) {
            var t = n.afterCursor,
              a = n.allowShopSource,
              i = n.catalog,
              l = n.catalogWid,
              s = n.checkmarkCollectionId,
              u = n.markerId,
              c = i ? i.index : 0;
            u &&
              o("WAWebQplFlowWrapper").QPL.markerPoint(
                u,
                "datasource_catalog_start",
              );
            try {
              var d = o("WAWebCatalogVariantHelper").FULL_VARIANT_INFO_FIELDS,
                m = o("WAWebCatalogVariantHelper").VARIANT_THUMBNAIL_IMAGE_SIZE,
                p = o("WAWebCatalogVariantHelper").VARIANT_THUMBNAIL_IMAGE_SIZE,
                _ = await o("WAWebBizProductCatalogAction").queryCatalog(
                  l,
                  t,
                  10,
                  void 0,
                  void 0,
                  s,
                  a,
                  d,
                  m,
                  p,
                );
              if (
                (u &&
                  o("WAWebQplFlowWrapper").QPL.markerPoint(
                    u,
                    "datasource_catalog_end",
                  ),
                this.hasSelfCatalogErrorEmailMask() &&
                  this.shouldUseCatalogErrorEmailMask(l) &&
                  this.resetSelfCatalogErrorEmailMask(),
                !_.data.length)
              )
                return { id: l, afterCursor: "" };
              var f = [];
              _.data.forEach(function (e) {
                e.image_cdn_urls &&
                  f.push(
                    o("WAWebBizProductCatalogBridge").mapProductResponseToModel(
                      e,
                      l,
                    ),
                  );
              });
              var g = { type: "success", catalog: _ };
              this.trigger("catalog-loaded", g);
              var h = this.get(l);
              return (
                h &&
                  h.catalogId != null &&
                  _.catalog_id != null &&
                  h.catalogId !== _.catalog_id &&
                  this.remove(l),
                {
                  id: l,
                  afterCursor: _.paging.cursors.after,
                  _products: f,
                  catalogId: _.catalog_id,
                  catalogType: _.catalog_type,
                  catalogName: _.catalog_name,
                  fetchedFromServer: !0,
                  index: c + f.length,
                }
              );
            } catch (t) {
              if (
                t instanceof
                  o("WAWebBackendErrors").AdAccountRecoveryRequiredError &&
                this.shouldUseCatalogErrorEmailMask(l)
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
                    Promise.reject(
                      new (o(
                        "WAWebBackendErrors",
                      ).AdAccountRecoveryRequiredEmailMaskEmptyError)(),
                    )
                  );
                this.updateSelfCatalogErrorEmailMask(t.emailMask);
              } else if (
                t instanceof
                  o("WAWebBackendErrors").CatalogIncorrectNonceError &&
                this.shouldUseCatalogErrorEmailMask(l)
              ) {
                var y = { type: "incorrect-nonce" };
                return (this.trigger("catalog-loaded", y), Promise.reject(t));
              } else if (
                (this.hasSelfCatalogErrorEmailMask() &&
                  this.shouldUseCatalogErrorEmailMask(l) &&
                  this.resetSelfCatalogErrorEmailMask(),
                t instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                  t.statusCode === 404)
              ) {
                var C = this.get(l);
                C != null && this.remove(l);
              }
              var b = { type: "error" };
              return (this.trigger("catalog-loaded", b), Promise.reject(t));
            }
          }),
          (a._findImplCommon = function (t, n) {
            var e = this.get(t),
              a = e && !e.stale ? e.afterCursor : void 0,
              i =
                t instanceof r("WAWebWid")
                  ? t
                  : o("WAWebWidFactory").createWid(t.toString());
            return this._queryCatalog({
              afterCursor: a,
              catalog: e,
              catalogWid: i,
              checkmarkCollectionId: void 0,
              markerId: n == null ? void 0 : n.markerId,
            });
          }),
          (a.findCarouselCatalog = async function (n) {
            var e = this.convertCatalogIdForLidMigration(n),
              r = this.get(e);
            r && r.set({ index: 0 });
            var o = await this._queryCatalog({
              afterCursor: void 0,
              allowShopSource: !1,
              catalog: r,
              catalogWid: e,
              checkmarkCollectionId: void 0,
            });
            return (
              r && r.markProductCollectionOld(),
              t.prototype.add.call(this, o, { merge: !0 })
            );
          }),
          (a.findNextProductPage = async function (t, n) {
            var e = this.convertCatalogIdForLidMigration(t);
            n === !0 &&
              o("WAWebProductCatalogLogQplEvents").qplPointCatalogView(
                "datasource_start",
              );
            var r = await this.update(e);
            n === !0 &&
              o("WAWebProductCatalogLogQplEvents").qplPointCatalogView(
                "datasource_end",
              );
            var a = Array.isArray(r) ? r[0] : r;
            return a.productCollection.getProductModels();
          }),
          (a.findCollectionMembership = async function (n, r) {
            var e = this.convertCatalogIdForLidMigration(n),
              o = this.get(e),
              a = o && !o.stale ? o.afterCursor : void 0,
              i = await this._queryCatalog({
                afterCursor: a,
                catalog: o,
                catalogWid: e,
                checkmarkCollectionId: r,
              });
            (t.prototype.add.call(this, i, { merge: !0 }),
              (o = this.get(e)),
              o && (o.stale = !1));
          }),
          (a.removeCatalog = function (t) {
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
          (a.get = function (n) {
            return t.prototype.get.call(
              this,
              this.convertCatalogIdForLidMigration(n),
            );
          }),
          (a.assertGet = function (n) {
            return t.prototype.assertGet.call(
              this,
              this.convertCatalogIdForLidMigration(n),
            );
          }),
          (a.convertCatalogIdForLidMigration = function (t) {
            var e =
              t instanceof r("WAWebWid")
                ? t
                : o("WAWebWidFactory").createWid(t.toString());
            return e;
          }),
          (a.updateSelfCatalogErrorEmailMask = function (t) {
            ((this.selfCatalogErrorEmailMask = t),
              this.trigger("change:selfCatalogErrorEmailMask"));
          }),
          (a.resetSelfCatalogErrorEmailMask = function () {
            this.updateSelfCatalogErrorEmailMask(null);
          }),
          (a.hasSelfCatalogErrorEmailMask = function () {
            return this.selfCatalogErrorEmailMask != null;
          }),
          (a.shouldUseCatalogErrorEmailMask = function (t) {
            return !(t == null || !o("WAWebUserUtils").isMeAccount(t));
          }),
          n
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    u.model = r("WAWebCatalogModel");
    var c = new u();
    l.CatalogCollection = c;
  },
  98,
);
