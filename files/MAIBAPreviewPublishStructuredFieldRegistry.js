__d(
  "MAIBAPreviewPublishStructuredFieldRegistry",
  ["maibaParseJSONWithBigInts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map([
      ["bid_adjustments", { rootArrayMode: "unordered_leaf_multiset" }],
      ["bid_constraints", {}],
      ["frequency_control_specs", { rootArrayMode: "unordered_leaf_multiset" }],
      [
        "placement_soft_opt_out",
        { objectMode: "symmetric", orderInsensitiveArrays: !0 },
      ],
      ["promoted_object", {}],
      ["regional_regulation_identities", { objectMode: "symmetric" }],
      ["time_based_ad_rotation_id_blocks", {}],
      ["time_based_ad_rotation_intervals", {}],
    ]);
    function s(e) {
      if (typeof e != "string") return e;
      try {
        return r("maibaParseJSONWithBigInts")(e);
      } catch (t) {
        return e;
      }
    }
    function u(t) {
      return e.has(t);
    }
    function c(e) {
      return s(e);
    }
    function d(t) {
      var n,
        r = e.get(t);
      return {
        getArrayMode: function (t) {
          return (r == null ? void 0 : r.orderInsensitiveArrays) === !0
            ? "unordered_full_list"
            : t.length === 0 && (r == null ? void 0 : r.rootArrayMode) != null
              ? r.rootArrayMode
              : "ordered";
        },
        objectMode:
          (n = r == null ? void 0 : r.objectMode) != null ? n : "after_keys",
      };
    }
    ((l.isPreviewPublishStructuredField = u),
      (l.decodePreviewPublishStructuredFieldSide = c),
      (l.getPreviewPublishStructuredDiffOptions = d));
  },
  98,
);
