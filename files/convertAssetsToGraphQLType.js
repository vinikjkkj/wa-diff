__d(
  "convertAssetsToGraphQLType",
  ["XFBMAIBAAssetTypeUtils.facebook"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e
        .map(function (e) {
          var t = o("XFBMAIBAAssetTypeUtils.facebook").fromJSEnum(e.type);
          if (t == null) return null;
          var n = e.payload;
          return {
            additional_payload: n == null ? null : JSON.stringify(n),
            asset_id: e.id,
            asset_name: e.name,
            asset_type: t,
          };
        })
        .filter(Boolean);
    }
    l.default = e;
  },
  98,
);
