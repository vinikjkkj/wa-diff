__d(
  "WAWebProductModel",
  [
    "WAWebBaseModel",
    "WAWebFileUtils",
    "WAWebMediaData",
    "WAWebMediaTypes",
    "WAWebProductImageCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 0,
      s = 4503599627370496,
      u = 10,
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.old = o("WAWebBaseModel").session(!1)),
            (t.checkmark = o("WAWebBaseModel").session(!1)),
            (t.id = o("WAWebBaseModel").prop()),
            (t.isHidden = o("WAWebBaseModel").prop()),
            (t.catalogWid = o("WAWebBaseModel").prop()),
            (t.url = o("WAWebBaseModel").prop()),
            (t.signedShimmedUrl = o("WAWebBaseModel").prop()),
            (t.name = o("WAWebBaseModel").prop()),
            (t.description = o("WAWebBaseModel").prop()),
            (t.availability = o("WAWebBaseModel").prop()),
            (t.maxAvailable = o("WAWebBaseModel").prop()),
            (t.reviewStatus = o("WAWebBaseModel").prop()),
            (t.isSanctioned = o("WAWebBaseModel").prop()),
            (t.canAppeal = o("WAWebBaseModel").prop()),
            (t.currency = o("WAWebBaseModel").prop()),
            (t.priceAmount1000 = o("WAWebBaseModel").prop()),
            (t.salePriceAmount1000 = o("WAWebBaseModel").prop()),
            (t.salePriceStartDate = o("WAWebBaseModel").prop()),
            (t.salePriceEndDate = o("WAWebBaseModel").prop()),
            (t.retailerId = o("WAWebBaseModel").prop()),
            (t.productImageCollection = o("WAWebBaseModel").session()),
            (t.imageCount = o("WAWebBaseModel").prop()),
            (t.displayPriority = o("WAWebBaseModel").prop()),
            (t.videos = o("WAWebBaseModel").prop()),
            (t.variantInfo = o("WAWebBaseModel").prop()),
            (t.additionalImageCdnUrl = o("WAWebBaseModel").prop()),
            (t.additionalImageHashes = o("WAWebBaseModel").prop()),
            (t.imageCdnUrl = o("WAWebBaseModel").prop()),
            (t.imageHash = o("WAWebBaseModel").prop()),
            (t.complianceInfo = o("WAWebBaseModel").prop()),
            (t.importerInformationExempt = o("WAWebBaseModel").prop()),
            (t.productMsgMediaData = o("WAWebBaseModel").session()),
            (t.fetchedFromServer = o("WAWebBaseModel").session()),
            (t.t = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.initialize = function () {
            var t = this;
            (e.prototype.initialize.call(this),
              (this.productImageCollection = new (o(
                "WAWebProductImageCollection",
              ).ProductImageCollection)()),
              this.listenTo(this, "change:imageCdnUrl", function () {
                return t.triggerMainImageUpdate();
              }),
              this.initImageUpdate());
          }),
          (n.triggerAdditionalImageUpdate = function () {
            var e,
              t = this,
              n,
              r = 0;
            ((e = this.additionalImageCdnUrl) == null ||
              e.forEach(function (e, n) {
                (t.productImageCollection.gadd(
                  {
                    id: "_" + (n + 1),
                    mediaUrl: e,
                    fetchedFromServer: t.fetchedFromServer,
                    old: !1,
                  },
                  { merge: !0 },
                ),
                  (r = n + 1));
              }),
              (n = this.videos) == null ||
                n.forEach(function (e, n) {
                  (t.productImageCollection.gadd(
                    {
                      id: "_" + (n + r + 1),
                      mediaUrl: e.thumbnail_url,
                      fetchedFromServer: t.fetchedFromServer,
                      old: !1,
                      videoUrl: e.original_video_url,
                    },
                    { merge: !0 },
                  ),
                    (r += n + 1));
                }),
              this.productImageCollection
                .filter(function (e, t) {
                  return t > r;
                })
                .forEach(function (e) {
                  return e.markOld();
                }));
          }),
          (n.triggerMainImageUpdate = function () {
            if (this.imageCdnUrl != null && this.imageCdnUrl !== "")
              this.productImageCollection.gadd(
                {
                  id: "_0",
                  mediaUrl: this.imageCdnUrl,
                  fetchedFromServer: this.fetchedFromServer,
                  old: !1,
                },
                { merge: !0 },
              );
            else {
              var e;
              (e = this.productImageCollection.get("_0")) == null ||
                e.markOld();
            }
          }),
          (n.initImageUpdate = function () {
            if (!this.fetchedFromServer && this.productMsgMediaData) {
              for (var e = 0; e < this.imageCount; e++)
                this.productImageCollection.gadd(
                  {
                    id: "_" + e,
                    type: "product",
                    mediaData: new (r("WAWebMediaData"))({
                      mediaStage: o("WAWebMediaTypes").MediaDataStage.PREPARING,
                    }),
                    fetchedFromServer: this.fetchedFromServer,
                    old: !1,
                  },
                  { merge: !0 },
                );
              return;
            }
            this.triggerMainImageUpdate();
          }),
          (n.markOld = function () {
            this.old = !0;
          }),
          (n.lazyloadProductImageCollection = function () {
            return (
              this.triggerAdditionalImageUpdate(),
              this.productImageCollection
            );
          }),
          (n.getProductImageCollectionCount = function () {
            return this.productImageCollection.length;
          }),
          (n.getProductImageCollectionHead = function () {
            return this.productImageCollection.head();
          }),
          (n.getHeadImageFile = function () {
            var e,
              t = this.name,
              n = this.productImageCollection,
              r = n.head();
            if (r) {
              var a,
                i = (e = r.mediaData) == null ? void 0 : e.mediaBlob;
              if (
                (i instanceof Blob ? (a = i) : (a = i.getBlob()), a != null)
              ) {
                var l = o("WAWebFileUtils").createFile([a], t + ".jpg", {
                  type: "image/jpeg",
                });
                return l;
              }
            }
          }),
          (n.evictImagesFromCache = function () {
            this.productImageCollection.forEach(function (e) {
              return e.evictFromCache();
            });
          }),
          (n.getPreviewImage = function () {
            return this.productImageCollection.head();
          }),
          (n.getCollection = function () {
            return this.collection;
          }),
          (n.setIsHidden = function (t) {
            this.isHidden = t;
          }),
          t
        );
      })(o("WAWebBaseModel").BaseModel);
    c.Proxy = "product";
    var d = o("WAWebBaseModel").defineModel(c);
    ((l.MIN_PRICE = e),
      (l.MAX_PRICE = s),
      (l.MAX_PRODUCT_IMAGES = u),
      (l.Product = d));
  },
  98,
);
