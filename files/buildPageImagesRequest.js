__d(
  "buildPageImagesRequest",
  ["AdsGraphAPI", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 25,
      s = ["largest_image", "picture", "id", "ads_integrity_review_info"];
    function u(t, n) {
      var a = t.adAccountID,
        i = t.hasIntegrityViolation,
        l = t.maxAspectRatio,
        u = t.minAspectRatio,
        c = t.minHeight,
        d = t.minWidth,
        m = t.pageID,
        p = t.pageLimit,
        _ = t.sortBy,
        f = t.title,
        g = [];
      (f != null &&
        f != "" &&
        g.push({ field: "name", operator: "CONTAIN", value: f }),
        c && g.push({ field: "height", operator: "GREATER_THAN", value: c }),
        d && g.push({ field: "width", operator: "GREATER_THAN", value: d }),
        u != null &&
          l != null &&
          g.push({
            field: "aspect_ratio",
            operator: "IN_RANGE",
            value: [u, l],
          }),
        i != null &&
          g.push({
            field: "has_integrity_violation",
            operator: "EQUAL",
            value: i,
          }));
      var h = r("isTruthy")(_) ? { sort: _ } : null,
        y = p != null ? p : e,
        C = babelHelpers.extends(
          {
            ad_account_id: a,
            fields: s,
            filtering: g,
            limit: y,
            type: "uploaded",
            after: n,
          },
          h,
        );
      return o("AdsGraphAPI")
        .get("AdsPageImageListDataLoader")
        .object("page", m)
        .edge("photos")
        .declareOnly()
        .get(C);
    }
    l.default = u;
  },
  98,
);
