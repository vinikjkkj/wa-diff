__d(
  "AdsExternalImageInfoStore",
  [
    "invariant",
    "AdsBaseImageInfoStore",
    "AdsDataAtom",
    "AdsImageDimensionProvider",
    "AdsImageIDClasses",
    "AdsImageInfoUtils",
    "AdsInstagramAccountMediaListRIStore",
    "AdsPageImageInfoStore",
    "LoadObject",
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
            return [
              r("AdsPageImageInfoStore"),
              u,
              r("AdsInstagramAccountMediaListRIStore"),
            ];
          }),
          (n.__getData = function (t) {
            var e,
              n,
              a = o("AdsBaseImageInfoStore")._getImageInfoQueryFromCacheKey(t),
              l = a.imageID,
              u = a.queryType;
            l instanceof o("AdsImageIDClasses").AdsExternalImageID ||
              s(0, 3522);
            var c = r("AdsInstagramAccountMediaListRIStore").getAllImageData();
            if (r("AdsPageImageInfoStore").hasCacheForImageID(l))
              return r("AdsPageImageInfoStore").getByQuery(l, u);
            var d = l.getUrl(),
              m = null;
            switch (u) {
              case o("AdsImageInfoUtils").QueryTypes.FULL_SIZE:
                return this.$AdsExternalImageInfoStore$p_1(d);
              case o("AdsImageInfoUtils").QueryTypes.FULL_SIZE_URL:
              case o("AdsImageInfoUtils").QueryTypes.HIGH_RES_THUMBNAIL_URL:
                return r("LoadObject").withValue(
                  new (o("AdsImageInfoUtils").InternalImage)({ url: d }),
                  { creatorModuleID: i.id },
                );
              case o("AdsImageInfoUtils").QueryTypes.THUMBNAIL_URL:
                var p =
                  c == null || (e = c.get(l)) == null
                    ? void 0
                    : e.thumbnail_url;
                return p == null || p === ""
                  ? r("LoadObject").empty({ creatorModuleID: i.id })
                  : r("LoadObject").withValue(
                      new (o("AdsImageInfoUtils").InternalImage)({ url: p }),
                      { creatorModuleID: i.id },
                    );
              case o("AdsImageInfoUtils").QueryTypes.ADS_INTEGRITY_REVIEW_INFO:
                return (
                  (m =
                    c == null || (n = c.get(l)) == null
                      ? void 0
                      : n.ads_integrity_review_info),
                  m
                    ? r("LoadObject").withValue(
                        new (o("AdsImageInfoUtils").InternalImage)({
                          ads_integrity_review_info: m,
                        }),
                        { creatorModuleID: i.id },
                      )
                    : r("LoadObject").empty({ creatorModuleID: i.id })
                );
              case o("AdsImageInfoUtils").QueryTypes.NAME:
              case o("AdsImageInfoUtils").QueryTypes.PREVIEW:
              case o("AdsImageInfoUtils").QueryTypes.THUMBNAIL:
              case o("AdsImageInfoUtils").QueryTypes.IS_SPHERICAL_PHOTO:
              case o("AdsImageInfoUtils").QueryTypes.AES_RATING:
              case o("AdsImageInfoUtils").QueryTypes.AES_BALANCE_ELEMENTS:
              case o("AdsImageInfoUtils").QueryTypes.AES_ROT:
                return r("LoadObject").empty({ creatorModuleID: i.id });
            }
            s(0, 2384);
          }),
          (n.__computeResult = function (t, n) {
            return n;
          }),
          (n.$AdsExternalImageInfoStore$p_1 = function (t) {
            var e = u.getState().get(t);
            if (!e.hasValue()) return e;
            var n = e.getValueEnforcing(),
              a = n.height,
              l = n.width;
            return r("LoadObject").withValue(
              new (o("AdsImageInfoUtils").InternalImage)({
                height: a,
                url: t,
                width: l,
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
