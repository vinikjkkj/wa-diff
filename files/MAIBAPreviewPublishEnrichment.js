__d(
  "MAIBAPreviewPublishEnrichment",
  [
    "MAIBAPreviewPublishAdImageResolver",
    "MAIBAPreviewPublishCurrencyResolver",
    "MAIBAPreviewPublishEntityNameResolver",
    "MAIBAPreviewPublishPixelNameResolver",
    "MAIBAPreviewPublishTargetingResolver",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo,
      u = {
        adAccountCurrency: r("MAIBAPreviewPublishCurrencyResolver"),
        adImageUrls: r("MAIBAPreviewPublishAdImageResolver"),
        entityNames: r("MAIBAPreviewPublishEntityNameResolver"),
        pixelNames: r("MAIBAPreviewPublishPixelNameResolver"),
        targetingNames: r("MAIBAPreviewPublishTargetingResolver"),
      };
    function c(e, t) {
      var n = s(
          function () {
            return u.targetingNames.collect(e);
          },
          [e],
        ),
        r = u.targetingNames.useResolve(n, t),
        o = s(
          function () {
            return u.adAccountCurrency.collect(e);
          },
          [e],
        ),
        a = u.adAccountCurrency.useResolve(o, t),
        i = s(
          function () {
            return u.adImageUrls.collect(e);
          },
          [e],
        ),
        l = u.adImageUrls.useResolve(i, t),
        c = s(
          function () {
            return u.pixelNames.collect(e);
          },
          [e],
        ),
        d = u.pixelNames.useResolve(c, t),
        m = s(
          function () {
            return u.entityNames.collect(e);
          },
          [e],
        ),
        p = u.entityNames.useResolve(m, t),
        _ =
          (u.targetingNames.blocksTable && r.isLoading) ||
          (u.adAccountCurrency.blocksTable && a.isLoading) ||
          (u.adImageUrls.blocksTable && l.isLoading) ||
          (u.pixelNames.blocksTable && d.isLoading) ||
          (u.entityNames.blocksTable && p.isLoading),
        f =
          (u.targetingNames.blocksTable && r.hasError === !0) ||
          (u.adAccountCurrency.blocksTable && a.hasError === !0) ||
          (u.adImageUrls.blocksTable && l.hasError === !0) ||
          (u.pixelNames.blocksTable && d.hasError === !0) ||
          (u.entityNames.blocksTable && p.hasError === !0),
        g = s(
          function () {
            return {
              accountID: t,
              currency: a.slice,
              entityNames: p.slice,
              imageUrls: l.slice.urls,
              imageUrlsPending: l.slice.isPending,
              names: r.slice,
              pixelNames: d.slice,
            };
          },
          [t, a.slice, l.slice, p.slice, d.slice, r.slice],
        );
      return { context: g, hasError: f, isLoading: _ };
    }
    l.usePreviewPublishEnrichment = c;
  },
  98,
);
