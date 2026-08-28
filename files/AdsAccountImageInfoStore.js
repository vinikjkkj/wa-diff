__d(
  "AdsAccountImageInfoStore",
  [
    "invariant",
    "AdsBaseImageInfoStore",
    "AdsDataAtom",
    "AdsImageDimensionProvider",
    "AdsImageIDClasses",
    "AdsImageInfoUtils",
    "AdsImageStore",
    "AdsLoadState_LEGACY",
    "LoadObject",
    "err",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = r("AdsImageDimensionProvider").toFluxStore(),
      c = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getStores = function () {
            return [u, r("AdsImageStore")];
          }),
          (n.__getData = function (t) {
            var e = o("AdsBaseImageInfoStore")._getImageInfoQueryFromCacheKey(
                t,
              ),
              n = e.imageID,
              a = e.queryType;
            n instanceof o("AdsImageIDClasses").AdsAccountImageID || s(0, 2382);
            var l = n.getAccountID(),
              u = n.getHash();
            if (a === o("AdsImageInfoUtils").QueryTypes.PREVIEW)
              return r("LoadObject").empty({ creatorModuleID: i.id });
            var c = r("AdsImageStore").getOneFor(l, u),
              d = typeof c == "string" ? c : c.loadState,
              m = typeof c != "string" ? c : null;
            if (d === r("AdsLoadState_LEGACY").LOADING)
              return r("LoadObject").loading({ creatorModuleID: i.id });
            if (d !== r("AdsLoadState_LEGACY").LOADED)
              return r("LoadObject")
                .empty({ creatorModuleID: i.id })
                .setError(
                  r("err")(
                    "Cannot load image data for accountID: " +
                      l +
                      ", hash: " +
                      u,
                  ),
                );
            switch ((m || s(0, 2383), a)) {
              case o("AdsImageInfoUtils").QueryTypes.FULL_SIZE:
                var p = m.height,
                  _ = m.url,
                  f = m.width;
                return r("LoadObject").withValue(
                  new (o("AdsImageInfoUtils").InternalImage)({
                    url: _,
                    width: f,
                    height: p,
                  }),
                  { creatorModuleID: i.id },
                );
              case o("AdsImageInfoUtils").QueryTypes.FULL_SIZE_URL:
                return r("LoadObject").withValue(
                  new (o("AdsImageInfoUtils").InternalImage)({ url: m.url }),
                  { creatorModuleID: i.id },
                );
              case o("AdsImageInfoUtils").QueryTypes.NAME:
                var g = m.name;
                return this.$AdsAccountImageInfoStore$p_1(!g, { name: g });
              case o("AdsImageInfoUtils").QueryTypes.THUMBNAIL:
                var h = m.url_128;
                return h
                  ? this.$AdsAccountImageInfoStore$p_2(h, null, null)
                  : r("LoadObject").empty({ creatorModuleID: i.id });
              case o("AdsImageInfoUtils").QueryTypes.THUMBNAIL_URL:
                return r("LoadObject").withValue(
                  new (o("AdsImageInfoUtils").InternalImage)({
                    url: m.url_128,
                  }),
                  { creatorModuleID: i.id },
                );
              case o("AdsImageInfoUtils").QueryTypes.HIGH_RES_THUMBNAIL:
                var y = m.url_256,
                  C = m.url_256_height,
                  b = m.url_256_width;
                return y
                  ? this.$AdsAccountImageInfoStore$p_2(y, b, C)
                  : r("LoadObject").empty({ creatorModuleID: i.id });
              case o("AdsImageInfoUtils").QueryTypes.HIGH_RES_THUMBNAIL_URL:
                return this.$AdsAccountImageInfoStore$p_1(!m.url_256, {
                  url: m.url_256,
                });
              case o("AdsImageInfoUtils").QueryTypes.IS_SPHERICAL_PHOTO:
                return m.is_spherical_photo
                  ? r("LoadObject").withValue(
                      new (o("AdsImageInfoUtils").InternalImage)({
                        isSphericalPhoto: m.is_spherical_photo,
                      }),
                      { creatorModuleID: i.id },
                    )
                  : r("LoadObject").empty({ creatorModuleID: i.id });
              case o("AdsImageInfoUtils").QueryTypes.VARIANTS:
                return this.$AdsAccountImageInfoStore$p_1(!m.variants, {
                  variants: m.variants,
                });
              case o("AdsImageInfoUtils").QueryTypes.ADS_INTEGRITY_REVIEW_INFO:
                return this.$AdsAccountImageInfoStore$p_1(
                  !m.ads_integrity_review_info,
                  { ads_integrity_review_info: m.ads_integrity_review_info },
                );
              case o("AdsImageInfoUtils").QueryTypes.AES_RATING:
                return this.$AdsAccountImageInfoStore$p_1(
                  m.aes_rating == null,
                  { aes_rating: m.aes_rating },
                );
              case o("AdsImageInfoUtils").QueryTypes.AES_BALANCE_ELEMENTS:
                return this.$AdsAccountImageInfoStore$p_1(
                  m.aes_balance_elements == null,
                  { aes_balance_elements: m.aes_balance_elements },
                );
              case o("AdsImageInfoUtils").QueryTypes.AES_ROT:
                return this.$AdsAccountImageInfoStore$p_1(m.aes_rot == null, {
                  aes_rot: m.aes_rot,
                });
            }
            s(0, 2384);
          }),
          (n.__computeResult = function (t, n) {
            return n;
          }),
          (n.$AdsAccountImageInfoStore$p_1 = function (t, n) {
            return t
              ? r("LoadObject").empty({ creatorModuleID: i.id })
              : r("LoadObject").withValue(
                  new (o("AdsImageInfoUtils").InternalImage)(n),
                  { creatorModuleID: i.id },
                );
          }),
          (n.$AdsAccountImageInfoStore$p_2 = function (t, n, a) {
            var e = u.getState().get(t);
            if (!e.hasValue()) return e;
            var l = e.getValueEnforcing(),
              s = l.height,
              c = l.width;
            return r("LoadObject").withValue(
              new (o("AdsImageInfoUtils").InternalImage)({
                displayHeight: r("isTruthy")(a) ? a : s,
                displayWidth: r("isTruthy")(n) ? n : c,
                realHeight: s,
                realWidth: c,
                url: t,
              }),
              { creatorModuleID: i.id },
            );
          }),
          t
        );
      })(o("AdsBaseImageInfoStore").AdsBaseImageInfoStore),
      d = new c(e || (e = r("AdsDataAtom")));
    l.default = d;
  },
  98,
);
