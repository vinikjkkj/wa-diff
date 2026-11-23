__d(
  "WAWebProductCollCollection",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebBizProductCatalogBridge",
    "WAWebBusinessProfileCollection",
    "WAWebCatalogVariantHelper",
    "WAWebProductCollModel",
    "WAWebQplFlowWrapper",
    "WAWebQueryProductCollections",
    "WAWebQueryProductSingleCollection",
    "WAWebSocketModel",
    "WAWebStaleBaseCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 100,
      c = 10;
    function d(e) {
      var t = {
        id: e.id,
        name: e.name,
        reviewStatus: e.reviewStatus,
        totalItemsCount: e.totalItemsCount,
        canAppeal: e.canAppeal,
        commerceUrl: e.commerceUrl,
        rejectReason: e.rejectReason,
      };
      return t;
    }
    var m = (function (t) {
      function n() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e.afterCursor = ""),
          (e.$ProductCollCollection$p_1 = !1),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.add = function (n, r) {
          return (
            !this.$ProductCollCollection$p_1 &&
              o("WAWebABProps").getABPropConfigValue("web_memlab_fixes_3") &&
              ((this.$ProductCollCollection$p_1 = !0),
              this.stopListening(
                o("WAWebSocketModel").Socket,
                "change:stream",
              )),
            t.prototype.add.call(this, n, r)
          );
        }),
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
              (m = o("WAWebCatalogVariantHelper").VARIANT_THUMBNAIL_IMAGE_SIZE),
              (p = o(
                "WAWebCatalogVariantHelper",
              ).VARIANT_THUMBNAIL_IMAGE_SIZE));
            var f = await r("WAWebQueryProductCollections")({
              catalogWid: n,
              afterCursor: this.afterCursor,
              limit: c,
              productsCount: a,
              width: u,
              height: u,
              variantInfoFields: s,
              variantThumbnailHeight: m,
              variantThumbnailWidth: p,
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
        (a.findCollectionProducts = async function (t) {
          var e = t.catalogWid,
            n = t.collectionId,
            a = t.forCatalogManager,
            i = t.markerId,
            l = this.get(n),
            m = l ? l.afterCursor : void 0;
          i && o("WAWebQplFlowWrapper").QPL.markerPoint(i, "datasource_start");
          try {
            var p,
              _,
              f,
              g = await o(
                "WAWebBusinessProfileCollection",
              ).BusinessProfileCollection.find(e);
            o("WAWebCatalogVariantHelper").shouldRequestVariantInfo(g) &&
              ((p = o("WAWebCatalogVariantHelper").FULL_VARIANT_INFO_FIELDS),
              (_ = o("WAWebCatalogVariantHelper").VARIANT_THUMBNAIL_IMAGE_SIZE),
              (f = o(
                "WAWebCatalogVariantHelper",
              ).VARIANT_THUMBNAIL_IMAGE_SIZE));
            var h = await r("WAWebQueryProductSingleCollection")({
              catalogWid: e,
              collectionId: n,
              afterCursor: m,
              limit: c,
              width: u,
              height: u,
              variantInfoFields: p,
              variantThumbnailHeight: _,
              variantThumbnailWidth: f,
            });
            (i && o("WAWebQplFlowWrapper").QPL.markerPoint(i, "datasource_end"),
              h.collections.length === 1 &&
                (this.add(h.collections.map(d), { merge: !0 }),
                (l = this.get(n)),
                l &&
                  (l.addProducts(
                    h.collections[0].products.map(function (t) {
                      return o(
                        "WAWebBizProductCatalogBridge",
                      ).mapProductResponseToModel(t, e);
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
        }),
        n
      );
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    ((m.model = r("WAWebProductCollModel")), (l.ProductCollCollection = m));
  },
  98,
);
