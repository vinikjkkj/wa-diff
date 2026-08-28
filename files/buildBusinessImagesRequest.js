__d(
  "buildBusinessImagesRequest",
  ["AdsGraphAPI", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 25,
      s = [
        "id",
        "height",
        "hash",
        "url",
        "url_128",
        "width",
        "name",
        "ads_integrity_review_info",
      ];
    function u(t, n) {
      var a = t.adAccountID,
        i = t.businessID,
        l = t.folderID,
        u = t.hasIntegrityViolation,
        c = t.maxAspectRatio,
        d = t.minAspectRatio,
        m = t.minHeight,
        p = t.minWidth,
        _ = t.pageLimit,
        f = t.sortBy,
        g = t.title,
        h = [];
      (g != null &&
        g != "" &&
        h.push({ field: "name", operator: "CONTAIN", value: g }),
        m && h.push({ field: "height", operator: "GREATER_THAN", value: m }),
        p && h.push({ field: "width", operator: "GREATER_THAN", value: p }),
        d != null &&
          c != null &&
          h.push({
            field: "aspect_ratio",
            operator: "IN_RANGE",
            value: [d, c],
          }),
        u != null &&
          h.push({
            field: "has_integrity_violation",
            operator: "EQUAL",
            value: u,
          }));
      var y = {
          sort: r("isTruthy")(f) ? f : void 0,
          creative_folder_id: r("isTruthy")(l) ? l : void 0,
        },
        C = _ != null ? _ : e,
        b = babelHelpers.extends(
          {
            ad_account_id: a,
            fields: s,
            filtering: h,
            has_integrity_violation: u,
            limit: C,
            type: "uploaded",
            after: n,
          },
          y,
        );
      return o("AdsGraphAPI")
        .get("AdsBusinessImageSourceDataLoader")
        .object("business", i)
        .edge("images")
        .batched()
        .declareOnly()
        .get(b);
    }
    l.default = u;
  },
  98,
);
