__d(
  "AdsImageInfoStore",
  [
    "invariant",
    "AdsAccountImageInfoStore",
    "AdsAdgroupSpecUtils",
    "AdsBaseImageInfoStore",
    "AdsDataAtom",
    "AdsExternalImageInfoStore",
    "AdsImageIDClasses",
    "AdsImageIDUtils",
    "AdsImageInfoUtils",
    "AdsImageLegacy",
    "AdsPageImageInfoStore",
    "AdsShutterstockImageInfoStore",
    "AdsSimpleImage",
    "AdsStickerImageInfoStore",
    "ApiAdCreativePlatformCustomizationFields",
    "LoadObject",
    "adsBusinessImageInfoDataSelector",
    "adsCreateStoreThunkSelector",
    "forEachObject",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, o = new Array(n), a = 0; a < n; a++)
            o[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(o)) || this),
            (t.getAdsIntegrityReviewInfoSelector = r(
              "adsCreateStoreThunkSelector",
            )(babelHelpers.assertThisInitialized(t), function (e) {
              return t.getAdsIntegrityReviewInfo(e);
            })),
            (t.getNameSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              function (e) {
                return t.getName(e);
              },
            )),
            (t.getAesRatingSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              t.getAesRating.bind(babelHelpers.assertThisInitialized(t)),
            )),
            (t.getAesBalanceElementsSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              t.getAesBalanceElements.bind(
                babelHelpers.assertThisInitialized(t),
              ),
            )),
            (t.getAesRotSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              t.getAesRot.bind(babelHelpers.assertThisInitialized(t)),
            )),
            (t.getFullSizeURLSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              t.getFullSizeURL.bind(babelHelpers.assertThisInitialized(t)),
            )),
            (t.getFullSizeSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              t.getFullSize.bind(babelHelpers.assertThisInitialized(t)),
            )),
            (t.getPreviewSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              t.getPreview.bind(babelHelpers.assertThisInitialized(t)),
            )),
            (t.getThumbnailSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              t.getThumbnail.bind(babelHelpers.assertThisInitialized(t)),
            )),
            (t.getThumbnailURLSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              t.getThumbnailURL.bind(babelHelpers.assertThisInitialized(t)),
            )),
            (t.getHighResThumbnailSelector = r("adsCreateStoreThunkSelector")(
              babelHelpers.assertThisInitialized(t),
              t.getHighResThumbnail.bind(babelHelpers.assertThisInitialized(t)),
            )),
            (t.getFullSizeLegacyImageSelector_DEPRECATED = r(
              "adsCreateStoreThunkSelector",
            )(
              babelHelpers.assertThisInitialized(t),
              t.getFullSizeLegacyImage_DEPRECATED.bind(
                babelHelpers.assertThisInitialized(t),
              ),
            )),
            (t.getFullSizeLegacyImageForSingleImageAdSelector_DEPRECATED = r(
              "adsCreateStoreThunkSelector",
            )(
              babelHelpers.assertThisInitialized(t),
              t.getFullSizeLegacyImageForSingleImageAd_DEPRECATED.bind(
                babelHelpers.assertThisInitialized(t),
              ),
            )),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getName = function (t) {
            var e = this.getByQuery(t, o("AdsImageInfoUtils").QueryTypes.NAME);
            return e.hasValue()
              ? r("LoadObject").withValue(e.getValueEnforcing().name, {
                  creatorModuleID: i.id,
                })
              : e;
          }),
          (n.getAdsIntegrityReviewInfo = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.ADS_INTEGRITY_REVIEW_INFO,
            );
            return e.hasValue()
              ? r("LoadObject").withValue(
                  e.getValueEnforcing().ads_integrity_review_info,
                  { creatorModuleID: i.id },
                )
              : e;
          }),
          (n.getAesRating = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.AES_RATING,
            );
            return e.hasValue()
              ? r("LoadObject").withValue(e.getValueEnforcing().aes_rating, {
                  creatorModuleID: i.id,
                })
              : e;
          }),
          (n.getAesBalanceElements = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.AES_BALANCE_ELEMENTS,
            );
            return e.hasValue()
              ? r("LoadObject").withValue(
                  e.getValueEnforcing().aes_balance_elements,
                  { creatorModuleID: i.id },
                )
              : e;
          }),
          (n.getAesRot = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.AES_ROT,
            );
            return e.hasValue()
              ? r("LoadObject").withValue(e.getValueEnforcing().aes_rot, {
                  creatorModuleID: i.id,
                })
              : e;
          }),
          (n.getFullSizeURL = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.FULL_SIZE_URL,
            );
            return !e.hasValue() || e.isUpdating()
              ? e.hasValue()
                ? r("LoadObject").updating({ creatorModuleID: i.id })
                : e
              : r("LoadObject").withValue(e.getValueEnforcing().url, {
                  creatorModuleID: i.id,
                });
          }),
          (n.getFullSize = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.FULL_SIZE,
            );
            if (!e.hasValue() || e.isUpdating())
              return e.hasValue()
                ? r("LoadObject").updating({ creatorModuleID: i.id })
                : e;
            var n = e.getValueEnforcing().toJS(),
              a = n.height,
              l = n.url,
              u = n.width;
            (l && a && u) || s(0, 1783);
            var c = this.getIsSphericalPhoto(t),
              d = c.hasValue() && c.getValueEnforcing();
            return r("LoadObject").withValue(
              new (r("AdsSimpleImage"))({
                height: a,
                url: l,
                width: u,
                isSphericalPhoto: d,
              }),
              { creatorModuleID: i.id },
            );
          }),
          (n.getPreview = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.PREVIEW,
            );
            if (!e.hasValue()) return e;
            var n = e.getValueEnforcing().toJS(),
              a = n.height,
              l = n.url,
              u = n.width;
            return (
              (l && a && u) || s(0, 1783),
              r("LoadObject").withValue(
                new (r("AdsSimpleImage"))({ height: a, url: l, width: u }),
                { creatorModuleID: i.id },
              )
            );
          }),
          (n.getThumbnail = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.THUMBNAIL,
            );
            if (!e.hasValue()) return e;
            var n = e.getValueEnforcing().toJS(),
              a = n.displayHeight,
              l = n.displayWidth,
              u = n.realHeight,
              c = n.realWidth,
              d = n.url;
            return (
              (d && c && u && l && a) || s(0, 1784),
              r("LoadObject").withValue(
                {
                  displayImage: new (r("AdsSimpleImage"))({
                    height: a,
                    url: d,
                    width: l,
                  }),
                  realImage: new (r("AdsSimpleImage"))({
                    height: u,
                    url: d,
                    width: c,
                  }),
                },
                { creatorModuleID: i.id },
              )
            );
          }),
          (n.getThumbnailURL = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.THUMBNAIL_URL,
            );
            return e.map(function (e) {
              return new (r("AdsSimpleImage"))({ url: e.url });
            });
          }),
          (n.getHighResThumbnail = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.HIGH_RES_THUMBNAIL,
            );
            if (!e.hasValue()) return e;
            var n = e.getValueEnforcing().toJS(),
              a = n.displayHeight,
              l = n.displayWidth,
              u = n.realHeight,
              c = n.realWidth,
              d = n.url;
            return (
              (d && c && u && l && a) || s(0, 1785),
              r("LoadObject").withValue(
                {
                  displayImage: new (r("AdsSimpleImage"))({
                    height: a,
                    url: d,
                    width: l,
                  }),
                  realImage: new (r("AdsSimpleImage"))({
                    height: u,
                    url: d,
                    width: c,
                  }),
                },
                { creatorModuleID: i.id },
              )
            );
          }),
          (n.getHighResThumbnailURL = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.HIGH_RES_THUMBNAIL_URL,
            );
            return e.map(function (e) {
              return new (r("AdsSimpleImage"))({ url: e.url });
            });
          }),
          (n.getIsSphericalPhoto = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.IS_SPHERICAL_PHOTO,
            );
            return e.map(function (e) {
              return e.isSphericalPhoto;
            });
          }),
          (n.getVariants = function (t) {
            var e = this.getByQuery(
              t,
              o("AdsImageInfoUtils").QueryTypes.VARIANTS,
            );
            return e.map(function (e) {
              return e.variants;
            });
          }),
          (n.getFullSizeLegacyImage_DEPRECATED = function (t, n, r) {
            return t instanceof o("AdsImageIDClasses").AdsAccountImageID
              ? this.$AdsImageInfoStore$p_1(t, n, r)
              : t instanceof o("AdsImageIDClasses").AdsShutterstockImageID
                ? this.$AdsImageInfoStore$p_2(t, n, r)
                : t instanceof o("AdsImageIDClasses").AdsBusinessImageID
                  ? this.$AdsImageInfoStore$p_3(t, n, r)
                  : t instanceof o("AdsImageIDClasses").AdsStickerImageID
                    ? this.$AdsImageInfoStore$p_4(t, n, r)
                    : (t instanceof o("AdsImageIDClasses").AdsExternalImageID ||
                        s(0, 1786),
                      this.$AdsImageInfoStore$p_5(t, n, r));
          }),
          (n.getFullSizeLegacyImageForSingleImageAd_DEPRECATED = function (
            t,
            n,
            a,
          ) {
            var e,
              l = this;
            a === void 0 && (a = null);
            var s = t.toJS(),
              u = a
                ? o("AdsImageIDUtils").getSingleImageIDWithPlugin(t, n, a)
                : o("AdsImageIDUtils").getSingleImageID(t, n);
            if (!u) return r("LoadObject").empty({ creatorModuleID: i.id });
            var c = null,
              d =
                s == null || (e = s.creative) == null
                  ? void 0
                  : e.object_story_spec;
            if (d && d.link_data) {
              var m;
              c = (m = d.link_data) == null ? void 0 : m.image_crops;
            }
            if (!c) {
              var p;
              c =
                s == null || (p = s.creative) == null ? void 0 : p.image_crops;
            }
            if (!c && d && d.template_data) {
              var _;
              c = (_ = d.template_data) == null ? void 0 : _.image_crops;
            }
            var f = {};
            return (
              r("forEachObject")(
                r("ApiAdCreativePlatformCustomizationFields"),
                function (e) {
                  var r,
                    a = o("AdsImageIDUtils").getPlatformImageID(t, n, e);
                  if (a) {
                    var i =
                        (r = o("AdsAdgroupSpecUtils").getPlatformCustomizations(
                          t,
                          e,
                        )) == null
                          ? void 0
                          : r.image_crops,
                      s = l.getFullSizeLegacyImage_DEPRECATED(a, i);
                    s.hasValue() && (f[e] = s.getValueEnforcing().toJSON());
                  }
                },
              ),
              this.getFullSizeLegacyImage_DEPRECATED(u, c, f)
            );
          }),
          (n.__getStores = function () {
            return [
              r("AdsAccountImageInfoStore"),
              r("AdsExternalImageInfoStore"),
              r("AdsPageImageInfoStore"),
              r("AdsShutterstockImageInfoStore"),
            ];
          }),
          (n.__getData = function (t) {
            var e = o("AdsBaseImageInfoStore")._getImageInfoQueryFromCacheKey(
                t,
              ),
              n = e.imageID;
            if (n instanceof o("AdsImageIDClasses").AdsAccountImageID)
              return r("AdsAccountImageInfoStore").get(t);
            if (n instanceof o("AdsImageIDClasses").AdsShutterstockImageID)
              return r("AdsShutterstockImageInfoStore").get(t);
            if (n instanceof o("AdsImageIDClasses").AdsBusinessImageID)
              return r("adsBusinessImageInfoDataSelector")({ key: t });
            if (n instanceof o("AdsImageIDClasses").AdsExternalImageID)
              return r("AdsExternalImageInfoStore").get(t);
            if (n instanceof o("AdsImageIDClasses").AdsStickerImageID)
              return r("AdsStickerImageInfoStore").get(t);
            s(0, 1786);
          }),
          (n.__computeResult = function (t, n) {
            return n;
          }),
          (n.$AdsImageInfoStore$p_1 = function (t, n, o) {
            var e = this.getFullSize(t),
              a = this.getThumbnail(t),
              l = this.getIsSphericalPhoto(t),
              s = this.getVariants(t),
              u = this.getName(t);
            if (!e.hasValue()) return e;
            if (!a.hasValue()) return a;
            var c = e.getValueEnforcing(),
              d = a.getValueEnforcing(),
              m = l.hasValue() && l.getValueEnforcing(),
              p = { data: [] };
            s.hasValue() && (p = s.getValueEnforcing());
            var _ = u.hasValue() ? u.getValueEnforcing() : null;
            return r("LoadObject").withValue(
              new (r("AdsImageLegacy"))({
                crops: n,
                hash: t.getHash(),
                height: c.height,
                name: _ != null ? _ : void 0,
                platformImageObjects: o,
                url: c.url,
                url_128: d.displayImage.url,
                width: c.width,
                is_spherical_photo: m,
                variants: p,
              }),
              { creatorModuleID: i.id },
            );
          }),
          (n.$AdsImageInfoStore$p_2 = function (t, n, o) {
            var e = this.getFullSize(t),
              a = this.getThumbnail(t),
              l = this.getPreview(t);
            if (!e.hasValue()) return e;
            if (!a.hasValue()) return a;
            if (!l.hasValue()) return l;
            var s = e.getValueEnforcing(),
              u = l.getValueEnforcing(),
              c = a.getValueEnforcing();
            return r("LoadObject").withValue(
              new (r("AdsImageLegacy"))({
                crops: n,
                fullSizeHeight: s.height,
                fullSizeUrl: s.url,
                fullSizeWidth: s.width,
                height: c.realImage.height,
                platformImageObjects: o,
                previewHeight: u.height,
                previewUrl: u.url,
                previewWidth: u.width,
                stockImageID: t.getShutterstockImageID(),
                thumbHeight: c.displayImage.height,
                thumbWidth: c.displayImage.width,
                url: c.realImage.url,
                width: c.realImage.width,
              }),
              { creatorModuleID: i.id },
            );
          }),
          (n.$AdsImageInfoStore$p_3 = function (t, n, a) {
            var e = this.getFullSize(t),
              l = this.getThumbnail(t);
            if (!e.hasValue()) return e;
            if (!l.hasValue()) return l;
            var s = e.getValueEnforcing(),
              u = l.getValueEnforcing(),
              c =
                t instanceof o("AdsImageIDClasses").AdsBusinessImageID
                  ? t.getHash()
                  : null;
            return r("LoadObject").withValue(
              new (r("AdsImageLegacy"))({
                crops: n,
                height: s.height,
                hash: c,
                platformImageObjects: a,
                url: s.url,
                url_128: u.displayImage.url,
                width: s.width,
              }),
              { creatorModuleID: i.id },
            );
          }),
          (n.$AdsImageInfoStore$p_5 = function (t, n, o) {
            var e,
              a = this.getFullSize(t),
              l = this.getThumbnail(t);
            if (!a.hasValue()) return a;
            var s = a.getValueEnforcing(),
              u = l.getValue();
            return r("LoadObject").withValue(
              new (r("AdsImageLegacy"))({
                crops: n,
                height: s.height,
                platformImageObjects: o,
                url: s.url,
                url_128:
                  u == null || (e = u.displayImage) == null ? void 0 : e.url,
                width: s.width,
              }),
              { creatorModuleID: i.id },
            );
          }),
          (n.$AdsImageInfoStore$p_4 = function (t, n, o) {
            var e = this.getFullSize(t);
            if (!e.hasValue()) return e;
            var a = e.getValueEnforcing();
            return r("LoadObject").withValue(
              new (r("AdsImageLegacy"))({
                hash: t.getHash(),
                crops: n,
                height: a.height,
                platformImageObjects: o,
                url: a.url,
                width: a.width,
              }),
              { creatorModuleID: i.id },
            );
          }),
          t
        );
      })(o("AdsBaseImageInfoStore").AdsBaseImageInfoStore),
      c = new u(e || (e = r("AdsDataAtom")));
    l.default = c;
  },
  98,
);
