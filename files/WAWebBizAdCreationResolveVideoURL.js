__d(
  "WAWebBizAdCreationResolveVideoURL",
  [
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationResolveVideoURLQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationResolveVideoURLQuery.graphql"));
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = yield o("CometRelay")
              .fetchQuery(e, s, { videoID: t })
              .toPromise(),
            i =
              a == null || (n = a.fetch__Video) == null
                ? void 0
                : n.playable_url;
          if (i == null)
            throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
              "resolveVideoURL: null playable_url for video " + t,
            );
          return i;
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
