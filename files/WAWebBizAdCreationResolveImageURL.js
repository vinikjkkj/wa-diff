__d(
  "WAWebBizAdCreationResolveImageURL",
  ["CometRelay", "FBLogger", "WAWebBizAdCreationResolveImageURLQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationResolveImageURLQuery.graphql"));
    async function u(e, t, n) {
      var a,
        i = await o("CometRelay")
          .fetchQuery(e, s, { imageHash: n, legacyAdAccountID: t })
          .toPromise(),
        l = i == null || (a = i.lwi) == null ? void 0 : a.image_url_from_hash;
      if (l == null)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "resolveImageURLFromHash: null URL for hash " + n,
        );
      return l;
    }
    l.default = u;
  },
  98,
);
