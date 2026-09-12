__d(
  "WAWebBizAdCreationCatalogMediaResolve",
  [
    "FBLogger",
    "WAWebBizAdCreationCatalogMediaResolveMutation.graphql",
    "WAWebBizAdCreationLWIMediaHelpers",
    "WAWebFetchAdAccountToken",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationCatalogMediaResolveMutation.graphql"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = [];
          for (var i of e) {
            var l = i.entImageId;
            l != null && a.push({ ent_image_id: l, product_id: i.productId });
          }
          if (a.length === 0) return [];
          var u = yield o("WAWebFetchAdAccountToken").fetchToken();
          if (u.type !== "success")
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "Failed to fetch token for catalog media resolve",
            );
          var c = yield o("WAWebRelayClient").commitMutation(
              s,
              {
                ad_account_id: t,
                fb_access_token: o(
                  "WAWebBizAdCreationLWIMediaHelpers",
                ).getFBAccessTokenValue(),
                items: a,
              },
              { accessToken: u.token, environmentType: "facebook" },
            ),
            d =
              c == null || (n = c.wa_ad_creation_catalog_media_resolve) == null
                ? void 0
                : n.resolved_media_data;
          if (d == null || d.length !== a.length)
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "Catalog media resolve failed",
            );
          return d.map(function (e) {
            var t = e.hash,
              n = e.type,
              a = e.url;
            if (a == null || n == null || t == null)
              throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
                "Catalog media resolve returned media without a url, type, or hash",
              );
            return {
              hash: t,
              type: o("WAWebBizAdCreationLWIMediaHelpers").coerceToAdMediaType(
                n,
              ),
              url: a,
              videoId: e.video_id,
            };
          });
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
