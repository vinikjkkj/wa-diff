__d(
  "WAWebProductCollCollection",
  [
    "WALogger",
    "WAWebBizProductCatalogBridge",
    "WAWebBusinessDirectConnectionBridge",
    "WAWebBusinessProfileCollection",
    "WAWebCatalogVariantHelper",
    "WAWebProductCollModel",
    "WAWebQplFlowWrapper",
    "WAWebQueryProductCollections",
    "WAWebQueryProductSingleCollection",
    "WAWebStaleBaseCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 100,
      c = 10,
      d = function (t) {
        var e = {
          id: t.id,
          name: t.name,
          reviewStatus: t.reviewStatus,
          totalItemsCount: t.totalItemsCount,
          canAppeal: t.canAppeal,
          commerceUrl: t.commerceUrl,
          rejectReason: t.rejectReason,
        };
        return e;
      },
      m = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.afterCursor = ""),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.findCollectionsList = async function (n, a, i, l) {
            var t = this;
            l &&
              o("WAWebQplFlowWrapper").QPL.markerPoint(
                l,
                "datasource_collections_start",
              );
            try {
              var s,
                m,
                p,
                _ = await o(
                  "WAWebBusinessProfileCollection",
                ).BusinessProfileCollection.find(n);
              o("WAWebCatalogVariantHelper").shouldRequestVariantInfo(_) &&
                ((s = o("WAWebCatalogVariantHelper").FULL_VARIANT_INFO_FIELDS),
                (m = o(
                  "WAWebCatalogVariantHelper",
                ).VARIANT_THUMBNAIL_IMAGE_SIZE),
                (p = o(
                  "WAWebCatalogVariantHelper",
                ).VARIANT_THUMBNAIL_IMAGE_SIZE));
              var f = await o(
                "WAWebBusinessDirectConnectionBridge",
              ).attemptWithDirectConnectionRetry(n, function (e) {
                return r("WAWebQueryProductCollections")({
                  catalogWid: n,
                  afterCursor: t.afterCursor,
                  limit: c,
                  productsCount: a,
                  width: u,
                  height: u,
                  directConnectionEncryptedInfo: e,
                  variantInfoFields: s,
                  variantThumbnailHeight: m,
                  variantThumbnailWidth: p,
                });
              });
              (l &&
                o("WAWebQplFlowWrapper").QPL.markerPoint(
                  l,
                  "datasource_collections_end",
                ),
                (this.afterCursor = f.afterCursor),
                this.add(f.collections.map(d), { merge: !0 }),
                f.collections.forEach(function (e) {
                  var r = t.get(e.id);
                  r &&
                    r.addProducts(
                      e.products.map(function (e) {
                        return o(
                          "WAWebBizProductCatalogBridge",
                        ).mapProductResponseToModel(e, n);
                      }),
                    );
                }),
                this.trigger("change"));
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed findCollectionsList, error: ",
                        "",
                      ])),
                    t,
                  )
                  .verbose()
                  .sendLogs("Find collections list failed"),
                t
              );
            }
          }),
          (a.getCollectionModels = function (t) {
            var e = this.toArray();
            return t
              ? e
              : e.filter(function (e) {
                  return !e.isHidden && e.reviewStatus === "APPROVED";
                });
          }),
          (a.findCollectionProducts = async function (t, n, a, i) {
            var e = this.get(n),
              l = e ? e.afterCursor : void 0;
            i &&
              o("WAWebQplFlowWrapper").QPL.markerPoint(i, "datasource_start");
            try {
              var m,
                p,
                _,
                f = await o(
                  "WAWebBusinessProfileCollection",
                ).BusinessProfileCollection.find(t);
              o("WAWebCatalogVariantHelper").shouldRequestVariantInfo(f) &&
                ((m = o("WAWebCatalogVariantHelper").FULL_VARIANT_INFO_FIELDS),
                (p = o(
                  "WAWebCatalogVariantHelper",
                ).VARIANT_THUMBNAIL_IMAGE_SIZE),
                (_ = o(
                  "WAWebCatalogVariantHelper",
                ).VARIANT_THUMBNAIL_IMAGE_SIZE));
              var g = await o(
                "WAWebBusinessDirectConnectionBridge",
              ).attemptWithDirectConnectionRetry(t, function (e) {
                return r("WAWebQueryProductSingleCollection")({
                  catalogWid: t,
                  collectionId: n,
                  afterCursor: l,
                  limit: c,
                  width: u,
                  height: u,
                  directConnectionEncryptedInfo: e,
                  variantInfoFields: m,
                  variantThumbnailHeight: p,
                  variantThumbnailWidth: _,
                });
              });
              (i &&
                o("WAWebQplFlowWrapper").QPL.markerPoint(i, "datasource_end"),
                g.collections.length === 1 &&
                  (this.add(g.collections.map(d), { merge: !0 }),
                  (e = this.get(n)),
                  e &&
                    (e.addProducts(
                      g.collections[0].products.map(function (e) {
                        return o(
                          "WAWebBizProductCatalogBridge",
                        ).mapProductResponseToModel(e, t);
                      }),
                    ),
                    (e.afterCursor = g.afterCursor))));
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed findCollectionProducts, error: ",
                        "",
                      ])),
                    e,
                  )
                  .verbose()
                  .sendLogs("Find collection products failed"),
                e
              );
            }
          }),
          n
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    ((m.model = r("WAWebProductCollModel")), (l.ProductCollCollection = m));
  },
  98,
);
