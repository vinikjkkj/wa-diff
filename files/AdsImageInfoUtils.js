__d(
  "AdsImageInfoUtils",
  ["AdsImageIDClasses", "Cache", "immutable", "keyMirror"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "-query-type-",
      s = r("immutable").Record({
        aes_rating: null,
        aes_balance_elements: null,
        aes_rot: null,
        displayHeight: null,
        displayWidth: null,
        height: null,
        name: null,
        realHeight: null,
        realWidth: null,
        url: null,
        width: null,
        isSphericalPhoto: null,
        variants: null,
        ads_integrity_review_info: null,
      }),
      u = r("keyMirror")({
        AES_RATING: null,
        AES_BALANCE_ELEMENTS: null,
        AES_ROT: null,
        FULL_SIZE: null,
        FULL_SIZE_URL: null,
        NAME: null,
        PREVIEW: null,
        THUMBNAIL: null,
        THUMBNAIL_URL: null,
        HIGH_RES_THUMBNAIL: null,
        HIGH_RES_THUMBNAIL_URL: null,
        IS_SPHERICAL_PHOTO: null,
        VARIANTS: null,
        ADS_INTEGRITY_REVIEW_INFO: null,
      }),
      c = new (r("Cache"))();
    function d(t, n) {
      var r = "" + t.getSignature() + e + n;
      return (c.set(r, { imageID: t, queryType: n }), r);
    }
    function m(t) {
      var n = c.get(t);
      if (n != null) return n;
      var r = t.split(e),
        a = r[0],
        i = r[1];
      return {
        queryType: i,
        imageID: o("AdsImageIDClasses").AdsImageID.fromSignature(a),
      };
    }
    ((l.InternalImage = s),
      (l.QueryTypes = u),
      (l.convertQueryToCacheKey = d),
      (l.convertCacheKeyToQuery = m));
  },
  98,
);
