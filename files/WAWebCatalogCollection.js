__d(
  "WAWebCatalogCollection",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBizCatalogGatingUtils",
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
          (a._queryCatalog = async function (n, a, i, l, s, u) {
            var t = n ? n.index : 0;
            u &&
              o("WAWebQplFlowWrapper").QPL.markerPoint(
                u,
                "datasource_catalog_start",
              );
            var c, d, m;
            try {
              o(
                "WAWebBizCatalogGatingUtils",
              ).isCatalogVariantsViewingEnabled() &&
                ((c = o("WAWebCatalogVariantHelper").FULL_VARIANT_INFO_FIELDS),
                (d = o(
                  "WAWebCatalogVariantHelper",
                ).VARIANT_THUMBNAIL_IMAGE_SIZE),
                (m = o(
                  "WAWebCatalogVariantHelper",
                ).VARIANT_THUMBNAIL_IMAGE_SIZE));
              var p = await o("WAWebBizProductCatalogAction").queryCatalog(
                a,
                i,
                10,
                void 0,
                void 0,
                l,
                s,
                c,
                d,
                m,
              );
              if (
                (u &&
                  o("WAWebQplFlowWrapper").QPL.markerPoint(
                    u,
                    "datasource_catalog_end",
                  ),
                this.hasSelfCatalogErrorEmailMask() &&
                  this.shouldUseCatalogErrorEmailMask(a) &&
                  this.resetSelfCatalogErrorEmailMask(),
                !p.data.length)
              )
                return { id: a, afterCursor: "" };
              var _ = [];
              p.data.forEach(function (e) {
                e.image_cdn_urls &&
                  _.push(
                    o("WAWebBizProductCatalogBridge").mapProductResponseToModel(
                      e,
                      a,
                    ),
                  );
              });
              var f = { type: "success", catalog: p };
              this.trigger("catalog-loaded", f);
              var g = this.get(a);
              return (
                g &&
                  g.catalogId != null &&
                  p.catalog_id != null &&
                  g.catalogId !== p.catalog_id &&
                  o(
                    "WAWebBizCatalogGatingUtils",
                  ).isCatalogVariantsViewingEnabled() &&
                  this.remove(a),
                {
                  id: a,
                  afterCursor: p.paging.cursors.after,
                  _products: _,
                  catalogId: p.catalog_id,
                  catalogType: p.catalog_type,
                  catalogName: p.catalog_name,
                  fetchedFromServer: !0,
                  index: t + _.length,
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
                this.shouldUseCatalogErrorEmailMask(a)
              ) {
                var h = { type: "incorrect-nonce" };
                return (this.trigger("catalog-loaded", h), Promise.reject(t));
              } else if (
                (this.hasSelfCatalogErrorEmailMask() &&
                  this.shouldUseCatalogErrorEmailMask(a) &&
                  this.resetSelfCatalogErrorEmailMask(),
                t instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                  t.statusCode === 404)
              ) {
                var y = this.get(a);
                y != null &&
                  o(
                    "WAWebBizCatalogGatingUtils",
                  ).isCatalogVariantsViewingEnabled() &&
                  this.remove(a);
              }
              var C = { type: "error" };
              return (this.trigger("catalog-loaded", C), Promise.reject(t));
            }
          }),
          (a._findImplCommon = function (t, n) {
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
          (a.findCarouselCatalog = async function (n) {
            var e = this.convertCatalogIdForLidMigration(n),
              r = this.get(e);
            r && r.set({ index: 0 });
            var o = await this._queryCatalog(r, e, void 0, void 0, !1);
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
              i = await this._queryCatalog(o, e, a, r);
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
            return !(t == null || !o("WAWebUserPrefsMeUser").isMeAccount(t));
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
