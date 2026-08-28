__d(
  "AdsImageLegacy",
  [
    "invariant",
    "AdsImageSizeCache",
    "AdsImageValidation",
    "mapObject",
    "mergeDeep",
    "mergeHelpers",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = o("AdsImageSizeCache").getSharedCache(),
      c = (function () {
        function t(n) {
          var o = this;
          ((this.$20 = function (e, t) {
            ((o.width = e), (o.height = t));
          }),
            (this.$21 = function (e, t) {
              ((o.$17 = e), (o.$15 = t));
            }));
          var a = n || {};
          ((this.isAssociatedCreativesInAdgroups =
            a.is_associated_creatives_in_adgroups),
            (this.crops = a.crops || {}),
            (this.variants = a.variants || { data: [] }),
            (this.name = a.name || ""),
            (this.platformLegacyImages = (e || (e = r("mapObject")))(
              a.platformImageObjects || {},
              function (e) {
                return (!e.platform || s(0, 3688), new t(e));
              },
            )),
            (this.$4 = a.hash),
            (this.$18 = a.url),
            (this.$6 = a.url_256),
            (this.$5 = a.url_256_height),
            (this.$7 = a.url_256_width),
            (this.$16 = a.url_128),
            (this.$9 = a.is_spherical_photo),
            (this.$8 = a.imageType),
            (this.$10 = a.key),
            (this.$14 = a.stockImageID),
            this.isStockImage() &&
              ((this.$1 = a.fullSizeHeight),
              (this.$2 = a.fullSizeUrl),
              (this.$3 = a.fullSizeWidth),
              (this.$11 = a.previewHeight),
              (this.$12 = a.previewUrl),
              (this.$13 = a.previewWidth),
              (this.$15 = a.thumbHeight),
              (this.$16 = a.url),
              (this.$17 = a.thumbWidth),
              (this.$6 = a.url),
              (this.$5 = a.thumbHeight),
              (this.$7 = a.thumbWidth),
              (this.getThumbnailWidth() && this.getThumbnailHeight()) ||
                s(0, 3689),
              (this.getPreviewUrl() &&
                this.getPreviewWidth() &&
                this.getPreviewHeight()) ||
                s(0, 3690)),
            (this.height = a.height),
            (this.width = a.width),
            (this.renderedHeight = a.renderedHeight),
            (this.renderedWidth = a.renderedWidth),
            (this.id = a.id),
            (this.business_object_tags = a.business_object_tags),
            (this.created_time = a.created_time),
            (this.thumbnail_id = a.thumbnail_id),
            (this.validationMap = a.validationMap || {}),
            this.$19());
        }
        var n = t.prototype;
        return (
          (n.toJSON = function () {
            return {
              isAssociatedCreativesInAdgroups:
                this.isAssociatedCreativesInAdgroups,
              crops: this.crops,
              hash: this.$4,
              height: this.getHeight(),
              imageType: this.$8 || null,
              key: this.$10 || null,
              name: this.name,
              platformImageObjects: (e || (e = r("mapObject")))(
                this.platformLegacyImages,
                function (e) {
                  return e.toJSON();
                },
              ),
              previewHeight: this.getPreviewHeight(),
              previewUrl: this.getPreviewUrl(),
              previewWidth: this.getPreviewWidth(),
              stockImageID: this.$14 || null,
              thumbHeight: this.getThumbnailHeight(),
              thumbWidth: this.getThumbnailWidth(),
              url: this.isStockImage() ? this.$2 : this.$18 ? this.$18 : null,
              url_128: this.$16 || null,
              url_256: this.$6 || null,
              validationMap: this.validationMap || null,
              width: this.getWidth(),
              id: this.id,
              business_object_tags: this.business_object_tags,
              created_time: this.created_time,
              renderedHeight: this.renderedHeight,
              renderedWidth: this.renderedWidth,
              isSphericalPhoto: this.$9,
              variants: this.variants,
              thumbnail_id: this.thumbnail_id,
            };
          }),
          (n.clone = function (n) {
            return new t(
              r("mergeDeep")(
                this.toJSON(),
                n,
                r("mergeHelpers").ArrayStrategies.Clobber,
              ),
            );
          }),
          (n.$19 = function () {
            (this.$18 &&
              !this.hasDimensions() &&
              u.get(this.$18, this.$20, this),
              this.$16 &&
                !this.hasThumbnailDimensions() &&
                u.get(this.$16, this.$21, this));
          }),
          (n.isValidated = function (t) {
            var e = this.getValidationMap();
            return t ? !!e[t] : !!Object.keys(e).length;
          }),
          (n.getValidation = function (t) {
            return (t === void 0 && (t = ""), this.getValidationMap()[t] || {});
          }),
          (n.getValidationMap = function () {
            return this.validationMap;
          }),
          (n.resetValidation = function (t) {
            t
              ? ((this.validationMap = babelHelpers.extends(
                  {},
                  this.validationMap,
                )),
                delete this.validationMap[t])
              : (this.validationMap = {});
          }),
          (n.hasValidationError = function (t) {
            var e = this.getValidation(t);
            return !!e.errorMessage;
          }),
          (n.getValidationError = function (t) {
            var e = this.getValidation(t);
            return this.hasValidationError(t) ? e.errorMessage : null;
          }),
          (n.getCrop = function (t) {
            return this.crops ? this.crops[t] : null;
          }),
          (n.getCrops = function () {
            var e = this,
              t = {};
            return (
              Object.keys(this.crops || {}).forEach(function (n) {
                var r = e.getCrop(n);
                r && (t[n] = r);
              }),
              t
            );
          }),
          (n.getAPICrops = function () {
            var e = this.getCrops();
            return Object.keys(e).length ? e : null;
          }),
          (n.getFirstSerializedCrops = function () {
            var e = this.getCrops(),
              t = Object.keys(e)[0];
            return !e || !e[t] ? "" : e[t].join();
          }),
          (n.hasDimensions = function () {
            return this.width !== void 0 && this.height !== void 0;
          }),
          (n.hasThumbnailDimensions = function () {
            return this.$17 !== void 0 && this.$15 !== void 0;
          }),
          (n.getWidth = function () {
            return (
              this.getFullSizeWidth() || this.getPreviewWidth() || this.width
            );
          }),
          (n.getHeight = function () {
            return (
              this.getFullSizeHeight() || this.getPreviewHeight() || this.height
            );
          }),
          (n.getIsSphericalPhoto = function () {
            return !!this.$9;
          }),
          (n.setDimensionsReadyCallback = function (t) {
            t != null &&
              (this.hasDimensions()
                ? window.setTimeout(t, 0)
                : this.$18
                  ? u.get(this.$18, t)
                  : (this.$20(0, 0), this.$21(0, 0), window.setTimeout(t, 0)));
          }),
          (n.validate = function (t, n) {
            r("AdsImageValidation").validate(this, t, n);
          }),
          (n.validateNow = function (t) {
            r("AdsImageValidation").validateNow(this, t);
          }),
          (n.getName = function () {
            return this.name;
          }),
          (n.getUrl = function () {
            return this.$18;
          }),
          (n.getPreviewUrl = function () {
            return this.$12;
          }),
          (n.getPreviewWidth = function () {
            return this.$13;
          }),
          (n.getPreviewHeight = function () {
            return this.$11;
          }),
          (n.getFullSizeUrl = function () {
            return this.$2;
          }),
          (n.setFullSizeUrl = function (t) {
            this.$2 = t;
          }),
          (n.getFullSizeWidth = function () {
            return this.$3;
          }),
          (n.getFullSizeHeight = function () {
            return this.$1;
          }),
          (n.hasFullSizeDimensions = function () {
            return !!(this.getFullSizeWidth() && this.getFullSizeHeight());
          }),
          (n.getAdAccountHash = function () {
            return this.$4;
          }),
          (n.equals = function (t) {
            return this.getUniqueIdentifier() === t.getUniqueIdentifier();
          }),
          (n.equalsWithCrops = function (t) {
            var e = this.equals(t),
              n = !1;
            return (
              e &&
                (n =
                  this.getFirstSerializedCrops() ===
                  t.getFirstSerializedCrops()),
              e && n
            );
          }),
          (n.hasKey = function () {
            return this.$10 != null;
          }),
          (n.getUniqueIdentifier = function () {
            if (this.isStockImage())
              return r("nullthrows")(this.getStockImageID());
            if (this.hasKey()) return r("nullthrows")(this.$10);
            var e = this.getHashOrUrl();
            return e || "";
          }),
          (n.getHashOrUrl = function () {
            return this.getAdAccountHash() || this.getUrl();
          }),
          (n.isStockImage = function () {
            return !!this.getStockImageID();
          }),
          (n.getStockImageID = function () {
            return this.$14;
          }),
          (n.getImageType = function () {
            return this.$8;
          }),
          (n.getThumbnailUrl = function () {
            return this.$16;
          }),
          (n.getThumbnailHeight = function () {
            return this.$15;
          }),
          (n.getThumbnailWidth = function () {
            return this.$17;
          }),
          (n.getHighResThumbnailUrl = function () {
            return this.$6;
          }),
          (n.getHighResThumbnailHeight = function () {
            return this.$5;
          }),
          (n.getHighResThumbnailWidth = function () {
            return this.$7;
          }),
          (n.getID = function () {
            return this.id;
          }),
          (n.getBusinessTags = function () {
            return this.business_object_tags;
          }),
          (n.getCreatedTime = function () {
            return this.created_time;
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
