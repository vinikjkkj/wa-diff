__d(
  "adsGetCustomAudienceRelationToProductAudience",
  ["CustomAudienceRelationToProductAudience", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        o,
        a = e.id,
        i = e.targeting,
        l =
          i.product_audience_specs != null && i.product_audience_specs.size > 0,
        s = i.custom_audiences != null && i.custom_audiences.size > 0,
        u = i.flexible_spec,
        c =
          (n =
            u == null
              ? void 0
              : u
                  .map(function (e, t) {
                    var n = e.get("product_audience_specs");
                    return n == null || n.size == 0 ? null : t;
                  })
                  .filter(function (e) {
                    return e != null;
                  })
                  .toArray()) != null
            ? n
            : [],
        d =
          (o =
            u == null
              ? void 0
              : u
                  .map(function (e, t) {
                    var n = e.get("custom_audiences");
                    return n == null || n.size == 0 ? null : t;
                  })
                  .filter(function (e) {
                    return e != null;
                  })
                  .toArray()) != null
            ? o
            : [];
      if (l && c.length > 0)
        return (
          r("FBLogger")("dpa_dfca_union").mustfix(
            "Encountered product audiences both outside and inside flexible spec for campaign %s which is not supported by the API",
            a,
          ),
          r("CustomAudienceRelationToProductAudience").NOT_SUPPORTED
        );
      if (s && d.length > 0)
        return (
          r("FBLogger")("dpa_dfca_union").mustfix(
            "Encountered custom audiences both outside and inside flexible spec for campaign %s which is not supported by the API",
            a,
          ),
          r("CustomAudienceRelationToProductAudience").NOT_SUPPORTED
        );
      if (c.length > 1 || d.length > 1)
        return r("CustomAudienceRelationToProductAudience").NOT_SUPPORTED;
      var m = l || c.length > 0,
        p = s || d.length > 0;
      return !m || !p
        ? t.get(a, r("CustomAudienceRelationToProductAudience").UNION)
        : l || s
          ? r("CustomAudienceRelationToProductAudience").INTERSECTION
          : c[0] == d[0]
            ? r("CustomAudienceRelationToProductAudience").UNION
            : r("CustomAudienceRelationToProductAudience").INTERSECTION;
    }
    l.default = e;
  },
  98,
);
