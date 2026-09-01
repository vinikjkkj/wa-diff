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
    "asyncToGeneratorRuntime",
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
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.afterCursor = ""),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.findCollectionsList = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n, a, i) {
                var l = this;
                i &&
                  o("WAWebQplFlowWrapper").QPL.markerPoint(
                    i,
                    "datasource_collections_start",
                  );
                try {
                  var s,
                    m,
                    p,
                    _ = yield o(
                      "WAWebBusinessProfileCollection",
                    ).BusinessProfileCollection.find(t);
                  o("WAWebCatalogVariantHelper").shouldRequestVariantInfo(_) &&
                    ((s = o(
                      "WAWebCatalogVariantHelper",
                    ).FULL_VARIANT_INFO_FIELDS),
                    (m = o(
                      "WAWebCatalogVariantHelper",
                    ).VARIANT_THUMBNAIL_IMAGE_SIZE),
                    (p = o(
                      "WAWebCatalogVariantHelper",
                    ).VARIANT_THUMBNAIL_IMAGE_SIZE));
                  var f = yield o(
                    "WAWebBusinessDirectConnectionBridge",
                  ).attemptWithDirectConnectionRetry(t, function (e) {
                    return r("WAWebQueryProductCollections")({
                      catalogWid: t,
                      afterCursor: l.afterCursor,
                      limit: c,
                      productsCount: n,
                      width: u,
                      height: u,
                      directConnectionEncryptedInfo: e,
                      variantInfoFields: s,
                      variantThumbnailHeight: m,
                      variantThumbnailWidth: p,
                    });
                  });
                  (i &&
                    o("WAWebQplFlowWrapper").QPL.markerPoint(
                      i,
                      "datasource_collections_end",
                    ),
                    (this.afterCursor = f.afterCursor),
                    this.add(f.collections.map(d), { merge: !0 }),
                    f.collections.forEach(function (e) {
                      var n = l.get(e.id);
                      n &&
                        n.addProducts(
                          e.products.map(function (e) {
                            return o(
                              "WAWebBizProductCatalogBridge",
                            ).mapProductResponseToModel(e, t);
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
              },
            );
            function a(e, n, r, o) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.getCollectionModels = function (t) {
            var e = this.toArray();
            return t
              ? e
              : e.filter(function (e) {
                  return !e.isHidden && e.reviewStatus === "APPROVED";
                });
          }),
          (i.findCollectionProducts = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.catalogWid,
                  n = e.collectionId,
                  a = e.forCatalogManager,
                  i = e.markerId,
                  l = this.get(n),
                  m = l ? l.afterCursor : void 0;
                i &&
                  o("WAWebQplFlowWrapper").QPL.markerPoint(
                    i,
                    "datasource_start",
                  );
                try {
                  var p,
                    _,
                    f,
                    g = yield o(
                      "WAWebBusinessProfileCollection",
                    ).BusinessProfileCollection.find(t);
                  o("WAWebCatalogVariantHelper").shouldRequestVariantInfo(g) &&
                    ((p = o(
                      "WAWebCatalogVariantHelper",
                    ).FULL_VARIANT_INFO_FIELDS),
                    (_ = o(
                      "WAWebCatalogVariantHelper",
                    ).VARIANT_THUMBNAIL_IMAGE_SIZE),
                    (f = o(
                      "WAWebCatalogVariantHelper",
                    ).VARIANT_THUMBNAIL_IMAGE_SIZE));
                  var h = yield o(
                    "WAWebBusinessDirectConnectionBridge",
                  ).attemptWithDirectConnectionRetry(t, function (e) {
                    return r("WAWebQueryProductSingleCollection")({
                      catalogWid: t,
                      collectionId: n,
                      afterCursor: m,
                      limit: c,
                      width: u,
                      height: u,
                      directConnectionEncryptedInfo: e,
                      variantInfoFields: p,
                      variantThumbnailHeight: _,
                      variantThumbnailWidth: f,
                    });
                  });
                  (i &&
                    o("WAWebQplFlowWrapper").QPL.markerPoint(
                      i,
                      "datasource_end",
                    ),
                    h.collections.length === 1 &&
                      (this.add(h.collections.map(d), { merge: !0 }),
                      (l = this.get(n)),
                      l &&
                        (l.addProducts(
                          h.collections[0].products.map(function (e) {
                            return o(
                              "WAWebBizProductCatalogBridge",
                            ).mapProductResponseToModel(e, t);
                          }),
                        ),
                        (l.afterCursor = h.afterCursor))));
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
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    ((m.model = r("WAWebProductCollModel")), (l.ProductCollCollection = m));
  },
  98,
);
