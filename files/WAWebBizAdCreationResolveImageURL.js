__d(
  "WAWebBizAdCreationResolveImageURL",
  [
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationResolveImageURLQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationResolveImageURLQuery.graphql"));
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a,
            i = yield o("CometRelay")
              .fetchQuery(e, s, { legacyAdAccountID: t, imageHash: n })
              .toPromise(),
            l =
              i == null || (a = i.lwi) == null ? void 0 : a.image_url_from_hash;
          if (l == null)
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "resolveImageURLFromHash: null URL for hash " + n,
            );
          return l;
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
