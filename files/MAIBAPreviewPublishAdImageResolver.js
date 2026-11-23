__d(
  "MAIBAPreviewPublishAdImageResolver",
  [
    "MAIBAPreviewPublishAdImageResolverQuery.graphql",
    "MAIBAPreviewPublishCreativeFormatter",
    "RelayHooks",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useState,
      m = 120,
      p = new Map(),
      _ = { isPending: !1, urls: p },
      f =
        e !== void 0
          ? e
          : (e = n("MAIBAPreviewPublishAdImageResolverQuery.graphql"));
    function g(e, t) {
      var n = o("RelayHooks").useRelayEnvironment(),
        r = e.slice(0, m).join(","),
        a = d({ key: "", urls: p }),
        i = a[0],
        l = a[1];
      if (
        (c(
          function () {
            if (!(t == null || t === "" || r === "")) {
              var e = !0;
              return (
                o("RelayHooks")
                  .fetchQuery(n, f, {
                    adAccountID: t,
                    imageHashes: r.split(","),
                  })
                  .toPromise()
                  .then(function (t) {
                    if (e) {
                      var n = new Map();
                      for (var o of (a =
                        t == null || (i = t.ad_account) == null
                          ? void 0
                          : i.adimages_from_hashes) != null
                        ? a
                        : []) {
                        var a,
                          i,
                          s = o == null ? void 0 : o.hash,
                          u = o == null ? void 0 : o.download_url;
                        s != null &&
                          s !== "" &&
                          u != null &&
                          u !== "" &&
                          n.set(s, u);
                      }
                      l({ key: r, urls: n });
                    }
                  })
                  .catch(function () {
                    e && l({ key: r, urls: p });
                  }),
                function () {
                  e = !1;
                }
              );
            }
          },
          [t, r, n],
        ),
        r === "")
      )
        return { isLoading: !1, slice: _ };
      var s = i.key !== r;
      return { isLoading: !1, slice: { isPending: s, urls: s ? p : i.urls } };
    }
    var h = {
        blocksTable: !1,
        collect: o("MAIBAPreviewPublishCreativeFormatter")
          .collectAllCreativeImageHashes,
        key: "ad_image_urls",
        useResolve: g,
      },
      y = h;
    l.default = y;
  },
  98,
);
