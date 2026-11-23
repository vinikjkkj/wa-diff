__d(
  "WAWebBizAdCreationResolveVideoThumbnailURL",
  [
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationResolveVideoThumbnailURLQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationResolveVideoThumbnailURLQuery.graphql"));
    async function u(e, t) {
      var n,
        a = await o("CometRelay").fetchQuery(e, s, { videoID: t }).toPromise(),
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
    }
    l.default = u;
  },
  98,
);
