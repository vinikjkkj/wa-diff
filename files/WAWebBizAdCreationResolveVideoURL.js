__d(
  "WAWebBizAdCreationResolveVideoURL",
  ["CometRelay", "FBLogger", "WAWebBizAdCreationResolveVideoURLQuery.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationResolveVideoURLQuery.graphql"));
    async function u(e, t) {
      var n,
        a = await o("CometRelay").fetchQuery(e, s, { videoID: t }).toPromise(),
        i = a == null || (n = a.fetch__Video) == null ? void 0 : n.playable_url;
      if (i == null)
        throw r("FBLogger")("wa_ctwa_web").mustfixThrow(
          "resolveVideoURL: null playable_url for video " + t,
        );
      return i;
    }
    l.default = u;
  },
  98,
);
