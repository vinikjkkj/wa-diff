__d(
  "adsMessengerDataModelGetProductInfo",
  [
    "AdsImageIDUtils",
    "AdsMessengerJSONPaths",
    "adsMessengerDataModelSetProductInfo",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return {
        name: (t = r("getByPath"))(
          e,
          (n = r("AdsMessengerJSONPaths")).PRODUCT_INFO.NAME,
        ),
        price: t(e, n.PRODUCT_INFO.PRICE),
        description: t(e, n.PRODUCT_INFO.DESCRIPTION),
        image_hash: t(e, n.PRODUCT_INFO.IMAGE_HASH),
      };
    }
    function s(e, t) {
      switch (t) {
        case o("adsMessengerDataModelSetProductInfo").ProductInfoField.Name:
          return r("getByPath")(
            e,
            r("AdsMessengerJSONPaths").PRODUCT_INFO.NAME,
          );
        case o("adsMessengerDataModelSetProductInfo").ProductInfoField.Price:
          return r("getByPath")(
            e,
            r("AdsMessengerJSONPaths").PRODUCT_INFO.PRICE,
          );
        case o("adsMessengerDataModelSetProductInfo").ProductInfoField
          .Description:
          return r("getByPath")(
            e,
            r("AdsMessengerJSONPaths").PRODUCT_INFO.DESCRIPTION,
          );
        case o("adsMessengerDataModelSetProductInfo").ProductInfoField.Image:
          return r("getByPath")(
            e,
            r("AdsMessengerJSONPaths").PRODUCT_INFO.IMAGE_HASH,
          );
      }
    }
    function u(e) {
      if (e == null || e === "") return null;
      var t = e && e.split(":"),
        n = t && t[0],
        r = t && t[1];
      return !r || !n
        ? null
        : ((n = n.trim()),
          (r = r.trim()),
          o("AdsImageIDUtils").getImageID({ accountID: n, hash: r }));
    }
    ((l.adsMessengerDataModelGetProductInfo = e),
      (l.adsMessengerDataModelGetProductInfoField = s),
      (l.convertImageHashToImageId = u));
  },
  98,
);
