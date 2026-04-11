__d(
  "WAWebBizAdCreationResolveVideoThumbnailURL",
  [
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationResolveVideoThumbnailURLQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationResolveVideoThumbnailURLQuery.graphql"));
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
              a == null ||
              (n = a.fetch__Video) == null ||
              (n = n.preferred_thumbnail) == null ||
              (n = n.image) == null
                ? void 0
                : n.uri;
          return (
            i == null &&
              r("FBLogger")("wa_ctwa_web").warn(
                "resolveVideoThumbnailURL: null thumbnail for video " + t,
              ),
            i
          );
        })),
        c.apply(this, arguments)
      );
    }
    l.default = u;
  },
  98,
);
